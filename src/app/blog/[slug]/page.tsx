import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { safeJsonLd } from "@/lib/jsonld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post)
    return {
      title: "Post Not Found | Third Power Life",
      description: "The blog post you're looking for doesn't exist.",
    };

  const url = `https://www.thirdpowerlife.ai/blog/${post.slug}`;
  const ogImage =
    post.ogImage ?? "https://www.thirdpowerlife.ai/images/tedx-stage-photo.jpg";

  return {
    title: `${post.title} | Third Power Life`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Third Power Life",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${post.title} — Third Power Life` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
              url: "https://www.thirdpowerlife.ai/about",
            },
            publisher: {
              "@type": "Organization",
              name: "Third Power Performance",
              url: "https://www.thirdpowerlife.ai",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.thirdpowerlife.ai/blog/${post.slug}`,
            },
          }),
        }}
      />

      <article className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-light/50 hover:text-electric transition-colors duration-200 mb-8"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-light/50 mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="text-electric/40">|</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-light/60">{post.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-electric/70 bg-electric/10 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article body */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-light/80 prose-p:leading-relaxed
              prose-strong:text-white
              prose-a:text-electric prose-a:no-underline hover:prose-a:underline
              prose-li:text-light/80
              prose-ul:my-4 prose-ol:my-4
              prose-blockquote:border-electric/40 prose-blockquote:text-light/70 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Divider */}
          <div className="mt-16 border-t border-white/10 pt-12">
            {/* Author */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-midnight flex items-center justify-center text-electric font-heading font-bold text-lg">
                DG
              </div>
              <div>
                <p className="text-white font-heading font-semibold">
                  {post.author}
                </p>
                <p className="text-sm text-light/50">
                  TEDx Speaker &middot; AI Strategist &middot; Founder, Third
                  Power Performance
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-3">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-light/60 mb-6 max-w-lg mx-auto">
                Whether you need a keynote that transforms how your team thinks
                about AI, or a fractional Chief AI Officer to lead the change —
                let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/speaking"
                  className="bg-accent text-white px-6 py-3 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300"
                >
                  Book Dan to Speak
                </a>
                <a
                  href="/consulting"
                  className="border-2 border-electric/50 text-electric px-6 py-3 rounded-lg font-heading font-semibold hover:bg-electric/10 hover:border-electric transition-all duration-300"
                >
                  Fractional CAIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
