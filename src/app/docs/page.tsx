import ScrollReveal from "@/components/ui/ScrollReveal";

const skillFile = `name: email_campaign_suspension
version: 1.0.0
description: >
  Investigate why an email campaign was suspended.
  
inputs:
  - name: campaign_id
    type: string
    required: true

steps:
  - id: check_campaign_status
    query: SELECT status FROM campaigns WHERE id = $campaign_id
    on_result:
      suspended: continue
      active: return "Campaign is active -- no issue found"

  - id: fetch_bounce_metrics
    query: |
      SELECT bounce_rate, hard_bounces, soft_bounces
      FROM campaign_analytics
      WHERE campaign_id = $campaign_id
    threshold:
      bounce_rate: 5

  - id: check_smtp_logs
    query: smtp_logs --campaign $campaign_id --last 24h
    expect: connection_errors < 10

remediation:
  - type: list_cleanup
    description: Remove invalid addresses from recipient list
    command: list_cleanup --campaign $campaign_id --remove-invalid
  - type: resubmit
    description: Re-submit campaign after list cleanup
    command: campaign resubmit $campaign_id`;

const quickStart = `# Install the agent
curl -fsSL https://cognilogs.ai/install | bash

# Deploy in your VPC
cognilogs deploy --environment production

# Create your first skill file
cognilogs skill init investigate_latency_spike

# Run an investigation
cognilogs run --skill investigate_latency_spike --service payment-api`;

const architecture = `+----------------------------------------------------+
|                   Your VPC                          |
|                                                      |
|  +----------+    +--------------+    +------------+  |
|  |  Slack/  |    |  CogniLogs   |    |  On-Call   |  |
|  |  Teams   |<-->|   Agent      |<-->|  PagerDuty |  |
|  +----------+    +------+-------+    +------------+  |
|                         |                              |
|         +---------------+--------------+               |
|         v               v              v               |
|  +----------+    +----------+    +----------+          |
|  | Database |    |   APIs   |    |  Infra   |          |
|  |  (SQL)   |    | (REST)   |    | (SSH/K8s)|          |
|  +----------+    +----------+    +----------+          |
|                                                      |
|  +----------------------------------------------+    |
|  |         Skill Files (YAML)                    |    |
|  |  skills/email_campaign_suspension.yaml         |    |
|  |  skills/latency_spike.yaml                     |    |
|  |  skills/cert_expiry_check.yaml                 |    |
|  +----------------------------------------------+    |
+----------------------------------------------------+`;

export default function DocsPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="border-b border-[var(--border)] px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Documentation
          </p>
          <h1 className="mb-4 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Getting started with{" "}
            <span className="text-[var(--accent)]">CogniLogs</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)]">
            CogniLogs investigates backend issues using skill files —
            version-controlled YAML playbooks that define exactly what to check
            and how to respond.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
              What is a Skill File?
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              A skill file is a YAML document that describes an investigation
              procedure. It defines the steps an agent should take, the data
              sources to query, the conditions to evaluate, and the actions to
              perform based on the results.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8 overflow-hidden rounded border border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--danger)] opacity-60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--warning)] opacity-60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)] opacity-40" />
                <span className="ml-2 text-[10px] text-[var(--text-muted)]">
                  skills/email_campaign_suspension.yaml
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-[var(--text-secondary)] font-code">
{skillFile}</pre>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="mb-4 mt-12 text-lg font-bold text-[var(--text-primary)]">
              How It Works
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "An issue is reported",
                  desc: "A customer escalation comes in, an alert fires in PagerDuty, or an engineer @mentions the agent in Slack.",
                },
                {
                  step: "02",
                  title: "Agent loads the matching skill",
                  desc: "Based on the issue type, CogniLogs selects the appropriate skill file and extracts the required parameters from the context.",
                },
                {
                  step: "03",
                  title: "Skill steps execute sequentially",
                  desc: "The agent runs each step — querying databases, calling APIs, parsing logs — collecting evidence at every stage.",
                },
                {
                  step: "04",
                  title: "Conditional logic branches",
                  desc: "Based on results, the agent follows the skill's decision tree: investigate deeper, escalate, or move to remediation.",
                },
                {
                  step: "05",
                  title: "Report is generated",
                  desc: "The agent compiles a structured investigation log: root cause, evidence trail, remediation steps, and confidence score.",
                },
                {
                  step: "06",
                  title: "Report is delivered",
                  desc: "Results go to Slack, the ticketing system, or the engineering team — wherever investigations need to land.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded border border-[var(--border)] bg-[var(--bg-card)] p-4 transition-colors duration-200 hover:border-[var(--accent)]/30"
                >
                  <span className="shrink-0 text-xs text-[var(--accent)]">
                    [{item.step}]
                  </span>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2 className="mb-4 mt-12 text-lg font-bold text-[var(--text-primary)]">
              Quick Start
            </h2>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">
              Deploy CogniLogs in your environment:
            </p>
            <div className="rounded border border-[var(--border)] bg-[var(--bg-secondary)] p-4 text-xs text-[var(--text-secondary)]">
              <pre className="leading-relaxed font-code">{quickStart}</pre>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h2 className="mb-4 mt-12 text-lg font-bold text-[var(--text-primary)]">
              Architecture
            </h2>
            <div className="rounded border border-[var(--border)] bg-[var(--bg-secondary)] p-4 text-xs text-[var(--text-secondary)]">
              <pre className="leading-relaxed font-code">{architecture}</pre>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
