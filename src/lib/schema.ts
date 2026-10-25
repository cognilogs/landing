import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

const PRODUCT_DESCRIPTION =
  "Local-first support automation that polls any ticketing system, classifies intent, investigates issues across logs, code and databases, gates confidence, drafts RCAs for human review, and tracks child-ticket SLAs.";

/**
 * Sitewide entity graph: organization, website and product.
 * Rendered once from the root layout so every page carries the same entity.
 */
export function siteGraph(): JsonLdNode {
  const organization: JsonLdNode = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
      caption: `${SITE_NAME} logo`,
    },
    description:
      "cognilogs builds a local-first support agent that runs the support workflow from ticket intake to resolution inside the customer's own network.",
    email: "team@cognilogs.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "team@cognilogs.com",
      availableLanguage: "English",
    },
  };

  const website: JsonLdNode = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description:
      "Support automation that runs in your network, for any ticketing system and any local model.",
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const softwareApplication: JsonLdNode = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer support automation",
    operatingSystem: "Self-hosted, on customer servers or inside the customer's network",
    description: PRODUCT_DESCRIPTION,
    featureList: [
      "Ticketing ingestion from any ticketing system with configurable polling",
      "Intent classification: query, issue, or feature enablement",
      "Knowledge retrieval over documentation, internal notes, and previous replies",
      "Issue investigation across audit logs, codebase, databases, Kibana, Sentry, and Datadog",
      "Feature enablement through API or browser automation with an approval step",
      "RCA drafting with mandatory human review",
      "Confidence gate with a default threshold of 0.85",
      "Parent and child ticket escalation with SLA tracking",
      "Audit trail for model actions, tool calls, approvals, and replies",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, softwareApplication],
  };
}

/** Breadcrumb trail for an inner page: Home > Page. */
export function breadcrumb(path: string, label: string): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: absoluteUrl(path),
      },
    ],
  };
}
