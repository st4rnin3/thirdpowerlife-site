import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Dan Gentry — Speaking & Consulting Inquiries",
  description: "Book Dan to speak at your event or discuss fractional Chief AI Officer consulting. Let's start with a conversation.",
};

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Whether you&apos;re booking a keynote, exploring fCAIO consulting, or just
                want to connect — I&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">📧</span>
                  <a href="mailto:info@ThirdPowerPerformance.com" className="text-gray-700 hover:text-blue-600">
                    info@ThirdPowerPerformance.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🔗</span>
                  <a href="https://www.linkedin.com/in/daniel-gentry/" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">🎓</span>
                  <a href="https://www.skool.com/impact-ai" className="text-gray-700 hover:text-blue-600" target="_blank" rel="noopener">
                    IMPACT AI Community (Skool)
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
