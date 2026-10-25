import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

const quickLinks = [
  {
    href: "/features",
    label: "Product",
    body: "What the support loop actually does.",
  },
  {
    href: "/how-it-works",
    label: "How it works",
    body: "From the first ticket event to the close.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    body: "₹10 per analyzed ticket, early access.",
  },
  {
    href: "/docs",
    label: "Docs",
    body: "Deployment, decisions, and the operating model.",
  },
];

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              404 · Route not found
            </p>
            <h1 className="display-1 mt-5 max-w-[640px]">
              This ticket didn’t route.
            </h1>
            <p className="lede measure mt-5">
              The page you were looking for may have moved, been renamed, or
              never existed. No work entered a queue. Pick a path below and we
              will get you back to the loop.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/" size="lg" withArrow>
                Back to home
              </ButtonLink>
              <ButtonLink href="/features" variant="secondary" size="lg">
                See the product
              </ButtonLink>
            </div>
            <p className="mt-5 text-[13px] text-muted">
              Still stuck?{" "}
              <a
                href="mailto:team@cognilogs.com"
                className="font-medium text-ink underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
              >
                team@cognilogs.com
              </a>
            </p>
          </div>

          <div className="lg:col-span-6">
            <div
              data-ui
              className="overflow-hidden rounded-[28px] bg-console p-5 text-white sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-[11px] font-medium text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-console-orange scene-pulse" />
                  Route check
                </p>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] text-white/45">
                  not found
                </span>
              </div>

              <p className="mt-6 text-[88px] font-semibold leading-none tracking-[-0.08em] text-white/[0.12]">
                404
              </p>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                <p className="text-[14px] font-medium text-white/85">
                  The request did not match a page.
                </p>
                <p className="mt-2 text-[12px] leading-5 text-white/45">
                  The URL may be old, misspelled, or the page may have moved.
                  Nothing entered a queue, and no run was started.
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 text-[11px]">
                <span className="text-white/40">Try the home page</span>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-white/75 transition-colors hover:text-accent"
                >
                  Go home
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <p className="mt-4 font-mono text-[9px] text-white/30">
                route.not_found / no matching segment
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line/70 pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Popular paths
            </p>
            <p className="text-[11px] text-muted">
              Or use the navigation above.
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[20px] border border-line/70 bg-surface p-4 transition-colors hover:border-line-strong hover:bg-paper"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[13px] font-medium text-ink">
                    {link.label}
                  </p>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-[11px] leading-5 text-muted">
                  {link.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
