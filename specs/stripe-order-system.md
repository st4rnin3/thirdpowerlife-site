# Spec: Stripe Order/Payment System

**Priority:** P1
**Owner:** Builder (code) + Chief (Stripe products)
**Date:** 2026-03-29

---

## Overview

Add a payment order system to the ThirdPowerLife.ai website. When Dan creates a product in Stripe, the site automatically generates an order page for it. Dan sends the link to clients after discovery calls — no public pricing pages.

## Architecture

### Flow
1. Chief creates a Stripe Product + Price (via API)
2. Site has a dynamic route `/order/[slug]` that looks up the product by metadata slug
3. Client visits the link, sees product details + price + "Pay Now" button
4. Button creates a Stripe Checkout Session (server-side) and redirects to Stripe's hosted checkout
5. After payment, client returns to `/order/success` with a thank-you message
6. Cancelled payments redirect to `/order/cancelled`

### Product Lookup Strategy
- Each Stripe Product should have metadata: `{ slug: "speaking-engagement" }`
- The `/order/[slug]` page calls an API route that fetches the product by slug
- This means: create product in Stripe with slug metadata → order page is instantly live
- Cache product data with ISR or short TTL to avoid hitting Stripe on every page load

## New Files Needed

### Dependencies
- `stripe` npm package

### API Routes
- `src/app/api/stripe/product/[slug]/route.ts` — GET: fetch product + price by slug from Stripe
- `src/app/api/stripe/checkout/route.ts` — POST: create Checkout Session, return redirect URL

### Pages
- `src/app/order/[slug]/page.tsx` — Dynamic order page (SSR or client-side fetch)
- `src/app/order/[slug]/OrderClient.tsx` — Client component with Pay Now button
- `src/app/order/success/page.tsx` — Thank you / payment confirmed page
- `src/app/order/cancelled/page.tsx` — Payment cancelled, try again page

## Design Requirements

- Match existing dark navy theme (`#001433`, `#00D2FF` cyan, `#0057FF` blue)
- Use existing `.glass` card style for the order card
- Clean, simple layout: product name, description, price, single CTA button
- For recurring products, show "$X,XXX/month" with "Subscribe" instead of "Pay Now"
- Mobile-first, consistent with rest of site
- Include Header and Footer components

## Environment Variables

Already stored in OpenClaw env, need to be added to Vercel:
- `STRIPE_SECRET_KEY` — server-side only (API routes)
- `STRIPE_PUBLISHABLE_KEY` — can be exposed to client if needed (for Stripe.js), but not required for Checkout Sessions approach
- `NEXT_PUBLIC_SITE_URL` — base URL for success/cancel redirects (e.g., `https://thirdpowerlife.ai` or Vercel preview URL)

## API Route Details

### GET `/api/stripe/product/[slug]`
```typescript
// Fetch all active products from Stripe, find the one with matching slug metadata
// Return: { id, name, description, price: { amount, currency, type: 'one_time' | 'recurring', interval? } }
// 404 if no product matches
```

### POST `/api/stripe/checkout`
```typescript
// Body: { priceId: string }
// Creates Stripe Checkout Session
// mode: 'payment' for one_time, 'subscription' for recurring
// success_url: NEXT_PUBLIC_SITE_URL/order/success?session_id={CHECKOUT_SESSION_ID}
// cancel_url: NEXT_PUBLIC_SITE_URL/order/cancelled
// Returns: { url: string } (Stripe Checkout URL)
```

## Initial Products (Chief will create these in Stripe)

| Slug | Product Name | Price | Type | Stripe Metadata |
|---|---|---|---|---|
| `speaking-engagement` | Speaking Engagement | $5,000 | One-time | `slug: speaking-engagement` |
| `fcaio-initial` | fCAIO Initial Session | $1,000 | One-time | `slug: fcaio-initial` |
| `fcaio-monthly` | fCAIO Monthly Retainer | $2,500/mo | Recurring (monthly) | `slug: fcaio-monthly` |

## Definition of Done

1. `stripe` package installed
2. API routes working (product lookup + checkout creation)
3. `/order/[slug]` renders product details with Pay Now / Subscribe button
4. Clicking button redirects to Stripe Checkout
5. Success and cancelled pages exist and match site theme
6. Build passes (`next build`)
7. Works with test products (Chief will create them)

## NOT in Scope

- Webhook handling (future — for fulfillment automation)
- Customer portal / subscription management (future)
- Invoice generation
- Admin UI for product management (Chief handles via Stripe API)
