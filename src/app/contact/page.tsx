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
          </div>
        </div>
      </section>
    </>
  );
}
