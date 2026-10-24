"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwPOWaIFazVXrHnlL7a-KPb0bMBkxx5IcsV06E9Gg3F7JoFE57omc0Bt5-McHMC1gWO/exec";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        email,
        timestamp: new Date().toISOString(),
        source: "cognilogs-website",
      });

      const response = await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        body: params,
      });

      if (!response.ok) {
        throw new Error("Waitlist request failed");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className="flex items-center gap-3 rounded-full bg-green-soft px-5 py-4 text-left"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/70 text-green-strong">
          <Check className="h-4 w-4" />
        </span>
        <p className="text-[15px] font-medium text-green-strong">
          You&apos;re on the list. We&apos;ll be in touch when local
          design-partner spots open.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Work email
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            placeholder="you@company.com"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "waitlist-error" : undefined}
            className="h-[52px] w-full rounded-full border border-line bg-surface px-5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent-strong focus:ring-2 focus:ring-accent-strong"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-[52px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 text-[14px] font-medium text-white transition-colors hover:bg-ink-soft disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Joining
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>
      {error && (
        <p
          id="waitlist-error"
          role="alert"
          className="mt-3 text-[13px] text-red"
        >
          {error}
        </p>
      )}
    </form>
  );
}
