import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

const faqItems = [
  {
    question: "What does CogniLogs automate?",
    answer:
      "The work between a Freshdesk ticket and a resolution: classification, missing-information requests, knowledge retrieval, diagnostic runs, feature-request routing, confidence gating, escalation, and SLA monitoring. It runs the support process, from the first ticket event to the SLA watch.",
  },
  {
    question: "Do we have to leave Freshdesk?",
    answer:
      "No. Freshdesk stays the system of record. CogniLogs reads ticket events and writes the result back: replies, private notes, statuses, and linked child tickets.",
  },
  {
    question: "Where does CogniLogs run?",
    answer:
      "The first deployments are local. CogniLogs runs on your servers or inside your network, and ticket content, credentials, and run history stay in the environment you control. We document any external service a workflow depends on before a pilot.",
  },
  {
    question: "What about compliance?",
    answer:
      "Local deployment can reduce the number of data transfers and third-party processors your security team has to review. We do not claim certifications we have not earned. We will provide deployment documentation, answer questionnaires, and list certifications only after they are issued.",
  },
  {
    question: "What happens when confidence is low?",
    answer:
      "The customer does not get an automated reply. CogniLogs posts a private note with the run and evidence, and assigns the case to a human queue. The default threshold is 0.85.",
  },
  {
    question: "Can we change the confidence threshold?",
    answer:
      "The default is 0.85. Teams should be able to make the line stricter for sensitive queues. The exact controls and per-queue rules are part of the early-access design, not a shipped promise yet.",
  },
  {
    question: "Does it replace our support team?",
    answer:
      "No. It takes repeatable work off the queue and makes handoffs more complete. A person can review, override, or take over at any point.",
  },
  {
    question: "How does SLA monitoring work?",
    answer:
      "Escalated cases create a linked child ticket and register with the SLA database. A background worker checks open children every 15 minutes, syncs activity to the parent, posts reminders, and escalates a breach to a manager. Slack escalation is planned, not live.",
  },
  {
    question: "Which integrations are available?",
    answer:
      "Freshdesk is the first and only confirmed integration. Slack, Jira, Linear, Notion, Confluence, GitHub, and Datadog are planned surfaces, not shipped integrations.",
  },
  {
    question: "How do we get early access?",
    answer:
      "The waitlist is open for Freshdesk teams. Early design partners help shape the paths, thresholds, deployment, and operating model before the product opens more broadly.",
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
                The short version of how the loop works, what it needs, and
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
