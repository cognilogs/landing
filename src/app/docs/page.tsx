import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import {
  ArrowRight,
  Check,
  FileText,
  Gauge,
  MessageSquareText,
  ShieldCheck,
  Timer,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product guide | CogniLogs",
  description:
    "How CogniLogs handles a Freshdesk ticket and runs inside your network: intake, intent classification, knowledge retrieval, diagnostic runs, confidence gating, human handoff, and SLA monitoring.",
};

const sidebarLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#ticket-lifecycle", label: "Ticket lifecycle" },
  { href: "#intent-paths", label: "Intent paths" },
  { href: "#confidence-and-handoff", label: "Confidence and handoff" },
  { href: "#sla-monitoring", label: "SLA monitoring" },
  { href: "#deployment", label: "Deployment and data" },
  { href: "#connections", label: "Connections" },
  { href: "#operating-notes", label: "Operating notes" },
];

const overviewLoop = [
  { label: "Freshdesk event", color: "bg-accent" },
  { label: "Intent", color: "bg-blue" },
  { label: "Evidence", color: "bg-green" },
  { label: "Confidence", color: "bg-violet" },
  { label: "Reply or handoff", color: "bg-pink" },
  { label: "SLA watch", color: "bg-yellow" },
];

const intentPaths = [
  {
    name: "Query",
    dot: "bg-blue",
    summary:
      "The customer is asking for information that already exists somewhere in the product, policy, or support knowledge.",
    steps: [
      "Retrieve the closest knowledge passages",
      "Draft an answer with citations",
      "Score the confidence",
    ],
    outcome: "Customer answer",
  },
  {
    name: "Issue",
    dot: "bg-green",
    summary:
      "Something is broken, missing, or behaving differently. The ticket needs a diagnostic path.",
    steps: [
      "Select the scenario-specific playbook",
      "Run sandboxed checks and admin APIs",
      "Verify the result before replying",
    ],
    outcome: "Resolution or complete handoff",
  },
  {
    name: "Feature request",
    dot: "bg-pink",
    summary:
      "The customer wants a capability that does not exist yet, or does not exist for their plan.",
    steps: [
      "Check the real feature state",
      "Group related requests",
      "Route the request to product",
    ],
    outcome: "Acknowledgement + tracked ask",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="display-3 max-w-[620px]">{title}</h2>
      <div className="prose-copy mt-5 max-w-[720px] space-y-4 text-[16px] leading-7 text-muted-strong">
        {children}
      </div>
    </section>
  );
}

function Callout({
  tone = "accent",
  children,
}: {
  tone?: "accent" | "green" | "dark";
  children: React.ReactNode;
}) {
  const tones = {
    accent: "bg-accent-soft text-[#7a4b31]",
    green: "bg-green-soft text-[#3f6657]",
    dark: "bg-console text-white/70",
  };

  return (
    <div className={`rounded-[20px] p-5 text-[16px] leading-7 ${tones[tone]}`}>
      <div className="max-w-[600px]">{children}</div>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div>
      <div className="shell pb-20 pt-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[12px] font-medium text-muted">Product guide</p>
              <nav aria-label="Guide sections" className="mt-4 space-y-1">
                {sidebarLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-2 py-1.5 text-[13px] text-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <header className="max-w-[780px]">
              <h1 className="display-2 max-w-[720px]">
                How CogniLogs works.
              </h1>
              <p className="lede mt-5 max-w-[650px]">
                A ticket is a piece of work with a lifecycle: intake,
                understanding, evidence, a decision, and ownership until it
                closes. This guide follows that lifecycle and the deployment
                model behind it.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Product preview
                </span>
                <span>October 2026</span>
                <span>Local deployment</span>
                <span>Freshdesk-first</span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ButtonLink href="/waitlist" size="sm" withArrow>
                  Join the waitlist
                </ButtonLink>
                <span className="text-[13px] leading-5 text-muted">
                  Interfaces may change before launch. The workflow is the
                  source of truth.
                </span>
              </div>
            </header>

            <div className="mt-6 lg:hidden">
              <details className="rounded-[18px] bg-surface p-4">
                <summary className="cursor-pointer text-[13px] font-medium text-ink">
                  On this page
                </summary>
                <nav aria-label="Guide sections" className="mt-3 grid gap-1">
                  {sidebarLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded px-1 py-1 text-[13px] text-muted hover:text-ink"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            <div className="mt-12 space-y-16 sm:space-y-20">
              <Section id="overview" title="One loop, from event to close.">
                <p>
                  CogniLogs is a support automation layer that works from
                  Freshdesk ticket events. It reads the request, decides what
                  kind of work it is, gathers the evidence needed, and either
                  resolves the ticket or prepares a complete human handoff.
                </p>
                <p>
                  The loop does not end at a suggested reply. It continues
                  through the confidence decision, the parent/child escalation,
                  and the SLA watch that owns the case until it closes.
                </p>
                <div className="mt-6 rounded-[22px] bg-surface p-4">
                  <div className="hidden flex-wrap items-center gap-1.5 sm:flex">
                    {overviewLoop.slice(0, 5).map((step, index) => (
                      <div key={step.label} className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-paper px-2.5 py-1.5 text-[11px] font-medium text-ink">
                          <span className={`h-1.5 w-1.5 rounded-full ${step.color}`} />
                          {step.label}
                        </span>
                        {index < 4 && (
                          <ArrowRight className="h-3.5 w-3.5 text-line-strong" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:hidden">
                    {overviewLoop.slice(0, 5).map((step) => (
                      <span
                        key={step.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1.5 text-[11px] font-medium text-ink"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${step.color}`} />
                        {step.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col gap-1 rounded-xl bg-paper px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-ink">
                      <Timer className="h-3.5 w-3.5 text-yellow" />
                      SLA watch
                    </span>
                    <span className="text-[11px] text-muted">
                      ownership continues until the ticket closes
                    </span>
                  </div>
                </div>
                <Callout tone="accent">
                  <strong className="font-medium text-accent-strong">
                    What “evidence” means here:
                  </strong>{" "}
                  the knowledge source behind an answer, the log or API result
                  behind a diagnosis, and the confidence score that decided
                  whether the customer saw the reply.
                </Callout>
              </Section>

              <Section
                id="ticket-lifecycle"
                title="The ticket lifecycle."
              >
                <p>
                  A Freshdesk ticket is the system of record. CogniLogs reacts to
                  created and replied events, assembles context, and carries
                  session state across the steps. A customer reply continues the
                  same case instead of starting from zero.
                </p>
                <div
                  role="table"
                  aria-label="Ticket lifecycle"
                  className="mt-6 overflow-hidden rounded-[22px] bg-surface"
                >
                  <div
                    role="row"
                    className="hidden grid-cols-[0.7fr_1.5fr_1fr] gap-4 bg-paper px-4 py-3 text-[11px] font-medium text-muted sm:grid"
                  >
                    <span role="columnheader">Stage</span>
                    <span role="columnheader">What happens</span>
                    <span role="columnheader">What leaves the stage</span>
                  </div>
                  {[
                    ["Intake", "Created or replied event, thread context, sanitized inputs", "A clean case"],
                    ["Understand", "Intent, entities, prerequisite checklist", "A path or one follow-up"],
                    ["Resolve", "RAG, diagnostic playbook, or feature-state check", "Answer + evidence"],
                    ["Decide", "Confidence evaluator at the configured threshold", "Auto-reply or private note"],
                    ["Close", "Child ticket, SLA database, parent sync, reminders", "A watched case"],
                  ].map(([stage, happens, leaves]) => (
                    <div
                      key={stage}
                      role="row"
                      className="grid gap-1 border-t border-line/70 px-4 py-3 text-[13px] sm:grid-cols-[0.7fr_1.5fr_1fr] sm:gap-4"
                    >
                      <span role="cell" className="font-medium text-ink">
                        {stage}
                      </span>
                      <div role="cell" className="mt-1.5 sm:mt-0">
                        <span
                          aria-hidden="true"
                          className="mb-0.5 block text-[11px] font-medium text-muted sm:hidden"
                        >
                          What happens
                        </span>
                        <span className="text-muted">{happens}</span>
                      </div>
                      <div role="cell" className="mt-1.5 sm:mt-0">
                        <span
                          aria-hidden="true"
                          className="mb-0.5 block text-[11px] font-medium text-muted sm:hidden"
                        >
                          Leaves
                        </span>
                        <span className="text-muted-strong">{leaves}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {[
                    ["Session memory", "A replied event keeps the prior context."],
                    ["Missing info", "The ticket waits in the right state for the customer."],
                    ["Context before action", "The checklist runs before the action."],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-[16px] bg-surface p-3.5">
                      <p className="text-[12px] font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">{body}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="intent-paths" title="Three request types, three paths.">
                <p>
                  The classification decides which tools may run, what evidence
                  is gathered, and what “done” means for the ticket.
                </p>
                <div className="mt-6 space-y-3">
                  {intentPaths.map((path) => (
                    <div key={path.name} className="rounded-[22px] bg-surface p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`h-2 w-2 shrink-0 rounded-full ${path.dot}`} />
                        <p className="text-[15px] font-medium text-ink">
                          {path.name}
                        </p>
                        <span className="ml-auto text-[11px] text-muted">
                          {path.outcome}
                        </span>
                      </div>
                      <p className="mt-3 max-w-[620px] text-[16px] leading-7 text-muted-strong">
                        {path.summary}
                      </p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {path.steps.map((step, index) => (
                          <div
                            key={step}
                            className="flex items-start gap-2 rounded-lg bg-paper px-2.5 py-2 text-[11px] leading-5 text-muted-strong"
                          >
                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-surface text-[11px] font-medium text-ink">
                              {index + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Callout tone="green">
                  The product chooses the path before any tool runs, so a
                  feature request does not start a diagnostic playbook.
                </Callout>
              </Section>

              <Section
                id="confidence-and-handoff"
                title="Confidence decides who speaks."
              >
                <p>
                  Every path ends at the confidence evaluator. The default
                  threshold is <strong className="font-medium text-ink">0.85</strong>.
                  Above it, CogniLogs can reply to the customer and resolve the
                  ticket. Below it, the customer does not receive the draft.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-[20px] bg-green-soft p-4">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-green-strong">
                      <Check className="h-3.5 w-3.5" />
                      High confidence
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-[#3d7a64]">
                      Auto-reply, resolve, and keep the sources attached.
                    </p>
                  </div>
                  <div className="justify-self-center rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                    0.85 default
                  </div>
                  <div className="rounded-[20px] bg-accent-soft p-4">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-strong">
                      <UserRound className="h-3.5 w-3.5" />
                      Low confidence
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-[#8a4a2b]">
                      A private note goes to the human queue. The customer does
                      not see a guess.
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-[20px] bg-surface p-5">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-strong" />
                    <p className="text-[13px] font-medium text-ink">
                      What the private note contains
                    </p>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {[
                      "The customer request summary",
                      "The run and evidence collected",
                      "The drafted reply, held back",
                      "The suggested next step",
                    ].map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-2 text-[12px] text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Section>

              <Section id="sla-monitoring" title="The watch does not stop at handoff.">
                <p>
                  If a case needs a person, CogniLogs creates a linked child
                  ticket, records severity, and registers the case with the SLA
                  database. A background worker checks open child tickets every
                  15 minutes and keeps the parent informed.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-4">
                  {[
                    ["Open", "Child ticket linked", "Severity recorded"],
                    ["Sync", "Parent note updated", "Every internal change"],
                    ["Remind", "Follow-up counter", "Nudges before breach"],
                    ["Escalate", "Breach detected", "Manager · Slack planned"],
                  ].map(([title, line1, line2], index) => (
                    <div key={title} className="relative rounded-[18px] bg-surface p-4">
                      <span
                        className={`mb-3 block h-1.5 w-1.5 rounded-full ${
                          index === 3 ? "bg-red" : index === 2 ? "bg-yellow" : "bg-accent"
                        }`}
                      />
                      <p className="text-[13px] font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">{line1}</p>
                      <p className="text-[11px] leading-5 text-muted">{line2}</p>
                      {index < 3 && (
                        <span
                          aria-hidden="true"
                          className="absolute -right-2 top-1/2 hidden h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-line-strong sm:block"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <Callout tone="dark">
                  <div className="flex items-start gap-3">
                    <Timer className="mt-1 h-4 w-4 shrink-0 text-console-orange" />
                    <p>
                      The SLA worker checks every 15 minutes. When the case is
                      resolved, the parent can close automatically. When the
                      follow-up limit is hit, the breach escalates.
                    </p>
                  </div>
                </Callout>
              </Section>

              <Section id="deployment" title="Deployment and data.">
                <p>
                  The first deployment target is local. CogniLogs runs on your
                  servers or inside your network. The app, the SLA worker, and
                  the records they create stay in the environment you control.
                  Freshdesk remains your system of record, and we document any
                  other service a workflow depends on before a pilot.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] bg-green-soft p-4">
                    <p className="text-[11px] font-medium text-green-strong">
                      Stays in your environment
                    </p>
                    <ul className="mt-3 space-y-2 text-[13px] leading-5 text-[#3d7a64]">
                      <li>Ticket content and replies</li>
                      <li>Private notes and run evidence</li>
                      <li>Credentials and connector configuration</li>
                      <li>SLA records and follow-up history</li>
                    </ul>
                  </div>
                  <div className="rounded-[20px] bg-surface p-4">
                    <p className="text-[11px] font-medium text-ink">
                      External services
                    </p>
                    <p className="mt-3 text-[13px] leading-5 text-muted">
                      We list every service a workflow uses in the deployment
                      notes. If a workflow sends data outside your network, you
                      will see it before the pilot.
                    </p>
                  </div>
                </div>
                <Callout tone="accent">
                  <strong className="font-medium text-accent-strong">
                    Compliance is a deployment property.
                  </strong>{" "}
                  Local deployment can reduce the number of data transfers and
                  third-party processors in scope for your review. It does not
                  make an organization compliant by itself. We provide
                  deployment documentation, answer security questionnaires, and
                  list certifications only after they are issued.
                </Callout>
                <p>
                  Your team controls host access, network access, backups, and
                  retention. We will agree on the support and upgrade model
                  before deployment.
                </p>
              </Section>

              <Section id="connections" title="Connections today.">
                <p>
                  Freshdesk is the first confirmed integration and the system of
                  record. Other surfaces are being designed around the same loop.
                  We will not describe them as live until they are.
                </p>
                <div className="mt-6 overflow-hidden rounded-[22px] bg-surface">
                  <div className="grid grid-cols-[1fr_0.8fr] gap-4 bg-paper px-4 py-3 text-[11px] font-medium text-muted">
                    <span>Surface</span>
                    <span>Status</span>
                  </div>
                  {[
                    ["Freshdesk", "First integration"],
                    ["Slack", "Planned · breach escalation"],
                    ["Jira / Linear", "Planned · issue and feature routing"],
                    ["Notion / Confluence", "Planned · knowledge sources"],
                    ["GitHub", "Planned · code-linked diagnostics"],
                    ["Datadog", "Planned · observability"],
                  ].map(([surface, status]) => (
                    <div
                      key={surface}
                      className="grid grid-cols-[1fr_0.8fr] gap-4 border-t border-line/70 px-4 py-3 text-[12px]"
                    >
                      <span className="font-medium text-ink">{surface}</span>
                      <span className="text-muted">{status}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="operating-notes" title="Operating notes.">
                <div className="rounded-[24px] bg-surface p-5 sm:p-6">
                  <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {[
                      {
                        icon: ShieldCheck,
                        title: "The ticket stays the record.",
                        body: "Replies, private notes, statuses, and linked child tickets remain in Freshdesk.",
                      },
                      {
                        icon: UserRound,
                        title: "A person can take over.",
                        body: "A person can review, override, or reassign the case at any point.",
                      },
                      {
                        icon: Gauge,
                        title: "The threshold is a policy.",
                        body: "The 0.85 default is a starting point. Stricter lines belong on more sensitive queues.",
                      },
                      {
                        icon: MessageSquareText,
                        title: "The customer gets clarity.",
                        body: "Ask for the missing detail once. Hold back a reply when the evidence is thin.",
                      },
                    ].map((note) => (
                      <div key={note.title} className="flex gap-3">
                        <note.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                        <div>
                          <p className="text-[14px] font-medium text-ink">
                            {note.title}
                          </p>
                          <p className="mt-1 text-[12px] leading-5 text-muted">
                            {note.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] text-muted">
                  This guide describes the product workflow and the first
                  deployment model. It is not a committed release date or a live
                  integration catalog.
                </p>
              </Section>
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-[24px] bg-surface p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-[15px] font-medium text-ink">
                  Want to see the loop on your queue?
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  We are onboarding Freshdesk design partners for local
                  deployment.
                </p>
              </div>
              <Link
                href="/waitlist"
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-ink-soft"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
