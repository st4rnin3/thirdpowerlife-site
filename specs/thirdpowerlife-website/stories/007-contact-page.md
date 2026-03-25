---
id: "007"
title: Contact Page
status: pending
feature: thirdpowerlife-website
priority: 7
depends_on: ["001"]
---

## User Story

As a potential client or event organizer, I want to submit an inquiry to Dan with context about my needs so that he can evaluate fit and respond appropriately.

## Description

Build the Contact page (`/contact`) with an inquiry form that includes qualifying questions. The form helps Dan prioritize inquiries by understanding why the person is reaching out and what they need.

### Section 1: Page Header

- Heading: "Get in Touch"
- Subtext: "Whether you're booking a keynote, exploring AI consulting, or have a question -- start here."

### Section 2: Inquiry Form

The form collects the following fields:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text input | Yes | Full name |
| Email | email input | Yes | Contact email |
| Organization | text input | No | Company or event name |
| Inquiry type | select/radio | Yes | Options: "Speaking engagement", "fCAIO consulting", "Podcast collaboration", "Other" |
| "What's your biggest challenge with AI right now?" | textarea | Yes | Qualifying question per requirements |
| "Why are you reaching out to Dan specifically?" | textarea | No | Qualifying question per requirements |
| Budget range | select | No | Options: "Under $5,000", "$5,000-$10,000", "$10,000-$25,000", "$25,000+", "Not sure yet", "Prefer not to say" |
| Message | textarea | No | Any additional context |

### Form Submission Behavior

[ASSUMPTION: For the initial build, form submission uses one of two approaches, in order of preference:

1. **API Route (preferred):** Create a Next.js API route (`src/app/api/contact/route.ts`) that receives the form data as JSON and sends an email to info@ThirdPowerPerformance.com using a free email service (Resend free tier allows 100 emails/day, or use a simple SMTP approach).
2. **Mailto fallback:** If no email service is configured, construct a `mailto:info@ThirdPowerPerformance.com` link with the form data serialized into the body.

The implementer should build the API route structure regardless, so it's easy to wire up an email service later. For now, the API route can log the submission to the console and return a success response.]

On successful submission:
- Show a confirmation message: "Thank you! Dan will get back to you within 2 business days."
- Clear the form

On error:
- Show an error message: "Something went wrong. Please email info@ThirdPowerPerformance.com directly."

### Section 3: Alternative Contact

Below the form:
- "Prefer email? Reach out directly at info@ThirdPowerPerformance.com"
- "Ready to book right now? Schedule an intro call" -> https://www.thirdpowerlife.ai/schedule/introductory-call

## Acceptance Criteria

- [ ] AC-1: The Contact page renders at `/contact`.
- [ ] AC-2: The form displays all specified fields: Name (required), Email (required), Organization (optional), Inquiry type (required), AI challenge question (required), "Why Dan" question (optional), Budget range (optional), Message (optional).
- [ ] AC-3: Required fields are enforced -- submitting the form with empty required fields shows validation errors and does not submit.
- [ ] AC-4: The Inquiry type field offers exactly these options: "Speaking engagement", "fCAIO consulting", "Podcast collaboration", "Other".
- [ ] AC-5: The Budget range field offers options including "Not sure yet" and "Prefer not to say" so respondents are not forced to disclose.
- [ ] AC-6: On successful form submission, a confirmation message is displayed and the form is cleared.
- [ ] AC-7: On submission error, an error message is displayed with the direct email address as fallback.
- [ ] AC-8: An API route exists at `/api/contact` that accepts POST requests with the form data as JSON and returns a success response.
- [ ] AC-9: The alternative contact section displays the direct email and scheduling link.
- [ ] AC-10: The page and form are responsive on mobile (375px) and desktop (1280px). Form inputs are full-width on mobile.
- [ ] AC-11: The form uses HTML5 validation attributes (required, type="email") for client-side validation.

## Test Requirements

- Unit: Form renders all 8 fields with correct types (text, email, select, textarea).
- Unit: Required fields have the `required` attribute.
- Unit: Inquiry type select/radio has exactly 4 options.
- Unit: Budget range select has at least 6 options including "Not sure yet" and "Prefer not to say".
- Unit: API route handler (`/api/contact`) accepts a POST request with JSON body and returns a 200 response.
- Unit: API route returns 400 if required fields (name, email, inquiry_type, ai_challenge) are missing.
- Accessibility: All form inputs have associated `<label>` elements. Required fields are indicated visually AND with `aria-required="true"`. Error messages are associated with their fields via `aria-describedby`. Form is keyboard-navigable.

## Technical Notes

- The form requires client-side interactivity (state management, submit handler, validation UI). Use `"use client"` directive on the form component.
- Consider extracting the form into `src/components/ContactForm.tsx` as a client component, keeping the page itself as a Server Component that wraps it.
- For the API route, create `src/app/api/contact/route.ts` with a `POST` handler. Initially, it can just log to console and return `{ success: true }`. Add a code comment: `// TODO: Wire up email service (Resend, SendGrid, or SMTP)`.
- Use React `useState` for form state and submission status (idle, submitting, success, error).
- Budget range is intentionally optional with soft options -- the goal is to qualify without creating friction.

## Edge Cases

- User submits form with JavaScript disabled: HTML5 validation still works, but the submit handler won't fire. The mailto fallback link below the form serves as the escape hatch.
- Very long textarea input: set a reasonable maxLength (e.g., 2000 characters) on textareas to prevent abuse.
- Email field with valid format but unreachable domain: HTML5 email validation only checks format, not deliverability. This is acceptable.
- Double-submit (user clicks submit twice): disable the submit button while the request is in flight (during "submitting" state).
