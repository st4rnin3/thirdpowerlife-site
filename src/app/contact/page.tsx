import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Contact Dan Gentry \u2014 Speaking, Consulting & More | Third Power Life",
  description:
    "Get in touch with Dan Gentry for speaking engagements, fCAIO consulting, podcast appearances, or media inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* -- Hero ---------------------------------------------------- */}
      <section className="bg-brand-light px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
          Let&rsquo;s Connect
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Whether you&rsquo;re booking a keynote, exploring fCAIO consulting, or
          just want to say hello&nbsp;&mdash; start here.
        </p>
      </section>

      {/* -- Contact Form -------------------------------------------- */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>

      {/* -- Alternative Contact ------------------------------------- */}
      <section className="bg-brand-white px-6 py-20">
        <SectionHeading title="Prefer to Reach Out Directly?" />

        <div className="mx-auto mt-10 max-w-2xl space-y-6 text-center">
          <p className="text-gray-700">
            <strong className="text-brand-navy">Email:</strong>{" "}
            <a
              href="mailto:info@ThirdPowerPerformance.com"
              className="text-brand-accent underline underline-offset-2 hover:text-brand-navy"
            >
              info@ThirdPowerPerformance.com
            </a>
          </p>

          <p className="text-gray-700">
            <strong className="text-brand-navy">LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/daniel-gentry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline underline-offset-2 hover:text-brand-navy"
            >
              linkedin.com/in/daniel-gentry
            </a>
          </p>

          <p className="text-gray-700">
            Or{" "}
            <Link
              href="https://www.thirdpowerlife.ai/schedule/introductory-call"
              className="font-semibold text-brand-accent underline underline-offset-2 hover:text-brand-navy"
            >
              book an intro call directly
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
