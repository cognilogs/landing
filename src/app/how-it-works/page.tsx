import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, Cpu } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata: Metadata = {
  title: "How it works | cognilogs",
  description:
    "How cognilogs polls any ticketing system, classifies the request, investigates with logs, code, and databases, gates confidence, drafts RCAs, and watches child-ticket SLAs.",
};

export default function HowItWorksPage() {
  return (
    <div>
      <section className="pb-8 pt-12 sm:pt-16">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The full loop
              </p>
              <h1 className="display-1 mt-5 max-w-[760px]">
                Every ticket gets the work it needs.
              </h1>
              <p className="lede measure mt-5">
                A scheduler picks up the ticket. The agent classifies it,
                investigates it, decides whether it can reply, and keeps
                watching if a person needs to step in.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  { icon: Clock3, label: "Polling interval", meta: "5–60 minutes" },
                  { icon: Cpu, label: "Model", meta: "local, your choice" },
                  { icon: Check, label: "Concurrency", meta: "5–10 tickets" },
                  { icon: ArrowRight, label: "Close", meta: "reply + CSAT" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] bg-surface px-3.5 py-3"
                  >
                    <item.icon className="h-4 w-4 text-accent-strong" />
                    <p className="mt-2 text-[12px] font-medium text-ink">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <section className="pb-20 sm:pb-24">
        <div className="shell">
          <div className="flex flex-col gap-5 rounded-[28px] bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[32px]">
                Want to see it on your queue?
              </h2>
              <p className="mt-2 max-w-[560px] text-[14px] leading-6 text-muted">
                Bring one tough ticket. We will show you the path, the evidence,
                and the handoff.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/waitlist" size="md" withArrow>
                Join the waitlist
              </ButtonLink>
              <Link
                href="/features"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-5 text-[14px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface-muted"
              >
                See the product
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
