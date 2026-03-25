---
id: "002"
title: Homepage
status: pending
feature: thirdpowerlife-website
priority: 2
depends_on: ["001"]
---

## User Story

As a visitor landing on thirdpowerlife.ai, I want to immediately understand who Dan Gentry is and how he can help me so that I can decide whether to book him as a speaker or explore fCAIO consulting.

## Description

Build the homepage (`/`) with the following sections in order from top to bottom. All content must be real -- pulled from the knowledge base files, not placeholder text.

### Section 1: Hero

- Headline: "Your Personal Chief AI Officer"
- Subhead: "AI should not replace humanity. AI should amplify it."
- Brief positioning text (1-2 sentences): Dan helps entrepreneurs and leaders leverage AI to grow their business without losing their humanity.
- Speaker reel / keynote video embed area. [ASSUMPTION: Use a placeholder container with a TODO comment for the video URL. If the TEDx link (https://www.thirdpowerperformance.com/dan-tedx) resolves to an embeddable video, use that; otherwise leave as a styled placeholder.]
- Dual CTA buttons:
  - Primary: "Book Dan to Speak" -> `/speaking`
  - Secondary: "Need a Fractional Chief AI Officer?" -> `/consulting`

### Section 2: Social Proof

- Section heading: "From the Stage"
- 2-3 testimonials from the speaker profile (use real testimonials from knowledge base):
  - "Dan is a superb speaker and a caring coach. His Triad system is one of the most powerful personal development tools I have ever come across." -- Ryan L.
  - "The moment I heard Dan speak I knew he had the experience to back up his theory. Authentic from the get-go." -- Mary S.
  - "Dan does a wonderful job of turning his own experiences into teachable and useable information." -- Michael M.
- Display as cards or a horizontal scroll on mobile.

### Section 3: What Dan Delivers

- Brief overview of the two paths:
  - **Speaking:** Keynotes and workshops on AI and human flourishing. Link to `/speaking`.
  - **Fractional Chief AI Officer:** Strategic AI implementation for businesses ready to act. Link to `/consulting`.
- Use the key frameworks as supporting points:
  - Machine Work vs. Meaning Work
  - Commander vs. Drifter
  - AI Ascension Model (Explorer -> Assistant -> Agent -> Commander)

### Section 4: Podcast

- Section heading: "Third Power Life Podcast"
- Subtitle: "Season 3: Saving Our Humanity with AI"
- Platform links (use icons or text links):
  - Apple Podcasts: https://podcasts.apple.com/us/podcast/third-power-life/id1440527025
  - Spotify: https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu
  - YouTube: https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g
- CTA: "Listen Now" linking to `/podcast`

### Section 5: Newsletter Signup

- Heading: "Get the AI Playbook"
- Subtext: "Actionable AI strategies for entrepreneurs who want to work smarter and live better. No hype. No spam."
- Email input field + submit button
- [ASSUMPTION: Form submission is a visual placeholder for now. On submit, either show a "Thank you" message or link to a mailto. No ESP backend is wired up in this story. The form should be built so a future story can easily add a real submission handler.]

### Section 6: Dual CTA (Bottom)

- Repeated dual CTA before the footer:
  - "Book Dan to Speak" -> `/speaking`
  - "Hire Your Fractional Chief AI Officer" -> `/consulting`

## Acceptance Criteria

- [ ] AC-1: The homepage renders at `/` with all six sections in the specified order.
- [ ] AC-2: The hero section displays the headline "Your Personal Chief AI Officer", the subhead, positioning text, and a video embed area (placeholder or real embed).
- [ ] AC-3: The hero section contains two CTA buttons: "Book Dan to Speak" linking to `/speaking` and a secondary CTA linking to `/consulting`.
- [ ] AC-4: The social proof section displays at least 3 testimonials with attribution names, using the real testimonial text from the knowledge base.
- [ ] AC-5: The "What Dan Delivers" section presents speaking and fCAIO consulting as two distinct paths with links to their respective pages.
- [ ] AC-6: The podcast section displays the podcast name, current season subtitle, and links to Apple Podcasts, Spotify, and YouTube.
- [ ] AC-7: The newsletter signup section contains an email input field and a submit button. Submitting the form does not cause an error (shows a thank-you message or no-op).
- [ ] AC-8: The bottom dual CTA section renders two CTA buttons linking to `/speaking` and `/consulting`.
- [ ] AC-9: All sections are responsive and render correctly on mobile (375px), tablet (768px), and desktop (1280px) viewports.
- [ ] AC-10: No placeholder text (lorem ipsum, "coming soon") appears in any section -- all copy is real content.

## Test Requirements

- Unit: Hero section renders headline text "Your Personal Chief AI Officer".
- Unit: At least 3 testimonial cards render with non-empty quote text and attribution.
- Unit: All CTA buttons have correct `href` values (`/speaking`, `/consulting`).
- Unit: Podcast section renders links to all 3 platforms (Apple, Spotify, YouTube) with correct URLs.
- Unit: Newsletter form contains an email input (type="email") and a submit button.
- Accessibility: Hero heading uses an `<h1>` tag. Section headings use `<h2>`. Testimonial quotes use `<blockquote>` or have appropriate ARIA roles. All interactive elements are keyboard-accessible.

## Technical Notes

- This page should be a Server Component (no "use client" needed) unless the newsletter form requires client-side interactivity, in which case extract just the form into a client component.
- Use the `CTAButton` and `SectionHeading` components from Story 001.
- Consider creating a `TestimonialCard` component (`src/components/TestimonialCard.tsx`) for reuse on the Speaking page (Story 004).
- For the video embed placeholder, use an `<iframe>` wrapper or a styled div with a play button icon. The container should be 16:9 aspect ratio responsive.
- The newsletter form's `onSubmit` handler should prevent default and show a simple "Thank you!" message (client-side state).

## Edge Cases

- Video URL not yet available: The video area should display gracefully as a styled placeholder (e.g., dark background with a play icon and "Watch the Keynote" text) rather than a broken iframe.
- Newsletter form submitted with invalid email: Use HTML5 `type="email"` validation to prevent invalid submissions.
- Very long testimonial text: Cards should handle text overflow gracefully (no truncation, allow natural wrapping).
