# Changelog

All notable changes to the ThirdPowerLife.ai site are recorded here. Newest entries appear at the top.

---

## [Unreleased] - 2026-04-19

### Remove Unfinished Guide 2.0 Waitlist Section from /connect

**Summary:**
- Removed the "AI Ascension Guide 2.0 Coming Soon" section from `src/app/connect/page.tsx` — it contained a hardcoded placeholder form action (`YOUR_FORM_ID`) that would have produced a broken experience for visitors.
- Updated page metadata (`description`, `og:description`, `twitter:description`) from "download the AI Ascension Guide" to "find your AI Ascension level" to reflect the page's actual current purpose.
- Updated `/connect` route description in `README.md` to remove the Guide 2.0 waitlist reference.

**Who it's for:** Site visitors on `/connect`. The page now flows without interruption: Hero → Find Your Level (survey) → AI Clarity Call (Cal.com embed) → About Dan.

**How to test:**
- [ ] Visit `/connect` — confirm no "Coming Soon" or Guide 2.0 waitlist section is visible
- [ ] Confirm the page `<head>` description contains "find your AI Ascension level" (not "download the AI Ascension Guide")
- [ ] Inspect page source or Open Graph preview — verify `og:description` and `twitter:description` reflect the updated copy

**Breaking changes:** None. Section removed; no routes, APIs, or data models changed.

**Migration required:** None.

**Updated files:**
- `src/app/connect/page.tsx` — removed Guide 2.0 Coming Soon section, updated metadata descriptions
- `README.md` — updated /connect route description

---

## [Unreleased] - 2026-04-19

### AI Ascension Mini-Survey on /connect

**Summary:**
- Replaced the static 4-level AI Ascension cards on `src/app/connect/page.tsx` with an interactive 8-question diagnostic component (`src/app/connect/AiAscensionSurvey.tsx`) that scores visitors into one of four levels: Level 0 (Explorer), Level 1 (Assistant), Level 2 (Agent), or Level 3 (Commander).
- Scoring is fully deterministic with a Q7 tie-break; all logic runs client-side — no new dependencies or backend routes added.
- The result card surfaces level, explanation, common failure mode, trust principle, next move, and a level-specific CTA that scrolls to the existing `#clarity-call` booking section.

**Who it's for:** CONNECT 2026 attendees and site visitors evaluating their AI maturity. Replaces a passive content block with an actionable self-assessment, improving qualification signal before an AI Clarity Call booking.

**How to test:**
- [ ] Visit `/connect` — confirm the static 4-level cards are gone and the survey renders in their place
- [ ] Complete all 8 questions and confirm a result card appears with the correct level, failure mode, trust principle, and next-move copy
- [ ] Verify the result CTA button scrolls to `#clarity-call` without a full page reload
- [ ] Use the Back button to confirm navigation returns to the previous question with the prior selection preserved
- [ ] Tab through the survey using keyboard only — confirm radiogroup ARIA pattern is intact and all controls are reachable
- [ ] Test on a mobile viewport — confirm single-question stepped UI and progress bar are responsive
- [ ] Confirm no new network requests fire during or after survey completion (pure client-side)

**Breaking changes:** None. The `/connect` route is preserved; only the internal content block was replaced.

**Migration required:** None.

**New files:**
- `src/app/connect/AiAscensionSurvey.tsx` — interactive 8-question diagnostic with scoring engine, stepped UI, progress bar, result card, and level-specific CTAs

**Updated files:**
- `src/app/connect/page.tsx` — removed static 4-level cards, inserted `AiAscensionSurvey` component

---

## [Unreleased] - 2026-04-19

### Commander Launchpad Sales Page and Offer

**Summary:**
- Added an 8-section landing page at `/commander-launchpad` for the Commander Launchpad productized service offer — a 3-tier engagement (Audit, Sprint, Retainer) that takes founder-led businesses from scattered AI tool usage to a functioning 3-agent operating system.
- Added `/commander-launchpad` to `src/app/sitemap.ts` at priority 0.8 with monthly change frequency.
- Added `commander-launchpad-audit` to `src/data/order-success.ts` with a custom confirmation heading, message, delivery step sequence, and upsell CTA linking to the Sprint discovery call at `/schedule`.
- Added full offer architecture spec at `specs/commander-launchpad/offer.md` covering ICP, tier pricing, delivery checklists, intake questions, risks, and offer ladder position.

**Who it's for:** Founder-operators (1-25 person teams, $200K-$5M revenue) who are already paying for AI tools but not getting operational leverage from them. The landing page is the public conversion surface. The Tier 1 Audit ($997) is purchasable via Stripe; Tier 2 Sprint ($5k-$9k) and Tier 3 Retainer ($1.5k-$4k/mo) route to a discovery call at `/schedule`.

**Offer ladder position:**
```
$197 AI Capability Gap Diagnostic  →  $997 Launchpad Audit (Tier 1)
  →  $5k-$9k 3-Agent Sprint (Tier 2)
  →  $1.5k-$4k/mo Managed Optimization (Tier 3)
  →  $1,000 fCAIO Initial Session
  →  fCAIO Monthly Retainer
```

**Landing page sections:**
1. Hero — core promise and tier entry CTA
2. Before/After framing — "tool overwhelm" vs. "functioning operating system"
3. 3-tier overview with scopes and prices
4. Who this is for / not for (ICP qualification)
5. Agent configuration options (Chief, Revenue, Inbox or Content)
6. Process walkthrough
7. FAQ
8. Footer CTA

**How to test:**
- [ ] Visit `/commander-launchpad` — confirm all 8 sections render correctly with the dark navy/glass-card theme
- [ ] Confirm Tier 1 "Buy the Audit" CTA links to the correct Stripe order URL (requires `commander-launchpad-audit` Stripe product to be created with metadata `slug: commander-launchpad-audit`)
- [ ] Confirm Tier 2 and Tier 3 CTAs link to `/schedule` for discovery call booking
- [ ] Complete a test Stripe payment for the Audit — confirm redirect to `/order/success?slug=commander-launchpad-audit` shows the custom heading "Your Launchpad audit is confirmed." and the intake step sequence
- [ ] Visit `/sitemap.xml` — confirm `/commander-launchpad` appears
- [ ] Confirm page `<head>` includes `og:title`, `og:description`, `og:url`, `twitter:title`, `twitter:description`, and `<link rel="canonical" href="https://www.thirdpowerlife.ai/commander-launchpad">`

**Breaking changes:** None. All additions; no existing routes or data models modified.

**New files:**
- `src/app/commander-launchpad/page.tsx` — 8-section landing page with full OG/Twitter metadata and canonical URL
- `specs/commander-launchpad/offer.md` — full offer architecture (ICP, tier architecture, delivery assets, intake questions, delivery checklists, risks, offer ladder integration)

**Updated files:**
- `src/app/sitemap.ts` — added `/commander-launchpad` static page entry (priority 0.8, monthly)
- `src/data/order-success.ts` — added `commander-launchpad-audit` success page content

**Stripe setup required (before Tier 1 Audit is purchasable):**
1. In Stripe Dashboard, create a Product named "Commander Launchpad Audit" with a one-time price of $997.
2. Add metadata: `slug` = `commander-launchpad-audit`.
3. The order page at `/order/commander-launchpad-audit` is then live with no further code changes.

**Known gaps / follow-ups (not blocking first sale):**
- Intake form at `/commander-launchpad/intake` — not yet built; required for full launch per `specs/commander-launchpad/offer.md` Section 10
- Before/after case study, short-form video walkthrough, and ROI calculator — listed as nice-to-have in the offer spec
- Agent Starter Sprint spec (2026-04-17) is superseded by Commander Launchpad per `specs/commander-launchpad/offer.md` Appendix A; that spec should be marked as superseded when located

---

## [Unreleased] - 2026-04-12

### Public Newsletter Signup Component

**Summary:**
- Added `NewsletterSignup` React component (`src/components/NewsletterSignup.tsx`) with two rendering variants: `"section"` (full-width homepage block with headline and subtext) and `"compact"` (minimal form for embedding in the footer). Both variants POST to the dashboard API endpoint `POST /api/audience/public-subscribe`.
- Replaced the orphaned `NewsletterForm` placeholder on the homepage (`src/app/page.tsx`) with the real `NewsletterSignup` component (section variant).
- Added the compact variant to the footer (`src/components/Footer.tsx`).
- Deleted `src/components/NewsletterForm.tsx` (orphaned placeholder with no backend connection).

**Who it's for:** Site visitors on thirdpowerlife.ai who want to subscribe to the newsletter. The form collects email and optional name, validates client-side, and submits to the dashboard backend. Successful submissions receive a branded welcome email.

**How to test:**
- [ ] Visit the homepage — confirm the newsletter signup section is visible with the section variant (headline, subtext, email input, name input, submit button)
- [ ] Scroll to the footer — confirm the compact variant is present with a minimal email input
- [ ] Submit a valid email — confirm the form shows a success state (no page reload)
- [ ] Submit an invalid email — confirm client-side validation prevents submission
- [ ] Submit an already-subscribed email — confirm the response is handled gracefully (no error UI)
- [ ] Confirm `NewsletterForm.tsx` no longer exists in `src/components/`

**Breaking changes:** `src/components/NewsletterForm.tsx` is deleted. Any import of `NewsletterForm` elsewhere would break — none exist after this change.

**New files:**
- `src/components/NewsletterSignup.tsx` — two-variant signup form component; handles form state, submission, and response feedback

**Updated files:**
- `src/app/page.tsx` — replaced `NewsletterForm` import with `NewsletterSignup` (section variant)
- `src/components/Footer.tsx` — added `NewsletterSignup` compact variant

**Deleted files:**
- `src/components/NewsletterForm.tsx` — orphaned placeholder; had no backend connection

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
