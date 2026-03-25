export interface Prospect {
  slug: string;
  name: string;
  organization: string;
  greeting: string;
  /** YouTube or Loom embed URL. Section hidden when omitted. */
  videoUrl?: string;
  customMessage: string;
  showSpeakerAssets: boolean;
  showBookSection: boolean;
  ctaText: string;
  ctaUrl: string;
}

export const prospects: Record<string, Prospect> = {
  "katie-mdrt": {
    slug: "katie-mdrt",
    name: "Katie",
    organization: "MDRT",
    greeting: "Hi Katie \u2014 thanks for connecting at MDRT!",
    customMessage:
      "I really enjoyed our conversation about bringing AI-focused content to the MDRT community. I believe the financial services industry is at a pivotal moment \u2014 the professionals who learn to leverage AI while maintaining the human relationships that define their work will have an extraordinary advantage. I\u2019d love to explore how Humanity Amplified could serve your members.",
    showSpeakerAssets: true,
    showBookSection: false,
    ctaText: "Schedule Our Call",
    ctaUrl: "https://www.thirdpowerlife.ai/schedule/introductory-call",
  },
};
