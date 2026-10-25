"use client";

import { useState } from "react";
import { ArrowRight, Calculator, Cpu, Ticket } from "lucide-react";

const FLOOR = 10;

export default function PricingCalculator() {
  const [tickets, setTickets] = useState(500);
  const estimate = tickets * FLOOR;

  return (
    <div data-ui className="rounded-[26px] bg-surface p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
          <Calculator className="h-4 w-4 text-accent-strong" />
          Early-access estimate
        </p>
        <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
          From ₹{FLOOR} / ticket
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor="tickets-per-month" className="text-[12px] text-muted">
              Resolved tickets per month
            </label>
            <span className="text-[18px] font-semibold tracking-[-0.03em] text-ink">
              {tickets.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="relative mt-3">
            <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-line/70" />
            <div
              className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent"
              style={{ width: `${((tickets - 100) / (5000 - 100)) * 100}%` }}
            />
            <input
              id="tickets-per-month"
              type="range"
              min="100"
              max="5000"
              step="100"
              value={tickets}
              onChange={(event) => setTickets(Number(event.target.value))}
              className="threshold-range relative z-10 w-full"
            />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-muted">
            <span>100</span>
            <span>5,000</span>
          </div>
        </div>
        <div className="rounded-2xl bg-paper px-4 py-3 sm:min-w-[170px]">
          <p className="text-[10px] text-muted">Estimated floor</p>
          <p className="mt-1 text-[28px] font-semibold leading-none tracking-[-0.04em] text-ink">
            ₹{estimate.toLocaleString("en-IN")}
          </p>
          <p className="mt-1 text-[10px] text-muted">per month</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2.5 text-[11px] text-muted">
          <Ticket className="h-3.5 w-3.5 shrink-0 text-accent-strong" />
          Charged around resolved tickets, not raw ticket volume.
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2.5 text-[11px] text-muted">
          <Cpu className="h-3.5 w-3.5 shrink-0 text-accent-strong" />
          Model and infrastructure costs stay with you.
        </div>
      </div>

      <p className="mt-4 flex items-start gap-1.5 text-[10px] leading-5 text-muted">
        <ArrowRight className="mt-0.5 h-3 w-3 shrink-0" />
        This is a floor, not a quote. Complexity, model size, and infrastructure
        change the final price. We agree on the commercial model before a pilot.
      </p>
    </div>
  );
}
