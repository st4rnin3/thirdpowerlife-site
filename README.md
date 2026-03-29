# ThirdPowerLife.ai

Professional website for Dan Gentry — TEDx Speaker, AI Strategist, and Your Personal Chief AI Officer.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel (Hobby tier)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, frameworks, testimonials, podcast, newsletter |
| `/about` | Bio, key frameworks, dual CTA |
| `/speaking` | Keynote details, additional talks, testimonials, booking CTA |
| `/consulting` | Fractional Chief AI Officer services |
| `/podcast` | Third Power Life podcast — Spotify, Apple, YouTube links |
| `/contact` | Inquiry form with qualifying questions |
| `/schedule` | Cal.com inline scheduling embed |
| `/hello/[slug]` | Personalized prospect landing pages |
| `/order/[slug]` | Product order page — fetches product details from Stripe by slug |
| `/order/success` | Post-payment confirmation page |
| `/order/cancelled` | Payment cancelled / try again page |

## Stripe Order System

Dan sends `/order/<slug>` links directly to clients after discovery calls. There are no public pricing pages. Products are created in the Stripe dashboard, not in code.

### How to add a new product

1. In the Stripe Dashboard, create a Product with a Price attached.
2. On the Product, add metadata: `slug` = your chosen URL slug (e.g. `speaking-engagement`).
3. The order page at `https://thirdpowerlife.ai/order/<slug>` is immediately live — no deploy required.

### Current products

| Slug | Product Name | Price | Type |
|------|-------------|-------|------|
| `speaking-engagement` | Speaking Engagement | $5,000 | One-time |
| `fcaio-initial` | fCAIO Initial Session | $1,000 | One-time |
| `fcaio-monthly` | fCAIO Monthly Retainer | $2,500/mo | Recurring (monthly) |

### Payment flow

```
/order/[slug]  →  Stripe Checkout  →  /order/success
                                   →  /order/cancelled
```

The order page calls `GET /api/stripe/product/[slug]` to display product name, description, and price. Clicking Pay Now / Subscribe calls `POST /api/stripe/checkout` with the `priceId`, which creates a Stripe Checkout Session and returns the redirect URL.

### API routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/stripe/product/[slug]` | Fetch active product + price from Stripe by metadata slug |
| POST | `/api/stripe/checkout` | Create Checkout Session; body: `{ priceId: string }`; returns `{ url: string }` |

### Shared library

`src/lib/stripe.ts` exports an initialized Stripe client. All API routes import from here.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint check
```

## Adding Prospect Landing Pages

1. Edit `src/data/prospects.ts`
2. Add a new entry to the `prospects` record with a unique slug
3. Deploy — the page will be statically generated at build time
4. Share the URL: `https://www.thirdpowerlife.ai/hello/your-slug`

## DNS Configuration for thirdpowerlife.ai

To point the domain to Vercel:

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add `thirdpowerlife.ai` and `www.thirdpowerlife.ai`
3. Update DNS records at your registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

4. Vercel will auto-provision SSL certificates
5. Set `www.thirdpowerlife.ai` as the primary domain (recommended)

## Environment Variables

| Variable | Where used | Description |
|----------|-----------|-------------|
| `STRIPE_SECRET_KEY` | Server-side only (API routes) | Stripe secret key — set in Vercel, never expose to client |
| `NEXT_PUBLIC_SITE_URL` | API routes (redirect URLs) | Base URL for Stripe success/cancel redirects, e.g. `https://thirdpowerlife.ai` or the Vercel preview URL |

Both variables must be set in Vercel → Project Settings → Environment Variables before the Stripe order system will function.

Future additions:
- Newsletter service API key
- Contact form email delivery service key
