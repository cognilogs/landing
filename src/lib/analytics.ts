import type { PostHog, Properties } from "posthog-js";

/**
 * Client-side PostHog setup.
 *
 * The project key is a public, write-only key. It is inlined into the static
 * bundle at build time, so changing it requires a new build and deploy.
 *
 * When `NEXT_PUBLIC_POSTHOG_KEY` is missing, every helper in this file is a
 * no-op. That keeps local builds and forks working without an account.
 */
const PROJECT_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim() ?? "";
const API_HOST = (
  process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "https://us.i.posthog.com"
).replace(/\/+$/, "");

export function isAnalyticsConfigured(): boolean {
  return PROJECT_KEY.length > 0;
}

let client: PostHog | null = null;
let loading: Promise<PostHog | null> | null = null;

/**
 * Events captured before the SDK finishes loading are queued here and flushed
 * once it is ready. A pageview can therefore be recorded from the first
 * render without waiting for a second navigation.
 */
const pendingEvents: Array<{ event: string; properties?: Properties }> = [];

export function loadAnalytics(): Promise<PostHog | null> {
  if (!PROJECT_KEY) return Promise.resolve(null);
  if (client) return Promise.resolve(client);
  if (loading) return loading;

  loading = import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(PROJECT_KEY, {
        api_host: API_HOST,
        // Pageviews are captured manually so client-side route changes and
        // the initial page load are recorded exactly once each.
        capture_pageview: false,
        capture_pageleave: true,
        // The site uses explicit click capture instead of PostHog autocapture
        // so event names and properties stay stable.
        autocapture: false,
        person_profiles: "identified_only",
        persistence: "localStorage+cookie",
        cross_subdomain_cookie: false,
        secure_cookie: true,
        // Not used on this marketing site. Leaving them off keeps the payload
        // small and avoids loading extra third-party dependencies.
        disable_session_recording: true,
        disable_surveys: true,
        disable_external_dependency_loading: true,
      });

      client = posthog;

      for (const item of pendingEvents.splice(0)) {
        posthog.capture(item.event, item.properties);
      }

      return posthog;
    })
    .catch((error: unknown) => {
      // Analytics must never take the site down.
      if (process.env.NODE_ENV !== "production") {
        console.warn("[analytics] PostHog failed to load.", error);
      }
      loading = null;
      return null;
    });

  return loading;
}

/** Capture a custom event. Queues if the SDK is still loading. */
export function captureEvent(
  event: string,
  properties?: Properties,
): void {
  if (!PROJECT_KEY) return;

  if (client) {
    client.capture(event, properties);
    return;
  }

  if (pendingEvents.length < 100) {
    pendingEvents.push({ event, properties });
  }
  void loadAnalytics();
}

/** Capture a manual `$pageview`. Queues if the SDK is still loading. */
export function capturePageview(url: string): void {
  captureEvent("$pageview", {
    $current_url: url,
    path: window.location.pathname,
    title: document.title,
    referrer: document.referrer || undefined,
  });
}
