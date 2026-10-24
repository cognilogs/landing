"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import ButtonLink from "@/components/ui/ButtonLink";

const navLinks = [
  { href: "/features", label: "Platform" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#use-cases", label: "Use cases" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
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
    href.startsWith("/#")
      ? false
      : href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);

  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2 text-center text-[13px] leading-5 sm:gap-3">
          <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <p className="text-white/70">
            <span className="hidden sm:inline">
              <span className="text-white">Early access.</span> CogniLogs is
              onboarding its first Freshdesk design partners for local
              deployment.
            </span>
            <span className="sm:hidden">Local deployment design partners.</span>
          </p>
          <Link
            href="/waitlist"
            className="group inline-flex shrink-0 items-center gap-1 font-medium text-white transition-colors hover:text-accent"
          >
            Join the waitlist
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-paper transition-colors duration-300 ${
          scrolled ? "border-b border-line/80" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-7 lg:px-9">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative text-[14px] transition-colors duration-200 hover:text-ink ${
                  isActive(link.href) ? "font-medium text-ink" : "text-muted"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ButtonLink href="/waitlist" size="sm" withArrow>
                Join waitlist
              </ButtonLink>
            </div>
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
              className="absolute left-0 right-0 top-full max-h-[calc(100dvh-108px)] overflow-y-auto overscroll-contain border-t border-line bg-paper px-5 pb-6 pt-4 shadow-[var(--shadow-menu)] sm:px-7 lg:hidden"
            >
              <nav aria-label="Mobile navigation" className="grid">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/70 py-4 text-[19px] font-medium tracking-[-0.02em] text-ink last:border-b-0"
                  >
                    {link.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-muted" />
                  </Link>
                ))}
              </nav>
              <ButtonLink
                href="/waitlist"
                size="lg"
                className="mt-5 w-full"
                onClick={() => setOpen(false)}
                withArrow
              >
                Join the waitlist
              </ButtonLink>
              <p className="mt-3 text-center text-[13px] text-muted">
                Freshdesk-first. Local-first. Human control.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
