---
id: "004"
title: Speaking Page
status: pending
feature: thirdpowerlife-website
priority: 4
depends_on: ["001"]
---

## User Story

As an event organizer evaluating speakers, I want to see Dan's speaker profile, keynote topics, testimonials, and booking process so that I can decide whether to invite him and how to proceed.

## Description

Build the Speaking page (`/speaking`) as a comprehensive speaker profile page targeting event coordinators and conference organizers. This is a critical conversion page -- event organizers often browse on mobile and need to quickly assess speaker fit. All content comes from the knowledge base.

### Section 1: Speaker Profile

- Heading: "Book Dan Gentry to Speak"
- Dan's headshot
- Short bio (100 words) from speaker profile:

> Dan Gentry is a TEDx speaker, podcast host, and founder of Third Power Performance. His signature keynote, *Humanity Amplified*, challenges the dominant AI narrative -- that we should use technology to work faster -- and replaces it with a radical question: what if AI is here to make us more human? Dan teaches the distinction between Machine Work (what AI should handle) and Meaning Work (what humans must protect), giving leaders a clear framework to reclaim 10-40 hours per week and invest them in family, health, creativity, and purpose. He's not anti-AI. He's anti-drift.

- Title: "TEDx Speaker | Your Personal Chief AI Officer | Founder, Third Power Performance"

### Section 2: Signature Keynote

- Heading: "Humanity Amplified: Redefining Success in the Age of AI"
- Duration: 45-60 minutes
- Full description from speaker profile (the talk overview paragraph)
- "Audiences leave with:" bullet list (4 items from the speaker profile)
- "Best for:" line listing ideal audience types

### Section 3: Additional Talk Options

Display as expandable cards or a visible list:

**Talk 2: "Machine Work vs. Meaning Work: What Leaders Should Automate -- and What They Must Protect"**
- Duration: 30-45 minutes (Executive / Leadership Track)
- Description and "Audiences leave with" bullets from speaker profile
- "Best for:" audience types

**Talk 3: "Commander Mode: Stop Reacting to AI and Start Using It Intentionally"**
- Duration: 30-45 minutes (Motivational / Closing Keynote)
- Description and "Audiences leave with" bullets from speaker profile
- "Best for:" audience types

### Section 4: Testimonials

- Reuse the TestimonialCard component (created in Story 002 or shared)
- Display the same 3 testimonials from the homepage:
  - Ryan L., Mary S., Michael M.

### Section 5: Speaker Assets

- Downloadable speaker one-sheet: link to `/speaker-one-sheet.pdf` [ASSUMPTION: File will be placed in `public/` directory. If not yet available, use a placeholder link with a clear TODO.]
- Headshot download link (to the PNG in `public/images/headshot.png`)
- TEDx talk link: https://www.thirdpowerperformance.com/dan-tedx

### Section 6: Booking CTA

- Heading: "Ready to Book Dan?"
- CTA: "Schedule an Intro Call" -> https://www.thirdpowerlife.ai/schedule/introductory-call (external link)
- Secondary text: "Or email info@ThirdPowerPerformance.com"

## Acceptance Criteria

- [ ] AC-1: The Speaking page renders at `/speaking`.
- [ ] AC-2: The speaker profile section displays Dan's headshot, 100-word short bio, and title.
- [ ] AC-3: The signature keynote section displays the talk title "Humanity Amplified: Redefining Success in the Age of AI", duration, full description, and the 4-item "audiences leave with" list.
- [ ] AC-4: Both additional talk options are displayed with their titles, durations, descriptions, audience takeaways, and "Best for" audience types.
- [ ] AC-5: At least 3 testimonials are displayed with quote text and attribution.
- [ ] AC-6: The speaker assets section contains a link to the speaker one-sheet PDF, a headshot download link, and the TEDx talk link.
- [ ] AC-7: The booking CTA section contains a link to the scheduling URL (https://www.thirdpowerlife.ai/schedule/introductory-call) and displays the contact email.
- [ ] AC-8: The page is responsive -- all sections stack cleanly on mobile (375px) and use appropriate layouts on desktop (1280px).
- [ ] AC-9: All talk descriptions use real content from the knowledge base -- no placeholder text.

## Test Requirements

- Unit: Page renders the heading "Book Dan Gentry to Speak".
- Unit: Signature keynote section contains the title "Humanity Amplified".
- Unit: Both additional talks render with their correct titles.
- Unit: At least 3 testimonials render with non-empty text.
- Unit: Booking CTA links to the correct scheduling URL.
- Unit: Speaker one-sheet link points to `/speaker-one-sheet.pdf`.
- Accessibility: Talk sections use appropriate heading hierarchy. Testimonials use `<blockquote>`. All links have descriptive text (not "click here"). Downloadable assets have clear labels indicating file type.

## Technical Notes

- This is a Server Component -- no client-side interactivity unless you implement expandable/accordion sections for the additional talks.
- If using accordions for talks, extract that into a small client component. Otherwise, display all talks expanded (simpler, and event organizers want to scan quickly).
- Reuse the `TestimonialCard` component. If it was created inline in Story 002, extract it to `src/components/TestimonialCard.tsx` now.
- External links (scheduling, TEDx) should open in new tabs.
- The speaker one-sheet PDF file should be placed at `public/speaker-one-sheet.pdf`. If the file is not yet available, create the link anyway and add a code comment: `// TODO: Add speaker-one-sheet.pdf to public/ directory`.

## Edge Cases

- Speaker one-sheet PDF not yet available: link should not cause a 404 crash. Either conditionally render the link or let it resolve to a 404 (acceptable since this is flagged as a known open question).
- Very long talk descriptions: ensure they don't break the layout on narrow screens.
- TEDx link is external: verify it opens in a new tab, not navigating away from the site.
