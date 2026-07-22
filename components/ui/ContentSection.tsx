import { cn } from "@/lib/utils";

type ContentSectionProps = {
  id?: string;
  variant?: "default" | "muted";
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function ContentSection({
  id,
  variant = "default",
  children,
  className,
  containerClassName,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-20",
        variant === "muted" && "bg-card",
        className,
      )}
    >
      <div
        className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
