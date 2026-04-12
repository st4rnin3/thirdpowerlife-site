"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type FormStatus =
  | "idle"
  | "submitting"
  | "subscribed"
  | "already_subscribed"
  | "error"
  | "rate_limited";

interface NewsletterSignupProps {
  /** 'section' renders a full-width section with heading and glass card.
   *  'compact' renders a minimal inline form suitable for embedding in a footer. */
  variant?: "section" | "compact";
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const API_URL =
  "https://openclaw.thirdpowerperformance.com/api/audience/public-subscribe";

const STATUS_MESSAGES: Record<
  Exclude<FormStatus, "idle" | "submitting">,
  string
> = {
  subscribed: "You're in! Check your inbox for a welcome message.",
  already_subscribed: "You're already subscribed — welcome back!",
  error: "Something went wrong. Please try again.",
  rate_limited: "Too many attempts. Please try again later.",
};

/* -------------------------------------------------------------------------- */
/* Shared input styles                                                        */
/* -------------------------------------------------------------------------- */

const INPUT_CLASS =
  "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition font-body";

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function NewsletterSignup({
  variant = "section",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const isTerminal =
    status === "subscribed" || status === "already_subscribed";
  const isDisabled = status === "submitting";

  /* ---------------------------------------------------------------------- */
  /* Submit handler                                                         */
  /* ---------------------------------------------------------------------- */

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) return;
    setStatus("submitting");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          phone: phone || undefined,
          sms_consent: phone ? smsConsent : false,
          honeypot,
        }),
        signal: controller.signal,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.status === "already_subscribed") {
          setStatus("already_subscribed");
        } else {
          // Treat "suppressed" the same as new subscription —
          // don't reveal suppression state to the end user.
          setStatus("subscribed");
        }
      } else if (res.status === 429) {
        setStatus("rate_limited");
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setStatus("error");
      } else {
        setStatus("error");
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /* ---------------------------------------------------------------------- */
  /* Render helpers                                                         */
  /* ---------------------------------------------------------------------- */

  /** Status banner shown after submission (success, error, etc.) */
  function renderStatusMessage() {
    if (status === "idle" || status === "submitting") return null;
    const message = STATUS_MESSAGES[status];
    const isSuccess = status === "subscribed" || status === "already_subscribed";

    return (
      <p
        role="status"
        className={`text-center font-body text-lg ${
          isSuccess ? "text-electric" : "text-red-400"
        }`}
      >
        {message}
      </p>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* COMPACT variant — inline email + submit, designed for footer embedding  */
  /* ---------------------------------------------------------------------- */

  if (variant === "compact") {
    // After successful submission, show the status message only
    if (isTerminal) {
      return <div className="mt-4">{renderStatusMessage()}</div>;
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-0"
      >
        {/* Honeypot — invisible to humans */}
        <input
          type="text"
          name="website"
          className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setHoneypot(e.target.value)
          }
        />

        <label htmlFor="compact-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="compact-newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          disabled={isDisabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-light placeholder-light/40 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent sm:rounded-r-none disabled:opacity-50 font-body"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="rounded-lg bg-electric px-6 py-3 font-heading font-bold text-navy transition-all hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] sm:rounded-l-none disabled:opacity-50"
        >
          {isDisabled ? "Sending..." : "Subscribe"}
        </button>

        {/* Inline error / rate-limit feedback */}
        {(status === "error" || status === "rate_limited") && (
          <p role="status" className="text-red-400 text-sm sm:col-span-2 mt-1">
            {STATUS_MESSAGES[status]}
          </p>
        )}
      </form>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* SECTION variant — full section with heading, card, and all fields      */
  /* ---------------------------------------------------------------------- */

  return (
    <section className="py-24 bg-gradient-to-b from-navy via-midnight to-navy">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-2xl p-8 md:p-12 border border-electric/10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-light/70 mb-8 font-body">
            Weekly insights on AI leadership — practical tools and strategies
            for humans who lead.
          </p>

          {/* Show success / already-subscribed message in place of form */}
          {isTerminal ? (
            renderStatusMessage()
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Honeypot — invisible to humans */}
              <input
                type="text"
                name="website"
                className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setHoneypot(e.target.value)
                }
              />

              {/* Email (required) */}
              <div>
                <label htmlFor="signup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  disabled={isDisabled}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className={INPUT_CLASS}
                />
              </div>

              {/* Name (optional) */}
              <div>
                <label htmlFor="signup-name" className="sr-only">
                  Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  disabled={isDisabled}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  className={INPUT_CLASS}
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="signup-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="signup-phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  value={phone}
                  disabled={isDisabled}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                  }
                  className={INPUT_CLASS}
                />
              </div>

              {/* SMS consent — only visible when phone has a value */}
              {phone && (
                <div className="flex items-start gap-3">
                  <input
                    id="signup-sms-consent"
                    type="checkbox"
                    checked={smsConsent}
                    disabled={isDisabled}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSmsConsent(e.target.checked)
                    }
                    className="mt-1 rounded border-white/30 bg-white/5 text-electric focus:ring-electric"
                  />
                  <label
                    htmlFor="signup-sms-consent"
                    className="text-sm text-light/60 font-body cursor-pointer"
                  >
                    I consent to receive occasional SMS updates
                  </label>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isDisabled}
                className="w-full bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 disabled:opacity-50"
              >
                {isDisabled ? "Subscribing..." : "Subscribe"}
              </button>

              {/* Error / rate-limit feedback below the button */}
              {(status === "error" || status === "rate_limited") &&
                renderStatusMessage()}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
