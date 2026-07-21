import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Engineering Reliable Infrastructure"
          description="Focused on building systems that are secure, observable, and built to last."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-text-secondary">
              {siteConfig.about.intro}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {siteConfig.about.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <p
                    className={`text-3xl font-bold ${index % 2 === 0 ? "text-primary" : "text-secondary"}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-4">
            {siteConfig.about.points.map((point, index) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary/20"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
