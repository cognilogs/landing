import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

const faqItems = [
  {
    question: "What does cognilogs automate?",
    answer:
      "The work around a support ticket: polling your ticketing system, sanitizing the content, classifying the request, retrieving knowledge, investigating issues across logs, code, databases, and observability tools, enabling features with approval, drafting RCAs, watching child-ticket SLAs, and following up with CSAT.",
  },
  {
    question: "Which ticketing systems does it support?",
    answer:
      "cognilogs is built to poll any ticketing system. Zendesk, Intercom, Jira Service Management, HubSpot, and Salesforce are examples. Your ticketing system stays the system of record.",
  },
  {
    question: "Do we have to replace our support team?",
    answer:
      "No. The agent takes the work that can be verified and leaves the judgment calls to a person. A person can review, override, or take over at any point. RCAs always receive human review before they are sent.",
  },
  {
    question: "Where does it run?",
    answer:
      "The first deployments are local. The app, the SLA worker, and the run history run on your servers or inside your network. You choose the model, including local and open-weight models. Stronger models produce better work; the evidence and approval rules stay the same.",
  },
  {
    question: "What happens when confidence is low?",
    answer:
      "The customer does not get an automated reply. cognilogs posts a private note with the run, evidence, and suggested next step, and assigns the case to a human queue. The default threshold is 0.85.",
  },
  {
    question: "How does it investigate an issue?",
    answer:
      "It reads audit logs, searches the codebase, runs read-only database queries, and checks Kibana, Sentry, or Datadog. If the fix is in scope, it verifies the change before replying. If it is not, it opens a child ticket with the evidence attached.",
  },
  {
    question: "Can it enable a feature for a customer?",
    answer:
      "Yes, when the workflow allows it. It can use an admin API or browser automation to enable a feature on your internal panel or the customer portal. Sensitive changes can wait for an approver before the agent acts and replies.",
  },
  {
    question: "How does SLA monitoring work?",
    answer:
      "Every child ticket enters an SLA tracker by severity and priority. The owner is notified by Slack or email, and a manager is brought in after three notifications without movement. When the child is resolved, cognilogs checks whether the answer can be shared with the customer and drafts the reply.",
  },
  {
    question: "What does it cost?",
    answer:
      "Early customers can get a ticket resolved for as low as ₹10. The final price depends on the local model, infrastructure, and the depth of each resolution. You own the model and infrastructure costs.",
  },
  {
    question: "How do we get early access?",
    answer:
      "Join the waitlist or email team@cognilogs.com. We are opening local deployments in small groups so each loop is proven before the next one.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="display-2">Questions, answered.</h2>
              <p className="mt-5 max-w-[340px] text-[16px] leading-7 text-muted-strong">
                The short version of how the loop works, what it checks, and
                where a person stays in charge.
              </p>
              <Link
                href="/docs"
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
              >
                Read the product guide
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
