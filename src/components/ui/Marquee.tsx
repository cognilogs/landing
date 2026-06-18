"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const logos = [
  "Datadog", "Grafana", "PagerDuty", "AWS", "Slack",
  "Docker", "Kubernetes", "GitHub", "Azure", "Sentry",
];

export default function Marquee() {
  const prefersReduced = useReducedMotion();
  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      {!prefersReduced && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
      )}
      <motion.div
        className="flex gap-8"
        animate={
          prefersReduced
            ? {}
            : { x: ["0%", "-50%"] }
        }
        transition={{
          x: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
      >
        {items.map((name, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded border border-[var(--border)] bg-[var(--bg-card)] px-5 py-3"
          >
            <span className="whitespace-nowrap text-xs text-[var(--text-muted)]">
              [{name.toLowerCase()}]
            </span>
          </div>
        ))}
      </motion.div>
      {!prefersReduced && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />
      )}
    </div>
  );
}
