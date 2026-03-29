# Changelog

All notable changes to the ThirdPowerLife.ai site are recorded here. Newest entries appear at the top.

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
