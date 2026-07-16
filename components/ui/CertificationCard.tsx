import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ExternalLinkIcon } from "@/components/ui/icons";
import type { Certification } from "@/data/certifications";
import { cn } from "@/lib/utils";

type CertificationCardProps = {
  certification: Certification;
  className?: string;
};

export function CertificationCard({
  certification,
  className,
}: CertificationCardProps) {
  return (
    <article
      className={cn(
        "group relative flex items-start gap-5 rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5",
        className,
      )}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-card border border-border">
        <Image
          src={certification.logo}
          alt={`${certification.issuer} logo`}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
              {certification.name}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {certification.issuer}
            </p>
          </div>
          <Badge variant="primary">{certification.date}</Badge>
        </div>

        <p className="mt-3 text-xs text-text-secondary font-mono">
          ID: {certification.credentialId}
        </p>

        <Link
          href={certification.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Verify Credential
          <ExternalLinkIcon />
        </Link>
      </div>
    </article>
  );
}
