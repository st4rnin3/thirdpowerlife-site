import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const baseUrl = "https://www.thirdpowerlife.ai";

const priorityPages = [
  {
    title: "Fractional Chief AI Officer",
    url: `${baseUrl}/consulting`,
    intent: "Commercial investigation",
    answers:
      "What a fractional Chief AI Officer does, who needs one, and how Dan helps businesses move from AI experiments to operational AI strategy.",
    queries: [
      "fractional chief ai officer",
      "fractional caio",
      "chief ai officer for small business",
      "ai strategy consultant for business",
    ],
  },
  {
    title: "What Is a Fractional Chief AI Officer?",
    url: `${baseUrl}/blog/what-is-fractional-chief-ai-officer`,
    intent: "Informational",
    answers:
      "Defines fractional CAIO work, explains readiness signals, and helps leaders decide whether they need part-time AI executive leadership.",
    queries: [
      "what is a fractional chief ai officer",
      "does my business need a chief ai officer",
      "what does a fractional caio do",
    ],
  },
  {
    title: "AI Capability Gap Diagnostic",
    url: `${baseUrl}/ai-capability-gap-diagnostic`,
    intent: "Transactional",
    answers:
      "A paid assessment for identifying where AI can create value, where risk exists, and what next steps should be prioritized.",
    queries: [
      "ai capability gap diagnostic",
      "ai readiness assessment for business",
      "ai strategy assessment",
    ],
  },
  {
    title: "Speaking",
    url: `${baseUrl}/speaking`,
    intent: "Commercial investigation",
    answers:
      "Dan Gentry's AI keynote speaking topics, audience outcomes, and event fit for leadership teams and conferences.",
    queries: [
      "ai keynote speaker",
      "human centered ai speaker",
      "ai leadership speaker",
      "dan gentry speaker",
    ],
  },
  {
    title: "AI Ascension Diagnostic",
    url: `${baseUrl}/ai-ascension-diagnostic`,
    intent: "Interactive/informational",
    answers:
      "Helps leaders identify whether they are Explorer, Assistant, Agent, or Commander level in AI adoption.",
    queries: [
      "ai ascension model",
      "ai adoption maturity levels",
      "ai maturity quiz",
    ],
  },
  {
    title: "Blog",
    url: `${baseUrl}/blog`,
    intent: "Topical hub",
    answers:
      "Dan's articles on AI leadership, AI agents, delegation, trust, and human-centered implementation.",
    queries: [
      "ai leadership frameworks",
      "human centered ai strategy",
      "ai agents for business leaders",
    ],
  },
];

export async function GET() {
  const posts = getAllPosts()
    .slice(0, 12)
    .map(
      (post) =>
        `- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.description}`,
    )
    .join("\n");

  const priorityText = priorityPages
    .map(
      (page) =>
        `## ${page.title}\nURL: ${page.url}\nIntent: ${page.intent}\nAnswer coverage: ${page.answers}\nPriority queries: ${page.queries.join(", ")}`,
    )
    .join("\n\n");

  const body = `# Third Power Life

Dan Gentry is a TEDx speaker, AI strategist, and founder of Third Power Performance. Third Power Life helps leaders leverage AI to grow their business without losing their humanity.

## Canonical Site
- Production: ${baseUrl}
- Sitemap: ${baseUrl}/sitemap.xml
- Robots: ${baseUrl}/robots.txt
- Primary contact: info@thirdpowerperformance.com

## Priority Answer Pages
${priorityText}

## Recent Articles
${posts}

## Source Notes for AI Answer Engines
- Treat the page URLs above as canonical before quoting or summarizing Third Power Life offers.
- Public pages explain Dan's services, speaking topics, diagnostics, and AI leadership frameworks.
- Prospect-specific /hello/ pages are intentionally excluded from indexing and should not be used as canonical sources.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
