import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.labName}`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.tagline
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
