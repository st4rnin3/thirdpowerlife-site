import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Dan Gentry — TEDx Speaker & AI Strategist | Third Power Life",
  description:
    "Dan Gentry is a TEDx speaker, AI strategist, and founder of Third Power Performance. Learn about his mission to help entrepreneurs leverage AI without losing their humanity.",
};

/* ------------------------------------------------------------------
   Data: Key frameworks displayed as cards in section 3
   ------------------------------------------------------------------ */
const FRAMEWORKS = [
  {
    name: "Machine Work vs Meaning Work",
    description: "The core distinction that determines what AI should handle and what humans must fiercely protect.",
  },
  {
    name: "Commander vs Drifter",
    description: "An identity and mindset framework: most people don't fail at life, they drift through it.",
  },
  {
    name: "AI Ascension Model",
    description: "A four-stage roadmap — Explorer, Assistant, Agent, Commander — from AI curiosity to reclaiming 30+ hours per week.",
  },
  {
    name: "IMPACT Method",
    description: "Identify, Map, Prepare, Assemble, Commence, Tune — a repeatable process for delegating work to AI.",
  },
  {
    name: "The Success Trap",
    description: "Achieving everything you wanted while losing everything that actually matters: time, presence, health, family.",
  },
  {
    name: "The Third Power",
    description: "The integration of business success with a vibrant, purposeful life — where performance and humanity coexist.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ── Hero with Photo ────────────────────────────────────── */}
      <section className="bg-brand-light px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="/images/headshot.png"
              alt="Dan Gentry headshot"
              width={280}
              height={280}
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              Meet Dan Gentry
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              TEDx Speaker &middot; Your Personal Chief AI Officer &middot;
              Founder, Third Power Performance
            </p>
          </div>
        </div>
      </section>

      {/* ── Bio Section ────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-700">
          <p>
            Dan Gentry is a TEDx speaker, podcast host, and the founder of
            Third Power Performance — a company built on one belief: AI should
            protect your humanity, not consume it.
          </p>
          <p>
            His signature keynote, <em>Humanity Amplified</em>, reframes the
            entire AI conversation. While most speakers promise faster output
            and more automation, Dan asks the uncomfortable question:{" "}
            <strong>
              &ldquo;AI can save you 10 hours a week — but do you know what
              you&rsquo;d do with them?&rdquo;
            </strong>
          </p>
          <p>
            The answer usually exposes what Dan calls <em>The Success Trap</em>{" "}
            — high-achieving professionals who&rsquo;ve built everything they
            thought they wanted and lost everything that actually matters: time,
            presence, health, family.
          </p>
          <p>
            Dan&rsquo;s framework is built on a simple distinction:{" "}
            <strong>Machine Work vs. Meaning Work.</strong> Machine Work —
            research, formatting, repetitive emails, meeting summaries — is what
            AI should handle. Meaning Work — coaching, vision-casting,
            mentoring, being present for your kids — is what humans must
            fiercely protect. His AI Ascension model (Explorer &rarr; Assistant
            &rarr; Agent &rarr; Commander) gives leaders a practical roadmap
            from AI curiosity to reclaiming 30+ hours per week.
          </p>
          <p>
            Before AI, Dan spent years coaching executives on his{" "}
            <em>Commander vs. Drifter</em> philosophy — the idea that most
            people don&rsquo;t fail at life, they drift through it. AI became
            the first technology that could actually deliver the escape from
            drift at scale.
          </p>
          <p>
            Dan hosts the <em>Third Power Life</em> podcast (Season 3:{" "}
            &ldquo;Saving Our Humanity with AI&rdquo;), leads the{" "}
            <strong>IMPACT AI</strong> community, and publishes a weekly
            newsletter for professionals who want AI to serve their life — not
            replace it.
          </p>
        </div>
      </section>

      {/* ── Key Frameworks ─────────────────────────────────────── */}
      <section className="bg-brand-white px-6 py-20">
        <SectionHeading
          title="Key Frameworks"
          subtitle="The ideas behind the movement"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.name}
              className="rounded-xl border border-gray-200 bg-brand-light p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-navy">
                {fw.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {fw.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Dual CTA ───────────────────────────────────────────── */}
      <CTASection heading="Let's Work Together" />
    </div>
  );
}
