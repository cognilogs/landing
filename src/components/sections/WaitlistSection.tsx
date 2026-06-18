"use client";

import WaitlistForm from "@/components/ui/WaitlistForm";

export default function WaitlistSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="rounded border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center sm:p-12">
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Early Access
          </p>
          <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
            Be the first to know
          </h2>
          <p className="mb-8 text-sm text-[var(--text-secondary)]">
            Join the waitlist for early access, exclusive previews, and a
            lifetime discount when we launch.
          </p>
          <WaitlistForm />
          <p className="mt-3 text-[10px] text-[var(--text-muted)]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
