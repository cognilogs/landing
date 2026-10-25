import Link from "next/link";

interface LogoProps {
  className?: string;
  wordmarkClassName?: string;
  withWordmark?: boolean;
  tone?: "light" | "dark";
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="26" height="26" rx="8" fill="#0A0A0B" />
      <path
        d="M19.4 9.9a6.8 6.8 0 1 0 0 8.2"
        stroke="#F97316"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M19.2 9.9h2.3M19.2 18.1h2.3"
        stroke="#F97316"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <circle cx="21.5" cy="14" r="1.55" fill="#F97316" />
    </svg>
  );
}

export default function Logo({
  className = "",
  wordmarkClassName = "",
  withWordmark = true,
  tone = "light",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="cognilogs home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      {withWordmark && (
        <span
          className={`text-[19px] font-semibold tracking-[-0.045em] ${
            tone === "dark" ? "text-white" : "text-ink"
          } ${wordmarkClassName}`}
        >
          cognilogs
        </span>
      )}
    </Link>
  );
}
