import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Power Life Podcast — Saving Our Humanity with AI",
  description: "Season 3: Saving Our Humanity with AI. Dan Gentry explores how AI can protect what matters most. Available on Spotify, Apple Podcasts, and YouTube.",
};

export default function Podcast() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-midnight/50 to-navy py-24 text-center relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,87,255,0.12),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            The Podcast
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Third Power Life
          </h1>
          <p className="text-xl text-light/70 mb-2">
            Season 3: &ldquo;Saving Our Humanity with AI&rdquo;
          </p>
          <p className="text-light/50 max-w-xl mx-auto mb-8">
            Dan explores how AI can protect what matters most — your time, your
            relationships, your purpose — instead of consuming them.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              className="bg-[#1DB954] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener"
            >
              Listen on Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025"
              className="bg-gradient-to-br from-[#F452FF] to-[#833AB4] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g"
              className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="bg-navy py-16">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <iframe
            src="https://open.spotify.com/embed/show/5bNph2wNURGSVgcDvtnNlu?theme=0"
            width="100%"
            height={352}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title="Third Power Life on Spotify"
          />
        </div>
      </section>

      {/* About the Show */}
      <section className="bg-midnight/30 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-8">
              About the Show
            </h2>
            <div className="space-y-5">
              <p className="text-light/70 leading-relaxed">
                The Third Power Life podcast is where Dan Gentry goes deep on the ideas behind
                the stage. Each episode explores the intersection of AI, leadership, and the
                deeply human question of what makes life worth living.
              </p>
              <p className="text-light/70 leading-relaxed">
                Season 3 focuses on{" "}
                <span className="text-white font-semibold">
                  &ldquo;Saving Our Humanity with AI&rdquo;
                </span>{" "}
                — challenging the narrative that AI is here to replace us and replacing it with a
                framework for using AI to amplify what makes us most human.
              </p>
              <p className="text-light/70 leading-relaxed">
                Topics include Machine Work vs. Meaning Work in practice, interviews with leaders
                navigating AI transformation, the Commander vs. Drifter mindset, and real-world
                case studies of AI done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Machine Work vs. Meaning Work",
              "The AI Ascension Model in practice",
              "Commander vs. Drifter mindset",
              "Real-world AI implementation stories",
              "Future of work and human purpose",
              "The Success Trap and how to escape it",
            ].map((topic, i) => (
              <div
                key={i}
                className="bg-midnight/60 border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-electric/20 transition-all duration-300"
              >
                <span className="text-2xl">🎙️</span>
                <span className="text-light font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-gradient-to-r from-accent to-electric/80 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white font-heading font-bold text-3xl mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe on your favorite platform and join the conversation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
              target="_blank"
              rel="noopener"
            >
              Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              target="_blank"
              rel="noopener"
            >
              Apple Podcasts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
