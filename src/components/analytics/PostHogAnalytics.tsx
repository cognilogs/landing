"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { Properties } from "posthog-js";
import {
  captureEvent,
  capturePageview,
  isAnalyticsConfigured,
} from "@/lib/analytics";

/**
 * Controls that count as a button or link click. `summary` is included because
 * the FAQ and docs disclosures use native `<details>` / `<summary>` toggles.
 */
const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "summary",
  "input[type='submit']",
  "input[type='button']",
  "[role='button']",
  "[role='link']",
  "[role='menuitem']",
  "[role='tab']",
].join(", ");

function normalizeText(value: string | null | undefined): string | undefined {
  const text = value?.replace(/\s+/g, " ").trim();
  if (!text) return undefined;
  return text.slice(0, 160);
}

function controlText(control: Element): string | undefined {
  const explicit = control.getAttribute("data-analytics-label");
  if (explicit) return normalizeText(explicit);

  const ariaLabel = control.getAttribute("aria-label");
  if (ariaLabel) return normalizeText(ariaLabel);

  if (control instanceof HTMLInputElement) {
    return normalizeText(control.value);
  }

  return normalizeText(
    control instanceof HTMLElement ? control.innerText : control.textContent,
  );
}

function anchorProperties(control: Element): Properties {
  const anchor =
    control instanceof HTMLAnchorElement ? control : control.closest("a[href]");
  if (!anchor) return {};

  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return {};

  if (rawHref.startsWith("mailto:")) {
    return { href: rawHref, link_type: "email" };
  }
  if (rawHref.startsWith("tel:")) {
    return { href: rawHref, link_type: "phone" };
  }
  if (rawHref.startsWith("#")) {
    return { href: rawHref, link_type: "anchor" };
  }

  try {
    const url = new URL(rawHref, window.location.href);
    const external = url.origin !== window.location.origin;
    return {
      href: external ? url.href : `${url.pathname}${url.search}${url.hash}`,
      external,
      link_type: external ? "external" : "internal",
    };
  } catch {
    return { href: rawHref };
  }
}

function sectionOf(control: Element): string | undefined {
  const section = control.closest("section[id]");
  if (section?.id) return section.id;

  const labelled = control.closest("[data-analytics-section]");
  return labelled?.getAttribute("data-analytics-section") ?? undefined;
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!isAnalyticsConfigured()) return;

    const url = window.location.href;
    if (lastTrackedUrl.current === url) return;

    lastTrackedUrl.current = url;
    capturePageview(url);
  }, [pathname, search]);

  return null;
}

function ClickTracker() {
  useEffect(() => {
    if (!isAnalyticsConfigured()) return;

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const control = target.closest(INTERACTIVE_SELECTOR);
      if (!control || control.closest("[data-analytics-ignore]")) return;

      const isLink =
        control.tagName === "A" || control.getAttribute("role") === "link";
      const analyticsId = control.getAttribute("data-analytics");
      const analyticsSource = control.getAttribute("data-analytics-source");
      const ariaExpanded = control.getAttribute("aria-expanded");

      captureEvent(isLink ? "link_clicked" : "button_clicked", {
        element: control.tagName.toLowerCase(),
        text: controlText(control),
        analytics_id: analyticsId ?? undefined,
        analytics_source: analyticsSource ?? undefined,
        section: sectionOf(control),
        page_path: window.location.pathname,
        page_title: document.title,
        expanded: ariaExpanded === null ? undefined : ariaExpanded === "true",
        ...anchorProperties(control),
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

/**
 * Mounts PostHog pageview and click tracking. Renders nothing.
 *
 * `useSearchParams` needs a Suspense boundary in a static export. Keeping the
 * boundary local means only this null-rendering tracker is client-rendered,
 * not the page around it.
 */
export default function PostHogAnalytics() {
  return (
    <>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      <ClickTracker />
    </>
  );
}
