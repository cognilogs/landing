import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cpu,
  Database,
  Gauge,
  MessageSquareText,
  Server,
  ShieldCheck,
  Timer,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import ButtonLink from "@/components/ui/ButtonLink";
import FAQ from "@/components/ui/FAQ";
import PricingCalculator from "@/components/ui/PricingCalculator";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { breadcrumb } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing | cognilogs",
  description:
    "Early customers pay as low as ₹10 per analyzed ticket, not per seat. Model and infrastructure costs stay with you.",
  path: "/pricing/",
});

const included = [
  {
    icon: MessageSquareText,
    title: "Any ticketing system",
    body: "Poll the system you already run. No migration required.",
  },
  {
    icon: Cpu,
    title: "Your local model",
    body: "Any model your infrastructure can serve, including open-weight models.",
  },
  {
    icon: Database,
    title: "Evidence layer",
    body: "Audit logs, codebase, databases, Kibana, Sentry, and Datadog checks.",
  },
  {
    icon: Gauge,
    title: "Confidence gate",
    body: "Routine replies can resolve. Thin evidence goes to a person.",
  },
  {
    icon: Timer,
    title: "SLA + CSAT",
    body: "Child-ticket tracking, Slack/email reminders, manager escalation, and CSAT.",
  },
  {
    icon: ShieldCheck,
    title: "Audit trail",
    body: "Every tool call, browser action, approval, and reply is recorded.",
  },
];

const pricingFaq = [
  {
    question: "What does ₹10 cover?",
    answer:
      "It is the early-access floor for an analyzed ticket. It covers the support loop: polling, classification, investigation, reply, escalation, and SLA watch. Model and infrastructure costs are separate.",
  },
  {
    question: "Why is it per analyzed ticket?",
    answer:
      "You pay for the analysis work on a ticket, not for seats. We agree on what counts as analyzed before the pilot, including how human handoffs and child tickets are treated.",
  },
  {
    question: "What changes the price?",
    answer:
      "The model you run, the size of your infrastructure, the number of systems a ticket touches, and the depth of the investigation. A simple query and a multi-system incident do not cost the same to run.",
  },
  {
    question: "How is an analyzed ticket counted?",
    answer:
      "We agree on the definition before the pilot, including how human handoffs and child tickets are treated. The early-access price is stated per analyzed ticket.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <JsonLd data={breadcrumb("/pricing/", "Pricing")} />
      <section className="pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Pricing for local deployment
              </p>
              <h1 className="display-1 mt-5 max-w-[760px]">
                Pay for the tickets we analyze.
              </h1>
              <p className="lede measure mt-5">
                Early customers can get a ticket analyzed for as low as ₹10. You
                run the model and the infrastructure. We price the loop that
                does the work.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-muted">
                {["Local deployment", "Any ticketing system", "Any local model", "Human review"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5"
                    >
                      <Check className="h-3 w-3 text-green-strong" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[28px] bg-accent p-6 text-accent-ink sm:p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent-ink/65">
                  Early access
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[52px] font-semibold leading-none tracking-[-0.06em]">
                    ₹10
                  </span>
                  <span className="text-[14px] text-accent-ink/70">
                    / analyzed ticket
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-6 text-accent-ink/80">
                  Starting floor for early customers. The final price depends on
                  the model, infrastructure, volume, and depth of each analysis.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <ButtonLink href="/waitlist" variant="secondary" size="md" withArrow>
                    Join the waitlist
                  </ButtonLink>
                  <a
                    href="mailto:team@cognilogs.com?subject=cognilogs%20pricing"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-accent-ink/20 px-5 text-[14px] font-medium text-accent-ink transition-colors hover:bg-accent-ink/10"
                  >
                    Talk to us
                  </a>
                </div>
                <p className="mt-3 text-[10px] text-accent-ink/60">
                  Model and infrastructure costs are paid by you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="shell">
          <div className="grid gap-3 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <PricingCalculator />
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-5" delay={0.04}>
              <div className="h-full rounded-[26px] bg-surface p-5 sm:p-6">
                <p className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
                  <Server className="h-4 w-4 text-accent-strong" />
                  What stays on your side
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "The servers or private network that run the agent.",
                    "The local model and its inference cost.",
                    "The credentials and permissions you grant.",
                    "The retention policy for ticket and run data.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-6 text-muted-strong"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-soft text-green-strong">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-paper px-3 py-2.5 text-[11px] leading-5 text-muted">
                  We scope the pilot with your team. The ₹10 floor is not a
                  promise that every ticket costs the same.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 className="display-2 max-w-[660px]">
              What the ticket price includes.
            </h2>
            <p className="lede md:justify-self-end">
              One loop, from the first event to the CSAT request. No separate
              line for the evidence layer.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="rounded-[22px] bg-surface p-5">
                <item.icon className="h-5 w-5 text-accent-strong" />
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.03em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[360px]">How the pilot works.</h2>
              <p className="mt-5 max-w-[360px] text-[16px] leading-7 text-muted-strong">
                Start with one queue and one tough ticket. We scope the loop,
                agree on what counts as analyzed, and measure the work before a
                wider rollout.
              </p>
              <Link
                href="/how-it-works"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
              >
                See the loop
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Scope", "One queue, one ticketing system, one model."],
                  ["02", "Prove", "Resolve real tickets and review the evidence."],
                  ["03", "Expand", "Add systems, teams, and approval paths."],
                ].map(([number, title, body]) => (
                  <div key={number} className="rounded-[22px] bg-surface p-5">
                    <p className="text-[12px] text-muted">{number}</p>
                    <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.03em] text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-5 rounded-[24px] border border-line/70 bg-surface p-5 sm:p-6 lg:grid-cols-2">
            <div className="flex gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-strong">
                <Timer className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-ink">
                  Integration is a project, not a switch.
                </p>
                <p className="mt-1.5 text-[12.5px] leading-6 text-muted">
                  Connecting the data across your organization is real work. A
                  complete integration will realistically take longer than a
                  couple of days. The timeline depends on the systems the loop
                  touches, who grants access, and how quickly your team can
                  review the deployment.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-soft text-green-strong">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-ink">
                  We work through it with you.
                </p>
                <p className="mt-1.5 text-[12.5px] leading-6 text-muted">
                  We work with you throughout the integration and deployment:
                  scoping, access, validation, and rollout. Your team stays in
                  control of the infrastructure, credentials, and retention
                  policy; you do not have to wire the loop up alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-2">Pricing questions.</h2>
              <p className="mt-5 text-[16px] leading-7 text-muted-strong">
                The commercial details we can state clearly today.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FAQ items={pricingFaq} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
