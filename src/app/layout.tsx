import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraph } from "@/lib/schema";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "cognilogs | Support automation that runs in your network",
  description:
    "Local-first support automation for any ticketing system. cognilogs investigates the ticket, resolves it, or hands over the evidence.",
  applicationName: "cognilogs",
  keywords: [
    "support automation",
    "ticketing system",
    "AI support agent",
    "local deployment",
    "local models",
    "customer support automation",
    "ticket triage",
    "RCA automation",
    "SLA monitoring",
  ],
  openGraph: {
    title: "cognilogs | Support automation that runs in your network",
    description:
      "Local-first support automation that closes the loop from first ticket event to resolution.",
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: `${SITE_URL}/`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}: support automation that runs in your network`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cognilogs | Support automation that runs in your network",
    description:
      "Local-first support automation that closes the loop from first ticket event to resolution.",
    images: [OG_IMAGE],
  },
};

const siteStructuredData = siteGraph();

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f8f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={siteStructuredData} />
        <noscript>
          <style>{`[data-scroll-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
