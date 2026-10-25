import type { Metadata } from "next";
import LegalShell, {
  LegalList,
  LegalSection,
} from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy | cognilogs",
  description:
    "How cognilogs handles waitlist information and data during local deployments and the ticketing support-automation preview.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      current="privacy"
      title="Privacy Policy"
      description="What we collect, why we collect it, and how to reach us about it."
      updated="October 2026"
      summary="We collect the email you give us for early access, use it to review your request, and do not sell it. For local deployments, ticket content stays in the environment your organization controls, subject to the deployment terms we agree with you."
    >
      <LegalSection title="Scope">
        <p>
          This policy explains how cognilogs handles personal information on
          this website and during the early-access preview. It does not cover
          your organization&apos;s ticketing system or any third-party service
          that has its own privacy policy.
        </p>
      </LegalSection>

      <LegalSection title="Local deployments">
        <p>
          For a local deployment, your organization controls the host, network,
          credentials, backups, and retention policy. cognilogs may receive
          deployment and support information you choose to share. Ticket
          content, replies, private notes, and run evidence stay in your
          environment unless you give us access for support. Your security team
          can review the deployment scope and data flows before the pilot.
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <p>We collect information in three ways.</p>
        <LegalList
          items={[
            "Waitlist information. When you request early access, we receive the email address you submit and the page or source that referred you.",
            "Preview and deployment information. If your organization joins a local pilot, we may receive configuration details, contact information for your team, and support requests you choose to share. We ask for the access needed to set up and support the workflows you agree to test.",
            "Technical and communications data. Our hosting and email providers may process basic request logs, such as an IP address and the time of a request. We also keep the emails you send us about the preview.",
          ]}
        />
        <p>
          We do not ask for payment information on this website. The waitlist
          form does not create an account.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <LegalList
          items={[
            "To review early-access requests and decide whether a team is a good fit.",
            "To contact you about the preview, onboarding, and the workflows you want to test.",
            "To set up and support the local deployment, including troubleshooting and security reviews.",
            "To debug problems, improve the product, and keep the service secure.",
            "To comply with applicable law and enforce our agreements.",
          ]}
        />
        <p>
          We use waitlist emails to respond about early access. We do not add
          waitlist addresses to a marketing newsletter.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          We do not sell personal information. We share it only with service
          providers that help us host this website, communicate with you, or
          support the preview, or when the law requires it. Those providers are
          expected to protect the information and use it only for the service
          they provide.
        </p>
        <p>
          For local deployments, your organization controls the environment and
          the ticket data inside it. We may receive limited deployment and
          support information. If a workflow depends on an external model,
          knowledge, or communication service, your team approves the scope
          before the pilot. We limit what those providers may do with the data
          through contractual and technical controls.
        </p>
        <p>
          If cognilogs is involved in a merger, acquisition, or sale of assets,
          information may be transferred as part of that transaction. We will
          tell you if that happens and the new owner is bound by this policy.
        </p>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          We keep waitlist information until you ask us to delete it or until it
          is no longer needed to review early-access requests. For a local
          deployment, your organization controls retention of ticket data in its
          environment. We keep the limited deployment and support information we
          receive for the period described in the onboarding terms we agree with
          your organization. When that period ends, we delete or de-identify the
          data unless the law requires us to keep it.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use administrative, technical, and organizational measures designed
          to protect the information we handle, including access controls,
          encrypted connections, and limited internal access. For a local
          deployment, your organization controls the host, network, credentials,
          backups, and access policies. We will document which security
          responsibilities belong to your team and which belong to us. No method
          of transmission or storage is perfectly secure, so we cannot promise
          absolute security.
        </p>
        <p>
          If we learn of a security incident that affects personal information we
          control, we will notify you and the relevant authorities as required by
          applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Your choices and rights">
        <p>
          Depending on where you live, you may have the right to access, correct,
          delete, or restrict the use of your personal information, or to object
          to certain processing. To make a request, email{" "}
          <a
            href="mailto:team@cognilogs.com"
            className="font-medium text-ink underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
          >
            team@cognilogs.com
          </a>
          . We may need to verify your identity before acting on a request.
        </p>
        <p>
          You can ask to be removed from the waitlist at any time. If your team
          is in a local pilot, contact us and we will work through the deletion
          process with your organization.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and analytics">
        <p>
          This site does not use advertising cookies. Our hosting provider may
          process basic technical logs to deliver the site and protect it from
          abuse. If we add product analytics later, we will update this page and
          describe the choice available to you.
        </p>
      </LegalSection>

      <LegalSection title="International processing">
        <p>
          Our website and waitlist providers may process information in countries
          other than the one where you live. A local deployment is designed to
          keep ticket data in the environment your organization chooses. Where
          required, we use appropriate safeguards for transfers we control and
          require providers to protect the information.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This site and the preview are intended for organizations and are not
          directed to children under 16. We do not knowingly collect personal
          information from children.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy as the product and our practices change. We
          will post the new version here and update the date at the top. If a
          change materially affects how we use information you have already
          given us, we will take reasonable steps to tell you.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy or your information can be sent to{" "}
          <a
            href="mailto:team@cognilogs.com"
            className="font-medium text-ink underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
          >
            team@cognilogs.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
