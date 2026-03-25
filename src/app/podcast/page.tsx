import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Power Life Podcast — Saving Our Humanity with AI",
  description: "Season 3: Saving Our Humanity with AI. Dan Gentry explores how AI can protect what matters most. Available on Spotify, Apple Podcasts, and YouTube.",
};

export default function Podcast() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">The Podcast</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Third Power Life
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Season 3: &ldquo;Saving Our Humanity with AI&rdquo;
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Dan explores how AI can protect what matters most — your time, your
            relationships, your purpose — instead of consuming them.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              target="_blank" rel="noopener"
            >
              Listen on Spotify
            </a>
            <a
              href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              target="_blank" rel="noopener"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              target="_blank" rel="noopener"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Show</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              The Third Power Life podcast is where Dan Gentry goes deep on the ideas behind
              the stage. Each episode explores the intersection of AI, leadership, and the
              deeply human question of what makes life worth living.
            </p>
            <p>
              Season 3 focuses on <strong>&ldquo;Saving Our Humanity with AI&rdquo;</strong> —
              challenging the narrative that AI is here to replace us and replacing it with a
              framework for using AI to amplify what makes us most human.
            </p>
            <p>
              Topics include Machine Work vs. Meaning Work in practice, interviews with leaders
              navigating AI transformation, the Commander vs. Drifter mindset, and real-world
              case studies of AI done right.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Machine Work vs. Meaning Work",
              "The AI Ascension Model in practice",
              "Commander vs. Drifter mindset",
              "Real-world AI implementation stories",
              "Future of work and human purpose",
              "The Success Trap and how to escape it",
            ].map((topic, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center gap-3">
                <span className="text-purple-600">🎙️</span>
                <span className="font-medium text-gray-900">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-purple-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Episode</h2>
          <p className="text-purple-100 mb-8">
            Subscribe on your favorite platform and join the conversation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition" target="_blank" rel="noopener">Spotify</a>
            <a href="https://itunes.apple.com/us/podcast/third-power-life/id1440527025" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition" target="_blank" rel="noopener">Apple Podcasts</a>
          </div>
        </div>
      </section>
    </>
  );
}
