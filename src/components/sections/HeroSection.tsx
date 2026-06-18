"use client";

import TerminalWindow from "@/components/ui/TerminalWindow";
import WaitlistForm from "@/components/ui/WaitlistForm";

const heroLines = [
  { text: "cognilogs troubleshoot --campaign-id CAM-8472", type: "input" as const },
  { text: "Loading skill: email_campaign_suspension...", type: "output" as const },
  { text: "→ Checking campaign status across providers", type: "info" as const },
  { text: "→ Querying SMTP logs for recent failures", type: "info" as const },
  { text: "→ Analyzing bounce rate patterns", type: "info" as const },
  { text: "Result: Campaign suspended due to >5% hard bounce rate", type: "output" as const },
  { text: "→ Remediation: Review recipient list, remove invalid addresses", type: "info" as const },
  { text: "→ Remediation: Re-submit campaign after list cleanup", type: "info" as const },
];

export default function HeroSection() {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Autonomous Backend Investigation Platform
          </p>
          <h1 className="mb-4 text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Automate every backend investigation.
            <br />
            <span className="text-[var(--accent)]">
              From escalation to root cause — in minutes.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
            CogniLogs agents run predefined skill files against your backend
            systems — connecting to databases, APIs, and infrastructure to
            troubleshoot issues autonomously. Output: a complete investigation
            log with root cause and remediation steps.
          </p>
          <div className="mx-auto mb-12 max-w-md">
            <WaitlistForm />
          </div>
        </div>

        <TerminalWindow
          lines={heroLines}
          title="cognilogs-agent — investigation #8472"
          className="mx-auto max-w-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
