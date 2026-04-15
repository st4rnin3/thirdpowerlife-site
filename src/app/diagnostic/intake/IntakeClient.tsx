"use client";

import { useEffect, useMemo, useState } from "react";

const sections = [
  {
    key: "business",
    title: "Business Snapshot",
    questions: [
      "What does your business do?",
      "Who is your ideal customer?",
      "How big is your team?",
      "What are your top 3 priorities for the next 90 days?",
    ],
  },
  {
    key: "time",
    title: "Time",
    questions: [
      "What repetitive tasks eat the most time every week?",
      "What are you personally still doing that should probably be systemized?",
      "Where do things regularly fall through the cracks?",
    ],
  },
  {
    key: "revenue",
    title: "Leads & Revenue",
    questions: [
      "How are new leads captured today?",
      "Where do leads usually stall or go cold?",
      "How consistent is follow-up today?",
      "What revenue activity depends too much on you personally?",
    ],
  },
  {
    key: "content",
    title: "Content & Visibility",
    questions: [
      "What platforms matter most for your business right now?",
      "How often are you posting consistently?",
      "What stops content from getting published more often?",
    ],
  },
  {
    key: "ai",
    title: "AI Usage Today",
    questions: [
      "What AI tools are you currently using?",
      "What is working well?",
      "What feels scattered, inconsistent, or disappointing?",
    ],
  },
  {
    key: "governance",
    title: "Trust & Governance",
    questions: [
      "What would make you nervous about relying more on AI?",
      "Where would approval checkpoints matter most?",
      "Are there privacy, compliance, or client-sensitivity concerns to be aware of?",
    ],
  },
];

export default function IntakeClient({
  initialEmail = "",
  initialOrderId = "",
  initialSessionId = "",
}: {
  initialEmail?: string;
  initialOrderId?: string;
  initialSessionId?: string;
}) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(initialEmail);
  const [orderId, setOrderId] = useState(initialOrderId);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [sessionId] = useState(initialSessionId);
  const [saving, setSaving] = useState(false);
  const [loadingSaved, setLoadingSaved] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const section = sections[step];
  const progress = useMemo(() => Math.round(((step + 1) / sections.length) * 100), [step]);

  useEffect(() => {
    const preload = async () => {
      if (!email && !orderId) return;
      setLoadingSaved(true);
      setError("");
      try {
        let currentOrderId = orderId;
        if (!currentOrderId && email) {
          const orderRes = await fetch(`/api/diagnostic/order?email=${encodeURIComponent(email)}`);
          const orderData = await orderRes.json();
          if (!orderRes.ok) throw new Error(orderData.error || "Failed to fetch order");
          if (orderData.order?.id) {
            currentOrderId = orderData.order.id;
            setOrderId(currentOrderId);
          }
        }

        if (!currentOrderId && sessionId) {
          const initRes = await fetch("/api/diagnostic/init", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
          });
          const initData = await initRes.json();
          if (!initRes.ok) throw new Error(initData.error || "Failed to initialize order");
          if (initData.order?.id) {
            currentOrderId = initData.order.id;
            setOrderId(currentOrderId);
            if (initData.order?.email && !email) setEmail(initData.order.email);
          }
        }

        if (!currentOrderId) return;

        const responsesRes = await fetch(`/api/diagnostic/responses?orderId=${encodeURIComponent(currentOrderId)}`);
        const responsesData = await responsesRes.json();
        if (!responsesRes.ok) throw new Error(responsesData.error || "Failed to fetch responses");

        const nextAnswers: Record<string, string[]> = {};
        for (const row of responsesData.responses || []) {
          nextAnswers[row.section_key] = row.response_json?.answers || [];
          if (row.is_submitted) setSubmitted(true);
        }
        setAnswers(nextAnswers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load saved answers");
      } finally {
        setLoadingSaved(false);
      }
    };

    preload();
  }, [email, orderId]);

  const updateAnswer = (index: number, value: string) => {
    setAnswers((prev) => {
      const current = prev[section.key] || Array(section.questions.length).fill("");
      const next = [...current];
      next[index] = value;
      return { ...prev, [section.key]: next };
    });
  };

  const saveSection = async (isSubmitted = false) => {
    setSaving(true);
    setError("");

    const res = await fetch("/api/diagnostic/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId,
        email,
        sectionKey: section.key,
        response: { answers: answers[section.key] || [] },
        completionPercent: progress,
        isSubmitted,
      }),
    });

    const data = await res.json();
    setSaving(false);

    if (data.orderId && !orderId) setOrderId(data.orderId);
    if (!res.ok) throw new Error(data.error || "Failed to save");
  };

  const next = async () => {
    try {
      await saveSection(false);
      if (step < sections.length - 1) setStep(step + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save intake");
    }
  };

  const finish = async () => {
    try {
      await saveSection(true);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit intake");
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-navy py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Intake complete.</h1>
          <p className="text-light/60 mb-8">
            Your 48-hour turnaround starts now. Next step: book your 20-minute review call.
          </p>
          <a href="/schedule" className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold">
            Book Your Review Call
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-navy py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-electric text-sm uppercase tracking-widest mb-2">AI Capability Gap Diagnostic</p>
          <h1 className="text-4xl font-heading font-bold text-white mb-3">Complete your intake</h1>
          <p className="text-light/60">Your turnaround starts once this intake is submitted.</p>
          <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
          </div>
          {loadingSaved && (
            <div className="mt-4 rounded-lg border border-electric/20 bg-electric/10 px-4 py-3 text-sm text-light/80">
              Recovering your order and loading your intake, one moment...
            </div>
          )}
          {error && !loadingSaved && (
            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
        </div>

        {!orderId && (
          <div className="mb-6 bg-midnight/40 border border-white/10 rounded-xl p-5">
            <label className="block text-white font-medium mb-2">Purchase email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white"
              placeholder="you@example.com"
            />
          </div>
        )}

        <div className="bg-midnight/40 border border-white/10 rounded-xl p-6">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">{section.title}</h2>
          <div className="space-y-5 mt-6">
            {section.questions.map((q, idx) => (
              <div key={idx}>
                <label className="block text-white mb-2">{q}</label>
                <textarea
                  value={(answers[section.key] || [])[idx] || ""}
                  onChange={(e) => updateAnswer(idx, e.target.value)}
                  className="w-full min-h-[110px] rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between gap-4">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0 || saving}
              className="px-6 py-3 rounded-lg border border-white/10 text-white disabled:opacity-40"
            >
              Back
            </button>

            {step < sections.length - 1 ? (
              <button
                onClick={next}
                disabled={saving || !email}
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold disabled:opacity-40"
              >
                {saving ? "Saving..." : "Save & Continue"}
              </button>
            ) : (
              <button
                onClick={finish}
                disabled={saving || !email}
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold disabled:opacity-40"
              >
                {saving ? "Submitting..." : "Submit Intake"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
