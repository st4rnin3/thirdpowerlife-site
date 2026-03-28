export interface Prospect {
  slug: string;
  name: string;
  organization: string;
  greeting: string;
  /** YouTube or Loom embed URL. Section hidden when omitted. */
  videoUrl?: string;
  customMessage: string;
  ctaText: string;
  ctaUrl: string;
}

export const prospects: Record<string, Prospect> = {
  "katie-mdrt": {
    slug: "katie-mdrt",
    name: "Katie",
    organization: "MDRT",
    greeting: "Hello, Katie & MDRT Team!",
    customMessage:
      "I really enjoyed our conversation about bringing AI-focused content to the MDRT community. Financial services professionals are at a pivotal moment — those who learn to leverage AI while maintaining the human relationships that define their work will have an extraordinary advantage. I'd love to explore how Humanity Amplified could serve your members.",
    ctaText: "Schedule Our Call",
    ctaUrl: "/schedule",
  },
  "demo": {
    slug: "demo",
    name: "there",
    organization: "your team",
    greeting: "Hello! I'm Dan Gentry.",
    customMessage:
      "Thanks for taking the time to learn more about what I bring to the stage. This page was created specifically for you — with a personalized message, my speaking assets, and everything you need to share with your team.",
    ctaText: "Book an Intro Call",
    ctaUrl: "/schedule",
  },
};
