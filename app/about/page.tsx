import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutData.page.description,
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        label="About"
        title={`About ${siteConfig.name.split(" ")[0]}`}
        description={aboutData.page.description}
      />
      <AboutPageContent />
    </PageShell>
  );
}
