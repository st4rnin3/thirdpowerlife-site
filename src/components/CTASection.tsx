import Link from "next/link";

interface CTASectionProps {
  /** Optional heading text override */
  heading?: string;
}

export default function CTASection({
  heading = "Ready to Bring AI Into Your World?",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-b from-navy to-midnight px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/speaking"
            className="inline-block rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(0,210,255,0.3)]"
          >
            Book Dan to Speak
          </Link>
          <Link
            href="/consulting"
            className="inline-block rounded-lg border-2 border-electric px-8 py-3.5 text-base font-semibold text-electric transition-all hover:bg-electric hover:text-navy"
          >
            Need a Fractional Chief AI Officer?
          </Link>
        </div>
      </div>
    </section>
  );
}
