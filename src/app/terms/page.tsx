import type { Metadata } from "next";
import LegalShell, {
  LegalList,
  LegalSection,
} from "@/components/layout/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service | cognilogs",
  description:
    "The terms that apply to the cognilogs website and early-access preview, including local deployments for ticketing support automation.",
};

export default function TermsPage() {
  return (
    <LegalShell
      current="terms"
      title="Terms of Service"
      description="The rules for this site and the cognilogs early-access preview."
      updated="October 2026"
      summary="cognilogs is an early-access product, not a production service with a promised uptime. Use it lawfully, keep a person responsible for automated output, and review the evidence behind a reply. Local deployments run on infrastructure your organization controls."
    >
      <LegalSection title="Acceptance">
        <p>
          These terms apply to this website and to the cognilogs early-access
          preview. By using the site or joining the preview, you agree to them.
          If you are using cognilogs for an organization, you confirm that you
          have authority to accept these terms for that organization.
        </p>
        <p>
          If you do not agree, do not use the site or the preview. If your
          organization has a separate signed agreement with cognilogs, that
          agreement controls where it conflicts with these terms.
        </p>
      </LegalSection>

      <LegalSection title="What cognilogs is">
        <p>
          cognilogs is a support automation layer that works with the ticketing
          system your organization already runs. It reads ticket events,
          classifies the request, gathers knowledge or diagnostic evidence,
          drafts or sends a response, enables features with permission, drafts
          RCAs for human review, and can watch escalated cases against an SLA.
        </p>
        <p>
          The first deployment model is local. cognilogs runs on infrastructure
          your organization controls, inside your network. Your organization is
          responsible for the host, network, credentials, backups, and retention
          policy unless a separate agreement says otherwise.
        </p>
        <p>
          The preview is pre-release software. Features, interfaces, thresholds,
          and supported workflows may change. We do not promise that any
          particular feature will be included in a future release.
        </p>
      </LegalSection>

      <LegalSection title="Early access">
        <p>
          Access to the preview is limited and may be granted or declined at our
          discretion. The preview is provided for evaluation and design-partner
          feedback. It is not a production service, and we do not offer an
          uptime or response-time SLA unless a separate written agreement says
          otherwise. Local deployment does not change that.
        </p>
        <p>
          Do not use the preview for emergency response, medical, legal, or
          other high-risk decisions where an error could cause serious harm.
        </p>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <LegalList
          items={[
            "Use cognilogs only for lawful purposes and only on data you are authorized to process.",
            "Keep your account and integration credentials secure, and tell us promptly if you believe they have been compromised.",
            "Keep the deployment host and network secure, including access controls, patching, backups, and credentials.",
            "Review automated output and configure a confidence threshold appropriate for each queue.",
            "Make sure your customers and employees have been given any notices or consents required for the data you connect.",
            "Do not attempt to disrupt the service, bypass access controls, reverse engineer non-public parts of the service, or use it to build a competing product.",
            "Do not upload malware, unlawful content, or sensitive data that your onboarding terms do not cover.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Customer data and permissions">
        <p>
          You retain ownership of the data you connect to cognilogs. You grant us
          a limited license to process that data to provide, secure, and improve
          the preview, and to comply with the law. We will handle it as described
          in our Privacy Policy and any onboarding terms we agree with your
          organization. For a local deployment, your organization controls the
          environment and the data inside it. We may access the deployment only
          as agreed for support or security work.
        </p>
        <p>
          You are responsible for the permissions you grant. If you authorize
          cognilogs to read tickets, write replies, update statuses, enable
          features through an API or browser automation, or take other actions,
          those actions are treated as authorized by your organization.
        </p>
      </LegalSection>

      <LegalSection title="AI output and human review">
        <p>
          cognilogs uses automated systems, which can produce incomplete,
          inaccurate, or unexpected output. A confidence score is a signal, not a
          guarantee. Your team remains responsible for reviewing automated
          replies and actions, especially where the result affects a customer,
          an account, or a financial outcome. RCAs and sensitive feature
          enablement require human review.
        </p>
        <p>
          The product is designed to hold back low-confidence replies and prepare
          a private handoff, but you must configure and monitor it appropriately
          for your support process.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          cognilogs works with the ticketing system and other services your
          organization chooses to connect, and may use hosting, model, and
          communication providers. A local deployment may still depend on
          services your organization chooses to connect. Those services are
          governed by their own terms and privacy policies. We are not
          responsible for a third party&apos;s service, availability, or changes
          to its API.
        </p>
      </LegalSection>

      <LegalSection title="Security and compliance">
        <p>
          Local deployment gives your organization control over the host,
          network, credentials, backups, and retention. It is designed to keep
          ticket data and run history inside the environment your organization
          controls.
        </p>
        <p>
          We provide deployment documentation and describe which controls belong
          to your team and which belong to us. Certification work is in progress.
          You are responsible for reviewing the deployment and confirming that it
          meets your legal and regulatory requirements.
        </p>
      </LegalSection>

      <LegalSection title="Fees">
        <p>
          Early customers can get a ticket analyzed for as low as ₹10. The final
          price depends on the local model, infrastructure, volume, and depth of
          each analysis. Any fees will be described in a separate order or
          agreement before they apply. You are responsible for your own costs of
          running a local deployment, including infrastructure, internet, model
          usage, and third-party subscriptions.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          cognilogs and its licensors own the service, including its software,
          design, documentation, and trademarks. These terms do not transfer any
          ownership to you. You may not use our name or marks in a way that
          suggests endorsement without our written permission.
        </p>
        <p>
          If you send us feedback or suggestions, you allow us to use them to
          improve the product without restriction or payment. You are not
          required to send feedback.
        </p>
      </LegalSection>

      <LegalSection title="Suspension and termination">
        <p>
          You may stop using the preview at any time. We may suspend or end
          access if these terms are violated, if continuing would create a
          security or legal risk, or if we discontinue the preview. Where
          practical, we will give reasonable notice.
        </p>
        <p>
          After access ends, we will delete or de-identify preview data according
          to the onboarding terms and applicable law. You may request deletion of
          your waitlist information at any time.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          To the maximum extent permitted by law, the site and preview are
          provided &quot;as is&quot; and &quot;as available.&quot; We disclaim
          implied warranties of merchantability, fitness for a particular
          purpose, non-infringement, and any warranty arising from the course of
          dealing. We do not warrant that the service will be uninterrupted,
          error-free, or that automated output will be accurate.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, neither party will be liable
          for indirect, incidental, special, consequential, or punitive damages,
          or for lost profits, revenue, data, or goodwill, arising from these
          terms or the preview. Our aggregate liability will not exceed the
          greater of the amount you paid us in the twelve months before the claim
          or one hundred U.S. dollars.
        </p>
        <p>
          These limits do not apply where the law does not allow them to be
          limited, or to liability for fraud, willful misconduct, or death or
          personal injury caused by negligence.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms as the product changes. We will post the new
          version here and update the date at the top. If a change materially
          affects your rights or obligations, we will take reasonable steps to
          notify you before it takes effect. Continued use after the effective
          date means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law and contact">
        <p>
          These terms are governed by the laws of the State of California,
          without regard to conflict-of-law rules. Disputes will be resolved in
          the state or federal courts located in San Francisco County,
          California, unless applicable law requires a different forum.
        </p>
        <p>
          Questions about these terms can be sent to{" "}
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
