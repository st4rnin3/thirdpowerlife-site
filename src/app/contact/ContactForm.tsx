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
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thanks for reaching out. Dan typically responds within 24 hours.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in...</label>
          <select
            name="interest"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="speaking">Booking Dan to speak</option>
            <option value="consulting">Fractional CAIO consulting</option>
            <option value="podcast">Podcast collaboration</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What&apos;s your biggest challenge with AI right now?
          </label>
          <textarea
            name="challenge"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell me what you're working through..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Why are you reaching out to Dan specifically?
          </label>
          <textarea
            name="why_dan"
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="What resonated with you?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget range <span className="text-gray-400">(optional)</span>
          </label>
          <select
            name="budget"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Prefer not to say</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Please try again or email info@ThirdPowerPerformance.com directly.
          </p>
        )}
        <p className="text-xs text-gray-500 text-center">
          I typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
