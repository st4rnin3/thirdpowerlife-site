import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Chief AI Officer — Dan Gentry | Third Power Life",
  description: "AI leadership for businesses ready to implement — not just experiment. Strategy, systems, and results from your personal Chief AI Officer.",
};

export default function Consulting() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-3">fCAIO — Fractional Chief AI Officer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI strategy deserves<br />
            <span className="text-blue-400">more than a chatbot.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            A fractional Chief AI Officer gives your business executive-level AI leadership
            without the full-time hire. Strategy, implementation, and results.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book an Intro Call
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Who This Is For</h2>
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
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "AI Strategy Audit", desc: "A full Machine Work vs. Meaning Work audit of your operations — identifying the highest-ROI automation opportunities." },
              { title: "Implementation Roadmap", desc: "A phased plan using the AI Ascension model, customized to your team's current capabilities and business goals." },
              { title: "Tool Selection & Setup", desc: "Cut through the noise. Get recommendations based on what actually works for your use case — not vendor hype." },
              { title: "Team Training", desc: "Get your people from Explorer to Agent. Practical workshops on the IMPACT method for AI delegation." },
              { title: "Ongoing Advisory", desc: "Monthly strategy sessions to assess progress, adjust course, and ensure AI adoption stays aligned with business objectives." },
              { title: "Executive Reporting", desc: "Clear metrics on hours reclaimed, workflows automated, and ROI delivered — in language the board understands." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-blue-600 text-xl mt-1">→</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">The Approach</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p>
              Most AI consulting sells you tools. Dan sells you clarity.
            </p>
            <p>
              The engagement starts with understanding your business — not your tech stack.
              What are your people spending their time on? What decisions actually move the
              needle? Where is the Machine Work burying the Meaning Work?
            </p>
            <p>
              From there, Dan builds a strategy that&apos;s specific to your operations,
              implements the first wins within weeks (not quarters), and trains your team
              to sustain and expand the AI advantage independently.
            </p>
            <p>
              <strong>This is not a retainer where someone sends you ChatGPT prompts.</strong>{" "}
              This is executive AI leadership embedded in your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to talk strategy?</h2>
          <p className="text-gray-400 mb-8">
            No sales pitch. Just a conversation about where AI fits in your business
            and whether a fractional CAIO is the right move.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book an Intro Call
          </a>
        </div>
      </section>
    </>
  );
}
