"use client";

import type { CSSProperties } from "react";
import {
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Ticket,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductConsole from "@/components/sections/ProductConsole";

const orbs = [
  {
    icon: Ticket,
    className: "left-[5%] top-[22%] sm:left-[9%]",
    color: "bg-accent-soft text-accent-strong",
    rotate: "-8deg",
    delay: "0s",
  },
  {
    icon: MessageSquareText,
    className: "right-[4%] top-[18%] sm:right-[10%]",
    color: "bg-blue-soft text-blue-strong",
    rotate: "7deg",
    delay: "-2.2s",
  },
  {
    icon: Timer,
    className: "bottom-[13%] left-[13%] hidden sm:grid",
    color: "bg-green-soft text-green-strong",
    rotate: "6deg",
    delay: "-4s",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[10%] right-[14%] hidden sm:grid",
    color: "bg-pink-soft text-pink-strong",
    rotate: "-5deg",
    delay: "-1.2s",
  },
  {
    icon: Sparkles,
    className: "right-[30%] top-[10%] hidden md:grid",
    color: "bg-violet-soft text-violet",
    rotate: "11deg",
    delay: "-3.1s",
  },
];

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pt-10">
      <div className="shell">
        <div className="hero-stage" aria-hidden="true">
          {[-2, -1, 1, 2].map((row) => (
            <span
              key={row}
              className="hero-echo"
              style={{ "--row": row } as CSSProperties}
            />
          ))}
          <motion.span
            aria-hidden="true"
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 top-1/2 z-10 block -translate-y-1/2 text-center"
          >
            <span className="hero-wordmark inline-block text-accent-wordmark">
              cognilogs
            </span>
          </motion.span>

          {orbs.map(({ icon: Icon, className, color, rotate }, index) => (
            <motion.span
              key={className}
              className={`absolute z-20 grid h-10 w-10 place-items-center rounded-full border border-black/[0.05] sm:h-12 sm:w-12 ${color} ${className}`}
              style={{ rotate }}
              animate={
                prefersReduced
                  ? undefined
                  : { y: [0, -9, 0], opacity: [0.92, 1, 0.92] }
              }
              transition={{
                duration: 7 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            >
              <Icon
                aria-hidden="true"
                className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                strokeWidth={1.8}
              />
            </motion.span>
          ))}
        </div>

        <div className="mx-auto -mt-2 max-w-[900px] text-center sm:-mt-4">
          <h1 className="display-1 mx-auto max-w-[880px]">
            Your support,
            <br />
            <span className="squiggle">on autopilot.</span>
          </h1>
          <p className="lede measure mx-auto mt-6 text-balance sm:mt-7">
            cognilogs reads every ticket from your ticketing system, does the
            work behind it, and either resolves it or gives your team a case
            with the evidence already assembled. It runs on your servers or
            inside your network, with the local model you choose.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <ButtonLink href="/waitlist" size="lg" withArrow>
              Join the waitlist
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary" size="lg">
              See the loop
            </ButtonLink>
          </div>
          <p className="mt-5 text-[13px] text-muted">
            Any ticketing system. Any local model. A person can still take over.
          </p>
        </div>
      </div>

      <div className="shell mt-12 sm:mt-16">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-[13px] text-muted">
            A preview of the support chat
          </p>
          <p className="hidden items-center gap-2 text-[12px] text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Evidence, confidence, and next action in one place
          </p>
        </div>
        <ProductConsole />
      </div>
    </section>
  );
}
