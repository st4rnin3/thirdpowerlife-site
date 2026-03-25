"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "Speaking Engagement",
  "Fractional Chief AI Officer",
  "Podcast Appearance",
  "Media / Press",
  "Other",
] as const;

const BUDGET_RANGES = [
  "Prefer not to say",
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
] as const;

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  challenge: string;
  whyDan: string;
  budget: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  organization: "",
  inquiryType: "",
  challenge: "",
  whyDan: "",
  budget: "",
};

/* Shared Tailwind class strings to reduce duplication */
const INPUT_CLASSES =
  "w-full rounded-lg border border-gray-300 bg-brand-white px-4 py-3 text-brand-navy placeholder-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/50";
const LABEL_CLASSES = "block text-sm font-medium text-brand-navy";

/**
 * Client-side contact form.
 * Constructs a mailto: link with form data encoded in the body.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.organization ? `Organization: ${form.organization}` : "",
      `Inquiry Type: ${form.inquiryType}`,
      `AI Challenge: ${form.challenge}`,
      form.whyDan ? `Why Dan: ${form.whyDan}` : "",
      form.budget ? `Budget Range: ${form.budget}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Website Inquiry: ${form.inquiryType} from ${form.name}`;
    const mailto = `mailto:info@ThirdPowerPerformance.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-12 text-center">
        <h3 className="text-2xl font-bold text-brand-navy">
          Thanks for reaching out!
        </h3>
        <p className="mt-3 text-gray-600">
          Dan&rsquo;s team will get back to you within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL_FORM);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-medium text-brand-accent underline underline-offset-2 hover:text-brand-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={LABEL_CLASSES}>
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className={`mt-1 ${INPUT_CLASSES}`}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={LABEL_CLASSES}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          className={`mt-1 ${INPUT_CLASSES}`}
        />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="contact-org" className={LABEL_CLASSES}>
          Organization
        </label>
        <input
          id="contact-org"
          type="text"
          value={form.organization}
          onChange={(e) => update("organization", e.target.value)}
          placeholder="Company or organization name"
          className={`mt-1 ${INPUT_CLASSES}`}
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="contact-inquiry" className={LABEL_CLASSES}>
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-inquiry"
          required
          value={form.inquiryType}
          onChange={(e) => update("inquiryType", e.target.value)}
          className={`mt-1 ${INPUT_CLASSES}`}
        >
          <option value="" disabled>
            Select an inquiry type
          </option>
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* AI Challenge */}
      <div>
        <label htmlFor="contact-challenge" className={LABEL_CLASSES}>
          What&rsquo;s your biggest challenge with AI right now?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-challenge"
          required
          rows={4}
          value={form.challenge}
          onChange={(e) => update("challenge", e.target.value)}
          placeholder="Tell us what you're working through..."
          className={`mt-1 ${INPUT_CLASSES}`}
        />
      </div>

      {/* Why Dan */}
      <div>
        <label htmlFor="contact-why" className={LABEL_CLASSES}>
          Why are you reaching out to Dan specifically?
        </label>
        <textarea
          id="contact-why"
          rows={3}
          value={form.whyDan}
          onChange={(e) => update("whyDan", e.target.value)}
          placeholder="What drew you to Dan's work?"
          className={`mt-1 ${INPUT_CLASSES}`}
        />
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="contact-budget" className={LABEL_CLASSES}>
          Budget Range
        </label>
        <select
          id="contact-budget"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className={`mt-1 ${INPUT_CLASSES}`}
        >
          <option value="">Select a range (optional)</option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-navy transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
