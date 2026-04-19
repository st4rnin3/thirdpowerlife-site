import type { Metadata } from "next";
import Link from "next/link";
import CalEmbedConnect from "@/components/CalEmbedConnect";

export const metadata: Metadata = {
  title: "CONNECT 2026 — Your Next Step | Dan Gentry",
  description:
    "You attended CONNECT 2026. Now take the next step: find your AI Ascension level and book your free AI Clarity Call with Dan Gentry.",
  openGraph: {
    title: "CONNECT 2026 — Your Next Step | Dan Gentry",
    description:
      "You attended CONNECT 2026. Now take the next step: find your AI Ascension level and book your free AI Clarity Call with Dan Gentry.",
    url: "https://www.thirdpowerlife.ai/connect",
  },
  twitter: {
    title: "CONNECT 2026 — Your Next Step | Dan Gentry",
    description:
      "You attended CONNECT 2026. Now take the next step: find your AI Ascension level and book your free AI Clarity Call with Dan Gentry.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/connect",
  },
};

/* ------------------------------------------------------------------ */
/*  Level card data for the 4 Levels of AI Ascension framework        */
/* ------------------------------------------------------------------ */

const LEVELS = [
  {
    level: 0,
    name: "Explorer",
    tagline: "Trust starts here",
    colorClass: "text-yellow-400",
    borderClass: "border-yellow-400/30",
  },
  {
    level: 1,
    name: "Assistant",
    tagline: "Saving hours, keeping judgment",
    colorClass: "text-electric",
    borderClass: "border-electric/30",
  },
  {
    level: 2,
    name: "Agent",
    tagline: "Delegation requires design",
    colorClass: "text-blue-400",
    borderClass: "border-blue-400/30",
  },
  {
    level: 3,
    name: "Commander",
    tagline: "Scale requires guardrails",
    colorClass: "text-green-400",
    borderClass: "border-green-400/30",
  },
] as const;

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
          <p className="text-xl text-light/70 max-w-2xl mx-auto mb-8">
            Thanks for being in the room. Here&apos;s how to keep the momentum
            going.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ai-ascension-diagnostic"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Find Your AI Ascension Level
            </Link>
            <a
              href="#clarity-call"
              className="inline-block border-2 border-electric text-electric px-6 py-3 rounded-lg font-semibold hover:bg-electric hover:text-navy transition-all duration-300"
            >
              Book Your AI Clarity Call
            </a>
          </div>
        </div>
      </section>

      {/* 4 Levels of AI Ascension */}
      <section className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              The Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              The 4 Levels of AI Ascension
            </h2>
            <p className="text-light/60 max-w-xl mx-auto">
              Every leader is somewhere on this path. Knowing your level changes
              everything about what to do next.
            </p>
          </div>

          {/* Level cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {LEVELS.map((lvl) => (
              <div
                key={lvl.level}
                className={`glass rounded-2xl p-8 border ${lvl.borderClass} text-center`}
              >
                <span
                  className={`inline-block text-5xl font-heading font-bold ${lvl.colorClass} mb-3`}
                >
                  {lvl.level}
                </span>
                <h3 className="text-white font-heading font-bold text-lg mb-2">
                  {lvl.name}
                </h3>
                <p className="text-light/60 text-sm leading-relaxed">
                  {lvl.tagline}
                </p>
              </div>
            ))}
          </div>

          {/* Diagnostic Launch Band */}
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Find your level in under 2 minutes.
            </h3>
            <p className="text-light/60 max-w-2xl mx-auto mb-8">
              This diagnostic will show you where you are now, what trust
              requires at your level, and the smartest next step from here.
            </p>
            <Link
              href="/ai-ascension-diagnostic"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Start the Diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* AI Clarity Call */}
      <section id="clarity-call" className="bg-midnight/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              Exclusive for CONNECT Attendees
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Book Your AI Clarity Call
            </h2>
            <p className="text-light/60 max-w-2xl mx-auto mb-2">
              30 minutes, one-on-one with Dan. We&apos;ll identify your level,
              find the one workflow that&apos;s eating your time, and map your
              first move. No pitch. No contract. Just clarity.
            </p>
            <p className="text-light/40 text-sm">
              Limited availability — book while spots are open.
            </p>
          </div>

          {/* Cal.com embed */}
          <CalEmbedConnect />

          {/* SMS consent */}
          <p className="text-light/30 text-xs text-center mt-6 max-w-xl mx-auto">
            By booking a call, you consent to receive appointment reminder SMS
            messages from Third Power Performance, LLC. Message and data rates
            may apply. Reply STOP to opt out. View our{" "}
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
                Performance. He works with leaders as their personal Chief AI
                Officer — helping them build AI systems that protect what matters
                most: their time, their relationships, and their humanity. He
                doesn&apos;t do tech demos. He builds strategic roadmaps that
                actually get implemented.
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
