import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Third Power Life",
  description: "Privacy Policy for Third Power Life and Third Power Performance, LLC.",
};

const EFFECTIVE_DATE = "March 27, 2025";
const COMPANY = "Third Power Performance, LLC";
const SITE = "thirdpowerlife.ai";
const EMAIL = "info@ThirdPowerPerformance.com";

export default function PrivacyPage() {
  return (
    <section className="bg-navy min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-light/50 text-sm">
            Effective Date: {EFFECTIVE_DATE} &middot; Last Updated: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-light/80 leading-relaxed">

          <div>
            <p>
              {COMPANY} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
              <strong className="text-white">{SITE}</strong> and related services, including
              AI-assisted communications and appointment reminder tools. This Privacy Policy
              explains how we collect, use, disclose, and protect your information when you
              visit our website or interact with our services.
            </p>
            <p className="mt-4">
              By using our site or services, you agree to the practices described in this
              policy.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              1. Information We Collect
            </h2>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2">
              Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact information (email, phone number) when you book a call or submit our contact form</li>
              <li>Your message or inquiry content</li>
              <li>Scheduling information when you book an appointment</li>
            </ul>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2 mt-6">
              Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Standard web server logs (IP address, browser type, pages visited, referring URL)</li>
              <li>Cookies and similar technologies used to maintain site functionality</li>
            </ul>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2 mt-6">
              SMS Communications
            </h3>
            <p>
              If you book a call or explicitly opt in, we may send you SMS appointment
              reminders and related service messages. We collect your phone number solely
              for this purpose. We do not sell, share, rent, or lease your phone number
              or SMS consent to any third party for marketing purposes.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To schedule and confirm appointments and send reminders</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send service-related SMS messages you have opted into</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information. We do not use your information
              for automated decision-making that produces legal or similarly significant
              effects without human oversight.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              3. SMS / Text Message Communications
            </h2>
            <p>
              By completing a booking form on this site or providing your phone number and
              indicating consent, you agree to receive SMS appointment reminders and
              service-related messages from {COMPANY}.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li><strong className="text-white">Message frequency:</strong> Reminders are sent at 24 hours, 1 hour, and 10 minutes before each scheduled appointment. Additional messages may be sent in response to your replies.</li>
              <li><strong className="text-white">Message &amp; data rates may apply.</strong> Standard carrier rates apply.</li>
              <li><strong className="text-white">To opt out:</strong> Reply <strong className="text-white">STOP</strong> at any time to unsubscribe. You will receive a confirmation and no further messages will be sent.</li>
              <li><strong className="text-white">To opt in again:</strong> Reply <strong className="text-white">START</strong> or contact us at {EMAIL}.</li>
              <li><strong className="text-white">For help:</strong> Reply <strong className="text-white">HELP</strong> or contact us at {EMAIL}.</li>
            </ul>
            <p className="mt-4">
              Your phone number and SMS consent are not shared with third parties for their
              marketing purposes. Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              4. Sharing of Information
            </h2>
            <p>We may share your information only in these limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li><strong className="text-white">Service providers:</strong> We use third-party tools (e.g., Twilio for SMS delivery, Resend for email, scheduling platforms) that process data on our behalf under data processing agreements.</li>
              <li><strong className="text-white">Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
              <li><strong className="text-white">Business transfer:</strong> If {COMPANY} is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes described in this policy, including complying with legal and
              regulatory obligations. SMS opt-in records are retained as required by
              applicable telecommunications regulations.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              6. Cookies and Tracking
            </h2>
            <p>
              Our website may use essential cookies to maintain functionality. We do not
              currently use third-party advertising cookies or cross-site tracking. If this
              changes, we will update this policy.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              7. Your Rights
            </h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with a relevant data protection authority</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-electric hover:underline">
                {EMAIL}
              </a>.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              8. Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to
              protect your information. No method of transmission over the internet or
              electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly
              collect personal information from children under 13. If you believe we have
              inadvertently collected such information, please contact us immediately.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              revise the &ldquo;Last Updated&rdquo; date at the top of this page. Your
              continued use of our services after changes constitutes acceptance of the
              updated policy.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              11. International Users / GDPR Notice
            </h2>
            <p>
              Our services are primarily directed to users in the United States. If you are
              located in the European Union, United Kingdom, or another jurisdiction with
              data protection laws, the following additional information applies.
            </p>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2 mt-6">
              Lawful Basis for Processing
            </h3>
            <p>
              We process your personal data on the basis of: (a) your consent (e.g., SMS
              opt-in); (b) performance of a contract or pre-contractual steps (e.g.,
              scheduling a call); or (c) our legitimate interests in operating and improving
              our services, where those interests are not overridden by your rights.
            </p>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2 mt-6">
              Your Rights Under GDPR / UK GDPR
            </h3>
            <p>If you are located in the EU or UK, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li><strong className="text-white">Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-white">Rectification</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong className="text-white">Erasure</strong> — request deletion of your personal data (&ldquo;right to be forgotten&rdquo;), subject to legal retention requirements</li>
              <li><strong className="text-white">Restriction</strong> — request that we limit how we use your data</li>
              <li><strong className="text-white">Portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong className="text-white">Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong className="text-white">Withdraw consent</strong> — where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-electric hover:underline">
                {EMAIL}
              </a>. We will respond within 30 days. You also have the right to lodge a
              complaint with your local data protection authority (e.g., the ICO in the UK
              or your EU Member State&apos;s supervisory authority).
            </p>
            <h3 className="text-lg font-heading font-semibold text-electric mb-2 mt-6">
              International Data Transfers
            </h3>
            <p>
              {COMPANY} is based in the United States. If you are located outside the US,
              your information will be transferred to and processed in the United States,
              where data protection laws may differ from those in your country. By using our
              services, you acknowledge this transfer. We use service providers that
              maintain appropriate safeguards for international data transfers where required.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              12. Contact Us
            </h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-4 glass rounded-lg p-6">
              <p className="text-white font-heading font-semibold">{COMPANY}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-electric hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p>Website: <span className="text-electric">{SITE}</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
