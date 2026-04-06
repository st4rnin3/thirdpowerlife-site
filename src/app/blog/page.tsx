import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/blog";
import { safeJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog — Insights on AI Leadership | Third Power Life",
  description:
    "Actionable frameworks, strategies, and real-world AI leadership intelligence from Dan Gentry. No hype. No fluff.",
  openGraph: {
    title: "Blog — Insights on AI Leadership | Third Power Life",
    description:
      "Actionable frameworks, strategies, and real-world AI leadership intelligence from Dan Gentry.",
    url: "https://www.thirdpowerlife.ai/blog",
    siteName: "Third Power Life",
    type: "website",
    images: [
      {
        url: "https://www.thirdpowerlife.ai/images/tedx-stage-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Dan Gentry on the TEDx stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Insights on AI Leadership | Third Power Life",
    description:
      "Actionable frameworks, strategies, and real-world AI leadership intelligence from Dan Gentry.",
    images: ["https://www.thirdpowerlife.ai/images/tedx-stage-photo.jpg"],
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Third Power Life Blog",
            description:
              "Actionable frameworks, strategies, and real-world AI leadership intelligence from Dan Gentry.",
            url: "https://www.thirdpowerlife.ai/blog",
            author: {
              "@type": "Person",
              name: "Dan Gentry",
              url: "https://www.thirdpowerlife.ai/about",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-midnight/50 to-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-4">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            AI Leadership Intelligence
          </h1>
          <p className="mt-4 text-lg text-light/60 max-w-2xl mx-auto">
            No hype. No fluff. Just actionable frameworks for leaders who want
            to leverage AI without losing their humanity.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass overflow-hidden rounded-2xl flex flex-col hover:border-electric/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] transition-all duration-300"
              >
                {post.ogImage && (
                  <div className="aspect-[1.91/1] overflow-hidden border-b border-white/10 bg-midnight/40">
                    <img
                      src={post.ogImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-1 flex-col">
                  <div className="flex items-center gap-3 text-sm text-light/50 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="text-electric/40">|</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-electric transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-light/60 text-sm leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-electric/70 bg-electric/10 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-electric/20 via-accent/30 to-electric/20 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Get Fresh Insights Weekly
          </h2>
          <p className="text-light/70 mb-6">
            Join the AI Playbook newsletter. Frameworks, strategies, and
            real-world AI wins delivered every week.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
          >
            Subscribe to the Newsletter
          </a>
        </div>
      </section>
    </>
  );
}
