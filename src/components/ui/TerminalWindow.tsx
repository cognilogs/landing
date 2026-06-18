"use client";

import TypewriterText from "./TypewriterText";

interface TerminalWindowProps {
  lines: { text: string; type?: "input" | "output" | "info" | "error" | "warning" }[];
  title?: string;
  className?: string;
}

export default function TerminalWindow({
  lines,
  title = "cognilogs-agent",
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded border border-[var(--border)] bg-[var(--bg-secondary)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--danger)] opacity-60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--warning)] opacity-60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)] opacity-40" />
        <span className="ml-2 text-[10px] text-[var(--text-muted)] font-code">
          {title}
        </span>
      </div>
      <div className="space-y-1.5 p-4 font-code text-xs leading-relaxed sm:p-5 sm:text-sm">
        {lines.map((line, i) => {
          if (line.type === "input") {
            return (
              <div key={i} className="flex">
                <span className="mr-2 shrink-0 text-[var(--accent)]">$</span>
                <TypewriterText
                  text={line.text}
                  speed={20}
                  className="text-[var(--text-primary)]"
                />
              </div>
            );
          }
          if (line.type === "error") {
            return (
              <div key={i} className="flex">
                <span className="mr-2 shrink-0 text-[var(--danger)]">✗</span>
                <span className="text-[var(--danger)]">{line.text}</span>
              </div>
            );
          }
          if (line.type === "warning") {
            return (
              <div key={i} className="flex">
                <span className="mr-2 shrink-0 text-[var(--warning)]">⚠</span>
                <span className="text-[var(--warning)]">{line.text}</span>
              </div>
            );
          }
          if (line.type === "info") {
            return (
              <div key={i} className="flex">
                <span className="mr-2 shrink-0 text-[var(--accent)]">→</span>
                <span className="text-[var(--accent)]">{line.text}</span>
              </div>
            );
          }
          return (
            <div key={i} className="flex">
              <span className="mr-2 shrink-0 text-[var(--text-muted)]">
                │
              </span>
              <span className="text-[var(--text-secondary)]">{line.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
