# Changelog

All notable changes to the ThirdPowerLife.ai site are recorded here. Newest entries appear at the top.

---

## [Unreleased] - 2026-04-04

### Markdown Blog System with Pillar Post Seed Content

**Summary:**
- Added a filesystem-based blog engine using `gray-matter` for frontmatter parsing and `remark`/`remark-html` for Markdown-to-HTML rendering, with all post logic centralized in `src/lib/blog.ts` (`getAllPosts`, `getPostBySlug`)
- Added `/blog` index page (`src/app/blog/page.tsx`) with a responsive post grid using the existing glass-card theme, and `/blog/[slug]` dynamic post pages (`src/app/blog/[slug]/page.tsx`) with Article JSON-LD structured data, full OG/Twitter metadata, and canonical URLs
- Seeded 6 pillar posts in `src/content/blog/` and updated `src/app/sitemap.ts` to include all blog URLs dynamically; added Blog link to `src/components/Header.tsx` and `src/components/Footer.tsx`

**Who it's for:** Site visitors discovering ThirdPowerLife.ai through organic search, and Dan (site owner) as content author. Dan adds future posts by dropping a `.md` file with valid frontmatter into `src/content/blog/` and deploying — no code changes required.

**How to test:**
- [ ] Visit `/blog` — confirm all 6 seed posts appear in the grid with title, date, description, and reading time, sorted newest first
- [ ] Click any post card — confirm the full post renders at `/blog/[slug]` with correct title, date, and body formatting
- [ ] View page source on any post page — confirm `<script type="application/ld+json">` contains Article structured data with the correct `headline`, `author`, and `datePublished`
- [ ] Check `<head>` on a post page — confirm `og:title`, `og:description`, `og:image`, `twitter:card`, and `<link rel="canonical">` are all present and populated
- [ ] Visit `/sitemap.xml` — confirm all 6 `/blog/[slug]` URLs appear alongside existing site pages
- [ ] Check Header and Footer — confirm a Blog navigation link is present and routes to `/blog`
- [ ] Add a new `.md` file to `src/content/blog/` with valid frontmatter — confirm it appears on `/blog` and is accessible at its slug with no code changes

**Breaking changes:** None. All additions; no existing routes or data models modified.

**Migration required:** None. New dependencies install automatically on `npm install`.

**New files:**
- `src/lib/blog.ts` — shared blog utilities: `getAllPosts` and `getPostBySlug`, filesystem reads from `src/content/blog/`
- `src/app/blog/page.tsx` — `/blog` index page with responsive glass-card post grid
- `src/app/blog/[slug]/page.tsx` — dynamic post page with Article JSON-LD, OG/Twitter metadata, and canonical URL
- `src/content/blog/machine-work-vs-meaning-work.md`
- `src/content/blog/ai-ascension-model.md`
- `src/content/blog/impact-method-delegate-to-ai.md`
- `src/content/blog/commander-vs-drifter.md`
- `src/content/blog/what-is-fractional-chief-ai-officer.md`
- `src/content/blog/the-success-trap.md`

**Updated files:**
- `src/app/sitemap.ts` — calls `getAllPosts()` to include all blog post URLs dynamically
- `src/components/Header.tsx` — Blog link added to main navigation
- `src/components/Footer.tsx` — Blog link added to footer navigation

**New dependencies:** `gray-matter`, `remark`, `remark-html`, `@tailwindcss/typography` (npm)

---

## [Unreleased] - 2026-03-29

### Stripe Order/Payment System

**Summary:**
- Added dynamic order pages at `/order/[slug]` backed by Stripe product metadata — creating a product in Stripe with a `slug` field instantly makes the order page live, no code changes required
- Added two API routes (`GET /api/stripe/product/[slug]` and `POST /api/stripe/checkout`) plus a shared Stripe client at `src/lib/stripe.ts` that validates env vars on startup
- Added post-payment pages at `/order/success` and `/order/cancelled` styled to match the existing dark navy/glass-card theme

**Who it's for:** Dan (site owner) and paying clients. Dan creates a product in Stripe, sets `slug` metadata, then sends `/order/{slug}` to clients after a discovery call. Clients see product name, description, price, and a single Pay Now (one-time) or Subscribe (recurring) button that redirects to Stripe-hosted Checkout.

**How to test:**
- [ ] Create a Stripe test product with metadata `slug: speaking-engagement` and a one-time price
- [ ] Visit `/order/speaking-engagement` — confirm product name, description, and formatted price render correctly
- [ ] Click "Pay Now" — confirm redirect to Stripe Checkout with the correct product
- [ ] Complete a test payment — confirm redirect to `/order/success` with thank-you message
- [ ] Click "Cancel" on Stripe Checkout — confirm redirect to `/order/cancelled` with retry option
- [ ] Create a recurring price, visit its slug page — confirm button reads "Subscribe" and price shows `/month`
- [ ] Visit `/order/nonexistent-slug` — confirm 404 or appropriate error state
- [ ] Remove `STRIPE_SECRET_KEY` from env — confirm the app fails fast with a clear error at startup rather than a runtime panic

**Breaking changes:** None. All new routes and pages; no existing routes modified.

**Migration required:** None for existing functionality. Two environment variables must be added to Vercel (and any local `.env.local`) before the order system is usable:

```
STRIPE_SECRET_KEY=sk_live_...        # server-side only, never expose to client
NEXT_PUBLIC_SITE_URL=https://www.thirdpowerlife.ai
```

**New files:**
- `src/lib/stripe.ts` — shared Stripe client with env var validation
- `src/app/api/stripe/product/[slug]/route.ts` — GET: product + price lookup by slug
- `src/app/api/stripe/checkout/route.ts` — POST: Checkout Session creation with price ownership verification
- `src/app/order/[slug]/page.tsx` — dynamic SSR order page
- `src/app/order/[slug]/OrderClient.tsx` — client component handling Pay Now / Subscribe button state
- `src/app/order/success/page.tsx` — post-payment confirmation page
- `src/app/order/cancelled/page.tsx` — cancellation page with retry link

**New dependency:** `stripe` (npm)

---
