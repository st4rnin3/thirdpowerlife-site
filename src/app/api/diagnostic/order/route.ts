import { NextRequest, NextResponse } from 'next/server';
import { supabaseSelect } from '@/lib/supabase-admin';

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get('email');
    const orderId = req.nextUrl.searchParams.get('orderId');

    let rows;
    if (orderId) {
      rows = await supabaseSelect('capability_diagnostic_orders', `?select=*&id=eq.${encodeURIComponent(orderId)}&limit=1`);
    } else if (email) {
      rows = await supabaseSelect('capability_diagnostic_orders', `?select=*&email=eq.${encodeURIComponent(email)}&product_slug=eq.ai-capability-gap-diagnostic&order=created_at.desc&limit=1`);
    } else {
      return NextResponse.json({ error: 'Missing email or orderId' }, { status: 400 });
    }

    return NextResponse.json({ order: rows?.[0] || null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 });
  }
}
