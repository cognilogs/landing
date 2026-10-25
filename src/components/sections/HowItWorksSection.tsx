import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  IntakeScene,
  ResolutionScene,
  SlaScene,
} from "@/components/ui/SupportScenes";

const steps = [
  {
    title: "Pick up the ticket.",
    body: "A scheduler polls your ticketing system on the interval you set, from every five minutes to every hour. New and replied tickets arrive with the thread, customer, and SLA context attached. The content is sanitized before the model sees it.",
    points: [
      "Any ticketing system, not a single vendor.",
      "Configurable polling interval.",
      "Sanitization and context assembly before action.",
    ],
    scene: <IntakeScene />,
    tone: "bg-accent-soft text-accent-strong",
    link: "/pricing",
    linkLabel: "See the deployment model",
  },
  {
    title: "Classify the request.",
    body: "The agent separates a query, an issue, and a feature enablement request before it chooses a path. It checks whether the details it needs are present. If something is missing, the customer gets one clear question.",
    points: [
      "Three request types, one workflow.",
      "Prerequisite checks before any tool runs.",
      "The ticket waits in the right state, not a queue.",
    ],
    tone: "bg-blue-soft text-blue-strong",
    link: "/features#request-types",
    linkLabel: "See the three paths",
  },
  {
    title: "Do the work.",
    body: "Queries use the knowledge base: official docs, internal notes, and how agents answered before. Issues check audit logs, the codebase, databases, Kibana, Sentry, or Datadog. Feature requests can be enabled through an API or browser automation, with approval where it is required.",
    points: [
      "Evidence from the systems your team already checks.",
      "Automated fixes trained on resolution steps.",
      "RCA drafts stay with a person before they go out.",
    ],
    scene: <ResolutionScene />,
    tone: "bg-green-soft text-green-strong",
    link: "/features#investigation",
    linkLabel: "See the investigation layer",
  },
  {
    title: "Decide and hand off.",
    body: "Confidence decides whether the customer sees a reply. Above the line, the reply and resolution go out with sources attached. Below it, the case becomes a private note with the run, evidence, and suggested next step.",
    points: [
      "The default threshold is 0.85.",
      "RCAs always receive human review.",
      "A linked child ticket carries the context to another team.",
    ],
    tone: "bg-pink-soft text-pink-strong",
    link: "/docs#confidence",
    linkLabel: "Read the decision rules",
  },
  {
    title: "Watch until it closes.",
    body: "Every child ticket enters an SLA tracker by severity and priority. The agent who owns it is notified by Slack or email. After three notifications without movement, their manager is brought in. When the child is resolved, cognilogs checks whether the answer can go to the customer and drafts the reply. A CSAT request can follow.",
    points: [
      "SLA checks every 15 minutes.",
      "Three notifications, then the manager.",
      "Child resolution can become the customer reply.",
    ],
    scene: <SlaScene />,
    tone: "bg-yellow-soft text-[#8a5a09]",
    link: "/features#sla",
    linkLabel: "See the SLA watch",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <h2 className="display-2 max-w-[620px]">
              From ticket to close.
            </h2>
            <p className="lede measure-tight md:justify-self-end">
              A ticket enters from your ticketing system. The loop keeps going
              until the customer has an answer or a person has everything needed
              to finish the job.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24">
          {steps.map((step, index) => {
            const reversed = index % 2 === 1;

            return (
              <ScrollReveal key={step.title} delay={0.04}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`lg:col-span-5 ${
                      reversed ? "lg:order-2 lg:col-start-8" : ""
                    }`}
                  >
                    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      0{index + 1}
                    </p>
                    <h3 className="display-3 mt-3 max-w-[420px]">{step.title}</h3>
                    <p className="mt-5 max-w-[460px] text-[16px] leading-7 text-muted-strong sm:text-[17px]">
                      {step.body}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[15px] leading-6 text-muted-strong"
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${step.tone}`}
                          >
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={step.link}
                      className="group mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
                    >
                      {step.linkLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      reversed ? "lg:order-1 lg:col-start-1" : ""
                    }`}
                  >
                    {step.scene ?? (
                      <div
                        data-ui
                        className="rounded-[24px] bg-surface p-5 sm:p-6"
                      >
                        <div className="flex items-center justify-between text-[11px] text-muted">
                          <span>Queue state</span>
                          <span className="inline-flex items-center gap-1.5 text-green-strong">
                            <span className="h-1.5 w-1.5 rounded-full bg-green" />
                            in progress
                          </span>
                        </div>
                        <div className="mt-4 space-y-2">
                          {[
                            ["Query", "Knowledge base · cited answer"],
                            ["Issue", "Audit log → codebase → database"],
                            ["Feature", "API or browser automation · approval"],
                          ].map(([label, meta]) => (
                            <div
                              key={label}
                              className="flex items-center justify-between gap-3 rounded-xl bg-paper px-3 py-3"
                            >
                              <span className="text-[12px] font-medium text-ink">
                                {label}
                              </span>
                              <span className="text-right text-[10px] text-muted">
                                {meta}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-4 text-[10px] leading-5 text-muted">
                          The agent handles five to ten tickets at a time,
                          depending on complexity and the checks each one needs.
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
