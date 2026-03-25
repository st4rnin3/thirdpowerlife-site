import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Third Power Life Podcast — AI, Business & Human Flourishing | Third Power Life",
  description:
    "Listen to the Third Power Life podcast. Season 3: Saving Our Humanity with AI. Available on Spotify and Apple Podcasts.",
};

const PLATFORMS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu",
    icon: (
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/third-power-life/id1440527025",
    icon: (
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.466 1.326 1.32 2.16 3.07 2.418 5.074.06.47-.312.882-.792.882a.788.788 0 01-.786-.69 7.632 7.632 0 00-1.95-4.108c-1.278-1.272-2.988-2.004-4.915-2.004-1.926 0-3.636.732-4.914 2.004a7.632 7.632 0 00-1.95 4.108.788.788 0 01-.786.69c-.48 0-.852-.414-.792-.882.258-2.004 1.092-3.756 2.418-5.074 1.577-1.564 3.69-2.466 6.024-2.466zm.072 3.132c1.56 0 2.988.588 4.074 1.674a5.712 5.712 0 011.554 3.024.684.684 0 01-.678.78.69.69 0 01-.684-.594c-.18-1.14-.72-2.166-1.53-2.976A5.048 5.048 0 0011.937 6.6c-1.38 0-2.664.528-3.636 1.488a5.048 5.048 0 00-1.53 2.976.69.69 0 01-.684.594.684.684 0 01-.678-.78 5.712 5.712 0 011.554-3.024 6.036 6.036 0 014.074-1.674v.12-.12zm-.06 3.036a3.24 3.24 0 013.24 3.24c0 .948-.414 1.8-1.068 2.388.63 1.386.93 2.85.93 4.404 0 .858-.6 2.664-3.09 2.664-2.49 0-3.09-1.806-3.09-2.664 0-1.554.3-3.018.93-4.404A3.223 3.223 0 018.637 11.976a3.24 3.24 0 013.24-3.24z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g",
    icon: (
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
] as const;

const TOPICS = [
  "Machine Work vs Meaning Work in practice",
  "Real AI implementation stories",
  "Commander vs Drifter mindset shifts",
  "Building AI systems that serve your life",
  "Interviews with leaders navigating AI transformation",
] as const;

export default function PodcastPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-brand-white sm:text-5xl">
            Third Power Life Podcast
          </h1>
          <p className="mt-4 text-lg font-semibold text-brand-gold sm:text-xl">
            Season 3: Saving Our Humanity with AI
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Dan explores how entrepreneurs and leaders can use AI to reclaim
            time, protect what matters, and build businesses that amplify their
            humanity.
          </p>
        </div>
      </section>

      {/* Listen Now */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Listen on Your Favorite Platform" />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-brand-navy bg-brand-white px-6 py-5 text-brand-navy transition-colors hover:bg-brand-navy hover:text-brand-white"
              >
                {platform.icon}
                <span className="text-lg font-semibold">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About the Show */}
      <section className="bg-brand-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="About the Show" />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Third Power Life is a podcast about the intersection of AI,
              business, and human flourishing. Dan interviews founders,
              executives, and innovators who are using technology intentionally
              — to build better businesses AND better lives.
            </p>
            <p>
              The Third Power is the integration of business success with a
              vibrant, purposeful life. That&apos;s what this show is about.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="What to Expect" />
          <ul className="mt-10 space-y-4">
            {TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                  />
                </svg>
                <span className="text-lg text-gray-700">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection heading="Want Dan on Your Podcast?" />
    </div>
  );
}
