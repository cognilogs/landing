"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { BrandRail } from "@/components/ui/BrandLogos";

export default function TrustStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Ticketing and tooling support" className="py-10 sm:py-14">
      <div className="shell">
        <div className="flex flex-col gap-6 rounded-[22px] border border-line/70 bg-surface px-5 py-5 sm:px-6 md:flex-row md:items-center md:gap-8">
          <div className="shrink-0 md:w-[238px]">
            <p className="flex items-center gap-2 text-[14px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Works with your stack.
            </p>
            <p className="mt-1.5 max-w-[235px] text-[13px] leading-5 text-muted">
              Any ticketing system. The evidence and action tools your team
              already checks.
            </p>
          </div>

          <div className={`marquee min-w-0 flex-1 ${paused ? "is-paused" : ""}`}>
            <div className="marquee-track">
              <BrandRail />
              <BrandRail hidden />
            </div>
          </div>

          <div className="shrink-0 md:w-[150px]">
            <p className="text-[13px] leading-5 text-muted">
              Your ticketing system stays the system of record.{" "}
              <Link
                href="/features#connections"
                className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent-strong"
              >
                See the stack
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </p>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              aria-label={paused ? "Play tool ticker" : "Pause tool ticker"}
              className="marquee-control mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-muted transition-colors hover:text-ink motion-reduce:hidden"
            >
              {paused ? (
                <Play aria-hidden="true" className="h-3 w-3" />
              ) : (
                <Pause aria-hidden="true" className="h-3 w-3" />
              )}
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
