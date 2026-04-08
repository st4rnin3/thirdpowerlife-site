import { NextRequest, NextResponse } from 'next/server';
import { supabaseSelect } from '@/lib/supabase-admin';

export async function GET(req: NextRequest) {
  try {
    const orderId = req.nextUrl.searchParams.get('orderId');
    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
    }

    const rows = await supabaseSelect(
      'capability_diagnostic_responses',
      `?select=section_key,response_json,completion_percent,is_submitted,updated_at&order_id=eq.${encodeURIComponent(orderId)}&order=updated_at.asc`
    );

    return NextResponse.json({ responses: rows || [] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch responses' }, { status: 500 });
  }
}
