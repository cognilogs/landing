"use client";

import { motion, useReducedMotion } from "framer-motion";

const sceneClass = "h-auto w-full font-sans";

const ink = "#0A0A0B";
const muted = "#5F6570";
const faint = "#9AA19B";
const line = "#DDE3DF";
const paper = "#F4F6F4";

function SceneShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[24px] bg-surface">
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 560 440"
        className={sceneClass}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.g>
      </svg>
    </div>
  );
}

function DotField({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern
          id={id}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#C9D2CC" />
        </pattern>
      </defs>
      <rect width="560" height="440" rx="24" fill={paper} />
      <rect width="560" height="440" rx="24" fill={`url(#${id})`} opacity="0.6" />
    </>
  );
}

function Tag({
  x,
  y,
  w,
  label,
  fill,
  color,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  fill: string;
  color: string;
}) {
  return (
    <>
      <rect x={x} y={y} width={w} height="22" rx="11" fill={fill} />
      <text
        x={x + w / 2}
        y={y + 15}
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="500"
        fill={color}
      >
        {label}
      </text>
    </>
  );
}

export function IntakeScene() {
  return (
    <SceneShell label="A ticket from any ticketing system is classified into a query, an issue, or a feature request, with a loop back to the customer when information is missing.">
      <DotField id="intake-dots" />

      <g>
        <rect
          x="34"
          y="84"
          width="196"
          height="156"
          rx="16"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="54" cy="106" r="4" fill="#F97316" />
        <text x="66" y="110" fontSize="11.5" fontWeight="600" fill={ink}>
          Ticketing system
        </text>
        <text x="210" y="110" textAnchor="end" fontSize="10.5" fill={faint}>
          #4821
        </text>
        <text x="54" y="138" fontSize="14.5" fontWeight="600" fill={ink}>
          SSO loop after
        </text>
        <text x="54" y="156" fontSize="14.5" fontWeight="600" fill={ink}>
          certificate rotation
        </text>
        <Tag
          x={54}
          y={172}
          w={78}
          label="Enterprise"
          fill="#FFF1E7"
          color="#C2410C"
        />
        <Tag
          x={138}
          y={172}
          w={40}
          label="P1"
          fill="#F1F3F2"
          color={muted}
        />
        <circle cx="62" cy="215" r="10" fill="#DDE7FF" />
        <text
          x="62"
          y="219"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill="#377FE6"
        >
          MC
        </text>
        <text x="78" y="212" fontSize="10.5" fill={muted}>
          Maya Chen
        </text>
        <text x="78" y="224" fontSize="9.5" fill={faint}>
          Northwind · finance
        </text>
      </g>

      <text x="318" y="151" textAnchor="middle" fontSize="11" fill={muted}>
        Understands the request
      </text>
      <path
        className="scene-line"
        d="M232 170C252 170 252 197 270 197"
        stroke="#F97316"
        strokeWidth="1.6"
      />

      <g>
        <rect
          x="270"
          y="168"
          width="96"
          height="80"
          rx="26"
          fill={ink}
        />
        <circle
          cx="354"
          cy="181"
          r="3"
          fill="#F97316"
          className="scene-pulse"
        />
        <path
          d="M297 197a9 9 0 1 0 0 18M297 197h2.2M297 215h2.2"
          stroke="#F97316"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="302" cy="206" r="2.1" fill="#F97316" />
        <text x="309" y="210" fontSize="8.5" fontWeight="500" fill="#FFFFFF">
          cognilogs
        </text>
      </g>

      <path
        className="scene-line"
        d="M366 190C396 190 388 91 416 91"
        stroke="#377FE6"
        strokeWidth="1.5"
      />
      <path
        className="scene-line scene-line-slow"
        d="M366 208C396 208 388 209 416 209"
        stroke="#0A9767"
        strokeWidth="1.5"
      />
      <path
        className="scene-line"
        d="M366 226C396 226 388 327 416 327"
        stroke="#D84F8B"
        strokeWidth="1.5"
      />

      <g>
        <rect
          x="416"
          y="58"
          width="126"
          height="66"
          rx="14"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="436" cy="82" r="12" fill="#EAF1FF" />
        <path
          d="M431 78h10M431 82h10M431 86h6"
          stroke="#377FE6"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <text x="452" y="79" fontSize="13" fontWeight="600" fill={ink}>
          Query
        </text>
        <text x="452" y="94" fontSize="9.5" fill={muted}>
          Answer from docs
        </text>
      </g>

      <g>
        <rect
          x="416"
          y="176"
          width="126"
          height="66"
          rx="14"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="436" cy="200" r="12" fill="#E7F7F0" />
        <path
          d="M430 196l5 4-5 4M437 204h5"
          stroke="#0A9767"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="452" y="197" fontSize="13" fontWeight="600" fill={ink}>
          Issue
        </text>
        <text x="452" y="212" fontSize="9.5" fill={muted}>
          Investigate and fix
        </text>
      </g>

      <g>
        <rect
          x="416"
          y="294"
          width="126"
          height="66"
          rx="14"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="436" cy="318" r="12" fill="#FDEEF5" />
        <path
          d="M436 311v2M432 315l2 1.5M440 315l-2 1.5M432 322l2-1.5M440 322l-2-1.5"
          stroke="#D84F8B"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <text x="452" y="315" fontSize="13" fontWeight="600" fill={ink}>
          Feature
        </text>
        <text x="452" y="330" fontSize="9.5" fill={muted}>
          Enable + approval
        </text>
      </g>

      <g>
        <path
          className="scene-line scene-line-slow"
          d="M310 248C310 275 292 282 268 286"
          stroke="#F97316"
          strokeWidth="1.5"
        />
        <rect
          x="34"
          y="292"
          width="224"
          height="100"
          rx="16"
          fill="#FFF8F2"
          stroke="#FED7B8"
        />
        <circle cx="56" cy="314" r="12" fill="#FFE8D7" />
        <path
          d="M52 314h8M56 310v8"
          stroke="#C2410C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text x="76" y="311" fontSize="12.5" fontWeight="600" fill="#9A3412">
          Need one more detail
        </text>
        <text x="76" y="339" fontSize="11" fill={muted}>
          Asked which cohort
        </text>
        <text x="76" y="357" fontSize="11" fill={muted}>
          was in the rollout.
        </text>
        <Tag
          x={76}
          y={365}
          w={112}
          label="Awaiting customer"
          fill="#FFFFFF"
          color="#C2410C"
        />
        <circle cx="234" cy="376" r="3" fill="#F97316" />
      </g>

      <text x="34" y="52" fontSize="11.5" fontWeight="500" fill={muted}>
        Ticket arrives
      </text>
      <circle cx="27" cy="48" r="3" fill="#F97316" />
      <text x="486" y="420" textAnchor="end" fontSize="9.5" fill={faint}>
        Ticketing event / intent / path
      </text>
    </SceneShell>
  );
}

export function ResolutionScene() {
  const prefersReduced = useReducedMotion();

  return (
    <SceneShell label="The agent checks audit logs, the codebase, databases, and observability tools before a confidence evaluator chooses an auto-reply or human review.">
      <DotField id="resolution-dots" />

      <g>
        <rect
          x="30"
          y="48"
          width="150"
          height="88"
          rx="15"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="52" cy="72" r="13" fill="#EAF1FF" />
        <path
          d="M47 67h10v11H47zM49 70h6M49 73h6"
          stroke="#377FE6"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <text x="72" y="69" fontSize="13" fontWeight="600" fill={ink}>
          Audit log
        </text>
        <text x="72" y="84" fontSize="9.5" fill={muted}>
          certificate rotated
        </text>
        <rect x="46" y="100" width="84" height="6" rx="3" fill="#E7EDF9" />
        <rect x="46" y="112" width="112" height="6" rx="3" fill="#EEF2F0" />
      </g>

      <g>
        <rect
          x="204"
          y="34"
          width="152"
          height="112"
          rx="15"
          fill={ink}
        />
        <circle cx="220" cy="50" r="3" fill="#F97316" />
        <text x="229" y="54" fontSize="10" fontWeight="500" fill="#FFFFFF">
          Investigation
        </text>
        <text x="343" y="54" textAnchor="end" fontSize="8.5" fill="#8B949E">
          run #184
        </text>
        <text x="219" y="79" fontFamily="JetBrains Mono" fontSize="8" fill="#4FE3A3">
          $ audit.events --svc-sso
        </text>
        <text x="219" y="95" fontFamily="JetBrains Mono" fontSize="8" fill="#D7DEE7">
          codebase.search metadata
        </text>
        <text x="219" y="111" fontFamily="JetBrains Mono" fontSize="8" fill="#D7DEE7">
          db.query cohort_members
        </text>
        <text x="219" y="127" fontFamily="JetBrains Mono" fontSize="8" fill="#FF9B5C">
          sentry.issue login.loop
        </text>
      </g>

      <g>
        <rect
          x="380"
          y="48"
          width="150"
          height="88"
          rx="15"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="402" cy="72" r="13" fill="#F2EDFC" />
        <path
          d="M397 67h10v10h-10zM400 70h4"
          stroke="#8057C8"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <text x="422" y="69" fontSize="13" fontWeight="600" fill={ink}>
          Codebase
        </text>
        <text x="516" y="69" textAnchor="end" fontSize="9.5" fill={faint}>
          v8.4
        </text>
        <text x="422" y="84" fontSize="9.5" fill={muted}>
          metadata.publish
        </text>
        <rect x="422" y="100" width="80" height="20" rx="10" fill="#F2EDFC" />
        <text x="462" y="114" textAnchor="middle" fontSize="9" fill="#6D43B5">
          read-only
        </text>
      </g>

      <path
        className="scene-line"
        d="M105 136C105 164 180 150 206 172"
        stroke="#377FE6"
        strokeWidth="1.5"
      />
      <path
        className="scene-line scene-line-slow"
        d="M280 146v22"
        stroke="#0A9767"
        strokeWidth="1.5"
      />
      <path
        className="scene-line"
        d="M455 136C455 164 380 150 354 172"
        stroke="#8057C8"
        strokeWidth="1.5"
      />

      <g>
        <rect
          x="144"
          y="178"
          width="272"
          height="128"
          rx="18"
          fill="#FFFFFF"
          stroke={line}
        />
        <text x="164" y="201" fontSize="12.5" fontWeight="600" fill={ink}>
          Confidence evaluator
        </text>
        <text x="396" y="201" textAnchor="end" fontSize="9.5" fill={muted}>
          evidence complete
        </text>
        <text x="164" y="238" fontSize="32" fontWeight="600" fill={ink} letterSpacing="-1">
          0.93
        </text>
        <Tag
          x={240}
          y={218}
          w={62}
          label="High"
          fill="#E7F7F0"
          color="#06714E"
        />
        <rect x="164" y="255" width="224" height="8" rx="4" fill="#EDF1EE" />
        <motion.rect
          x="164"
          y="255"
          width="209"
          height="8"
          rx="4"
          fill="#0A9767"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
        />
        <text x="164" y="284" fontSize="9.5" fill={muted}>
          threshold 0.85
        </text>
        <text x="388" y="284" textAnchor="end" fontSize="9.5" fill="#06714E">
          above threshold
        </text>
      </g>

      <path
        className="scene-line"
        d="M216 306C200 326 178 332 160 346"
        stroke="#0A9767"
        strokeWidth="1.5"
      />
      <path
        className="scene-line"
        d="M344 306C360 326 382 332 400 346"
        stroke="#F97316"
        strokeWidth="1.5"
      />

      <g>
        <rect
          x="48"
          y="350"
          width="214"
          height="62"
          rx="15"
          fill="#EAF8F1"
          stroke="#BFE8D4"
        />
        <circle cx="70" cy="372" r="11" fill="#0A9767" />
        <path
          d="M65 372l3 3 6-7"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="90" y="369" fontSize="12.5" fontWeight="600" fill="#065F45">
          Reply + resolve
        </text>
        <text x="90" y="386" fontSize="9.5" fill="#3D7A64">
          evidence above 0.85
        </text>
      </g>

      <g>
        <rect
          x="298"
          y="350"
          width="214"
          height="62"
          rx="15"
          fill="#FFF1E7"
          stroke="#FFD4B9"
        />
        <circle cx="320" cy="372" r="11" fill="#F97316" />
        <path
          d="M315 372h10M320 367v10"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text x="340" y="369" fontSize="12.5" fontWeight="600" fill="#9A3412">
          Human review
        </text>
        <text x="340" y="386" fontSize="9.5" fill="#A95832">
          RCA + private note
        </text>
      </g>

      <text x="280" y="425" textAnchor="middle" fontSize="9.5" fill={faint}>
        Every check leaves a trace
      </text>
    </SceneShell>
  );
}

export function SlaScene() {
  return (
    <SceneShell label="A linked child ticket is monitored on a fifteen-minute SLA cycle, syncing updates to the parent and escalating reminders until it closes.">
      <DotField id="sla-dots" />

      <g>
        <rect
          x="34"
          y="46"
          width="174"
          height="104"
          rx="15"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="54" cy="66" r="3" fill="#F97316" />
        <text x="63" y="70" fontSize="11" fontWeight="500" fill={muted}>
          Parent
        </text>
        <text x="190" y="70" textAnchor="end" fontSize="10" fill={faint}>
          #4821
        </text>
        <text x="54" y="94" fontSize="13" fontWeight="600" fill={ink}>
          SSO loop blocking
        </text>
        <text x="54" y="110" fontSize="13" fontWeight="600" fill={ink}>
          finance
        </text>
        <Tag
          x={54}
          y={120}
          w={58}
          label="Linked"
          fill="#FFF1E7"
          color="#C2410C"
        />
      </g>

      <g>
        <rect
          x="352"
          y="46"
          width="174"
          height="104"
          rx="15"
          fill="#FFF8F2"
          stroke="#FED7B8"
        />
        <circle cx="372" cy="66" r="3" fill="#F97316" />
        <text x="381" y="70" fontSize="11" fontWeight="500" fill={muted}>
          Child
        </text>
        <text x="508" y="70" textAnchor="end" fontSize="10" fill={faint}>
          #4910
        </text>
        <text x="372" y="94" fontSize="13" fontWeight="600" fill={ink}>
          Verify IdP metadata
        </text>
        <text x="372" y="110" fontSize="10" fill={muted}>
          identity team · P1
        </text>
        <Tag
          x={372}
          y={120}
          w={78}
          label="SLA 2h 14m"
          fill="#FFFFFF"
          color="#C2410C"
        />
      </g>

      <path
        d="M208 90h144"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        className="scene-line"
      />
      <circle cx="208" cy="90" r="3" fill="#F97316" className="scene-pulse" />
      <circle cx="352" cy="90" r="3" fill="#F97316" className="scene-pulse" />
      <rect x="250" y="76" width="60" height="20" rx="10" fill={paper} />
      <text x="280" y="90" textAnchor="middle" fontSize="9" fill={muted}>
        linked
      </text>

      <g>
        <rect
          x="92"
          y="166"
          width="376"
          height="126"
          rx="18"
          fill="#FFFFFF"
          stroke={line}
        />
        <circle cx="146" cy="222" r="34" fill="#F4F6F4" stroke={line} />
        <circle cx="146" cy="222" r="3" fill={ink} />
        <path
          d="M146 222v-19M146 222l12 8"
          stroke={ink}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((tick) => {
          const angle = (tick / 8) * Math.PI * 2;
          const x1 = 146 + Math.sin(angle) * 26;
          const y1 = 222 - Math.cos(angle) * 26;
          const x2 = 146 + Math.sin(angle) * 29;
          const y2 = 222 - Math.cos(angle) * 29;
          return (
            <line
              key={tick}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={tick === 2 ? "#F97316" : "#BFC7C1"}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          );
        })}
        <text x="208" y="199" fontSize="13" fontWeight="600" fill={ink}>
          SLA watch
        </text>
        <text x="208" y="216" fontSize="10" fill={muted}>
          Checks every 15 minutes
        </text>
        <rect x="208" y="228" width="224" height="6" rx="3" fill="#EDF1EE" />
        <rect x="208" y="228" width="142" height="6" rx="3" fill="#F97316" />
        {[228, 278, 328, 378, 424].map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy="231"
            r="3.5"
            fill={index === 2 ? "#F97316" : "#FFFFFF"}
            stroke={index === 2 ? "#F97316" : "#C9D2CC"}
            strokeWidth="1.2"
            className={index < 3 ? "scene-pulse" : undefined}
            style={{ "--pulse-delay": `${index * 0.4}s` } as React.CSSProperties}
          />
        ))}
        <text x="208" y="252" fontSize="9.5" fill={muted}>
          opened
        </text>
        <text x="432" y="252" textAnchor="end" fontSize="9.5" fill={muted}>
          breach
        </text>
        <Tag
          x={420}
          y={180}
          w={28}
          label="15m"
          fill="#FFF1E7"
          color="#C2410C"
        />
      </g>

      <g>
        <rect
          x="34"
          y="334"
          width="158"
          height="70"
          rx="15"
          fill="#EAF8F1"
          stroke="#BFE8D4"
        />
        <circle cx="56" cy="355" r="10" fill="#0A9767" />
        <path
          d="M51 355l3 3 5-6"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text x="74" y="352" fontSize="11.5" fontWeight="600" fill="#065F45">
          Update synced
        </text>
        <text x="74" y="378" fontSize="9.5" fill="#3D7A64">
          Parent note refreshed
        </text>
        <text x="74" y="392" fontSize="9.5" fill="#3D7A64">
          after internal activity
        </text>
      </g>

      <g>
        <rect
          x="204"
          y="334"
          width="158"
          height="70"
          rx="15"
          fill="#FFF8E8"
          stroke="#F6E3B2"
        />
        <circle cx="226" cy="355" r="10" fill="#D68A16" />
        <path
          d="M222 355h8M226 351v4"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text x="244" y="352" fontSize="11.5" fontWeight="600" fill="#8A5A09">
          3 reminders sent
        </text>
        <text x="244" y="378" fontSize="9.5" fill="#8A6C33">
          Slack + email
        </text>
        <text x="244" y="392" fontSize="9.5" fill="#8A6C33">
          before breach
        </text>
      </g>

      <g>
        <rect
          x="374"
          y="334"
          width="158"
          height="70"
          rx="15"
          fill="#FDECEC"
          stroke="#F4C7C7"
        />
        <circle cx="396" cy="355" r="10" fill="#D94B52" />
        <path
          d="M392 351h8v6h-8zM392 357l-2 3M400 357l2 3"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <text x="414" y="352" fontSize="11.5" fontWeight="600" fill="#9D252B">
          Manager alerted
        </text>
        <text x="414" y="378" fontSize="9.5" fill="#9D4B4F">
          No change after
        </text>
        <text x="414" y="392" fontSize="9.5" fill="#9D4B4F">
          3 notifications
        </text>
      </g>

      <path
        className="scene-line"
        d="M280 292C280 312 190 314 113 334"
        stroke="#F97316"
        strokeWidth="1.5"
      />
      <path
        className="scene-line scene-line-slow"
        d="M280 292C280 313 283 315 283 334"
        stroke="#E7A531"
        strokeWidth="1.5"
      />
      <path
        className="scene-line"
        d="M280 292C280 312 370 314 453 334"
        stroke="#D94B52"
        strokeWidth="1.5"
      />
      <circle cx="113" cy="334" r="3" fill="#F97316" />
      <circle cx="283" cy="334" r="3" fill="#E7A531" />
      <circle cx="453" cy="334" r="3" fill="#D94B52" />

      <text x="280" y="425" textAnchor="middle" fontSize="9.5" fill={faint}>
        The loop stays open until the work is done
      </text>
    </SceneShell>
  );
}
