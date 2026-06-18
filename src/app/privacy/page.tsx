import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Legal
            </p>
            <h1 className="mb-8 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              <p>
                <span className="font-bold text-[var(--text-primary)]">
                  Last updated:
                </span>{" "}
                June 2026
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                1. Data We Collect
              </h2>
              <p>
                CogniLogs collects only the data necessary to provide and improve
                our service. This includes account information (name, email,
                organization name), usage data (feature interactions, skill file
                execution logs), and optional billing information.
              </p>
              <p>
                CogniLogs agents never store raw customer data from your
                infrastructure. All investigation data remains within your VPC
                unless you explicitly configure external storage.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                2. How We Use Data
              </h2>
              <p>
                We use collected data to operate, maintain, and improve CogniLogs;
                to communicate with you about updates, security, and support; and
                to comply with legal obligations.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                3. Data Sharing
              </h2>
              <p>
                We do not sell your personal data. We do not share investigation
                data with third parties. We may share anonymized, aggregate usage
                statistics for product improvement.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                4. Security
              </h2>
              <p>
                All data in transit is encrypted via TLS 1.3. Data at rest is
                encrypted using AES-256. CogniLogs is SOC 2 Type II and ISO 27001
                certified. Our infrastructure undergoes regular third-party
                penetration testing.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                5. Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data at any time by contacting privacy@cognilogs.ai.
              </p>

              <h2 className="text-base font-bold text-[var(--text-primary)]">
                6. Contact
              </h2>
              <p>
                For privacy-related inquiries, contact privacy@cognilogs.ai or
                write to: CogniLogs, Inc., 123 Engineering Lane, San Francisco,
                CA 94105.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
