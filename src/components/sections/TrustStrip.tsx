"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";

const tools = [
  { name: "Freshdesk", dot: "bg-accent", status: "First" },
  { name: "Slack", dot: "bg-violet", status: "Planned" },
  { name: "Jira", dot: "bg-blue", status: "Planned" },
  { name: "Linear", dot: "bg-[#5b6cff]", status: "Planned" },
  { name: "Notion", dot: "bg-ink", status: "Planned" },
  { name: "Confluence", dot: "bg-cyan", status: "Planned" },
  { name: "GitHub", dot: "bg-ink", status: "Planned" },
  { name: "Datadog", dot: "bg-[#6c4ed9]", status: "Planned" },
];

function ToolRail({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-copy" aria-hidden={hidden || undefined}>
      {tools.map((tool) => (
        <span
          key={tool.name}
          className="inline-flex items-center gap-2.5 text-[17px] font-medium tracking-[-0.02em] text-muted-strong"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${tool.dot}`} />
          {tool.name}
          <span className="text-[13px] font-medium text-muted">
            {tool.status}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TrustStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Connector roadmap" className="py-10 sm:py-14">
      <div className="shell">
        <div className="flex flex-col gap-6 rounded-[20px] bg-surface px-5 py-5 sm:px-6 md:flex-row md:items-center md:gap-8">
          <div className="shrink-0 md:w-[255px]">
            <p className="flex items-center gap-2 text-[14px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Freshdesk-first
            </p>
            <p className="mt-1.5 max-w-[250px] text-[13px] leading-5 text-muted">
              Built around the inbox your team already runs.
            </p>
          </div>

          <div className={`marquee min-w-0 flex-1 ${paused ? "is-paused" : ""}`}>
            <div className="marquee-track">
              <ToolRail />
              <ToolRail hidden />
            </div>
          </div>

          <div className="shrink-0 md:w-[150px]">
            <p className="text-[13px] leading-5 text-muted">
              More connectors in the works.{" "}
              <Link
                href="/features#connections"
                className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent-strong"
              >
                See the plan
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </p>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              aria-label={paused ? "Play connector ticker" : "Pause connector ticker"}
              className="marquee-control mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-muted transition-colors hover:text-ink motion-reduce:hidden"
            >
              {paused ? (
                <Play aria-hidden="true" className="h-3 w-3" />
              ) : (
                <Pause aria-hidden="true" className="h-3 w-3" />
              )}
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
