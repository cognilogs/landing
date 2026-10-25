import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import ButtonLink from "@/components/ui/ButtonLink";
import { BrandMark, evidenceBrands, modelBrands, ticketingBrands } from "@/components/ui/BrandLogos";
import {
  ArrowRight,
  Check,
  Cpu,
  FileText,
  Gauge,
  MessageSquareText,
  ShieldCheck,
  Timer,
  UserRound,
} from "lucide-react";
import { breadcrumb } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Deployment and operations guide | cognilogs",
  description:
    "How cognilogs runs inside your network: ticketing, local models, audit logs, feature enablement, RCA review, and SLA notifications.",
  path: "/docs/",
});

const sidebarLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#ticketing", label: "Ticketing systems" },
  { href: "#loop", label: "The loop" },
  { href: "#deployment", label: "Deployment and models" },
  { href: "#confidence", label: "Confidence and review" },
  { href: "#sla", label: "SLA and notifications" },
  { href: "#audit", label: "Audit and security" },
  { href: "#connections", label: "Connections" },
  { href: "#operating-notes", label: "Operating notes" },
];

const overviewLoop = [
  { label: "Ticket event", color: "bg-accent" },
  { label: "Intent", color: "bg-blue" },
  { label: "Evidence", color: "bg-green" },
  { label: "Decision", color: "bg-violet" },
  { label: "Reply or child ticket", color: "bg-pink" },
  { label: "SLA + CSAT", color: "bg-yellow" },
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
      <JsonLd data={breadcrumb("/docs/", "Docs")} />
      <div className="shell pb-20 pt-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[12px] font-medium text-muted">
                Operations guide
              </p>
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
                How the loop runs.
              </h1>
              <p className="lede mt-5 max-w-[650px]">
                A ticket is a piece of work with a lifecycle: intake,
                understanding, evidence, a decision, and ownership until it
                closes. This guide covers the deployment model and the operating
                rules behind that loop.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Product preview
                </span>
                <span>October 2026</span>
                <span>Local deployment</span>
                <span>Any ticketing system</span>
                <span>Any local model</span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ButtonLink href="/waitlist" ariaLabel="Join the waitlist">
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  See the full loop
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
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
                  cognilogs polls the ticketing system your team already runs.
                  It reads the request, decides what kind of work it is, gathers
                  the evidence needed, and either resolves the ticket or prepares
                  a complete human handoff.
                </p>
                <p>
                  The loop does not end at a suggested reply. It continues
                  through the confidence decision, the child ticket, the SLA
                  watch, the customer reply, and the CSAT request.
                </p>
                <div className="mt-6 rounded-[22px] bg-surface p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {overviewLoop.map((step, index) => (
                      <span
                        key={step.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1.5 text-[11px] font-medium text-ink"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${step.color}`} />
                        {step.label}
                        {index < overviewLoop.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-line-strong" />
                        )}
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
              </Section>

              <Section id="ticketing" title="Any ticketing system.">
                <p>
                  cognilogs is not tied to one help desk. A scheduler polls the
                  ticketing system you use on the interval you set, from every
                  five minutes to every hour. New and replied tickets arrive with
                  the thread, customer, and SLA context. The content is sanitized
                  before the model sees it.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ticketingBrands.map((brand) => (
                    <span
                      key={brand.name}
                      title={brand.name}
                      className="grid h-9 w-9 place-items-center rounded-[11px] border border-line bg-surface"
                    >
                      <BrandMark brand={brand} className="h-[18px] w-[18px]" />
                    </span>
                  ))}
                </div>
                <Callout tone="green">
                  <strong className="font-medium text-green-strong">
                    Your ticketing system stays the system of record.
                  </strong>{" "}
                  Replies, private notes, statuses, and linked child tickets
                  remain in the tool your team already uses.
                </Callout>
              </Section>

              <Section id="loop" title="The three paths.">
                <p>
                  The classifier chooses the path before any tool runs. Each path
                  has its own evidence standard and its own definition of done.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    {
                      name: "Query",
                      dot: "bg-blue",
                      body: "Retrieve the closest knowledge passages from official docs, internal notes, and previous agent replies. Draft an answer with the sources attached, then score the confidence.",
                      outcome: "Customer answer",
                    },
                    {
                      name: "Issue",
                      dot: "bg-green",
                      body: "Read audit logs, search the codebase, query the database, and check Kibana, Sentry, or Datadog. Fix what is in scope, verify the result, and open a child ticket for the rest.",
                      outcome: "Resolution or complete handoff",
                    },
                    {
                      name: "Feature enablement",
                      dot: "bg-pink",
                      body: "Check the real feature state. Use an API or browser automation to enable it, with an approval loop where the change is sensitive. Reply with the change and the permission trail.",
                      outcome: "Enabled feature + customer reply",
                    },
                  ].map((path) => (
                    <div key={path.name} className="rounded-[20px] bg-surface p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${path.dot}`} />
                        <p className="text-[14px] font-medium text-ink">{path.name}</p>
                        <span className="ml-auto text-[10px] text-muted">
                          {path.outcome}
                        </span>
                      </div>
                      <p className="mt-2 max-w-[620px] text-[13px] leading-6 text-muted">
                        {path.body}
                      </p>
                    </div>
                  ))}
                </div>
                <p>
                  The agent handles five to ten tickets at a time, depending on
                  the complexity of the investigation and the time each check
                  takes.
                </p>
              </Section>

              <Section id="deployment" title="Deployment and models.">
                <p>
                  The first deployment target is local. cognilogs runs on your
                  servers or inside your network. The app, the SLA worker, and
                  the run history stay in the environment you control.
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
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink">
                      <Cpu className="h-3.5 w-3.5 text-accent-strong" />
                      Any local model
                    </p>
                    <p className="mt-3 text-[13px] leading-5 text-muted">
                      Run the model your infrastructure can serve, including
                      open-weight models. Stronger models produce better work.
                      The evidence, approval, and audit rules stay the same.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {modelBrands.map((brand) => (
                        <span
                          key={brand.name}
                          title={brand.name}
                          className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-paper"
                        >
                          <BrandMark brand={brand} className="h-4 w-4" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p>
                  Your team controls host access, network access, backups, and
                  retention. We agree on the support and upgrade model before
                  deployment.
                </p>
              </Section>

              <Section id="confidence" title="Confidence and human review.">
                <p>
                  Every path ends at the confidence evaluator. The default
                  threshold is <strong className="font-medium text-ink">0.85</strong>.
                  Above it, cognilogs can reply and resolve. Below it, the
                  customer does not receive the draft.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-[20px] bg-green-soft p-4">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-green-strong">
                      <Check className="h-3.5 w-3.5" />
                      High confidence
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-[#3d7a64]">
                      Reply, resolve, and keep the sources attached.
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
                <Callout tone="accent">
                  <strong className="font-medium text-accent-strong">
                    RCA documents always get human review.
                  </strong>{" "}
                  Even when confidence is high, the root cause analysis is a
                  critical customer document. A person signs it before it leaves.
                </Callout>
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

              <Section id="sla" title="SLA and notifications.">
                <p>
                  If a case needs a person, cognilogs creates a linked child
                  ticket, records severity and priority, and registers the case
                  with the SLA tracker. A background worker checks open child
                  tickets every 15 minutes.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-4">
                  {[
                    ["Open", "Child ticket linked", "Severity recorded"],
                    ["Sync", "Parent note updated", "Every internal change"],
                    ["Remind", "Slack + email", "Nudges before breach"],
                    ["Escalate", "Manager alerted", "After 3 notifications"],
                  ].map(([title, line1, line2]) => (
                    <div key={title} className="rounded-[18px] bg-surface p-4">
                      <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-accent" />
                      <p className="text-[13px] font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">{line1}</p>
                      <p className="text-[11px] leading-5 text-muted">{line2}</p>
                    </div>
                  ))}
                </div>
                <Callout tone="dark">
                  When the child ticket is resolved, cognilogs checks whether the
                  answer can be shared with the customer. If it can, it drafts
                  the reply. A CSAT request can follow a successful resolution.
                </Callout>
              </Section>

              <Section id="audit" title="Audit and security.">
                <p>
                  Model reasoning, tool calls, browser actions, approvals,
                  replies, and child-ticket updates are recorded. Your team can
                  review what happened, not just what the model said.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    ["Tool calls", "Read-only first, with a record of each check."],
                    ["Browser actions", "Clicks and field changes are traced."],
                    ["Approvals", "Who signed, when, and for which change."],
                    ["Replies", "The source and confidence stay attached."],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-[18px] bg-surface p-4">
                      <p className="text-[12px] font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">{body}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Security review is part of deployment. We provide documentation
                  and describe which controls belong to your team and which belong
                  to us. Certification work is in progress.
                </p>
              </Section>

              <Section id="connections" title="Connections.">
                <p>
                  The ticketing system is the system of record. The evidence layer
                  reads the tools your team already trusts. Actions can use an API
                  or the browser when that is the only path.
                </p>
                <div className="mt-5 space-y-2">
                  {[
                    { label: "Ticketing", brands: ticketingBrands },
                    { label: "Evidence and actions", brands: evidenceBrands },
                    { label: "Local models", brands: modelBrands },
                  ].map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col gap-2 rounded-[18px] bg-surface p-3 sm:flex-row sm:items-center"
                    >
                      <span className="w-[150px] shrink-0 text-[11px] font-medium text-muted">
                        {group.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.brands.map((brand) => (
                          <span
                            key={`${group.label}-${brand.name}`}
                            title={brand.name}
                            className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-paper"
                          >
                            <BrandMark brand={brand} className="h-4 w-4" />
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p>
                  Availability depends on the deployment and the permissions you
                  grant. Logos are the property of their respective owners.
                </p>
              </Section>

              <Section id="operating-notes" title="Operating notes.">
                <div className="rounded-[24px] bg-surface p-5 sm:p-6">
                  <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {[
                      {
                        icon: ShieldCheck,
                        title: "The ticket stays the record.",
                        body: "Replies, private notes, statuses, and linked child tickets remain in the ticketing system.",
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
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                        <div>
                          <p className="text-[14px] font-medium text-ink">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[12px] leading-5 text-muted">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] text-muted">
                  This guide describes the product workflow and the local
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
                  We are onboarding local deployments in small groups.
                </p>
              </div>
              <ButtonLink href="/waitlist" ariaLabel="Join the waitlist">
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
