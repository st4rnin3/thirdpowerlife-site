/**
 * Per-product success page content.
 * Add a new slug key to customize the confirmation page for any product.
 * Products without a custom entry get the default.
 */

export interface Upsell {
  heading: string;
  body: string;
  cta: string;
  href: string;
}

export interface SuccessContent {
  heading: string;
  message: string;
  /** Optional second paragraph */
  detail?: string;
  upsell?: Upsell;
}

const successContent: Record<string, SuccessContent> = {
  "speaking-engagement": {
    heading: "You're Booked!",
    message:
      "Thank you for booking Dan to speak. You'll receive a confirmation email shortly with next steps.",
    detail:
      "Dan's team will reach out within 24 hours to coordinate event details, AV requirements, and any customization for your audience.",
    upsell: {
      heading: "Maximize the Impact",
      body: "Want Dan to work directly with your leadership team after the keynote? The fCAIO Initial Session turns keynote inspiration into an actionable AI roadmap for your organization.",
      cta: "Learn About fCAIO Sessions",
      href: "/order/fcaio-initial",
    },
  },
  "fcaio-initial": {
    heading: "Session Confirmed!",
    message:
      "Thank you for booking your fCAIO Initial Session. Dan will personally reach out to schedule your strategy session.",
    detail:
      "Expect an email within 24 hours with a brief intake questionnaire so Dan can tailor the session to your specific challenges and opportunities.",
    upsell: {
      heading: "Ready for Ongoing AI Leadership?",
      body: "Most clients see the biggest results with ongoing fCAIO support. After your initial session, consider the monthly retainer for continuous AI strategy, implementation oversight, and executive advisory.",
      cta: "View Monthly Retainer",
      href: "/order/fcaio-monthly",
    },
  },
  "fcaio-monthly": {
    heading: "Welcome Aboard!",
    message:
      "Your fCAIO Monthly Retainer is now active. Dan is officially your fractional Chief AI Officer.",
    detail:
      "You'll receive an onboarding email within 24 hours with access to scheduling, communication channels, and your first month's kickoff agenda.",
  },
};

const defaultContent: SuccessContent = {
  heading: "Payment Successful",
  message:
    "Thank you for your purchase. You'll receive a confirmation email shortly.",
  detail: "Dan will be in touch to get things started.",
};

export function getSuccessContent(slug: string): SuccessContent {
  return successContent[slug] || defaultContent;
}
