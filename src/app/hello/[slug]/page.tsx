import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prospects } from "@/data/prospects";

/* ------------------------------------------------------------------ */
/*  Testimonials shared across speaker-asset sections                  */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    quote:
      "Dan doesn\u2019t just talk about AI \u2014 he shows you how to use it without losing what makes you human.",
    author: "Conference Attendee",
  },
  {
    quote:
      "The most practical and inspiring AI keynote we\u2019ve ever booked. Our members were talking about it for weeks.",
    author: "Event Organizer",
  },
  {
    quote:
      "Dan has a rare gift for making complex technology feel personal and actionable.",
    author: "Executive Attendee",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Static generation for known prospect slugs                         */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  return Object.keys(prospects).map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata per prospect                                      */
/* ------------------------------------------------------------------ */
interface HelloPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: HelloPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prospect = prospects[slug];

  if (!prospect) {
    return { title: "Page Not Found | Third Power Life" };
  }

  return {
    title: `${prospect.name} \u2014 A Note from Dan Gentry | Third Power Life`,
    description: `A personalized message for ${prospect.name} at ${prospect.organization} from Dan Gentry.`,
    robots: { index: false, follow: false },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default async function HelloPage({ params }: HelloPageProps) {
  const { slug } = await params;
  const prospect = prospects[slug];

  if (!prospect) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* -- Personalized Hero -------------------------------------- */}
      <section className="bg-brand-light px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/headshot.png"
              alt="Dan Gentry"
              width={200}
              height={200}
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {prospect.greeting}
            </h1>
          </div>
        </div>
      </section>

      {/* -- Custom Message (letter style) -------------------------- */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            {prospect.customMessage}
          </p>
          <p className="mt-8 text-base font-semibold text-brand-navy">
            &mdash; Dan
          </p>
        </div>
      </section>

      {/* -- Video Embed (conditional) ------------------------------ */}
      {prospect.videoUrl && (
        <section className="bg-brand-white px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              A Quick Message for You
            </h2>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
              <iframe
                src={prospect.videoUrl}
                title={`Video message for ${prospect.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* -- Speaker Assets (conditional) --------------------------- */}
      {prospect.showSpeakerAssets && (
        <section className="bg-brand-white px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Speaker Resources
            </h2>

            {/* Keynote summary */}
            <div className="mt-10 rounded-xl border border-gray-200 bg-brand-light p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-brand-navy">
                Signature Keynote: Humanity Amplified
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                AI can save you 10 hours a week &mdash; but do you know what
                you&rsquo;d do with them? <em>Humanity Amplified</em> reframes
                the AI conversation from productivity to purpose. Dan helps
                audiences see the difference between Machine Work (what AI
                should handle) and Meaning Work (what humans must fiercely
                protect), and walks them through a practical roadmap to reclaim
                their time and attention.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.thirdpowerperformance.com/dan-tedx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-brand-accent underline underline-offset-2 hover:text-brand-navy"
                >
                  Watch Dan&rsquo;s TEDx Talk
                </a>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-xl border border-gray-200 bg-brand-light p-6"
                >
                  <p className="text-sm leading-relaxed text-gray-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-medium text-gray-500">
                    &mdash; {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Speaker one-sheet available on request.
            </p>
          </div>
        </section>
      )}

      {/* -- Book / Box Section (conditional placeholder) ----------- */}
      {prospect.showBookSection && (
        <section className="bg-brand-light px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-gray-600">
              Dan&rsquo;s book is on the way. Stay tuned for more details.
            </p>
          </div>
        </section>
      )}

      {/* -- CTA Section -------------------------------------------- */}
      <section className="bg-brand-navy px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <Link
            href={prospect.ctaUrl}
            className="inline-block rounded-lg bg-brand-gold px-10 py-4 text-lg font-semibold text-brand-navy transition-opacity hover:opacity-90"
          >
            {prospect.ctaText}
          </Link>
          <p className="mt-8 text-base text-gray-300">
            Looking forward to our conversation. &mdash; Dan
          </p>
        </div>
      </section>
    </div>
  );
}
