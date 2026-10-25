import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  Minus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { BrandMark, ticketingBrands } from "@/components/ui/BrandLogos";
import { LogoMark } from "@/components/ui/Logo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Compare | cognilogs vs Zendesk AI, Freshdesk Freddy, Intercom Fin, and Agentforce",
  description:
    "A sourced comparison of cognilogs, Zendesk AI, Freshdesk Freddy, Intercom Fin, and Salesforce Agentforce across deployment, investigation, actions, RCA, audit trails, SLAs, and published pricing.",
};

type VendorId =
  | "zendesk"
  | "freshworks"
  | "intercom"
  | "salesforce"
  | "cognilogs";

type Status = "yes" | "config" | "no";

type Cell = {
  text: string;
  status?: Status;
};

type TableRow = {
  label: string;
  hint: string;
  values: Record<VendorId, Cell>;
};

type TableGroup = {
  title: string;
  rows: TableRow[];
};

const vendors: {
  id: VendorId;
  name: string;
  headerNote: string;
  bestFor: string;
  tags: string[];
}[] = [
  {
    id: "zendesk",
    name: "Zendesk AI",
    headerNote: "Cloud · Zendesk-native",
    bestFor:
      "Teams already standardized on Zendesk that want native omnichannel AI and the largest app marketplace.",
    tags: ["Cloud", "Zendesk-native", "1,800+ apps"],
  },
  {
    id: "freshworks",
    name: "Freshdesk Freddy",
    headerNote: "Cloud · Freshworks-native",
    bestFor:
      "Value-focused teams on Freshworks that want native parent-child ticketing and session-priced AI.",
    tags: ["Cloud", "Freshworks-native", "Parent-child"],
  },
  {
    id: "intercom",
    name: "Intercom Fin",
    headerNote: "Cloud · Helpdesk-agnostic",
    bestFor:
      "Teams that want a strong AI agent layer on an existing helpdesk without a migration.",
    tags: ["Cloud", "Helpdesk-agnostic", "$0.99/outcome"],
  },
  {
    id: "salesforce",
    name: "Salesforce Agentforce",
    headerNote: "Cloud · Salesforce-native",
    bestFor:
      "Salesforce-native enterprises that need custom actions across CRM, Data Cloud, and MuleSoft.",
    tags: ["Cloud", "Salesforce-native", "Custom actions"],
  },
  {
    id: "cognilogs",
    name: "cognilogs",
    headerNote: "Local · Any ticketing system",
    bestFor:
      "Local-first teams whose tickets need code, log, and data investigation before a reply.",
    tags: ["Local", "Any ticketing system", "Early access"],
  },
];

const vendorBrandNames: Record<
  Exclude<VendorId, "cognilogs">,
  "Zendesk" | "Freshdesk" | "Intercom" | "Salesforce"
> = {
  zendesk: "Zendesk",
  freshworks: "Freshdesk",
  intercom: "Intercom",
  salesforce: "Salesforce",
};

function VendorLogo({ id }: { id: VendorId }) {
  if (id === "cognilogs") {
    return <LogoMark className="h-6 w-6" />;
  }

  const brand = ticketingBrands.find(
    (item) => item.name === vendorBrandNames[id],
  );

  return brand ? <BrandMark brand={brand} className="h-5 w-5" /> : null;
}

const tableGroups: TableGroup[] = [
  {
    title: "Deployment & fit",
    rows: [
      {
        label: "Deployment",
        hint: "Where the agent and data live",
        values: {
          zendesk: { text: "Zendesk cloud" },
          freshworks: { text: "Freshworks cloud" },
          intercom: { text: "Intercom cloud; US, EU, or AU hosting" },
          salesforce: { text: "Salesforce cloud" },
          cognilogs: { text: "Your servers or private network" },
        },
      },
      {
        label: "Ticketing environment",
        hint: "Which system stays the source of record",
        values: {
          zendesk: {
            text: "Zendesk; the Forethought option runs on other platforms.",
          },
          freshworks: { text: "Freshdesk and Freshservice." },
          intercom: {
            text: "Intercom; Fin also works with Zendesk, Freshdesk, Salesforce, and HubSpot.",
          },
          salesforce: { text: "Salesforce Service Cloud." },
          cognilogs: {
            text: "Any ticketing system, polled on your interval.",
          },
        },
      },
      {
        label: "Model choice",
        hint: "Who selects and hosts the model",
        values: {
          zendesk: {
            text: "Zendesk generative + proprietary intent models.",
          },
          freshworks: { text: "Vendor-managed Freddy AI models." },
          intercom: { text: "Fin Apex models; vendor-managed." },
          salesforce: {
            text: "Salesforce-managed models; BYO LLM via AI Models, still Salesforce-hosted.",
          },
          cognilogs: {
            text: "Any local or open-weight model you can serve.",
          },
        },
      },
      {
        label: "Integration breadth",
        hint: "How the agent reaches the rest of the stack",
        values: {
          zendesk: { text: "1,800+ marketplace apps + APIs." },
          freshworks: { text: "Connector apps, MCP actions, APIs." },
          intercom: { text: "API, Data Connectors, MCP, helpdesk integrations." },
          salesforce: { text: "AppExchange, MuleSoft, APIs, MCP." },
          cognilogs: { text: "1,500+ integrations + APIs, webhooks, browser." },
        },
      },
    ],
  },
  {
    title: "Investigation & action",
    rows: [
      {
        label: "Knowledge grounding",
        hint: "What the agent can read before it answers",
        values: {
          zendesk: {
            status: "yes",
            text: "Help center, Google Drive, PDFs.",
          },
          freshworks: {
            status: "yes",
            text: "Help center and connected apps.",
          },
          intercom: {
            status: "yes",
            text: "Help center and content sources.",
          },
          salesforce: {
            status: "yes",
            text: "CRM, Data Cloud, knowledge.",
          },
          cognilogs: {
            status: "yes",
            text: "Ticket history and internal systems.",
          },
        },
      },
      {
        label: "Code, logs, databases, observability",
        hint: "Can it investigate beyond the knowledge base?",
        values: {
          zendesk: {
            status: "config",
            text: "Through connected APIs; not packaged.",
          },
          freshworks: {
            status: "config",
            text: "Through connectors or MCP; not packaged.",
          },
          intercom: {
            status: "config",
            text: "Through API or Data Connectors; not packaged.",
          },
          salesforce: {
            status: "config",
            text: "Custom via Flow, MuleSoft, or Apex; not packaged.",
          },
          cognilogs: {
            status: "yes",
            text: "Native audit log, code, DB, Kibana, Sentry, and Datadog checks.",
          },
        },
      },
      {
        label: "External actions",
        hint: "Can it change state outside the helpdesk?",
        values: {
          zendesk: {
            status: "yes",
            text: "Action Builder + APIs.",
          },
          freshworks: {
            status: "yes",
            text: "AI Actions, connectors, MCP.",
          },
          intercom: {
            status: "yes",
            text: "Procedures + API, Data Connectors, MCP.",
          },
          salesforce: {
            status: "yes",
            text: "Flow, Apex, MuleSoft, MCP.",
          },
          cognilogs: {
            status: "yes",
            text: "API actions with approval where required.",
          },
        },
      },
      {
        label: "Browser automation",
        hint: "For systems with no usable API",
        values: {
          zendesk: { status: "no", text: "Not documented natively." },
          freshworks: { status: "no", text: "Not documented natively." },
          intercom: { status: "no", text: "Not documented natively." },
          salesforce: { status: "no", text: "Not documented natively." },
          cognilogs: {
            status: "yes",
            text: "For systems without an API; approval-gated.",
          },
        },
      },
      {
        label: "Human-agent copilot",
        hint: "AI assistance inside the agent workspace",
        values: {
          zendesk: {
            status: "yes",
            text: "Copilot add-on; $50/agent/mo annual.",
          },
          freshworks: {
            status: "yes",
            text: "Freddy Copilot; $29/agent/mo.",
          },
          intercom: {
            status: "yes",
            text: "Copilot add-on; $29/agent/mo.",
          },
          salesforce: {
            status: "yes",
            text: "Agentforce employee agents; licensing varies.",
          },
          cognilogs: {
            status: "no",
            text: "No separate copilot; the agent does the work and a person reviews.",
          },
        },
      },
      {
        label: "Human handoff",
        hint: "What happens when the agent should stop",
        values: {
          zendesk: {
            status: "yes",
            text: "Native escalation with full context.",
          },
          freshworks: { status: "yes", text: "Native escalation." },
          intercom: { status: "yes", text: "Native handoff to your inbox." },
          salesforce: {
            status: "yes",
            text: "Native escalation and Omni-Channel routing.",
          },
          cognilogs: {
            status: "yes",
            text: "Private note + human queue.",
          },
        },
      },
    ],
  },
  {
    title: "Resolution & control",
    rows: [
      {
        label: "Incident RCA",
        hint: "Root cause drafted from the evidence",
        values: {
          zendesk: {
            status: "no",
            text: "Summaries and QA; no packaged incident RCA.",
          },
          freshworks: {
            status: "no",
            text: "Freddy Insights RCA focuses on service metrics; not packaged incident RCA.",
          },
          intercom: {
            status: "no",
            text: "Summaries and insights; no packaged incident RCA.",
          },
          salesforce: {
            status: "config",
            text: "Custom agent possible; not packaged.",
          },
          cognilogs: {
            status: "yes",
            text: "Drafted from the run; reviewed by a person.",
          },
        },
      },
      {
        label: "SLA + child tickets",
        hint: "Tracking the work that splits across teams",
        values: {
          zendesk: {
            status: "config",
            text: "SLA policies; side-conversation child tickets.",
          },
          freshworks: {
            status: "yes",
            text: "Native parent-child tickets; SLA policies.",
          },
          intercom: {
            status: "config",
            text: "SLAs on Expert; no native parent-child.",
          },
          salesforce: {
            status: "yes",
            text: "Case hierarchy; entitlements and milestones.",
          },
          cognilogs: {
            status: "yes",
            text: "Child-ticket watch, Slack/email, manager escalation.",
          },
        },
      },
      {
        label: "Action audit trail",
        hint: "What you can inspect after the agent acts",
        values: {
          zendesk: {
            status: "yes",
            text: "Reasoning steps, QA, admin audit logs.",
          },
          freshworks: {
            status: "config",
            text: "AI reporting; audit logs on Enterprise.",
          },
          intercom: {
            status: "yes",
            text: "Fin analytics, QA, conversation history.",
          },
          salesforce: {
            status: "yes",
            text: "Einstein Trust Layer + Agentforce observability.",
          },
          cognilogs: {
            status: "yes",
            text: "Tool calls, browser actions, approvals, replies.",
          },
        },
      },
      {
        label: "Pricing model",
        hint: "Public list pricing, checked 25 Oct 2026",
        values: {
          zendesk: {
            text: "From $55/seat/mo annual. 5 AI resolutions/agent/mo included; $2 per extra.",
          },
          freshworks: {
            text: "From $19/seat/mo annual. 500 AI sessions included; $49 per 100 after. Copilot $29/agent/mo on Pro+.",
          },
          intercom: {
            text: "$0.99 per Fin outcome. Seats from $29/mo list (current offer $19); Fin-only with your helpdesk has no seat cost.",
          },
          salesforce: {
            text: "$2 per conversation or Flex Credits. Service Cloud licenses separate.",
          },
          cognilogs: {
            text: "₹10 per analyzed ticket floor (early access). Model and infrastructure paid by you.",
          },
        },
      },
    ],
  },
];

const sources: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  {
    label: "Zendesk pricing and AI agent resolution pricing",
    href: "https://www.zendesk.com/pricing/",
    external: true,
  },
  {
    label: "Zendesk AI agents: knowledge, actions, models",
    href: "https://www.zendesk.com/service/ai/ai-agents/",
    external: true,
  },
  {
    label: "Zendesk side-conversation child tickets",
    href: "https://support.zendesk.com/hc/en-us/articles/4408836521498-Using-side-conversation-child-tickets",
    external: true,
  },
  {
    label: "Freshdesk pricing, Freddy sessions, and Copilot",
    href: "https://www.freshworks.com/freshdesk/pricing/",
    external: true,
  },
  {
    label: "Freshdesk parent-child ticketing",
    href: "https://support.freshdesk.com/support/solutions/articles/224359-setting-up-parent-child-ticketing",
    external: true,
  },
  {
    label: "Freshdesk MCP integration",
    href: "https://support.freshdesk.com/support/solutions/articles/50000012670-model-context-protocol-mcp-integration-in-freshdesk",
    external: true,
  },
  {
    label: "Intercom pricing and Fin outcome pricing",
    href: "https://www.intercom.com/pricing",
    external: true,
  },
  {
    label: "Fin capabilities, helpdesk support, actions, and models",
    href: "https://fin.ai",
    external: true,
  },
  {
    label: "Intercom SLAs",
    href: "https://www.intercom.com/help/en/articles/6546152-set-slas-for-conversations-and-tickets",
    external: true,
  },
  {
    label: "Salesforce Agentforce pricing",
    href: "https://www.salesforce.com/agentforce/pricing/",
    external: true,
  },
  {
    label: "Salesforce Agentforce actions and observability",
    href: "https://www.salesforce.com/agentforce/",
    external: true,
  },
  {
    label: "Salesforce bring-your-own LLM",
    href: "https://help.salesforce.com/s/articleView?id=sf.c360_a_ai_foundation_models.htm&language=en_US&type=5",
    external: true,
  },
  {
    label: "Salesforce parent-child cases",
    href: "https://help.salesforce.com/s/articleView?id=sf.cases_parent.htm&language=en_US&type=5",
    external: true,
  },
  {
    label: "cognilogs pricing",
    href: "/pricing",
  },
  {
    label: "cognilogs product and integration coverage",
    href: "/features#connections",
  },
];

function StatusMark({ status }: { status: Status }) {
  if (status === "yes") {
    return (
      <CheckCircle2
        aria-hidden="true"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-strong"
      />
    );
  }

  if (status === "config") {
    return (
      <CircleDashed
        aria-hidden="true"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow"
      />
    );
  }

  return (
    <Minus
      aria-hidden="true"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-line-strong"
    />
  );
}

function CompareCell({
  cell,
  highlight = false,
}: {
  cell: Cell;
  highlight?: boolean;
}) {
  return (
    <td
      className={`px-4 py-4 align-top text-[12px] leading-5 ${
        highlight ? "bg-accent-soft/45" : ""
      }`}
    >
      <div className="flex items-start gap-1.5">
        {cell.status ? <StatusMark status={cell.status} /> : null}
        <span
          className={
            cell.status === "no" ? "text-muted" : "text-muted-strong"
          }
        >
          {cell.text}
        </span>
      </div>
    </td>
  );
}

export default function ComparisonPage() {
  return (
    <div>
      <section className="pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Vendor comparison · verified 25 Oct 2026
              </p>
              <h1 className="display-1 mt-5 max-w-[900px]">
                Compare the work, not the pitch.
              </h1>
              <p className="lede measure mt-5">
                How cognilogs stacks up against Zendesk AI, Freshdesk Freddy,
                Intercom Fin, and Salesforce Agentforce on the things that
                decide a support loop: deployment, investigation, action,
                evidence, SLAs, and price.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/waitlist" size="lg" withArrow>
                  Join the waitlist
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary" size="lg">
                  See cognilogs pricing
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="rounded-[22px] bg-surface p-5">
                <p className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
                  <ShieldCheck className="h-4 w-4 text-accent-strong" />
                  How this was checked
                </p>
                <ul className="mt-3 space-y-2 text-[12px] leading-5 text-muted">
                  <li>Official vendor documentation and public list pricing.</li>
                  <li>Capabilities verified as of 25 October 2026.</li>
                  <li>
                    No review-site scores or unverifiable resolution-rate
                    claims.
                  </li>
                  <li>
                    Add-ons, higher tiers, and custom builds are marked
                    separately.
                  </li>
                </ul>
                <a
                  href="#sources"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink transition-colors hover:text-accent-strong"
                >
                  See every source
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {vendors.map((vendor) => (
              <ScrollReveal key={vendor.id}>
                <div
                  className={`h-full rounded-[22px] border p-4 ${
                    vendor.id === "cognilogs"
                      ? "border-accent/30 bg-accent-soft/55"
                      : "border-line/70 bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center rounded-xl border border-line/70 bg-surface"
                    >
                      <VendorLogo id={vendor.id} />
                    </span>
                    {vendor.id === "cognilogs" ? (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-medium text-accent-ink">
                        This is us
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3.5 text-[14px] font-semibold tracking-[-0.02em] text-ink">
                    {vendor.name}
                  </p>
                  <p className="mt-1.5 text-[11.5px] leading-5 text-muted">
                    {vendor.bestFor}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {vendor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper px-2 py-1 text-[9.5px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="matrix" className="scroll-mt-24 pb-16 sm:pb-20">
        <div className="shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Line by line
              </p>
              <h2 className="display-3 mt-3 max-w-[620px]">
                The details that decide the fit.
              </h2>
            </div>
            <p className="max-w-[330px] text-[12px] leading-5 text-muted">
              Scroll sideways on smaller screens. The capability column stays
              pinned, and the cognilogs column is highlighted.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-strong" />
              Native or included
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDashed className="h-3.5 w-3.5 text-yellow" />
              Add-on, higher tier, or configuration
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5 text-line-strong" />
              Not a native or packaged feature
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-[26px] border border-line/80 bg-surface">
            <div className="overflow-x-auto overscroll-x-contain">
              <table
                aria-label="Comparison of cognilogs with Zendesk AI, Freshdesk Freddy, Intercom Fin, and Salesforce Agentforce"
                className="w-full min-w-[1120px] table-fixed border-collapse text-left"
              >
                <colgroup>
                  <col className="w-[200px] sm:w-[230px]" />
                  {vendors.map((vendor) => (
                    <col key={vendor.id} className="w-[178px]" />
                  ))}
                </colgroup>
                <thead>
                  <tr className="border-b border-line bg-paper">
                    <th
                      scope="col"
                      className="sticky left-0 z-20 border-r border-line/70 bg-paper px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                    >
                      Capability
                    </th>
                    {vendors.map((vendor) => (
                      <th
                        key={vendor.id}
                        scope="col"
                        className={`px-4 py-4 align-top ${
                          vendor.id === "cognilogs" ? "bg-accent-soft" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="grid h-7 w-7 place-items-center rounded-lg border border-line/70 bg-surface"
                          >
                            <VendorLogo id={vendor.id} />
                          </span>
                          <span className="text-[12px] font-semibold leading-4 text-ink">
                            {vendor.name}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[9.5px] font-normal leading-4 text-muted">
                          {vendor.headerNote}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableGroups.map((group) => (
                    <Fragment key={group.title}>
                      <tr
                        className="border-y border-line/80 bg-paper-deep/70"
                      >
                        <th
                          colSpan={6}
                          scope="colgroup"
                          className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-muted"
                        >
                          {group.title}
                        </th>
                      </tr>
                      {group.rows.map((row) => (
                        <tr
                          key={row.label}
                          className="border-t border-line/70 first:border-t-0"
                        >
                          <th
                            scope="row"
                            className="sticky left-0 z-10 border-r border-line/70 bg-surface px-5 py-4 align-top text-left"
                          >
                            <p className="text-[12.5px] font-medium leading-5 text-ink">
                              {row.label}
                            </p>
                            <p className="mt-0.5 text-[10.5px] leading-4 text-muted">
                              {row.hint}
                            </p>
                          </th>
                          {vendors.map((vendor) => (
                            <CompareCell
                              key={`${row.label}-${vendor.id}`}
                              cell={row.values[vendor.id]}
                              highlight={vendor.id === "cognilogs"}
                            />
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 max-w-[860px] text-[10.5px] leading-5 text-muted">
            Prices are public list prices in USD unless noted, checked on 25
            October 2026, and exclude tax, implementation, and model or
            infrastructure costs. Vendor pricing varies by region, volume, and
            contract. “Not a native or packaged feature” means the capability was
            not described as a packaged feature on the vendor’s public product
            or help pages; it does not mean the vendor cannot build it with
            custom work.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                Read the edges
              </p>
              <h2 className="display-3 mt-3 max-w-[620px]">
                What the table does not capture.
              </h2>
            </div>
            <p className="max-w-[330px] text-[12px] leading-5 text-muted">
              A feature matrix is not a buying decision. These are the trade-offs
              behind the ticks.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "No resolution-rate contest.",
                body: "Vendors define and measure automated resolution differently. We compare documented capability and deployment, not a marketing percentage.",
              },
              {
                title: "Configuration is real work.",
                body: "A connector, custom action, or approval path can take weeks. The table marks those as configuration instead of pretending they are free.",
              },
              {
                title: "The suites win on breadth.",
                body: "Zendesk, Freshworks, Intercom, and Salesforce have larger marketplaces, global support organizations, and mature partner networks. We do not pretend otherwise.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="h-full rounded-[24px] bg-surface p-6">
                  <Sparkles className="h-5 w-5 text-accent-strong" />
                  <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="scroll-mt-24 pb-20 sm:pb-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="display-3">Sources.</h2>
              <p className="mt-4 max-w-[360px] text-[13px] leading-6 text-muted">
                Every vendor claim in the matrix comes from the vendor’s own
                product or help documentation. Pricing pages were checked on 25
                October 2026.
              </p>
              <p className="mt-4 max-w-[360px] text-[11px] leading-5 text-muted">
                Disclosure: cognilogs is our product. We have included rows
                where the larger suites are stronger, and we have not used
                review-site scores or unverifiable resolution-rate claims.
              </p>
              <p className="mt-4 max-w-[360px] text-[11px] leading-5 text-muted">
                Zendesk, Freshworks, Intercom, and Salesforce are trademarks of
                their respective owners. This comparison is informational and
                does not imply endorsement or partnership.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {sources.map((source, index) => (
                  <li
                    key={source.href}
                    className="flex gap-2 text-[12px] leading-5"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {source.external ? (
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 text-muted-strong underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
                      >
                        {source.label}
                        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0" />
                      </a>
                    ) : (
                      <Link
                        href={source.href}
                        className="text-muted-strong underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent-strong"
                      >
                        {source.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="shell">
          <div className="flex flex-col gap-5 rounded-[28px] bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[32px]">
                See the difference on one ticket.
              </h2>
              <p className="mt-2 max-w-[560px] text-[14px] leading-6 text-muted">
                Bring a ticket that crosses systems. We will show you the
                evidence, the decision, the approval, and the handoff.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/waitlist" size="md" withArrow>
                Join the waitlist
              </ButtonLink>
              <Link
                href="/pricing"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-5 text-[14px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface-muted"
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
