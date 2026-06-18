"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "CogniLogs cut our escalation-to-resolution time from 4 hours to 11 minutes. Our support team handles 3x the volume without growing headcount.",
    author: "Sarah Chen",
    role: "VP of Support",
    company: "ScaleGrid",
  },
  {
    quote:
      "We connected our runbook library in a day. Now CogniLogs agents investigate PagerDuty alerts before our on-call engineer even opens their laptop.",
    author: "Marcus Williams",
    role: "Staff SRE",
    company: "FlowPay",
  },
  {
    quote:
      "The skill file system is genius. Our ops team writes investigation playbooks in YAML — no new DSL to learn, no platform lock-in.",
    author: "Priya Patel",
    role: "Engineering Manager",
    company: "NexusHealth",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-y border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-1 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Trusted by Engineering Teams
          </p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-colors duration-200 hover:border-[var(--accent)]/30">
                <div className="mb-1 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-xs text-[var(--accent)]">
                      *
                    </span>
                  ))}
                </div>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[var(--border)] pt-3">
                  <p className="text-xs font-bold text-[var(--text-primary)]">
                    {t.author}
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
