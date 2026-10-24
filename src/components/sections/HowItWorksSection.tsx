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
    title: "First, read the request.",
    body: "Every new or replied Freshdesk ticket is classified as a query, an issue, or a feature request. CogniLogs pulls out the details it needs and asks for anything missing before it takes action.",
    points: [
      "Intent and entities come before action.",
      "One clear question beats a missing-information form.",
      "A ticket does not move until the request is clear.",
    ],
    scene: <IntakeScene />,
    tone: "bg-accent-soft text-accent-strong",
    link: "/docs#ticket-lifecycle",
    linkLabel: "Read the ticket lifecycle",
  },
  {
    title: "Then, do the work.",
    body: "Queries draw from your knowledge base. Issues run a scenario-specific playbook against logs and admin APIs. Feature requests are checked and routed. The run leaves a source or a result behind.",
    points: [
      "Diagnostics run against real logs and APIs.",
      "Confidence decides the next move.",
      "A high score resolves the ticket. A low score hands it to a person.",
    ],
    scene: <ResolutionScene />,
    tone: "bg-green-soft text-green-strong",
    link: "/features#resolution",
    linkLabel: "See the resolution paths",
  },
  {
    title: "Keep watching until it closes.",
    body: "When a case needs a person, CogniLogs opens a linked child ticket, records severity, and keeps checking. Updates sync to the parent. Reminders and breach escalations run on a schedule instead of on memory.",
    points: [
      "Parent and child tickets stay linked.",
      "The SLA worker checks every 15 minutes.",
      "Reminders escalate to a manager when the limit is hit.",
    ],
    scene: <SlaScene />,
    tone: "bg-pink-soft text-pink-strong",
    link: "/docs#sla-monitoring",
    linkLabel: "See how SLA watch works",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <h2 className="display-2 max-w-[560px]">
              A ticket, handled end to end.
            </h2>
            <p className="lede measure-tight md:justify-self-end">
              One Freshdesk event starts a chain of work. It keeps going until
              the customer has an answer or a person has everything needed to
              finish the job.
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
                    <h3 className="display-3 max-w-[420px]">{step.title}</h3>
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
                    {step.scene}
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
