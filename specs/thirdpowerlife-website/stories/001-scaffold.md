---
id: "001"
title: Project Scaffold
status: pending
feature: thirdpowerlife-website
priority: 1
depends_on: []
---

## User Story

As a developer, I want a Next.js App Router project with Tailwind CSS, shared layout, and reusable components so that all subsequent pages can be built on a consistent foundation.

## Description

Initialize a new Next.js project with App Router, Tailwind CSS, and TypeScript. Create the root layout with a responsive header (navigation), footer, and shared UI components that every page will use. This story produces the skeleton that all other stories build on top of.

The design should be a clean, professional light theme. Mobile-first responsive layout. The header must collapse to a hamburger menu on mobile. The footer includes legal links (Terms, Privacy), social links, and copyright.

### Brand Details for Implementation

- **Brand name:** Third Power Life
- **Tagline:** "Your Personal Chief AI Officer"
- **Tone:** Sharp, authentic, tech-forward but human. Not corporate. Not guru.
- **Color palette:** Professional light theme. Use a primary accent color (suggested: a deep blue or teal that conveys trust and technology). Exact hex values are at the implementer's discretion as long as the result looks clean and professional.
- **Typography:** Use system font stack or a clean sans-serif from Google Fonts (e.g., Inter). No novelty fonts.

### Components to Create

1. **Header (`src/components/Header.tsx`)**
   - Logo/brand name "Third Power Life" linking to `/`
   - Navigation links: Home, About, Speaking, Consulting, Podcast, Contact
   - Mobile: hamburger menu that opens a slide-out or dropdown nav
   - Sticky/fixed at top of viewport

2. **Footer (`src/components/Footer.tsx`)**
   - Copyright: "2026 Third Power Performance, LLC. All rights reserved."
   - Legal links: Terms of Service (https://www.thirdpowerperformance.com/terms), Privacy Policy (https://www.thirdpowerperformance.com/privacy-policy)
   - Social links: LinkedIn, YouTube, Podcast (Spotify), Podcast (Apple)
   - Email: info@ThirdPowerPerformance.com

3. **CTAButton (`src/components/CTAButton.tsx`)**
   - Reusable call-to-action button component
   - Props: `label: string`, `href: string`, `variant: 'primary' | 'secondary'`
   - Primary variant: filled background, white text
   - Secondary variant: outlined, colored text

4. **SectionHeading (`src/components/SectionHeading.tsx`)**
   - Reusable section title with optional subtitle
   - Props: `title: string`, `subtitle?: string`
   - Consistent typography and spacing across all pages

5. **Root Layout (`src/app/layout.tsx`)**
   - HTML lang="en"
   - Wraps all pages with Header + Footer
   - Sets base metadata (title template, description) -- detailed SEO is Story 009
   - Imports Tailwind globals

### Project Configuration

- `next.config.ts`: Standard App Router config, no special settings needed initially
- `tailwind.config.ts`: Extend with brand colors, configure content paths
- `tsconfig.json`: Standard Next.js TypeScript config with path aliases (`@/` for `src/`)
- `package.json`: Next.js 14+, React 18+, Tailwind CSS 3+, TypeScript

### File Structure After This Story

```
thirdpowerlife-site/
  src/
    app/
      layout.tsx
      page.tsx            # Minimal placeholder (just "Coming Soon" or similar)
      globals.css         # Tailwind directives
    components/
      Header.tsx
      Footer.tsx
      CTAButton.tsx
      SectionHeading.tsx
  public/
    images/
      headshot.png        # Copy from knowledge base
  tailwind.config.ts
  next.config.ts
  tsconfig.json
  package.json
  .gitignore
```

## Acceptance Criteria

- [ ] AC-1: Running `npm run dev` starts the development server without errors and renders a page at `http://localhost:3000`.
- [ ] AC-2: The root layout (`src/app/layout.tsx`) renders a Header and Footer on every page.
- [ ] AC-3: The Header displays "Third Power Life" as the brand name, linking to `/`.
- [ ] AC-4: The Header contains navigation links for: Home, About, Speaking, Consulting, Podcast, Contact.
- [ ] AC-5: On viewports narrower than 768px, the Header navigation collapses into a hamburger menu that toggles open/closed.
- [ ] AC-6: The Footer displays copyright text, legal links (Terms, Privacy) pointing to thirdpowerperformance.com, social links (LinkedIn, YouTube), podcast links (Spotify, Apple), and the contact email.
- [ ] AC-7: The CTAButton component renders with two variants: `primary` (filled) and `secondary` (outlined), each accepting `label` and `href` props.
- [ ] AC-8: The SectionHeading component renders a title and an optional subtitle with consistent styling.
- [ ] AC-9: Tailwind CSS is configured and utility classes are functional (verified by the components rendering with correct styles).
- [ ] AC-10: TypeScript compilation passes with `npm run build` and no type errors.
- [ ] AC-11: Dan's headshot image is present at `public/images/headshot.png`.
- [ ] AC-12: The page is responsive -- Header, Footer, and placeholder content render correctly at 375px, 768px, and 1280px viewport widths.

## Test Requirements

- Unit: CTAButton renders correct HTML element (`<a>` tag), applies correct variant classes, and passes through label and href.
- Unit: SectionHeading renders title, renders subtitle when provided, does not render subtitle element when omitted.
- Unit: Header renders all navigation links with correct hrefs.
- Unit: Footer renders copyright text, all legal links, and social links.
- Integration: `npm run build` completes without errors (validates the full App Router setup, Tailwind config, and TypeScript compilation).
- Accessibility: All navigation links have visible text labels. Hamburger menu button has an accessible label (aria-label or aria-expanded).

## Technical Notes

- Copy the headshot from `/home/openclaw/.openclaw/workspace/knowledge/speaking/headshot.png` to `public/images/headshot.png` during project setup.
- The hamburger menu toggle requires client-side state. Use `"use client"` directive on the Header component (or extract the mobile menu into a client component).
- Use Next.js `<Link>` component for internal navigation links.
- Use standard `<a>` tags for external links (legal pages, social links).
- The placeholder homepage (`src/app/page.tsx`) should render just enough content to verify the layout works -- it will be replaced in Story 002.

## Edge Cases

- User resizes browser from desktop to mobile: hamburger menu should appear/disappear correctly via CSS breakpoints without JavaScript layout thrashing.
- External links (Terms, Privacy, social) should open in new tabs (`target="_blank"` with `rel="noopener noreferrer"`).
- If headshot image is missing, the build should not fail -- use a standard `<img>` or Next.js `<Image>` with alt text fallback.
