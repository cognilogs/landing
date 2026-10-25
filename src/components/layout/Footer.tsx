import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

// impeccable-disable low-contrast -- aria-hidden decorative footer watermark

const productLinks = [
  { href: "/features", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/comparison", label: "Compare" },
  { href: "/docs", label: "Docs" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="mt-24 overflow-hidden bg-paper-deep">
      <div className="shell pb-8 pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[280px] text-[15px] leading-6 text-muted">
              The support agent that does the work behind the reply, from the
              first ticket event to the final close.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2 text-[13px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Any ticketing system
              <span className="text-line-strong">/</span>
              Any local model
              <span className="text-line-strong">/</span>
              Human review
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium text-ink">Product</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-medium text-ink">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-medium text-ink">Get early access</p>
            <p className="mt-4 max-w-[240px] text-[14px] leading-6 text-muted">
              Help shape the first local deployments. We reply from
              team@cognilogs.com.
            </p>
            <Link
              href="/waitlist"
              className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-accent-strong"
            >
              Join the waitlist
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="mailto:team@cognilogs.com"
              className="mt-4 block text-[13px] text-muted transition-colors hover:text-ink"
            >
              team@cognilogs.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} cognilogs. All rights reserved.</p>
          <p>Built for the work between first reply and final close. Brand marks belong to their owners.</p>
        </div>
      </div>

      <div aria-hidden="true" className="select-none overflow-hidden px-2">
        <p className="footer-watermark translate-y-[16%] text-[22vw] font-semibold leading-[0.7] tracking-[-0.085em]">
          cognilogs
        </p>
      </div>
    </footer>
  );
}
