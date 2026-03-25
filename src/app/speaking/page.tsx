import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title:
    "Book Dan Gentry to Speak — Keynotes on AI & Human Potential | Third Power Life",
  description:
    "Book Dan Gentry for your next event. Signature keynote: Humanity Amplified — redefining success in the age of AI. TEDx speaker, AI strategist.",
};

/* ------------------------------------------------------------------
   Data: Takeaways for the signature keynote
   ------------------------------------------------------------------ */
const KEYNOTE_TAKEAWAYS = [
  "The Machine Work vs. Meaning Work audit for their own role",
  "The AI Ascension roadmap they can start Monday",
  "The IMPACT method for delegating work to AI like a leader, not a techie",
  'A personal answer to: "What am I no longer willing to sacrifice?"',
] as const;

/* ------------------------------------------------------------------
   Data: Additional talk cards
   ------------------------------------------------------------------ */
const ADDITIONAL_TALKS = [
  {
    title: "Machine Work vs. Meaning Work",
    duration: "30-45 min",
    track: "Executive / Leadership Track",
    description:
      "Many teams spend a shocking portion of their week on work that doesn't require a human brain. This session gives leaders a practical framework to identify which work should be handed to AI and which must be fiercely protected.",
    bestFor:
      "C-suite audiences, operations tracks, transformation events, SMB/founder events",
  },
  {
    title: "Commander Mode",
    duration: "30-45 min",
    track: "Motivational / Closing Keynote",
    description:
      "Most people don't fail at AI adoption. They drift through it. This talk introduces Commander Mode — the identity shift from reacting to AI hype toward intentionally designing an AI-powered life.",
    bestFor:
      "Closing keynotes, association annual meetings, personal development events",
  },
] as const;

/* ------------------------------------------------------------------
   Data: Testimonials
   ------------------------------------------------------------------ */
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

export default function SpeakingPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-brand-light px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="/images/headshot.png"
              alt="Dan Gentry headshot"
              width={280}
              height={280}
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              Book Dan to Speak
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Keynotes that reframe AI from a productivity tool into a human
              protection system.
            </p>
          </div>
        </div>
      </section>

      {/* ── Signature Keynote ──────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Humanity Amplified: Redefining Success in the Age of AI" />

          <p className="mt-2 text-center text-sm font-medium text-gray-500">
            45-60 minutes
          </p>

          <p className="mt-8 text-base leading-relaxed text-gray-700">
            Most AI talks focus on speed and automation. This one asks a more
            important question: what should AI do so humans can do what matters
            most? Dan draws the line between Machine Work and Meaning Work.
            Through the AI Ascension model, audiences get a clear, practical
            roadmap to reclaim 10-40 hours per week.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-brand-navy">
              Audiences leave with:
            </h3>
            <ul className="mt-4 space-y-3">
              {KEYNOTE_TAKEAWAYS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            <span className="font-semibold text-brand-navy">Best for:</span>{" "}
            Leadership conferences, future-of-work summits, corporate innovation
            events, professional associations
          </p>
        </div>
      </section>

      {/* ── Additional Talks ───────────────────────────────────── */}
      <section className="bg-brand-white px-6 py-20">
        <SectionHeading title="Additional Talks" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {ADDITIONAL_TALKS.map((talk) => (
            <div
              key={talk.title}
              className="rounded-xl border border-gray-200 bg-brand-light p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-navy">
                {talk.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
                <span>{talk.duration}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{talk.track}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {talk.description}
              </p>
              <p className="mt-4 text-sm text-gray-500">
                <span className="font-semibold text-brand-navy">
                  Best for:
                </span>{" "}
                {talk.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="px-6 py-20">
        <SectionHeading title="What People Are Saying" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-xl border border-gray-200 bg-brand-white p-6 shadow-sm"
            >
              <p className="text-base leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-navy">
                &mdash; {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Ready to Bring Dan to Your Event?
          </h2>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90"
            >
              Book an Intro Call
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Downloadable speaker one-sheet coming soon
          </p>
        </div>
      </section>
    </div>
  );
}
