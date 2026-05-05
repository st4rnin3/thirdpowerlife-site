import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "AI Ascension Guide | Third Power Life",
  description:
    "A practical roadmap for using AI to reclaim time, increase trust, and become more human - based on Dan Gentry's Humanity Amplified framework.",
  openGraph: {
    title: "AI Ascension Guide | Third Power Life",
    description:
      "A practical roadmap for using AI to reclaim time, increase trust, and become more human - based on Dan Gentry's Humanity Amplified framework.",
    url: "https://www.thirdpowerlife.ai/ai-ascension-guide",
    images: [
      {
        url: "https://www.thirdpowerlife.ai/images/connect/connect-2026-stage-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Dan Gentry speaking at CONNECT 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ascension Guide | Third Power Life",
    description:
      "Use AI to reclaim time, increase trust, and become more human - not just more productive.",
    images: ["https://www.thirdpowerlife.ai/images/connect/connect-2026-stage-photo.jpg"],
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/ai-ascension-guide",
  },
};

const LEVELS = [
  {
    level: 0,
    name: "Explorer",
    question: "How do I dip a toe into AI safely?",
    shift: "Fear to function",
    trust: "Start transparently. Use AI to prepare better, not pretend.",
    image: "/images/connect/level-0-explorer.jpg",
  },
  {
    level: 1,
    name: "Assistant",
    question: "How can an AI assistant lighten my workload today?",
    shift: "Task performer to effective delegator",
    trust: "Let AI draft, research, and summarize, but keep the human touch as the last touch.",
    image: "/images/connect/level-1-assistant.jpg",
  },
  {
    level: 2,
    name: "Agent",
    question: "How do I get an agent to finish a task end-to-end while I work elsewhere?",
    shift: "Conversation to delegation",
    trust: "Agents identify themselves, operate inside guardrails, and free you for real relationship work.",
    image: "/images/connect/level-2-agent.jpg",
  },
  {
    level: 3,
    name: "Commander",
    question: "How do I design an AI ecosystem that self-optimizes while I lead vision?",
    shift: "Efficiency to strategy",
    trust: "Become the most available, prepared, and human person in the room.",
    image: "/images/connect/level-3-commander.jpg",
  },
] as const;

const IMPACT = [
  ["I", "Identify the Need", "Where am I losing time that does not require my genius?"],
  ["M", "Map the Role", "Who or what is the right delegate: AI, human, or system?"],
  ["P", "Prepare What the Delegate Needs", "What context, resources, examples, and standards are required?"],
  ["A", "Assemble the Delegation Package", "Create the brief: context, task, constraints, quality bar, and output format."],
  ["C", "Commence", "Deploy the work and step away from the machine work."],
  ["T", "Tune and Refine", "Review results, improve the system, and raise the standard."],
] as const;

const STARTER_STEPS = [
  "List 10 recurring tasks from the last week.",
  "Mark each one Machine Work or Meaning Work.",
  "Choose one Machine Work task to delegate this week.",
  "Use IMPACT to build the delegation package.",
  "Decide in advance where the saved time goes: family, health, faith, strategy, rest, or relationship-building.",
] as const;

export default function AiAscensionGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI Ascension Guide",
            url: "https://www.thirdpowerlife.ai/ai-ascension-guide",
            description:
              "A practical roadmap for using AI to reclaim time, increase trust, and become more human.",
            isPartOf: {
              "@type": "WebSite",
              name: "Third Power Life",
              url: "https://www.thirdpowerlife.ai",
            },
          }),
        }}
      />

      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <Image
          src="/images/connect/connect-2026-stage-photo.jpg"
          alt="Dan Gentry speaking at CONNECT 2026"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/78 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/45" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              Humanity Amplified
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              The AI Ascension Guide: Use AI to Become More Human
            </h1>
            <p className="mt-6 text-lg md:text-xl text-light/80 max-w-2xl leading-relaxed">
              A practical roadmap for reclaiming time, reducing busywork, and
              building trust in a world where everything feels increasingly fake.
            </p>
            <p className="mt-4 text-light/55 max-w-2xl">
              Built from Dan Gentry&apos;s Humanity Amplified keynote and the
              Third Power Performance AI Ascension framework.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#get-guide"
                className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-center hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
              >
                Get the Free Guide
              </a>
              <Link
                href="/connect#clarity-call"
                className="border-2 border-electric/50 text-electric px-8 py-4 rounded-lg font-heading font-semibold text-center hover:bg-electric/10 hover:border-electric transition-all duration-300"
              >
                Book a Free AI Clarity Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            The Trust Recession
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            AI is an authenticity accelerator.
          </h2>
          <p className="text-lg text-light/70 leading-relaxed">
            People are suspicious of what they see, read, and hear. AI can make
            that worse by helping fakers fake it faster, or it can help
            authentic people become more present, prepared, and trustworthy.
          </p>
          <p className="mt-8 text-2xl font-heading font-bold text-white">
            The question is not whether AI is good or bad. The question is
            whether you will use it to fake more, or to free yourself to be
            more real.
          </p>
        </div>
      </section>

      <section className="bg-midnight/25 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              The Split
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Machine Work vs. Meaning Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Machine Work
              </h3>
              <p className="text-light/65 leading-relaxed">
                Research, formatting, summarizing, sorting, scheduling, data
                entry, draft generation, and repetitive follow-up.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Meaning Work
              </h3>
              <p className="text-light/65 leading-relaxed">
                Leadership, trust-building conversations, coaching, creativity,
                family presence, strategy, mentoring, and human connection.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-2xl font-heading font-bold text-electric">
            AI does not build trust. You build trust. AI gives you back the time
            to do it.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              The Roadmap
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              The 4 Levels of AI Ascension
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {LEVELS.map((level) => (
              <article
                key={level.name}
                className="group relative min-h-[380px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={level.image}
                  alt={`AI Ascension Level ${level.level}: ${level.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/82 to-black/50" />
                <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-end p-8">
                  <p className="text-electric font-heading uppercase tracking-widest text-xs mb-2">
                    Level {level.level}
                  </p>
                  <h3 className="text-3xl font-heading font-bold text-white mb-3">
                    {level.name}
                  </h3>
                  <p className="text-light/85 font-semibold mb-4">
                    {level.question}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 border-t border-white/15 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-electric mb-1">
                        Shift
                      </p>
                      <p className="text-sm text-light/65">{level.shift}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-electric mb-1">
                        Trust Move
                      </p>
                      <p className="text-sm text-light/65">{level.trust}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy to-midnight/35 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
                The Core Skill
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                IMPACT Delegation
              </h2>
              <p className="text-light/70 leading-relaxed mb-6">
                Prompting is asking better questions. Delegation is building
                better systems. IMPACT gives you the operating rhythm for
                deciding what AI should do, what humans should do, and what
                guardrails make the work trustworthy.
              </p>
              <Link
                href="/blog/impact-method-delegate-to-ai"
                className="text-electric font-heading font-semibold underline underline-offset-4 hover:text-white transition-colors"
              >
                Read the IMPACT method
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {IMPACT.map(([letter, title, copy]) => (
                <div key={letter} className="glass rounded-2xl p-6">
                  <div className="text-4xl font-heading font-bold text-electric mb-3">
                    {letter}
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-light/65 leading-relaxed">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3">
                Level 2 Preview
              </p>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                DEPLOY
              </h2>
              <p className="text-light/70 leading-relaxed mb-5">
                Define the mission, establish identity, provision resources,
                lay down guardrails, orchestrate connections, and yield control.
              </p>
              <p className="text-white font-heading font-bold">
                You do not get autonomy by removing control. You get autonomy
                by designing trust.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3">
                Level 3 Preview
              </p>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                COMMAND
              </h2>
              <p className="text-light/70 leading-relaxed mb-5">
                Core architecture, operations design, memory and knowledge,
                messaging, autonomy, governance, network effects, and oversight.
              </p>
              <p className="text-white font-heading font-bold">
                Commanders do not babysit machines. They design systems, watch
                outcomes, and protect what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight/25 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            The Productivity Trap
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            The danger is not that AI fails. The danger is that AI works.
          </h2>
          <p className="text-lg text-light/70 leading-relaxed">
            If you reclaim every hour and immediately spend it doing more work,
            you have only built a faster cage. The point is not to become more
            robotic. The point is to become more present.
          </p>
          <p className="mt-8 text-2xl font-heading font-bold text-white">
            If AI gave you back 20 hours this week, would you spend them being
            more productive... or more present?
          </p>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              Start in 30 Minutes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              Your first AI Ascension exercise
            </h2>
            <ol className="space-y-4">
              {STARTER_STEPS.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric text-navy font-heading font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-light/75">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div id="get-guide">
        <NewsletterSignup
          heading="Get the Free AI Ascension Guide"
          description="Use the web guide now and join the AI Ascension Guide list for the polished PDF and follow-up tools when they are released."
          buttonLabel="Get the Guide"
          submittingLabel="Sending..."
          successMessage="You're on the AI Ascension Guide list. Use the web guide here now, and watch your inbox for the polished PDF and follow-up tools when they are released."
          alreadySubscribedMessage="You're already on the list. We updated your AI Ascension Guide request and will send the guide follow-up when it is released."
          source="ai_ascension_guide"
          sourceDetail="Lead magnet: AI Ascension Guide (/ai-ascension-guide)"
          leadMagnet="ai_ascension_guide"
          leadMagnetTitle="AI Ascension Guide"
          landingPage="https://www.thirdpowerlife.ai/ai-ascension-guide"
          tags={["ai-ascension-guide"]}
          metadata={{
            utm_campaign: "ai-ascension-guide",
            utm_content: "article-cta",
          }}
        />
      </div>

      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-light/65 mb-6">
            Want help finding your current level and your highest-leverage first
            move?
          </p>
          <Link
            href="/connect#clarity-call"
            className="inline-block border-2 border-electric text-electric px-8 py-4 rounded-lg font-heading font-semibold hover:bg-electric hover:text-navy transition-all duration-300"
          >
            Book a Free AI Clarity Call with Dan
          </Link>
        </div>
      </section>
    </>
  );
}
