import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Timer,
  ToggleLeft,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const routes = [
  {
    title: "Where did my export go?",
    meta: "Query",
    tone: "bg-blue-soft text-blue-strong",
    dot: "bg-blue",
  },
  {
    title: "Refund still pending",
    meta: "Issue",
    tone: "bg-green-soft text-green-strong",
    dot: "bg-green",
  },
  {
    title: "SAML for contractors",
    meta: "Feature",
    tone: "bg-pink-soft text-pink-strong",
    dot: "bg-pink",
  },
];

function IntentFragment() {
  return (
    <div data-ui className="mt-8 rounded-[18px] bg-paper p-2">
      <div className="flex items-center justify-between px-3 py-2 text-[11px] text-muted">
        <span>Incoming tickets</span>
        <span>3 routes</span>
      </div>
      <div className="space-y-1">
        {routes.map((route) => (
          <div
            key={route.title}
            className="flex items-center gap-3 rounded-xl bg-surface px-3 py-3"
          >
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${route.dot}`} />
            <span className="min-w-0 flex-1 truncate text-[12.5px] text-ink">
              {route.title}
            </span>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${route.tone}`}
            >
              {route.meta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissingInfoFragment() {
  return (
    <div data-ui className="mt-7 rounded-[18px] bg-surface p-4">
      <div className="flex items-center gap-2 text-[11px] text-muted">
        <MessageSquareText className="h-3.5 w-3.5" />
        Ticket #4821 · reply
      </div>
      <p className="mt-3 text-[13px] leading-6 text-ink">
        “Could you share the order ID? It’s the fastest way to trace the
        payment.”
      </p>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-paper px-3 py-2 text-[11px] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Order ID · waiting on customer
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px]">
        <span className="font-medium text-green-strong">Awaiting customer</span>
        <span className="inline-flex items-center gap-1 text-muted">
          <Timer className="h-3 w-3" />
          Follow-up in 4h
        </span>
      </div>
    </div>
  );
}

function KnowledgeFragment() {
  return (
    <div data-ui className="mt-7 rounded-[18px] bg-surface p-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink">
          <BookOpen className="h-3.5 w-3.5 text-green-strong" />
          Billing policy
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
          <Check className="h-2.5 w-2.5" />
          Cited
        </span>
      </div>
      <p className="mt-3 text-[14px] font-medium leading-5 text-ink">
        Credits apply to the next invoice.
      </p>
      <p className="mt-1.5 text-[11.5px] leading-5 text-muted">
        A duplicate payment is refunded to the original method or credited
        against the next billing cycle.
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {["Policy · §4.2", "Credit note", "Payment method"].map((source) => (
          <span
            key={source}
            className="inline-flex items-center gap-1 rounded border border-line bg-paper px-1.5 py-1 text-[9px] text-muted"
          >
            <FileText className="h-2.5 w-2.5" />
            {source}
          </span>
        ))}
      </div>
    </div>
  );
}

function RunFragment() {
  return (
    <div
      data-ui
      className="mt-8 overflow-hidden rounded-[18px] bg-console p-4 text-console-text"
    >
      <div className="flex items-center justify-between text-[10px]">
        <span className="inline-flex items-center gap-1.5 text-console-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-console-orange" />
          Run · billing.credit
        </span>
        <span className="inline-flex items-center gap-1 text-console-green">
          <Check className="h-3 w-3" />
          verified
        </span>
      </div>
      <div className="mt-3 space-y-2 text-[10.5px] leading-5">
        <code className="block font-mono text-console-green">$ check charge.duplicate</code>
        <code className="block font-mono text-white/65">→ Billing · $49.00 · Oct 18</code>
        <code className="block font-mono text-console-green">$ check refund.settled</code>
        <code className="block font-mono text-white/65">→ RF-2189 · settled Oct 20</code>
        <code className="block font-mono text-console-orange">$ apply credit.note CN-8821</code>
        <code className="block font-mono text-white/65">→ next invoice · scheduled</code>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-2 text-[9.5px] text-console-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
        Scoped admin actions · result recorded in the ticket
      </div>
    </div>
  );
}

function FeatureFragment() {
  return (
    <div data-ui className="mt-7 rounded-[18px] bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] text-muted">Feature request</p>
          <p className="mt-1 text-[13px] font-medium text-ink">
            SAML for contractors
          </p>
        </div>
        <span className="rounded-full bg-pink-soft px-2 py-1 text-[10px] font-medium text-pink-strong">
          New
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-paper p-2.5">
          <p className="flex items-center gap-1 text-[9px] text-muted">
            <ToggleLeft className="h-3 w-3" />
            Admin API
          </p>
          <p className="mt-1 text-[11px] font-medium text-ink">
            SAML not enabled
          </p>
        </div>
        <div className="rounded-lg bg-paper p-2.5">
          <p className="flex items-center gap-1 text-[9px] text-muted">
            <Sparkles className="h-3 w-3" />
            Next step
          </p>
          <p className="mt-1 text-[11px] font-medium text-ink">
            Route to product
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-muted">
        <span>4 linked tickets</span>
        <span className="inline-flex items-center gap-1 font-medium text-pink-strong">
          Product review
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

function HandoffFragment() {
  return (
    <div data-ui className="mt-7 rounded-[18px] bg-surface p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-ink">
          <FileText className="h-3.5 w-3.5" />
          Private note
        </span>
        <span className="rounded-full bg-accent-soft px-2 py-1 text-[9px] font-medium text-accent-strong">
          Confidence 0.62
        </span>
      </div>
      <p className="mt-3 text-[11.5px] leading-5 text-muted">
        Billing credit verified. Refund adjustment needs approval before the
        customer reply is sent.
      </p>
      <div className="mt-3 rounded-lg bg-paper p-2.5">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[8px] font-medium text-white">
            T2
          </span>
          <div>
            <p className="text-[10px] font-medium text-ink">Tier 2 queue</p>
            <p className="text-[9px] text-muted">Evidence attached</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[9.5px] text-muted">
        <span>Threshold 0.85</span>
        <span className="font-medium text-accent-strong">Human review</span>
      </div>
    </div>
  );
}

export default function FeatureBentoSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="display-2 max-w-[620px]">
                The work behind the reply.
              </h2>
              <p className="lede measure mt-5">
                Most support tools stop at a draft. CogniLogs keeps the ticket
                moving. It checks knowledge, runs the playbook, verifies the
                action, and decides whether the answer is strong enough to send.
              </p>
            </div>
            <Link
              href="/features"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
            >
              Explore the platform
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-11 grid grid-cols-[minmax(0,1fr)] gap-3 md:grid-cols-12">
          <ScrollReveal className="min-w-0 md:col-span-7">
            <article className="h-full rounded-[26px] bg-surface p-6 sm:p-7">
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-ink">
                Every request gets a route.
              </h3>
              <p className="mt-2.5 max-w-[460px] text-[16px] leading-7 text-muted-strong">
                Queries, issues, and feature requests take different paths from
                the first moment. CogniLogs reads the intent before it touches
                the playbook.
              </p>
              <IntentFragment />
            </article>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 md:col-span-5" delay={0.04}>
            <article className="h-full rounded-[26px] bg-accent-soft p-6 sm:p-7">
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-ink">
                Ask once, with context.
              </h3>
              <p className="mt-2.5 text-[16px] leading-7 text-[#7a4b31]">
                When a detail is missing, the customer gets one clear question
                instead of a form. The ticket waits in the right state instead
                of stalling in a queue.
              </p>
              <MissingInfoFragment />
            </article>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 md:col-span-5" delay={0.02}>
            <article className="h-full rounded-[26px] bg-green-soft p-6 sm:p-7">
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-ink">
                Answers carry their sources.
              </h3>
              <p className="mt-2.5 text-[16px] leading-7 text-[#3f6657]">
                The reply keeps the policy, payment, and product evidence
                attached, so a person can see why it is right.
              </p>
              <KnowledgeFragment />
            </article>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 md:col-span-7" delay={0.06}>
            <article className="h-full rounded-[26px] bg-console p-6 text-white sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-white">
                    Run the playbook.
                  </h3>
                  <p className="mt-2.5 max-w-[450px] text-[16px] leading-7 text-white/65">
                    An issue gets a scenario-specific run against logs and admin
                    APIs. The result is checked before it becomes a customer
                    answer.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-console-green" />
                  Sandboxed run
                </span>
              </div>
              <RunFragment />
            </article>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 md:col-span-5" delay={0.03}>
            <article className="h-full rounded-[26px] bg-surface p-6 sm:p-7">
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-ink">
                Feature requests leave the queue.
              </h3>
              <p className="mt-2.5 max-w-[510px] text-[16px] leading-7 text-muted-strong">
                CogniLogs checks the feature state, groups the demand, and sends
                product a request with the customer context already attached.
              </p>
              <FeatureFragment />
            </article>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 md:col-span-7" delay={0.07}>
            <article className="h-full rounded-[26px] bg-pink-soft p-6 sm:p-7">
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] text-ink">
                A human takes the wheel.
              </h3>
              <p className="mt-2.5 text-[16px] leading-7 text-[#74465b]">
                Below the confidence line, the reply becomes a private note.
                The case lands in a human queue with the reasoning intact.
              </p>
              <HandoffFragment />
              <Link
                href="/#confidence"
                className="group mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink transition-colors hover:text-accent-strong"
              >
                Try the threshold
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
