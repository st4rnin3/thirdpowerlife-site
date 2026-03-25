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
| `/hello/[slug]` | Personalized prospect landing pages |

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

None required for the current build. Future additions:
- Newsletter service API key
- Contact form email delivery service key
