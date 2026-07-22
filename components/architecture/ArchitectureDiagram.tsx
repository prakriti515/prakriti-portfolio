import Image from "next/image";
import type { ArchitectureDiagram } from "@/data/architecture";
import { cn } from "@/lib/utils";

type ArchitectureDiagramProps = {
  diagram: ArchitectureDiagram;
  className?: string;
  aspectClassName?: string;
};

export function ArchitectureDiagram({
  diagram,
  className,
  aspectClassName = "aspect-[16/9]",
}: ArchitectureDiagramProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      <div className={cn("relative w-full", aspectClassName)}>
        <Image
          src={diagram.src}
          alt={diagram.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 896px"
        />
      </div>
      <figcaption className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-secondary">
        {diagram.caption}
      </figcaption>
    </figure>
  );
}
