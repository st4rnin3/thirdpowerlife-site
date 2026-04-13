import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Chief AI Officer — Dan Gentry | Third Power Life",
  description: "AI leadership for businesses ready to implement — not just experiment. Strategy, systems, and results from your personal Chief AI Officer.",
  openGraph: {
    title: "Fractional Chief AI Officer — Dan Gentry | Third Power Life",
    description: "AI leadership for businesses ready to implement — not just experiment. Strategy, systems, and results from your personal Chief AI Officer.",
    url: "https://www.thirdpowerlife.ai/consulting",
  },
  twitter: {
    title: "Fractional Chief AI Officer — Dan Gentry | Third Power Life",
    description: "AI leadership for businesses ready to implement — not just experiment. Strategy, systems, and results from your personal Chief AI Officer.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/consulting",
  },
};

export default function Consulting() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-midnight/50 to-navy min-h-[60vh] flex items-center py-24 relative overflow-hidden">
        {/* Subtle radial glow for visual interest */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,210,255,0.08),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            fCAIO — Fractional Chief AI Officer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Your AI strategy deserves
            <br />
            <span className="text-electric">more than a chatbot.</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mb-8">
            A fractional Chief AI Officer gives your business executive-level AI leadership
            without the full-time hire. Strategy, implementation, and results.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
          >
            Book an Intro Call
          </a>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Ready to Implement",
                desc: "You've experimented with AI tools. Now you need a strategy — which workflows to automate, which to protect, and how to get your team onboard.",
              },
              {
                icon: "⚡",
                title: "Growing Fast",
                desc: "You're scaling and can't keep throwing hours at problems. You need AI systems that multiply your team's output without multiplying headcount.",
              },
              {
                icon: "🧭",
                title: "Need Direction",
                desc: "You know AI matters but don't know where to start. A fractional CAIO gives you the roadmap without the six-figure salary.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-midnight/60 border border-white/10 rounded-xl p-8 text-center hover:border-electric/20 hover:shadow-[0_0_20px_rgba(0,210,255,0.1)] transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-white font-heading font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-light/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gradient-to-b from-midnight/30 to-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "AI Strategy Audit",
                desc: "A full Machine Work vs. Meaning Work audit of your operations — identifying the highest-ROI automation opportunities.",
              },
              {
                title: "Implementation Roadmap",
                desc: "A phased plan using the AI Ascension model, customized to your team's current capabilities and business goals.",
              },
              {
                title: "Tool Selection & Setup",
                desc: "Cut through the noise. Get recommendations based on what actually works for your use case — not vendor hype.",
              },
              {
                title: "Team Training",
                desc: "Get your people from Explorer to Agent. Practical workshops on the IMPACT method for AI delegation.",
              },
              {
                title: "Ongoing Advisory",
                desc: "Monthly strategy sessions to assess progress, adjust course, and ensure AI adoption stays aligned with business objectives.",
              },
              {
                title: "Executive Reporting",
                desc: "Clear metrics on hours reclaimed, workflows automated, and ROI delivered — in language the board understands.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-midnight/40 border border-white/10 rounded-xl p-6 flex gap-4 hover:border-electric/20 transition-all duration-300"
              >
                <div className="text-electric text-xl mt-1">→</div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-light/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
              The Approach
            </h2>
            <div className="space-y-5">
              <p className="text-light/70 leading-relaxed">
                Most AI consulting sells you tools. Dan sells you clarity.
              </p>
              <p className="text-light/70 leading-relaxed">
                The engagement starts with understanding your business — not your tech stack.
                What are your people spending their time on? What decisions actually move the
                needle? Where is the{" "}
                <span className="text-white font-semibold">Machine Work</span> burying the{" "}
                <span className="text-white font-semibold">Meaning Work</span>?
              </p>
              <p className="text-light/70 leading-relaxed">
                From there, Dan builds a strategy that&apos;s specific to your operations,
                implements the first wins within weeks (not quarters), and trains your team
                to sustain and expand the AI advantage independently.
              </p>
              <p className="text-electric font-semibold leading-relaxed">
                This is not a retainer where someone sends you ChatGPT prompts.
              </p>
              <p className="text-light/70 leading-relaxed">
                This is executive AI leadership embedded in your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Option */}
      <section className="bg-midnight/40 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-10 border border-electric/20 text-center">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              Start Here
            </p>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Not ready for a full fCAIO engagement yet?
            </h2>
            <p className="text-light/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Start with the <span className="text-white font-semibold">AI Capability Gap Diagnostic</span>{" "}
              for <span className="text-white font-semibold">$197</span>, a paid assessment designed to show
              you where AI can create the most value in your business, where you have risk,
              and what the smartest next steps look like.
            </p>
            <a
              href="/ai-capability-gap-diagnostic"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Take the Diagnostic
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-midnight to-navy py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to talk strategy?
          </h2>
          <p className="text-light/50 mb-8">
            No sales pitch. Just a conversation about where AI fits in your business
            and whether a fractional CAIO is the right move.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
          >
            Book an Intro Call
          </a>
        </div>
      </section>
    </>
  );
}
