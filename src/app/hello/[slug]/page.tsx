import Image from "next/image";
import { notFound } from "next/navigation";
import { prospects } from "@/data/prospects";

export function generateStaticParams() {
  return Object.keys(prospects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prospect = prospects[slug];
  if (!prospect) return { title: "Page Not Found" };
  return {
    title: `${prospect.greeting} — Dan Gentry | Third Power Life`,
    robots: "noindex, nofollow",
  };
}

export default async function ProspectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prospect = prospects[slug];
  if (!prospect) notFound();

  return (
    <>
      {/* ================================================================ */}
      {/* HERO — Big personalized greeting + video                         */}
      {/* ================================================================ */}
      <section className="relative bg-navy overflow-hidden">
        {/* Subtle stage photo background */}
        <Image
          src="/images/tedx-stage-photo.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Personalized greeting */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {prospect.greeting}
            </h1>
            <p className="text-xl text-electric font-heading">
              I&apos;m Dan Gentry — Your Personal Chief AI Officer.
            </p>
          </div>

          {/* Video embed or placeholder */}
          {prospect.videoUrl ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,210,255,0.15)] border-2 border-electric/30 mb-10">
              <iframe
                src={prospect.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-electric/30 shadow-[0_0_40px_rgba(0,210,255,0.15)] mb-10 bg-midnight/60 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-electric" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-light/40">Personalized video message coming soon</p>
              </div>
            </div>
          )}

          {/* Custom message */}
          <div className="glass rounded-2xl p-8 md:p-10 text-center mb-10">
            <p className="text-lg text-light/80 leading-relaxed">
              {prospect.customMessage}
            </p>
          </div>

          {/* Primary CTA */}
          <div className="text-center">
            <a
              href={prospect.ctaUrl}
              className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-heading font-bold text-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all shadow-lg"
            >
              {prospect.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CORE MESSAGE — What Dan brings                                   */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-navy to-midnight/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            The Core Idea
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            AI should not replace humanity.<br />
            <span className="text-electric">AI should amplify it.</span>
          </h2>
          <p className="text-light/60 text-lg max-w-2xl mx-auto">
            Most AI talks focus on speed and automation. Dan asks a more important question:
            what should AI do so humans can do what matters most?
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ABOUT DAN — Credibility                                          */}
      {/* ================================================================ */}
      <section className="bg-midnight/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Headshot */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden ring-2 ring-electric/30 shadow-[0_0_30px_rgba(0,210,255,0.15)]">
                <Image src="/images/headshot.png" alt="Dan Gentry" fill className="object-cover" />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">About Dan Gentry</h2>
              <p className="text-light/70 leading-relaxed mb-4">
                Dan Gentry is a TEDx speaker, podcast host, and founder of Third Power Performance.
                His signature keynote, <span className="text-electric italic">Humanity Amplified</span>,
                reframes the AI conversation — from &ldquo;work faster&rdquo; to &ldquo;protect what matters most.&rdquo;
              </p>
              <p className="text-light/70 leading-relaxed mb-6">
                Dan teaches the distinction between <span className="text-white font-semibold">Machine Work</span> (what AI should handle)
                and <span className="text-white font-semibold">Meaning Work</span> (what humans must protect), giving leaders
                a clear framework to reclaim 10-40 hours per week — and invest them in family, health, creativity, and purpose.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-midnight/60 border border-white/10 rounded-lg px-4 py-2 text-light/60">TEDx Speaker</span>
                <span className="bg-midnight/60 border border-white/10 rounded-lg px-4 py-2 text-light/60">AI Strategist</span>
                <span className="bg-midnight/60 border border-white/10 rounded-lg px-4 py-2 text-light/60">Podcast Host</span>
                <span className="bg-midnight/60 border border-white/10 rounded-lg px-4 py-2 text-light/60">Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* KEYNOTES — What your audience gets                               */}
      {/* ================================================================ */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm text-center mb-4">
            Keynote Topics
          </p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Transformational Talks That Move People to Action
          </h2>

          <div className="space-y-6">
            {/* Signature Keynote */}
            <div className="glass rounded-2xl p-8 border border-electric/20">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <span className="text-xs text-electric font-heading uppercase tracking-widest">Signature Keynote · 45-60 min</span>
                  <h3 className="text-xl font-heading font-bold text-white mt-2">
                    Humanity Amplified: Redefining Success in the Age of AI
                  </h3>
                </div>
              </div>
              <p className="text-light/70 text-sm mb-4">
                Most AI talks focus on speed and automation. This one asks a more important question:
                what should AI do so humans can do what matters most? Dan draws the line between Machine Work
                and Meaning Work, giving audiences a clear, practical roadmap to reclaim 10-40 hours per week.
              </p>
              <p className="text-light/50 text-xs">Best for: Leadership conferences, future-of-work summits, corporate innovation events, associations</p>
            </div>

            {/* Talk 2 */}
            <div className="glass rounded-xl p-6">
              <span className="text-xs text-accent/60 font-heading uppercase tracking-widest">Executive Track · 30-45 min</span>
              <h3 className="text-lg font-heading font-bold text-white mt-2 mb-2">
                Machine Work vs. Meaning Work: What Leaders Should Automate — and What They Must Protect
              </h3>
              <p className="text-light/60 text-sm">
                A practical framework for identifying which work should be handed to AI and which must be fiercely protected.
                Real audit examples, four levels of AI adoption, and the insight that the best AI leaders are the best delegators.
              </p>
            </div>

            {/* Talk 3 */}
            <div className="glass rounded-xl p-6">
              <span className="text-xs text-accent/60 font-heading uppercase tracking-widest">Closing Keynote · 30-45 min</span>
              <h3 className="text-lg font-heading font-bold text-white mt-2 mb-2">
                Commander Mode: Stop Reacting to AI and Start Using It Intentionally
              </h3>
              <p className="text-light/60 text-sm">
                Most people don&apos;t fail at AI adoption — they drift through it. This talk introduces
                Commander Mode: the identity shift from reacting to AI hype toward intentionally designing an AI-powered life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INCLUSIONS — What you get when you book Dan                      */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-navy to-midnight/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm text-center mb-4">
            Inclusions
          </p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What You Get When You Book Dan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "📞", title: "Pre-Event Strategy Call", desc: "A planning call to align the keynote with your audience, challenges, and desired outcomes." },
              { icon: "🎯", title: "Customized Keynote", desc: "Every session is tailored to your event theme and audience — no cookie-cutter presentations." },
              { icon: "🎬", title: "Pre-Event Welcome Video", desc: "A personalized video introducing key themes to prime your attendees before the event." },
              { icon: "📋", title: "Custom Action Guide", desc: "A branded worksheet or action guide tied to the keynote content for every attendee." },
              { icon: "🤝", title: "Executive Meet & Greet", desc: "Private session with executives, sponsors, or VIP attendees on-site." },
              { icon: "📊", title: "Post-Event Survey Review", desc: "Review of attendee feedback delivered to your leadership team." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-heading font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-light/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* AUDIENCE OUTCOMES — What attendees walk away with                 */}
      {/* ================================================================ */}
      <section className="bg-midnight/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm text-center mb-4">
            Real, Measurable Takeaways
          </p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-4">
            What Your Audience Will Walk Away With
          </h2>
          <p className="text-light/50 text-center mb-12 max-w-2xl mx-auto">
            Your attendees won&apos;t just feel motivated. They&apos;ll leave equipped.
          </p>

          <div className="glass rounded-2xl p-8 md:p-10">
            <ul className="space-y-4">
              {[
                "The Machine Work vs. Meaning Work audit for their own role",
                "The AI Ascension roadmap they can start Monday",
                "The IMPACT method for delegating work to AI like a leader, not a techie",
                "A personal answer to: \"What am I no longer willing to sacrifice?\"",
                "Practical tools to strengthen leadership across their teams",
                "Immediate action steps they can implement the next day",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-electric font-heading font-bold text-sm uppercase tracking-wide">
                The goal is transformation, not applause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TESTIMONIALS                                                     */}
      {/* ================================================================ */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-white text-center mb-10">
            What Others Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.", name: "Ryan L." },
              { quote: "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.", name: "Mary S." },
              { quote: "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board.", name: "Michael M." },
            ].map((t, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <p className="text-light/80 italic text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-electric font-semibold text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TEDx Video                                                       */}
      {/* ================================================================ */}
      <section className="bg-midnight/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            From the TEDx Stage
          </p>
          <h2 className="text-2xl font-heading font-bold text-white mb-8">
            How to Find Your Personal Purpose and Take Command of Your Life
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,210,255,0.1)]">
            <iframe
              src="https://www.youtube.com/embed/3GtpnqEbYRU"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Dan Gentry TEDx Talk"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SOCIAL LINKS                                                     */}
      {/* ================================================================ */}
      <section className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-light/40 text-sm mb-4">Follow Dan</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/daniel-gentry/" target="_blank" rel="noopener" className="text-light/50 hover:text-electric transition">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g" target="_blank" rel="noopener" className="text-light/50 hover:text-electric transition">YouTube</a>
            <a href="https://www.instagram.com/thirdpowerperformance/" target="_blank" rel="noopener" className="text-light/50 hover:text-electric transition">Instagram</a>
            <a href="https://www.skool.com/impact-ai" target="_blank" rel="noopener" className="text-light/50 hover:text-electric transition">IMPACT AI</a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BOTTOM CTA — Ready to book?                                      */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready for the Next Step?
          </h2>
          <p className="text-white/80 mb-8">
            Let&apos;s set up a quick call to discuss how Dan can serve your audience.
          </p>
          <a
            href={prospect.ctaUrl}
            className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white/90 transition shadow-lg"
          >
            {prospect.ctaText}
          </a>
        </div>
      </section>
    </>
  );
}
