import { cn } from "@/lib/utils";

type ArticleCalloutProps = {
  variant: "info" | "warning" | "tip";
  title?: string;
  text: string;
};

const variantStyles = {
  info: "border-primary/25 bg-primary/5 text-text-primary",
  warning: "border-amber-300/60 bg-amber-50 text-text-primary",
  tip: "border-secondary/30 bg-secondary/5 text-text-primary",
};

export function ArticleCallout({ variant, title, text }: ArticleCalloutProps) {
  return (
    <aside
      className={cn(
        "my-6 rounded-xl border px-5 py-4",
        variantStyles[variant],
      )}
    >
      {title && (
        <p className="text-sm font-semibold text-text-primary">{title}</p>
      )}
      <p className={cn("text-sm leading-relaxed text-text-secondary", title && "mt-1")}>
        {text}
      </p>
    </aside>
  );
}
