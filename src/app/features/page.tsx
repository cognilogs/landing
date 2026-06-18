"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import FeatureDemo from "@/components/ui/FeatureDemo";
import {
  FileCode2,
  Terminal,
  Brain,
  Workflow,
  Network,
  GitPullRequest,
  MessagesSquare,
  Shield,
  LineChart,
  Eye,
  RefreshCw,
  BookOpen,
  GitBranch,
  Siren,
  Cable,
} from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import WaitlistSection from "@/components/sections/WaitlistSection";

const skillDemoLines = [
  { text: "cognilogs run --skill check_latency --service payment-api", type: "input" as const },
  { text: "Loading skill: check_latency v2.3.1", type: "info" as const },
  { text: "Step 1/4: Querying service health endpoint...", type: "output" as const },
  { text: "  GET /health → 200 OK (45ms)", type: "output" as const },
  { text: "Step 2/4: Checking p99 latency (last 15min)...", type: "output" as const },
  { text: "  p99: 1.2s → threshold: 500ms ⚠", type: "warning" as const },
  { text: "Step 3/4: Correlating with recent deploys...", type: "output" as const },
  { text: "  Found: deploy #3842 at 14:32 UTC", type: "info" as const },
  { text: "  Commit: b3f8a1a — 'update connection pool config'", type: "output" as const },
  { text: "Step 4/4: Cross-referencing with past incidents...", type: "output" as const },
  { text: "  Match found: INC-4421 (93% similarity)", type: "info" as const },
  { text: "  → Fix from INC-4421: rollback connection pool to v2.1", type: "info" as const },
  { text: "Done. Generating investigation log...", type: "output" as const },
];

const hypothesisDemoLines = [
  { text: "Alert: 'payment-api error rate > 5%' fired", type: "info" as const },
  { text: "Spawning 3 parallel investigations...", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "[H1] Recent deploy introduced regression", type: "info" as const },
  { text: "  └─ Querying deploy history...", type: "output" as const },
  { text: "  └─ Diff: deploy #3842 changed db driver", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "[H2] Downstream dependency failure", type: "info" as const },
  { text: "  └─ Checking dependent services...", type: "output" as const },
  { text:   "  └─ auth-service p99: 3200ms (baseline: 200ms)", type: "warning" as const },
  { text: "", type: "output" as const },
  { text: "[H3] Database connection pool exhausted", type: "info" as const },
  { text: "  └─ Querying pg_stat_activity...", type: "output" as const },
  { text:   "  └─ 147 active connections (max: 100)", type: "warning" as const },
  { text: "", type: "output" as const },
  { text: "H3 confirmed as root cause (confidence: 96%)", type: "info" as const },
];

const prDemoLines = [
  { text: "Root cause identified: db connection leak", type: "info" as const },
  { text: "Confidence: 96% | Evidence: INC-4421, INC-4590", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "Generating remediation PR...", type: "output" as const },
  { text: "→ Reading offending file: /api/db/pool.ts", type: "info" as const },
  { text: "→ Analyzing diff from deploy #3842...", type: "info" as const },
  { text: "→ Applying rollback to pool config v2.1", type: "info" as const },
  { text: "", type: "output" as const },
  { text: "PR #427 opened: 'fix: rollback db pool config'", type: "info" as const },
  { text: "  Branch: fix/rollback-db-pool-config", type: "output" as const },
  { text: "  Files changed: 1", type: "output" as const },
  { text: "  +2 -14 lines", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "→ Assigned to: @harshil for review", type: "info" as const },
  { text: "→ Posted findings in: #incident-response", type: "info" as const },
];

const threatDemoLines = [
  { text: "Remediation: Rollback db pool to v2.1", type: "info" as const },
  { text: "Running pre-flight impact analysis...", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "Service Dependency Graph:", type: "output" as const },
  { text: "  payment-api ─┬─ auth-service (no impact)", type: "output" as const },
  { text: "               ├─ user-service (no impact)", type: "output" as const },
  { text: "               ├─ notification-svc (no impact)", type: "output" as const },
  { text: "               └─ db-cluster ── replica-1 (config change)", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "Blast Radius Assessment:", type: "info" as const },
  { text: "  Services affected: 1 (payment-api)", type: "output" as const },
  { text: "  Endpoints affected: 3 (/checkout, /pay, /refund)", type: "output" as const },
  { text: "  Estimated downtime: 45s during pool restart", type: "output" as const },
  { text: "  Rollback available: yes", type: "output" as const },
  { text: "", type: "output" as const },
  { text: "Risk: Low. Proceed with remediation? (Y/n)", type: "info" as const },
];

const coreFeatures = [
  {
    icon: <FileCode2 size={18} />,
    title: "Skill-Based Troubleshooting Engine",
    description:
      "Author investigation playbooks as version-controlled YAML skill files. Each skill defines the exact steps — which commands to run, which APIs to query, how to interpret results, and when to escalate. Skills are reusable, shareable, and composable.",
  },
  {
    icon: <Terminal size={18} />,
    title: "Secure Terminal Sandbox",
    description:
      "Every agent session runs in an isolated environment with credential-injection via Envoy sidecar. Agents never see raw secrets. All sessions are recorded for replay and audit. Supports SSH, SQL, REST, gRPC, and custom protocols.",
  },
  {
    icon: <Workflow size={18} />,
    title: "Runbook Automation Engine",
    description:
      "Convert operational runbooks into executable workflows. Agents run each step, verify success criteria, and roll back automatically on failure. Supports conditional branching, parallel execution, and human approval gates.",
  },
  {
    icon: <Network size={18} />,
    title: "Parallel Hypothesis Investigation",
    description:
      "When an incident fires, CogniLogs formulates multiple hypotheses simultaneously — querying logs, metrics, traces, deploys, and code changes in parallel. Each hypothesis gets a confidence score with supporting evidence.",
  },
];

const intelligenceFeatures = [
  {
    icon: <Brain size={18} />,
    title: "Knowledge Graph Memory",
    description:
      "Agents persist learnings across investigations. When a familiar error pattern appears, CogniLogs surfaces the previous root cause, the fix that worked, and a confidence score — before the agent retraces old ground.",
  },
  {
    icon: <LineChart size={18} />,
    title: "Blast Radius & Impact Analysis",
    description:
      "Before executing any remediation, the agent walks your service dependency graph and maps every downstream system that could be affected. Engineers see the full risk surface before approving.",
  },
  {
    icon: <GitPullRequest size={18} />,
    title: "Remediation PR Generation",
    description:
      "For code-level root causes, the agent identifies the offending commit, generates a fix, and opens a pull request — with the full investigation trail attached. Your team reviews and merges with one click.",
  },
  {
    icon: <Eye size={18} />,
    title: "Smart Escalation with Full Context",
    description:
      "When an agent hits its confidence threshold, it escalates to human engineers with a structured brief: investigation history, evidence collected, hypotheses tested, and recommended next steps. No context loss.",
  },
];

const communicationFeatures = [
  {
    icon: <MessagesSquare size={18} />,
    title: "Slack & Teams Integration",
    description:
      "@mention your CogniLogs agent in any thread. The agent investigates silently, then posts findings, evidence links, and remediation steps directly in the conversation. No dashboard hopping required.",
  },
  {
    icon: <Shield size={18} />,
    title: "Compliance & Audit Trail",
    description:
      "Every command executed, every API called, every decision made is logged immutably. SOC 2 / ISO 27001 ready. Deploy in your VPC with BYOC or air-gapped. Fine-grained RBAC for every agent action.",
  },
  {
    icon: <RefreshCw size={18} />,
    title: "Post-Incident RCA Reports",
    description:
      "After resolution, CogniLogs auto-generates structured root cause analysis documents — with timeline, evidence, hypotheses, and remediation steps. Ready for post-mortem review or compliance filing.",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Custom Skill Builder",
    description:
      "A visual editor for creating and versioning investigation skill files. No YAML expertise required. Drag, configure, and deploy. Skills auto-document in your internal knowledge base.",
  },
];

const infrastructureFeatures = [
  {
    icon: <GitBranch size={18} />,
    title: "Service Catalog & Dependency Map",
    description:
      "Automatically discover services, owners, recent changes, and runtime dependencies across your infrastructure. The catalog feeds every investigation with up-to-date context.",
  },
  {
    icon: <Siren size={18} />,
    title: "On-Call & Alert Integration",
    description:
      "Connect PagerDuty, Opsgenie, or ServiceNow. CogniLogs acknowledges alerts, starts investigating immediately, and posts findings before your on-call engineer finishes reading the notification.",
  },
  {
    icon: <Cable size={18} />,
    title: "Observability Stack Integration",
    description:
      "Native connectors for Datadog, Grafana, CloudWatch, New Relic, Splunk, Sentry, and 40+ other tools. Agents query your existing telemetry — no migration required.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="border-b border-[var(--border)] px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Platform Capabilities
          </p>
          <h1 className="mb-4 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Everything you need to{" "}
            <span className="text-[var(--accent)]">automate</span> backend
            investigations
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-[var(--text-secondary)]">
            From writing your first skill file to auto-generating post-incident
            reports — CogniLogs covers the entire investigation lifecycle.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Core Investigation Engine
            </p>
          </ScrollReveal>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {coreFeatures.map((f, i) => (
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

      <FeatureDemo
        lines={skillDemoLines}
        title="Watch an agent investigate in real time"
        description="A CogniLogs agent runs a skill file step by step — querying health endpoints, checking latency metrics, correlating with recent deploys, and cross-referencing past incidents. Every action is logged, every finding is evidence-backed."
        label="Live Demo — Skill Execution"
      />

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Intelligence &amp; Analysis
            </p>
          </ScrollReveal>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {intelligenceFeatures.map((f, i) => (
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

      <FeatureDemo
        lines={hypothesisDemoLines}
        title="Parallel hypotheses, one root cause"
        description="When an alert fires, CogniLogs spawns multiple investigation threads simultaneously — checking deploys, dependencies, and database health in parallel. Each hypothesis is tested rigorously before the agent converges on the true root cause."
        label="Live Demo — Hypothesis Investigation"
        reverse
      />

      <FeatureDemo
        lines={prDemoLines}
        title="From root cause to fix PR — automatically"
        description="Once the root cause is identified, CogniLogs doesn't stop at reporting. It reads the offending code, generates a targeted fix, opens a pull request with full context, and assigns it for review — all without human intervention."
        label="Live Demo — Remediation"
      />

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Communication &amp; Compliance
            </p>
          </ScrollReveal>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {communicationFeatures.map((f, i) => (
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

      <FeatureDemo
        lines={threatDemoLines}
        title="Know the blast radius before you act"
        description="Before executing any remediation, CogniLogs walks your service dependency graph and simulates the impact. Engineers see exactly which services, endpoints, and customers could be affected — and can approve or reject with full visibility."
        label="Live Demo — Impact Analysis"
        reverse
      />

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-8 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Infrastructure &amp; Integrations
            </p>
          </ScrollReveal>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {infrastructureFeatures.map((f, i) => (
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

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-16">
              <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Supported Integrations
              </p>
              <Marquee />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaitlistSection />
    </div>
  );
}
