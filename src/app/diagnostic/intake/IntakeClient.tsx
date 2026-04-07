"use client";

import { useMemo, useState } from "react";

const sections = [
  { key: "business", title: "Business Snapshot", questions: ["What does your business do?", "Who is your ideal customer?", "How big is your team?", "What are your top 3 priorities for the next 90 days?"] },
  { key: "time", title: "Time", questions: ["What repetitive tasks eat the most time every week?", "What are you personally still doing that should probably be systemized?", "Where do things regularly fall through the cracks?"] },
  { key: "revenue", title: "Leads & Revenue", questions: ["How are new leads captured today?", "Where do leads usually stall or go cold?", "How consistent is follow-up today?", "What revenue activity depends too much on you personally?"] },
  { key: "content", title: "Content & Visibility", questions: ["What platforms matter most for your business right now?", "How often are you posting consistently?", "What stops content from getting published more often?"] },
  { key: "ai", title: "AI Usage Today", questions: ["What AI tools are you currently using?", "What is working well?", "What feels scattered, inconsistent, or disappointing?"] },
  { key: "governance", title: "Trust & Governance", questions: ["What would make you nervous about relying more on AI?", "Where would approval checkpoints matter most?", "Are there privacy, compliance, or client-sensitivity concerns to be aware of?"] },
];

export default function IntakeClient({ initialEmail = "", initialOrderId = "" }: { initialEmail?: string; initialOrderId?: string }) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(initialEmail);
  const [orderId, setOrderId] = useState(initialOrderId);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const section = sections[step];
  const progress = useMemo(() => Math.round(((step + 1) / sections.length) * 100), [step]);

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
    const res = await fetch("/api/diagnostic/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, email, sectionKey: section.key, response: { answers: answers[section.key] || [] }, completionPercent: progress, isSubmitted }),
    });
    const data = await res.json();
    setSaving(false);
    if (data.orderId && !orderId) setOrderId(data.orderId);
    if (!res.ok) throw new Error(data.error || "Failed to save");
  };

  const next = async () => {
    await saveSection(false);
    if (step < sections.length - 1) setStep(step + 1);
  };

  const finish = async () => {
    await saveSection(true);
    setSubmitted(true);
  };

  if (submitted) {
    return <section className="min-h-screen bg-navy py-24"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl font-heading font-bold text-white mb-4">Intake complete.</h1><p className="text-light/60 mb-8">Your 48-hour turnaround starts now. Next step: book your 20-minute review call.</p><a href="/schedule" className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-heading font-semibold">Book Your Review Call</a></div></section>;
  }

  return <section className="min-h-screen bg-navy py-16"><div className="max-w-3xl mx-auto px-4"><div className="mb-8"><p className="text-electric text-sm uppercase tracking-widest mb-2">AI Capability Gap Diagnostic</p><h1 className="text-4xl font-heading font-bold text-white mb-3">Complete your intake</h1><p className="text-light/60">Your turnaround starts once this intake is submitted.</p><div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-accent" style={{ width: `${progress}%` }} /></div></div>{!orderId && <div className="mb-6 bg-midnight/40 border border-white/10 rounded-xl p-5"><label className="block text-white font-medium mb-2">Purchase email</label><input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white" placeholder="you@example.com" /></div>}<div className="bg-midnight/40 border border-white/10 rounded-xl p-6"><h2 className="text-2xl font-heading font-bold text-white mb-2">{section.title}</h2><div className="space-y-5 mt-6">{section.questions.map((q, idx) => <div key={idx}><label className="block text-white mb-2">{q}</label><textarea value={(answers[section.key] || [])[idx] || ""} onChange={(e) => updateAnswer(idx, e.target.value)} className="w-full min-h-[110px] rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white" /></div>)}</div><div className="mt-8 flex justify-between gap-4"><button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0 || saving} className="px-6 py-3 rounded-lg border border-white/10 text-white disabled:opacity-40">Back</button>{step < sections.length - 1 ? <button onClick={next} disabled={saving || !email} className="px-6 py-3 rounded-lg bg-accent text-white font-semibold disabled:opacity-40">{saving ? "Saving..." : "Save & Continue"}</button> : <button onClick={finish} disabled={saving || !email} className="px-6 py-3 rounded-lg bg-accent text-white font-semibold disabled:opacity-40">{saving ? "Submitting..." : "Submit Intake"}</button>}</div></div></div></section>;
}
