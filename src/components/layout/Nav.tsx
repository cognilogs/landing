"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import WaitlistDialog from "@/components/ui/WaitlistDialog";

const navLinks = [
  { href: "/features", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/comparison", label: "Compare" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const openWaitlist = () => {
    setOpen(false);
    setWaitlistOpen(true);
  };

  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2 text-center text-[13px] leading-5 sm:gap-3">
          <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <p className="text-white/70">
            <span className="hidden sm:inline">
              <span className="text-white">Early access.</span> Local-first
              support automation for any ticketing system and any local model.
            </span>
            <span className="sm:hidden">Local-first support automation.</span>
          </p>
          <button
            type="button"
            onClick={openWaitlist}
            className="group inline-flex shrink-0 items-center gap-1 font-medium text-white transition-colors hover:text-accent"
          >
            Join the waitlist
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={`relative mx-auto max-w-[1240px] rounded-[22px] border backdrop-blur-xl transition-colors duration-300 sm:rounded-full ${
            scrolled
              ? "border-line-strong bg-paper/95"
              : "border-line/70 bg-paper/80"
          }`}
        >
          <div className="flex h-[62px] items-center justify-between gap-3 px-3 sm:px-4">
            <Logo />

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-0.5 lg:flex"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-[13px] transition-colors duration-200 ${
                    isActive(link.href)
                      ? "bg-surface font-medium text-ink"
                      : "text-muted hover:bg-surface/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <a
                href="mailto:team@cognilogs.com"
                className="hidden rounded-full px-3 py-2 text-[13px] text-muted transition-colors hover:bg-surface hover:text-ink xl:block"
              >
                team@cognilogs.com
              </a>
              <button
                type="button"
                onClick={openWaitlist}
                className="group hidden h-9 items-center gap-2 rounded-full bg-accent px-4 text-[13px] font-medium text-accent-ink transition-colors hover:bg-[#fb8a3d] sm:inline-flex"
              >
                Join waitlist
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-muted lg:hidden"
              >
                {open ? (
                  <X aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Menu aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-navigation"
                initial={prefersReduced ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={{ duration: prefersReduced ? 0 : 0.18 }}
                className="absolute left-3 right-3 top-full mt-2 max-h-[calc(100dvh-120px)] overflow-y-auto overscroll-contain rounded-[24px] border border-line bg-paper p-4 shadow-[var(--shadow-menu)] sm:left-5 sm:right-5 lg:hidden"
              >
                <nav aria-label="Mobile navigation" className="grid gap-0.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-[18px] font-medium tracking-[-0.02em] ${
                        isActive(link.href)
                          ? "bg-surface text-ink"
                          : "text-ink hover:bg-surface"
                      }`}
                    >
                      {link.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-muted"
                      />
                    </Link>
                  ))}
                </nav>
                <button
                  type="button"
                  onClick={openWaitlist}
                  className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-[14px] font-medium text-accent-ink"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-[12px] text-muted">
                  Any ticketing system. Any local model. Human review.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <WaitlistDialog
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
}
