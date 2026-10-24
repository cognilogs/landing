"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import useHydrated from "@/hooks/useHydrated";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  GitBranch,
  MessageSquareText,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";

type CaseKey = "query" | "issue" | "feature";

const cases: {
  key: CaseKey;
  tab: string;
  shortTab: string;
  title: string;
  body: string;
  ticket: string;
  customer: string;
  reply: string;
  steps: { label: string; meta: string }[];
  tone: string;
  dot: string;
  outcome: string;
}[] = [
  {
    key: "query",
    tab: "A question",
    shortTab: "Question",
    title: "Answer without the hunt.",
    body: "When the answer already lives in your docs, CogniLogs retrieves the closest passages, drafts the response, attaches the sources, and scores its confidence.",
    ticket: "Can we get a copy of our data processing agreement?",
    customer: "Elena · Acme",
    reply:
      "Yes. Here is the latest DPA, plus our current subprocessor list. I've also saved the signed copy to your account.",
    steps: [
      { label: "Retrieved the DPA and subprocessor policy", meta: "3 sources" },
      { label: "Drafted an answer with citations", meta: "0.96 confidence" },
      { label: "Reply is ready to send", meta: "above threshold" },
    ],
    tone: "bg-blue-soft",
    dot: "bg-blue",
    outcome: "Resolved · sources attached",
  },
  {
    key: "issue",
    tab: "Something broke",
    shortTab: "Issue",
    title: "Find what broke. Prove the fix.",
    body: "A failed export opens a diagnostic run: logs, API state, and the customer’s exact object. The reply explains what changed and what happens next.",
    ticket: "Exports are timing out for our whole workspace.",
    customer: "Marcus · Northstar",
    reply:
      "Your export was blocked by a storage permission that changed during last night's migration. I've restored access and verified a clean retry. Your next export should complete normally.",
    steps: [
      { label: "Traced export queue and worker logs", meta: "timeout 30s" },
      { label: "Found changed storage permission", meta: "admin API" },
      { label: "Verified a clean retry", meta: "run #187" },
    ],
    tone: "bg-green-soft",
    dot: "bg-green",
    outcome: "Fixed and verified · reply drafted",
  },
  {
    key: "feature",
    tab: "A missing feature",
    shortTab: "Feature",
    title: "Turn a wish into a tracked ask.",
    body: "CogniLogs verifies the feature state, groups the demand, and gives the customer a real next step instead of a vague promise.",
    ticket: "Can we require SSO for contractors?",
    customer: "Priya · Loom Labs",
    reply:
      "Not yet. SAML is available on your plan, but contractor enforcement is still in product review. I've added your workspace to the request and linked the four similar asks.",
    steps: [
      { label: "Checked feature state", meta: "SAML not enabled" },
      { label: "Grouped 4 linked requests", meta: "product demand" },
      { label: "Routed to product review", meta: "customer acknowledged" },
    ],
    tone: "bg-pink-soft",
    dot: "bg-pink",
    outcome: "Feature request created · customer updated",
  },
];

export default function UseCasesSection() {
  const [active, setActive] = useState<CaseKey>("query");
  const hydrated = useHydrated();
  const prefersReduced = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = cases.find((item) => item.key === active) ?? cases[0];
  const reduceMotion = hydrated && prefersReduced;

  const selectTab = (index: number) => {
    const next = cases[index];
    setActive(next.key);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectTab((index + 1) % cases.length);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectTab((index - 1 + cases.length) % cases.length);
    }
  };

  return (
    <section id="use-cases" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="display-2 max-w-[660px]">
            Three request types. One workflow.
          </h2>
          <p className="lede max-w-[420px] md:text-right">
            Each request follows a different path. The evidence standard stays
            the same.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="tablist"
            aria-label="Support request types"
            className="flex w-fit flex-wrap gap-1 rounded-full bg-surface p-1 sm:inline-flex"
          >
            {cases.map((item, index) => (
              <button
                key={item.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`case-tab-${item.key}`}
                aria-label={item.tab}
                aria-selected={active === item.key}
                aria-controls={`case-panel-${item.key}`}
                tabIndex={active === item.key ? 0 : -1}
                onClick={() => setActive(item.key)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`flex min-w-0 items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-[11.5px] font-medium transition-colors sm:gap-2 sm:px-4 sm:text-[13px] ${
                  active === item.key
                    ? "bg-ink text-white"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                <span className="truncate sm:hidden">{item.shortTab}</span>
                <span className="hidden truncate sm:inline">{item.tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`case-panel-${current.key}`}
          aria-labelledby={`case-tab-${current.key}`}
          className="mt-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              data-scroll-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              className={`grid gap-8 rounded-[28px] p-5 sm:p-8 lg:grid-cols-12 lg:gap-14 lg:p-10 ${current.tone}`}
            >
              <div className="lg:col-span-5 lg:py-4">
                <h3 className="text-[32px] font-semibold tracking-[-0.045em] text-ink sm:text-[40px]">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-[440px] text-[16px] leading-7 text-muted-strong">
                  {current.body}
                </p>

                <div className="mt-7 rounded-2xl bg-white/70 p-4">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <MessageSquareText className="h-3.5 w-3.5" />
                    Example ticket
                    <span className="text-line-strong">/</span>
                    {current.customer}
                  </div>
                  <p className="mt-2 text-[14px] font-medium leading-6 text-ink">
                    “{current.ticket}”
                  </p>
                </div>

                <Link
                  href="/docs#ticket-lifecycle"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  See the full path
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div
                  data-ui
                  className="overflow-hidden rounded-[20px] bg-surface"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-line/80 px-4 py-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${current.dot}`} />
                      <span className="truncate text-[11px] text-muted">
                        Freshdesk · {current.customer}
                      </span>
                    </div>
                    <span className="shrink-0 rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
                      Agent run
                    </span>
                  </div>

                  <div className="px-4 py-4 sm:px-5">
                    <p className="text-[13px] font-medium leading-6 text-ink">
                      {current.ticket}
                    </p>
                    <div className="mt-4 space-y-2">
                      {current.steps.map((step) => (
                        <div
                          key={step.label}
                          className="flex items-start gap-2.5 rounded-lg bg-paper px-3 py-2.5"
                        >
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-green-soft">
                            <Check className="h-2.5 w-2.5 text-green-strong" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] leading-5 text-ink">
                              {step.label}
                            </p>
                            <p className="text-[9.5px] text-muted">{step.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl bg-accent-soft p-3.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-medium text-accent-strong">
                        <Sparkles className="h-3 w-3" />
                        Customer reply drafted
                      </div>
                      <p className="mt-2 text-[11.5px] leading-5 text-ink/75">
                        {current.reply}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-line/80 px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-muted">
                      <Check className="h-3 w-3 text-green-strong" />
                      {current.outcome}
                    </span>
                    <span className="rounded-md bg-ink px-2.5 py-1.5 text-[9px] font-medium text-white">
                      Send reply
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-4 px-1 text-[10px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="h-3 w-3" />
                    Knowledge
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Terminal className="h-3 w-3" />
                    Diagnostics
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <GitBranch className="h-3 w-3" />
                    Routing
                  </span>
                  <span className="ml-auto hidden items-center gap-1.5 sm:inline-flex">
                    <FileText className="h-3 w-3" />
                    Evidence attached
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
