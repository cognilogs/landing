import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About | cognilogs",
  description:
    "cognilogs started with a migration ticket that needed six systems and a day of reconstruction. We built a local-first support agent to do the work behind the reply.",
};

const loopSteps = [
  { label: "Intake", meta: "Any ticketing system", tone: "bg-accent-soft" },
  { label: "Understand", meta: "Intent + gaps", tone: "bg-blue-soft" },
  { label: "Act", meta: "Check, fix, enable", tone: "bg-green-soft" },
  { label: "Decide", meta: "Confidence + review", tone: "bg-pink-soft" },
  { label: "Watch", meta: "SLA + CSAT", tone: "bg-console text-white" },
];

const principles = [
  {
    title: "Resolve before routing.",
    body: "The product earns its place by finishing the work and handing over only what needs a person.",
    tone: "bg-accent",
  },
  {
    title: "Show the evidence.",
    body: "Every answer and every escalation carries the context, sources, and confidence behind it.",
    tone: "bg-blue",
  },
  {
    title: "Keep judgment human.",
    body: "Automation can act, but a person can inspect, override, and sign off on the critical work.",
    tone: "bg-green",
  },
  {
    title: "Close the loop.",
    body: "A reply is one step. Ownership continues through the child ticket, the SLA, and the CSAT.",
    tone: "bg-pink",
  },
  {
    title: "Keep data close.",
    body: "Local deployment puts ticket content, run history, and the model inside the environment you control.",
    tone: "bg-cyan",
  },
  {
    title: "Go deep before wide.",
    body: "Any ticketing system can be polled. The depth of the investigation matters more than the length of the connector list.",
    tone: "bg-violet",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Why we built cognilogs
              </p>
              <h1 className="display-1 mt-5 max-w-[820px]">
                The reply was easy. The answer took a day.
              </h1>
              <p className="lede measure mt-6">
                We kept meeting the same ticket: a migration went out to the
                wrong cohort, a certificate rotated before the metadata was live,
                and a customer was locked out. The reply took five minutes. The
                work behind it took six systems.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <ButtonLink href="/waitlist" size="lg" withArrow>
                  Join the waitlist
                </ButtonLink>
                <a
                  href="mailto:team@cognilogs.com"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  team@cognilogs.com
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div
                data-ui
                className="rounded-[28px] bg-console p-6 text-white sm:p-7"
              >
                <p className="text-[24px] font-medium leading-[1.3] tracking-[-0.035em] text-white sm:text-[28px]">
                  “A reply is only as good as the work behind it.”
                </p>
                <div
                  data-ui
                  className="mt-6 rounded-[16px] bg-white/[0.06] p-3"
                >
                  <div className="flex items-center justify-between gap-3 text-[13px]">
                    <span className="text-white/55">Ticket · #2189</span>
                    <span className="inline-flex items-center gap-1.5 text-console-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      Investigating
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] font-medium text-white">
                    SSO loop after certificate rotation
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] text-white/45">
                    <span className="rounded bg-white/[0.05] px-1.5 py-0.5">
                      audit log
                    </span>
                    <span className="rounded bg-white/[0.05] px-1.5 py-0.5">
                      cohort query
                    </span>
                    <span className="rounded bg-white/[0.05] px-1.5 py-0.5">
                      RCA review
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 text-[13px] text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Evidence attached, with a person able to take over.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-3 max-w-[460px]">From ticket to truth.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-[680px] space-y-5 text-[16px] leading-8 text-muted-strong sm:text-[17px]">
                <p>
                  The first version of this idea came from a support team we
                  worked with during a messy migration. A rollout email had gone
                  to a cohort that was not in the pilot. Some customers could
                  sign in to the new workspace; some could not. The support lead
                  had a queue full of angry tickets and no single place that
                  showed what had actually happened.
                </p>
                <p>
                  The answer was spread across an identity provider, a rollout
                  job, a database, a feature flag, and a code path. The team spent
                  a day reconstructing the timeline while customers waited. The
                  reply itself was the smallest part of the job.
                </p>
                <p>
                  We built cognilogs around that middle. It polls any ticketing
                  system, reads the request, checks the places an engineer would
                  check, and either resolves the work or hands it over with the
                  evidence attached. It can enable features through an API or a
                  browser, draft an RCA for human review, and watch the child
                  ticket until it closes.
                </p>
                <p>
                  We run it locally because support data is sensitive and model
                  choice matters. You choose the model and the infrastructure.
                  Stronger models produce better work; the evidence, approval,
                  and audit rules stay the same.
                </p>
              </div>
              <p className="mt-6 text-[14px] leading-6 text-muted">
                cognilogs is early. We are building with a small group of teams
                and will publish real outcomes when they exist.
              </p>
            </div>
          </div>

          <ScrollReveal className="mt-10">
            <div data-ui className="rounded-[26px] bg-surface p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-muted">
                <span className="inline-flex items-center gap-2 font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  One ticket, one loop
                </span>
                <span>Ticketing event → close</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {loopSteps.map((step, index) => (
                  <div
                    key={step.label}
                    className={`rounded-[16px] p-3 ${step.tone}`}
                  >
                    <span
                      className={`text-[13px] tabular-nums ${
                        step.label === "Watch" ? "text-white/45" : "text-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p
                      className={`mt-3 text-[13px] font-medium leading-5 ${
                        step.label === "Watch" ? "text-white" : "text-ink"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p
                      className={`mt-1 text-[13px] leading-5 ${
                        step.label === "Watch" ? "text-white/55" : "text-muted"
                      }`}
                    >
                      {step.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <h2 className="display-2 max-w-[600px]">What we believe.</h2>
          <div className="mt-10 grid gap-x-14 gap-y-9 sm:grid-cols-2">
            {principles.map((principle) => (
              <ScrollReveal key={principle.title}>
                <div className="flex gap-4">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${principle.tone}`}
                  />
                  <div>
                    <h3 className="text-[22px] font-medium tracking-[-0.03em] text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-[420px] text-[16px] leading-7 text-muted-strong">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display-2 max-w-[460px]">Where we are now.</h2>
              <p className="mt-5 max-w-[400px] text-[16px] leading-7 text-muted-strong">
                The product is in preview. Here is what is built, what is next,
                and what we are still working through.
              </p>
              <ButtonLink
                href="/docs"
                variant="secondary"
                size="md"
                className="mt-6"
                withArrow
              >
                Read the product guide
              </ButtonLink>

              <div
                data-ui
                className="mt-6 rounded-[22px] bg-console p-4 text-white"
              >
                <div className="flex items-center justify-between gap-3 text-[13px]">
                  <span className="text-white/55">Run · ticket 2189</span>
                  <span className="inline-flex items-center gap-1.5 text-console-green">
                    <Check className="h-3.5 w-3.5" />
                    0.93
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-[13px] leading-5">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Intent</span>
                    <span>Issue · identity</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Evidence</span>
                    <span>Audit + code + cohort</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Action</span>
                    <span>Metadata restored</span>
                  </div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-console-green">
                  <Check className="h-3.5 w-3.5" />
                  Above threshold · RCA in review
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-[13px] text-white/55">
                  <span>SLA watch · 15m</span>
                  <span>Child ticket linked</span>
                </div>
              </div>
            </div>

            <ScrollReveal className="lg:col-span-7">
              <div data-ui className="rounded-[26px] bg-surface p-5 sm:p-6">
                <div className="grid gap-7 sm:grid-cols-3">
                  <div>
                    <h3 className="inline-flex items-center gap-1.5 text-[13px] font-medium text-green-strong">
                      <Check className="h-4 w-4" />
                      In the loop
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[14px] leading-6 text-muted-strong">
                      <li>Any ticketing system</li>
                      <li>Intent + prerequisite checks</li>
                      <li>Audit, code, and database checks</li>
                      <li>Feature enablement with approval</li>
                      <li>Confidence gate</li>
                      <li>Child ticket + SLA watch</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-strong">
                      <Sparkles className="h-4 w-4" />
                      Next
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[14px] leading-6 text-[#3f5377]">
                      <li>More local model profiles</li>
                      <li>Deeper admin actions</li>
                      <li>More approval paths</li>
                      <li>Broader connector coverage</li>
                      <li>More design-partner playbooks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-strong">
                      <Minus className="h-4 w-4" />
                      In progress
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[14px] leading-6 text-[#7a3f24]">
                      <li>Security review pack</li>
                      <li>Certification program</li>
                      <li>Outcome benchmarks</li>
                      <li>Public pricing detail</li>
                      <li>More deployment guides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="shell">
          <div className="rounded-[32px] bg-accent px-6 py-12 text-accent-ink sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="max-w-[720px] text-[34px] font-semibold leading-[1.05] tracking-[-0.05em] sm:text-[46px]">
                  Zero avoidable handoffs.
                </h2>
                <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-accent-ink">
                  The work that needs a person still reaches one. We remove the
                  handoffs that exist only because the system lacked context.
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Link
                  href="/waitlist"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-accent-ink px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-black"
                >
                  Build it with us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
