---
id: "006"
title: Podcast Page
status: pending
feature: thirdpowerlife-website
priority: 6
depends_on: ["001"]
---

## User Story

As a visitor interested in Dan's content, I want to find and listen to the Third Power Life podcast so that I can engage with his ideas before booking a call.

## Description

Build the Podcast page (`/podcast`) as a hub for the Third Power Life podcast. The podcast is currently on hiatus (~5 months as of March 2026, restart planned) but still has content available on all major platforms. The page should present the podcast professionally and make it easy to listen on the user's preferred platform.

### Section 1: Podcast Hero

- Heading: "Third Power Life Podcast"
- Subtitle: "Season 3: Saving Our Humanity with AI"
- Brief description (1-2 paragraphs):
  - The Third Power Life podcast explores how AI can be used intentionally to reclaim time, protect what matters, and amplify our humanity.
  - Dan interviews leaders, shares frameworks, and breaks down real AI use cases through the lens of Machine Work vs. Meaning Work.

### Section 2: Listen On (Platform Links)

Display as prominent buttons or branded link cards:

- **Apple Podcasts:** https://podcasts.apple.com/us/podcast/third-power-life/id1440527025
- **Spotify:** https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu
- **YouTube:** https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g

Each link should be visually distinct (use platform names/icons) and open in a new tab.

### Section 3: Featured / Recent Episodes

[ASSUMPTION: We do not have a dynamic feed of episode data. This section uses a static list of 3-4 episode placeholders. The implementer should create this as a data-driven component (mapping over an array) so episodes can be easily updated by editing a data file or array.]

Display 3-4 episode cards, each with:
- Episode title
- Brief description (1 sentence)
- Link to listen (platform link or direct episode link)

For the initial build, use descriptive placeholders that convey the podcast's themes:
- Episode titles should reference real themes from the knowledge base (e.g., "Machine Work vs. Meaning Work", "The AI Ascension Model", "Commander Mode: Escaping Drift")
- Mark these with a code comment: `// TODO: Replace with real episode data`

### Section 4: CTA

- "Want Dan on your podcast? Or want to be a guest?"
- CTA: "Get in Touch" -> `/contact`

## Acceptance Criteria

- [ ] AC-1: The Podcast page renders at `/podcast`.
- [ ] AC-2: The hero section displays "Third Power Life Podcast" and the season subtitle.
- [ ] AC-3: Platform links for Apple Podcasts, Spotify, and YouTube are displayed with correct URLs.
- [ ] AC-4: All platform links open in new tabs (`target="_blank"` with `rel="noopener noreferrer"`).
- [ ] AC-5: At least 3 episode entries are displayed, each with a title and description.
- [ ] AC-6: The episode list is rendered by mapping over a data array (not hardcoded individual JSX blocks), so it can be easily updated.
- [ ] AC-7: A CTA at the bottom links to the Contact page (`/contact`).
- [ ] AC-8: The page is responsive on mobile (375px) and desktop (1280px).

## Test Requirements

- Unit: Page renders the heading "Third Power Life Podcast".
- Unit: Three platform links render with correct hrefs for Apple, Spotify, and YouTube.
- Unit: At least 3 episode items render with non-empty title text.
- Unit: CTA link points to `/contact`.
- Accessibility: Platform links have descriptive accessible text (e.g., "Listen on Apple Podcasts", not just an icon). Episode cards are semantically structured.

## Technical Notes

- This is a Server Component -- no client-side interactivity needed.
- Use `CTAButton` and `SectionHeading` from Story 001.
- Consider defining episode data as a typed array at the top of the page file or in a separate `src/data/episodes.ts` file:
  ```typescript
  interface Episode {
    title: string;
    description: string;
    link: string;
  }
  ```
- For platform icons, use SVG icons or simple text labels. Do not add a third-party icon library unless already in the project.
- External links should all use `target="_blank"` and `rel="noopener noreferrer"`.

## Edge Cases

- Podcast platforms may change their URL structure: links should be correct as of the current knowledge base but are external and may break. Not a build-time concern.
- Episode data is static and may become stale: the data structure should make updates trivial (edit an array, not refactor JSX).
