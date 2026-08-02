export const CONTACT_LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  challenge: 2_000,
  whyDan: 2_000,
} as const;

export const CONTACT_INTERESTS = new Set([
  "speaking",
  "consulting",
  "podcast",
  "networking",
  "other",
]);

export const CONTACT_BUDGETS = new Set(["", "under-5k", "5k-10k", "10k-25k", "25k+"]);

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  interest: string;
  challenge: string;
  whyDan: string;
  budget: string;
  website: string;
  startedAt: number;
  turnstileToken: string;
};

type ParseResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactPayload(body: unknown): ParseResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid submission" };

  const input = body as Record<string, unknown>;
  const data: ContactPayload = {
    name: stringValue(input.name),
    email: stringValue(input.email).toLowerCase(),
    phone: stringValue(input.phone),
    smsConsent: input.sms_consent === true,
    interest: stringValue(input.interest),
    challenge: stringValue(input.challenge),
    whyDan: stringValue(input.why_dan),
    budget: stringValue(input.budget),
    website: stringValue(input.website),
    startedAt: typeof input.started_at === "number" ? input.started_at : Number(input.started_at),
    turnstileToken: stringValue(input.turnstile_token),
  };

  if (!data.name || !data.email) return { ok: false, error: "Name and email are required" };
  if (data.name.length > CONTACT_LIMITS.name) return { ok: false, error: "Name is too long" };
  if (data.email.length > CONTACT_LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Enter a valid email address" };
  }
  if (data.phone.length > CONTACT_LIMITS.phone) return { ok: false, error: "Phone number is too long" };
  if (data.phone && !/^\+?[\d\s().-]{7,40}$/.test(data.phone)) {
    return { ok: false, error: "Enter a valid phone number" };
  }
  if (data.smsConsent && !data.phone) return { ok: false, error: "A phone number is required for SMS consent" };
  if (!CONTACT_INTERESTS.has(data.interest)) return { ok: false, error: "Select a valid interest" };
  if (!CONTACT_BUDGETS.has(data.budget)) return { ok: false, error: "Select a valid budget range" };
  if (data.challenge.length > CONTACT_LIMITS.challenge || data.whyDan.length > CONTACT_LIMITS.whyDan) {
    return { ok: false, error: "Message is too long" };
  }
  if (!Number.isFinite(data.startedAt) || data.startedAt <= 0) {
    return { ok: false, error: "Invalid form session" };
  }
  if (!data.turnstileToken) return { ok: false, error: "Complete the security check" };

  return { ok: true, data };
}

export function getSpamSignals(data: ContactPayload): string[] {
  const signals: string[] = [];
  const narrative = `${data.challenge} ${data.whyDan}`.trim();

  if (/^\d{7,}$/.test(data.challenge)) signals.push("numeric_challenge", "nonsensical_challenge");
  if (/^\d{7,}$/.test(data.whyDan)) signals.push("numeric_why_dan", "nonsensical_why_dan");

  for (const [field, value] of [["challenge", data.challenge], ["why_dan", data.whyDan]] as const) {
    if (
      value.length >= 18 &&
      !/\s/.test(value) &&
      /^[A-Za-z]+$/.test(value) &&
      !/[aeiou]{2}/i.test(value)
    ) {
      signals.push(`random_${field}`, `nonsensical_${field}`);
    }
  }

  const urls = narrative.match(/https?:\/\/|www\.|\b[a-z0-9-]+\.(?:com|net|org|io|ru|cn)\b/gi) ?? [];
  if (urls.length >= 2) signals.push("multiple_urls", "link_spam");

  return signals;
}

export function isHighConfidenceSpam(signals: string[]): boolean {
  return new Set(signals.filter((signal) => signal.startsWith("nonsensical_"))).size >= 2 || signals.includes("link_spam");
}
