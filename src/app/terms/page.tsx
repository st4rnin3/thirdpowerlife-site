import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Third Power Life",
  description: "Terms of Service for Third Power Life and Third Power Performance, LLC.",
};

const EFFECTIVE_DATE = "March 27, 2025";
const COMPANY = "Third Power Performance, LLC";
const SITE = "thirdpowerlife.ai";
const EMAIL = "info@ThirdPowerPerformance.com";

export default function TermsPage() {
  return (
    <section className="bg-navy min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-electric font-heading uppercase tracking-widest text-sm mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-light/50 text-sm">
            Effective Date: {EFFECTIVE_DATE} &middot; Last Updated: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-light/80 leading-relaxed">

          <div>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
              <strong className="text-white">{SITE}</strong> and the services offered by{" "}
              <strong className="text-white">{COMPANY}</strong> (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our website or using
              our services, you agree to be bound by these Terms.
            </p>
            <p className="mt-4">
              Please read these Terms carefully before using our services. If you do not
              agree, do not use our website or services.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              1. Services
            </h2>
            <p>
              {COMPANY} provides keynote speaking, AI strategy consulting, coaching, and
              related professional services. Our website provides information about these
              services and allows you to schedule introductory calls, submit inquiries, and
              access educational content.
            </p>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any part of our
              services at any time without notice.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              2. SMS Communications
            </h2>
            <p>
              By providing your phone number and completing a booking form or opting in
              through our scheduling system, you consent to receive SMS appointment reminders
              and service-related messages from {COMPANY}.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li><strong className="text-white">Message frequency:</strong> Appointment reminders are sent at 24 hours, 1 hour, and 10 minutes before each scheduled call. Additional messages may be sent in response to your replies.</li>
              <li><strong className="text-white">Message &amp; data rates may apply.</strong> Standard carrier rates apply.</li>
              <li><strong className="text-white">To opt out:</strong> Reply <strong className="text-white">STOP</strong> at any time to unsubscribe immediately.</li>
              <li><strong className="text-white">For help:</strong> Reply <strong className="text-white">HELP</strong> or email us at {EMAIL}.</li>
            </ul>
            <p className="mt-4">
              SMS messages may be sent by an AI assistant acting on behalf of {COMPANY}.
              Carriers are not liable for delayed or undelivered messages. We do not share
              your phone number or SMS consent with third parties for their marketing.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              3. User Conduct
            </h2>
            <p>By using our website and services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Use our services for any unlawful, fraudulent, or harmful purpose</li>
              <li>Transmit unsolicited commercial communications</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, images, audio,
              video, and software — is the property of {COMPANY} or its licensors and is
              protected by applicable intellectual property laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, or commercially exploit any content from this site without our prior
              written permission.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              5. Scheduling and Appointments
            </h2>
            <p>
              Booking an introductory call does not constitute a contractual engagement
              for services. Engagements for speaking, consulting, or coaching are governed
              by separate written agreements executed by both parties.
            </p>
            <p className="mt-4">
              We reserve the right to reschedule or cancel appointments. We will make
              reasonable efforts to provide advance notice when possible.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, either express or implied,
              including but not limited to implied warranties of merchantability, fitness
              for a particular purpose, or non-infringement.
            </p>
            <p className="mt-4">
              We do not warrant that our website will be uninterrupted, error-free, or free
              of viruses or other harmful components.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {COMPANY} and its members,
              officers, employees, and agents shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use
              of — or inability to use — our website or services, even if we have been
              advised of the possibility of such damages.
            </p>
            <p className="mt-4">
              Our total liability for any claim arising from these Terms or our services
              shall not exceed the amount you paid us in the twelve months preceding the
              event giving rise to the claim, or $100, whichever is greater.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              8. Third-Party Links and Services
            </h2>
            <p>
              Our website may contain links to third-party websites or services. These links
              are provided for your convenience only. We are not responsible for the content,
              privacy practices, or terms of any third-party sites. Accessing third-party
              sites is at your own risk.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Florida, without regard
              to its conflict of law provisions. You agree to submit to the exclusive
              jurisdiction of the courts located in Florida for the resolution of any
              disputes arising from these Terms.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms at any time. When we do, we will revise the
              &ldquo;Last Updated&rdquo; date above. Your continued use of our services
              after changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
              11. Contact
            </h2>
            <p>Questions about these Terms? Contact us:</p>
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
