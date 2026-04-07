import { NextRequest, NextResponse } from 'next/server';
import { supabaseSelect, supabaseUpsert } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, email, sectionKey, response, completionPercent = 0, isSubmitted = false } = body;

    let resolvedOrderId = orderId;
    if (!resolvedOrderId && email) {
      const rows = await supabaseSelect('capability_diagnostic_orders', `?select=id,email,status&email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=1`);
      resolvedOrderId = rows?.[0]?.id;
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

    await supabaseUpsert('capability_diagnostic_orders', {
      id: resolvedOrderId,
      status: isSubmitted ? 'intake_complete' : 'intake_started',
      updated_at: new Date().toISOString(),
    }, 'id');

    return NextResponse.json({ ok: true, response: Array.isArray(responseRows) ? responseRows[0] : null, orderId: resolvedOrderId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save intake' }, { status: 500 });
  }
}
