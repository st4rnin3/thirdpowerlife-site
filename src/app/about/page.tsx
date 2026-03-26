import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dan Gentry — Your Personal Chief AI Officer",
  description: "TEDx Speaker, AI Strategist, and Founder of Third Power Performance. Dan teaches the distinction between Machine Work and Meaning Work.",
};

const milestones = [
  {
    title: "Executive Coaching",
    desc: "Commander vs. Drifter philosophy — intentional design over reactive drift.",
  },
  {
    title: "Third Power Performance Founded",
    desc: "Business success integrated with a vibrant, purposeful life.",
  },
  {
    title: "TEDx Stage",
    desc: "Humanity Amplified keynote — reframing AI around what matters most.",
  },
  {
    title: "IMPACT AI Community",
    desc: "Building the movement for professionals who use AI with intention.",
  },
  {
    title: "AI Ascension Model",
    desc: "A practical framework for leaders: Explorer to Commander.",
  },
];

const frameworks = [
  { title: "Machine Work vs. Meaning Work", desc: "The core distinction — what AI handles vs. what humans protect." },
  { title: "Commander vs. Drifter", desc: "Identity and mindset framework. Intentional design vs. reactive drift." },
  { title: "AI Ascension Model", desc: "Explorer → Assistant → Agent → Commander. Your practical roadmap." },
  { title: "IMPACT Method", desc: "Identify, Map, Prepare, Assemble, Commence, Tune. Delegation done right." },
  { title: "The Success Trap", desc: "Achieving everything you wanted while losing what actually matters." },
  { title: "The Third Power", desc: "Integration of business success with a vibrant, purposeful life." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
                Meet Dan Gentry
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                TEDx Speaker · AI Strategist · Founder
              </h1>

              <div className="space-y-0">
                {/* Intro */}
                <p className="text-light/70 leading-relaxed">
                  Dan Gentry is a TEDx speaker, podcast host, and the founder of Third Power
                  Performance — a company built on one belief:{" "}
                  <span className="text-white font-semibold">
                    AI should protect your humanity, not consume it.
                  </span>
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* Humanity Amplified */}
                <p className="text-light/70 leading-relaxed">
                  His signature keynote,{" "}
                  <span className="text-electric italic">Humanity Amplified</span>, reframes
                  the entire AI conversation. While most speakers promise faster output and
                  more automation, Dan asks the uncomfortable question: &ldquo;AI can save
                  you 10 hours a week — but do you know what you&apos;d do with
                  them?&rdquo;
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* The Success Trap */}
                <p className="text-light/70 leading-relaxed">
                  The answer usually exposes what Dan calls{" "}
                  <span className="text-white font-semibold">The Success Trap</span> —
                  high-achieving professionals who&apos;ve built everything they thought
                  they wanted and lost everything that actually matters: time, presence,
                  health, family.
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* Machine Work vs. Meaning Work */}
                <p className="text-light/70 leading-relaxed">
                  Dan&apos;s framework is built on a simple distinction:{" "}
                  <span className="text-electric font-semibold">
                    Machine Work vs. Meaning Work.
                  </span>{" "}
                  Machine Work — research, formatting, repetitive emails, meeting
                  summaries — is what AI should handle. Meaning Work — coaching,
                  vision-casting, mentoring, being present for your kids — is what humans
                  must fiercely protect.
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* AI Ascension Model */}
                <p className="text-light/70 leading-relaxed">
                  His{" "}
                  <span className="text-electric font-semibold">AI Ascension model</span>{" "}
                  (Explorer → Assistant → Agent → Commander) gives leaders a practical
                  roadmap from AI curiosity to reclaiming 30+ hours per week.
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* Commander vs. Drifter */}
                <p className="text-light/70 leading-relaxed">
                  Before AI, Dan spent years coaching executives on his{" "}
                  <span className="text-white font-semibold">
                    Commander vs. Drifter
                  </span>{" "}
                  philosophy — the idea that most people don&apos;t fail at life, they
                  drift through it. AI became the first technology that could actually
                  deliver the escape from drift at scale.
                </p>

                <div className="border-t border-white/10 my-8" />

                {/* Podcast & Community */}
                <p className="text-light/70 leading-relaxed">
                  Dan hosts the{" "}
                  <span className="text-white font-semibold">
                    Third Power Life podcast
                  </span>{" "}
                  (Season 3: &ldquo;Saving Our Humanity with AI&rdquo;), leads the{" "}
                  <span className="text-white font-semibold">IMPACT AI community</span>,
                  and publishes a weekly newsletter for professionals who want AI to serve
                  their life — not replace it.
                </p>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center sticky top-24">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden ring-2 ring-electric/30 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
                <Image
                  src="/images/headshot.png"
                  alt="Dan Gentry"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-16">
            The Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-electric/30" />

            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-electric ring-4 ring-navy z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <h3 className="text-white font-semibold text-lg">{m.title}</h3>
                  <p className="text-light/70 text-sm mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Frameworks */}
      <section className="bg-midnight/30 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Key Frameworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((f, i) => (
              <div
                key={i}
                className="bg-midnight/60 border border-white/10 rounded-xl p-6 hover:border-electric/30 hover:shadow-[0_0_20px_rgba(0,210,255,0.1)] transition-all duration-300"
              >
                <h3 className="text-white font-heading font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-light/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to work with Dan?
          </h2>
          <p className="text-white/80 mb-8">
            Whether from the stage or the boardroom — Dan brings substance, not hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/speaking"
              className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
            >
              Book to Speak
            </a>
            <a
              href="/consulting"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              fCAIO Consulting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
