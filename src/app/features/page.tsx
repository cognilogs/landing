import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import {
  ArrowRight,
  Check,
  FileCode2,
  Gauge,
  ShieldCheck,
  Sparkles,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  BrandMark,
  evidenceBrands,
  modelBrands,
  ticketingBrands,
} from "@/components/ui/BrandLogos";
import {
  AuditSection,
  FeatureEnablementSection,
  InvestigationSection,
  RcaSection,
  SlaTrackerSection,
} from "@/components/sections/CapabilitySections";

export const metadata: Metadata = pageMetadata({
  title: "Support automation product | cognilogs",
  description:
    "Queries, issues, and feature enablement in one local-first loop: audit logs, code, database checks, RCA drafts, and child-ticket SLAs.",
  path: "/features/",
});

const indexItems = [
  { title: "Poll and sanitize", body: "Any ticketing system, on your interval.", dot: "bg-accent" },
  { title: "Classify intent", body: "Query, issue, or feature enablement.", dot: "bg-blue" },
  { title: "Investigate", body: "Audit logs, code, databases, observability.", dot: "bg-green" },
  { title: "Enable features", body: "API or browser, with approval.", dot: "bg-pink" },
  { title: "Draft the RCA", body: "Human review before it leaves.", dot: "bg-violet" },
  { title: "Watch the SLA", body: "Child tickets, reminders, CSAT.", dot: "bg-yellow" },
];

const requestTypes = [
  {
    label: "Query",
    tone: "bg-blue-soft",
    dot: "bg-blue",
    title: "The answer is buried.",
    ticket:
      "“Which subprocessors can see the attachments in our support tickets, and where are they hosted?”",
    body: "The agent retrieves the current policy, the subprocessor list, and the last answer an agent gave on the same account. The reply carries the sources.",
    trace: ["Policy retrieved", "Subprocessor list", "Answer cited"],
    icon: FileCode2,
  },
  {
    label: "Issue",
    tone: "bg-green-soft",
    dot: "bg-green",
    title: "The system disagrees.",
    ticket:
      "“We rotated our IdP certificate. Forty finance users are in a login loop, and the rollout email went to the wrong cohort.”",
    body: "The agent reads the audit log, searches the code path, queries the cohort table, and checks Sentry. It fixes the state, opens a child ticket for the rest, and drafts the RCA.",
    trace: ["Audit event", "Cohort query", "RCA review"],
    icon: Gauge,
  },
  {
    label: "Feature",
    tone: "bg-pink-soft",
    dot: "bg-pink",
    title: "The switch is off.",
    ticket:
      "“Enable SCIM for our contractor cohort. We need it before the next onboarding wave.”",
    body: "The agent checks the feature state, requests approval from the right owner, then enables it through the admin API or the browser. The customer gets a reply with the change and the permission trail.",
    trace: ["Feature state", "Owner approval", "Enabled + reply"],
    icon: ToggleRight,
  },
];

function RequestTypesSection() {
  return (
    <section id="request-types" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 className="display-2 max-w-[720px]">
              Three kinds of work. One agent.
            </h2>
            <p className="lede md:justify-self-end">
              Most tools pick one lane. cognilogs reads the request and chooses
              the path that can actually finish it. See{" "}
              <Link href="/how-it-works" className="link-inline">
                how the three paths run end to end
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {requestTypes.map((type, index) => (
            <ScrollReveal key={type.label} delay={index * 0.04}>
              <article className={`h-full rounded-[26px] p-6 sm:p-7 ${type.tone}`}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium text-ink">
                    <span className={`h-1.5 w-1.5 rounded-full ${type.dot}`} />
                    {type.label}
                  </span>
                  <type.icon className="h-4 w-4 text-ink/35" />
                </div>
                <h3 className="mt-5 text-[25px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink">
                  {type.title}
                </h3>
                <div className="mt-4 rounded-2xl bg-white/65 p-3.5">
                  <p className="text-[12px] leading-6 text-ink/80">{type.ticket}</p>
                </div>
                <p className="mt-4 text-[14px] leading-6 text-muted-strong">
                  {type.body}
                </p>
                <div className="mt-5 space-y-1.5">
                  {type.trace.map((item) => (
                    <p
                      key={item}
                      className="flex items-center gap-2 text-[11px] text-muted-strong"
                    >
                      <Check className="h-3 w-3 text-green-strong" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectionsSection() {
  return (
    <section id="connections" className="scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-4">
            <h2 className="display-2 max-w-[420px]">The stack you already run.</h2>
            <p className="lede mt-5 max-w-[400px]">
              Your ticketing system stays the system of record. The agent brings
              its own evidence layer and can act through the tools your team
              already trusts.
            </p>
            <div className="mt-6 rounded-[20px] bg-surface p-4">
              <p className="flex items-baseline gap-2">
                <span className="text-[34px] font-semibold leading-none tracking-[-0.05em] text-ink">
                  1,500<span className="text-accent">+</span>
                </span>
                <span className="text-[12px] font-medium text-muted">
                  integrations
                </span>
              </p>
              <p className="mt-2 text-[13px] leading-6 text-muted">
                Available today, and the agent can connect with any app in your
                stack through APIs, webhooks, or the browser.
              </p>
              <div className="mt-4 border-t border-line/70 pt-4">
                <p className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
                  <ShieldCheck className="h-4 w-4 text-accent-strong" />
                  Local deployment
                </p>
                <p className="mt-2 text-[13px] leading-6 text-muted">
                  Run any local model your infrastructure can serve. Stronger
                  models produce better work; the evidence and approval rules
                  stay the same. The{" "}
                  <Link href="/docs" className="link-inline">
                    deployment guide
                  </Link>{" "}
                  lists what runs where.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-8" delay={0.04}>
            <div data-ui className="rounded-[26px] bg-surface p-4 sm:p-6">
              {[
                {
                  label: "Ticketing",
                  note: "Any system can be polled.",
                  brands: ticketingBrands,
                },
                {
                  label: "Evidence",
                  note: "Read the trail before you answer.",
                  brands: evidenceBrands.slice(0, 6),
                },
                {
                  label: "Actions",
                  note: "Update, enable, notify, and close.",
                  brands: evidenceBrands.slice(6),
                },
                {
                  label: "Models",
                  note: "Bring your own local model.",
                  brands: modelBrands,
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col gap-3 border-b border-line/70 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="shrink-0 sm:w-[150px]">
                    <p className="text-[12px] font-medium text-ink">{group.label}</p>
                    <p className="mt-0.5 text-[10px] text-muted">{group.note}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.brands.map((brand) => (
                      <span
                        key={`${group.label}-${brand.name}`}
                        title={brand.name}
                        className="grid h-9 w-9 place-items-center rounded-[11px] border border-line/80 bg-paper"
                      >
                        <BrandMark brand={brand} className="h-[18px] w-[18px]" />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="mt-4 text-[10px] leading-5 text-muted">
                Logos are the property of their respective owners. Availability
                depends on the deployment and the permissions you grant.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <div>
      <JsonLd data={breadcrumb("/features/", "Product")} />
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <h1 className="display-1 max-w-[760px]">
                The work behind the reply.
              </h1>
              <p className="lede measure mt-6">
                cognilogs reads tickets from any ticketing system, does the
                investigation your team would do, and either resolves the work
                or hands it over with the evidence attached. It runs on your
                servers, with the local model you choose.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/waitlist" size="lg" withArrow>
                  Join the waitlist
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary" size="lg">
                  See the loop
                </ButtonLink>
              </div>
              <p className="mt-5 text-[13px] text-muted">
                Any ticketing system. Any local model. Human review where it
                matters.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal>
                <div data-ui className="rounded-[26px] bg-surface p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium text-ink">
                      Capability index
                    </p>
                    <span className="rounded-full bg-green-soft px-2 py-1 text-[9px] font-medium text-green-strong">
                      End to end
                    </span>
                  </div>
                  <div className="mt-4 space-y-1">
                    {indexItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-xl px-2 py-2.5"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`}
                        />
                        <div>
                          <p className="text-[12px] font-medium text-ink">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-5 text-muted">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-paper px-3 py-2 text-[10px] text-muted">
                    <span>Ticketing event in</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                    <span>evidence-backed close</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <RequestTypesSection />
      <InvestigationSection />
      <FeatureEnablementSection />
      <RcaSection />
      <SlaTrackerSection />
      <AuditSection />
      <ConnectionsSection />

      <section className="pb-20 pt-4 sm:pb-24">
        <div className="shell">
          <div className="flex flex-col gap-5 rounded-[28px] bg-accent px-6 py-8 text-accent-ink sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-10">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-medium text-accent-ink">
                <Sparkles className="h-4 w-4" />
                Early access
              </p>
              <h2 className="mt-3 max-w-[620px] text-[32px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[42px]">
                Put the whole loop on your queue.
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-accent-ink">
                We are opening a small number of local deployments. Tell us
                which tickets take the most time.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/waitlist" variant="secondary" size="md" withArrow>
                Join the waitlist
              </ButtonLink>
              <Link
                href="/pricing"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-accent-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-black"
              >
                See pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
