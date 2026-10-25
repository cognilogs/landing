import {
  ArrowUp,
  BookOpen,
  ChevronDown,
  Clock3,
  Database,
  FileCode2,
  Inbox,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

const conversations = [
  {
    name: "Maya Chen",
    subject: "SSO loop after certificate rotation",
    time: "2m",
    tag: "P1",
    initials: "MC",
    color: "bg-[#5b6cff]",
    active: true,
  },
  {
    name: "Jon Bell",
    subject: "Webhook backlog after EU migration",
    time: "11m",
    tag: "Issue",
    initials: "JB",
    color: "bg-[#2b9e71]",
  },
  {
    name: "Priya Nair",
    subject: "Enable SCIM for contractor cohort",
    time: "38m",
    tag: "Feature",
    initials: "PN",
    color: "bg-[#c26b36]",
  },
  {
    name: "Liam Okafor",
    subject: "Data residency evidence pack",
    time: "1h",
    tag: "Query",
    initials: "LO",
    color: "bg-[#8b5dc7]",
  },
];

const trace = [
  {
    icon: FileCode2,
    label: "Audit events",
    meta: "IdP certificate · 04:12",
    tone: "text-console-green",
  },
  {
    icon: Database,
    label: "Postgres query",
    meta: "cohort_members · 42 rows",
    tone: "text-console-green",
  },
  {
    icon: Terminal,
    label: "Codebase search",
    meta: "metadata.publish · v8.4",
    tone: "text-console-green",
  },
  {
    icon: ShieldCheck,
    label: "Sentry / Kibana",
    meta: "login.loop · 38 events",
    tone: "text-console-orange",
  },
  {
    icon: Clock3,
    label: "Approval requested",
    meta: "RCA review · owner",
    tone: "text-console-orange",
  },
];

export default function ProductConsole() {
  return (
    <div
      data-ui
      aria-hidden="true"
      className="overflow-hidden rounded-[22px] border border-white/10 bg-console text-console-text"
    >
      <div className="flex h-12 items-center justify-between gap-4 border-b border-white/[0.08] px-4 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <LogoMark className="h-5 w-5" />
          <span className="text-[13px] font-medium text-white">cognilogs</span>
          <span className="hidden h-3.5 w-px bg-white/10 sm:block" />
          <span className="hidden truncate text-[12px] text-console-muted sm:block">
            Support / Chat
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-console-muted sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-console-green" />
            Local model
          </span>
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] text-console-muted">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="grid min-h-[520px] md:grid-cols-[228px_minmax(0,1fr)] lg:grid-cols-[228px_minmax(0,1fr)_248px]">
        <div className="hidden border-r border-white/[0.07] p-3 md:block">
          <div className="flex items-center justify-between px-2">
            <span className="text-[13px] font-medium text-white">Conversations</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-console-muted">
              8
            </span>
          </div>
          <div className="mt-3 flex h-8 items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 text-[11px] text-console-muted">
            <Search className="h-3.5 w-3.5" />
            Search tickets
          </div>
          <div className="mt-3 flex items-center gap-4 text-[10px]">
            <span className="border-b border-accent pb-1 font-medium text-white">
              All
            </span>
            <span className="pb-1 text-console-muted">Review 2</span>
            <span className="pb-1 text-console-muted">SLA 1</span>
          </div>

          <div className="mt-3 space-y-0.5">
            {conversations.map((ticket) => (
              <div
                key={ticket.name}
                className={`relative flex gap-2.5 rounded-lg px-2 py-2.5 ${
                  ticket.active ? "bg-accent/[0.08]" : ""
                }`}
              >
                {ticket.active && (
                  <span className="absolute bottom-2.5 left-0 top-2.5 w-0.5 rounded-full bg-accent" />
                )}
                <span
                  className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[9px] font-medium text-white ${ticket.color}`}
                >
                  {ticket.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[11px] font-medium text-white/90">
                      {ticket.name}
                    </span>
                    <span className="shrink-0 text-[9px] text-console-faint">
                      {ticket.time}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-console-muted">
                    {ticket.subject}
                  </p>
                  <span className="mt-1.5 inline-block rounded bg-white/[0.05] px-1.5 py-0.5 text-[8px] text-console-muted">
                    {ticket.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
            <p className="flex items-center gap-1.5 text-[10px] font-medium text-white/75">
              <Inbox className="h-3.5 w-3.5 text-accent" />
              Queue health
            </p>
            <p className="mt-2 text-[10px] leading-5 text-console-muted">
              5 tickets in progress. 2 waiting on a person. 1 on SLA watch.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-4 py-4 sm:px-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] text-console-muted">
                <span>#4821</span>
                <span className="text-console-faint">/</span>
                <span>Enterprise</span>
                <span className="text-console-faint">/</span>
                <span>P1</span>
              </div>
              <h3 className="mt-1.5 truncate text-[15px] font-medium tracking-[-0.02em] text-white sm:text-[17px]">
                SSO loop after certificate rotation
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-console-muted">
                <span>Maya Chen</span>
                <span className="text-console-faint">·</span>
                <span>Northwind</span>
                <span className="text-console-faint">·</span>
                <span>Finance cohort</span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-console-muted sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                In progress
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-md border border-white/[0.08] text-console-muted">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3.5 px-4 py-4 sm:px-5">
            <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white/[0.055] px-3.5 py-3">
              <p className="text-[11px] leading-[1.65] text-white/80">
                We rotated our IdP signing certificate last night. Now 40 people
                in finance are stuck in a login loop. A rollout email also went
                to a cohort that should not have received it.
              </p>
              <span className="mt-2 block text-[9px] text-console-faint">
                Maya · 10:42
              </span>
            </div>

            <div className="rounded-xl border border-accent/15 bg-accent/[0.045] p-3.5">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15">
                  <Sparkles className="h-3 w-3 text-accent" />
                </span>
                <span className="text-[10px] font-medium text-accent">
                  cognilogs
                </span>
                <span className="ml-auto rounded-full bg-console-green/10 px-2 py-0.5 text-[9px] font-medium text-console-green">
                  Investigating
                </span>
              </div>
              <p className="mt-2.5 text-[11px] leading-[1.7] text-white/80">
                I found two problems. The certificate rotated before the new
                metadata was published, and the rollout job included the wrong
                cohort. I restored the metadata, paused the job, and prepared a
                customer note. I am not sending the RCA without your sign-off.
              </p>
              <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {[
                  ["Audit log", "certificate · 04:12"],
                  ["Postgres", "cohort_members · 42 rows"],
                  ["Codebase", "metadata.publish · v8.4"],
                  ["Sentry", "login.loop · 38 events"],
                ].map(([label, meta]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 text-[9px] text-console-muted"
                  >
                    <BookOpen className="h-2.5 w-2.5" />
                    <span className="text-white/65">{label}</span>
                    <span className="truncate text-console-faint">{meta}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                  <FileCode2 className="h-3 w-3 text-console-orange" />
                  RCA draft
                </span>
                <span className="rounded-full bg-console-orange/10 px-2 py-0.5 text-[9px] text-console-orange">
                  Human review
                </span>
              </div>
              <p className="mt-2 text-[10.5px] leading-5 text-white/60">
                Certificate published after the client cache expired. Rollout
                cohort filter used the legacy plan field. Fix verified on 2
                staging tenants. Customer note and internal RCA are ready.
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-accent px-2 py-1 text-[9px] font-medium text-accent-ink">
                  Review RCA
                </span>
                <span className="rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-console-muted">
                  Edit reply
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] text-console-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
              Confidence 0.93 · 5 checks attached · every action traced
            </div>
          </div>

          <div className="border-t border-white/[0.07] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
              <MessageSquareText className="h-3.5 w-3.5 text-console-muted" />
              <span className="flex-1 text-[10px] text-console-faint">
                Ask cognilogs or add a private note…
              </span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-ink">
                <ArrowUp className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-white/[0.07] lg:block">
          <div className="border-b border-white/[0.07] px-4 py-4">
            <div className="flex items-center justify-between text-[10px] text-console-muted">
              <span>Run trace</span>
              <span className="text-white/50">#184</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-console-green/10 text-[12px] font-medium text-console-green">
                93%
              </span>
              <div>
                <p className="text-[12px] font-medium text-white">
                  High confidence
                </p>
                <p className="mt-0.5 text-[10px] text-console-muted">
                  threshold 85%
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-4">
            <p className="text-[10px] font-medium text-white/80">What it checked</p>
            <div className="mt-3 space-y-3">
              {trace.map((item) => (
                <div key={item.label} className="flex gap-2">
                  <item.icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${item.tone}`} />
                  <div>
                    <p className="text-[10px] text-white/75">{item.label}</p>
                    <p className="mt-0.5 text-[9px] text-console-faint">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
              <p className="flex items-center gap-1.5 text-[10px] font-medium text-white/75">
                <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
                Audit trail
              </p>
              <p className="mt-2 text-[10px] leading-5 text-console-muted">
                Ticket events, model actions, approvals, and replies are recorded
                for review.
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-[9px] text-console-faint">
              <span>Local model</span>
              <span className="text-console-green">Evidence attached</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
