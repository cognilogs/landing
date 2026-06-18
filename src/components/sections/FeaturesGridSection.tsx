"use client";

import {
  FileCode2,
  Terminal,
  Brain,
  GitPullRequest,
  Network,
  MessagesSquare,
  Shield,
  Workflow,
  LineChart,
} from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: <FileCode2 size={18} />,
    title: "Skill-Based Engine",
    description:
      "Define troubleshooting steps as version-controlled skill files. Agents execute them autonomously — no manual hand-holding required.",
  },
  {
    icon: <Terminal size={18} />,
    title: "Terminal Sandbox",
    description:
      "Each agent session runs in an isolated shell environment with credential-injection proxies. Secure by default.",
  },
  {
    icon: <Brain size={18} />,
    title: "Knowledge Memory",
    description:
      "Agents learn from every investigation. Similar incidents trigger known fixes with confidence scores and evidence links.",
  },
  {
    icon: <Workflow size={18} />,
    title: "Runbook Automation",
    description:
      "Convert SOPs into executable runbooks. Agents execute steps, collect evidence, and report back — with rollback on failure.",
  },
  {
    icon: <Network size={18} />,
    title: "Hypothesis Investigation",
    description:
      "Agents formulate and test multiple parallel hypotheses against telemetry, code changes, and deployment history.",
  },
  {
    icon: <GitPullRequest size={18} />,
    title: "Remediation PRs",
    description:
      "For code-level issues, agents generate fix PRs with full investigation context. You review and approve before merge.",
  },
  {
    icon: <MessagesSquare size={18} />,
    title: "Slack-Native Agent",
    description:
      "@mention your agent in any Slack thread. It investigates, surfaces findings, and posts remediation steps without context switching.",
  },
  {
    icon: <Shield size={18} />,
    title: "Full Audit Trail",
    description:
      "Every agent action is logged immutably. SOC 2 / ISO 27001 ready. Your data never leaves your VPC.",
  },
  {
    icon: <LineChart size={18} />,
    title: "Impact Analysis",
    description:
      "Before remediation, the agent simulates blast radius — mapping downstream dependencies that could be affected.",
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Capabilities
            </p>
            <h2 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
              Everything you need to automate investigations
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-[var(--text-secondary)] sm:text-sm">
              From writing skill files to receiving remediation PRs — CogniLogs
              handles the entire investigation lifecycle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
