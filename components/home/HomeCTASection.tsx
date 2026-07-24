import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";

export function HomeCTASection() {
  const { cta } = homeData;

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-gradient-to-r from-card via-card to-primary/5 px-6 py-8 sm:flex-row sm:px-10 sm:py-10">
          <div className="flex items-start gap-4 text-center sm:text-left">
            <span className="hidden text-3xl sm:block" aria-hidden="true">
              🚀
            </span>
            <div>
              <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                {cta.title}
              </h2>
              <p className="mt-1 text-sm text-text-secondary sm:text-base">
                {cta.description}
              </p>
            </div>
          </div>
          <Button href={cta.href} variant="gradient" size="lg" className="shrink-0">
            {cta.buttonLabel}
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
