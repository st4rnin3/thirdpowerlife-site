import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      {/* ================================================================ */}
      {/* HERO — Full-bleed cinematic with TEDx stage background           */}
      {/* ================================================================ */}
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <Image
          src="/images/tedx-stage-photo.jpg"
          alt="Dan Gentry on the TEDx stage"
          fill
          className="object-cover"
          priority
        />

        {/* Dark gradient overlay — lets the photo show through subtly */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
                TEDx Speaker &middot; AI Strategist &middot; Founder
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
                Your Personal
                <br />
                <span className="text-electric">Chief AI Officer</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-light/80 max-w-xl leading-relaxed">
                I help leaders leverage AI to grow their business — without losing
                their humanity in the process. AI for your business. Humanity for
                your life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/speaking"
                  className="bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold text-center hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
                >
                  Book Dan to Speak
                </a>
                <a
                  href="/consulting"
                  className="border-2 border-electric/50 text-electric px-8 py-4 rounded-lg font-heading font-semibold text-center hover:bg-electric/10 hover:border-electric transition-all duration-300"
                >
                  Fractional Chief AI Officer
                </a>
              </div>
            </div>

            {/* Headshot — hidden on mobile, visible on lg+ */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden ring-2 ring-electric/30 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
                <Image
                  src="/images/headshot.png"
                  alt="Dan Gentry"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MACHINE WORK vs. MEANING WORK                                    */}
      {/* ================================================================ */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Machine Work vs. Meaning Work
            </h2>
            <p className="mt-4 text-lg text-light/60 max-w-2xl mx-auto">
              The core distinction that changes everything about how you use AI.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Machine Work — cold / robotic / digital with background image */}
            <div className="relative group rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[400px]">
              {/* Background image */}
              <Image
                src="/images/machine-work-bg.jpg"
                alt=""
                fill
                className="object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/95 via-[#001433]/80 to-[#001433]/60 group-hover:from-[#001433]/90 group-hover:via-[#001433]/70 transition-all duration-500" />
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-accent/20 group-hover:border-accent/50 group-hover:shadow-[inset_0_0_30px_rgba(0,87,255,0.1)] transition-all duration-500" />
              <div className="relative z-10 p-10 md:p-12 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Machine Work
                </h3>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">▸</span> Research &amp; data gathering</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">▸</span> Email triage &amp; scheduling</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">▸</span> Formatting &amp; meeting prep</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">▸</span> Repetitive reports &amp; data entry</li>
                </ul>
                <div className="border-t border-white/15 pt-4">
                  <p className="text-sm font-heading font-bold text-electric tracking-wide uppercase">
                    → Let the machines do this
                  </p>
                </div>
              </div>
            </div>

            {/* Center divider — VS badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-16 h-16 bg-navy border-2 border-electric/50 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,210,255,0.4)]">
                <span className="text-electric font-heading font-bold text-sm">VS</span>
              </div>
            </div>

            {/* Meaning Work — warm / human / glowing with background image */}
            <div className="relative group rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[400px]">
              {/* Background image */}
              <Image
                src="/images/meaning-work-bg.jpg"
                alt=""
                fill
                className="object-cover"
              />
              {/* Warm overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/95 via-[#001433]/75 to-[#001433]/50 group-hover:from-[#001433]/90 group-hover:via-[#001433]/65 transition-all duration-500" />
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-electric/20 group-hover:border-electric/50 group-hover:shadow-[inset_0_0_30px_rgba(0,210,255,0.15)] transition-all duration-500" />
              <div className="relative z-10 p-10 md:p-12 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Meaning Work
                </h3>
                <ul className="space-y-2 text-white/85 mb-6">
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">✦</span> Leadership &amp; strategic thinking</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">✦</span> Creativity &amp; mentoring</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">✦</span> Family &amp; presence</li>
                  <li className="flex items-center gap-2"><span className="text-electric text-xs">✦</span> Purpose &amp; connection</li>
                </ul>
                <div className="border-t border-electric/20 pt-4">
                  <p className="text-sm font-heading font-bold text-electric tracking-wide uppercase">
                    Fiercely protect this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* AI ASCENSION MODEL                                               */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-navy to-midnight/50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              The AI Ascension Model
            </h2>
            <p className="mt-4 text-lg text-light/60 max-w-2xl mx-auto">
              A practical roadmap to reclaim 10-40 hours per week.
            </p>
          </div>

          {/* 4-card horizontal layout matching presentation slide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 0 — Explorer */}
            <div className="group relative bg-midnight/40 border border-white/10 rounded-2xl p-8 text-center hover:border-white/25 hover:bg-midnight/60 transition-all duration-500">
              <div className="text-6xl font-heading font-bold text-white/20 mb-2">0</div>
              <h3 className="text-xl font-heading font-bold text-white/70 uppercase tracking-wide mb-6">Explorer</h3>
              <div className="text-3xl mb-6">🔭</div>
              <p className="text-sm text-light/50 italic leading-relaxed">
                How do I dip a toe into AI safely?
              </p>
            </div>

            {/* Level 1 — Assistant */}
            <div className="group relative bg-midnight/40 border border-accent/15 rounded-2xl p-8 text-center hover:border-accent/40 hover:bg-midnight/60 transition-all duration-500">
              <div className="text-6xl font-heading font-bold text-accent/30 mb-2">1</div>
              <h3 className="text-xl font-heading font-bold text-white/80 uppercase tracking-wide mb-6">Assistant</h3>
              <div className="text-3xl mb-6">🎧</div>
              <p className="text-sm text-light/60 italic leading-relaxed">
                How can an AI intern lighten my workload today?
              </p>
            </div>

            {/* Level 2 — Agent */}
            <div className="group relative bg-midnight/40 border border-accent/25 rounded-2xl p-8 text-center hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,87,255,0.1)] hover:bg-midnight/60 transition-all duration-500">
              <div className="text-6xl font-heading font-bold text-accent/50 mb-2">2</div>
              <h3 className="text-xl font-heading font-bold text-white/90 uppercase tracking-wide mb-6">Agent</h3>
              <div className="text-3xl mb-6">🤖</div>
              <p className="text-sm text-light/70 italic leading-relaxed">
                How do I get an agent to do a task for me end-to-end while I&apos;m away?
              </p>
            </div>

            {/* Level 3 — Commander (GLOWING) */}
            <div className="group relative bg-gradient-to-b from-midnight/60 to-accent/10 border border-electric/40 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(0,210,255,0.1)] hover:border-electric/60 hover:shadow-[0_0_40px_rgba(0,210,255,0.25)] transition-all duration-500">
              <div className="text-6xl font-heading font-bold text-electric/60 mb-2">3</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-6">Commander</h3>
              <div className="text-3xl mb-6">👑</div>
              <p className="text-sm text-electric/80 italic leading-relaxed">
                How do I design an AI ecosystem that self-optimizes while I lead vision?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FROM THE STAGE — Cinematic section                               */}
      {/* ================================================================ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background stage photo */}
        <Image
          src="/images/tedx-stage-photo.jpg"
          alt="TEDx stage"
          fill
          className="object-cover"
        />

        {/* Dark directional overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              From the Stage
            </h2>
            <p className="text-lg text-light/60 mb-10">
              Signature keynote: <em>Humanity Amplified</em>
            </p>

            {/* Glassmorphism card */}
            <div className="glass rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                &ldquo;Humanity Amplified: Redefining Success in the Age of
                AI&rdquo;
              </h3>
              <p className="text-light/80 leading-relaxed mb-8">
                Most AI talks focus on speed and automation. This one asks a more
                important question: what should AI do so humans can do what
                matters most? Dan draws the line between Machine Work and Meaning
                Work, giving audiences a clear, practical roadmap to reclaim
                10-40 hours per week — and a framework for making sure those
                hours go toward the life they actually want.
              </p>

              {/* Checkmark items in 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-sm text-light/80">
                    The Machine Work vs. Meaning Work audit for their own role
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-sm text-light/80">
                    The AI Ascension roadmap they can start Monday
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-sm text-light/80">
                    The IMPACT method for delegating to AI like a leader
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-electric mt-1 flex-shrink-0">&#10003;</span>
                  <span className="text-sm text-light/80">
                    A personal answer to: &ldquo;What am I no longer willing to
                    sacrifice?&rdquo;
                  </span>
                </div>
              </div>

              <a
                href="/speaking"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                Book This Keynote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TESTIMONIALS                                                     */}
      {/* ================================================================ */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
                  "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board, from manager to CEO.",
                name: "Michael M.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 border border-electric/10"
              >
                <p className="text-light/80 italic mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-electric font-semibold text-sm">
                  &mdash; {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DUAL CTA                                                         */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-b from-midnight/50 to-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speaking card */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-white hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Book Dan to Speak
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Keynotes, workshops, and panels on AI leadership, the future of
                work, and reclaiming what matters most.
              </p>
              <a
                href="/speaking"
                className="inline-block bg-white text-navy px-6 py-3 rounded-lg font-heading font-semibold hover:bg-light transition-colors duration-300"
              >
                View Speaking Topics
              </a>
            </div>

            {/* Consulting card */}
            <div className="bg-gradient-to-br from-midnight to-navy border border-white/10 rounded-2xl p-8 text-white hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Need a Chief AI Officer?
              </h3>
              <p className="text-light/70 mb-6 leading-relaxed">
                Fractional AI leadership for businesses ready to implement — not
                just experiment. Strategy, systems, and results.
              </p>
              <a
                href="/consulting"
                className="inline-block bg-electric text-navy px-6 py-3 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
              >
                Learn About fCAIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PODCAST TEASER                                                   */}
      {/* ================================================================ */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Third Power Life Podcast
          </h2>
          <p className="text-lg text-light/60 mb-8">
            Season 3: &ldquo;Saving Our Humanity with AI&rdquo;
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              className="bg-[#1DB954] text-white px-6 py-3 rounded-lg font-heading font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(29,185,84,0.4)] transition-all duration-300"
              target="_blank"
              rel="noopener"
            >
              Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025"
              className="bg-gradient-to-b from-[#F452FF] to-[#833AB4] text-white px-6 py-3 rounded-lg font-heading font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(131,58,180,0.4)] transition-all duration-300"
              target="_blank"
              rel="noopener"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g"
              className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-heading font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300"
              target="_blank"
              rel="noopener"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* NEWSLETTER                                                       */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-r from-electric/20 via-accent/30 to-electric/20 py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/50 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              The AI Playbook Newsletter
            </h2>
            <p className="text-light/70 mb-2 leading-relaxed">
              Weekly frameworks, strategies, and real-world AI wins.
              <br />
              No hype. No fluff. Just actionable leadership intelligence.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
