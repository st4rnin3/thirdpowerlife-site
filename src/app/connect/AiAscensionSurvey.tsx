"use client";

import { useState, useCallback, useRef, useEffect, type FormEvent, type ChangeEvent } from "react";
import { saveConnectData, saveSurveyLevel } from "@/lib/connect-autofill";

/* -------------------------------------------------------------------
 * Data: questions, answers, and result card content
 * ---------------------------------------------------------------- */

interface Question {
  text: string;
  answers: string[];
}

const QUESTIONS: Question[] = [
  {
    text: "How are you using AI in your work today?",
    answers: [
      "I'm mostly exploring and trying things occasionally.",
      "I use it regularly for drafts, research, or brainstorming.",
      "I have AI helping with real recurring workflows.",
      "I have multiple AI systems or agents supporting operations.",
    ],
  },
  {
    text: "Which best describes your current setup?",
    answers: [
      "No real workflow yet, mostly experiments.",
      "Helpful tools, but mostly ad hoc and manual.",
      "At least one delegated workflow is in place.",
      "Multiple workflows or agents exist and need coordination.",
    ],
  },
  {
    text: "What happens after AI gives you an output?",
    answers: [
      "I'm still figuring out whether I can trust it.",
      "I review and refine everything myself.",
      "Some outputs move forward through defined checks or approvals.",
      "We have or need formal review, governance, and oversight rules.",
    ],
  },
  {
    text: "Which statement feels most true right now?",
    answers: [
      "I'm still figuring out where AI fits.",
      "I use AI, but it feels scattered or inconsistent.",
      "AI is useful, but the system around it is not fully designed.",
      "Capability is growing faster than our guardrails.",
    ],
  },
  {
    text: "How transparent are you about AI involvement?",
    answers: [
      "I haven't really thought about that yet.",
      "I'm usually clear when AI helped me create something.",
      "We try to be transparent, especially when AI is acting on our behalf.",
      "Transparency, identity, and trust rules are part of the system design.",
    ],
  },
  {
    text: "How much delegated work is AI doing today?",
    answers: [
      "None yet.",
      "Small task assistance only.",
      "Some delegated work with recurring value.",
      "Significant delegated work across multiple functions.",
    ],
  },
  {
    text: "Which problem sounds most like you right now?",
    answers: [
      "I need a safe place to start.",
      "I need to turn useful AI usage into real leverage.",
      "I need orchestration, ownership, and validation.",
      "I need guardrails, governance, and a trusted operating model.",
    ],
  },
  {
    text: "What would help you most right now?",
    answers: [
      "A clear starting point.",
      "One repeatable workflow or agent.",
      "Help designing how multiple systems should work together.",
      "Help building the leadership and governance layer for scale.",
    ],
  },
];

interface LevelResult {
  level: number;
  name: string;
  title: string;
  theme: string;
  meaning: string;
  wrongTurn: string;
  trustPrinciple: string;
  nextMove: string;
  ctaText: string;
  ctaHelper: string;
  colorClass: string;
}

const LEVEL_RESULTS: LevelResult[] = [
  {
    level: 0,
    name: "Explorer",
    title: "You're currently at Level 0: Explorer",
    theme: "Trust starts here.",
    meaning:
      "You know AI matters, but you don't want to adopt it blindly. You're paying attention, learning, and figuring out what you can actually trust.",
    wrongTurn:
      "Most people at this stage think they need more tools. They usually don't. What they need is clarity, low-stakes reps, and a safe place to build judgment before they build dependence.",
    trustPrinciple:
      "Start with transparency and safe experimentation. Learn before you delegate.",
    nextMove:
      "Pick one low-stakes use case and use AI where the downside is low and the learning is high. Focus on building judgment, not chasing hype.",
    ctaText: "Get Your AI Clarity Call",
    ctaHelper:
      "If you want a safe, strategic starting point, let's identify your best first move.",
    colorClass: "text-yellow-400",
  },
  {
    level: 1,
    name: "Assistant",
    title: "You're currently at Level 1: Assistant",
    theme: "Saving hours, keeping judgment.",
    meaning:
      "AI is helping you think, write, and prepare faster, but you're still the one responsible for judgment, nuance, and the final call.",
    wrongTurn:
      "The biggest trap at this level is using AI ad hoc and calling it a strategy. You may be saving time, but if nothing is repeatable, reliable, or systematized, you're still working harder than you need to.",
    trustPrinciple: "The human touch is the last touch.",
    nextMove:
      "Choose one recurring task and turn it into a repeatable workflow with clear human review. That's where useful AI becomes real leverage.",
    ctaText: "Book Your AI Clarity Call",
    ctaHelper:
      "If AI is useful but still messy, let's map the one workflow worth building next.",
    colorClass: "text-electric",
  },
  {
    level: 2,
    name: "Agent",
    title: "You're currently at Level 2: Agent",
    theme: "Delegation requires design.",
    meaning:
      "AI is no longer just helping you think. It's doing delegated work on your behalf, which means leverage is rising and so is the need for intentional trust design.",
    wrongTurn:
      "This is where agent sprawl begins. Random tools, disconnected workflows, unclear ownership, weak escalation paths, and no orchestration layer. Capability increases, but trust becomes fragile.",
    trustPrinciple: "Trust has to be designed on purpose.",
    nextMove:
      "Define how work moves, who owns what, what gets reviewed, and where AI should escalate to a human. This is where orchestration starts to matter more than one more tool.",
    ctaText: "Map Your Next AI Move",
    ctaHelper:
      "If AI is doing real work in your business, let's design the system around it before complexity outruns trust.",
    colorClass: "text-blue-400",
  },
  {
    level: 3,
    name: "Commander",
    title: "You're currently at Level 3: Commander",
    theme: "Scale requires guardrails.",
    meaning:
      "AI is becoming part of the operating system of your business. The challenge is no longer access to capability. The challenge is building a trusted operating model around it.",
    wrongTurn:
      "The common mistake is assuming scale simply means more automation. It doesn't. Real scale is governed autonomy, with clear rules, oversight, accountability, and leadership discipline.",
    trustPrinciple: "More autonomy requires more guardrails.",
    nextMove:
      "Build the governance layer. Define oversight, approvals, accountability, measurement, and role clarity so AI capability can grow without eroding trust.",
    ctaText: "Book a Strategic AI Clarity Call",
    ctaHelper:
      "If your capability is growing faster than your guardrails, this is the moment to build the operating model.",
    colorClass: "text-green-400",
  },
];

/* -------------------------------------------------------------------
 * Scoring: tally answers, resolve ties
 * ---------------------------------------------------------------- */

function computeLevel(answers: number[]): number {
  const tally: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

  for (const answer of answers) {
    tally[answer] += 1;
  }

  const maxCount = Math.max(tally[0], tally[1], tally[2], tally[3]);
  const topLevels = [0, 1, 2, 3].filter((lvl) => tally[lvl] === maxCount);

  // No tie
  if (topLevels.length === 1) {
    return topLevels[0];
  }

  // Tie-break #1: use Q7 answer (index 6) as the deciding level
  const q7Answer = answers[6];
  if (topLevels.includes(q7Answer)) {
    return q7Answer;
  }

  // Tie-break #2: choose the LOWER level
  return Math.min(...topLevels);
}

/* -------------------------------------------------------------------
 * Component: Answer Card
 * ---------------------------------------------------------------- */

interface AnswerCardProps {
  label: string;
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
}

function AnswerCard({ label, index, selected, onSelect }: AnswerCardProps) {
  const letterLabel = String.fromCharCode(65 + index); // A, B, C, D

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(index)}
      className={`w-full text-left rounded-xl p-4 border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 ${
        selected
          ? "border-electric bg-midnight/80 shadow-[0_0_12px_rgba(0,210,255,0.15)]"
          : "border-white/10 bg-midnight/60 hover:border-white/20 hover:bg-midnight/70"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shrink-0 mt-0.5 transition-colors duration-200 ${
            selected
              ? "bg-electric text-navy"
              : "bg-white/10 text-light/60"
          }`}
        >
          {letterLabel}
        </span>
        <span
          className={`text-sm sm:text-base leading-relaxed transition-colors duration-200 ${
            selected ? "text-white" : "text-light/70"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

/* -------------------------------------------------------------------
 * Constants: Lead capture
 * ---------------------------------------------------------------- */

const SUBSCRIBE_API_URL =
  "https://openclaw.thirdpowerperformance.com/api/audience/public-subscribe";

const INPUT_CLASS =
  "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-light placeholder-light/30 focus:ring-2 focus:ring-electric focus:border-transparent transition font-body";

/* -------------------------------------------------------------------
 * Component: Result Card
 * ---------------------------------------------------------------- */

type CaptureFormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";

interface ResultCardProps {
  result: LevelResult;
  onRetake: () => void;
}

function ResultCard({ result, onRetake }: ResultCardProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  // Lead capture form state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [formStatus, setFormStatus] = useState<CaptureFormStatus>("idle");

  useEffect(() => {
    resultRef.current?.focus();
  }, []);

  const handleCtaClick = () => {
    const target = document.getElementById("clarity-call");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setFormStatus("submitting");

    const levelTag = `level-${result.level}-${result.name.toLowerCase()}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10_000);

      const res = await fetch(SUBSCRIBE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone: phone || undefined,
          sms_consent: phone ? smsConsent : false,
          tags: ["connect-2026", levelTag],
          honeypot: "",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        setFormStatus("success");
        saveConnectData({ email, phone: phone || undefined });
      } else if (res.status === 429) {
        setFormStatus("rate_limited");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  const isSubmitting = formStatus === "submitting";

  return (
    <div ref={resultRef} tabIndex={-1} className="animate-fade-in-up focus:outline-none">
      <div className="glass rounded-2xl p-6 sm:p-8 md:p-10">
        {/* Level badge */}
        <div className="text-center mb-6">
          <span
            className={`inline-block text-6xl sm:text-7xl font-heading font-bold ${result.colorClass}`}
          >
            {result.level}
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-2">
            {result.title}
          </h3>
          <p className={`text-sm font-heading uppercase tracking-widest mt-2 ${result.colorClass}`}>
            {result.theme}
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* What that means */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              What That Means
            </h4>
            <p className="text-light/70 leading-relaxed">{result.meaning}</p>
          </div>

          {/* What usually goes wrong */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              What Usually Goes Wrong
            </h4>
            <p className="text-light/70 leading-relaxed">{result.wrongTurn}</p>
          </div>

          {/* Trust principle — callout */}
          <div className="border-l-2 border-electric bg-electric/5 rounded-r-lg px-5 py-4">
            <p className="text-xs font-heading uppercase tracking-widest text-electric mb-1">
              Trust Principle
            </p>
            <p className="text-white font-heading font-semibold text-lg italic leading-snug">
              &ldquo;{result.trustPrinciple}&rdquo;
            </p>
          </div>

          {/* Your next move */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Your Next Move
            </h4>
            <p className="text-light/70 leading-relaxed">{result.nextMove}</p>
          </div>

          {/* Lead capture form / success state */}
          <div className="pt-4">
            {formStatus === "success" ? (
              <div className="text-center space-y-4">
                <p role="status" className="text-electric font-body text-lg">
                  You&apos;re in &mdash; check your inbox for your personalized follow-up.
                </p>
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="bg-accent/20 text-electric border border-electric/30 px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-accent/30 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] transition-all duration-300"
                >
                  {result.ctaText}
                </button>
                <p className="text-light/50 text-sm">{result.ctaHelper}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <p className="text-light/70 text-center font-body mb-2">
                  Get personalized follow-up for your level &mdash; straight to your inbox.
                </p>

                {/* Honeypot — invisible to humans, value always empty via payload */}
                <input
                  type="text"
                  name="website"
                  className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Email (required) */}
                <div>
                  <label htmlFor="survey-capture-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="survey-capture-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    disabled={isSubmitting}
                    autoComplete="email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="survey-capture-phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="survey-capture-phone"
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    disabled={isSubmitting}
                    autoComplete="tel"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                    className={INPUT_CLASS}
                  />
                </div>

                {/* SMS consent — only visible when phone has a value */}
                {phone && (
                  <div className="flex items-start gap-3">
                    <input
                      id="survey-capture-sms-consent"
                      type="checkbox"
                      checked={smsConsent}
                      disabled={isSubmitting}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSmsConsent(e.target.checked)
                      }
                      className="mt-1 rounded border-white/30 bg-white/5 text-electric focus:ring-electric"
                    />
                    <label
                      htmlFor="survey-capture-sms-consent"
                      className="text-sm text-light/60 font-body cursor-pointer"
                    >
                      I agree to receive SMS messages. Msg &amp; data rates may
                      apply. Reply STOP to opt out.
                    </label>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="w-full bg-accent text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 disabled:opacity-50 motion-safe:animate-glow"
                >
                  {isSubmitting ? "Sending..." : result.ctaText}
                </button>

                {/* Error / rate-limit feedback */}
                {formStatus === "error" && (
                  <p role="status" className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
                {formStatus === "rate_limited" && (
                  <p role="status" className="text-red-400 text-sm text-center">
                    Too many attempts. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer line */}
      <p className="text-center text-light/40 text-sm italic mt-6">
        &ldquo;As AI gets more capable, trust has to get more intentional.&rdquo;
      </p>

      {/* Retake */}
      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onRetake}
          className="text-electric/70 hover:text-electric text-sm font-medium underline underline-offset-4 transition-colors duration-200"
        >
          Retake the Survey
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------
 * Component: Main Survey
 * ---------------------------------------------------------------- */

export default function AiAscensionSurvey() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [resultLevel, setResultLevel] = useState<number | null>(null);
  const questionRef = useRef<HTMLHeadingElement>(null);

  const isLastQuestion = currentStep === QUESTIONS.length - 1;
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  useEffect(() => {
    if (currentStep > 0) {
      questionRef.current?.focus();
    }
  }, [currentStep]);

  const handleSelect = useCallback((index: number) => {
    setSelectedAnswer(index);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedAnswer === null) return;
    const snapshot = selectedAnswer;
    setSelectedAnswer(null); // guard against double-tap

    const updated = [...answers];
    updated[currentStep] = snapshot;
    setAnswers(updated);

    if (isLastQuestion) {
      const finalAnswers = updated as number[];
      const level = computeLevel(finalAnswers);
      setResultLevel(level);

      // Persist level to localStorage so the Cal embed can include it in notes
      saveSurveyLevel(level, LEVEL_RESULTS[level].name);

      // Notify other components (e.g. CalEmbedConnect) that survey is complete
      window.dispatchEvent(
        new CustomEvent("connect-survey-complete", {
          detail: { level, levelName: LEVEL_RESULTS[level].name },
        })
      );
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [selectedAnswer, answers, currentStep, isLastQuestion]);

  const handleBack = useCallback(() => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
    setSelectedAnswer(answers[currentStep - 1]);
  }, [currentStep, answers]);

  const handleRetake = useCallback(() => {
    setCurrentStep(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
    setSelectedAnswer(null);
    setResultLevel(null);
  }, []);

  // Show result card
  if (resultLevel !== null) {
    return (
      <ResultCard
        result={LEVEL_RESULTS[resultLevel]}
        onRetake={handleRetake}
      />
    );
  }

  const question = QUESTIONS[currentStep];

  return (
    <div className="bg-midnight/40 border border-white/10 rounded-2xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-midnight/60">
        <div
          className="h-full bg-electric transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin={1}
          aria-valuemax={QUESTIONS.length}
          aria-label={`Question ${currentStep + 1} of ${QUESTIONS.length}`}
        />
      </div>

      <div className="p-5 sm:p-8">
        {/* Question counter */}
        <p className="text-light/40 text-xs font-heading uppercase tracking-widest mb-4">
          Question {currentStep + 1} of {QUESTIONS.length}
        </p>

        {/* Question text */}
        <h3
          ref={questionRef}
          tabIndex={-1}
          className="text-white font-heading font-bold text-lg sm:text-xl mb-6 leading-snug focus:outline-none"
        >
          {question.text}
        </h3>

        {/* Answer cards */}
        <div role="radiogroup" aria-label={question.text} className="space-y-3 mb-8">
          {question.answers.map((answer, idx) => (
            <AnswerCard
              key={`${currentStep}-${idx}`}
              label={answer}
              index={idx}
              selected={selectedAnswer === idx}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`text-sm font-medium transition-colors duration-200 ${
              currentStep === 0
                ? "text-light/20 cursor-not-allowed"
                : "text-light/50 hover:text-white"
            }`}
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedAnswer === null
                ? "bg-accent/30 text-white/40 cursor-not-allowed"
                : "bg-accent text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.3)]"
            }`}
          >
            {isLastQuestion ? "See Your Result" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
