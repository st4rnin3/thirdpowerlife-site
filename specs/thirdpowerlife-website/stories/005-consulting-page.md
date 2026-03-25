---
id: "005"
title: Consulting Page
status: pending
feature: thirdpowerlife-website
priority: 5
depends_on: ["001"]
---

## User Story

As a business leader exploring AI strategy options, I want to understand what a fractional Chief AI Officer does and whether Dan is the right fit so that I can decide to book an introductory call.

## Description

Build the Consulting page (`/consulting`) explaining the fCAIO (fractional Chief AI Officer) offering. This page is outcomes-focused per Chas Wilson's coaching: lead with the result, not the features. NO pricing on the page. The content is synthesized from brand positioning and the knowledge base.

### Section 1: Hero / What is a Fractional Chief AI Officer?

- Heading: "Your Fractional Chief AI Officer"
- Subhead: "AI strategy and implementation leadership -- without the full-time executive hire."
- Brief explanation (2-3 paragraphs) covering:
  - What a fCAIO does: provides C-level AI strategy, implementation oversight, and team enablement on a fractional basis
  - The problem it solves: businesses know they need AI but don't have in-house expertise to implement it strategically, not just experimentally
  - Dan's approach: grounded in the Machine Work vs. Meaning Work framework -- identify what to automate, protect what matters, build systems that serve the business AND the humans in it

### Section 2: Who This Is For

Display as a list or card layout:

- **Businesses ready to implement AI** -- not just experiment. You've tried ChatGPT; now you need a strategy.
- **Leaders drowning in Machine Work** -- your team spends more time on repetitive tasks than strategic thinking.
- **Organizations navigating AI transformation** -- you need a guide who understands both the technology and the human side.
- **Entrepreneurs scaling with AI** -- you want to grow without burning out or losing what matters.

### Section 3: What You Get (Outcomes, Not Features)

Per Chas's coaching: "What result do I promise?" Frame as outcomes:

- **Clarity:** A clear AI strategy aligned with your business goals -- not a generic roadmap, a specific plan for YOUR organization.
- **Reclaimed time:** Identify and automate 10-40 hours per week of Machine Work across your team.
- **Confident adoption:** Move from AI curiosity to systematic implementation using the AI Ascension model.
- **Protected humanity:** Build AI systems that serve your people, not replace them. Guard the Meaning Work.

### Section 4: How It Works

Brief process overview (keep it simple, 3-4 steps):

1. **Discovery call** -- Understand your business, challenges, and AI readiness
2. **AI audit** -- Map your Machine Work vs. Meaning Work across teams
3. **Strategy and implementation** -- Build and execute your AI roadmap
4. **Ongoing advisory** -- Fractional support as your AI maturity grows

### Section 5: Booking CTA

- Heading: "Ready to Talk AI Strategy?"
- Body text: "No pitch deck. No pressure. Just a conversation about where AI can move the needle for your business."
- CTA: "Book an Intro Call" -> https://www.thirdpowerlife.ai/schedule/introductory-call (external link)
- Secondary: "Or email info@ThirdPowerPerformance.com"

### Important Constraints

- **NO pricing anywhere on this page.** This is explicitly stated in the requirements.
- **Outcomes over features.** Do not list deliverables, hours, or service tiers. Focus on what the client achieves.
- **Tone:** Confident but not salesy. Direct but warm. Anti-hype.

## Acceptance Criteria

- [ ] AC-1: The Consulting page renders at `/consulting`.
- [ ] AC-2: The hero section explains what a fractional Chief AI Officer is in 2-3 paragraphs.
- [ ] AC-3: The "Who This Is For" section displays at least 4 audience segments with descriptions.
- [ ] AC-4: The outcomes section presents results (clarity, reclaimed time, confident adoption, protected humanity) -- NOT features, deliverables, or pricing.
- [ ] AC-5: **No pricing information appears anywhere on the page.**
- [ ] AC-6: The "How It Works" section displays a 3-4 step process.
- [ ] AC-7: The booking CTA links to the scheduling URL (https://www.thirdpowerlife.ai/schedule/introductory-call) and displays the contact email.
- [ ] AC-8: The page is responsive on mobile (375px), tablet (768px), and desktop (1280px).
- [ ] AC-9: All copy uses real, substantive text -- no placeholder or lorem ipsum content.

## Test Requirements

- Unit: Page renders the heading "Your Fractional Chief AI Officer" (or similar containing "Fractional Chief AI Officer").
- Unit: The page does NOT contain any dollar signs (`$`), the word "price", "pricing", "cost", or "fee" (case-insensitive).
- Unit: At least 4 audience segment items render.
- Unit: At least 4 outcome items render.
- Unit: CTA links to the scheduling URL.
- Accessibility: Heading hierarchy is correct (h1 -> h2). Process steps are structured as an ordered list. All interactive elements are keyboard-accessible.

## Technical Notes

- This is a fully static Server Component -- no client-side interactivity needed.
- Use the `CTAButton` and `SectionHeading` components from Story 001.
- The content on this page is not directly sourced from a single knowledge base file -- it is synthesized from brand positioning, the fCAIO concept described in the requirements, and Chas's coaching notes. The implementer should write copy that matches the brand voice (direct, warm, anti-hype) and frameworks (Machine Work vs. Meaning Work, AI Ascension).
- External links (scheduling) should open in new tabs.

## Edge Cases

- Scheduling link is down or redirects: not our concern, but the link should be correct and open in a new tab so the user doesn't lose the site.
- Page loaded with no JavaScript: all content should be visible as it's a server-rendered static page.
