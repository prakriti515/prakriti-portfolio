import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpertiseIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";
import type { HomeService } from "@/data/home";

function ServiceCard({ service }: { service: HomeService }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary transition-colors group-hover:from-primary group-hover:to-secondary group-hover:text-white">
        <ExpertiseIcon name={service.icon} />
      </div>
      <h3 className="text-base font-semibold text-text-primary">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>
    </article>
  );
}

export function WhatIDoSection() {
  const { services } = homeData;

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title={services.title}
          description={services.description}
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
