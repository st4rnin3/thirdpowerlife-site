import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dan Gentry — Your Personal Chief AI Officer",
  description: "TEDx Speaker, AI Strategist, and Founder of Third Power Performance. Dan teaches the distinction between Machine Work and Meaning Work.",
};

export default function About() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Meet Dan Gentry</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                TEDx Speaker · AI Strategist · Founder
              </h1>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Dan Gentry is a TEDx speaker, podcast host, and the founder of Third Power
                  Performance — a company built on one belief: <strong>AI should protect your
                  humanity, not consume it.</strong>
                </p>
                <p>
                  His signature keynote, <em>Humanity Amplified</em>, reframes the entire AI
                  conversation. While most speakers promise faster output and more automation,
                  Dan asks the uncomfortable question: &ldquo;AI can save you 10 hours a week —
                  but do you know what you&apos;d do with them?&rdquo;
                </p>
                <p>
                  The answer usually exposes what Dan calls <strong>The Success Trap</strong> —
                  high-achieving professionals who&apos;ve built everything they thought they
                  wanted and lost everything that actually matters: time, presence, health, family.
                </p>
                <p>
                  Dan&apos;s framework is built on a simple distinction: <strong>Machine Work
                  vs. Meaning Work.</strong> Machine Work — research, formatting, repetitive
                  emails, meeting summaries — is what AI should handle. Meaning Work — coaching,
                  vision-casting, mentoring, being present for your kids — is what humans must
                  fiercely protect.
                </p>
                <p>
                  His <strong>AI Ascension model</strong> (Explorer → Assistant → Agent → Commander)
                  gives leaders a practical roadmap from AI curiosity to reclaiming 30+ hours per week.
                </p>
                <p>
                  Before AI, Dan spent years coaching executives on his <strong>Commander vs.
                  Drifter</strong> philosophy — the idea that most people don&apos;t fail at life,
                  they drift through it. AI became the first technology that could actually deliver
                  the escape from drift at scale.
                </p>
                <p>
                  Dan hosts the <strong>Third Power Life podcast</strong> (Season 3: &ldquo;Saving
                  Our Humanity with AI&rdquo;), leads the <strong>IMPACT AI community</strong>,
                  and publishes a weekly newsletter for professionals who want AI to serve their
                  life — not replace it.
                </p>
              </div>
            </div>
            <div className="flex justify-center sticky top-24">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/headshot.png" alt="Dan Gentry" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Frameworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Machine Work vs. Meaning Work", desc: "The core distinction — what AI handles vs. what humans protect." },
              { title: "Commander vs. Drifter", desc: "Identity and mindset framework. Intentional design vs. reactive drift." },
              { title: "AI Ascension Model", desc: "Explorer → Assistant → Agent → Commander. Your practical roadmap." },
              { title: "IMPACT Method", desc: "Identify, Map, Prepare, Assemble, Commence, Tune. Delegation done right." },
              { title: "The Success Trap", desc: "Achieving everything you wanted while losing what actually matters." },
              { title: "The Third Power", desc: "Integration of business success with a vibrant, purposeful life." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to work with Dan?</h2>
          <p className="text-blue-100 mb-8">Whether from the stage or the boardroom — Dan brings substance, not hype.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/speaking" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Book to Speak</a>
            <a href="/consulting" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">fCAIO Consulting</a>
          </div>
        </div>
      </section>
    </>
  );
}
