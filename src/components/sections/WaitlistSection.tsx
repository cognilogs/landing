import {
  ArrowRight,
  Check,
  Clock3,
  Cpu,
  FileCheck2,
  Sparkles,
  Ticket,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WaitlistForm from "@/components/ui/WaitlistForm";

const loop = [
  { icon: Ticket, label: "Ticket in", meta: "any system" },
  { icon: Sparkles, label: "Agent run", meta: "local model" },
  { icon: FileCheck2, label: "Evidence", meta: "sources attached" },
  { icon: Clock3, label: "Human review", meta: "when needed" },
];

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[32px] bg-accent px-5 py-8 text-accent-ink sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-accent-ink/10 px-3 py-1.5 text-[11px] font-medium text-accent-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-ink" />
                  Early access · local deployment
                </p>
                <h2 className="display-2 mt-5 max-w-[560px]">
                  Put the queue on autopilot.
                </h2>
                <p className="mt-5 max-w-[490px] text-[16px] leading-7 text-accent-ink sm:text-[17px]">
                  cognilogs is opening a small group of local deployments for
                  teams with tickets that need real investigation. Tell us where
                  the work gets stuck.
                </p>

                <div className="mt-7 rounded-[22px] bg-accent-ink/10 p-3.5">
                  <div className="flex items-center justify-between px-1 text-[10px] font-medium text-accent-ink/70">
                    <span>A ticket, handled end to end</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-ink scene-pulse" />
                      live loop
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {loop.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-white/25 p-2.5 transition-colors hover:bg-white/35"
                      >
                        <item.icon className="h-3.5 w-3.5 text-accent-ink/60" />
                        <p className="mt-2 text-[11px] font-medium text-accent-ink">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[9px] text-accent-ink/60">
                          {item.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium text-accent-ink/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5" />
                    Any local model
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" />
                    Any ticketing system
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    Human override
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[26px] bg-paper p-4 text-ink sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[14px] font-medium text-ink">
                        Request early access
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted">
                        One email. A real reply from the team.
                      </p>
                    </div>
                    <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
                      Opening small
                    </span>
                  </div>
                  <div className="mt-4">
                    <WaitlistForm idPrefix="home-waitlist" />
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "A local deployment pilot",
                      "Shape the paths and approvals",
                      "A direct line to the team",
                      "No newsletter or spam",
                    ].map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-1.5 text-[11px] text-muted"
                      >
                        <Check className="h-3 w-3 text-green-strong" />
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/70 pt-3 text-[10px] text-muted">
                    <span>Prefer the full page?</span>
                    <Link
                      href="/waitlist"
                      className="group inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent-strong"
                    >
                      Open the waitlist
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
