import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  Gauge,
  MessageSquareText,
  ShieldCheck,
  Terminal,
  Timer,
  UserRound,
} from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DeploymentSection from "@/components/sections/DeploymentSection";
import WaitlistSection from "@/components/sections/WaitlistSection";

export const metadata: Metadata = {
  title: "Platform | CogniLogs",
  description:
    "Local-first support automation for Freshdesk teams: intent routing, knowledge resolution, diagnostic playbooks, confidence-gated replies, human handoff, and SLA watch.",
};

const stages = [
  {
    label: "Intake",
    meta: "Freshdesk event",
    title: "The ticket arrives.",
    body: "A created or replied event opens a session with the thread, customer, and prior context already in hand.",
    items: ["Thread sanitized", "Context assembled", "Session state remembered"],
    tone: "bg-accent-soft",
  },
  {
    label: "Understand",
    meta: "Before any action",
    title: "Read the intent.",
    body: "CogniLogs sorts the request into a question, a broken workflow, or a product request. Then it checks whether it has enough detail to continue.",
    items: ["Intent + entities", "Prerequisite checklist", "One clear follow-up"],
    tone: "bg-blue-soft",
  },
  {
    label: "Act",
    meta: "By request type",
    title: "Do the work.",
    body: "Retrieve the answer, run the playbook, or route the request. Every path uses real sources and leaves a result behind.",
    items: ["RAG with citations", "Diagnostics + admin APIs", "Feature request routing"],
    tone: "bg-green-soft",
  },
  {
    label: "Close",
    meta: "With evidence",
    title: "Decide and watch.",
    body: "Confidence gates the reply. High scores resolve; low scores become a private note. Escalations stay on the SLA clock.",
    items: ["Auto-reply or human queue", "Linked child ticket", "SLA reminders + breach"],
    tone: "bg-pink-soft",
  },
];

const indexItems = [
  {
    title: "Intake and classification",
    body: "Every Freshdesk event, understood before it moves.",
    dot: "bg-accent",
  },
  {
    title: "Knowledge resolution",
    body: "Answers with the policy and source attached.",
    dot: "bg-blue",
  },
  {
    title: "Diagnostic playbooks",
    body: "Logs, sandboxed checks, and product admin APIs.",
    dot: "bg-green",
  },
  {
    title: "Human handoff",
    body: "A private note with the full run and next step.",
    dot: "bg-pink",
  },
  {
    title: "SLA watch",
    body: "Ownership that continues until the ticket closes.",
    dot: "bg-yellow",
  },
  {
    title: "Local deployment",
    body: "Runs on your servers, inside your network.",
    dot: "bg-cyan",
  },
];

const connections = [
  { name: "Freshdesk", status: "First integration", live: true, dot: "bg-accent" },
  { name: "Slack", status: "Breach escalation", live: false, dot: "bg-violet" },
  { name: "Jira", status: "Issue tracking", live: false, dot: "bg-blue" },
  { name: "Linear", status: "Product requests", live: false, dot: "bg-[#5b6cff]" },
  { name: "Notion", status: "Knowledge source", live: false, dot: "bg-ink" },
  { name: "Confluence", status: "Knowledge source", live: false, dot: "bg-cyan" },
  { name: "GitHub", status: "Code-linked diagnostics", live: false, dot: "bg-ink" },
  { name: "Datadog", status: "Observability", live: false, dot: "bg-[#6c4ed9]" },
];

function RouteBoard() {
  return (
    <div data-ui className="rounded-[22px] bg-surface p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Freshdesk · #4821
        </span>
        <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
          Classified
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-paper p-3.5">
        <p className="text-[12px] leading-6 text-ink">
          “Our CSV export has been stuck since 9am. It worked yesterday.”
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
            Issue
          </span>
          <span className="rounded-full bg-surface px-2 py-1 text-[9px] text-muted">
            Exports
          </span>
          <span className="rounded-full bg-surface px-2 py-1 text-[9px] text-muted">
            P2
          </span>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-line/80 p-3">
          <p className="flex items-center gap-1.5 text-[10px] font-medium text-green-strong">
            <Check className="h-3 w-3" />
            Enough to continue
          </p>
          <div className="mt-2 space-y-1.5">
            {["Workspace ID", "Export ID", "Plan context"].map((item) => (
              <p key={item} className="flex items-center gap-1.5 text-[10px] text-muted">
                <span className="h-1 w-1 rounded-full bg-green" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-accent-soft p-3">
          <p className="flex items-center gap-1.5 text-[10px] font-medium text-accent-strong">
            <MessageSquareText className="h-3 w-3" />
            One question
          </p>
          <p className="mt-2 text-[10px] leading-5 text-[#8a4a2b]">
            “What&apos;s the export ID? I can trace the exact job from there.”
          </p>
          <p className="mt-2 text-[9px] text-[#a95832]">Awaiting customer</p>
        </div>
      </div>
    </div>
  );
}

function RunBoard() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
      <div data-ui className="overflow-hidden rounded-[22px] bg-console p-4 text-console-text">
        <div className="flex items-center justify-between text-[10px]">
          <span className="inline-flex items-center gap-1.5 text-console-muted">
            <Terminal className="h-3.5 w-3.5" />
            Run · export.trace
          </span>
          <span className="inline-flex items-center gap-1 text-console-green">
            <Check className="h-3 w-3" /> verified
          </span>
        </div>
        <div className="mt-4 space-y-2 text-[10px] leading-5">
          <code className="block font-mono text-console-green">$ trace export.job --id 8f2c</code>
          <code className="block font-mono text-white/65">→ queued 09:02 · worker pool 3</code>
          <code className="block font-mono text-console-orange">! storage-permission denied</code>
          <code className="block font-mono text-white/65">→ permission restored by admin API</code>
          <code className="block font-mono text-console-green">$ retry export.job --verify</code>
          <code className="block font-mono text-white/65">→ completed in 1.2s · 18,402 rows</code>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-2 text-[9px] text-console-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
          Sandboxed run · every action recorded in the ticket
        </div>
      </div>
      <div data-ui className="rounded-[22px] bg-surface p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-ink">
            <BookOpen className="h-3.5 w-3.5 text-green-strong" />
            Evidence
          </span>
          <span className="text-[9px] text-muted">3 sources</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Worker logs", "storage-permission denied"],
            ["Admin API", "permission restored"],
            ["Knowledge", "export retry policy"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-paper p-2.5">
              <p className="text-[9px] text-muted">{label}</p>
              <p className="mt-0.5 text-[10px] font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-green-soft px-2.5 py-2 text-[10px]">
          <span className="font-medium text-green-strong">Confidence</span>
          <span className="font-medium text-green-strong">0.94</span>
        </div>
      </div>
    </div>
  );
}

function HandoffBoard() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div data-ui className="rounded-[22px] bg-surface p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-ink">
            <FileText className="h-3.5 w-3.5" />
            Private note
          </span>
          <span className="rounded-full bg-accent-soft px-2 py-1 text-[9px] font-medium text-accent-strong">
            0.62
          </span>
        </div>
        <p className="mt-3 text-[11px] leading-5 text-muted">
          Export job traced to a changed storage permission. Access restored
          and retry verified. Refund for the failed batch still needs approval.
        </p>
        <div className="mt-3 rounded-lg bg-paper p-2.5">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[8px] text-white">
              T2
            </span>
            <div>
              <p className="text-[10px] font-medium text-ink">Tier 2 queue</p>
              <p className="text-[9px] text-muted">Run, evidence, and draft attached</p>
            </div>
          </div>
        </div>
      </div>

      <div data-ui className="rounded-[22px] bg-surface p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-ink">
            <Timer className="h-3.5 w-3.5 text-accent-strong" />
            SLA watch
          </span>
          <span className="rounded-full bg-red-soft px-2 py-1 text-[9px] font-medium text-red-strong">
            P1 · 2h left
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Parent ticket", "Linked · updates sync"],
            ["Next check", "Every 15 minutes"],
            ["Escalation", "Manager at breach"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-[10px] text-muted">{label}</span>
              <span className="text-[10px] font-medium text-ink">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-paper">
          <div className="h-full w-[72%] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="display-1 max-w-[720px]">
                Support, end to end.
              </h1>
              <p className="lede measure mt-6">
                CogniLogs starts with a Freshdesk ticket and keeps working until
                the case is resolved, handed off with evidence, or closed by the
                SLA watch. The first deployments run inside your network.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/waitlist" size="lg" withArrow>
                  Join the waitlist
                </ButtonLink>
                <ButtonLink href="/docs" variant="secondary" size="lg">
                  Read the product guide
                </ButtonLink>
              </div>
              <p className="mt-5 text-[13px] text-muted">
                Local-first. Freshdesk-first. Human control stays in the loop.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal>
                <div data-ui className="rounded-[26px] bg-surface p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium text-ink">
                      Capability index
                    </p>
                    <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
                      End to end
                    </span>
                  </div>
                  <div className="mt-4 space-y-1">
                    {indexItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-paper"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`}
                        />
                        <div>
                          <p className="text-[12px] font-medium text-ink">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-5 text-muted">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-paper px-3 py-2 text-[10px] text-muted">
                    <span>Freshdesk event in</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                    <span>evidence-backed close</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="scroll-mt-24 py-16 sm:py-24">
        <div className="shell">
          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="display-2 max-w-[640px]">
                One event. Every path. One owner.
              </h2>
              <p className="lede md:justify-self-end">
                Each step uses the output of the step before it. The ticket keeps
                the record.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <div className="mt-10 rounded-[28px] bg-surface p-4 sm:p-6">
              <div className="grid gap-3 lg:grid-cols-4">
                {stages.map((stage, index) => (
                  <div
                    key={stage.label}
                    className={`relative rounded-[20px] p-5 ${stage.tone}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-ink">
                        {stage.label}
                      </span>
                      <span className="text-[10px] text-muted">{stage.meta}</span>
                    </div>
                    <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-7 text-muted-strong">
                      {stage.body}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[12px] leading-5 text-muted-strong"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {index < stages.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-muted lg:grid"
                      >
                        <span className="h-1.5 w-1.5 rotate-45 border-r border-t border-current" />
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <div className="rounded-[18px] bg-green-soft px-4 py-3">
                  <p className="text-[11px] font-medium text-green-strong">
                    Confidence is high
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#3d7a64]">
                    Customer reply + resolved status
                  </p>
                </div>
                <div className="justify-self-center rounded-full bg-paper px-3 py-1.5 text-[10px] font-medium text-muted">
                  default gate 0.85
                </div>
                <div className="rounded-[18px] bg-accent-soft px-4 py-3">
                  <p className="text-[11px] font-medium text-accent-strong">
                    Confidence is low
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#8a4a2b]">
                    Private note + human queue
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-2 rounded-[18px] bg-console px-4 py-3 text-[10px] text-console-muted sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-3.5 w-3.5 text-console-orange" />
                  Linked child ticket · SLA checks every 15 minutes
                </span>
                <span className="text-console-green">
                  reminders → parent sync → breach escalation
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="resolution" className="scroll-mt-24 py-12 sm:py-20">
        <div className="shell space-y-12 sm:space-y-20">
          <ScrollReveal>
            <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h2 className="display-3 max-w-[430px]">
                  Know what the ticket is asking.
                </h2>
                <p className="mt-5 max-w-[450px] text-[16px] leading-7 text-muted-strong">
                  Support requests arrive as different kinds of work. CogniLogs
                  reads the intent, extracts the details, and runs a prerequisite
                  check before it acts.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Query, issue, or feature request, routed on arrival.",
                    "Missing information becomes one clear question instead of a form.",
                    "Session state keeps the next reply in context.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-soft text-blue-strong">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <RouteBoard />
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:order-2 lg:col-span-5 lg:col-start-8">
                <h2 className="display-3 max-w-[430px]">
                  Do the work. Keep the evidence.
                </h2>
                <p className="mt-5 max-w-[450px] text-[16px] leading-7 text-muted-strong">
                  Queries pull from your knowledge base. Issues run a
                  scenario-specific playbook against logs and product admin APIs.
                  The run records what it checked and what it changed.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "RAG answers carry their sources.",
                    "Diagnostic runs verify what changed and what was fixed.",
                    "Feature requests are checked against the real feature state.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-soft text-green-strong">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 lg:col-span-7 lg:col-start-1">
                <RunBoard />
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h2 className="display-3 max-w-[430px]">
                  Hand off without losing the thread.
                </h2>
                <p className="mt-5 max-w-[450px] text-[16px] leading-7 text-muted-strong">
                  Below the confidence line, the customer does not see a guess.
                  The agent sees the run, the evidence, and the next step. The
                  SLA watch keeps the case from disappearing.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "A private note for the human queue.",
                    "A linked child ticket keeps severity and ownership visible.",
                    "Every 15 minutes, the watch checks for movement.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pink-soft text-pink-strong">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <HandoffBoard />
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section id="connections" className="scroll-mt-24 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="display-2 max-w-[520px]">Freshdesk first.</h2>
              <p className="lede mt-5 max-w-[440px]">
                We are going deep on one inbox before going wide. Freshdesk is
                the first confirmed integration. The other surfaces are in
                design.
              </p>
              <Link
                href="/docs#connections"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
              >
                Read the connector notes
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div data-ui className="rounded-[26px] bg-surface p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Connector map
                  </span>
                  <span className="text-[10px] text-muted">
                    Status, not a promise
                  </span>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {connections.map((connection) => (
                    <div
                      key={connection.name}
                      className="flex items-center justify-between gap-3 rounded-xl bg-paper px-3 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${connection.dot}`} />
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-medium text-ink">
                            {connection.name}
                          </p>
                          <p className="truncate text-[9.5px] text-muted">
                            {connection.status}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-medium ${
                          connection.live
                            ? "bg-green-soft text-green-strong"
                            : "bg-surface text-muted"
                        }`}
                      >
                        {connection.live ? "First" : "Planned"}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] leading-5 text-muted">
                  “Planned” means intended, not shipped. Freshdesk is the first
                  surface CogniLogs is built around. We will label a connector
                  available only when it is.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[26px] bg-surface p-5 sm:p-6">
            <p className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Control stays with your team
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  icon: UserRound,
                  title: "Human override",
                  body: "A person can inspect, change, or take over any automated run.",
                },
                {
                  icon: FileText,
                  title: "Visible work",
                  body: "The ticket keeps the run, sources, and next step in one record.",
                },
                {
                  icon: Gauge,
                  title: "A real threshold",
                  body: "The default line is 0.85. Your team can make it stricter.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                  <div>
                    <p className="text-[15px] font-medium text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[16px] leading-7 text-muted-strong">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DeploymentSection variant="platform" />
      <WaitlistSection />
    </div>
  );
}
