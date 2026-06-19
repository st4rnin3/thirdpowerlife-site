#!/usr/bin/env node

const DEFAULT_BASE_URL = "https://www.thirdpowerlife.ai";

const priorityQueries = [
  {
    query: "fractional chief ai officer",
    url: "/consulting",
    intent: "commercial",
  },
  {
    query: "what is a fractional chief ai officer",
    url: "/blog/what-is-fractional-chief-ai-officer",
    intent: "informational",
  },
  {
    query: "ai keynote speaker",
    url: "/speaking",
    intent: "commercial",
  },
  {
    query: "ai readiness assessment for business",
    url: "/ai-capability-gap-diagnostic",
    intent: "transactional",
  },
  {
    query: "ai ascension model",
    url: "/ai-ascension-diagnostic",
    intent: "informational",
  },
  {
    query: "human centered ai strategy",
    url: "/blog",
    intent: "topical-hub",
  },
];

function getArg(name, fallback) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : fallback;
}

function textBetween(html, pattern) {
  const match = html.match(pattern);
  return match?.[1]?.replace(/\s+/g, " ").trim() ?? "";
}

function attr(html, pattern) {
  return textBetween(html, pattern);
}

function countMatches(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function extractLinks(html, baseUrl) {
  return [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)]
    .map((match) => match[1])
    .filter((href) => href && !href.startsWith("#"))
    .map((href) => {
      try {
        return new URL(href, baseUrl).toString();
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function scorePage(url, html, status, baseUrl) {
  const title = textBetween(html, /<title[^>]*>(.*?)<\/title>/is);
  const description = attr(
    html,
    /<meta\b(?=[^>]*name=["']description["'])(?=[^>]*content=["']([^"']*)["'])[^>]*>/i,
  );
  const canonical = attr(
    html,
    /<link\b(?=[^>]*rel=["']canonical["'])(?=[^>]*href=["']([^"']*)["'])[^>]*>/i,
  );
  const h1Count = countMatches(html, /<h1\b/gi);
  const jsonLdCount = countMatches(
    html,
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/gi,
  );
  const links = extractLinks(html, url);
  const internalLinks = links.filter((link) => link.startsWith(baseUrl));
  const externalLinks = links.filter((link) => !link.startsWith(baseUrl));
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const gaps = [];
  if (status < 200 || status >= 400) {
    gaps.push({ severity: "critical", impact: 95, gap: `HTTP status ${status}` });
  }
  if (!title) {
    gaps.push({ severity: "critical", impact: 90, gap: "Missing title" });
  } else if (title.length < 30 || title.length > 65) {
    gaps.push({
      severity: "warning",
      impact: 35,
      gap: `Title length is ${title.length}; target roughly 30-65`,
    });
  }
  if (!description) {
    gaps.push({ severity: "critical", impact: 85, gap: "Missing meta description" });
  } else if (description.length < 80 || description.length > 170) {
    gaps.push({
      severity: "warning",
      impact: 30,
      gap: `Description length is ${description.length}; target roughly 80-170`,
    });
  }
  if (!canonical) {
    gaps.push({ severity: "critical", impact: 80, gap: "Missing canonical URL" });
  }
  if (h1Count !== 1) {
    gaps.push({ severity: "critical", impact: 75, gap: `Expected exactly 1 H1, found ${h1Count}` });
  }
  if (jsonLdCount === 0) {
    gaps.push({ severity: "warning", impact: 45, gap: "No structured data JSON-LD" });
  }
  if (internalLinks.length < 4) {
    gaps.push({ severity: "warning", impact: 30, gap: `Only ${internalLinks.length} internal links found` });
  }
  if (externalLinks.length === 0 && url.includes("/blog/")) {
    gaps.push({
      severity: "warning",
      impact: 25,
      gap: "Blog page has no external source/citation links",
    });
  }
  if (!/\b(is|means|helps|gives|answers|defines)\b/i.test(bodyText.slice(0, 800))) {
    gaps.push({
      severity: "info",
      impact: 15,
      gap: "Opening copy may not be answer-first enough for AI answer engines",
    });
  }

  return {
    url,
    status,
    title,
    description,
    canonical,
    h1Count,
    jsonLdCount,
    internalLinks: internalLinks.length,
    externalLinks: externalLinks.length,
    wordCount: bodyText ? bodyText.split(/\s+/).length : 0,
    gaps,
  };
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "ThirdPowerLife SEO GEO Audit/1.0",
    },
  });
  return {
    status: response.status,
    contentType: response.headers.get("content-type") ?? "",
    text: await response.text(),
  };
}

async function sitemapUrls(baseUrl) {
  const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();
  const { text } = await fetchText(sitemapUrl);
  return [...text.matchAll(/<loc>(.*?)<\/loc>/gi)].map((match) =>
    match[1].replace(DEFAULT_BASE_URL, baseUrl),
  );
}

async function main() {
  const baseUrl = getArg("base", DEFAULT_BASE_URL).replace(/\/$/, "");
  const maxPages = Number(getArg("max-pages", "40"));
  const urls = [...new Set(await sitemapUrls(baseUrl))].slice(0, maxPages);

  const technical = [];
  for (const url of urls) {
    const fetched = await fetchText(url);
    if (!fetched.contentType.includes("text/html")) {
      technical.push({
        url,
        status: fetched.status,
        gaps: [],
        nonHtml: true,
      });
      continue;
    }
    technical.push(scorePage(url, fetched.text, fetched.status, baseUrl));
  }

  const robots = await fetchText(new URL("/robots.txt", baseUrl).toString());
  const llms = await fetchText(new URL("/llms.txt", baseUrl).toString());

  const queryMap = priorityQueries.map((item) => {
    const target = new URL(item.url, baseUrl).toString();
    const crawled = technical.find((page) => page.url === target);
    return {
      ...item,
      target,
      status: crawled?.status ?? "not-in-sitemap",
      mapped: Boolean(crawled && crawled.status >= 200 && crawled.status < 400),
      hasStructuredData: Boolean(crawled && crawled.jsonLdCount > 0),
    };
  });

  const rankedGaps = technical
    .flatMap((page) =>
      (page.gaps ?? []).map((gap) => ({
        url: page.url,
        ...gap,
      })),
    )
    .concat(
      robots.status >= 400
        ? [{ url: `${baseUrl}/robots.txt`, severity: "critical", impact: 90, gap: `robots.txt returned ${robots.status}` }]
        : [],
    )
    .concat(
      llms.status >= 400
        ? [{ url: `${baseUrl}/llms.txt`, severity: "warning", impact: 55, gap: `llms.txt returned ${llms.status}` }]
        : [],
    )
    .concat(
      queryMap
        .filter((item) => !item.mapped)
        .map((item) => ({
          url: item.target,
          severity: "critical",
          impact: 70,
          gap: `Priority query is not mapped to a crawlable page: ${item.query}`,
        })),
    )
    .sort((a, b) => b.impact - a.impact);

  const result = {
    baseUrl,
    crawledAt: new Date().toISOString(),
    crawl: {
      pagesCrawled: technical.length,
      robotsStatus: robots.status,
      llmsStatus: llms.status,
    },
    queryMap,
    rankedGaps,
    pages: technical,
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
