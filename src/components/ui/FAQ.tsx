"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded border border-[var(--border)] bg-[var(--bg-card)] transition-colors duration-200 hover:border-[var(--border-hover)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent)]">
            <span>{item.question}</span>
            <span className="text-xs text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-45">
              [+]
            </span>
          </summary>
          <div className="border-t border-[var(--border)] px-5 py-4">
            <p className="text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
