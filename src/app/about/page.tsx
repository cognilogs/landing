import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About | CogniLogs",
  description:
    "CogniLogs is building local-first support automation for Freshdesk teams. It closes the loop from first reply to final resolution, with human control built in.",
};

const loopSteps = [
  { label: "Intake", meta: "Ticket + thread", tone: "bg-accent-soft" },
  { label: "Understand", meta: "Intent + gaps", tone: "bg-blue-soft" },
  { label: "Act", meta: "Answer or run", tone: "bg-green-soft" },
  { label: "Decide", meta: "Confidence gate", tone: "bg-pink-soft" },
  { label: "Watch", meta: "Close the loop", tone: "bg-console text-white" },
];

const principles = [
  {
    title: "Resolve before routing.",
    body: "The product earns its place by finishing the work and handing over only what needs a person.",
    tone: "bg-accent",
  },
  {
    title: "Show the evidence.",
    body: "Every answer and every escalation should carry the context, sources, and confidence behind it.",
    tone: "bg-blue",
  },
  {
    title: "Keep judgment human.",
    body: "Automation can act, but a person can inspect, override, and take over at any point.",
    tone: "bg-green",
  },
  {
    title: "Close the loop.",
    body: "A reply is one step. Ownership continues until the case is closed.",
    tone: "bg-pink",
  },
  {
    title: "Keep data close.",
    body: "The first deployments run inside the customer's network, so ticket content and run history stay under the team's control.",
    tone: "bg-cyan",
  },
  {
    title: "Go deep before wide.",
    body: "Freshdesk and the core support paths come first. Integration breadth follows proven depth.",
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
              <h1 className="display-1 max-w-[760px]">
                Support is not a queue.
              </h1>
              <p className="lede measure mt-6">
                CogniLogs exists to close the distance between a customer&apos;s
                first message and the moment the work is done. The first
                deployments run inside your network, close to the data they need.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <ButtonLink href="/waitlist" size="lg" withArrow>
                  Join the waitlist
                </ButtonLink>
                <Link
                  href="/docs"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  Read the product guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
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
                    <span className="text-white/55">Freshdesk · #2189</span>
                    <span className="inline-flex items-center gap-1.5 text-console-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      Watching
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] font-medium text-white">
                    Refund not reflecting on invoice
                  </p>
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
                  Support teams are asked to be faster and more consistent every
                  quarter. Most tools have made the reply easier to write.
                  Fewer have made the work easier to finish.
                </p>
                <p>
                  The hard part is the middle: understanding the request,
                  finding the source that proves it, running the check that
                  changes the answer, and knowing when the evidence is too thin
                  to send.
                </p>
                <p>
                  CogniLogs is built around that middle. It is a support
                  automation layer for Freshdesk teams, a loop that reads,
                  verifies, decides, and stays accountable until the case closes.
                  It runs inside your network.
                </p>
              </div>
              <p className="mt-6 text-[14px] leading-6 text-muted">
                CogniLogs is early. We are building with a small group of
                Freshdesk design partners and will publish real outcomes when
                they exist.
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
                <span>Freshdesk event → close</span>
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
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-green" />
                  Source attached
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-blue" />
                  Human override
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  SLA watch
                </span>
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
              <h2 className="display-2 max-w-[460px]">
                Where we are now.
              </h2>
              <p className="mt-5 max-w-[400px] text-[16px] leading-7 text-muted-strong">
                The product is in preview. Here is what is built, what is next,
                and what we are not claiming yet.
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
                    0.92
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-[13px] leading-5">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Intent</span>
                    <span>Issue · billing</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Evidence</span>
                    <span>Duplicate charge · Oct 18</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/55">Action</span>
                    <span>Credit note · CN-8821</span>
                  </div>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-console-green">
                  <Check className="h-3.5 w-3.5" />
                  Above threshold · ready to send
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
                      <li>Local deployment design</li>
                      <li>Freshdesk event intake</li>
                      <li>Intent + prerequisite checks</li>
                      <li>Knowledge and diagnostic paths</li>
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
                      <li>Deployment pack for security review</li>
                      <li>More design-partner paths</li>
                      <li>Per-queue thresholds</li>
                      <li>Deeper admin actions</li>
                      <li>More connectors</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-strong">
                      <Minus className="h-4 w-4" />
                      Not claiming yet
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-[14px] leading-6 text-[#7a3f24]">
                      <li>A hosted cloud option</li>
                      <li>A broad live connector catalog</li>
                      <li>Outcome benchmarks</li>
                      <li>Public pricing</li>
                      <li>Certifications we have not earned</li>
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
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
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
