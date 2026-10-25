import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "cognilogs | Support automation that runs in your network",
  description:
    "cognilogs is a local-first support agent for any ticketing system. It resolves queries, investigates issues, enables features with approval, and keeps a human in control.",
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
    siteName: "cognilogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "cognilogs | Support automation that runs in your network",
    description:
      "Local-first support automation that closes the loop from first ticket event to resolution.",
  },
};

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
        <noscript>
          <style>{`[data-scroll-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
