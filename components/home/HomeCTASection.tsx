import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, RocketIcon } from "@/components/ui/icons";
import { homeData } from "@/data/home";

export function HomeCTASection() {
  const { cta } = homeData;

  return (
    <section id="contact" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1020]/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle Ambient Background Light */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            
            {/* Left: Icon & Text */}
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <RocketIcon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {cta.title}
                </h2>
                <p className="mt-1 text-sm text-slate-400 sm:text-base">
                  {cta.description}
                </p>
              </div>
            </div>

            {/* Right: Gradient Button */}
            <Button
              href={cta.href}
              variant="gradient"
              size="lg"
              className="w-full shrink-0 rounded-xl px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] hover:shadow-indigo-600/40 sm:w-auto"
            >
              {cta.buttonLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}
