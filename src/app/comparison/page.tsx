import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, ShieldCheck, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Compare | cognilogs",
  description:
    "A category comparison of reply-only assistants, workflow builders, and cognilogs: the work before the reply, local deployment, feature enablement, RCA review, and child-ticket SLA watch.",
};

const rows = [
  {
    label: "Ticketing coverage",
    reply: "Replies in the inbox it supports",
    workflow: "Rules across connected tools",
    cognilogs: "Polls any ticketing system on your interval",
  },
  {
    label: "Request types",
    reply: "Questions and drafts",
    workflow: "Configured rules and macros",
    cognilogs: "Queries, issues, and feature enablement in one loop",
  },
  {
    label: "Investigation",
    reply: "Knowledge base only",
    workflow: "Configured API calls",
    cognilogs: "Audit logs, codebase, databases, Kibana, Sentry, Datadog",  },
  {
    label: "Action",
    reply: "Draft or send a reply",
    workflow: "Prebuilt actions",
    cognilogs: "API or browser automation, with approval where required",
  },
  {
    label: "RCA",
    reply: "Not part of the flow",
    workflow: "Usually a separate process",
    cognilogs: "Drafted from the run, always reviewed by a person",
  },
  {
    label: "SLA",
    reply: "Ticket rules, if any",
    workflow: "Workflow timers",
    cognilogs: "Child-ticket tracker, Slack/email, manager escalation",
  },
  {
    label: "Deployment",
    reply: "Vendor cloud",
    workflow: "Vendor cloud",
    cognilogs: "Local, inside your network, with any local model",
  },
  {
    label: "Audit",
    reply: "Limited transcript",
    workflow: "Rule execution logs",
    cognilogs: "Tool calls, browser actions, approvals, and replies",
  },
];

export default function ComparisonPage() {
  return (
    <div>
      <section className="pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Compare approaches
              </p>
              <h1 className="display-1 mt-5 max-w-[840px]">
                A different layer, not another reply tool.
              </h1>
              <p className="lede measure mt-5">
                Reply assistants make the message easier to write. Workflow
                builders automate the steps you already know. cognilogs does the
                work between the ticket and the resolution.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="rounded-[22px] bg-surface p-4">
                <p className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
                  <ShieldCheck className="h-4 w-4 text-accent-strong" />
                  Read this as categories
                </p>
                <p className="mt-2 text-[12px] leading-5 text-muted">
                  This is not a vendor scorecard. Products in the same category
                  can differ by deployment, model, and configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="shell">
          <div className="overflow-hidden rounded-[26px] border border-line/80 bg-surface">
            <div className="hidden grid-cols-[1.1fr_1fr_1fr_1.25fr] gap-3 bg-paper px-4 py-3 text-[10px] font-medium text-muted md:grid">
              <span>Capability</span>
              <span>Reply-only assistants</span>
              <span>Workflow builders</span>
              <span className="text-ink">cognilogs</span>
            </div>
            {rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid gap-2 px-4 py-4 md:grid-cols-[1.1fr_1fr_1fr_1.25fr] md:items-start md:gap-3 ${
                  index > 0 ? "border-t border-line/70" : ""
                }`}
              >
                <p className="text-[12px] font-medium text-ink">{row.label}</p>
                <div className="flex items-start gap-1.5 text-[11px] leading-5 text-muted">
                  <Minus className="mt-1 h-3 w-3 shrink-0 text-line-strong" />
                  {row.reply}
                </div>
                <div className="flex items-start gap-1.5 text-[11px] leading-5 text-muted">
                  <Minus className="mt-1 h-3 w-3 shrink-0 text-line-strong" />
                  {row.workflow}
                </div>
                <div className="flex items-start gap-1.5 rounded-lg bg-accent-soft px-2.5 py-1.5 text-[11px] leading-5 text-[#7a4b31]">
                  <Check className="mt-1 h-3 w-3 shrink-0 text-accent-strong" />
                  {row.cognilogs}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] leading-5 text-muted">
            “Reply-only assistants” and “workflow builders” describe product
            categories, not specific vendors. Availability of any capability
            depends on the deployment and the permissions you grant.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "The reply is one step.",
                body: "The value is in the audit log, the database query, the code path, and the approval that make the reply true.",
              },
              {
                title: "Local is the default.",
                body: "Your ticketing data and run history stay in your environment. You choose the model, including local and open-weight models.",
              },
              {
                title: "A person signs the critical work.",
                body: "Confidence gates routine replies. RCAs, sensitive enablement, and out-of-scope fixes keep a human in the loop.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="h-full rounded-[24px] bg-surface p-6">
                  <Sparkles className="h-5 w-5 text-accent-strong" />
                  <h2 className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-6 text-muted">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="shell">
          <div className="flex flex-col gap-5 rounded-[28px] bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[32px]">
                See the difference on one ticket.
              </h2>
              <p className="mt-2 max-w-[560px] text-[14px] leading-6 text-muted">
                Bring a ticket that crosses systems. We will show you the
                evidence, the decision, and the handoff.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/waitlist" size="md" withArrow>
                Join the waitlist
              </ButtonLink>
              <Link
                href="/pricing"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-5 text-[14px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface-muted"
              >
                See pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
