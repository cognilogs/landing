import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import UseCasesSection from "@/components/sections/UseCasesSection";

export const metadata: Metadata = {
  title: "Use cases | cognilogs",
  description:
    "Examples of where cognilogs fits: SSO and provisioning failures, payment reconciliation, enterprise migrations, access requests, and order or fulfillment mismatches. These are examples, not a fixed scope; each deployment is mapped to your workflows.",
};

export default function UseCasesPage() {
  return (
    <div>
      <section className="pb-8 pt-12 sm:pt-16">
        <div className="shell">
          <div className="max-w-[780px]">
            <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Use cases
            </p>
            <h1 className="display-1 mt-5">
              Some tickets need a team.
            </h1>
            <p className="lede measure mt-5">
              The ones that cross an identity provider, a database, a feature
              flag, and a customer promise. Those are the tickets cognilogs is
              built for.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line/80 bg-surface p-4 text-[13px] leading-6 text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
              <p>
                These are a few examples, not a fixed menu. The exact use cases
                we deploy depend on your ticket patterns, systems, permissions,
                and approval rules. We map the real work with you before a
                pilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UseCasesSection />

      <section className="pb-20 sm:pb-24">
        <div className="shell">
          <div className="flex flex-col gap-5 rounded-[28px] bg-accent px-6 py-8 text-accent-ink sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[32px]">
                Which ticket takes the longest?
              </h2>
              <p className="mt-2 max-w-[540px] text-[14px] leading-6 text-accent-ink/80">
                Tell us the one your team dreads. We will walk through how the
                loop would handle it.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/waitlist" variant="secondary" size="md" withArrow>
                Join the waitlist
              </ButtonLink>
              <Link
                href="/comparison"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-accent-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-black"
              >
                Compare approaches
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
