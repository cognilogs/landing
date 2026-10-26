"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Clock3, Sparkles, X } from "lucide-react";
import WaitlistForm from "@/components/ui/WaitlistForm";
import { LogoMark } from "@/components/ui/Logo";
import { captureEvent } from "@/lib/analytics";

export default function WaitlistDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (open && !wasOpen.current) {
      captureEvent("waitlist_dialog_opened", {
        page_path: window.location.pathname,
      });
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/45 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-dialog-title"
            initial={prefersReduced ? false : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReduced
                ? { opacity: 1 }
                : { opacity: 0, y: 12, scale: 0.985 }
            }
            transition={{ duration: prefersReduced ? 0 : 0.22 }}
            className="relative w-full max-w-[520px] overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_32px_90px_-38px_rgba(10,10,11,0.55)]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close waitlist"
              data-analytics="waitlist-dialog-close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink transition-colors hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="bg-console px-5 pb-5 pt-6 text-white sm:px-7">
              <div className="flex items-center gap-2.5">
                <LogoMark className="h-7 w-7" />
                <span className="text-[14px] font-medium">cognilogs</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-console-green" />
                  Early access
                </span>
              </div>

              <h2
                id="waitlist-dialog-title"
                className="mt-6 max-w-[390px] text-[29px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[34px]"
              >
                Bring the loop to your queue.
              </h2>
              <p className="mt-3 max-w-[410px] text-[14px] leading-6 text-white/55">
                A local-first support agent for any ticketing system. Tell us
                where the work gets stuck.
              </p>

              <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3.5">
                <div className="flex items-center gap-2 text-[10px] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  A ticket, handled end to end
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Audit log checked", meta: "IdP certificate", icon: Check },
                    { label: "Approval requested", meta: "RCA sign-off", icon: Clock3 },
                    { label: "Reply prepared", meta: "evidence attached", icon: Sparkles },
                  ].map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] px-3 py-2 text-[11px]"
                    >
                      <step.icon className="h-3.5 w-3.5 shrink-0 text-console-green" />
                      <span className="min-w-0 flex-1 text-white/75">
                        {step.label}
                      </span>
                      <span className="text-[9px] text-white/35">{step.meta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-5 sm:px-7 sm:py-6">
              <WaitlistForm
                idPrefix="nav-waitlist"
                source="cognilogs-nav-modal"
                buttonLabel="Request early access"
                compact
              />
              <p className="mt-3 text-[12px] leading-5 text-muted">
                One email. We reply from team@cognilogs.com. No newsletter.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
