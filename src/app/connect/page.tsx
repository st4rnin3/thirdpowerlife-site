import type { Metadata } from "next";
import Image from "next/image";
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
    micro: "Learning before delegating",
    image: "/images/connect/level-0-explorer.jpg",
    alt: "A person standing before ascending glass steps illuminated by warm golden light",
    accentColor: "#facc15", // yellow-400
    glowShadow: "0 0 40px rgba(250, 204, 21, 0.25)",
    borderGlow: "rgba(250, 204, 21, 0.4)",
  },
  {
    level: 1,
    name: "Assistant",
    tagline: "Saving hours, keeping judgment",
    micro: "AI helps, you still decide",
    image: "/images/connect/level-1-assistant.jpg",
    alt: "A figure standing next to a floating crystalline monolith in a vast dark space",
    accentColor: "#00D2FF", // electric
    glowShadow: "0 0 40px rgba(0, 210, 255, 0.25)",
    borderGlow: "rgba(0, 210, 255, 0.4)",
  },
  {
    level: 2,
    name: "Agent",
    tagline: "Delegation requires design",
    micro: "Workflows move with supervision",
    image: "/images/connect/level-2-agent.jpg",
    alt: "A person at the center of an interconnected network of glass nodes with cyan and gold pathways",
    accentColor: "#60a5fa", // blue-400
    glowShadow: "0 0 40px rgba(96, 165, 250, 0.25)",
    borderGlow: "rgba(96, 165, 250, 0.4)",
  },
  {
    level: 3,
    name: "Commander",
    tagline: "Scale requires guardrails",
    micro: "Systems operate, you lead",
    image: "/images/connect/level-3-commander.jpg",
    alt: "A figure standing on an illuminated command platform with guardrails and golden rings of light",
    accentColor: "#4ade80", // green-400
    glowShadow: "0 0 40px rgba(74, 222, 128, 0.25)",
    borderGlow: "rgba(74, 222, 128, 0.4)",
  },
] as const;

export default function ConnectPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* Hero — atmospheric background with layered radial gradients  */}
      {/* ============================================================ */}
      <section
        className="relative py-24 sm:py-32 lg:py-40"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 87, 255, 0.15) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 40% at 30% 80%, rgba(250, 204, 21, 0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 50% at 70% 90%, rgba(0, 210, 255, 0.05) 0%, transparent 60%)",
            "#001433",
          ].join(", "),
        }}
      >
        {/* Subtle bloom accent — top center glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 35% at 50% -5%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-5 animate-fade-in-up">
            CONNECT 2026
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Humanity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Amplified
            </span>
          </h1>

          <p className="text-xl text-light/70 max-w-2xl mx-auto mb-10 animate-fade-in-up">
            Thanks for being in the room. Now let&apos;s turn insight into your
            next move.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
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

      {/* ============================================================ */}
      {/* Transition Band — bold bridge text                           */}
      {/* ============================================================ */}
      <section className="relative py-12 sm:py-16">
        {/* Top gradient divider */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-3xl"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.3), transparent)",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 leading-snug">
            You don&apos;t need more AI noise.
          </p>
          <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-snug">
            You need to know where you are, what trust requires, and what your
            next move is.
          </p>
        </div>

        {/* Bottom gradient divider */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full max-w-3xl"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.3), transparent)",
          }}
        />
      </section>

      {/* ============================================================ */}
      {/* The 4 Levels — image-led 2x2 grid centerpiece               */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Grid with ascension gradient connector */}
          <div className="relative">
            {/* Ascension connector — vertical gradient line (desktop only) */}
            <div
              className="hidden lg:block absolute -left-6 top-8 bottom-8 w-px"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to bottom, #facc15, #00D2FF 33%, #60a5fa 66%, #4ade80)",
              }}
            />

            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {LEVELS.map((lvl) => (
                <div
                  key={lvl.level}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  {/* Background image */}
                  <Image
                    src={lvl.image}
                    alt={lvl.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-colors duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20" />

                  {/* Bottom border glow accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    aria-hidden="true"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${lvl.borderGlow}, transparent)`,
                    }}
                  />

                  {/* Content — bottom-left positioned */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    {/* Large numeral with accent glow */}
                    <span
                      className="block text-6xl md:text-7xl font-heading font-bold opacity-30"
                      style={{
                        color: lvl.accentColor,
                        textShadow: lvl.glowShadow,
                      }}
                    >
                      {lvl.level}
                    </span>

                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white -mt-2 mb-1">
                      {lvl.name}
                    </h3>

                    <p className="text-sm md:text-base text-light/70">
                      {lvl.tagline}
                    </p>

                    <p className="text-xs text-light/50 mt-1">{lvl.micro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Diagnostic Launch Band                                       */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Subtle radial glow inside the glass panel */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0, 87, 255, 0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Find your level in under 2 minutes.
              </h3>
              <p className="text-light/60 max-w-2xl mx-auto mb-8">
                This diagnostic will show you where you are now, what trust
                requires at your level, and the smartest next step from here.
              </p>
              <Link
                href="/ai-ascension-diagnostic"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:animate-glow transition-all duration-300"
              >
                Start the Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI Clarity Call — Booking                                    */}
      {/* ============================================================ */}
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

      {/* ============================================================ */}
      {/* About Dan                                                    */}
      {/* ============================================================ */}
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
