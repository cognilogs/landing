"use client";

import { motion } from "framer-motion";
import WaitlistForm from "@/components/ui/WaitlistForm";
import FAQ from "@/components/ui/FAQ";

const perks = [
  {
    title: "Priority Access",
    description:
      "Be among the first teams to deploy CogniLogs. Shape the product roadmap with direct access to the founding team.",
  },
  {
    title: "Founders Plan",
    description:
      "Lifetime 40% discount on all plans for waitlist members. No expiration. Stackable with launch offers.",
  },
  {
    title: "Community Access",
    description:
      "Join the private Slack community for early adopters. Share skill files, swap runbooks, and get support.",
  },
];

const faqItems = [
  {
    question: "What is CogniLogs?",
    answer:
      "CogniLogs is an autonomous backend investigation platform. AI agents execute predefined skill files — connecting to databases, APIs, and infrastructure — to troubleshoot issues end-to-end. Output is a structured log with root cause and remediation steps.",
  },
  {
    question: "How is this different from existing AI SRE tools?",
    answer:
      "Unlike general-purpose AI SRE platforms, CogniLogs is skill-file-first. Your team writes precise, version-controlled investigation playbooks that agents execute deterministically. This means predictable outcomes, easy peer review, and zero hallucination risk on critical production paths.",
  },
  {
    question: "When will CogniLogs launch?",
    answer:
      "We're targeting Q3 2026 for private beta. Waitlist members get early access, onboarding support, and a lifetime discount.",
  },
  {
    question: "What infrastructure do I need?",
    answer:
      "CogniLogs deploys in your VPC (AWS, GCP, Azure, or on-prem). Agents connect to your existing tools via our integration hub — Datadog, PagerDuty, Grafana, CloudWatch, and 40+ others. No data ever leaves your environment.",
  },
  {
    question: "Can I write my own skill files?",
    answer:
      "Yes. Skills are YAML files you version alongside your codebase. We also provide a visual skill builder for teams who prefer a GUI. A library of pre-built skills for common scenarios ships with every deployment.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "SOC 2 Type II and ISO 27001 certified. All agent actions are logged immutably. Credentials are injected at request time via Envoy sidecar — agents never see raw secrets. Deploy air-gapped or BYOC.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="border-b border-[var(--border)] px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Early Access
          </p>
          <h1 className="mb-4 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Join <span className="text-[var(--accent)]">2,500+</span> engineers
            on the waitlist
          </h1>
          <p className="mb-8 text-sm text-[var(--text-secondary)]">
            Get early access, exclusive previews, and a lifetime founder&apos;s
            discount.
          </p>
          <div className="mx-auto max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-colors duration-200 hover:border-[var(--accent)]/30"
              >
                <p className="mb-1 text-xs text-[var(--accent)]">
                  [0{i + 1}]
                </p>
                <h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">
                  {perk.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto max-w-2xl">
            <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Frequently Asked Questions
            </p>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
