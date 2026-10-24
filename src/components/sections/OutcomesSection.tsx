import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const oldLoop = [
  "Ticket waits for triage.",
  "Six tabs for the whole story.",
  "Customer repeats the details.",
  "SLA discovered late.",
];

const closedLoop = [
  "Intent is known on arrival.",
  "Evidence lives in one run.",
  "One clear question, with context.",
  "The watch continues until close.",
];

export default function OutcomesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-2 max-w-[500px]">
              The reply is the visible part.
            </h2>
            <p className="lede mt-5 max-w-[430px]">
              The work that happens before and after the reply is what closes a
              ticket: the evidence, the judgment, and the ownership of the case.
            </p>
            <p className="mt-9 max-w-[360px] text-[13px] leading-5 text-muted">
              CogniLogs is being built with early Freshdesk teams. We&apos;ll
              publish real outcomes when we have them. We won&apos;t invent them
              in the meantime.
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
            >
              What we believe
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.05}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[26px] bg-surface p-6">
                <p className="text-[13px] font-medium text-muted">The old loop</p>
                <ul className="mt-6 space-y-4">
                  {oldLoop.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-paper">
                        <Minus className="h-2.5 w-2.5 text-line-strong" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[26px] bg-accent p-6 text-accent-ink">
                <p className="text-[13px] font-medium text-accent-ink">
                  The closed loop
                </p>
                <ul className="mt-6 space-y-4">
                  {closedLoop.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] font-medium leading-6 text-accent-ink"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-ink/10">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-[22px] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[26px]">
                “Zero avoidable handoffs.”
              </p>
              <footer className="mt-3 text-[12px] text-muted">
                The CogniLogs product principle
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
