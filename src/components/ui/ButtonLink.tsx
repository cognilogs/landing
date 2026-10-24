import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-ink text-white hover:bg-ink-soft active:bg-black",
  secondary:
    "border border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-muted",
  accent:
    "bg-accent text-accent-ink hover:bg-[#fb8a3d] active:bg-[#ea6c0d]",
  ghost: "bg-transparent text-ink hover:bg-surface-muted",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-[52px] px-6 text-[15px]",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group/button inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5"
        />
      )}
    </Link>
  );
}
