import {
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Inbox,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

const tickets = [
  {
    name: "Maya Chen",
    subject: "Refund not reflecting on invoice",
    time: "2m",
    tag: "Billing",
    initials: "MC",
    color: "bg-[#5b6cff]",
    active: true,
  },
  {
    name: "Jon Bell",
    subject: "API key rotates on save",
    time: "14m",
    tag: "Issue",
    initials: "JB",
    color: "bg-[#2b9e71]",
  },
  {
    name: "Priya Nair",
    subject: "Add SSO for contractors",
    time: "1h",
    tag: "Feature",
    initials: "PN",
    color: "bg-[#c26b36]",
  },
  {
    name: "Liam Okafor",
    subject: "Invoice shows old plan",
    time: "2h",
    tag: "Billing",
    initials: "LO",
    color: "bg-[#8b5dc7]",
  },
];

const runSteps = [
  {
    label: "Duplicate charge matched",
    meta: "Billing · Oct 18",
    tone: "text-console-green",
  },
  {
    label: "Refund settled",
    meta: "Billing · Oct 20",
    tone: "text-console-green",
  },
  {
    label: "Credit applied to next invoice",
    meta: "Billing ledger · CN-8821",
    tone: "text-console-green",
  },
];

function ConfidenceRing() {
  return (
    <div className="relative h-[52px] w-[52px] shrink-0">
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="-rotate-90"
        fill="none"
      >
        <circle
          cx="24"
          cy="24"
          r="19"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="3.5"
        />
        <circle
          cx="24"
          cy="24"
          r="19"
          stroke="var(--console-green)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="112 120"
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[12px] font-medium text-white">
        94%
      </span>
    </div>
  );
}

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
          <span className="text-[13px] font-medium text-white">CogniLogs</span>
          <span className="hidden h-3.5 w-px bg-white/10 sm:block" />
          <span className="hidden truncate text-[12px] text-console-muted sm:block">
            Freshdesk / Support
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium text-console-muted sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-console-green" />
            Local preview
          </span>
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] text-console-muted">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="grid min-h-[500px] lg:grid-cols-[52px_276px_minmax(0,1fr)_282px]">
        <div className="hidden flex-col items-center border-r border-white/[0.07] py-4 md:flex">
          <div className="grid gap-2">
            {[Inbox, Sparkles, BookOpen, Timer].map((Icon, index) => (
              <span
                key={index}
                className={`grid h-8 w-8 place-items-center rounded-lg ${
                  index === 0
                    ? "bg-accent/15 text-accent"
                    : "text-console-muted"
                }`}
              >
                <Icon className="h-[15px] w-[15px]" strokeWidth={1.8} />
              </span>
            ))}
          </div>
          <span className="mt-auto grid h-8 w-8 place-items-center rounded-lg text-console-muted">
            <Settings2 className="h-[15px] w-[15px]" strokeWidth={1.8} />
          </span>
        </div>

        <div className="hidden border-r border-white/[0.07] p-3 md:block">
          <div className="flex items-center justify-between px-2">
            <span className="text-[14px] font-medium text-white">Inbox</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-console-muted">
              12
            </span>
          </div>
          <div className="mt-3 flex h-8 items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 text-[11px] text-console-muted">
            <Search className="h-3.5 w-3.5" />
            Search tickets
            <span className="ml-auto text-[9px] text-console-faint">⌘K</span>
          </div>
          <div className="mt-3 flex items-center gap-4 text-[10px]">
            <span className="border-b border-accent pb-1 font-medium text-white">
              All
            </span>
            <span className="pb-1 text-console-muted">Needs review 2</span>
            <span className="pb-1 text-console-muted">SLA 1</span>
          </div>

          <div className="mt-3 space-y-0.5">
            {tickets.map((ticket) => (
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
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-4 py-4 sm:px-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] text-console-muted">
                <span>#4821</span>
                <span className="text-console-faint">/</span>
                <span>Billing</span>
                <span className="text-console-faint">/</span>
                <span>Freshdesk</span>
              </div>
              <h3 className="mt-1.5 truncate text-[15px] font-medium tracking-[-0.02em] text-white sm:text-[17px]">
                Refund not reflecting on invoice
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-console-muted">
                <span>Maya Chen</span>
                <span className="text-console-faint">·</span>
                <span>Growth plan</span>
                <span className="text-console-faint">·</span>
                <span>2 seats</span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-console-muted sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                Open
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-md border border-white/[0.08] text-console-muted">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          <div className="space-y-3.5 px-4 py-4 sm:px-5">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white/[0.055] px-3.5 py-3">
              <p className="text-[11px] leading-[1.6] text-white/80">
                Hi, we were charged twice on Oct 18. We refunded one charge, but
                the invoice still shows both. Can you check?
              </p>
              <span className="mt-2 block text-[9px] text-console-faint">
                Maya · 10:42
              </span>
            </div>

            <div className="rounded-xl border border-accent/15 bg-accent/[0.045] p-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-accent">
                  <Sparkles className="h-3 w-3" />
                  CogniLogs draft
                </span>
                <span className="rounded-full bg-console-green/10 px-2 py-0.5 text-[9px] font-medium text-console-green">
                  Ready to send
                </span>
              </div>
              <p className="mt-2.5 text-[11px] leading-[1.65] text-white/80">
                Hi Maya, I found the duplicate charge and the refund from Oct
                18. The credit is on your account and will appear on your next
                invoice as a $49 credit. I&apos;ve attached credit note CN-8821.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Billing charge", "Refund · Oct 20", "Billing policy"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1 rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[9px] text-console-muted"
                    >
                      <BookOpen className="h-2.5 w-2.5" />
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                  <Zap className="h-3 w-3 text-console-orange" />
                  Agent run #184
                </span>
                <span className="text-[9px] text-console-green">Verified</span>
              </div>
              <div className="mt-2.5 space-y-2">
                {runSteps.map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-2 text-[10px]"
                  >
                    <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-console-green/10">
                      <Check className={`h-2.5 w-2.5 ${step.tone}`} />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-white/70">
                      {step.label}
                    </span>
                    <span className="shrink-0 text-[9px] text-console-faint">
                      {step.meta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-4 mb-4 flex items-center justify-between gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 sm:mx-5">
            <div className="flex min-w-0 items-center gap-2 text-[10px] text-console-muted">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-console-green/10">
                <ShieldCheck className="h-3 w-3 text-console-green" />
              </span>
              <span className="truncate">Auto-reply ready · 94% confidence</span>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="hidden rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-console-muted sm:inline-block">
                Review
              </span>
              <span className="rounded-md bg-accent px-2.5 py-1 text-[9px] font-medium text-accent-ink">
                Send reply
              </span>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-white/[0.07] lg:block">
          <div className="border-b border-white/[0.07] px-4 py-4">
            <div className="flex items-center justify-between text-[10px] text-console-muted">
              <span>Agent run</span>
              <span className="text-white/50">#184</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <ConfidenceRing />
              <div>
                <p className="text-[12px] font-medium text-white">
                  High confidence
                </p>
                <p className="mt-0.5 text-[10px] text-console-muted">
                  Threshold 85%
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-4">
            <p className="text-[10px] font-medium text-white/80">
              What it checked
            </p>
            <div className="mt-3 space-y-3">
              {[
                ["Duplicate charge", "Billing · $49.00"],
                ["Refund settled", "Oct 20 · ref RF-2189"],
                ["Credit note", "CN-8821 · next invoice"],
              ].map(([label, meta]) => (
                <div key={label} className="flex gap-2">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-console-green/10">
                    <Check className="h-2.5 w-2.5 text-console-green" />
                  </span>
                  <div>
                    <p className="text-[10px] text-white/75">{label}</p>
                    <p className="mt-0.5 text-[9px] text-console-faint">{meta}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium text-white/80">
                    Auto-reply
                  </p>
                  <p className="mt-0.5 text-[9px] text-console-faint">
                    Above threshold
                  </p>
                </div>
                <span className="flex h-4 w-7 items-center rounded-full bg-console-green/25 p-0.5">
                  <span className="ml-auto h-3 w-3 rounded-full bg-console-green" />
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.06] px-2.5 py-2 text-[9px] text-console-muted">
              <Clock3 className="h-3 w-3 text-console-orange" />
              SLA watch active · within window
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
