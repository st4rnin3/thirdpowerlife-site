import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commander Launchpad — Dan Gentry | Third Power Life",
  description:
    "Stop paying for AI tools you can't use. Commander Launchpad gives you a 3-agent operating system with human approval gates — from audit to deployment to ongoing optimization.",
  openGraph: {
    title: "Commander Launchpad — Dan Gentry | Third Power Life",
    description:
      "Stop paying for AI tools you can't use. Commander Launchpad gives you a 3-agent operating system with human approval gates — from audit to deployment to ongoing optimization.",
    url: "https://www.thirdpowerlife.ai/commander-launchpad",
  },
  twitter: {
    title: "Commander Launchpad — Dan Gentry | Third Power Life",
    description:
      "Stop paying for AI tools you can't use. Commander Launchpad gives you a 3-agent operating system with human approval gates — from audit to deployment to ongoing optimization.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/commander-launchpad",
  },
};

export default function CommanderLaunchpadPage() {
  return (
    <>
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-br from-navy via-midnight/50 to-navy min-h-[60vh] flex items-center py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,210,255,0.08),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            Commander Launchpad
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Stop paying for AI tools
            <br />
            you can&apos;t use.
            <br />
            <span className="text-electric">Start operating them.</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mb-8">
            Go from tool overwhelm to a functioning 3-agent operating system
            with human approval gates, one dashboard, and SOPs you can hand off.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-light/60">
            <span className="rounded-full border border-white/10 px-4 py-2">
              3-tier onboarding
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Fixed scope
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Agents with guardrails
            </span>
          </div>
          <a
            href="#tiers"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
          >
            See Which Tier Fits
          </a>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BEFORE / AFTER                                                   */}
      {/* ================================================================ */}
      <section className="bg-navy py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            The gap between <span className="text-electric">owning AI tools</span> and{" "}
            <span className="text-electric">operating them</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-light/70">
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-heading font-bold text-xl mb-4">
                What it looks like now
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>Scattered tools with no system connecting them</li>
                <li>Everything still depends on the founder</li>
                <li>AI usage feels experimental, not operational</li>
                <li>Multiple subscriptions, minimal leverage</li>
                <li>No clear way to delegate workflows to AI</li>
              </ul>
            </div>
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-heading font-bold text-xl mb-4">
                What it looks like after
              </h3>
              <ul className="space-y-3 list-disc list-inside">
                <li>3 agents handling daily ops with clear roles</li>
                <li>One dashboard showing what&apos;s running</li>
                <li>Human approval gates on every critical action</li>
                <li>SOPs you can hand off to a team member or VA</li>
                <li>A system that expands as your business grows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHO THIS IS FOR                                                  */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-midnight/30 to-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Founder-Operators",
                desc: "You run a 1-25 person team. You're already paying for AI tools but not getting real leverage from them.",
              },
              {
                icon: "🔀",
                title: "Tool Overwhelm",
                desc: "Multiple AI subscriptions, no system connecting them. Every new tool adds complexity without reducing your workload.",
              },
              {
                icon: "🤝",
                title: "Ready to Delegate",
                desc: "You have repeatable workflows but haven't been able to hand them to AI yet. You need a bridge from manual to automated.",
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

      {/* ================================================================ */}
      {/* THREE TIERS                                                      */}
      {/* ================================================================ */}
      <section id="tiers" className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4 text-center">
            Choose Your Entry Point
          </p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Three Tiers. One System.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 — Launchpad Audit */}
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8 flex flex-col hover:border-electric/20 transition-all duration-300">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-2">
                Tier 1
              </p>
              <h3 className="text-white font-heading font-bold text-2xl mb-1">
                Launchpad Audit
              </h3>
              <p className="text-white font-heading font-bold text-3xl mb-6">
                $997
              </p>
              <ul className="space-y-3 text-light/70 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Environment review + workflow map</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Leverage diagnosis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>7-day action plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Tier 2 readiness assessment</span>
                </li>
              </ul>
              <a
                href="/order/commander-launchpad-audit"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-center hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                Start with the Audit
              </a>
            </div>

            {/* Tier 2 — 3-Agent Sprint */}
            <div className="bg-midnight/40 border border-electric/30 rounded-xl p-8 flex flex-col shadow-[0_0_20px_rgba(0,210,255,0.08)] hover:border-electric/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all duration-300">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-2">
                Tier 2
              </p>
              <h3 className="text-white font-heading font-bold text-2xl mb-1">
                3-Agent Sprint
              </h3>
              <p className="text-white font-heading font-bold text-3xl mb-6">
                $5k&ndash;$9k
              </p>
              <ul className="space-y-3 text-light/70 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Chief + Revenue + Inbox or Content agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>One external integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Dashboard or reporting loop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>SOPs + recorded handoff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>14-day tuning window</span>
                </li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-center hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                Book a Discovery Call
              </a>
            </div>

            {/* Tier 3 — Managed Optimization */}
            <div className="bg-midnight/40 border border-white/10 rounded-xl p-8 flex flex-col hover:border-electric/20 transition-all duration-300">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-2">
                Tier 3
              </p>
              <h3 className="text-white font-heading font-bold text-2xl mb-1">
                Managed Optimization
              </h3>
              <p className="text-white font-heading font-bold text-3xl mb-6">
                $1.5k&ndash;$4k<span className="text-lg text-light/50">/mo</span>
              </p>
              <ul className="space-y-3 text-light/70 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Weekly tuning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>New workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Observability + reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span>Monthly performance report</span>
                </li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-center hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                     */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-midnight/30 to-navy py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Take the Intake",
                desc: "We start by understanding your environment, your workflows, and where time is leaking.",
              },
              {
                step: "2",
                title: "Get Your Audit",
                desc: "See exactly where leverage lives in your business and which workflows are ready for agent deployment.",
              },
              {
                step: "3",
                title: "Deploy Your Agent Stack",
                desc: "3 agents with clear roles, one external integration, one dashboard, and human approval gates on every critical action.",
              },
              {
                step: "4",
                title: "Optimize and Expand",
                desc: "Ongoing tuning as your business evolves. New workflows, better performance, and a system that grows with you.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-midnight/40 border border-white/10 rounded-xl p-6 flex gap-4 hover:border-electric/20 transition-all duration-300"
              >
                <div className="text-electric font-heading font-bold text-3xl mt-1 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-light/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* GUARDRAILS CALLOUT                                               */}
      {/* ================================================================ */}
      <section className="bg-navy py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
              Every agent ships with human approval gates.
            </h2>
            <div className="space-y-5">
              <p className="text-light/70 leading-relaxed">
                These are <span className="text-white font-semibold">supervised agents</span>,
                not autonomous bots. Nothing sends, publishes, or modifies without your review
                and approval.
              </p>
              <p className="text-light/70 leading-relaxed">
                You stay in the loop on every decision that matters. The agents handle the
                preparation, research, and drafting. You make the call.
              </p>
              <p className="text-electric font-semibold leading-relaxed">
                AI leverage without losing control. That&apos;s the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CROSS-SELL — DIAGNOSTIC                                          */}
      {/* ================================================================ */}
      <section className="bg-midnight/40 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-10 border border-electric/20 text-center">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              Start Here
            </p>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Not ready for the full engagement?
            </h2>
            <p className="text-light/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Start with the{" "}
              <span className="text-white font-semibold">
                AI Capability Gap Diagnostic
              </span>{" "}
              for{" "}
              <span className="text-white font-semibold">$197</span>. Find out
              where AI is helping, where it isn&apos;t, and what the smartest
              next step looks like for your business.
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

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-r from-midnight to-navy py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to get operational?
          </h2>
          <p className="text-light/50 mb-8">
            Start with the audit or book a call to talk through your setup.
            Either way, you&apos;ll know exactly where to go next.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/order/commander-launchpad-audit"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Start with the Audit
            </a>
            <a
              href="/schedule"
              className="inline-block border-2 border-electric/50 text-electric px-8 py-4 rounded-lg font-heading font-semibold hover:bg-electric/10 hover:border-electric transition-all duration-300"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
