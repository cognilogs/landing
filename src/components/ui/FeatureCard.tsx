"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-colors duration-200 hover:border-[var(--accent)]/40 sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-xs text-[var(--accent)]">
          [{String(index + 1).padStart(2, "0")}]
        </span>
        <div>
          <div className="mb-2 flex items-center gap-2 text-[var(--accent)]">
            {icon}
            <h3 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">
              {title}
            </h3>
          </div>
          <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
