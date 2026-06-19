"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwPOWaIFazVXrHnlL7a-KPb0bMBkxx5IcsV06E9Gg3F7JoFE57omc0Bt5-McHMC1gWO/exec";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        email,
        timestamp: new Date().toISOString(),
        source: "cognilogs-website",
      });

      await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        body: params,
      });

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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 rounded border border-[var(--accent)]/30 bg-[var(--accent-muted)] px-5 py-4"
      >
        <Check size={18} className="shrink-0 text-[var(--accent)]" />
        <p className="text-sm text-[var(--text-primary)]">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="your@email.com"
          className="w-full rounded border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors duration-200 focus:border-[var(--accent)]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="cursor-pointer rounded bg-[var(--accent)] px-5 py-2.5 text-sm font-heading font-bold text-white transition-colors duration-200 hover:bg-[var(--accent-hover)] disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2 font-mono">
            <Loader2 size={14} className="animate-spin" />
            joining...
          </span>
        ) : (
          "[ join waitlist ]"
        )}
      </button>
      {error && (
        <p className="col-span-full text-xs text-[var(--danger)]">{error}</p>
      )}
    </form>
  );
}
