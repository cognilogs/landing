"use client";

import { motion, useReducedMotion } from "framer-motion";
import useHydrated from "@/hooks/useHydrated";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();
  const hydrated = useHydrated();

  // Keep the first client render identical to the server render. Once mounted,
  // honor the reduced-motion preference without motion styles at all.
  if (hydrated && prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-scroll-reveal
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
