"use client";

import StatsFigure from "@/components/ui/StatsFigure";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { label: "Lines of runbook logic automated", value: "50000", suffix: "+" },
  { label: "Faster mean time to resolution", value: "73", suffix: "%" },
  { label: "Reduction in Tier-1 escalations", value: "85", suffix: "%" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <StatsFigure
                key={i}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                index={i}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
