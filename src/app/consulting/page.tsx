import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Fractional Chief AI Officer — AI Strategy & Implementation | Third Power Life",
  description:
    "Get executive-level AI leadership without the full-time hire. Dan Gentry helps businesses implement AI strategically — protecting what makes your team human.",
};

const WHO_ITS_FOR = [
  "Businesses generating revenue but drowning in manual workflows",
  "Leadership teams that know AI matters but don't know where to start",
  "Organizations that have tried AI tools and gotten mediocre results",
  "Founders who want to scale without sacrificing their team's humanity",
  "Companies ready to implement, not just experiment",
] as const;

const OUTCOMES = [
  {
    title: "Reclaim Time",
    description:
      "Identify and automate Machine Work across your organization. Most clients find 10-30 hours per week of recoverable time in the first audit.",
  },
  {
    title: "Strategic Clarity",
    description:
      "Know exactly which AI tools to use, where to deploy them, and what to protect. No more shiny object syndrome.",
  },
  {
    title: "Sustainable Systems",
    description:
      "Build AI workflows that your team actually uses — designed around your people, not against them.",
  },
] as const;

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We talk about your business, your team, and where AI fits.",
  },
  {
    number: "02",
    title: "Machine Work Audit",
    description:
      "I map your workflows and identify the highest-ROI automation opportunities.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We build, test, and deploy AI systems together — with your team trained to maintain them.",
  },
] as const;

export default function ConsultingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Your Fractional Chief AI Officer
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            AI strategy and implementation for businesses ready to move from
            experimentation to execution.
          </p>
        </div>
      </section>

      {/* What is a fCAIO? */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="What Is a Fractional Chief AI Officer?" />
          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            Most businesses know they need AI. Few know where to start — or how
            to do it without wasting months and budget on the wrong tools. A
            Fractional Chief AI Officer gives you executive-level AI leadership
            without the full-time hire. Dan embeds with your team to audit
            workflows, identify high-ROI automation opportunities, and build
            systems that actually work — all through the lens of protecting what
            makes your team human.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Is This Right for You?" />
          <ul className="mt-10 space-y-4">
            {WHO_ITS_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base font-semibold italic text-brand-accent">
            This is NOT for businesses looking for a ChatGPT tutorial.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="What You Can Expect" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-xl border border-gray-200 bg-brand-white p-8"
              >
                <h3 className="text-xl font-bold text-brand-navy">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="How It Works" />
          <div className="mt-12 space-y-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <span className="shrink-0 text-3xl font-bold text-brand-gold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Ready to Put AI to Work for Your Business?
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
            >
              Book a Discovery Call
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No pricing on this page intentionally. Every engagement is
            custom-scoped to your needs.
          </p>
        </div>
      </section>
    </div>
  );
}
