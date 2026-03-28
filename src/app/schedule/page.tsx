import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Call — Dan Gentry | Third Power Life",
  description:
    "Book an introductory call with Dan Gentry. Pick a time that works for you.",
};

export default function SchedulePage() {
  return (
    <section className="bg-navy min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3">
            Book a Call
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-light/60 max-w-xl mx-auto">
            Pick a time that works for you. Whether you&apos;re exploring a keynote,
            fCAIO consulting, or just want to connect — this is the first step.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="glass rounded-2xl p-2 sm:p-4 overflow-hidden">
          <iframe
            src="https://cal.com/thirdpowerlife/30min?embed=true&theme=dark"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-xl w-full"
            allow="payment"
            style={{ minHeight: "700px", colorScheme: "dark" }}
          />
        </div>

        {/* SMS consent note */}
        <p className="text-light/30 text-xs text-center mt-6 max-w-xl mx-auto">
          By booking a call, you consent to receive appointment reminder SMS messages from
          Third Power Performance, LLC. Message and data rates may apply. Reply STOP to
          opt out. View our{" "}
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
  );
}
