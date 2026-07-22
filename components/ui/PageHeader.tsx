import { cn } from "@/lib/utils";

type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  label,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "border-b border-border bg-card pt-24 pb-16 lg:pt-28 lg:pb-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {label && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            {label}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
