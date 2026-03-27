"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
  link?: { text: string; href: string };
}

const faqs: FAQ[] = [
  {
    q: "How long is the keynote?",
    a: "The signature keynote, Humanity Amplified, runs 45-60 minutes. Executive and closing keynotes run 30-45 minutes. All sessions can be adapted to your schedule — from a focused 30-minute power talk to a half-day workshop.",
  },
  {
    q: "Can the message be tailored to our theme?",
    a: "Absolutely. Every keynote starts with a pre-event strategy call to align the content with your audience, industry, and event theme. Dan customizes examples, language, and takeaways so it feels like the talk was built specifically for your room — because it was.",
  },
  {
    q: "Does Dan offer breakout sessions or workshops?",
    a: "Yes. Beyond the keynote, Dan offers interactive workshops (60-90 min) where attendees build their own Machine Work vs. Meaning Work audit and create a personal AI action plan. This is ideal for events that want hands-on implementation, not just inspiration.",
  },
  {
    q: "Will Dan stay for networking or VIP time?",
    a: "Yes. Dan is happy to participate in executive meet-and-greets, VIP dinners, sponsor receptions, or attendee Q&A sessions. These moments are where the real connections happen.",
  },
  {
    q: "What are the technical requirements?",
    a: "Minimal. A lavalier or headset microphone, HDMI/wireless connection for slides, and a confidence monitor are ideal. Dan brings his own clicker and can adapt to most setups. For detailed specs, see the full ",
    link: { text: "tech setup page", href: "/speaking/tech-setup" },
  },
  {
    q: "Does Dan travel?",
    a: "Yes, nationwide and internationally. Travel and accommodation are typically handled by the event organizer. Dan is based in Ocala, Florida.",
  },
  {
    q: "What's the investment?",
    a: "Fees depend on the format, duration, travel, and inclusions. Dan works with a range of budgets and is happy to discuss options on a quick intro call. No pressure, no obligations.",
  },
  {
    q: "How far in advance should we book?",
    a: "As early as possible — Dan's calendar fills quickly, especially for Q4 and Q1 events. That said, he's accommodated requests with as little as 3-4 weeks' lead time when schedules align.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="glass rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-heading font-semibold pr-4">
              {faq.q}
            </span>
            <span
              className={`text-electric flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="px-5 text-light/70 text-sm leading-relaxed">
              {faq.a}
              {faq.link && (
                <Link href={faq.link.href} className="text-electric underline hover:text-electric/80 transition">
                  {faq.link.text}
                </Link>
              )}
              {faq.link && "."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
