import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "CogniLogs | Support automation that runs in your network",
  description:
    "CogniLogs runs inside your network and resolves Freshdesk tickets end to end. It reads the request, runs the diagnostics, checks its confidence, and hands off with full context when a person should decide.",
  applicationName: "CogniLogs",
  keywords: [
    "support automation",
    "Freshdesk",
    "AI support agent",
    "local deployment",
    "customer support automation",
    "ticket triage",
    "SLA monitoring",
  ],
  openGraph: {
    title: "CogniLogs | Support automation that runs in your network",
    description:
      "Local-first support automation that closes the loop from first reply to resolution.",
    type: "website",
    siteName: "CogniLogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "CogniLogs | Support automation that runs in your network",
    description:
      "Local-first support automation that closes the loop from first reply to resolution.",
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
