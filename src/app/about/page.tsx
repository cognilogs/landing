"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TerminalWindow from "@/components/ui/TerminalWindow";

const values = [
  {
    bracket: "privacy-first",
    title: "Privacy First",
    description: "Your data never leaves your infrastructure. Period.",
  },
  {
    bracket: "engineer-obsessed",
    title: "Engineer Obsessed",
    description: "We build for the people who wake up at 3 AM to fix things.",
  },
  {
    bracket: "open-by-design",
    title: "Open by Design",
    description: "Skill files are YAML. No proprietary DSLs, no lock-in.",
  },
  {
    bracket: "deterministic-by-default",
    title: "Deterministic by Default",
    description:
      "Same skill file, same inputs, same output. Predictable investigations you can audit.",
  },
];

const originLines = [
  { text: "# story: how cognilogs started", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "The problem was everywhere:", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "  - Support teams escalating tickets without investigation context", type: "output" as const },
  { text: "  - SREs spending 70% of incident time gathering data, not fixing it", type: "output" as const },
  { text: "  - Engineering teams duplicating the same manual checks every week", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "We realized: most backend investigations follow the same patterns.", type: "output" as const },
  { text: "Check logs. Query metrics. Inspect configs. Verify deploys.", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "So we codified those patterns as skill files —", type: "output" as const },
  { text: "version-controlled, peer-reviewed, autonomously executable.", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "CogniLogs was born.", type: "info" as const },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="border-b border-[var(--border)] px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            About
          </p>
          <h1 className="mb-4 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            The story behind{" "}
            <span className="text-[var(--accent)]">CogniLogs</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)]">
            We built CogniLogs because we lived the pain of manual backend
            investigations. Every hour spent repeating the same checks is an
            hour not spent improving the system.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Origin Story
            </p>
            <TerminalWindow
              lines={originLines}
              title="README.md"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Our Values
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.bracket}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-colors duration-200 hover:border-[var(--accent)]/30"
              >
                <p className="mb-2 text-xs text-[var(--accent)]">
                  [{v.bracket}]
                </p>
                <h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">
                  {v.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
