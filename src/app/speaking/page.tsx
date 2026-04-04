import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dan Gentry to Speak — Keynotes, Workshops & Panels",
  description: "Humanity Amplified keynote, Machine Work vs Meaning Work workshop, and Commander Mode closing keynote. Book Dan for your next event.",
  openGraph: {
    title: "Book Dan Gentry to Speak — Keynotes, Workshops & Panels",
    description: "Humanity Amplified keynote, Machine Work vs Meaning Work workshop, and Commander Mode closing keynote. Book Dan for your next event.",
    url: "https://www.thirdpowerlife.ai/speaking",
  },
  twitter: {
    title: "Book Dan Gentry to Speak — Keynotes, Workshops & Panels",
    description: "Humanity Amplified keynote, Machine Work vs Meaning Work workshop, and Commander Mode closing keynote. Book Dan for your next event.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/speaking",
  },
};

const keynoteItems = [
  "The Machine Work vs. Meaning Work audit for their own role",
  "The AI Ascension roadmap they can start Monday",
  "The IMPACT method for delegating work to AI like a leader, not a techie",
  "A personal answer to: \"What am I no longer willing to sacrifice?\"",
];

const testimonials = [
  {
    quote:
      "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.",
    name: "Ryan L.",
  },
  {
    quote:
      "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.",
    name: "Mary S.",
  },
  {
    quote:
      "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board.",
    name: "Michael M.",
  },
];

export default function Speaking() {
  return (
    <>
      {/* Hero — full-bleed with TEDx stage photo */}
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/tedx-stage-photo.jpg"
          alt="Dan Gentry on the TEDx stage"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
              From the Stage
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              AI Keynotes That Change How Leaders Think
            </h1>
            <p className="text-lg text-light/70 mb-8">
              Dan doesn&apos;t give tech demos. He gives leaders a framework to reclaim
              their time, protect what matters, and use AI with intention — not just
              efficiency.
            </p>
            <a
              href="/schedule"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
            >
              Book an Intro Call
            </a>
          </div>
        </div>
      </section>

      {/* Signature Keynote */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-2">
              Signature Keynote · 45-60 min
            </p>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Humanity Amplified: Redefining Success in the Age of AI
            </h2>
            <p className="text-light/70 leading-relaxed mb-6">
              Most AI talks focus on speed and automation. This one asks a more important
              question: what should AI do so humans can do what matters most? Dan draws
              the line between Machine Work and Meaning Work, giving audiences a clear,
              practical roadmap to reclaim 10-40 hours per week — and a framework for
              making sure those hours go toward the life they actually want, not more
              busywork in disguise.
            </p>
            <h3 className="text-white font-semibold mb-3">Audiences leave with:</h3>
            <ul className="space-y-2 mb-6">
              {keynoteItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-electric mt-0.5">&#10003;</span>
                  <span className="text-light/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-light/40 italic text-sm">
              Best for: Leadership conferences, future-of-work summits, corporate
              innovation events, professional associations
            </p>
          </div>
        </div>
      </section>

      {/* Additional Topics */}
      <section className="bg-midnight/30 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Additional Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Talk 1 */}
            <div className="bg-midnight/60 border border-white/10 rounded-xl p-8 hover:border-electric/20 transition-all duration-300">
              <p className="text-electric text-sm font-semibold mb-2">
                Executive / Leadership Track · 30-45 min
              </p>
              <h3 className="text-white font-heading font-bold text-xl mb-3">
                Machine Work vs. Meaning Work: What Leaders Should Automate — and What
                They Must Protect
              </h3>
              <p className="text-light/60 text-sm mb-4">
                A practical framework to identify which work should be handed to AI and
                which must be fiercely protected. Real audit examples, four levels of AI
                adoption, and the insight that the best AI leaders aren&apos;t the most
                technical — they&apos;re the best delegators.
              </p>
              <p className="text-light/40 italic text-xs">
                Best for: C-suite, operations tracks, transformation events
              </p>
            </div>

            {/* Talk 2 */}
            <div className="bg-midnight/60 border border-white/10 rounded-xl p-8 hover:border-electric/20 transition-all duration-300">
              <p className="text-electric text-sm font-semibold mb-2">
                Motivational / Closing Keynote · 30-45 min
              </p>
              <h3 className="text-white font-heading font-bold text-xl mb-3">
                Commander Mode: Stop Reacting to AI and Start Using It Intentionally
              </h3>
              <p className="text-light/60 text-sm mb-4">
                Most people don&apos;t fail at AI adoption — they drift through it. This
                talk introduces Commander Mode: the identity shift from reacting to AI
                hype toward intentionally designing an AI-powered life.
              </p>
              <p className="text-light/40 italic text-xs">
                Best for: Closing keynotes, association annual meetings, personal
                development events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What Organizers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <p className="text-light/80 italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-electric font-semibold text-sm">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Let&apos;s Talk About Your Event
          </h2>
          <p className="text-white/80 mb-8">
            Whether it&apos;s a 45-minute keynote or a half-day workshop — Dan tailors
            every session to your audience and objectives.
          </p>
          <a
            href="/schedule"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
          >
            Book an Intro Call
          </a>
        </div>
      </section>
    </>
  );
}
