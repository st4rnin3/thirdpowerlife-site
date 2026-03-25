---
id: "009"
title: SEO and Metadata
status: pending
feature: thirdpowerlife-website
priority: 9
depends_on: ["001", "002", "003", "004", "005", "006", "007", "008"]
---

## User Story

As Dan Gentry's brand, I want all pages to have proper SEO metadata, Open Graph tags, and structured data so that the site ranks well in search, looks professional when shared on social media, and Dan's speaker profile appears in knowledge panels.

## Description

Add comprehensive SEO metadata across all pages of the site. This includes page-specific meta titles and descriptions, Open Graph and Twitter Card tags for social sharing, and JSON-LD structured data for speaker profile discovery.

This story touches every page file but the changes are mechanical (adding metadata exports and a shared structured data component). It depends on all other page stories being complete because it needs to reference the final content on each page.

### Per-Page Metadata

Each page should export a `metadata` object (Next.js App Router convention) or use `generateMetadata()` for dynamic pages.

| Page | Title | Description |
|------|-------|-------------|
| `/` | "Dan Gentry | Your Personal Chief AI Officer" | "TEDx speaker and AI strategist helping entrepreneurs leverage AI to grow their business without losing their humanity." |
| `/about` | "About Dan Gentry | Third Power Life" | "Meet Dan Gentry -- TEDx speaker, podcast host, and founder of Third Power Performance. Learn about the Machine Work vs. Meaning Work framework." |
| `/speaking` | "Book Dan Gentry to Speak | Keynotes on AI & Human Flourishing" | "Book Dan Gentry for your next event. Signature keynote: Humanity Amplified -- redefining success in the age of AI." |
| `/consulting` | "Fractional Chief AI Officer | Third Power Life" | "Your fractional Chief AI Officer. Strategic AI implementation leadership for businesses ready to act, not just experiment." |
| `/podcast` | "Third Power Life Podcast | Saving Our Humanity with AI" | "Listen to the Third Power Life podcast. Season 3: Saving Our Humanity with AI. Available on Apple Podcasts, Spotify, and YouTube." |
| `/contact` | "Contact Dan Gentry | Third Power Life" | "Get in touch with Dan Gentry for speaking engagements, AI consulting, or podcast collaborations." |
| `/hello/[slug]` | "A Message for {name} | Dan Gentry" | "A personalized page prepared for {name} at {organization}." |

### Root Layout Metadata

In `src/app/layout.tsx`, set:
- Title template: `"%s | Third Power Life"` (pages override the `%s` portion)
- Default title: `"Dan Gentry | Your Personal Chief AI Officer | Third Power Life"`
- Default description (used as fallback)
- `metadataBase`: `https://www.thirdpowerlife.ai`
- Favicon (use a simple favicon -- can be auto-generated or a placeholder)

### Open Graph Tags

Every page should include:
- `og:title` -- matches the page title
- `og:description` -- matches the page description
- `og:type` -- "website" for all pages
- `og:url` -- canonical URL for the page
- `og:image` -- Dan's headshot or a branded social card image [ASSUMPTION: Use Dan's headshot as the default OG image. A custom social card image is a nice-to-have but not required for launch.]
- `og:site_name` -- "Third Power Life"

### Twitter Card Tags

- `twitter:card` -- "summary_large_image"
- `twitter:title`, `twitter:description`, `twitter:image` -- mirror OG tags
- `twitter:creator` -- "@ThirdPowerPerf" (from company info)

### JSON-LD Structured Data

Add JSON-LD structured data to the homepage and speaking page using `<script type="application/ld+json">`:

**Homepage -- Person schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dan Gentry",
  "jobTitle": "Your Personal Chief AI Officer",
  "description": "TEDx speaker, AI strategist, podcast host, and founder of Third Power Performance",
  "url": "https://www.thirdpowerlife.ai",
  "sameAs": [
    "https://www.linkedin.com/in/daniel-gentry/",
    "https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g",
    "https://twitter.com/ThirdPowerPerf"
  ],
  "image": "https://www.thirdpowerlife.ai/images/headshot.png",
  "worksFor": {
    "@type": "Organization",
    "name": "Third Power Performance",
    "url": "https://www.thirdpowerperformance.com"
  }
}
```

**Speaking page -- additional Event/Offer structured data (optional, lower priority):**
[ASSUMPTION: The Person schema on the homepage is the highest priority. Event-specific structured data can be deferred if it adds significant complexity.]

### Robots and Sitemap

- Add a `robots.txt` at `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.thirdpowerlife.ai/sitemap.xml
  ```
- Use Next.js built-in sitemap generation (`src/app/sitemap.ts`) to auto-generate a sitemap with all static routes and prospect page slugs.

### Prospect Page SEO

- Dynamic pages (`/hello/[slug]`) should use `generateMetadata()` to set per-prospect title and description.
- Prospect pages should include `<meta name="robots" content="noindex, nofollow">` -- these are private sales pages, not intended for search indexing.

## Acceptance Criteria

- [ ] AC-1: Every page has a unique `<title>` tag matching the specification above.
- [ ] AC-2: Every page has a `<meta name="description">` tag with relevant, non-empty content.
- [ ] AC-3: Every page has `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, and `og:site_name` Open Graph tags.
- [ ] AC-4: Every page has `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` Twitter Card tags.
- [ ] AC-5: The homepage includes JSON-LD structured data with a Person schema containing Dan's name, job title, URL, social links, and image.
- [ ] AC-6: A `robots.txt` file is served at `/robots.txt` with the sitemap URL.
- [ ] AC-7: A sitemap is generated at `/sitemap.xml` containing all public page URLs (homepage, about, speaking, consulting, podcast, contact). Prospect pages (`/hello/*`) are NOT included in the sitemap.
- [ ] AC-8: Prospect pages (`/hello/[slug]`) include `noindex, nofollow` robots meta tag.
- [ ] AC-9: The root layout sets a title template so child pages only need to set their specific title portion.
- [ ] AC-10: The `metadataBase` is set to `https://www.thirdpowerlife.ai`.

## Test Requirements

- Unit: Each page's exported metadata (or generateMetadata result) includes a non-empty title and description.
- Unit: Homepage structured data is valid JSON-LD with @type "Person" and required fields (name, jobTitle, url, sameAs, image).
- Unit: Sitemap generation returns URLs for all 6 public pages and does NOT include `/hello/*` pages.
- Unit: Prospect page generateMetadata includes robots "noindex, nofollow".
- Integration: `npm run build` completes and generates pages with correct `<head>` content (inspect build output or use a test rendering).
- Accessibility: N/A for this story (metadata is non-visual).

## Technical Notes

- Next.js App Router uses the `metadata` export (or `generateMetadata()` for dynamic pages) to set all meta tags. This is the recommended approach -- do NOT use `<Head>` from `next/head` (that's Pages Router).
- For JSON-LD, create a component `src/components/JsonLd.tsx` that accepts a data object and renders a `<script type="application/ld+json">` tag. Use this in the homepage layout.
- For the sitemap, use the `src/app/sitemap.ts` convention. Return an array of `MetadataRoute.Sitemap` entries.
- The OG image path (`/images/headshot.png`) is relative to the `metadataBase`. Ensure the headshot is in `public/images/`.
- The noindex directive on prospect pages is critical -- these are private sales pages that should not appear in search results.

## Edge Cases

- Prospect page with missing name/organization: `generateMetadata` should have fallback values ("A Personal Message from Dan Gentry").
- metadataBase must match the final domain. Before DNS cutover, Vercel's auto-generated URL will be used. The metadataBase should still be set to the final domain so OG URLs are correct once DNS is configured.
- Structured data with special characters in values (e.g., quotes in descriptions): JSON.stringify handles escaping, but verify the output is valid.
