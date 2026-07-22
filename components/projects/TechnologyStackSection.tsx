import { Badge } from "@/components/ui/Badge";
import type { TechnologyStackGroup } from "@/data/projects";

type TechnologyStackSectionProps = {
  groups: TechnologyStackGroup[];
};

export function TechnologyStackSection({ groups }: TechnologyStackSectionProps) {
  return (
    <section id="technology-stack" className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        Technology Stack
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.category}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h3 className="text-sm font-semibold text-text-primary">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="primary">
                  {item}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
