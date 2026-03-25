import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dan Gentry to Speak — Keynotes, Workshops & Panels",
  description: "Humanity Amplified keynote, Machine Work vs Meaning Work workshop, and Commander Mode closing keynote. Book Dan for your next event.",
};

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">From the Stage</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Keynotes That Change How Leaders Think
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Dan doesn&apos;t give tech demos. He gives leaders a framework to
                reclaim their time, protect what matters, and use AI with intention —
                not just efficiency.
              </p>
              <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Book an Intro Call
              </a>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/headshot.png" alt="Dan Gentry speaking" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Keynote */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 border border-blue-100">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Signature Keynote · 45-60 min</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Humanity Amplified: Redefining Success in the Age of AI
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most AI talks focus on speed and automation. This one asks a more important question:
              what should AI do so humans can do what matters most? Dan draws the line between Machine
              Work and Meaning Work, giving audiences a clear, practical roadmap to reclaim 10-40
              hours per week — and a framework for making sure those hours go toward the life they
              actually want, not more busywork in disguise.
            </p>
            <h3 className="font-semibold text-gray-900 mb-3">Audiences leave with:</h3>
            <ul className="space-y-2 mb-6">
              {[
                "The Machine Work vs. Meaning Work audit for their own role",
                "The AI Ascension roadmap they can start Monday",
                "The IMPACT method for delegating work to AI like a leader, not a techie",
                "A personal answer to: \"What am I no longer willing to sacrifice?\"",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 italic">
              Best for: Leadership conferences, future-of-work summits, corporate innovation events, professional associations
            </p>
          </div>
        </div>
      </section>

      {/* Additional Talks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-blue-600 mb-2">Executive / Leadership Track · 30-45 min</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Machine Work vs. Meaning Work: What Leaders Should Automate — and What They Must Protect
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A practical framework to identify which work should be handed to AI and which must
                be fiercely protected. Real audit examples, four levels of AI adoption, and the
                insight that the best AI leaders aren&apos;t the most technical — they&apos;re the best delegators.
              </p>
              <p className="text-xs text-gray-500 italic">Best for: C-suite, operations tracks, transformation events</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-blue-600 mb-2">Motivational / Closing Keynote · 30-45 min</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Commander Mode: Stop Reacting to AI and Start Using It Intentionally
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Most people don&apos;t fail at AI adoption — they drift through it. This talk introduces
                Commander Mode: the identity shift from reacting to AI hype toward intentionally
                designing an AI-powered life.
              </p>
              <p className="text-xs text-gray-500 italic">Best for: Closing keynotes, association annual meetings, personal development events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Organizers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.", name: "Ryan L." },
              { quote: "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.", name: "Mary S." },
              { quote: "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board.", name: "Michael M." },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-600 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-sm text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Talk About Your Event</h2>
          <p className="text-blue-100 mb-8">
            Whether it&apos;s a 45-minute keynote or a half-day workshop — Dan tailors
            every session to your audience and objectives.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Book an Intro Call
          </a>
        </div>
      </section>
    </>
  );
}
