import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
};

const variantStyles = {
  default: "bg-card text-text-secondary border-border",
  primary: "bg-primary/8 text-primary border-primary/15",
  secondary: "bg-secondary/8 text-secondary border-secondary/15",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
