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
    description:
      "You are learning where AI fits and what is safe to delegate.",
    nextMove: "Start with one low-risk use case.",
    image: "/images/connect/level-0-explorer.jpg",
    alt: "A person standing before ascending glass steps illuminated by warm golden light",
    accentColor: "#facc15",
    glowShadow: "0 0 40px rgba(250, 204, 21, 0.25)",
    borderGlow: "rgba(250, 204, 21, 0.4)",
  },
  {
    level: 1,
    name: "Assistant",
    tagline: "Saving hours, keeping judgment",
    description:
      "AI helps with drafts, research, and prep — but you still drive every decision.",
    nextMove: "Build one repeatable workflow.",
    image: "/images/connect/level-1-assistant.jpg",
    alt: "A figure standing next to a floating crystalline monolith in a vast dark space",
    accentColor: "#00D2FF",
    glowShadow: "0 0 40px rgba(0, 210, 255, 0.25)",
    borderGlow: "rgba(0, 210, 255, 0.4)",
  },
  {
    level: 2,
    name: "Agent",
    tagline: "Delegation requires design",
    description:
      "AI is doing real work, but ownership, review, and escalation are not fully designed.",
    nextMove: "Design trust into the workflow.",
    image: "/images/connect/level-2-agent.jpg",
    alt: "A person at the center of an interconnected network of glass nodes with cyan and gold pathways",
    accentColor: "#60a5fa",
    glowShadow: "0 0 40px rgba(96, 165, 250, 0.25)",
    borderGlow: "rgba(96, 165, 250, 0.4)",
  },
  {
    level: 3,
    name: "Commander",
    tagline: "Scale requires guardrails",
    description:
      "Multiple systems or agents are operating, and governance now matters.",
    nextMove: "Build the operating model for scale.",
    image: "/images/connect/level-3-commander.jpg",
    alt: "A figure standing on an illuminated command platform with guardrails and golden rings of light",
    accentColor: "#4ade80",
    glowShadow: "0 0 40px rgba(74, 222, 128, 0.25)",
    borderGlow: "rgba(74, 222, 128, 0.4)",
  },
] as const;

export default function ConnectPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* Hero — cinematic atmosphere with layered radial gradients    */}
      {/* ============================================================ */}
      <section
        className="relative py-28 sm:py-36 lg:py-44"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0, 87, 255, 0.15) 0%, transparent 70%)",
            "radial-gradient(ellipse 50% 55% at 20% 85%, rgba(250, 180, 21, 0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 50% at 70% 90%, rgba(0, 210, 255, 0.05) 0%, transparent 60%)",
            "#001433",
          ].join(", "),
        }}
      >
        {/* Top center bloom */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 35% at 50% -5%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-left warm glow for depth and asymmetry */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 45% 50% at 15% 90%, rgba(245, 180, 50, 0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-5 animate-fade-in-up">
            CONNECT 2026
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Humanity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Amplified
            </span>
          </h1>

          <p className="text-xl text-light/55 max-w-2xl mx-auto mb-10 tracking-wide animate-fade-in-up">
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
      {/* The 4 Levels — Desktop (2x2 immersive grid) + Mobile bands  */}
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

          {/* ----------------------------------------------------------
              MOBILE LAYOUT — compact cinematic bands (below md)
          ---------------------------------------------------------- */}
          <div className="md:hidden relative">
            {/* Vertical ascension connector line between bands */}
            <div
              className="absolute left-6 top-4 bottom-4 w-px z-10"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to bottom, #facc15, #00D2FF 33%, #60a5fa 66%, #4ade80)",
              }}
            />

            <div className="flex flex-col gap-3">
              {LEVELS.map((lvl) => (
                <div
                  key={lvl.level}
                  className="group relative overflow-hidden rounded-xl"
                  style={{ minHeight: "240px", maxHeight: "280px" }}
                >
                  {/* Background image — tight crop for mobile */}
                  <Image
                    src={lvl.image}
                    alt={lvl.alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-[50%_35%]"
                  />

                  {/* Strong dark overlay for mobile legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/55" />

                  {/* Bottom border glow accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    aria-hidden="true"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${lvl.borderGlow}, transparent)`,
                    }}
                  />

                  {/* Content — left-anchored, vertically centered */}
                  <div className="relative z-10 flex flex-col justify-center h-full pl-14 pr-5 py-5">
                    {/* Large backdrop numeral */}
                    <span
                      className="absolute top-2 right-4 text-8xl font-heading font-bold opacity-10 select-none"
                      aria-hidden="true"
                      style={{
                        color: lvl.accentColor,
                        textShadow: lvl.glowShadow,
                      }}
                    >
                      {lvl.level}
                    </span>

                    <h3 className="text-xl font-heading font-bold text-white mb-0.5">
                      <span
                        className="text-sm font-semibold mr-2 opacity-60"
                        style={{ color: lvl.accentColor }}
                      >
                        L{lvl.level}
                      </span>
                      {lvl.name}
                    </h3>

                    <p
                      className="text-sm font-heading font-semibold mb-2"
                      style={{ color: lvl.accentColor }}
                    >
                      {lvl.tagline}
                    </p>

                    <p className="text-sm text-light/70 leading-snug mb-3">
                      {lvl.description}
                    </p>

                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-light/40">
                        Next Move
                      </span>
                      <p className="text-xs text-light/55 mt-0.5">
                        {lvl.nextMove}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ----------------------------------------------------------
              DESKTOP LAYOUT — immersive 2x2 grid (md and above)
          ---------------------------------------------------------- */}
          <div className="hidden md:block relative">
            {/* Ascension connector — vertical gradient line (lg only) */}
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
                >
                  {/* Background image — fills panel naturally */}
                  <div className="absolute inset-0">
                    <Image
                      src={lvl.image}
                      alt={lvl.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Dark overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/35 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/25" />

                  {/* Bottom border glow accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    aria-hidden="true"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${lvl.borderGlow}, transparent)`,
                    }}
                  />

                  {/* Content — overlay positioned with generous padding */}
                  <div className="relative z-10 p-8 lg:p-10 min-h-[340px] lg:min-h-[380px] flex flex-col justify-end">
                    {/* Large backdrop numeral — oversized, semi-transparent */}
                    <span
                      className="absolute top-4 right-6 text-[8rem] lg:text-[10rem] font-heading font-bold opacity-15 select-none leading-none"
                      aria-hidden="true"
                      style={{
                        color: lvl.accentColor,
                        textShadow: lvl.glowShadow,
                      }}
                    >
                      {lvl.level}
                    </span>

                    {/* Level name */}
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-1">
                      {lvl.name}
                    </h3>

                    {/* Theme line — brighter, accent-tinted */}
                    <p
                      className="text-base lg:text-lg font-heading font-semibold mb-3"
                      style={{ color: lvl.accentColor }}
                    >
                      {lvl.tagline}
                    </p>

                    {/* What this looks like — body text */}
                    <p className="text-sm lg:text-base text-light/70 leading-relaxed mb-4">
                      {lvl.description}
                    </p>

                    {/* Next move — muted with small label */}
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-light/40">
                        Next Move
                      </span>
                      <p className="text-sm text-light/55 mt-0.5">
                        {lvl.nextMove}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Diagnostic Launch Band — atmospheric, decisive                */}
      {/* ============================================================ */}
      <section className="relative py-20 sm:py-24">
        {/* Atmospheric glow transition into the section */}
        <div
          className="pointer-events-none absolute -top-16 left-0 right-0 h-32"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(0, 87, 255, 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Top gradient divider line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-2xl"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.35), transparent)",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Background radial glow */}
          <div
            className="pointer-events-none absolute inset-0 -inset-y-12"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0, 87, 255, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Find your level in under 2 minutes.
            </h3>

            <p className="text-lg text-light/50 font-heading tracking-wide mb-8">
              A strategic diagnostic, not a personality quiz.
            </p>

            <p className="text-light/60 max-w-2xl mx-auto mb-10">
              This diagnostic will show you where you are now, what trust
              requires at your level, and the smartest next step from here.
            </p>

            <Link
              href="/ai-ascension-diagnostic"
              className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg animate-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Start the Diagnostic
            </Link>

            <p className="text-sm text-light/40 mt-5">
              No email required to start.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI Clarity Call — Booking                                    */}
      {/* ============================================================ */}
      <section id="clarity-call" className="bg-midnight/30 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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

          {/* Cal.com embed — glass container with elegant border glow */}
          <div className="relative">
            {/* Top border glow line */}
            <div
              className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-full max-w-3xl z-10"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.3), transparent)",
              }}
            />

            <div className="glass rounded-2xl p-4 sm:p-6 lg:p-8">
              <CalEmbedConnect />
            </div>
          </div>

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
