# ThirdPowerLife.ai Website

## Summary

Build a professional Next.js (App Router) website for thirdpowerlife.ai, replacing the expiring ClickFunnels site. The site serves as Dan Gentry's primary brand presence -- TEDx speaker, AI strategist, podcast host, and fractional Chief AI Officer -- with a dual CTA funnel (speaking bookings + fCAIO consulting) and a differentiated dynamic prospect landing page system (`/hello/[slug]`).

## Problem Statement

Dan's current website is on ClickFunnels, which expires June 2026. The site needs to move to a modern, fast, maintainable stack (Next.js on Vercel free tier) while adding a key new capability: personalized per-prospect landing pages inspired by Chas Wilson's "in-between" sales flow. The current site also lacks proper SEO, structured data for speaker profile discovery, and mobile optimization for event coordinators who browse on phones.

## Goals

- G1: Establish thirdpowerlife.ai as a professional, mobile-first brand hub for Dan Gentry
- G2: Drive two conversion paths: speaking engagement bookings and fCAIO consulting inquiries
- G3: Deliver personalized prospect landing pages (`/hello/[slug]`) as a sales differentiator
- G4: Use real content from the knowledge base (no placeholder/lorem ipsum)
- G5: Deploy on Vercel free Hobby tier with static generation for performance
- G6: SEO-optimized with structured data (SpeakerProfile schema, Open Graph, meta tags)
- G7: Clean, professional light theme; mobile-first responsive design

## Non-Goals

- NG1: **Blog** -- future addition, not in this build
- NG2: **E-commerce / payments** -- no purchases or checkout flows
- NG3: **CRM integration for prospect pages** -- prospect data is static JSON/MDX for now; CRM-driven API is a future iteration
- NG4: **Video hosting** -- all video is embedded from YouTube/Loom, no self-hosting
- NG5: **Dark mode toggle** -- single clean light theme only
- NG6: **Custom CMS or admin panel** -- content is managed via code/files
- NG7: **Form backend infrastructure** -- form submissions use mailto: or a simple API route that sends email; no database or CRM writeback
- NG8: **Analytics beyond Vercel Analytics** -- no Google Analytics, Mixpanel, etc.

## Stories

- 001: Project Scaffold
- 002: Homepage
- 003: About Page
- 004: Speaking Page
- 005: Consulting Page
- 006: Podcast Page
- 007: Contact Page
- 008: Dynamic Prospect Landing Page
- 009: SEO and Metadata
- 010: Vercel Deployment

## Architecture

```
thirdpowerlife-site/
  src/
    app/
      layout.tsx          # Root layout with Header + Footer
      page.tsx            # Homepage
      about/page.tsx
      speaking/page.tsx
      consulting/page.tsx
      podcast/page.tsx
      contact/page.tsx
      hello/[slug]/page.tsx
    components/
      Header.tsx
      Footer.tsx
      CTAButton.tsx
      TestimonialCard.tsx
      SectionHeading.tsx
      NewsletterSignup.tsx
    data/
      prospects/          # Static JSON files per prospect slug
        katie-mdrt.json
    lib/
      prospects.ts        # Prospect data loader
  public/
    images/
      headshot.png        # Dan's speaker headshot
    speaker-one-sheet.pdf # Downloadable speaker one-sheet
  tailwind.config.ts
  next.config.ts
  package.json
  README.md
```

### Key Technical Decisions

- **App Router** (not Pages Router) -- aligns with Next.js best practices
- **Static generation** (`generateStaticParams`) for prospect pages -- fast load, works on free tier
- **Tailwind CSS** -- utility-first styling, no component library dependency
- **No external UI library** -- custom components only, keeps bundle small
- **Prospect data as JSON files** -- simple, version-controlled, no database needed

### Content Sources (Build-Time Reference)

These files contain the real copy to use when building pages. Implementers should read these and extract relevant content into page components:

- Brand positioning: `/home/openclaw/.openclaw/workspace/knowledge/brand/positioning.md`
- Speaker profile: `/home/openclaw/.openclaw/workspace/knowledge/speaking/speaker-profile.md`
- Keynote deep dive: `/home/openclaw/.openclaw/workspace/knowledge/speaking/humanity-amplified.md`
- Case studies: `/home/openclaw/.openclaw/workspace/knowledge/speaking/case-studies.md`
- Company info: `/home/openclaw/.openclaw/workspace/knowledge/company/company-info.md`
- Headshot: `/home/openclaw/.openclaw/workspace/knowledge/speaking/headshot.png`

### External Links (Verified from Knowledge Base)

- Scheduling: https://www.thirdpowerlife.ai/schedule/introductory-call
- LinkedIn: https://www.linkedin.com/in/daniel-gentry/
- Podcast (Apple): https://podcasts.apple.com/us/podcast/third-power-life/id1440527025
- Podcast (Spotify): https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu
- YouTube: https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g
- TEDx: https://www.thirdpowerperformance.com/dan-tedx
- Skool: https://www.skool.com/impact-ai
- Terms: https://www.thirdpowerperformance.com/terms
- Privacy: https://www.thirdpowerperformance.com/privacy-policy
- Email: info@ThirdPowerPerformance.com

## Risks & Open Questions

### Risks

- **R1: Speaker one-sheet PDF does not exist yet.** The speaking page references a downloadable PDF. Mitigation: Use a placeholder link with a TODO comment; Dan can supply the file before DNS switch. Flag this to stakeholder.
- **R2: Newsletter signup has no backend.** The homepage includes a newsletter signup form but there is no email service provider configured. Mitigation: Implement as a mailto: link or static form that shows a "thank you" message; connect to an ESP in a future iteration. [ASSUMPTION: A simple visual form with a "coming soon" or mailto fallback is acceptable for launch.]
- **R3: Video embed URLs not yet provided.** The homepage and prospect pages reference video embeds (speaker reel, personalized Loom videos). Mitigation: Use placeholder embed containers with clear TODO markers; real URLs can be dropped in before launch.
- **R4: Vercel free tier limits.** Hobby tier has limits on serverless function execution time and bandwidth. Mitigation: Static generation for all pages minimizes serverless usage; the contact form API route is the only server function.
- **R5: DNS cutover timing.** The site must be reviewed and approved by Dan before DNS switch from ClickFunnels. Mitigation: Deploy to Vercel's auto-generated URL first; README includes DNS instructions for when Dan approves.

### Open Questions

- **OQ1:** Is the speaker one-sheet PDF available, or does it need to be created? The speaking page references a downloadable one-sheet.
- **OQ2:** What is the speaker reel / keynote video URL for the homepage hero embed? Is this the TEDx talk or a separate reel?
- **OQ3:** For the newsletter signup, is there an existing email service provider (Mailchimp, ConvertKit, etc.) to integrate with, or should this be deferred?
- **OQ4:** For the `/hello/katie-mdrt` example prospect page, what is the personalized Loom/YouTube video URL and specific greeting copy?
- **OQ5:** Should the contact form send emails via a Vercel serverless function (requires email service like Resend/SendGrid), or is a simple mailto: link acceptable for launch?

## Dependencies

- **Vercel account:** Free Hobby tier account must exist or be created
- **GitHub repo:** New repository `thirdpowerlife-site` to be created
- **Node.js 18+:** Required for Next.js App Router
- **Domain DNS:** thirdpowerlife.ai DNS must be pointed to Vercel after approval (not blocking initial deploy)
- **Content files:** Knowledge base files listed above must be accessible at build time for content extraction
- **Headshot image:** `/home/openclaw/.openclaw/workspace/knowledge/speaking/headshot.png` must be copied to `public/images/`
