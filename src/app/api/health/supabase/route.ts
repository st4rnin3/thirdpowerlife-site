import { NextResponse } from 'next/server';
import { supabaseSelect } from '@/lib/supabase-admin';

export async function GET() {
  try {
    const rows = await supabaseSelect(
      'capability_diagnostic_orders',
      '?select=id&limit=1'
    );

    return NextResponse.json({
      ok: true,
      checkedAt: new Date().toISOString(),
      rows: Array.isArray(rows) ? rows.length : 0,
    });
  } catch (error) {
    console.error('supabase healthcheck failed', error);
    return NextResponse.json(
      {
        ok: false,
        checkedAt: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'healthcheck failed',
      },
      { status: 500 }
    );
  }
}
