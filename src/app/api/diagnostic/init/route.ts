import { NextRequest, NextResponse } from 'next/server';
import getStripeClient from '@/lib/stripe';
import { supabaseUpsert } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer_details', 'customer'],
    });

    const email = session.customer_details?.email || session.customer_email;
    if (!email) {
      return NextResponse.json({ error: 'No customer email on checkout session' }, { status: 400 });
    }

    const payload = {
      stripe_checkout_session_id: session.id,
      stripe_customer_id: typeof session.customer === 'string' ? session.customer : session.customer?.id || null,
      email,
      full_name: session.customer_details?.name || null,
      phone: session.customer_details?.phone || null,
      product_slug: 'ai-capability-gap-diagnostic',
      price_paid_cents: session.amount_total || 19700,
      status: 'paid',
      updated_at: new Date().toISOString(),
    };

    const rows = await supabaseUpsert('capability_diagnostic_orders', payload, 'stripe_checkout_session_id');
    const order = Array.isArray(rows) ? rows[0] : null;

    return NextResponse.json({ ok: true, order });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to initialize diagnostic order' }, { status: 500 });
  }
}
