import { cn } from "@/lib/utils";

type CaseStudyBlockProps = {
  id: string;
  title: string;
  items: string[];
  className?: string;
};

export function CaseStudyBlock({
  id,
  title,
  items,
  className,
}: CaseStudyBlockProps) {
  return (
    <section id={id} className={cn("scroll-mt-28", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${id}-${index}`}
            className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
