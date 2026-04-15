import type { Metadata } from "next";
import Link from "next/link";
import { getSuccessContent } from "@/data/order-success";
import ConversionTracker from "@/components/ConversionTracker";
import getStripeClient from "@/lib/stripe";
import { supabaseUpsert } from "@/lib/supabase-admin";

export const metadata: Metadata = {
  title: "Payment Successful | Third Power Life",
};

export default async function OrderSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ session_id?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearch = (await searchParams) || {};
  const sessionId = resolvedSearch.session_id;
  const content = getSuccessContent(slug);
  let email = "";

  if (slug === "ai-capability-gap-diagnostic" && sessionId) {
    try {
      const stripe = getStripeClient();
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["customer_details", "customer"],
      });
      email = session.customer_details?.email || session.customer_email || "";

      if (email) {
        await supabaseUpsert(
          "capability_diagnostic_orders",
          {
            stripe_checkout_session_id: session.id,
            stripe_customer_id: typeof session.customer === "string" ? session.customer : session.customer?.id || null,
            email,
            full_name: session.customer_details?.name || null,
            phone: session.customer_details?.phone || null,
            product_slug: slug,
            price_paid_cents: session.amount_total || 19700,
            status: "paid",
            updated_at: new Date().toISOString(),
          },
          "stripe_checkout_session_id"
        );
      }
    } catch (error) {
      console.error("diagnostic success init failed", error);
    }
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
      <ConversionTracker slug={slug} />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-midnight/50 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-2xl w-full space-y-8">
        <div className="glass rounded-2xl p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
            <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-heading font-bold text-white mb-4">{content.heading}</h1>
          <p className="text-light/70 mb-2 leading-relaxed">{content.message}</p>
          {content.detail && <p className="text-light/50 mb-8 leading-relaxed text-sm">{content.detail}</p>}

          {slug === "ai-capability-gap-diagnostic" ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/diagnostic/intake?sessionId=${encodeURIComponent(sessionId || "")}${email ? `&email=${encodeURIComponent(email)}` : ""}`}
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-accent/90 transition-all"
              >
                Complete the Questionnaire
              </Link>
              <Link
                href="/schedule"
                className="inline-block bg-accent/20 text-electric px-8 py-3 rounded-lg font-heading font-semibold hover:bg-accent/30 transition-all"
              >
                Book Your Review Call
              </Link>
            </div>
          ) : (
            <Link href="/" className="inline-block bg-accent/20 text-electric px-8 py-3 rounded-lg font-heading font-semibold hover:bg-accent/30 transition-all">
              Return Home
            </Link>
          )}
        </div>

        {content.upsell && (
          <div className="glass rounded-2xl p-8 border border-electric/20">
            <h2 className="text-xl font-heading font-bold text-electric mb-3">{content.upsell.heading}</h2>
            <p className="text-light/70 mb-6 leading-relaxed">{content.upsell.body}</p>
            <Link href={content.upsell.href} className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all">
              {content.upsell.cta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
