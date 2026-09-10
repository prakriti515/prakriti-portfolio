import { TechLogo, type TechLogoId } from "@/components/ui/TechLogos";

const techStackItems: { id: TechLogoId; name: string }[] = [
  { id: "aws", name: "AWS" },
  { id: "docker", name: "docker" },
  { id: "k8s", name: "kubernetes" },
  { id: "terraform", name: "Terraform" },
  { id: "ansible", name: "ANSIBLE" },
  { id: "linux", name: "Linux" },
  { id: "grafana", name: "Grafana" },
];

export function TechStackBar() {
  return (
    <section
      aria-label="Technology stack"
      className="border-t border-white/5 bg-[#060913]/60 py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {techStackItems.map((tech) => (
            <div
              key={tech.id}
              className="group flex items-center gap-3 text-slate-400 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <TechLogo id={tech.id} className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
