import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prakritishrestha917.com.np"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer",
    "Senior DevOps Engineer",
    "Site Reliability Engineer",
    "SRE",
    "Infrastructure Engineer",
    "Platform Engineer",
    "AWS",
    "Proxmox",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Loki",
    "CI/CD",
  ],
  authors: [{ name: siteConfig.name, url: "https://www.prakritishrestha917.com.np" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.prakritishrestha917.com.np",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
