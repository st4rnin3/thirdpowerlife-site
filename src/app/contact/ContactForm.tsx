"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      sms_consent: (form.elements.namedItem("sms_consent") as HTMLInputElement).checked,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
      why_dan: (form.elements.namedItem("why_dan") as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-light/60">Thanks for reaching out. Dan typically responds within 24 hours.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-electric font-medium hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition"
            placeholder="you@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">
            Phone Number <span className="text-light/40">(optional)</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* SMS Consent */}
        <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
          <input
            type="checkbox"
            name="sms_consent"
            id="sms_consent"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/5 accent-electric cursor-pointer"
          />
          <label htmlFor="sms_consent" className="text-xs text-light/50 leading-relaxed cursor-pointer">
            I consent to receive appointment reminders and service-related SMS messages from{" "}
            <span className="text-light/70">Third Power Performance, LLC</span>. Message and data rates may
            apply. Message frequency varies. Reply <strong className="text-light/70">STOP</strong> to opt
            out at any time. Reply <strong className="text-light/70">HELP</strong> for help. View our{" "}
            <a href="/privacy" className="text-electric hover:underline">Privacy Policy</a> and{" "}
            <a href="/terms" className="text-electric hover:underline">Terms of Service</a>.
          </label>
        </div>

        {/* Interest dropdown */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">I&apos;m interested in...</label>
          <select
            name="interest"
            className="w-full bg-[#001433] border border-white/15 rounded-lg px-4 py-3 text-light focus:ring-2 focus:ring-electric focus:border-transparent transition appearance-none"
            style={{ colorScheme: "dark" }}
          >
            <option value="speaking" className="bg-[#001433] text-[#E6E8EA]">Booking Dan to speak</option>
            <option value="consulting" className="bg-[#001433] text-[#E6E8EA]">Fractional CAIO consulting</option>
            <option value="podcast" className="bg-[#001433] text-[#E6E8EA]">Podcast collaboration</option>
            <option value="networking" className="bg-[#001433] text-[#E6E8EA]">Networking / Face to Face</option>
            <option value="other" className="bg-[#001433] text-[#E6E8EA]">Something else</option>
          </select>
        </div>

        {/* Challenge */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">
            What&apos;s your biggest challenge with AI right now?
          </label>
          <textarea
            name="challenge"
            rows={3}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition"
            placeholder="Tell me what you're working through..."
          />
        </div>

        {/* Why Dan */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">
            Why are you reaching out to Dan specifically?
          </label>
          <textarea
            name="why_dan"
            rows={2}
            className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition"
            placeholder="What resonated with you?"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-light/80 text-sm font-medium mb-1">
            Budget range <span className="text-light/40">(optional)</span>
          </label>
          <select
            name="budget"
            className="w-full bg-[#001433] border border-white/15 rounded-lg px-4 py-3 text-light focus:ring-2 focus:ring-electric focus:border-transparent transition appearance-none"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-[#001433] text-[#E6E8EA]">Prefer not to say</option>
            <option value="under-5k" className="bg-[#001433] text-[#E6E8EA]">Under $5,000</option>
            <option value="5k-10k" className="bg-[#001433] text-[#E6E8EA]">$5,000 - $10,000</option>
            <option value="10k-25k" className="bg-[#001433] text-[#E6E8EA]">$10,000 - $25,000</option>
            <option value="25k+" className="bg-[#001433] text-[#E6E8EA]">$25,000+</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-accent text-white px-6 py-3 rounded-lg font-heading font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "error" && (
          <p className="text-danger text-sm text-center">
            Something went wrong. Please try again or email info@ThirdPowerPerformance.com directly.
          </p>
        )}

        <p className="text-light/40 text-xs text-center">
          I typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
