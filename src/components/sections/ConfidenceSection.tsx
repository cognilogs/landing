"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  Gauge,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const EVIDENCE_SCORE = 0.92;

export default function ConfidenceSection() {
  const [threshold, setThreshold] = useState(0.85);
  const autoReply = EVIDENCE_SCORE >= threshold;
  // The native range thumb travels between half a thumb-width and the width
  // minus half a thumb, not across the full track. Match that inset so the
  // fill line and the visible thumb meet exactly.
  const ratio = (threshold - 0.5) / (0.99 - 0.5);
  const thumbPosition = `calc(${(ratio * 100).toFixed(3)}% + ${(12 - 24 * ratio).toFixed(3)}px)`;

  return (
    <section
      id="confidence"
      className="scroll-mt-24 bg-console py-20 text-white sm:py-28"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5 lg:pt-2">
            <h2 className="display-2 text-white">Know when to stop.</h2>
            <p className="mt-5 max-w-[460px] text-[16px] leading-7 text-white/55 sm:text-[17px]">
              A confident answer is useful. A confident guess can cost more than
              a slow one. The confidence gate decides whether cognilogs replies
              or sends the case to a person with a private note.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "No silent guesses.",
                  body: "Below the line, nothing reaches the customer.",
                },
                {
                  icon: FileText,
                  title: "A complete handoff.",
                  body: "The run, sources, and suggested next step travel with the case.",
                },
                {
                  icon: Gauge,
                  title: "A line you control.",
                  body: "The default is 0.85. Your team can make it stricter.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/[0.06]">
                    <item.icon className="h-3.5 w-3.5 text-accent" />
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-white/90">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-5 text-white/45">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/docs#confidence"
              className="group mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/75 transition-colors hover:text-accent"
            >
              Read how the decision is made
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div
              data-ui
              className="rounded-[28px] border border-white/[0.09] bg-white/[0.045] p-4 sm:p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-medium text-white/70">
                    <Gauge className="h-3.5 w-3.5 text-accent" />
                    Review threshold
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-[42px] font-semibold leading-none tracking-[-0.05em] text-white">
                      {threshold.toFixed(2)}
                    </span>
                    <span className="text-[12px] text-white/60">
                      confidence line
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.05] px-3 py-2 text-[11px] text-white/65">
                  Example run · score fixed at{" "}
                  <span className="font-medium text-white/80">0.92</span>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="confidence-threshold" className="sr-only">
                  Review threshold
                </label>
                <div className="relative h-7">
                  <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10" />
                  <div
                    className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent transition-[width] duration-150 ease-out"
                    style={{ width: thumbPosition }}
                  />
                  <input
                    id="confidence-threshold"
                    type="range"
                    min="0.5"
                    max="0.99"
                    step="0.01"
                    value={threshold}
                    onChange={(event) =>
                      setThreshold(Number(event.target.value))
                    }
                    aria-valuetext={`${threshold.toFixed(2)} confidence threshold. ${
                      autoReply ? "This run would auto-reply." : "This run would go to human review."
                    }`}
                    className="threshold-range relative z-10"
                  />
                  <span
                    aria-hidden="true"
                    className="threshold-thumb pointer-events-none absolute top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-accent bg-white shadow-[0_0_0_4px_rgba(249,115,22,0.16)] transition-[left] duration-150 ease-out"
                    style={{ left: thumbPosition }}
                  />
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-white/55">
                  <span>More autonomy</span>
                  <span>More human review</span>
                </div>
              </div>

              <p className="mt-4 text-[12px] leading-5 text-white/60">
                The evidence score stays fixed. Move the line past{" "}
                <span className="text-white/70">0.92</span> to see the handoff.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 text-ink">
                  <div className="flex items-center justify-between text-[10px] text-muted">
                    <span>Evidence</span>
                    <span className="inline-flex items-center gap-1 text-green-strong">
                      <Check className="h-3 w-3" />
                      4 checks
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] font-medium leading-5 text-ink">
                    SSO loop after certificate rotation
                  </p>
                  <div className="mt-3 space-y-1.5">
                    {[
                      "Audit event matched",
                      "Cohort query verified",
                      "Metadata fix checked",
                    ].map((item) => (
                      <p
                        key={item}
                        className="flex items-center gap-1.5 text-[10px] text-muted"
                      >
                        <Check className="h-2.5 w-2.5 text-green-strong" />
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-paper px-2.5 py-2 text-[10px]">
                    <span className="text-muted">Evidence score</span>
                    <span className="font-medium text-ink">0.92</span>
                  </div>
                </div>

                <div
                  aria-live="polite"
                  className={`rounded-2xl p-4 transition-colors duration-300 ${
                    autoReply ? "bg-green-soft" : "bg-accent-soft"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                        autoReply
                          ? "bg-white/70 text-green-strong"
                          : "bg-white/70 text-accent-strong"
                      }`}
                    >
                      {autoReply ? (
                        <Sparkles className="h-4 w-4" />
                      ) : (
                        <UserRound className="h-4 w-4" />
                      )}
                    </span>
                    <span
                      className={`rounded-full bg-white/65 px-2 py-1 text-[9px] font-medium ${
                        autoReply ? "text-green-strong" : "text-accent-strong"
                      }`}
                    >
                      {autoReply ? "Above threshold" : "Below threshold"}
                    </span>
                  </div>
                  <p
                    className={`mt-4 text-[17px] font-semibold tracking-[-0.02em] ${
                      autoReply ? "text-[#065f45]" : "text-[#9a3412]"
                    }`}
                  >
                    {autoReply
                      ? "Auto-reply + resolve"
                      : "Private note + human queue"}
                  </p>
                  <p
                    className={`mt-2 text-[11.5px] leading-5 ${
                      autoReply ? "text-[#3d7a64]" : "text-[#8a4a2b]"
                    }`}
                  >
                    {autoReply
                      ? "The evidence clears the line. cognilogs sends the reply and moves the ticket to resolved."
                      : "The case is below the line. cognilogs posts a private note and assigns it to the human queue with the full run attached."}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[9.5px]">
                    <span
                      className={
                        autoReply ? "text-[#3d7a64]" : "text-[#8a4a2b]"
                      }
                    >
                      {autoReply ? "3 sources attached" : "Tier 2 · evidence attached"}
                    </span>
                    <span
                      className={`rounded-md px-2 py-1 font-medium ${
                        autoReply
                          ? "bg-[#065f45] text-white"
                          : "bg-[#9a3412] text-white"
                      }`}
                    >
                      {autoReply ? "Send reply" : "Assign"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 text-[11px] text-white/60">
                <span>
                  Evidence score 0.92 · threshold {threshold.toFixed(2)}
                </span>
                <span className={autoReply ? "text-console-green" : "text-accent"}>
                  {autoReply ? "Auto path" : "Human path"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
