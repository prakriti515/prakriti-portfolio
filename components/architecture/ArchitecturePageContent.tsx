import { ArchitectureSection } from "@/components/architecture/ArchitectureSection";
import { InfrastructureDiagramsGallery } from "@/components/architecture/InfrastructureDiagramsGallery";
import { TechnologyDecisionsSection } from "@/components/architecture/TechnologyDecisionsSection";
import { ContentSection } from "@/components/ui/ContentSection";
import {
  architecturePageMeta,
  architectureSections,
  infrastructureDiagramGallery,
  technologyDecisions,
} from "@/data/architecture";

export function ArchitecturePageContent() {
  return (
    <>
      <ContentSection>
        <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
          {architecturePageMeta.intro}
        </p>
      </ContentSection>

      {architectureSections.map((section, index) => (
        <ArchitectureSection
          key={section.id}
          section={section}
          variant={index % 2 === 1 ? "muted" : "default"}
          reverse={index % 2 === 1}
        />
      ))}

      <TechnologyDecisionsSection decisions={technologyDecisions} />

      <InfrastructureDiagramsGallery diagrams={infrastructureDiagramGallery} />
    </>
  );
}
