import type { Metadata } from "next";
import Link from "next/link";
import { getSuccessContent } from "@/data/order-success";

export const metadata: Metadata = {
  title: "Payment Successful | Third Power Life",
};

/**
 * Default success page — used when no product-specific slug is in the URL.
 * Shows the generic thank-you content.
 */
export default function OrderSuccessDefault() {
  const content = getSuccessContent("__default__");

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-midnight/50 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />

      <div className="relative z-10 glass rounded-2xl p-10 max-w-lg w-full text-center">
        {/* Green checkmark */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
          <svg
            className="h-8 w-8 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-heading font-bold text-white mb-4">
          {content.heading}
        </h1>

        <p className="text-light/70 mb-2 leading-relaxed">
          {content.message}
        </p>

        {content.detail && (
          <p className="text-light/50 mb-8 leading-relaxed text-sm">
            {content.detail}
          </p>
        )}

        <Link
          href="/"
          className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
