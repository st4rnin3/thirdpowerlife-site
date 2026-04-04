import type { Metadata } from "next";
import CalEmbedConnect from "./CalEmbedConnect";

export const metadata: Metadata = {
  title: "CONNECT 2026 — Your Next Step | Dan Gentry",
  description:
    "You attended CONNECT 2026. Now take the next step: download the AI Ascension Guide and book your free AI Clarity Call with Dan Gentry.",
  openGraph: {
    title: "CONNECT 2026 — Your Next Step | Dan Gentry",
    description: "You attended CONNECT 2026. Now take the next step: download the AI Ascension Guide and book your free AI Clarity Call with Dan Gentry.",
    url: "https://www.thirdpowerlife.ai/connect",
  },
  twitter: {
    title: "CONNECT 2026 — Your Next Step | Dan Gentry",
    description: "You attended CONNECT 2026. Now take the next step: download the AI Ascension Guide and book your free AI Clarity Call with Dan Gentry.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/connect",
  },
};

const levels = [
  {
    num: "0",
    name: "Explorer",
    desc: "Curious about AI but not sure where to start",
    color: "border-yellow-500/30",
    numColor: "text-yellow-400",
  },
  {
    num: "1",
    name: "Assistant",
    desc: "Using AI for tasks — drafts, research, brainstorming",
    color: "border-electric/30",
    numColor: "text-electric",
  },
  {
    num: "2",
    name: "Agent",
    desc: "AI runs workflows while you focus on Meaning Work",
    color: "border-blue-400/30",
    numColor: "text-blue-400",
  },
  {
    num: "3",
    name: "Commander",
    desc: "Multiple agents. You lead vision & relationships.",
    color: "border-green-400/30",
    numColor: "text-green-400",
  },
];

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            CONNECT 2026
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Humanity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Amplified
            </span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto mb-4">
            Thanks for being in the room. Here&apos;s how to keep the momentum going.
          </p>
        </div>
      </section>

      {/* AI Ascension Guide — Coming Soon */}
      <section className="bg-midnight/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              Coming Soon
            </p>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              The AI Ascension Guide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                2.0
              </span>
            </h2>
            <p className="text-light/70 max-w-xl mx-auto mb-6">
              The complete framework behind everything from the talk — all four levels
              of AI Ascension, the IMPACT delegation method, Machine Work vs. Meaning
              Work, and your personal roadmap to AI that amplifies trust. Updated for
              2026.
            </p>
            <p className="text-light/50 text-sm mb-6">
              Drop your email and we&apos;ll send it the moment it&apos;s ready.
            </p>
            <form
              action="https://app.kit.com/forms/YOUR_FORM_ID/subscriptions"
              method="post"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email_address"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-midnight/80 border border-white/10 text-white placeholder-light/40 focus:outline-none focus:border-electric/50 transition"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Find Your Level */}
      <section className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              Where Are You Today?
            </p>
            <h2 className="text-3xl font-heading font-bold text-white mb-3">
              The 4 Levels of AI Ascension
            </h2>
            <p className="text-light/60 max-w-xl mx-auto">
              Identify your level. Then let&apos;s map your next move.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {levels.map((level) => (
              <div
                key={level.num}
                className={`bg-midnight/60 border ${level.color} rounded-xl p-6 hover:bg-midnight/80 transition-all duration-300`}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className={`text-4xl font-heading font-bold ${level.numColor}`}
                  >
                    {level.num}
                  </span>
                  <span className="text-white font-heading font-bold text-xl">
                    {level.name}
                  </span>
                </div>
                <p className="text-light/60 text-sm">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Clarity Call */}
      <section className="bg-midnight/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              Exclusive for CONNECT Attendees
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Book Your AI Clarity Call
            </h2>
            <p className="text-light/60 max-w-2xl mx-auto mb-2">
              30 minutes, one-on-one with Dan. We&apos;ll identify your level, find the
              one workflow that&apos;s eating your time, and map your first move. No pitch.
              No contract. Just clarity.
            </p>
            <p className="text-light/40 text-sm">
              Limited availability — book while spots are open.
            </p>
          </div>

          {/* Cal.com embed */}
          <CalEmbedConnect />

          {/* SMS consent */}
          <p className="text-light/30 text-xs text-center mt-6 max-w-xl mx-auto">
            By booking a call, you consent to receive appointment reminder SMS messages
            from Third Power Performance, LLC. Message and data rates may apply. Reply
            STOP to opt out. View our{" "}
            <a href="/privacy" className="text-electric/60 hover:text-electric">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-electric/60 hover:text-electric">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </section>

      {/* Who is Dan */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
                Your Strategic AI Advisor
              </p>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                About Dan Gentry
              </h2>
              <p className="text-light/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                Dan is a TEDx speaker, podcast host, and founder of Third Power
                Performance. He works with leaders as their personal Chief AI Officer —
                helping them build AI systems that protect what matters most: their time,
                their relationships, and their humanity. He doesn&apos;t do tech demos. He
                builds strategic roadmaps that actually get implemented.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/consulting"
                  className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
                >
                  Fractional Chief AI Officer
                </a>
                <a
                  href="/speaking"
                  className="inline-block border-2 border-electric text-electric px-6 py-3 rounded-lg font-semibold hover:bg-electric hover:text-navy transition-all duration-300"
                >
                  Book Dan to Speak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
