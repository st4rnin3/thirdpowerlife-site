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
| `/` | Homepage — hero, frameworks, testimonials, podcast, newsletter signup (section variant) |
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
| `/connect` | CONNECT 2026 post-event page — AI Ascension Mini-Survey (interactive, client-side scoring → Level 0-3 result card) and Cal.com booking embed for AI Clarity Calls |
| `/commander-launchpad` | Commander Launchpad sales page — 3-tier productized offer (Audit $997, Sprint $5k-$9k, Retainer $1.5k-$4k/mo) |
| `/blog` | Blog index — lists all published posts, sorted newest first |
| `/blog/[slug]` | Individual blog post rendered from Markdown with Article JSON-LD |

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
| `commander-launchpad-audit` | Commander Launchpad Audit | $997 (recommended starting price) | One-time |

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

## Blog System

Blog posts are Markdown files in `src/content/blog/`. The utility library at `src/lib/blog.ts` exports `getAllPosts` and `getPostBySlug`, which parse frontmatter with `gray-matter` and convert body content to HTML with `remark`/`remark-html`.

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title — used in `<h1>` and page `<title>` |
| `date` | Yes | ISO date string, e.g. `2026-04-04` — used for sort order and display |
| `description` | Yes | One-sentence summary shown on the blog index card and OG metadata |
| `author` | No | Post author name; defaults to "Dan Gentry" if omitted |
| `slug` | No | URL slug; defaults to filename without `.md` if omitted |
| `tags` | No | Array of topic strings, e.g. `["AI", "Leadership"]` |
| `ogImage` | No | URL to a custom social media preview image; defaults to site hero image |

Posts missing `title` or `date` are silently skipped and will not appear on the blog.

### How to add a new post

1. Create a `.md` file in `src/content/blog/` — the filename (without `.md`) becomes the URL slug.
2. Add the required frontmatter (`title`, `date`, `description`) at the top of the file.
3. Write the post body in standard Markdown below the frontmatter.
4. Deploy (or run `npm run dev`) — the post appears at `/blog/<slug>` immediately.

No code changes are required to publish a post.

### Dependencies added

- `gray-matter` — frontmatter parsing
- `remark` + `remark-html` — Markdown to HTML conversion
- `@tailwindcss/typography` — prose styling for rendered post bodies

---

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

`STRIPE_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` must be set in Vercel → Project Settings → Environment Variables before the Stripe order system will function.

## Newsletter Signup Component

The `NewsletterSignup` component (`src/components/NewsletterSignup.tsx`) connects directly to the dashboard backend. It has two variants:

| Variant | Used in | Description |
|---------|---------|-------------|
| `"section"` | Homepage (`src/app/page.tsx`) | Full-width block with headline, subtext, email + name fields, and optional phone/SMS consent |
| `"compact"` | Footer (`src/components/Footer.tsx`) | Minimal email input suitable for tight layout contexts |

Both variants POST JSON to the hardcoded dashboard URL `https://openclaw.thirdpowerperformance.com/api/audience/public-subscribe`. The component handles all response states: loading, success, already-subscribed, suppressed, rate-limited, and error. A 10-second fetch timeout prevents indefinite spinner states.

The form includes a hidden honeypot field. The backend silently accepts honeypot-filled submissions without creating subscriber records.

The deleted `src/components/NewsletterForm.tsx` was a placeholder with no backend connection and has been fully replaced by this component.
