import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                TEDx Speaker · AI Strategist · Founder
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Your Personal<br />
                <span className="text-blue-600">Chief AI Officer</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                I help leaders leverage AI to grow their business — without losing
                their humanity in the process. AI for your business. Humanity for your life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/speaking"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
                >
                  Book Dan to Speak
                </a>
                <a
                  href="/consulting"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Fractional Chief AI Officer
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
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

      {/* The Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Machine Work vs. Meaning Work
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The core distinction that changes everything about how you use AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Machine Work</h3>
              <p className="text-gray-600 mb-4">
                What AI should handle — research, formatting, email triage, scheduling,
                data entry, meeting prep, repetitive reports.
              </p>
              <p className="text-sm font-semibold text-blue-600">Let the machines do this.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meaning Work</h3>
              <p className="text-gray-600 mb-4">
                What humans must protect — leadership, creativity, mentoring,
                family, strategic thinking, presence, purpose.
              </p>
              <p className="text-sm font-semibold text-blue-600">Fiercely protect this.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ascension Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The AI Ascension Model
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A practical roadmap to reclaim 10-40 hours per week.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "1", title: "Explorer", desc: "Curious but scattered. Using ChatGPT occasionally with no strategy.", color: "gray" },
              { level: "2", title: "Assistant", desc: "AI handles specific tasks. You direct it for email, research, writing.", color: "blue" },
              { level: "3", title: "Agent", desc: "AI operates autonomously on workflows. Systems, not prompts.", color: "indigo" },
              { level: "4", title: "Commander", desc: "You set strategy. AI executes. 30+ hours reclaimed weekly.", color: "purple" },
            ].map((stage) => (
              <div key={stage.level} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className={`text-sm font-bold text-${stage.color}-600 mb-2`}>Level {stage.level}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-sm text-gray-600">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From the Stage */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From the Stage
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Signature keynote: <em>Humanity Amplified</em>
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              &ldquo;Humanity Amplified: Redefining Success in the Age of AI&rdquo;
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most AI talks focus on speed and automation. This one asks a more
              important question: what should AI do so humans can do what matters
              most? Dan draws the line between Machine Work and Meaning Work,
              giving audiences a clear, practical roadmap to reclaim 10-40 hours
              per week — and a framework for making sure those hours go toward the
              life they actually want.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">The Machine Work vs. Meaning Work audit for their own role</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">The AI Ascension roadmap they can start Monday</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">The IMPACT method for delegating to AI like a leader</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">A personal answer to: &ldquo;What am I no longer willing to sacrifice?&rdquo;</span>
              </div>
            </div>
            <a
              href="/speaking"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book This Keynote
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across.",
                name: "Ryan L.",
              },
              {
                quote: "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go.",
                name: "Mary S.",
              },
              {
                quote: "Dan does a wonderful job of turning his own experiences into teachable and useable information. His teachings would be valuable to any business board, from manager to CEO.",
                name: "Michael M.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-600 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-sm text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Book Dan to Speak</h3>
              <p className="text-blue-100 mb-6">
                Keynotes, workshops, and panels on AI leadership, the future of
                work, and reclaiming what matters most.
              </p>
              <a
                href="/speaking"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View Speaking Topics
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Need a Chief AI Officer?</h3>
              <p className="text-gray-300 mb-6">
                Fractional AI leadership for businesses ready to implement — not
                just experiment. Strategy, systems, and results.
              </p>
              <a
                href="/consulting"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Learn About fCAIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Third Power Life Podcast
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Season 3: &ldquo;Saving Our Humanity with AI&rdquo;
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
              target="_blank" rel="noopener"
            >
              Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
              target="_blank" rel="noopener"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g"
              className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
              target="_blank" rel="noopener"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            The AI Playbook Newsletter
          </h2>
          <p className="text-blue-100 mb-8">
            Weekly frameworks, strategies, and real-world AI wins.
            No hype. No fluff. Just actionable leadership intelligence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
}
