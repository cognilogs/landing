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
      {items.map((item) => (
        <details
          key={item.question}
          name="cognilogs-faq"
          className="group overflow-hidden rounded-[18px] bg-surface transition-colors duration-200 open:bg-accent-soft"
        >
          <summary
            data-analytics="faq-toggle"
            data-analytics-label={item.question}
            className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 sm:px-6"
          >
            <span className="text-[15px] font-medium leading-6 text-ink sm:text-[16px]">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="relative h-4 w-4 shrink-0 text-accent-strong"
            >
              <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current" />
              <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 rounded-full bg-current transition-all duration-200 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="max-w-[64ch] text-[16px] leading-7 text-muted-strong">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
