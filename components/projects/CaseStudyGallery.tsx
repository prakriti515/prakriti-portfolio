import Image from "next/image";
import type { CaseStudyGalleryItem } from "@/data/projects";

type CaseStudyGalleryProps = {
  items: CaseStudyGalleryItem[];
};

export function CaseStudyGallery({ items }: CaseStudyGalleryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        Gallery
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-xl border border-border bg-white"
          >
            <div className="relative aspect-video w-full bg-card">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 100vw, 432px"
              />
            </div>
            {item.caption && (
              <figcaption className="border-t border-border px-4 py-3 text-sm text-text-secondary">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
