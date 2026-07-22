import Image from "next/image";
import type { CaseStudyDiagram } from "@/data/projects";

type InfrastructureDiagramSectionProps = {
  diagram: CaseStudyDiagram;
};

export function InfrastructureDiagramSection({
  diagram,
}: InfrastructureDiagramSectionProps) {
  return (
    <section id="infrastructure-diagram" className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        Infrastructure Diagram
      </h2>
      <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={diagram.src}
            alt={diagram.alt}
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        {diagram.caption && (
          <figcaption className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-secondary">
            {diagram.caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
