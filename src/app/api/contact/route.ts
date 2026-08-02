import { NextResponse } from "next/server";
import { getSpamSignals, isHighConfidenceSpam, parseContactPayload } from "@/lib/contact-spam";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(ip: string, now = Date.now()): boolean {
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recent = (rateLimitStore.get(ip) ?? []).filter((timestamp) => timestamp > cutoff);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitStore.set(ip, recent);

  if (rateLimitStore.size > 2_000) {
    for (const [key, timestamps] of rateLimitStore) {
      if (!timestamps.some((timestamp) => timestamp > cutoff)) rateLimitStore.delete(key);
    }
  }
  return false;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
    || (process.env.NODE_ENV !== "production" ? "1x0000000000000000000000000000000AA" : "");
  if (!secret) {
    console.error("Contact form unavailable: TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    signal: AbortSignal.timeout(5_000),
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  try {
    const parsed = parseContactPayload(await request.json());
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
    const data = parsed.data;

    // Honeypots get a fake success so automated clients do not learn how to bypass the trap.
    if (data.website) return NextResponse.json({ success: true });

    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    if (Date.now() - data.startedAt < 3_000) return NextResponse.json({ success: true });
    if (!(await verifyTurnstile(data.turnstileToken, ip))) {
      return NextResponse.json({ error: "Security check failed. Please try again." }, { status: 403 });
    }

    const spamSignals = getSpamSignals(data);
    if (isHighConfidenceSpam(spamSignals)) {
      console.info("Contact submission filtered", { signals: spamSignals });
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, smsConsent, interest, challenge, whyDan, budget } = data;

    const interestLabels: Record<string, string> = {
      speaking: "Booking Dan to speak",
      consulting: "Fractional CAIO consulting",
      podcast: "Podcast collaboration",
      networking: "Networking / Face to Face",
      other: "Something else",
    };

    const consentTimestamp = new Date().toISOString();
    const consentLanguage = "I agree to receive text messages from Third Power Performance, LLC including appointment reminders, follow-ups, and service-related communications. Message and data rates may apply. Message frequency varies. Reply STOP to opt out at any time. Reply HELP for help.";

    const smsRow = phone
      ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td></tr>
         <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">SMS Consent</td><td style="padding:8px;border-bottom:1px solid #eee;">${smsConsent ? "✅ YES — consented to SMS" : "❌ No — did not opt in to SMS"}</td></tr>
         ${smsConsent ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Consent Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${consentTimestamp}</td></tr>
         <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Consent Method</td><td style="padding:8px;border-bottom:1px solid #eee;">web_form (thirdpowerlife.ai/contact)</td></tr>
         <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Consent Language</td><td style="padding:8px;border-bottom:1px solid #eee;font-size:11px;">${escapeHtml(consentLanguage)}</td></tr>` : ""}`
      : "";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Third Power Life <contact@thirdpowerlife.ai>",
        to: ["info@ThirdPowerPerformance.com"],
        subject: `New inquiry from ${name} — ${interestLabels[interest] || interest}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            ${smsRow}
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Interest</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(interestLabels[interest] || interest || "Not specified")}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Biggest AI Challenge</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(challenge || "Not provided")}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Why Dan?</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(whyDan || "Not provided")}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Budget Range</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(budget || "Prefer not to say")}</td></tr>
          </table>
          <p style="margin-top:16px;color:#666;font-size:12px;">Sent from thirdpowerlife.ai contact form</p>
        `,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
