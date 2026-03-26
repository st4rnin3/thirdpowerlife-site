"use client";

import { useState, type FormEvent } from "react";

/**
 * Client-side newsletter signup form.
 * Currently uses mailto: as a placeholder until a backend is wired up.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    // Placeholder: open mailto until a real subscription endpoint exists
    window.location.href = `mailto:info@ThirdPowerPerformance.com?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20newsletter:%20${encodeURIComponent(email)}`;
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent sm:rounded-r-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-electric px-6 py-3 font-bold text-navy transition-all hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] sm:rounded-l-none"
      >
        Subscribe
      </button>
    </form>
  );
}
