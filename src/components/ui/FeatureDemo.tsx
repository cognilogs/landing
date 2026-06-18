"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/ui/TerminalWindow";
import { useReducedMotion } from "framer-motion";

interface FeatureDemoProps {
  lines: { text: string; type?: "input" | "output" | "info" | "error" | "warning" }[];
  title: string;
  description: string;
  label: string;
  reverse?: boolean;
}

export default function FeatureDemo({
  lines,
  title,
  description,
  label,
  reverse = false,
}: FeatureDemoProps) {
  const prefersReduced = useReducedMotion();

  const animProps = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5 },
      };

  return (
    <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          {...animProps}
          className={`flex flex-col items-center gap-8 lg:flex-row ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2">
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              {label}
            </p>
            <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
              {title}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <TerminalWindow lines={lines} title="cognilogs-agent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
