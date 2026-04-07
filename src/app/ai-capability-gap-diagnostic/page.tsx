import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Capability Gap Diagnostic — Dan Gentry | Third Power Life",
  description:
    "A fast business diagnostic for solopreneurs and very small teams. Find where AI is helping, where it's not, and what your next move should be.",
  openGraph: {
    title: "AI Capability Gap Diagnostic — Dan Gentry | Third Power Life",
    description:
      "A fast business diagnostic for solopreneurs and very small teams. Find where AI is helping, where it's not, and what your next move should be.",
    url: "https://www.thirdpowerlife.ai/ai-capability-gap-diagnostic",
  },
  twitter: {
    title: "AI Capability Gap Diagnostic — Dan Gentry | Third Power Life",
    description:
      "A fast business diagnostic for solopreneurs and very small teams. Find where AI is helping, where it's not, and what your next move should be.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/ai-capability-gap-diagnostic",
  },
};

export default function AICapabilityGapDiagnosticPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-midnight/50 to-navy min-h-[60vh] flex items-center py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,210,255,0.08),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            Entry Offer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            You don&apos;t need more AI tools.
            <br />
            <span className="text-electric">You need clarity.</span>
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mb-8">
            The <strong>AI Capability Gap Diagnostic</strong> shows you where AI is actually helping your business,
            where it isn&apos;t, and what your next move should be.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-light/60">
            <span className="rounded-full border border-white/10 px-4 py-2">$197 launch price</span>
            <span className="rounded-full border border-white/10 px-4 py-2">48 hour turnaround</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Questionnaire + 20 min review call</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/order/ai-capability-gap-diagnostic"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Book Your Diagnostic
            </a>
            <a
              href="/consulting"
              className="inline-block border border-white/15 text-white px-8 py-4 rounded-lg font-heading font-semibold hover:border-electric/40 transition-all duration-300"
            >
              See the Full fCAIO Offer
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Most people don&apos;t have an AI problem.
            <br />
            They have a <span className="text-electric">clarity problem.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-light/70">
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-heading font-bold text-xl mb-4">What it looks like now</h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>you&apos;ve tried ChatGPT, Claude, or a few AI tools</li>
                <li>content is still inconsistent</li>
                <li>follow-up still depends on you remembering</li>
                <li>repetitive work still eats your week</li>
                <li>AI usage feels scattered, not operational</li>
              </ul>
            </div>
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-heading font-bold text-xl mb-4">What this diagnostic gives you</h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>a clear capability map across the business</li>
                <li>the top 3 gaps slowing you down</li>
                <li>where time, leads, or content are leaking</li>
                <li>the next highest-leverage AI move</li>
                <li>clarity on whether you need the full Initial Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-midnight/30 to-navy py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Capability Map",
                desc: "A one-page snapshot of your current AI posture across time leverage, lead flow, content, workflow integration, knowledge, and trust/governance.",
              },
              {
                title: "Top 3 Gap Summary",
                desc: "A short written memo showing the biggest capability gaps and what they are likely costing you in time, leads, or content consistency.",
              },
              {
                title: "Next-Step Recommendation",
                desc: "A practical recommendation on what to fix first, and whether the next move is DIY, the $1,000 Initial Consultation, or a larger execution engagement later.",
              },
              {
                title: "20 Minute Review Call",
                desc: "A live walkthrough of the findings so you know what matters, what does not, and where to focus next.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-midnight/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-light/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Solopreneurs",
                desc: "You know AI matters, but right now it feels fragmented and mostly dependent on your own energy.",
              },
              {
                title: "Very Small Teams",
                desc: "You need more leverage without hiring more people or stitching together another pile of tools.",
              },
              {
                title: "Warm-Market Buyers",
                desc: "You want a lower-friction first step before committing to a deeper strategy engagement.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-midnight/40 border border-white/10 rounded-xl p-8 text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-light/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-midnight to-navy py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Stop guessing where AI should fit into your business.
          </h2>
          <p className="text-light/50 mb-8">
            Get clear on where AI is helping, where it isn&apos;t, and what the next move should be.
          </p>
          <a
            href="/order/ai-capability-gap-diagnostic"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
          >
            Get the Diagnostic for $197
          </a>
        </div>
      </section>
    </>
  );
}
