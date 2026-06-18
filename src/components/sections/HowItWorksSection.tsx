"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "@/components/ui/TerminalWindow";

const steps = [
  {
    id: 1,
    title: "Define Skill",
    subtitle: "Author investigation playbooks",
    description:
      "Write YAML skill files that define the exact troubleshooting steps — which commands to run, which APIs to query, and how to interpret results.",
    lines: [
      { text: "# skill: email_campaign_suspension", type: "output" as const },
      { text: "steps:", type: "output" as const },
      { text: "  - query: smtp_logs --campaign ${CAMPAIGN_ID}", type: "output" as const },
      { text: "  - analyze: bounce_rate > 5%", type: "output" as const },
      { text: "  - remediate: list_cleanup --remove-invalid", type: "output" as const },
    ],
  },
  {
    id: 2,
    title: "Agent Executes",
    subtitle: "Autonomous investigation begins",
    description:
      "The agent connects to your infrastructure — databases, observability tools, cloud APIs — and runs the skill steps in order, collecting evidence at every stage.",
    lines: [
      { text: "→ Connecting to production DB...", type: "info" as const },
      { text: "→ Querying campaign_analytics table", type: "info" as const },
      { text: "→ Fetching SMTP delivery logs", type: "info" as const },
      { text: "→ Analyzing bounce patterns...", type: "info" as const },
    ],
  },
  {
    id: 3,
    title: "Get Report",
    subtitle: "Root cause + remediation",
    description:
      "The agent compiles a structured investigation log with the root cause, evidence trail, confidence score, and step-by-step remediation instructions.",
    lines: [
      { text: "Root Cause: Campaign suspended — 7.2% hard bounce rate", type: "output" as const },
      { text: "Confidence: 94%", type: "output" as const },
      { text: "", type: "output" as const },
      { text: "Remediation Steps:", type: "info" as const },
      { text: "  1. Remove 2,341 invalid addresses", type: "output" as const },
      { text: "  2. Re-submit campaign for approval", type: "output" as const },
    ],
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            How It Works
          </p>
          <h2 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
            Skill → Execute → Report
          </h2>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-2">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded border px-3 py-3 text-center text-xs transition-all duration-200 sm:px-4 sm:py-4 sm:text-sm ${
                active === i
                  ? "border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)]"
                  : "border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
              }`}
            >
              <span className="mb-0.5 block font-bold">
                [{step.id}] {step.title}
              </span>
              <span className="hidden text-[10px] text-[var(--text-muted)] sm:block">
                {step.subtitle}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-6 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            {steps[active].description}
          </p>
          <TerminalWindow
            lines={steps[active].lines}
            title={`step-${steps[active].id}-${steps[active].title.toLowerCase().replace(/\s+/g, "-")}`}
          />
        </motion.div>
      </div>
    </section>
  );
}
