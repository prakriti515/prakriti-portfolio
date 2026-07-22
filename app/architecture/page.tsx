import type { Metadata } from "next";
import { ArchitecturePageContent } from "@/components/architecture/ArchitecturePageContent";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { architecturePageMeta } from "@/data/architecture";

export const metadata: Metadata = {
  title: architecturePageMeta.title,
  description: architecturePageMeta.description,
};

export default function ArchitecturePage() {
  return (
    <PageShell>
      <PageHeader
        label="Engineering"
        title={architecturePageMeta.title}
        description={architecturePageMeta.description}
      />
      <ArchitecturePageContent />
    </PageShell>
  );
}
