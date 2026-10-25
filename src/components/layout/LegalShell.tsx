import Link from "next/link";
import type { ReactNode } from "react";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy", key: "privacy" },
  { href: "/terms", label: "Terms of Service", key: "terms" },
];

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[21px] font-medium tracking-[-0.03em] text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[16px] leading-7 text-muted-strong">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function LegalShell({
  current,
  title,
  description,
  updated,
  summary,
  children,
}: {
  current: "privacy" | "terms";
  title: string;
  description: string;
  updated: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="shell pb-20 pt-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <nav aria-label="Legal pages" className="space-y-1">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] transition-colors ${
                      current === link.key
                        ? "bg-surface font-medium text-ink"
                        : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        current === link.key ? "bg-accent" : "bg-line-strong"
                      }`}
                    />
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 rounded-[20px] bg-surface p-4">
                <p className="text-[13px] font-medium text-ink">
                  Questions about this page?
                </p>
                <p className="mt-2 text-[13px] leading-5 text-muted">
                  Email us at{" "}
                  <a
                    href="mailto:team@cognilogs.com"
                    className="font-medium text-ink underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
                  >
                    team@cognilogs.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </aside>

          <article className="min-w-0 max-w-[600px]">
            <nav
              aria-label="Legal pages"
              className="mb-8 flex gap-2 lg:hidden"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                    current === link.key
                      ? "bg-ink text-white"
                      : "bg-surface text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <h1 className="display-2">{title}</h1>
            <p className="mt-3 max-w-[520px] text-[18px] leading-7 text-muted-strong">
              {description}
            </p>
            <p className="mt-3 text-[13px] text-muted">Last updated {updated}</p>

            <div className="mt-8 rounded-[20px] bg-accent-soft p-5 text-[15px] leading-6 text-[#7a4b31]">
              <p className="font-medium text-accent-strong">
                The plain-language version
              </p>
              <p className="mt-1">{summary}</p>
              <p className="mt-2 text-[13px] text-[#936044]">
                This summary is here to help. The full page is the legal version.
              </p>
            </div>

            <div className="mt-12 space-y-10">{children}</div>
          </article>
        </div>
      </div>
    </div>
  );
}
