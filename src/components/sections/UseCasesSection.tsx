import {
  ArrowRight,
  BadgeCheck,
  Check,
  Database,
  FileCode2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cases = [
  {
    kicker: "B2B SaaS",
    title: "SSO and provisioning failures",
    ticket:
      "“Contractor SCIM provisioning failed for 38 users after we changed plans. Payroll starts Monday.”",
    body: "The agent reads the identity provider audit trail, checks the entitlement record, and searches the provisioning code path. It fixes what it can, opens a child ticket for the rest, and tells the customer what changed.",
    checks: ["IdP audit log", "Entitlement database", "Provisioning code"],
    tone: "bg-blue-soft",
    accent: "bg-blue",
  },
  {
    kicker: "Fintech",
    title: "Payments that disagree",
    ticket:
      "“The payout batch says failed, but the ledger shows settled for 12 customers. Finance is asking for a reconciliation.”",
    body: "The agent queries the payment and ledger tables, checks the provider webhook trail, and verifies the settlement state. A human reviews the RCA before the customer sees it.",
    checks: ["Ledger query", "Webhook events", "RCA review"],
    tone: "bg-green-soft",
    accent: "bg-green",
  },
  {
    kicker: "Enterprise migrations",
    title: "The wrong cohort got the message",
    ticket:
      "“A migration email went to 1,200 accounts outside the pilot. Some users now see the new workspace and cannot get back.”",
    body: "The agent checks the rollout job, the cohort query, and the feature flag state. It pauses the job, drafts the correction, and routes the access exceptions to the right team.",
    checks: ["Rollout audit", "Cohort query", "Feature flag"],
    tone: "bg-accent-soft",
    accent: "bg-accent",
  },
  {
    kicker: "Internal IT",
    title: "Access on day one",
    ticket:
      "“Our new hires cannot get into payroll. The ticket says access was granted, but the app still shows pending.”",
    body: "The agent checks the identity provider, the approval record, and the admin panel. When a click is required, it can use browser automation to finish the enablement and reply with the result.",
    checks: ["Identity provider", "Approval record", "Browser action"],
    tone: "bg-pink-soft",
    accent: "bg-pink",
  },
  {
    kicker: "E-commerce",
    title: "Order, payment, and delivery disagree",
    ticket:
      "“The order says delivered, the payment says refunded, and the customer has neither the product nor the money.”",
    body: "The agent reads the order database, the payment provider, and the fulfillment events. It finds the handoff that failed, opens the right internal ticket, and gives the customer a clear next step.",
    checks: ["Order database", "Payment provider", "Fulfillment events"],
    tone: "bg-violet-soft",
    accent: "bg-violet",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="scroll-mt-24 pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <h2 className="display-2 max-w-[700px]">
              For the tickets that take a team.
            </h2>
            <p className="lede measure-tight md:justify-self-end">
              The easy questions are already handled by macros. cognilogs is
              built for the work that needs a log, a database, a code path, and
              a person who can approve the outcome.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {cases.map((useCase, index) => (
            <ScrollReveal
              key={useCase.title}
              delay={index * 0.03}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <article
                className={`h-full rounded-[26px] p-6 sm:p-7 ${useCase.tone} ${
                  index === 0 ? "lg:grid lg:grid-cols-12 lg:gap-10" : ""
                }`}
              >
                <div className={index === 0 ? "lg:col-span-5" : ""}>
                  <p className="inline-flex items-center gap-2 text-[12px] font-medium text-muted-strong">
                    <span className={`h-1.5 w-1.5 rounded-full ${useCase.accent}`} />
                    {useCase.kicker}
                  </p>
                  <h3 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[32px]">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-muted-strong">
                    {useCase.body}
                  </p>
                  <Link
                    href="/waitlist"
                    className="group mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-colors hover:text-accent-strong"
                  >
                    Bring this to your queue
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className={index === 0 ? "mt-6 lg:col-span-7 lg:mt-0" : "mt-6"}>
                  <div
                    data-ui
                    className="rounded-[20px] border border-white/60 bg-white/65 p-4"
                  >
                    <div className="flex items-center gap-2 text-[10px] text-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${useCase.accent}`} />
                      Example ticket
                    </div>
                    <p className="mt-2 text-[13px] font-medium leading-6 text-ink">
                      {useCase.ticket}
                    </p>
                  </div>

                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    {useCase.checks.map((check) => (
                      <div
                        key={check}
                        className="flex items-center gap-2 rounded-xl bg-white/55 px-3 py-2.5 text-[11px] text-ink"
                      >
                        <Check className="h-3 w-3 shrink-0 text-green-strong" />
                        {check}
                      </div>
                    ))}
                  </div>

                  {index === 0 && (
                    <div className="mt-2 flex items-center gap-3 rounded-xl bg-console px-3 py-2.5 text-[10px] text-console-muted">
                      <FileCode2 className="h-3.5 w-3.5 text-console-orange" />
                      <span className="min-w-0 flex-1 truncate">
                        codebase.search onboarding.provision
                      </span>
                      <Database className="h-3.5 w-3.5 text-console-green" />
                      <span className="truncate">db.query entitlements</span>
                      <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 flex flex-col gap-5 rounded-[24px] border border-line/80 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" />
              <div>
                <p className="text-[15px] font-medium text-ink">
                  Simple questions still get handled.
                </p>
                <p className="mt-1 max-w-[620px] text-[14px] leading-6 text-muted">
                  Repetitive questions are the easy part. The product earns its
                  place on the tickets that need investigation, a safe action,
                  and a clean handoff.
                </p>
              </div>
            </div>
            <Link
              href="/features"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
            >
              See the product
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
