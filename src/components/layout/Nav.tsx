"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/features", label: "features" },
  { href: "/waitlist", label: "waitlist" },
  { href: "/about", label: "about" },
  { href: "/docs", label: "docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 sm:pt-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between rounded border border-[var(--border)] bg-[var(--bg-primary)]/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-0 text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            <span className="text-lg text-[var(--accent)]">~</span>
            <span className="text-xl font-logo tracking-tight">/ cognilogs</span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded px-3 py-1.5 text-xs font-heading transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent)]"
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer items-center gap-1.5 rounded px-2 py-1.5 text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
            <span className="text-[10px]">[{open ? "close" : "menu"}]</span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="mt-1 rounded border border-[var(--border)] bg-[var(--bg-secondary)] p-2 backdrop-blur-xl sm:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-xs font-heading transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
