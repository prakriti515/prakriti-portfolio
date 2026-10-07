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

function IssuerBadge({ issuer, logo }: { issuer: string; logo: string }) {
  // If standard logo exists, try to render, else fallback to clean text initials
  const isCustomSvgAvailable = !logo.includes("cisco.svg") && !logo.includes("redhat.svg");

  if (isCustomSvgAvailable) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#13192f] border border-white/10">
        <Image
          src={logo}
          alt={`${issuer} logo`}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </div>
    );
  }

  // Text/Generic badge fallback for Cisco, Red Hat, etc.
  const shortCode = issuer.toUpperCase().includes("CISCO")
    ? "CISCO"
    : issuer.toUpperCase().includes("RED HAT")
      ? "RH"
      : issuer.slice(0, 3).toUpperCase();

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs tracking-wider">
      {shortCode}
    </div>
  );
}

export function CertificationCard({
  certification,
  className,
}: CertificationCardProps) {
  return (
    <article
      className={cn(
        "group relative flex items-start gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-[#0c1020]/90 p-5 sm:p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#10152a] hover:shadow-xl hover:shadow-indigo-500/5",
        className,
      )}
    >
      <IssuerBadge issuer={certification.issuer} logo={certification.logo} />

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-white group-hover:text-indigo-200 transition-colors">
              {certification.name}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {certification.issuer}
            </p>
          </div>
          <Badge variant="primary">{certification.date}</Badge>
        </div>

        {certification.credentialId && !certification.credentialId.startsWith("REPLACE") && (
          <p className="mt-3 text-xs text-slate-500 font-mono break-all">
            ID: {certification.credentialId}
          </p>
        )}

        {certification.verifyUrl && !certification.verifyUrl.startsWith("REPLACE") ? (
          <Link
            href={certification.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Verify Credential
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <span className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
            TODO: Add credential verification link
          </span>
        )}
      </div>
    </article>
  );
}
