"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 30,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      indexRef.current++;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDone(true);
        onComplete?.();
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-blink text-[var(--accent)]">▊</span>}
    </span>
  );
}
