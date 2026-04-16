import { NextRequest, NextResponse } from 'next/server';
import { supabaseInsert, supabaseSelect, supabaseUpdate, supabaseUpsert } from '@/lib/supabase-admin';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, email, sectionKey, response, completionPercent = 0, isSubmitted = false } = body;

    let resolvedOrderId = orderId;
    if (!resolvedOrderId && email) {
      const rows = await supabaseSelect('capability_diagnostic_orders', `?select=id,email,status&email=eq.${encodeURIComponent(email)}&product_slug=eq.ai-capability-gap-diagnostic&order=created_at.desc&limit=1`).catch(() => []);
      resolvedOrderId = rows?.[0]?.id;
    }

    if (!resolvedOrderId && email) {
      const createdRows = await supabaseInsert('capability_diagnostic_orders', {
        email,
        product_slug: 'ai-capability-gap-diagnostic',
        status: isSubmitted ? 'intake_complete' : 'intake_started',
        updated_at: new Date().toISOString(),
      });
      resolvedOrderId = createdRows?.[0]?.id;
    }

    if (!resolvedOrderId) {
      return NextResponse.json({ error: 'No matching order found' }, { status: 400 });
    }

    const responsePayload = {
      order_id: resolvedOrderId,
      section_key: sectionKey,
      response_json: response,
      completion_percent: completionPercent,
      is_submitted: isSubmitted,
      updated_at: new Date().toISOString(),
    };

    const responseRows = await supabaseUpsert('capability_diagnostic_responses', responsePayload, 'order_id,section_key');

    await supabaseUpdate('capability_diagnostic_orders', {
      id: resolvedOrderId,
    }, {
      status: isSubmitted ? 'intake_complete' : 'intake_started',
      updated_at: new Date().toISOString(),
    });

    if (isSubmitted && email && process.env.RESEND_API_KEY) {
      const allResponses = await supabaseSelect(
        'capability_diagnostic_responses',
        `?select=section_key,response_json,updated_at&order_id=eq.${encodeURIComponent(resolvedOrderId)}&order=updated_at.asc`
      );

      const summaryHtml = (allResponses || [])
        .map((row: { section_key: string; response_json?: { answers?: string[] } }) => {
          const answers = row.response_json?.answers || [];
          const list = answers.map((a: string) => `<li>${escapeHtml(a || '')}</li>`).join('');
          return `<h3 style="margin:16px 0 8px;">${escapeHtml(row.section_key)}</h3><ul>${list}</ul>`;
        })
        .join('');

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Third Power Life <contact@thirdpowerlife.ai>',
          to: ['info@ThirdPowerPerformance.com'],
          subject: `Diagnostic intake complete — ${email}`,
          html: `<h2>AI Capability Gap Diagnostic Intake Complete</h2><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Order ID:</strong> ${escapeHtml(resolvedOrderId)}</p>${summaryHtml}`,
          reply_to: email,
        }),
      });

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Third Power Life <contact@thirdpowerlife.ai>',
          to: [email],
          subject: 'We received your AI Capability Gap Diagnostic intake',
          html: `<h2>Thanks — your intake is complete.</h2><p>We received your AI Capability Gap Diagnostic responses.</p><p>Your 48-hour turnaround is now in motion.</p><p>Summary of your submission:</p>${summaryHtml}<p>Next step: book your 20-minute review call here: <a href="https://www.thirdpowerlife.ai/schedule">https://www.thirdpowerlife.ai/schedule</a></p>`,
        }),
      });
    }

    return NextResponse.json({ ok: true, response: Array.isArray(responseRows) ? responseRows[0] : null, orderId: resolvedOrderId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save intake' }, { status: 500 });
  }
}
