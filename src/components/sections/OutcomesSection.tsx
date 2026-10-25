import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  FileCode2,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const work = [
  { icon: FileCode2, label: "Audit log", meta: "what changed" },
  { icon: Code2, label: "Codebase", meta: "why it broke" },
  { icon: Database, label: "Database", meta: "what is true now" },
  { icon: ShieldCheck, label: "Approval", meta: "who signed off" },
];

export default function OutcomesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-2 max-w-[520px]">
              The reply is the visible part.
            </h2>
            <p className="lede mt-5 max-w-[430px]">
              The answer is what the customer sees. The work that makes it true
              happens in the logs, the code, the database, and the approval
              trail behind it.
            </p>
            <p className="mt-9 max-w-[380px] text-[13px] leading-5 text-muted">
              cognilogs is being built with early teams who care about the
              tickets that need a real investigation, not another draft.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/features"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
              >
                See the product
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-ink"
              >
                See the loop
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.05}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex h-full flex-col rounded-[26px] bg-surface p-6">
                <p className="text-[13px] font-medium text-muted">
                  What the customer sees
                </p>
                <div className="mt-5 rounded-[18px] bg-paper p-4">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <MessageSquareText className="h-3.5 w-3.5" />
                    Reply · ticket #4821
                  </div>
                  <p className="mt-3 text-[15px] leading-6 text-ink">
                    “The certificate had rotated before the new metadata was
                    published. I restored it, paused the rollout, and corrected
                    the cohort. Your finance team can sign in again. The RCA is
                    attached.”
                  </p>
                </div>
                <p className="mt-auto pt-5 text-[13px] leading-5 text-muted">
                  Clear, specific, and backed by the checks behind it.
                </p>
              </div>

              <div className="flex h-full flex-col rounded-[26px] bg-accent p-6 text-accent-ink">
                <p className="text-[13px] font-medium text-accent-ink">
                  What it takes to get there
                </p>
                <div className="mt-5 space-y-2">
                  {work.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-xl bg-white/20 px-3 py-2.5"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-accent-ink/65" />
                      <span className="min-w-0 flex-1 text-[13px] font-medium text-accent-ink">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-accent-ink/60">
                        {item.meta}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-auto pt-5 text-[13px] leading-5 text-accent-ink/80">
                  Evidence, judgment, and a person who can sign off.
                </p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-[22px] font-medium leading-[1.35] tracking-[-0.03em] text-ink sm:text-[26px]">
                “Zero avoidable handoffs.”
              </p>
              <footer className="mt-3 text-[12px] text-muted">
                The cognilogs product principle
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
