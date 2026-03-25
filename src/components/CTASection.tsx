import Link from "next/link";

interface CTASectionProps {
  /** Optional heading text override */
  heading?: string;
}

export default function CTASection({
  heading = "Ready to Bring AI Into Your World?",
}: CTASectionProps) {
  return (
    <section className="bg-brand-navy px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/speaking"
            className="inline-block rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
          >
            Book Dan to Speak
          </Link>
          <Link
            href="/consulting"
            className="inline-block rounded-lg border-2 border-brand-gold px-8 py-3.5 text-base font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-navy"
          >
            Need a Fractional Chief AI Officer?
          </Link>
        </div>
      </div>
    </section>
  );
}
