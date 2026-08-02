import assert from "node:assert/strict";
import test from "node:test";
import {
  getSpamSignals,
  isHighConfidenceSpam,
  parseContactPayload,
  type ContactPayload,
} from "../src/lib/contact-spam.ts";

const validPayload: ContactPayload = {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "+1 (555) 123-4567",
  smsConsent: true,
  interest: "speaking",
  challenge: "Our leadership team needs a practical AI adoption roadmap.",
  whyDan: "Your humanity-first approach fits our annual leadership conference.",
  budget: "10k-25k",
  website: "",
  startedAt: Date.now() - 10_000,
  turnstileToken: "verified-token",
};

function rawPayload(overrides: Record<string, unknown> = {}) {
  return {
    ...validPayload,
    sms_consent: validPayload.smsConsent,
    started_at: validPayload.startedAt,
    turnstile_token: validPayload.turnstileToken,
    why_dan: validPayload.whyDan,
    ...overrides,
  };
}

test("accepts and normalizes a legitimate contact submission", () => {
  const result = parseContactPayload(rawPayload({ email: "  JANE@EXAMPLE.COM " }));
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.data.email, "jane@example.com");
});

test("rejects invalid enumerated and consent fields", () => {
  assert.equal(parseContactPayload(rawPayload({ interest: "injected-value" })).ok, false);
  assert.equal(parseContactPayload(rawPayload({ phone: "", sms_consent: true })).ok, false);
  assert.equal(parseContactPayload(rawPayload({ turnstile_token: "" })).ok, false);
});

test("flags the observed numeric plus random-text spam pattern", () => {
  const spam = {
    ...validPayload,
    challenge: "4994875808",
    whyDan: "MzswOYPELuWIsKjjYIkpTkC",
  };
  const signals = getSpamSignals(spam);
  assert.equal(isHighConfidenceSpam(signals), true);
  assert.ok(signals.includes("numeric_challenge"));
  assert.ok(signals.includes("random_why_dan"));
});

test("does not classify one unusual field as high-confidence spam", () => {
  const signals = getSpamSignals({ ...validPayload, challenge: "4994875808" });
  assert.equal(isHighConfidenceSpam(signals), false);
});
