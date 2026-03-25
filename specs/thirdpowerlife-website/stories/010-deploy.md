---
id: "010"
title: Vercel Deployment
status: pending
feature: thirdpowerlife-website
priority: 10
depends_on: ["001", "002", "003", "004", "005", "006", "007", "008", "009"]
---

## User Story

As Dan, I want the site deployed to Vercel and accessible via a public URL so that I can review it and eventually point thirdpowerlife.ai to it.

## Description

Deploy the completed site to Vercel's free Hobby tier and create documentation for DNS configuration. This is the final story -- it depends on all other stories being complete.

### Deployment Steps

1. **GitHub Repository:** Ensure the project is in a GitHub repository (`thirdpowerlife-site`). Vercel deploys from GitHub.
2. **Vercel Project:** Connect the GitHub repo to a Vercel project. Vercel auto-detects Next.js and configures the build.
3. **Environment Variables:** If the contact form API route needs any environment variables (e.g., email service API key), document them. For the initial deploy, no env vars should be required.
4. **Build Verification:** Confirm `npm run build` succeeds locally before deploying. All pages should generate without errors.
5. **Deploy:** Push to the main branch. Vercel auto-deploys on push.

### README

Create a `README.md` at the project root with:

**Section 1: Project Overview**
- What this is: ThirdPowerLife.ai website
- Tech stack: Next.js (App Router), Tailwind CSS, TypeScript, Vercel
- Key features: 7 page types including dynamic prospect pages

**Section 2: Local Development**
- Prerequisites: Node.js 18+
- Setup: `npm install` then `npm run dev`
- Development URL: `http://localhost:3000`

**Section 3: Deployment**
- Hosting: Vercel (Hobby tier)
- Auto-deploys on push to `main` branch
- Preview deploys on pull requests

**Section 4: DNS Configuration for thirdpowerlife.ai**
Step-by-step instructions:
1. In Vercel dashboard, go to Project Settings > Domains
2. Add `thirdpowerlife.ai` and `www.thirdpowerlife.ai`
3. Vercel will provide DNS records (typically A record and/or CNAME)
4. At your domain registrar, update DNS:
   - A record: `@` -> Vercel's IP (76.76.21.21)
   - CNAME: `www` -> `cname.vercel-dns.com`
5. Wait for DNS propagation (up to 48 hours, usually minutes)
6. Vercel auto-provisions SSL certificate

**Section 5: Adding a New Prospect Page**
Instructions for adding a new `/hello/[slug]` page:
1. Create a new JSON file in `src/data/prospects/[slug].json`
2. Follow the ProspectData interface schema
3. Push to main -- Vercel will rebuild and deploy the new page

**Section 6: Content Updates**
- How to update page content (edit page files directly)
- How to update episodes list on the podcast page
- How to update testimonials

### Vercel Configuration

- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Node.js Version:** 18.x or 20.x
- **No serverless functions beyond the contact form API route**

### Pre-Launch Checklist

Document in the README as a checklist for before DNS switch:

- [ ] All pages render correctly on desktop and mobile
- [ ] Contact form submits without errors
- [ ] All external links (scheduling, social, legal) work
- [ ] Speaker one-sheet PDF is uploaded (if available)
- [ ] Video embeds have real URLs (hero video, prospect videos)
- [ ] Newsletter signup is wired to an email service (or has acceptable fallback)
- [ ] Dan has reviewed and approved the site
- [ ] DNS records are ready to update

## Acceptance Criteria

- [ ] AC-1: The project is in a GitHub repository.
- [ ] AC-2: The site is deployed to Vercel and accessible via Vercel's auto-generated URL (e.g., `thirdpowerlife-site.vercel.app`).
- [ ] AC-3: All pages (`/`, `/about`, `/speaking`, `/consulting`, `/podcast`, `/contact`, `/hello/katie-mdrt`) load without errors on the deployed site.
- [ ] AC-4: A `README.md` exists at the project root with local development instructions, deployment information, and DNS configuration steps for thirdpowerlife.ai.
- [ ] AC-5: The README includes instructions for adding a new prospect page.
- [ ] AC-6: The README includes a pre-launch checklist.
- [ ] AC-7: `npm run build` succeeds without errors or warnings that would prevent deployment.
- [ ] AC-8: The site uses static generation (pages are pre-rendered at build time, not server-rendered on each request) -- verified by the build output showing static pages.

## Test Requirements

- Integration: `npm run build` completes without errors and outputs static HTML for all pages.
- Integration: All listed routes return 200 status codes when accessed on the deployed URL.
- Integration: `/hello/katie-mdrt` returns 200; `/hello/nonexistent` returns 404.
- Manual: README is readable and instructions are accurate (walkthrough by a developer who didn't build the site).

## Technical Notes

- Vercel's free Hobby tier supports Next.js static sites with no additional configuration.
- The contact form API route (`/api/contact`) runs as a serverless function on Vercel. On the free tier, serverless functions have a 10-second execution timeout -- more than enough for logging form data.
- If the GitHub repo is private, the Vercel account must have access (standard OAuth flow during Vercel setup).
- Do NOT commit any secrets, API keys, or `.env` files. Use Vercel's environment variable UI for any secrets needed later.
- The `.gitignore` should exclude: `node_modules/`, `.next/`, `.env*`, `*.local`.

## Edge Cases

- Build fails on Vercel but succeeds locally: usually a Node.js version mismatch. Pin Node version in `package.json` engines field or `.nvmrc`.
- Vercel auto-generated URL is indexed by Google before DNS switch: this is low-risk for a new site. The metadataBase is already set to the final domain, so canonical URLs will be correct once DNS is configured.
- DNS propagation delay: document that this can take up to 48 hours but is usually much faster. Vercel provides verification in the dashboard.
