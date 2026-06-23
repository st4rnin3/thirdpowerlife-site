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
  "Prospecting that runs without you: find and qualify the right local prospects and route each one to a single clear next action instead of leaning on referrals and Google luck.",
  "The CRM you already own, finally working: turn it from a switched-off tool into where leads, follow-ups, and core products get tracked without making you the tracker.",
  "Local and AI-search visibility: show up for insurance-near-me searches across the towns you serve and in the AI chat searches that are already creating prospects.",
  "Who does what, and who you do not need: clarify which specialist owns which lane so overlapping help becomes leverage instead of noise and spend.",
  "Follow-up and renewal radar: keep valuable relationships from going quiet without holding every detail in your head.",
  "AI you can run yourself: prompt frameworks and cheat sheets so you get useful answers on your own, not only when someone is in the room.",
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
      "Inventory the business units, workflows, tools, open loops, handoffs, collaborators, and recurring decisions that actually drive the business.",
  },
  {
    title: "A ranked AI opportunity scorecard",
    detail:
      "Separate useful AI leverage from distractions by scoring value, risk, complexity, data needs, collaborator fit, and owner involvement.",
  },
  {
    title: "Build / buy / delegate / ignore decisions",
    detail:
      "Decide what deserves custom development, what should stay in existing tools, what should be delegated to existing collaborators, and what should be left alone.",
  },
  {
    title: "Guardrails before automation",
    detail:
      "Define what stays human-approved, where sensitive data belongs, and how AI can assist without crossing regulated judgment lines.",
  },
  {
    title: "90-day implementation roadmap",
    detail:
      "Turn the findings into a prioritized action plan with phases, owners, dependencies, advisory cadence, and realistic pricing for any scoped build work.",
  },
  {
    title: "Ongoing advisory path",
    detail:
      "Define how Dan can stay involved after the sprint as a strategic AI/systems advisor while side projects are scoped only when they are worth doing.",
  },
];

const sprintProcess = [
  {
    week: "Week 1",
    title: "Monday kickoff and intake",
    detail:
      "One 60-75 minute kickoff with Jim, Dan, and implementation context only if useful. We confirm goals, business units, current tools, key workflows, and the decisions that need owner judgment.",
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
    role: "Implementation context",
    time: "1-3 hours if needed",
    detail:
      "CRM, website, workflow, or specialist context only where it helps confirm sequence, ownership, or implementation feasibility.",
  },
];

const sprintWorkspace = [
  "Owner goals and project priorities",
  "Current tools, handoffs, and recurring friction",
  "Workflow maps and opportunity notes",
  "AI use-case scorecards and risk flags",
  "Build / buy / delegate / ignore decisions",
  "90-day implementation roadmap and budget path",
];

const nextPaths = [
  {
    name: "Ongoing AI / systems advisory",
    price: "Monthly advisory",
    capacity: "Strategic guidance without adding another manager",
    timeline: "Cadence set after the roadmap",
    description:
      "Dan stays close to the business as the practical AI and systems advisor: helping sort ideas, pressure-test vendors, choose collaborators, and keep the work tied to profit and owner freedom.",
    includes: [
      "Regular strategy and prioritization sessions",
      "AI use-case review before money or attention gets spent",
      "Vendor, tool, and collaborator evaluation",
      "Prompt, workflow, and decision-framework support",
      "Ongoing guardrails for sensitive or regulated work",
      "Clear next actions after each advisory cycle",
    ],
  },
  {
    name: "People and projects organized",
    price: "Owner-approved sequence",
    capacity: "Less noise from overlapping help",
    timeline: "Clarified in the roadmap",
    description:
      "The roadmap clarifies what Dan owns, what existing specialists may own, what Jim keeps, and which work should wait so Jim is not forced to become the systems integrator.",
    includes: [
      "Clear lanes for Dan, implementation partners, vendors, and internal support",
      "Decision rights for sensitive client or business judgment",
      "Website, CRM, prospecting, and follow-up work put in a sane order",
      "What to delegate, pause, replace, or ignore",
      "No big project until owner time and ownership are clear",
      "A practical next-step sequence instead of more moving parts",
    ],
  },
  {
    name: "Scoped side-project builds",
    price: "Priced project by project",
    capacity: "Useful work where the case is clear",
    timeline: "Only after priorities are validated",
    description:
      "When the roadmap exposes a real bottleneck, we scope that specific project instead of pretending every idea belongs in one giant build.",
    includes: [
      "CRM, website, intake, or reporting improvements",
      "Small dashboards or private working views only where useful",
      "AI-assisted summaries, prep, drafts, or checklists",
      "Human approval before anything client-facing",
      "Lightweight documentation and handoff",
      "Clear owner, budget, and success criteria before work starts",
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
              which projects should happen first, who should own each lane, and
              what should stay human-approved.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/order/jim-newhouse-roadmap-sprint"
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
                enough context to turn that curiosity into a practical order of
                operations. That is the useful part: we get to sort what should
                happen first, what can wait, and where AI actually supports the
                business instead of adding noise.
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
                delegate, who should own each lane, and what deserves a scoped
                project later.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-light/64">
                The capacity numbers come later, after we confirm the order,
                owners, and business case.
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
                From our conversations, the work is bigger than picking a tool.
                You have prospecting that still leans on referrals and luck, a
                CRM you pay for but have not switched on, local and AI search
                you depend on to get found, and a cluster of overlapping
                specialists you are trying to sort out. Those need structure and
                an order before they need automation.
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
                "AI strategy, workflow prioritization, roadmap, governance, executive decision support, and the operating model for what should happen next.",
              ],
              [
                "Implementation partner",
                "Systems implementation support where it fits, such as CRM, workflows, SOPs, automations, and operational cleanup. Part of the roadmap is confirming whether that is Jen Mullen / BBS, another specialist, or staged for later.",
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
                <p className="mt-4 leading-relaxed text-light/70">
                  You mentioned the website and CRM are already ahead of this in
                  your queue. That is exactly why the sprint goes first: in four
                  to six hours of your time, it tells you the order to tackle
                  them in, so it organizes the projects you already have instead
                  of competing with them.
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
                Advisory and implementation pricing come after the roadmap
                confirms what is worth doing, who should own it, and what can
                wait.
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
              the roadmap sprint to validate against your real workflows,
              current collaborators, and practical owner bandwidth.
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
              Ongoing advisory first, scoped builds when they make sense
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light/70">
              The roadmap is not meant to push you into one giant build. It is
              meant to give you a trusted operating advisor, clear priorities,
              and practical side projects only where the business case is real.
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
                  The roadmap sprint decides where Jim&apos;s attention is being
                  consumed, where existing collaborators can take work off his
                  plate, and where a small amount of AI or systems work could
                  create measurable capacity.
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
            {nextPaths.map((tier) => (
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
            If the direction is right, secure the $4,500 roadmap sprint and
            Third Power Life will use it to organize the website, CRM,
            prospecting, follow-up, specialist, and AI decisions already in
            motion.
          </p>
          <a
            href="/order/jim-newhouse-roadmap-sprint"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-heading font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(0,210,255,0.28)]"
          >
            Approve and Pay
          </a>
        </div>
      </section>
    </>
  );
}
