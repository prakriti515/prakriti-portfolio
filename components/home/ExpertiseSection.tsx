import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpertiseIcon } from "@/components/ui/icons";
import { expertiseCategories } from "@/data/expertise";
import type { ExpertiseCategory } from "@/data/expertise";

function ExpertiseCard({ category }: { category: ExpertiseCategory }) {
  return (
    <article className="group rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <ExpertiseIcon name={category.icon} />
      </div>

      <h3 className="text-base font-semibold text-text-primary">
        {category.title}
      </h3>
      <p className="mt-1.5 text-sm text-text-secondary">
        {category.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Badge key={skill} className="text-[11px]">
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Technical Expertise"
          description="A comprehensive toolkit for designing, deploying, and operating production-grade cloud infrastructure."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {expertiseCategories.map((category) => (
            <ExpertiseCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
