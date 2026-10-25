import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHubspot,
  faIntercom,
  faOpenai,
  faSalesforce,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import {
  siAnthropic,
  siConfluence,
  siDatadog,
  siGithub,
  siGitlab,
  siJira,
  siKibana,
  siLinear,
  siNotion,
  siOllama,
  siSentry,
  siZendesk,
} from "simple-icons";

type BrandGroup = "ticketing" | "evidence" | "action" | "model";

export type Brand = {
  name: string;
  group: BrandGroup;
  viewBox: string;
  paths: { d: string; fill?: string }[];
};

function fromSimple(
  icon: { title: string; hex: string; path: string },
  group: BrandGroup,
): Brand {
  return {
    name: icon.title,
    group,
    viewBox: "0 0 24 24",
    paths: [{ d: icon.path, fill: `#${icon.hex}` }],
  };
}

function fromFontAwesome(
  icon: IconDefinition,
  name: string,
  fill: string,
  group: BrandGroup,
): Brand {
  const path = Array.isArray(icon.icon[4])
    ? icon.icon[4].join("")
    : icon.icon[4];

  return {
    name,
    group,
    viewBox: `0 0 ${icon.icon[0]} ${icon.icon[1]}`,
    paths: [{ d: path, fill }],
  };
}

const freshdesk: Brand = {
  name: "Freshdesk",
  group: "ticketing",
  viewBox: "0 0 33 32",
  paths: [
    {
      d: "M16.333 32a16 16 0 0 1-16-16 16 16 0 0 1 16-16h12a4 4 0 0 1 4 4v12a16 16 0 0 1-16 16Z",
      fill: "#20A849",
    },
    {
      d: "M16.333 8a6.592 6.592 0 0 0-6.645 6.63v4.41a2.224 2.224 0 0 0 2.219 2.219h1.845v-5.163h-2.565V14.63a5.159 5.159 0 0 1 7.13-4.765 5.158 5.158 0 0 1 3.184 4.764v1.467h-2.565v5.163h1.733v.112a1.994 1.994 0 0 1-1.989 1.99h-1.99a.32.32 0 0 0-.32.314.32.32 0 0 0 .32.32h1.931a2.667 2.667 0 0 0 2.667-2.667v-.144a2.23 2.23 0 0 0 1.643-2.133V14.63A6.573 6.573 0 0 0 16.333 8Z",
      fill: "#FFFFFF",
    },
  ],
};

export const ticketingBrands: Brand[] = [
  freshdesk,
  fromSimple(siZendesk, "ticketing"),
  fromFontAwesome(faIntercom, "Intercom", "#1F8DED", "ticketing"),
  fromSimple(siJira, "ticketing"),
  fromFontAwesome(faHubspot, "HubSpot", "#FF7A59", "ticketing"),
  fromFontAwesome(faSalesforce, "Salesforce", "#00A1E0", "ticketing"),
];

export const evidenceBrands: Brand[] = [
  fromSimple(siDatadog, "evidence"),
  fromSimple(siSentry, "evidence"),
  fromSimple(siKibana, "evidence"),
  fromSimple(siGithub, "action"),
  fromSimple(siGitlab, "action"),
  fromFontAwesome(faSlack, "Slack", "#4A154B", "action"),
  fromSimple(siNotion, "action"),
  fromSimple(siConfluence, "action"),
  fromSimple(siLinear, "action"),
];

export const modelBrands: Brand[] = [
  fromFontAwesome(faOpenai, "OpenAI", "#0A0A0B", "model"),
  fromSimple(siAnthropic, "model"),
  fromSimple(siOllama, "model"),
];

export function BrandMark({
  brand,
  className = "h-5 w-5",
}: {
  brand: Brand;
  className?: string;
}) {
  return (
    <svg
      role="img"
      aria-label={brand.name}
      viewBox={brand.viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{brand.name}</title>
      {brand.paths.map((path, index) => (
        <path
          key={`${brand.name}-${index}`}
          d={path.d}
          fill={path.fill ?? "currentColor"}
        />
      ))}
    </svg>
  );
}

export function BrandTile({
  brand,
  className = "",
}: {
  brand: Brand;
  className?: string;
}) {
  return (
    <span
      title={brand.name}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-[13px] border border-line/80 bg-surface ${className}`}
    >
      <BrandMark brand={brand} className="h-5 w-5" />
    </span>
  );
}

export function BrandRail({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-copy" aria-hidden={hidden || undefined}>
      {[...ticketingBrands, ...evidenceBrands].map((brand) => (
        <BrandTile key={`${brand.group}-${brand.name}`} brand={brand} />
      ))}
    </div>
  );
}
