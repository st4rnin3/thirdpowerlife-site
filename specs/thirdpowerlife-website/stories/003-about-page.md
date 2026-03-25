---
id: "003"
title: About Page
status: pending
feature: thirdpowerlife-website
priority: 3
depends_on: ["001"]
---

## User Story

As a visitor who wants to learn more about Dan Gentry, I want to read his background, philosophy, and frameworks so that I can assess whether he is the right speaker or advisor for my needs.

## Description

Build the About page (`/about`) with Dan's full bio, frameworks, and positioning. All content is sourced from the knowledge base files.

### Section 1: Meet Dan Gentry

- Heading: "Meet Dan Gentry"
- Subtitle: "TEDx Speaker | Your Personal Chief AI Officer | Founder, Third Power Performance"
- Dan's headshot image (from `public/images/headshot.png`, placed in Story 001)
- Long bio (250 words) from the speaker profile knowledge base. The full text is:

> Dan Gentry is a TEDx speaker, podcast host, and the founder of Third Power Performance -- a company built on one belief: AI should protect your humanity, not consume it.
>
> His signature keynote, *Humanity Amplified*, reframes the entire AI conversation. While most speakers promise faster output and more automation, Dan asks the uncomfortable question: "AI can save you 10 hours a week -- but do you know what you'd do with them?"
>
> The answer usually exposes what Dan calls The Success Trap -- high-achieving professionals who've built everything they thought they wanted and lost everything that actually matters: time, presence, health, family.
>
> Dan's framework is built on a simple distinction: Machine Work vs. Meaning Work. Machine Work -- research, formatting, repetitive emails, meeting summaries -- is what AI should handle. Meaning Work -- coaching, vision-casting, mentoring, being present for your kids -- is what humans must fiercely protect. His AI Ascension model (Explorer -> Assistant -> Agent -> Commander) gives leaders a practical roadmap from AI curiosity to reclaiming 30+ hours per week.
>
> Before AI, Dan spent years coaching executives on his Commander vs. Drifter philosophy -- the idea that most people don't fail at life, they drift through it. AI became the first technology that could actually deliver the escape from drift at scale.
>
> Dan hosts the Third Power Life podcast (Season 3: "Saving Our Humanity with AI"), leads the IMPACT AI community, and publishes a weekly newsletter for professionals who want AI to serve their life -- not replace it.

### Section 2: Key Frameworks

Display Dan's frameworks as a visual grid or card layout:

1. **Machine Work vs. Meaning Work** -- The core distinction: what AI handles vs. what humans protect
2. **Commander vs. Drifter** -- Identity/mindset framework: intentional design vs. reactive drift
3. **AI Ascension Model** -- Explorer -> Assistant -> Agent -> Commander: your AI adoption roadmap
4. **IMPACT Method** -- Identify, Map, Prepare, Assemble, Commence, Tune: delegating work to AI
5. **The Success Trap** -- Achieving everything you wanted, losing what matters
6. **The Third Power** -- Integration of business success with a vibrant, purposeful life

Each framework should have the name as a heading and the brief description below it.

### Section 3: Dual CTA

- "Book Dan to Speak" -> `/speaking`
- "Hire Your Fractional Chief AI Officer" -> `/consulting`

## Acceptance Criteria

- [ ] AC-1: The About page renders at `/about`.
- [ ] AC-2: The page displays "Meet Dan Gentry" as the primary heading with the subtitle showing all three title components (TEDx Speaker, PCAIO, Founder).
- [ ] AC-3: Dan's headshot image is displayed and has meaningful alt text (e.g., "Dan Gentry, TEDx Speaker and AI Strategist").
- [ ] AC-4: The long bio text is rendered in full (250 words, matching the knowledge base content). No truncation, no placeholder text.
- [ ] AC-5: All 6 frameworks are displayed with their names and descriptions.
- [ ] AC-6: The dual CTA section renders two buttons linking to `/speaking` and `/consulting`.
- [ ] AC-7: The page is responsive and renders correctly at 375px, 768px, and 1280px viewports. On mobile, the headshot and bio stack vertically. On desktop, they can sit side-by-side.
- [ ] AC-8: The headshot image uses Next.js `<Image>` component (or standard `<img>`) with proper width, height, and alt attributes.

## Test Requirements

- Unit: Page renders the heading "Meet Dan Gentry".
- Unit: Bio section contains key phrases: "Machine Work vs. Meaning Work", "AI Ascension model", "Commander vs. Drifter".
- Unit: All 6 framework cards render with correct framework names.
- Unit: Dual CTA buttons have correct hrefs (`/speaking`, `/consulting`).
- Accessibility: Headshot image has descriptive alt text. Page heading hierarchy is correct (h1 -> h2 -> h3). Framework cards are semantically structured (e.g., using heading + paragraph pairs, not just styled divs).

## Technical Notes

- This is a fully static page -- Server Component, no client-side interactivity needed.
- Use the `CTAButton` and `SectionHeading` components from Story 001.
- Consider using the Next.js `<Image>` component for the headshot to get automatic optimization. Set explicit width/height to prevent layout shift.
- The frameworks section works well as a CSS Grid: 2 columns on desktop, 1 column on mobile.

## Edge Cases

- If headshot image is missing from `public/images/`, the page should still render without a broken image. Use alt text as fallback.
- Bio text contains italic formatting (*Humanity Amplified*) -- render using `<em>` tags, not raw asterisks.
