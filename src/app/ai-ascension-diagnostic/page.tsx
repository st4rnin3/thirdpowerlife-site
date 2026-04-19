import type { Metadata } from "next";
import Link from "next/link";
import AiAscensionSurvey from "@/components/AiAscensionSurvey";
import CalEmbedConnect from "@/components/CalEmbedConnect";

export const metadata: Metadata = {
  title: "AI Ascension Diagnostic | Third Power Life",
  description:
    "Take the 2-minute AI Ascension Diagnostic to discover your level, what trust requires at your stage, and the smartest next move for your AI journey.",
  openGraph: {
    title: "AI Ascension Diagnostic | Third Power Life",
    description:
      "Take the 2-minute AI Ascension Diagnostic to discover your level, what trust requires at your stage, and the smartest next move for your AI journey.",
    url: "https://www.thirdpowerlife.ai/ai-ascension-diagnostic",
  },
  twitter: {
    title: "AI Ascension Diagnostic | Third Power Life",
    description:
      "Take the 2-minute AI Ascension Diagnostic to discover your level, what trust requires at your stage, and the smartest next move for your AI journey.",
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai/ai-ascension-diagnostic",
  },
};

export default function AiAscensionDiagnosticPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-electric font-heading text-sm uppercase tracking-widest mb-4">
            AI Ascension Diagnostic
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Find Your AI Ascension Level
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Answer 8 questions to discover where you are on the AI Ascension
            framework, what trust requires at your level, and your smartest next
            move.
          </p>
        </div>
      </section>

      {/* Diagnostic Survey */}
      <section className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AiAscensionSurvey />
        </div>
      </section>

      {/* AI Clarity Call */}
      <section id="clarity-call" className="bg-midnight/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-electric font-heading text-sm uppercase tracking-widest mb-3">
              Exclusive for CONNECT Attendees
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Book Your AI Clarity Call
            </h2>
            <p className="text-light/60 max-w-2xl mx-auto mb-2">
              30 minutes, one-on-one with Dan. We&apos;ll identify your level,
              find the one workflow that&apos;s eating your time, and map your
              first move. No pitch. No contract. Just clarity.
            </p>
            <p className="text-light/40 text-sm">
              Limited availability — book while spots are open.
            </p>
          </div>

          {/* Cal.com embed */}
          <CalEmbedConnect />

          {/* SMS consent */}
          <p className="text-light/30 text-xs text-center mt-6 max-w-xl mx-auto">
            By booking a call, you consent to receive appointment reminder SMS
            messages from Third Power Performance, LLC. Message and data rates
            may apply. Reply STOP to opt out. View our{" "}
            <a href="/privacy" className="text-electric/60 hover:text-electric">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-electric/60 hover:text-electric">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </section>

      {/* Back to the 4 Levels */}
      <section className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/connect"
            className="text-electric/70 hover:text-electric text-sm font-medium underline underline-offset-4 transition-colors duration-200"
          >
            &larr; Back to the 4 Levels
          </Link>
        </div>
      </section>
    </>
  );
}
