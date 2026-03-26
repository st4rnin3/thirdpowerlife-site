import Image from "next/image";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";

// ---------------------------------------------------------------------------
// Prospect data — add new entries here (or eventually from CRM/API)
// ---------------------------------------------------------------------------
const prospects: Record<string, {
  name: string;
  org: string;
  greeting: string;
  valueProps: { headline: string; subtext: string }[];
  videoUrl?: string;
  ctaText: string;
  ctaUrl: string;
}> = {
  "katie-mdrt": {
    name: "Katie",
    org: "MDRT",
    greeting: "Hello, Katie & the MDRT Team!",
    valueProps: [
      { headline: "Reclaim what AI was built to protect", subtext: "Helping your members use AI to get time back — for clients, family, and the work that actually grows their practice." },
      { headline: "Lead with intention, not reaction", subtext: "Financial professionals who master AI don't just work faster — they protect the human connection that clients trust them for." },
    ],
    ctaText: "Schedule the Proposal Review",
    ctaUrl: "https://www.thirdpowerlife.ai/schedule/introductory-call",
  },
  "demo": {
    name: "there",
    org: "Your Organization",
    greeting: "Hello! Thanks for checking this out.",
    valueProps: [
      { headline: "AI that amplifies your mission", subtext: "Helping your team reclaim 10-40 hours per week — and redirect that time toward the work that actually moves the needle." },
      { headline: "Not another tech talk", subtext: "Dan delivers frameworks and action plans, not product demos. Your audience leaves equipped, not just inspired." },
    ],
    ctaText: "Book an Intro Call",
    ctaUrl: "https://www.thirdpowerlife.ai/schedule/introductory-call",
  },
};

export function generateStaticParams() {
  return Object.keys(prospects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = prospects[slug];
  if (!p) return { title: "Page Not Found" };
  return {
    title: `${p.greeting} — Dan Gentry, Keynote Speaker`,
    description: `A personalized speaking proposal for ${p.org}. Dan Gentry delivers AI keynotes that change how leaders think.`,
    robots: "noindex, nofollow",
  };
}

export default async function ProspectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = prospects[slug];
  if (!p) notFound();

  return (
    <>
      {/* ── Hero with personalized greeting ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/tedx-stage-photo.jpg"
          alt="Dan Gentry on stage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
                Keynote Speaker &middot; AI Strategist
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8">
                {p.greeting}
              </h1>
              {p.valueProps.map((vp, i) => (
                <div key={i} className="mb-5">
                  <h2 className="text-xl font-heading font-semibold text-electric mb-1">{vp.headline}</h2>
                  <p className="text-light/70">{vp.subtext}</p>
                </div>
              ))}
              <a
                href={p.ctaUrl}
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 mt-4"
              >
                {p.ctaText}
              </a>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden ring-2 ring-electric/30 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
                <Image src="/images/headshot.png" alt="Dan Gentry" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold">TEDx</div>
              <div className="text-sm text-white/70">Speaker</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold">10-40 hrs</div>
              <div className="text-sm text-white/70">Reclaimed Weekly</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold">4 Levels</div>
              <div className="text-sm text-white/70">AI Ascension Model</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personalized video ── */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {p.videoUrl ? (
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-electric/20">
              <iframe src={p.videoUrl} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video rounded-xl glass flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎬</div>
                <p className="text-light/40 text-lg">Personalized video for {p.org} coming soon</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── About Dan ── */}
      <section className="bg-gradient-to-b from-navy to-midnight py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3 text-center">About Dan</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            Keynotes That Change How Leaders Think About AI
          </h2>
          <div className="max-w-3xl mx-auto text-light/70 leading-relaxed space-y-4">
            <p>
              Dan Gentry is a TEDx speaker, podcast host, and the founder of Third Power Performance —
              a company built on one belief: <strong className="text-white">AI should protect your
              humanity, not consume it.</strong>
            </p>
            <p>
              His signature keynote, <em className="text-electric">Humanity Amplified</em>, reframes the entire AI
              conversation. While most speakers promise faster output and more automation, Dan asks the
              uncomfortable question: &ldquo;AI can save you 10 hours a week — but do you know what
              you&apos;d do with them?&rdquo;
            </p>
            <p>
              Dan&apos;s framework is built on a simple distinction: <strong className="text-white">Machine Work
              vs. Meaning Work.</strong> Machine Work — research, formatting, repetitive emails, meeting
              summaries — is what AI should handle. Meaning Work — coaching, vision-casting, mentoring,
              being present — is what humans must fiercely protect.
            </p>
            <p>
              His <strong className="text-white">AI Ascension model</strong> (Explorer → Assistant → Agent → Commander)
              gives leaders a practical roadmap from AI curiosity to reclaiming 30+ hours per week.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-midnight py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What&apos;s Included When You Book Dan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📞", title: "Pre-Event Strategy Call", desc: "A planning call with your team to align the keynote with audience needs, challenges, and desired outcomes." },
              { icon: "🎤", title: "A Customized Keynote", desc: "Tailored to your event theme, audience, and goals — not a canned talk." },
              { icon: "🎬", title: "Pre-Event Welcome Video", desc: "A personalized video introducing key themes and priming attendees for the experience." },
              { icon: "📊", title: "Post-Event Survey Review", desc: "Review of attendee feedback delivered to your team with actionable insights." },
              { icon: "🤝", title: "Executive Meet & Greet", desc: "Private on-site time with executives, sponsors, or VIP attendees." },
              { icon: "📋", title: "Custom Action Guide", desc: "A branded worksheet tied to the keynote content so attendees leave with next steps." },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 hover:ring-1 hover:ring-electric/30 transition-all duration-300">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-light/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Keynote Topics ── */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3 text-center">Keynote Topics</p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Transformational Talks That Move People to Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Signature Keynote · 45-60 min", title: "Humanity Amplified", desc: "What should AI do so humans can do what matters most? Dan draws the line between Machine Work and Meaning Work, giving audiences a roadmap to reclaim 10-40 hours per week." },
              { label: "Executive Track · 30-45 min", title: "Machine Work vs. Meaning Work", desc: "A practical framework for leaders to audit their team's AI adoption. Real examples, real ROI, and the insight that the best AI leaders are the best delegators." },
              { label: "Closing Keynote · 30-45 min", title: "Commander Mode", desc: "Most people don't fail at AI adoption — they drift through it. This talk introduces Commander Mode: intentionally designing an AI-powered life." },
            ].map((talk, i) => (
              <div key={i} className="glass rounded-xl p-8 hover:ring-1 hover:ring-electric/30 transition-all duration-300">
                <p className="text-sm font-heading font-semibold text-electric mb-2">{talk.label}</p>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{talk.title}</h3>
                <p className="text-light/60 text-sm">{talk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Your Audience Walks Away With ── */}
      <section className="bg-gradient-to-b from-navy to-midnight py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-4">
            What Your Audience Will Walk Away With
          </h2>
          <p className="text-lg text-light/60 text-center mb-12 max-w-2xl mx-auto">
            Real, measurable takeaways — not just inspiration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "The Machine Work vs. Meaning Work audit for their own role",
              "The AI Ascension roadmap they can start Monday",
              "The IMPACT method for delegating to AI like a leader",
              "A personal answer to: \"What am I no longer willing to sacrifice?\"",
              "Practical tools to strengthen leadership across teams",
              "Immediate action steps they can implement the next day",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3">
                <span className="text-electric text-lg mt-0.5">✓</span>
                <span className="text-light/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-electric font-heading font-semibold mt-10 text-lg">
            The goal is transformation, not applause.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-midnight py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3 text-center">
            Trusted by Leaders &amp; Organizations
          </p>
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What Past Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.", name: "Ryan L." },
              { quote: "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.", name: "Mary S." },
              { quote: "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board, from manager to CEO.", name: "Michael M." },
            ].map((t, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <p className="text-light/70 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-heading font-semibold text-sm text-electric">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How long is the keynote?", a: "The signature keynote is 45-60 minutes. Executive sessions and workshops can be tailored from 30 minutes to a half-day format depending on your needs." },
              { q: "Can the message be tailored to our theme?", a: "Absolutely. Every engagement starts with a pre-event strategy call to align the content with your audience, theme, and desired outcomes." },
              { q: "Does Dan offer workshops or breakout sessions?", a: "Yes. Dan offers interactive workshops where participants complete hands-on exercises including the Machine Work audit, IMPACT delegation method, and personal AI action planning." },
              { q: "Will Dan stay for networking or VIP time?", a: "Yes. Executive meet-and-greets and sponsor sessions are included. Dan is fully present for your event, not just the stage time." },
              { q: "What are the technical requirements?", a: "Standard A/V setup: wireless lavalier mic, confidence monitor or laptop on stage, and screen for slides. Dan travels with his own presentation and clicker." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-light/10 pb-6">
                <h3 className="font-heading font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-light/60 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-b from-navy to-midnight px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready? Let&apos;s Make This Event Unforgettable.
          </h2>
          <p className="text-light/60 mb-10 text-lg max-w-2xl mx-auto">
            Let&apos;s have a brief conversation about your goals, your audience, and what
            you want this moment to accomplish — and see if we&apos;re the right fit.
          </p>
          <a
            href={p.ctaUrl}
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-heading font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            {p.ctaText}
          </a>
        </div>
      </section>

      {/* ── Social ── */}
      <section className="bg-navy py-12 text-center border-t border-light/10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-light/40 mb-4 font-heading text-sm uppercase tracking-wide">Follow Dan</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/daniel-gentry/" className="text-light/40 hover:text-electric transition" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g" className="text-light/40 hover:text-electric transition" target="_blank" rel="noopener">YouTube</a>
            <a href="https://www.skool.com/impact-ai" className="text-light/40 hover:text-electric transition" target="_blank" rel="noopener">Community</a>
          </div>
          <p className="text-light/20 mt-6 text-sm italic">
            &ldquo;AI should not replace humanity. AI should amplify it.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
