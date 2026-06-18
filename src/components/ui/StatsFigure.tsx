"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatsFigureProps {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  index?: number;
}

export default function StatsFigure({
  label,
  value,
  suffix = "",
  prefix = "",
  index = 0,
}: StatsFigureProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const hasDecimal = value.includes(".");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(interval);
  }, [inView, target]);

  const display = hasDecimal
    ? (count / 10).toFixed(1)
    : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="mb-1 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
        Fig {index + 1}.
      </p>
      <p className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">{label}</p>
    </motion.div>
  );
}
