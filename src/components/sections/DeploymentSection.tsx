import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BrandMark, modelBrands } from "@/components/ui/BrandLogos";

const copy = {
  home: {
    heading: "Runs inside your network.",
    lede: "The first cognilogs deployments are local. The app, the SLA worker, and the run history stay on your servers or inside your network. You choose the local model; stronger models produce better work.",
    cta: "Ask about a local pilot",
    compliance:
      "Local deployment puts the host, network, credentials, and retention policy under your team's control. Your security team gets deployment documentation and review support.",
  },
  platform: {
    heading: "Local deployment, on your terms.",
    lede: "The first deployment target is local. cognilogs runs on your servers or inside your network, with the app and SLA worker under your control. You choose the local model; stronger models produce better work.",
    cta: "Plan a local pilot",
    compliance:
      "Your team controls the host, network, credentials, backups, and retention policy. Your security team gets deployment documentation and review support.",
  },
};

export default function DeploymentSection({
  variant = "home",
}: {
  variant?: keyof typeof copy;
}) {
  const content = copy[variant];

  return (
    <section id="deployment" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <h2 className="display-2 max-w-[650px]">{content.heading}</h2>
              <p className="lede measure mt-5">
                {content.lede}{" "}
                <Link href="/docs" className="link-inline">
                  The deployment and operations guide
                </Link>{" "}
                covers what runs where, and the{" "}
                <Link href="/comparison" className="link-inline">
                  vendor comparison
                </Link>{" "}
                shows how that differs from cloud support AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-self-end">
              <span className="rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-ink">
                Local-first
              </span>
              <span className="rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-muted">
                Any ticketing system
              </span>
              <span className="rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-muted">
                Any local model
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-12">
          <ScrollReveal className="min-w-0 lg:col-span-7">
            <div data-ui className="flex h-full flex-col rounded-[28px] bg-surface p-4 sm:p-6">
              <div className="rounded-[22px] border border-dashed border-line-strong bg-paper p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Inside your network
                  </span>
                  <span className="rounded-full bg-green-soft px-2.5 py-1 text-[10px] font-medium text-green-strong">
                    Local
                  </span>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    ["cognilogs app", "Runs on your host"],
                    ["Ticket + run data", "Stays in your environment"],
                    ["SLA worker", "Checks every 15 minutes"],
                    ["Local model", "Your choice of model"],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-xl bg-surface p-3">
                      <p className="text-[12px] font-medium text-ink">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-col gap-2 rounded-xl bg-surface px-3 py-2.5 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ticketing connection
                  </span>
                  <span>Your ticketing system stays the system of record</span>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2.5 rounded-xl bg-paper px-3 py-3 pt-4 text-[12px] leading-5 text-muted">
                <Cpu className="h-4 w-4 shrink-0 text-accent-strong" />
                <span className="mr-1">Works with the local model you choose:</span>
                {modelBrands.map((brand) => (
                  <span
                    key={brand.name}
                    title={brand.name}
                    className="grid h-7 w-7 place-items-center rounded-lg border border-line/80 bg-surface"
                  >
                    <BrandMark brand={brand} className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="min-w-0 lg:col-span-5" delay={0.04}>
            <div className="flex h-full flex-col rounded-[28px] bg-console p-5 text-white sm:p-6">
              <p className="text-[12px] font-medium text-white/55">
                Security review
              </p>
              <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.035em] text-white">
                What local deployment changes.
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-white/60">
                {content.compliance}
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Ticket content and run evidence stay close.",
                  "Your security team gets deployment documentation and a direct review.",
                  "Audit logs cover model actions, tool calls, and approvals.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-5 text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-console-orange" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-[11px] text-white/55">
                <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
                Certification work is in progress.
              </div>

              <Link
                href="/waitlist"
                className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-white transition-colors hover:text-accent"
              >
                {content.cta}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
