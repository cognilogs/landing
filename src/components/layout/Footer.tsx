import Link from "next/link";

const footerLinks = [
  { href: "https://github.com", label: "github" },
  { href: "/docs", label: "docs" },
  { href: "/privacy", label: "privacy" },
  { href: "/terms", label: "terms" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-[var(--text-muted)] sm:flex-row">
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--text-secondary)]"
            >
              [{link.label}]
            </Link>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} CogniLogs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
