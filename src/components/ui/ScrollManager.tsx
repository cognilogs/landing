"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const RESTORE_WINDOW_MS = 350;
const TOP_SCROLL_DURATION_MS = 500;

function locationKey() {
  return `${window.location.pathname}${window.location.search}`;
}

// Jump instantly, bypassing the global `scroll-behavior: smooth`. Smooth
// scrolling can be interrupted mid-animation, which is what leaves the page a
// few percent short of the top (or of the restored position).
function jumpTo(top: number) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  // Chrome needs a forced reflow to pick up the new scroll behavior.
  root.getClientRects();
  window.scrollTo(0, Math.max(0, top));
  root.style.scrollBehavior = previous;
}

// Animate the page to the top, frame by frame, so the scroll always lands on
// exactly 0. A native smooth scroll can be interrupted by the route commit and
// stop partway, which is what leaves the page just short of the top.
function animateToTop() {
  const start = window.scrollY;
  const controller = new AbortController();
  const { signal } = controller;

  let startedAt = 0;
  let frame = 0;

  const finish = () => {
    jumpTo(0);
    // Re-assert on the next frame in case the router adjusts scroll after the
    // animation finishes.
    frame = requestAnimationFrame(() => {
      if (signal.aborted) return;
      jumpTo(0);
      controller.abort();
    });
  };

  const step = (now: number) => {
    if (signal.aborted) return;

    if (startedAt === 0) {
      startedAt = now;
      jumpTo(start);
      frame = requestAnimationFrame(step);
      return;
    }

    const progress = Math.min(1, (now - startedAt) / TOP_SCROLL_DURATION_MS);
    const eased = 1 - Math.pow(1 - progress, 3);
    jumpTo(start * (1 - eased));

    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      finish();
    }
  };

  frame = requestAnimationFrame(step);

  return () => {
    controller.abort();
    cancelAnimationFrame(frame);
  };
}

function restorePosition(top: number) {
  const controller = new AbortController();
  const { signal } = controller;
  const startedAt = performance.now();

  const stop = () => controller.abort();
  window.addEventListener("wheel", stop, { passive: true, signal });
  window.addEventListener("touchstart", stop, { passive: true, signal });
  window.addEventListener("keydown", stop, { signal });

  const step = () => {
    if (signal.aborted) return;
    jumpTo(top);

    if (performance.now() - startedAt < RESTORE_WINDOW_MS) {
      requestAnimationFrame(step);
    } else {
      controller.abort();
    }
  };

  requestAnimationFrame(step);
  return () => controller.abort();
}

export default function ScrollManager() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);
  const wentBack = useRef(false);
  const activeKey = useRef<string | null>(null);
  const positions = useRef(new Map<string, number>());
  const saveFrame = useRef(0);
  const cancelRestore = useRef<(() => void) | null>(null);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    activeKey.current = locationKey();

    const remember = () => {
      saveFrame.current = 0;
      const key = activeKey.current;
      // Ignore scroll events fired while a navigation is in flight: at that
      // point the URL already points at the next page, but the viewport still
      // reflects the page we are leaving.
      if (key && key === locationKey()) {
        positions.current.set(key, window.scrollY);
      }
    };
    const onScroll = () => {
      if (saveFrame.current) return;
      saveFrame.current = window.requestAnimationFrame(remember);
    };
    const onPointerDown = () => {
      // Capture the exact spot before a link navigates away.
      if (saveFrame.current) {
        window.cancelAnimationFrame(saveFrame.current);
        saveFrame.current = 0;
      }
      remember();
    };
    const onPopState = () => {
      wentBack.current = true;
    };
    // Links that point at the page you are already on do not change the
    // pathname, so the navigation effect never runs for them. Clicking the
    // active nav item or the logo should still bring you back to the top.
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.hash) return;
      if (
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search
      ) {
        return;
      }

      cancelRestore.current?.();
      cancelRestore.current = animateToTop();
    };

    remember();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true, capture: true });
    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onDocumentClick, { capture: true });

    return () => {
      if (saveFrame.current) {
        window.cancelAnimationFrame(saveFrame.current);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onPointerDown, { capture: true });
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onDocumentClick, { capture: true });
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;

    const isBack = wentBack.current;
    wentBack.current = false;

    if (saveFrame.current) {
      window.cancelAnimationFrame(saveFrame.current);
      saveFrame.current = 0;
    }

    activeKey.current = locationKey();

    cancelRestore.current?.();
    cancelRestore.current = null;

    if (isBack) {
      const saved = positions.current.get(locationKey());
      if (saved !== undefined) {
        // Next.js can adjust scroll while the route commits, so hold the
        // restored position for a few frames until the page has settled.
        cancelRestore.current = restorePosition(saved);
        return;
      }
    }

    // Hash destinations should land on their anchor, not the top.
    if (window.location.hash) return;

    if (isBack) {
      cancelRestore.current = restorePosition(0);
      return;
    }

    // Animate the new page to the very top after the route commits.
    cancelRestore.current = animateToTop();
  }, [pathname]);

  useEffect(() => () => cancelRestore.current?.(), []);

  return null;
}
