"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns false during SSR and hydration, then true after the client mounts.
 * Use it to defer client-only preferences without a hydration mismatch.
 */
export default function useHydrated() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
