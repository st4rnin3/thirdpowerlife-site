import { supabaseSelect } from '@/lib/supabase-admin';

export const dynamic = 'force-dynamic';

type DiagnosticOrder = {
  id: string;
  email: string;
  full_name: string | null;
  status: string;
  created_at: string;
  stripe_checkout_session_id: string | null;
};

type DiagnosticResponse = {
  order_id: string;
  section_key: string;
  is_submitted: boolean;
  updated_at: string;
  response_json?: { answers?: string[] };
};

function titleCase(value: string) {
  return value.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

export default async function DiagnosticsAdminPage() {
  const orders = (await supabaseSelect('capability_diagnostic_orders', '?select=*&order=created_at.desc&limit=50').catch(() => [])) as DiagnosticOrder[];
  const responses = (await supabaseSelect('capability_diagnostic_responses', '?select=order_id,section_key,is_submitted,updated_at,response_json&order=updated_at.asc&limit=500').catch(() => [])) as DiagnosticResponse[];

  const grouped = new Map<string, DiagnosticResponse[]>();
  for (const row of responses || []) {
    if (!grouped.has(row.order_id)) grouped.set(row.order_id, []);
    grouped.get(row.order_id)!.push(row);
  }

  return (
    <section className="min-h-screen bg-navy py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Diagnostic Orders</h1>
        <div className="space-y-6">
          {(orders || []).map((order) => {
            const orderResponses = grouped.get(order.id) || [];
            return (
              <div key={order.id} className="rounded-xl border border-white/10 bg-midnight/40 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">{order.full_name || order.email}</h2>
                    <p className="text-light/50 text-sm">{order.email}</p>
                  </div>
                  <div className="text-sm text-light/60">
                    <div>Status: <span className="text-electric">{order.status}</span></div>
                    <div>Created: {new Date(order.created_at).toLocaleString()}</div>
                  </div>
                </div>

                <div className="mb-4 text-sm">
                  <div className="text-light/50 mb-1">Order</div>
                  <div className="text-white break-all">{order.id}</div>
                  <div className="text-light/60 break-all mt-1">Stripe session: {order.stripe_checkout_session_id || 'n/a'}</div>
                </div>

                {orderResponses.length === 0 ? (
                  <div className="text-light/40">No responses yet</div>
                ) : (
                  <div className="space-y-4 mt-6">
                    {orderResponses.map((response, idx) => (
                      <details key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <summary className="cursor-pointer text-white font-semibold">
                          {titleCase(response.section_key)} {response.is_submitted ? '(submitted)' : ''}
                        </summary>
                        <div className="mt-3 space-y-2">
                          {(response.response_json?.answers || []).map((answer, answerIdx) => (
                            <div key={answerIdx} className="rounded bg-black/20 px-3 py-2 text-sm text-light/70 whitespace-pre-wrap">
                              {answer || <span className="text-light/30">No answer</span>}
                            </div>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
