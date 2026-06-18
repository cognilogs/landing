import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "CogniLogs — Automate Backend Investigations",
  description:
    "AI agents that execute skill files against your infrastructure to troubleshoot issues autonomously. From escalation to root cause — in minutes.",
  openGraph: {
    title: "CogniLogs — Automate Backend Investigations",
    description:
      "AI agents that execute skill files against your infrastructure to troubleshoot issues autonomously.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
