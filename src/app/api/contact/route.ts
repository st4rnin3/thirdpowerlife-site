import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, sms_consent, interest, challenge, why_dan, budget } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

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
         <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">SMS Consent</td><td style="padding:8px;border-bottom:1px solid #eee;">${sms_consent ? "✅ YES — consented to SMS" : "❌ No — did not opt in to SMS"}</td></tr>
         ${sms_consent ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Consent Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${consentTimestamp}</td></tr>
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
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Why Dan?</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(why_dan || "Not provided")}</td></tr>
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
