import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Systems Roadmap for Jim Newhouse | Third Power Life",
  description:
    "A private proposal for a 30-day AI Systems Roadmap Sprint with Dan Gentry and Third Power Life.",
  robots: {
    index: false,
    follow: false,
  },
};

const workflowHypotheses = [
  "Referral and lead intake: capture, qualify, and move opportunities without relying on memory.",
  "Client gap review: surface blind spots, follow-up needs, and potential coverage conversations.",
  "Partner handoff tracking: keep master general agency and referral partner work visible.",
  "Follow-up and renewal radar: prevent valuable relationships from going quiet.",
  "Executive command view: show what needs attention today without opening five systems.",
  "AI-assisted drafting and prep: summarize context, draft next steps, and support your judgment.",
];

const capacityCards = [
  {
    value: "0.25-0.5",
    label: "FTE equivalent",
    title: "One operational lane stops stealing attention",
    detail:
      "Follow-up, renewal radar, intake, or client prep becomes easier to see and easier to act on.",
  },
  {
    value: "0.5-1.5",
    label: "FTE equivalent",
    title: "Multiple workflows start working together",
    detail:
      "The business gets a private command center for reminders, summaries, handoffs, drafts, and next actions.",
  },
  {
    value: "1.5-3",
    label: "FTE equivalent",
    title: "A slice of several roles without new payroll",
    detail:
      "Admin coordination, CRM visibility, client service prep, reporting, and business-development support become one operating layer.",
  },
];

const sprintDeliverables = [
  {
    title: "Business operating map",
    detail:
      "Inventory the business units, workflows, tools, open loops, handoffs, and recurring decisions that actually drive the business.",
  },
  {
    title: "A ranked AI opportunity scorecard",
    detail:
      "Separate useful AI leverage from distractions by scoring value, risk, complexity, data needs, and owner involvement.",
  },
  {
    title: "Build / buy / delegate / ignore decisions",
    detail:
      "Decide what deserves custom development, what should stay in existing tools, what Jenn can own, and what should be left alone.",
  },
  {
    title: "Guardrails before automation",
    detail:
      "Define what stays human-approved, where sensitive data belongs, and how AI can assist without crossing regulated judgment lines.",
  },
  {
    title: "90-day implementation roadmap",
    detail:
      "Turn the findings into a prioritized build plan with phases, owners, dependencies, and realistic implementation pricing.",
  },
  {
    title: "Shared sprint workspace",
    detail:
      "A private collaboration app captures interviews, workflow notes, documents, scoring, decisions, and open questions in one place.",
  },
];

const sprintProcess = [
  {
    week: "Week 1",
    title: "Monday kickoff and intake",
    detail:
      "One 60-75 minute kickoff with Jim, Dan, and Jenn if useful. We confirm goals, business units, current tools, key workflows, and the decisions that need owner judgment.",
  },
  {
    week: "Week 2",
    title: "Monday workflow mapping",
    detail:
      "One 60-75 minute working session to map the highest-value workflows, review the raw material, and identify targeted follow-up questions for the shared sprint workspace.",
  },
  {
    week: "Week 3",
    title: "Monday opportunity scoring",
    detail:
      "One 60-75 minute review session to rank AI opportunities by value, complexity, risk, data needs, client sensitivity, and implementation effort.",
  },
  {
    week: "Week 4",
    title: "Monday roadmap review",
    detail:
      "One 60-75 minute roadmap review. Jim leaves with the 90-day implementation plan, recommended build path, budget range, ownership model, and next decision.",
  },
];

const timeCommitments = [
  {
    role: "Jim",
    time: "4-6 hours total",
    detail:
      "Four focused Monday sessions, quick async answers, and optional 30-minute end-of-week checkpoints only when a decision or blocker needs live attention.",
  },
  {
    role: "Dan",
    time: "12-18 hours",
    detail:
      "Interview prep, workflow analysis, AI opportunity scoring, roadmap writing, implementation planning, and final recommendation.",
  },
  {
    role: "Jenn / ops support",
    time: "1-3 hours if needed",
    detail:
      "Tool/process context, CRM or workflow clarification, and implementation feasibility input where it affects the roadmap.",
  },
];

const sprintWorkspace = [
  "Owner goals and business-unit priorities",
  "Current tools, handoffs, and recurring friction",
  "Workflow maps and opportunity notes",
  "AI use-case scorecards and risk flags",
  "Build / buy / delegate / ignore decisions",
  "90-day implementation roadmap and budget path",
];

const tiers = [
  {
    name: "Lean Private Dashboard",
    price: "$7,500-$12,500",
    capacity: "0.25-0.5 FTE capacity equivalent",
    timeline: "2-4 week build window after roadmap",
    description:
      "One high-value workflow becomes visible, easier to run, and supported by a custom private dashboard.",
    includes: [
      "One priority workflow rebuilt around practical AI support",
      "Custom private dashboard or app with a clean working view",
      "Lightweight backend or structured data layer",
      "Manual or semi-automated data updates where appropriate",
      "AI-assisted drafts, summaries, checklists, or research support",
      "Human approval before anything client-facing",
      "Simple documentation and handoff",
    ],
  },
  {
    name: "Standard AI Command Center",
    price: "$18,000-$30,000",
    capacity: "0.5-1.5 FTE capacity equivalent",
    timeline: "6-10 week build window after roadmap",
    description:
      "Multiple workflows connect into a command center you can use to see open loops, client needs, and next actions.",
    includes: [
      "Three to four connected workflows",
      "Custom dashboard with workflow areas and operating views",
      "CRM, email, calendar, task, or form integrations where feasible",
      "AI-assisted summaries, reminders, drafts, and decision prep",
      "Knowledge base for products, partners, SOPs, and client scenarios",
      "Basic logging and approval checkpoints for AI-assisted work",
      "Training, documentation, and operating cadence",
    ],
  },
  {
    name: "Full AI Operating System",
    price: "$35,000-$60,000+",
    capacity: "1.5-3 FTE capacity equivalent",
    timeline: "10-16+ week build window after roadmap",
    description:
      "A deeper private operating layer across business units, workflows, dashboards, AI support, and governance.",
    includes: [
      "Multi-business-unit workflow architecture",
      "Custom private portal or command center",
      "Deeper integrations and structured data model",
      "AI-assisted work queues and approval checkpoints",
      "Knowledge retrieval layer for products, partners, and internal process",
      "Access controls, monitoring, backups, and operating guardrails",
      "Ongoing improvement path and support model",
    ],
  },
];

export default function JimNewhouseProposal() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/machine-work-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/88 to-navy" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-18 lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 font-heading text-sm uppercase tracking-widest text-electric">
              Private proposal
            </p>
            <h1 className="max-w-5xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              Jim Newhouse AI Systems Roadmap
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-light/78 md:text-xl">
              A 30-day process to decide where AI belongs in your business,
              what should stay human-approved, what should be delegated, and
              what deserves a custom private dashboard or command center.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#approve"
                className="rounded-lg bg-accent px-6 py-3 font-heading font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(0,210,255,0.28)]"
              >
                Approve Roadmap Sprint
              </a>
              <a
                href="#roadmap"
                className="rounded-lg border border-electric/40 px-6 py-3 font-heading font-semibold text-electric transition-all hover:bg-electric/10"
              >
                Review Process
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="possibility"
        className="relative overflow-hidden bg-midnight py-16 md:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
          style={{ backgroundImage: "url('/images/meaning-work-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-midnight/92 to-accent/45" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
                Where this gets exciting
              </p>
              <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
                We are not starting from zero.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-light/76">
                We are not starting from zero. You have already been thinking
                about how AI could support the business, and we already have
                enough context to turn that curiosity into a practical first
                system. That is the fun part: we get to build something useful
                together, not just talk about what AI might do someday.
              </p>
              <p className="mt-4 leading-relaxed text-light/70">
                The win is not a shiny dashboard. The win is a business that
                becomes easier to run, more profitable to operate, and less
                dependent on every important detail living in your head. Done
                well, this can create the effect of adding serious operating
                capacity without adding payroll, benefits, management overhead,
                or another person for you to supervise.
              </p>
              <p className="mt-4 leading-relaxed text-light/70">
                That is the seed we are planting: a small, focused first step
                that points toward a much larger payoff in time, margin,
                follow-through, and owner freedom. Here is how we get there.
              </p>
            </div>

            <div className="rounded-xl border border-electric/25 bg-navy/72 p-6 shadow-[0_0_36px_rgba(0,87,255,0.18)]">
              <p className="font-heading text-sm uppercase tracking-widest text-light/50">
                The practical promise
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                Better leverage without another system to babysit.
              </h3>
              <p className="mt-4 leading-relaxed text-light/70">
                The roadmap sprint turns the current AI noise into a clear set
                of business decisions: what to use, what to ignore, what to
                delegate, and what deserves a custom build.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-light/64">
                The capacity numbers come later, after we confirm which build
                path is actually worth pursuing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
                What I heard
              </p>
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                The problem is not a lack of AI tools.
              </h2>
            </div>
            <div className="space-y-5 text-light/72">
              <p className="leading-relaxed">
                You already understand that AI can be useful. You also know a
                decent-looking app can be built quickly now. That is exactly why
                the real risk is not whether someone can make a dashboard. The
                risk is chasing tools, dashboards, agents, and automations
                without a clear operating model.
              </p>
              <p className="leading-relaxed">
                From our conversations, the work is bigger than picking a tool:
                your insurance practice has referral flow, client follow-up,
                partner handoffs, business-unit priorities, and sensitive
                decisions that need structure before they need automation.
              </p>
              <p className="leading-relaxed">
                The smarter path is to start with the business: what must happen
                for the insurance practice to stay healthy, what helps it grow,
                what should stay human-approved, and where AI can create
                capacity without becoming another system you have to babysit.
              </p>
              <div className="rounded-xl border border-electric/20 bg-electric/[0.08] p-5">
                <p className="font-heading text-lg font-semibold text-white">
                  The goal: clarity before construction.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-light/70">
                  The 30-day sprint produces a practical roadmap and a reliable
                  implementation path before anyone overbuilds the wrong thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight/35 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
              Why the roadmap matters
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              A fast build is easy. A system you trust is the valuable part.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light/70">
              The roadmap sprint exists to prevent the cheap version of AI:
              something impressive for a week that quietly turns into another
              job. We define the operating rules before anything gets automated.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              [
                "Human approval",
                "AI can draft, summarize, research, and prepare. You approve client-facing communication and regulated decisions.",
              ],
              [
                "Data boundaries",
                "Sensitive client data, access permissions, and vendor tools are reviewed before deeper automation is built.",
              ],
              [
                "Accountable maintenance",
                "The goal is not a clever demo. The goal is ownership, documentation, and a clear improvement path.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-navy/65 p-6"
              >
                <h3 className="font-heading text-xl font-bold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/68">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
              Operating roles
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Clear ownership keeps the system from becoming another job.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              [
                "Dan / Third Power Life",
                "AI strategy, workflow prioritization, roadmap, governance, executive decision support, and custom dashboard architecture.",
              ],
              [
                "Jenn Mullen / BBS",
                "Systems implementation support where appropriate: CRM, workflows, SOPs, automations, project management, and operational cleanup.",
              ],
              [
                "Jim Newhouse",
                "Business judgment, client context, sensitive decisions, final approvals, and priorities that only the owner can set.",
              ],
            ].map(([role, desc]) => (
              <div
                key={role}
                className="rounded-xl border border-white/10 bg-midnight/35 p-5"
              >
                <h3 className="font-heading text-lg font-bold text-white">
                  {role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/67">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-midnight/35 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
              The first paid step
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              30-day AI Systems Roadmap Sprint
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light/70">
              A guided 30-day process that turns conversation, documents,
              workflows, and owner judgment into an implementation plan you can
              approve, delegate, or decline with confidence.
            </p>
          </div>

          <div className="mb-12 rounded-xl border border-electric/25 bg-navy/70 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-heading text-sm uppercase tracking-widest text-light/45">
                  How the sprint works
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                  Four weeks, one focused Monday session each week, one shared workspace.
                </h3>
                <p className="mt-4 leading-relaxed text-light/70">
                  Jim should not have to disappear for a month to make this
                  useful. The process is designed around focused conversations,
                  quick async answers, and Dan doing the heavy analysis between
                  sessions.
                </p>
                <p className="mt-4 leading-relaxed text-light/70">
                  If something is blocked, unclear, or needs a fast owner
                  decision, we can add a short Thursday or Friday checkpoint.
                  Otherwise, the workspace handles progress between calls.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {timeCommitments.map((item) => (
                  <div
                    key={item.role}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="font-heading text-lg font-bold text-white">
                      {item.role}
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold text-electric">
                      {item.time}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-light/65">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sprintProcess.map((item) => (
              <article
                key={item.week}
                className="rounded-xl border border-white/10 bg-navy/55 p-5"
              >
                <p className="font-heading text-sm font-bold uppercase tracking-widest text-electric">
                  {item.week}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/68">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-xl border border-white/10 bg-navy/55 p-6">
              <p className="font-heading text-sm uppercase tracking-widest text-electric">
                How Jim gets information to Dan
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                We collect the raw material in a private collaboration app.
              </h3>
              <p className="mt-4 leading-relaxed text-light/70">
                Instead of emailing scattered notes or filling out a generic
                worksheet, we use a simple private sprint workspace for
                questions, uploaded documents, workflow notes, decisions, and
                open items. Jim can answer in small pieces, and Dan can keep the
                roadmap organized as the picture gets clearer.
              </p>
              <p className="mt-4 leading-relaxed text-light/70">
                This keeps the live calls focused on judgment and decisions,
                while the app carries the details between Monday sessions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sprintWorkspace.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-midnight/35 p-4"
                >
                  <p className="text-sm leading-relaxed text-light/76">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sprintDeliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-navy/55 p-5"
              >
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/70">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-electric/25 bg-navy/70 p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="font-heading text-sm uppercase tracking-widest text-light/45">
                Fixed-fee roadmap sprint
              </p>
              <p className="mt-2 text-sm leading-relaxed text-light/68">
                Implementation pricing comes after the roadmap confirms what is
                worth building.
              </p>
            </div>
            <div className="mt-5 font-heading text-4xl font-bold text-white md:mt-0 md:text-right">
              $4,500
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
              Initial hypotheses to validate
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Where AI may create the most capacity
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light/70">
              These are not final recommendations. They are starting points for
              the roadmap sprint to validate against your real workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {workflowHypotheses.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-midnight/35 p-5"
              >
                <p className="mb-2 font-heading text-sm font-bold text-electric">
                  0{index + 1}
                </p>
                <p className="leading-relaxed text-light/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy to-midnight/55 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
              After the roadmap
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Three possible build paths for adding capacity
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light/70">
              Each path includes custom development. The difference is how many
              workflows, integrations, guardrails, and operating responsibilities
              are involved.
            </p>
          </div>

          <div className="mb-10 rounded-xl border border-electric/25 bg-navy/70 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="font-heading text-sm uppercase tracking-widest text-light/45">
                  Capacity math
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                  This is where the larger operating leverage appears.
                </h3>
                <p className="mt-4 leading-relaxed text-light/70">
                  The roadmap sprint decides what is worth building. The build
                  paths are where that decision can turn into measurable
                  operating capacity.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["10 hrs/week", "0.25 FTE"],
                  ["20 hrs/week", "0.5 FTE"],
                  ["40 hrs/week", "1.0 FTE"],
                  ["80 hrs/week", "2.0 FTE"],
                ].map(([hours, fte]) => (
                  <div
                    key={hours}
                    className="rounded-lg border border-white/10 bg-white/[0.08] p-4"
                  >
                    <p className="font-heading text-xl font-bold text-white">
                      {hours}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-electric">
                      {fte}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {capacityCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/[0.12] bg-navy/68 p-6"
              >
                <p className="font-heading text-4xl font-bold text-electric">
                  {card.value}
                </p>
                <p className="mt-1 font-heading text-sm uppercase tracking-widest text-periwinkle">
                  {card.label}
                </p>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/68">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-navy/70 p-6"
              >
                <h3 className="font-heading text-2xl font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-light/65">
                  {tier.description}
                </p>
                <div className="mt-6 border-y border-white/10 py-5">
                  <p className="font-heading text-3xl font-bold text-electric">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-sm text-light/55">{tier.timeline}</p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {tier.capacity}
                  </p>
                </div>
                <ul className="mt-5 flex-1 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-light/72">
                      <span className="mt-1 text-electric">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approve" className="bg-gradient-to-r from-midnight to-navy py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm uppercase tracking-widest text-electric">
            Recommended next step
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Approve the 30-day AI Systems Roadmap Sprint.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-light/70">
            If the direction is right, Third Power Life will send an invoice for
            the $4,500 roadmap sprint and begin with the business-unit and
            workflow intake.
          </p>
          <a
            href="mailto:dan@thirdpowerperformance.com?subject=Approve%20AI%20Systems%20Roadmap%20Sprint"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-heading font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(0,210,255,0.28)]"
          >
            Approve and Request Invoice
          </a>
        </div>
      </section>
    </>
  );
}
