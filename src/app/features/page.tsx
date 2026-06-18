import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
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

const features = [
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
    icon: <Brain size={18} />,
    title: "Knowledge Graph Memory",
    description:
      "Agents persist learnings across investigations. When a familiar error pattern appears, CogniLogs surfaces the previous root cause, the fix that worked, and a confidence score — before the agent retraces old ground.",
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
  {
    icon: <GitPullRequest size={18} />,
    title: "Remediation PR Generation",
    description:
      "For code-level root causes, the agent identifies the offending commit, generates a fix, and opens a pull request — with the full investigation trail attached. Your team reviews and merges with one click.",
  },
  {
    icon: <MessagesSquare size={18} />,
    title: "Slack & Teams Integration",
    description:
      "@mention your CogniLogs agent in any thread. The agent investigates silently, then posts findings, evidence links, and remediation steps directly in the conversation. No dashboard hopping required.",
  },
  {
    icon: <Eye size={18} />,
    title: "Smart Escalation with Full Context",
    description:
      "When an agent hits its confidence threshold, it escalates to human engineers with a structured brief: investigation history, evidence collected, hypotheses tested, and recommended next steps. No context loss.",
  },
  {
    icon: <Shield size={18} />,
    title: "Compliance & Audit Trail",
    description:
      "Every command executed, every API called, every decision made is logged immutably. SOC 2 / ISO 27001 ready. Deploy in your VPC with BYOC or air-gapped. Fine-grained RBAC for every agent action.",
  },
  {
    icon: <LineChart size={18} />,
    title: "Blast Radius & Impact Analysis",
    description:
      "Before executing any remediation, the agent walks your service dependency graph and maps every downstream system that could be affected. Engineers see the full risk surface before approving.",
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
          <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
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
