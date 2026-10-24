import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "Early access | CogniLogs",
  description:
    "Join the early-access list for CogniLogs, the local-first support automation layer for Freshdesk teams. Design-partner spots are opening in small groups.",
};

const faqItems = [
  {
    question: "Who is early access for?",
    answer:
      "Freshdesk teams with repeatable support work: questions that already have answers, issues that follow a diagnostic pattern, and feature requests that deserve a real next step. Support leaders and support-ops teams are the primary design partners.",
  },
  {
    question: "What does a design partner get?",
    answer:
      "A local deployment pilot, a direct feedback loop with the team building it, and influence over the paths, thresholds, and handoffs that matter most to your queue. We are not promising discounts or launch dates.",
  },
  {
    question: "What does local deployment involve?",
    answer:
      "CogniLogs runs on your servers or inside your network. We will agree on the host, network access, and support model with your team before the pilot. Ticket content and run history stay in your environment, and we document any external service a workflow uses.",
  },
  {
    question: "What about compliance?",
    answer:
      "Local deployment can reduce the number of data transfers and third-party processors your team has to review. We do not claim certifications we have not earned. We will provide deployment documentation and answer your security questions.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pricing is not public yet. Early partners will see clear terms before making any commitment. The preview is not a paid production contract.",
  },
  {
    question: "What do you need from us?",
    answer:
      "A conversation about the workflows that hurt, a few real ticket patterns to design against, and feedback as the loop takes shape. If a sandboxed test makes sense, we will define that access with you first.",
  },
  {
    question: "When will CogniLogs launch?",
    answer:
      "We are not announcing a general-availability date. We are onboarding in small groups so each support loop is proven before the next one. The product guide describes the workflow, not a committed release date.",
  },
  {
    question: "Which integrations are supported?",
    answer:
      "Freshdesk is the first and only confirmed integration. Slack, Jira, Linear, Notion, Confluence, GitHub, and Datadog are planned surfaces, not live yet.",
  },
  {
    question: "What happens after I join?",
    answer:
      "We review requests as spots open. If there is a fit, we will reach out to learn about your queue and the workflows you want to close. No newsletter, no drip sequence.",
  },
];

const goodFit = [
  "You run support in Freshdesk.",
  "Your queue has repeatable questions, issues, or feature requests.",
  "You want to see the evidence and keep a person in control.",
  "You can host CogniLogs on your own servers or inside your network.",
  "You can partner on a preview and tell us when it is wrong.",
];

const notYet = [
  "You need a broad live connector catalog today.",
  "You are looking for a customer-facing chatbot.",
  "Your support system is not Freshdesk.",
  "You need certifications or a production SLA today.",
];

export default function WaitlistPage() {
  return (
    <div>
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="shell">
          <div className="rounded-[32px] bg-accent px-6 py-10 text-accent-ink sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7 lg:row-start-1">
                <h1 className="display-1 max-w-[620px]">
                  Be first in the <span className="squiggle squiggle-ink">loop.</span>
                </h1>
                <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-accent-ink sm:text-[18px]">
                  CogniLogs is opening early access to a small group of
                  Freshdesk teams. The first deployments run inside your network.
                  If your queue is full of work that should be resolvable, we
                  want to build the loop with you.
                </p>
              </div>

              <div className="lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:self-start">
                <div className="rounded-[24px] bg-white/45 p-5 sm:p-6">
                  <p className="text-[15px] font-medium text-accent-ink">
                    Request a design-partner spot
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-accent-ink">
                    One email. We review requests as spots open.
                  </p>
                  <div className="mt-5">
                    <WaitlistForm />
                  </div>
                  <p className="mt-3 text-[13px] leading-5 text-accent-ink">
                    No newsletter. No spam. If it is not a fit, we will say so.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 lg:row-start-2">
                <div className="space-y-3">
                  {[
                    "A local deployment pilot",
                    "Shape the paths, thresholds, and handoffs",
                    "A direct line to the team building it",
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex items-center gap-2.5 text-[15px] font-medium text-accent-ink"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-ink/10">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </p>
                  ))}
                </div>

                <p className="mt-8 max-w-[440px] text-[13px] leading-5 text-accent-ink">
                  We are not announcing a launch date or a discount. We are
                  looking for teams who want to close real support loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[360px]">
                Who this is for.
              </h2>
              <p className="mt-5 max-w-[360px] text-[16px] leading-7 text-muted-strong">
                We would rather find the right five teams than the first fifty.
                Here is the short version.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              <div className="rounded-[24px] bg-surface p-6">
                <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-green-strong">
                  <Check className="h-3.5 w-3.5" />
                  A good fit
                </p>
                <ul className="mt-4 space-y-3">
                  {goodFit.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-6 text-muted-strong"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-green-soft">
                        <Check className="h-2.5 w-2.5 text-green-strong" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] bg-paper-deep p-6">
                <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-strong">
                  <Minus className="h-3.5 w-3.5" />
                  Not yet
                </p>
                <ul className="mt-4 space-y-3">
                  {notYet.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-6 text-muted-strong"
                    >
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-surface">
                        <Minus className="h-2.5 w-2.5 text-muted" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display-2">Questions.</h2>
              <p className="mt-5 max-w-[340px] text-[16px] leading-7 text-muted-strong">
                What we can say clearly today about the preview, the deployment,
                and the work.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
