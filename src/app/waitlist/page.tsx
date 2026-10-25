import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const metadata: Metadata = {
  title: "Early access | cognilogs",
  description:
    "Join the early-access list for cognilogs, the local-first support agent for any ticketing system. Local deployment, any local model, and design-partner spots opening in small groups.",
};

const faqItems = [
  {
    question: "Who is early access for?",
    answer:
      "Teams with support work that crosses systems: identity and provisioning failures, payment or order mismatches, migration mistakes, access requests, and feature enablement. You can run any ticketing system and host cognilogs on your own infrastructure.",
  },
  {
    question: "What does a design partner get?",
    answer:
      "A local deployment pilot, a direct feedback loop with the team building it, and influence over the paths, approvals, and handoffs that matter most to your queue. We are not promising discounts or launch dates.",
  },
  {
    question: "What does local deployment involve?",
    answer:
      "cognilogs runs on your servers or inside your network. We agree on the host, network access, model, and support model before the pilot. Ticket content and run history stay in your environment.",
  },
  {
    question: "Which models can we use?",
    answer:
      "Any local model your infrastructure can serve, including open-weight models. Stronger models produce better work. The evidence, approval, and audit rules stay the same.",
  },
  {
    question: "What about security?",
    answer:
      "Local deployment keeps ticket data and run history inside your environment. We provide deployment documentation, answer security questionnaires, and record model actions, tool calls, approvals, and replies. Certification work is in progress.",
  },
  {
    question: "What does it cost?",
    answer:
      "Early customers can get a ticket analyzed for as low as ₹10. The final price depends on the local model, infrastructure, and depth of each analysis. You own the model and infrastructure costs.",
  },
  {
    question: "What do you need from us?",
    answer:
      "A conversation about the workflows that hurt, a few real ticket patterns to design against, and feedback as the loop takes shape. If a sandboxed test makes sense, we define that access with you first.",
  },
  {
    question: "When will cognilogs launch?",
    answer:
      "We are onboarding in small groups so each support loop is proven before the next one. The product guide describes the workflow, not a committed release date.",
  },
  {
    question: "Which integrations are supported?",
    answer:
      "Any ticketing system can be polled. The evidence layer reads audit logs, codebases, databases, Kibana, Sentry, and Datadog. Slack and email carry SLA notifications. Feature enablement can use an API or browser automation.",
  },
  {
    question: "What happens after I join?",
    answer:
      "We review requests as spots open. If there is a fit, we reach out from team@cognilogs.com to learn about your queue and the workflows you want to close. No newsletter, no drip sequence.",
  },
];

const goodFit = [
  "You run support in any ticketing system.",
  "Your queue has tickets that cross identity, code, data, or billing systems.",
  "You want to see the evidence and keep a person in control.",
  "You can host cognilogs on your own servers or inside your network.",
  "You can partner on a preview and tell us when it is wrong.",
];

const notYet = [
  "You need a customer-facing chatbot.",
  "You only need simple macros for repeated questions.",
  "You need a fully hosted cloud deployment today.",
];

export default function WaitlistPage() {
  return (
    <div>
      <section className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="shell">
          <div className="rounded-[32px] bg-accent px-6 py-10 text-accent-ink sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7 lg:row-start-1">
                <p className="inline-flex items-center gap-2 rounded-full bg-accent-ink/10 px-3 py-1.5 text-[11px] font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-ink" />
                  Early access · local deployment
                </p>
                <h1 className="display-1 mt-5 max-w-[620px]">
                  Be first in the <span className="squiggle squiggle-ink">loop.</span>
                </h1>
                <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-accent-ink sm:text-[18px]">
                  cognilogs is opening early access to a small group of teams
                  with tickets that need real investigation. Any ticketing
                  system, any local model, and a person in control.
                </p>
              </div>

              <div className="lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:self-start">
                <div className="rounded-[24px] bg-white/45 p-5 sm:p-6">
                  <p className="text-[15px] font-medium text-accent-ink">
                    Request a design-partner spot
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-accent-ink">
                    One email. We reply from team@cognilogs.com.
                  </p>
                  <div className="mt-5">
                    <WaitlistForm idPrefix="waitlist-page" />
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
                    "Shape the paths, approvals, and handoffs",
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
              <h2 className="display-2 max-w-[360px]">Who this is for.</h2>
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
