import {
  ArrowRight,
  Check,
  Clock3,
  Code2,
  Database,
  FileCode2,
  FileText,
  Gauge,
  Globe2,
  LockKeyhole,
  MessageSquareText,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function InvestigationSection() {
  return (
    <section id="investigation" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 className="display-2 max-w-[700px]">
              It checks the places your team checks.
            </h2>
            <p className="lede md:justify-self-end">
              A reply is only as good as the evidence behind it. The agent reads
              audit logs, searches the codebase, runs database queries, and
              follows the trace through Kibana, Sentry, or Datadog.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-12">
          <ScrollReveal className="min-w-0 lg:col-span-7">
            <div
              data-ui
              className="h-full overflow-hidden rounded-[26px] bg-console p-5 text-console-text sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] text-console-muted">
                  <Terminal className="h-3.5 w-3.5" />
                  Investigation run #184
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-console-green/10 px-2 py-1 text-[9px] text-console-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-console-green" />
                  live
                </span>
              </div>

              <div className="mt-5 space-y-2.5 font-mono text-[10.5px] leading-5 sm:text-[11px]">
                <p className="text-console-green">$ audit.events --actor svc-sso</p>
                <p className="text-white/55">certificate.rotated 04:12 · metadata.publish 04:19</p>
                <p className="text-console-green">$ codebase.search metadata.publish</p>
                <p className="text-white/55">services/sso/metadata.ts:88 · legacy plan field</p>
                <p className="text-console-green">$ db.query cohort_members --job 8841</p>
                <p className="text-white/55">42 rows · 12 outside pilot · 30 expected</p>
                <p className="text-console-orange">$ sentry.issue login.loop --since 04:20</p>
                <p className="text-white/55">38 events · finance workspace · first seen 04:21</p>
              </div>

              <div className="mt-5 flex flex-col gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[10px] text-console-muted sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
                  Evidence attached to the run
                </span>
                <span className="text-console-green">4 sources · read-only first</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:col-span-5">
            {[
              {
                icon: FileCode2,
                title: "Audit logs",
                body: "Who changed what, when, and from where.",
                meta: "IdP · admin · rollout",
              },
              {
                icon: Code2,
                title: "Codebase",
                body: "The code path that explains the behavior.",
                meta: "GitHub · GitLab",
              },
              {
                icon: Database,
                title: "Databases",
                body: "The row that proves the state.",
                meta: "Postgres · MySQL · warehouse",
              },
              {
                icon: Gauge,
                title: "Observability",
                body: "The error, trace, and timing around it.",
                meta: "Kibana · Sentry · Datadog",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 0.03}
                className="min-w-0"
              >
                <div className="h-full rounded-[20px] bg-surface p-4 sm:p-5">
                  <item.icon className="h-5 w-5 text-accent-strong" />
                  <p className="mt-4 text-[16px] font-medium text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-6 text-muted">
                    {item.body}
                  </p>
                  <p className="mt-3 text-[10px] text-muted">{item.meta}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-3 flex flex-col gap-2 rounded-[18px] bg-surface px-4 py-3 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2">
              <Timer className="h-3.5 w-3.5 text-accent-strong" />
              The agent can handle five to ten tickets at once, depending on the
              depth of each investigation.
            </span>
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent-strong"
            >
              See the full loop
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FeatureEnablementSection() {
  return (
    <section id="feature-enablement" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-2 max-w-[520px]">
              Enable the feature, with permission.
            </h2>
            <p className="lede mt-5 max-w-[440px]">
              A feature request should not end with “we will pass it to the
              product team.” cognilogs can check the feature state, request
              approval, then enable it through an API or by using the browser.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "API enablement when the admin surface exposes one.",
                "Browser automation when the only path is a screen.",
                "Approval loops for sensitive or high-impact features.",
                "A reply with the change and the permission trail.",
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
            <p className="mt-5 text-[13px] leading-6 text-muted">
              Permissions stay scoped to the workflow. The agent records every
              click, API call, and approval.
            </p>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.04}>
            <div data-ui className="rounded-[26px] bg-surface p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-medium text-ink">
                  Feature enablement
                </p>
                <span className="rounded-full bg-pink-soft px-2 py-1 text-[9px] font-medium text-pink-strong">
                  Approval required
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-[18px] bg-paper p-4">
                  <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink">
                    <Code2 className="h-3.5 w-3.5 text-blue-strong" />
                    API path
                  </p>
                  <div className="mt-3 space-y-2 font-mono text-[10px] leading-5">
                    <p className="text-blue-strong">$ feature.state --flag scim</p>
                    <p className="text-muted">disabled · plan enterprise</p>
                    <p className="text-blue-strong">$ feature.enable --cohort 42</p>
                    <p className="text-green-strong">enabled · audit 7f3a</p>
                  </div>
                </div>
                <div className="rounded-[18px] bg-paper p-4">
                  <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink">
                    <MousePointerClick className="h-3.5 w-3.5 text-accent-strong" />
                    Browser path
                  </p>
                  <div className="mt-3 rounded-xl border border-line bg-surface p-3">
                    <div className="flex items-center gap-1.5 border-b border-line pb-2 text-[9px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-red" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      <span className="ml-1 truncate">admin.internal/cohorts</span>
                    </div>
                    <div className="mt-2 space-y-1.5 text-[9px] text-muted">
                      <p className="rounded bg-paper px-2 py-1">Settings → Access</p>
                      <p className="rounded bg-paper px-2 py-1">SCIM provisioning</p>
                      <p className="rounded bg-pink-soft px-2 py-1 text-pink-strong">
                        Enable for cohort 42
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {[
                  { icon: UserRoundCheck, label: "Approver", meta: "security owner" },
                  { icon: Clock3, label: "Waiting", meta: "approval window" },
                  { icon: Check, label: "Enabled", meta: "customer replied" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2.5"
                  >
                    <step.icon className="h-3.5 w-3.5 shrink-0 text-accent-strong" />
                    <div>
                      <p className="text-[10px] font-medium text-ink">{step.label}</p>
                      <p className="text-[9px] text-muted">{step.meta}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-center gap-2 rounded-xl bg-console px-3 py-2.5 text-[10px] text-console-muted">
                <LockKeyhole className="h-3.5 w-3.5 text-console-green" />
                Every API call and click is recorded for audit.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function RcaSection() {
  return (
    <section id="rca" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-2 max-w-[520px]">
              The RCA writes itself. A person signs it.
            </h2>
            <p className="lede mt-5 max-w-[440px]">
              When an issue needs a root cause analysis, cognilogs assembles the
              timeline, the evidence, the impact, and the fix. It never sends an
              RCA without human review.
            </p>
            <div className="mt-7 rounded-[20px] bg-accent-soft p-4">
              <p className="inline-flex items-center gap-2 text-[12px] font-medium text-accent-strong">
                <FileText className="h-4 w-4" />
                Draft · not sent
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[#7a4b31]">
                Critical documents keep a human in the loop even when confidence
                is high.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.04}>
            <div data-ui className="overflow-hidden rounded-[26px] bg-surface">
              <div className="flex items-center justify-between gap-3 border-b border-line/80 px-5 py-4">
                <div>
                  <p className="text-[10px] text-muted">Incident · INC-2189</p>
                  <p className="mt-1 text-[16px] font-medium text-ink">
                    SSO login loop after certificate rotation
                  </p>
                </div>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[9px] font-medium text-accent-strong">
                  Human review
                </span>
              </div>
              <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
                {[
                  {
                    title: "Timeline",
                    body: "04:12 certificate rotated · 04:19 metadata published · 04:21 login loop begins",
                  },
                  {
                    title: "Impact",
                    body: "42 finance accounts · 38 login loop events · 12 accounts outside the pilot cohort",
                  },
                  {
                    title: "Root cause",
                    body: "The metadata publish step used the legacy plan field; the client cache expired before the new certificate was live.",
                  },
                  {
                    title: "Fix and prevention",
                    body: "Metadata restored, rollout paused, cohort filter patched, staging verification passed.",
                  },
                ].map((section) => (
                  <div key={section.title} className="rounded-xl bg-paper p-3.5">
                    <p className="text-[10px] font-medium text-muted">
                      {section.title}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-5 text-ink/80">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 border-t border-line/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] text-muted">
                  <Sparkles className="h-3.5 w-3.5 text-accent-strong" />
                  Drafted from 5 evidence sources
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[10px] font-medium text-white">
                  <UserRoundCheck className="h-3 w-3" />
                  Review and sign
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SlaTrackerSection() {
  return (
    <section id="sla" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-2 max-w-[520px]">
              Every child ticket stays on the clock.
            </h2>
            <p className="lede mt-5 max-w-[440px]">
              Escalations create linked child tickets. Each one enters an SLA
              tracker by severity and priority, and the watch keeps going until
              someone moves it.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "The current owner is notified by Slack or email.",
                "After three notifications, the manager is brought in.",
                "Child resolution is checked for a customer-safe answer.",
                "A CSAT request can follow a successful resolution and is customizable per deployment.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow-soft text-[#8a5a09]">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.04}>
            <div data-ui className="rounded-[26px] bg-surface p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
                  <Timer className="h-4 w-4 text-accent-strong" />
                  SLA tracker
                </p>
                <span className="rounded-full bg-red-soft px-2 py-1 text-[9px] font-medium text-red-strong">
                  1 breach risk
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  {
                    ticket: "#4910 · Verify IdP metadata",
                    owner: "Identity team",
                    severity: "P1",
                    time: "2h 14m",
                    tone: "bg-red-soft text-red-strong",
                  },
                  {
                    ticket: "#4911 · Patch cohort filter",
                    owner: "Platform",
                    severity: "P2",
                    time: "5h 02m",
                    tone: "bg-yellow-soft text-[#8a5a09]",
                  },
                  {
                    ticket: "#4912 · Customer reply QA",
                    owner: "Support",
                    severity: "P2",
                    time: "8h 40m",
                    tone: "bg-green-soft text-green-strong",
                  },
                ].map((row) => (
                  <div
                    key={row.ticket}
                    className="grid gap-2 rounded-xl bg-paper px-3 py-3 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium text-ink">
                        {row.ticket}
                      </p>
                      <p className="mt-0.5 text-[9px] text-muted">{row.owner}</p>
                    </div>
                    <span className={`w-fit rounded-full px-2 py-1 text-[9px] font-medium ${row.tone}`}>
                      {row.severity}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted">
                      <Clock3 className="h-3 w-3" />
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-2 rounded-xl bg-console px-3 py-2.5 text-[10px] text-console-muted sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2">
                  <MessageSquareText className="h-3.5 w-3.5 text-console-orange" />
                  3 notifications · Slack + email
                </span>
                <span className="text-console-green">manager next</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function AuditSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-8 rounded-[28px] bg-console p-6 text-white sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[12px] font-medium text-white/55">
              <ShieldCheck className="h-4 w-4 text-console-green" />
              Audit and compliance
            </p>
            <h2 className="display-2 mt-4 max-w-[620px] text-white">
              Every action is traceable.
            </h2>
            <p className="mt-4 max-w-[600px] text-[16px] leading-7 text-white/55">
              Model reasoning, tool calls, browser actions, approvals, replies,
              and child-ticket updates are recorded. Your team can review what
              happened, not just what the model said.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid gap-2">
              {[
                ["Tool calls", "read-only first"],
                ["Browser actions", "click + field trace"],
                ["Approvals", "who signed, when"],
                ["Replies", "source attached"],
              ].map(([label, meta]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-[11px]"
                >
                  <span className="inline-flex items-center gap-2 text-white/75">
                    <Globe2 className="h-3.5 w-3.5 text-console-green" />
                    {label}
                  </span>
                  <span className="text-[9px] text-white/35">{meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
