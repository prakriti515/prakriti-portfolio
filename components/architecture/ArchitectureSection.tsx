import { ArchitectureDiagram } from "@/components/architecture/ArchitectureDiagram";
import { ContentSection } from "@/components/ui/ContentSection";
import type { ArchitectureSection as ArchitectureSectionData } from "@/data/architecture";
import { cn } from "@/lib/utils";

type ArchitectureSectionProps = {
  section: ArchitectureSectionData;
  variant?: "default" | "muted";
  reverse?: boolean;
};

export function ArchitectureSection({
  section,
  variant = "default",
  reverse = false,
}: ArchitectureSectionProps) {
  return (
    <ContentSection id={section.id} variant={variant}>
      <div
        className={cn(
          "grid items-start gap-10 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Architecture
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            {section.intro}
          </p>
          <ul className="mt-6 space-y-3">
            {section.points.map((point, index) => (
              <li
                key={`${section.id}-point-${index}`}
                className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <ArchitectureDiagram diagram={section.diagram} />
      </div>
    </ContentSection>
  );
}
