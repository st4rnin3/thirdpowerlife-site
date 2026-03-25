---
id: "008"
title: Dynamic Prospect Landing Page
status: pending
feature: thirdpowerlife-website
priority: 8
depends_on: ["001"]
---

## User Story

As Dan sending a follow-up to a specific prospect, I want a personalized landing page at `/hello/[slug]` with their name, a custom video, and relevant assets so that the prospect feels a tailored experience and is more likely to book a call.

## Description

Build the dynamic prospect landing page system (`/hello/[slug]`). This is the key differentiator of the site, inspired by Chas Wilson's "in-between" sales flow. Each prospect gets a unique URL (e.g., `/hello/katie-mdrt`) that shows personalized content, making the sales touchpoint feel bespoke rather than mass-produced.

### Data Architecture

Prospect data is stored as static JSON files in `src/data/prospects/`. Each file is named `[slug].json` and contains:

```typescript
interface ProspectData {
  slug: string;              // URL slug, e.g., "katie-mdrt"
  name: string;              // Prospect's first name, e.g., "Katie"
  organization: string;      // Their org/event, e.g., "MDRT"
  greeting: string;          // Custom greeting text
  videoUrl?: string;         // Loom or YouTube embed URL (optional)
  videoCaption?: string;     // Text below the video
  showSpeakerAssets: boolean; // Whether to show speaker videos/one-sheet/testimonials
  showBookSection: boolean;  // Whether to show a book/resource section
  bookTitle?: string;        // Book or resource title (if showBookSection is true)
  bookDescription?: string;  // Brief description
  bookImageUrl?: string;     // Cover image URL
  ctaLabel: string;          // CTA button text, e.g., "Schedule Our Call"
  ctaUrl: string;            // CTA link, e.g., scheduling URL
  additionalNotes?: string;  // Any extra text to display
}
```

Create a utility module `src/lib/prospects.ts` with:

- `getProspect(slug: string): ProspectData | null` -- reads and parses the JSON file
- `getAllProspectSlugs(): string[]` -- returns all available slugs for `generateStaticParams`

### Page Layout (`/hello/[slug]`)

**Section 1: Personalized Greeting**
- Heading: "Hi {name} -- thanks for connecting"
- Subtext: Custom greeting from the prospect data
- This should feel warm and personal, not like a template

**Section 2: Video (conditional)**
- If `videoUrl` is provided: embed the video (YouTube iframe or Loom embed)
- If not provided: omit this section entirely (not a placeholder)
- Video caption text below the embed

**Section 3: Speaker Assets (conditional)**
- Only shown if `showSpeakerAssets` is true
- Heading: "About Dan"
- Brief bio (short version)
- Links to: TEDx talk, speaker one-sheet, headshot
- 1-2 testimonials

**Section 4: Book/Resource Section (conditional)**
- Only shown if `showBookSection` is true
- Display book cover image, title, and description
- [ASSUMPTION: This section is for future use. The example prospect page does not need to show this section.]

**Section 5: CTA**
- Prominent CTA button with the prospect-specific label and URL
- e.g., "Schedule Our Call" -> scheduling link

**Section 6: Additional Notes (conditional)**
- If `additionalNotes` is provided, display as a styled paragraph
- If not, omit the section

### Example Prospect: katie-mdrt

Create `src/data/prospects/katie-mdrt.json`:

```json
{
  "slug": "katie-mdrt",
  "name": "Katie",
  "organization": "MDRT",
  "greeting": "I really enjoyed our conversation and wanted to put together a few things for you and the MDRT team to review.",
  "videoUrl": "",
  "videoCaption": "A quick message for you and the MDRT team.",
  "showSpeakerAssets": true,
  "showBookSection": false,
  "ctaLabel": "Schedule Our Next Call",
  "ctaUrl": "https://www.thirdpowerlife.ai/schedule/introductory-call",
  "additionalNotes": "Looking forward to continuing the conversation about bringing Humanity Amplified to MDRT."
}
```

[ASSUMPTION: The `videoUrl` for Katie is empty because a personalized video has not been recorded yet. The page should gracefully omit the video section when the URL is empty or missing.]

### 404 Handling

If a user visits `/hello/nonexistent-slug`, the page should render a friendly 404:
- "This page doesn't exist yet."
- "Looking for Dan Gentry? Head to the homepage."
- Link to `/`

### Static Generation

Use `generateStaticParams()` to pre-render all prospect pages at build time. This keeps pages fast and works within Vercel's free tier.

## Acceptance Criteria

- [ ] AC-1: The route `/hello/[slug]` renders a personalized page when a matching prospect JSON file exists.
- [ ] AC-2: The page displays the prospect's name in the greeting heading (e.g., "Hi Katie -- thanks for connecting").
- [ ] AC-3: The custom greeting text from the prospect data is displayed below the heading.
- [ ] AC-4: When `videoUrl` is provided and non-empty, a video embed is rendered. When empty or missing, the video section is not rendered.
- [ ] AC-5: When `showSpeakerAssets` is true, the page displays Dan's bio, TEDx link, speaker one-sheet link, and testimonials. When false, this section is not rendered.
- [ ] AC-6: When `showBookSection` is true, the book/resource section renders with title, description, and image. When false, it is not rendered.
- [ ] AC-7: The CTA button displays the prospect-specific label and links to the prospect-specific URL.
- [ ] AC-8: The example prospect page `/hello/katie-mdrt` renders correctly with the data from the JSON file.
- [ ] AC-9: Visiting `/hello/nonexistent-slug` renders a 404 page with a link back to the homepage.
- [ ] AC-10: `generateStaticParams()` returns all prospect slugs, enabling static generation at build time.
- [ ] AC-11: The page is responsive on mobile (375px) and desktop (1280px).
- [ ] AC-12: A `src/lib/prospects.ts` module exists with `getProspect()` and `getAllProspectSlugs()` functions.

## Test Requirements

- Unit: `getProspect("katie-mdrt")` returns a valid ProspectData object with name "Katie" and organization "MDRT".
- Unit: `getProspect("nonexistent")` returns null.
- Unit: `getAllProspectSlugs()` returns an array containing "katie-mdrt".
- Unit: Page component renders the prospect name in the greeting when valid data is provided.
- Unit: Video section renders when videoUrl is non-empty; does not render when videoUrl is empty or undefined.
- Unit: Speaker assets section renders when showSpeakerAssets is true; does not render when false.
- Unit: Book section renders when showBookSection is true; does not render when false.
- Unit: CTA button renders with correct label and href from prospect data.
- Integration: `npm run build` successfully generates the static page for `/hello/katie-mdrt`.
- Accessibility: Personalized greeting uses an appropriate heading level. Video embed has a title attribute. CTA button is keyboard-accessible.

## Technical Notes

- Use `generateStaticParams()` in the page file to enumerate all prospect slugs at build time.
- Use `notFound()` from `next/navigation` when `getProspect()` returns null -- this triggers Next.js's built-in 404 handling. Create a custom `not-found.tsx` in the `hello/[slug]/` directory for the friendly 404 message.
- For YouTube embeds, use the embed URL format: `https://www.youtube.com/embed/{VIDEO_ID}`. For Loom: `https://www.loom.com/embed/{VIDEO_ID}`.
- The video embed should be responsive (16:9 aspect ratio container).
- Prospect JSON files are read at build time using `fs.readFileSync` -- this is fine since `generateStaticParams` and the page component run server-side during build.
- To add a new prospect: create a new JSON file in `src/data/prospects/` and rebuild. No code changes needed.

## Edge Cases

- Prospect JSON file has malformed JSON: the build should fail with a clear error. Use `JSON.parse` with try/catch in the loader and surface the error.
- Prospect JSON missing required fields (slug, name, ctaLabel, ctaUrl): validate at load time and throw a descriptive error during build.
- videoUrl is an empty string vs. undefined: both cases should result in the video section being omitted.
- Slug contains special characters: slugs should be limited to lowercase alphanumeric and hyphens. Document this constraint in a code comment.
- Multiple prospect files: `generateStaticParams` must read all JSON files from the directory, not just a hardcoded list.
