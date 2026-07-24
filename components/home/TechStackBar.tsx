import { homeData } from "@/data/home";

export function TechStackBar() {
  return (
    <section
      aria-label="Technology stack"
      className="border-t border-border bg-card/40 py-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {homeData.techStackBar.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-text-secondary/70 transition-colors hover:text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
