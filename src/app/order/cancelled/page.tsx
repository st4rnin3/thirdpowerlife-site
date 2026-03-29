import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "./BackButton";

export const metadata: Metadata = {
  title: "Payment Cancelled | Third Power Life",
};

export default function OrderCancelled() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-midnight/50 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />

      <div className="relative z-10 glass rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-heading font-bold text-white mb-4">
          Payment Cancelled
        </h1>

        <p className="text-light/70 mb-2 leading-relaxed">
          No worries — your payment was not processed.
        </p>

        <p className="text-light/70 mb-8 leading-relaxed">
          If you have questions, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BackButton />

          <Link
            href="/contact"
            className="border border-electric/30 text-electric px-8 py-4 rounded-lg font-heading font-semibold hover:bg-electric/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
