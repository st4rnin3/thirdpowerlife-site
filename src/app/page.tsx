import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import NewsletterForm from "@/components/NewsletterForm";

/* ------------------------------------------------------------------ */
/*  Data constants — keep markup clean                                 */
/* ------------------------------------------------------------------ */

const MACHINE_WORK_ITEMS = [
  "Research & data gathering",
  "Email drafts & follow-ups",
  "Formatting & document prep",
  "Scheduling & calendar management",
  "Data entry & reconciliation",
  "Meeting summaries & action items",
];

const MEANING_WORK_ITEMS = [
  "Leadership & decision-making",
  "Creativity & innovation",
  "Family & relationships",
  "Mentoring & coaching",
  "Strategic thinking",
  "Being fully present",
];

const ASCENSION_LEVELS = [
  {
    level: 0,
    name: "Explorer",
    description: "Remove fear, build confidence",
    accent: "border-gray-400",
  },
  {
    level: 1,
    name: "Assistant",
    description: "AI as intern. 5\u201310 hrs/week saved",
    accent: "border-brand-gold/50",
  },
  {
    level: 2,
    name: "Agent",
    description: "AI runs workflows. 15\u201325 hrs/week saved",
    accent: "border-brand-gold/75",
  },
  {
    level: 3,
    name: "Commander",
    description: "AI ecosystems. 30\u201340+ hrs/week reclaimed",
    accent: "border-brand-gold",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.",
    author: "Ryan L.",
  },
  {
    quote:
      "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.",
    author: "Mary S.",
  },
  {
    quote:
      "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board, from manager to CEO or Owner.",
    author: "Michael M.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="pt-20">
      {/* ============================================================ */}
      {/* 1. Hero Section                                              */}
      {/* ============================================================ */}
      <section className="bg-brand-navy px-6 py-20 sm:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-white sm:text-5xl lg:text-6xl">
              Your Personal
              <br />
              <span className="text-brand-gold">Chief AI Officer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300 sm:text-xl lg:mx-0">
              I help entrepreneurs leverage AI to grow their business&nbsp;&mdash;
              without losing their humanity in the process.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/speaking"
                className="inline-block rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
              >
                Book Dan to Speak
              </Link>
              <Link
                href="/consulting"
                className="inline-block rounded-lg border-2 border-brand-gold px-8 py-3.5 text-base font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-navy"
              >
                Explore fCAIO Services
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <Image
              src="/images/headshot.png"
              alt="Dan Gentry — TEDx Speaker, AI Strategist, Fractional Chief AI Officer"
              width={400}
              height={400}
              priority
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. The Problem / Hook Section                                */}
      {/* ============================================================ */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            AI Can Save You 10 Hours a Week.
            <br className="hidden sm:block" />
            Do You Know What You&apos;d Do With Them?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            High-achieving professionals build everything they thought they
            wanted&nbsp;&mdash; and lose everything that actually matters: time,
            presence, health, family. Most AI conversations focus on working
            faster. Dan&apos;s approach is different. He helps you use AI to
            protect what matters most.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. Machine Work vs Meaning Work                              */}
      {/* ============================================================ */}
      <section className="bg-brand-light px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Two Kinds of Work" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Machine Work */}
            <div className="rounded-xl border border-gray-200 bg-brand-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl">
                  {/* gear icon */}
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-gray-500">
                  Machine Work
                </h3>
              </div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-400">
                What AI handles
              </p>
              <ul className="space-y-2">
                {MACHINE_WORK_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Meaning Work */}
            <div className="rounded-xl border border-brand-gold/30 bg-brand-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10 text-xl">
                  {/* heart icon */}
                  <svg className="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-brand-gold">
                  Meaning Work
                </h3>
              </div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-gold/70">
                What humans protect
              </p>
              <ul className="space-y-2">
                {MEANING_WORK_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key insight */}
          <blockquote className="mt-12 border-l-4 border-brand-gold pl-6 text-center italic text-gray-700 md:text-left">
            <p className="text-lg sm:text-xl">
              &ldquo;If AI is used correctly, it should remove machine work so
              humans can amplify meaning work.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. From the Stage                                            */}
      {/* ============================================================ */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="From the Stage" />

          <p className="mt-6 text-lg text-gray-600">
            As a{" "}
            <a
              href="https://www.thirdpowerperformance.com/dan-tedx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accent underline decoration-brand-gold/50 underline-offset-2 transition-colors hover:text-brand-gold"
            >
              TEDx speaker
            </a>
            , Dan delivers high-energy keynotes that challenge audiences to
            rethink their relationship with technology.
          </p>

          <div className="mt-10 rounded-xl border border-gray-200 bg-brand-light p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Signature Keynote
            </p>
            <h3 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Humanity Amplified: Redefining Success in the Age of AI
            </h3>
            <p className="mt-4 text-gray-600">
              A provocative, story-driven talk that shows leaders how to
              harness AI without sacrificing the human connections that drive
              real success. Dan draws on his own journey from burnout to
              balance&nbsp;&mdash; and the AI systems he built along the way.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/speaking"
              className="inline-block rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
            >
              Book Dan for Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. AI Ascension Framework                                    */}
      {/* ============================================================ */}
      <section className="bg-brand-navy px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            The AI Ascension Model
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A clear path from AI-curious to AI-powered.
          </p>

          {/* Levels */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASCENSION_LEVELS.map(({ level, name, description, accent }) => (
              <div
                key={level}
                className={`rounded-xl border-2 ${accent} bg-brand-blue/60 p-6 text-left transition-transform hover:scale-105`}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                  Level {level}
                </p>
                <h3 className="mt-1 text-xl font-bold text-brand-white">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-xl font-medium text-brand-gold">
            Where are you on the path?
          </p>
          <div className="mt-6">
            <Link
              href="/consulting"
              className="inline-block rounded-lg border-2 border-brand-gold px-8 py-3.5 text-base font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-navy"
            >
              Find Out
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. Testimonials                                              */}
      {/* ============================================================ */}
      <section className="bg-brand-light px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="What People Are Saying" />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map(({ quote, author }) => (
              <figure
                key={author}
                className="rounded-xl bg-brand-white p-8 shadow-sm"
              >
                {/* Decorative quote mark */}
                <span
                  className="block text-4xl leading-none text-brand-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-gray-700">{quote}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-brand-navy">
                  &mdash; {author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. Podcast                                                   */}
      {/* ============================================================ */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Third Power Life Podcast"
            subtitle="Season 3: Saving Our Humanity with AI"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1DB954] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Listen on Spotify
            </a>

            {/* Apple Podcasts */}
            <a
              href="https://podcasts.apple.com/us/podcast/third-power-life/id1440527025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#872EC4] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.466 1.326 1.32 2.16 3.07 2.418 5.074.06.47-.312.882-.792.882a.788.788 0 01-.786-.69 7.632 7.632 0 00-1.95-4.108c-1.278-1.272-2.988-2.004-4.915-2.004-1.926 0-3.636.732-4.914 2.004a7.632 7.632 0 00-1.95 4.108.788.788 0 01-.786.69c-.48 0-.852-.414-.792-.882.258-2.004 1.092-3.756 2.418-5.074 1.577-1.564 3.69-2.466 6.024-2.466zm.072 3.132c1.56 0 2.988.588 4.074 1.674a5.712 5.712 0 011.554 3.024.684.684 0 01-.678.78.69.69 0 01-.684-.594c-.18-1.14-.72-2.166-1.53-2.976A5.048 5.048 0 0011.937 6.6c-1.38 0-2.664.528-3.636 1.488a5.048 5.048 0 00-1.53 2.976.69.69 0 01-.684.594.684.684 0 01-.678-.78 5.712 5.712 0 011.554-3.024 6.036 6.036 0 014.074-1.674v.12-.12zm-.06 3.036a3.24 3.24 0 013.24 3.24c0 .948-.414 1.8-1.068 2.388.63 1.386.93 2.85.93 4.404 0 .858-.6 2.664-3.09 2.664-2.49 0-3.09-1.806-3.09-2.664 0-1.554.3-3.018.93-4.404A3.223 3.223 0 018.637 11.976a3.24 3.24 0 013.24-3.24z" />
              </svg>
              Listen on Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. Newsletter Signup                                         */}
      {/* ============================================================ */}
      <section className="bg-brand-navy px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Get the Actionable AI Playbook
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Weekly insights on using AI to grow your business and protect what
            matters.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. Dual CTA Section                                          */}
      {/* ============================================================ */}
      <CTASection heading="Ready to Take Command?" />
    </div>
  );
}
