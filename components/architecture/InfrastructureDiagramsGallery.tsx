import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { ContentSection } from "@/components/ui/ContentSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ArchitectureDiagram as ArchitectureDiagramType } from "@/data/architecture";

type InfrastructureDiagramsGalleryProps = {
  diagrams: ArchitectureDiagramType[];
};

export function InfrastructureDiagramsGallery({
  diagrams,
}: InfrastructureDiagramsGalleryProps) {
  return (
    <ContentSection id="infrastructure-diagrams" variant="muted">
      <SectionHeading
        label="Diagrams"
        title="Infrastructure Diagrams"
        description="Visual references for topology, platforms, and operational layers. Replace placeholders with your own diagrams."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {diagrams.map((diagram, index) => (
          <ArchitectureDiagram
            key={`${diagram.src}-${index}`}
            diagram={diagram}
            aspectClassName="aspect-[4/3]"
          />
        ))}
      </div>
    </ContentSection>
  );
}
