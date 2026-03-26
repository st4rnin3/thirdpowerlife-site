import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, challenge, why_dan, budget } = body;

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
      other: "Something else",
    };

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
