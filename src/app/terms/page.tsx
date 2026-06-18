import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Legal
            </p>
            <h1 className="mb-8 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
              Terms of Service
            </h1>
            <div className="space-y-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              <p>
                <span className="font-bold text-[var(--text-primary)]">
                  Last updated:
                </span>{" "}
                June 2026
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using CogniLogs, you agree to be bound by these
                Terms of Service. If you do not agree, do not use the service.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                2. Service Description
              </h2>
              <p>
                CogniLogs provides an autonomous backend investigation platform
                that executes predefined skill files against customer
                infrastructure. The service is provided &quot;as is&quot; and
                subject to change with reasonable notice.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                3. User Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials, for all activity under your account, and for
                ensuring that your use of CogniLogs complies with applicable laws.
                You retain full ownership of your skill files and investigation
                data.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                4. Service Level
              </h2>
              <p>
                CogniLogs aims for 99.9% uptime for the agent orchestration
                layer. Agent execution within your VPC depends on your
                infrastructure availability. Detailed SLAs are provided in
                enterprise agreements.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                5. Limitation of Liability
              </h2>
              <p>
                CogniLogs shall not be liable for indirect, incidental, or
                consequential damages arising from the use of the service. Our
                total liability is limited to the amount paid for the service in
                the 12 months preceding the claim.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                6. Termination
              </h2>
              <p>
                Either party may terminate the agreement with 30 days written
                notice. Upon termination, you may export your skill files and
                investigation data. CogniLogs will delete your data within 90
                days unless required otherwise by law.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                7. Changes to Terms
              </h2>
              <p>
                We may update these terms with 30 days notice. Continued use of
                CogniLogs after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                8. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of California.
                Disputes shall be resolved in the courts of San Francisco County.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
