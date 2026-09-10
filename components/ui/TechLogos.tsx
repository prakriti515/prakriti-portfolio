import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function AwsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 48 30" className={className} aria-hidden="true">
      <path
        fill="#FF9900"
        d="M17.5 12.8c0-.7.3-1.4 1-1.8.6-.4 1.4-.6 2.3-.6.9 0 1.6.2 2.2.6.6.4.9 1 1 1.8h-6.5zm8.8 3.5c-.1-.7-.4-1.3-.9-1.8-.5-.5-1.2-.8-2-.8-.7 0-1.4.3-1.9.8-.5.5-.8 1.1-.9 1.8h5.7zm3.1-6.1c-1-1-2.4-1.5-4.2-1.5-1.7 0-3.1.5-4.1 1.5-1 1-1.6 2.3-1.6 3.9v.4c0 1.6.5 3 1.6 4 1 1 2.4 1.5 4.1 1.5 1.8 0 3.2-.5 4.2-1.5 1-1 1.5-2.4 1.5-4v-.4c0-1.6-.5-3-1.5-3.9zM10.7 8.5l-2.4 8.7-2.3-8.7H3.5l-2.3 8.7-2.4-8.7H-3.5L.2 19.8h2.6l2.3-8.1 2.3 8.1H10l3.7-11.3h-3zM34.5 16.5c-1-.5-1.7-1.1-2-1.8-.3-.7-.5-1.5-.5-2.4 0-1.1.4-2.1 1.1-2.8.8-.8 1.8-1.2 3.1-1.2 1.4 0 2.5.4 3.3 1.3.8.9 1.2 2 1.2 3.4v.7h-6.7c.1.7.3 1.2.7 1.6.4.4.9.6 1.6.6.8 0 1.5-.3 2-.9l1.4 1.5c-.9 1-2.1 1.5-3.6 1.5-1.8 0-3.2-.5-4.2-1.5z"
        transform="translate(4, -1) scale(0.9)"
      />
      <path
        d="M9 22c9 5.5 22 5.5 31-1.5"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M40.5 19.5l2 3-3.6.5"
        fill="#FF9900"
        stroke="#FF9900"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinuxLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <ellipse cx="16" cy="18" rx="8.5" ry="10" fill="#1e293b" />
      <ellipse cx="16" cy="19" rx="6.5" ry="8" fill="#f8fafc" />
      <ellipse cx="16" cy="10" rx="6" ry="6.5" fill="#1e293b" />
      <circle cx="13.5" cy="9.5" r="1.5" fill="#f8fafc" />
      <circle cx="18.5" cy="9.5" r="1.5" fill="#f8fafc" />
      <circle cx="13.8" cy="9.5" r="0.7" fill="#0f172a" />
      <circle cx="18.2" cy="9.5" r="0.7" fill="#0f172a" />
      <path d="M14 12.5c0 0 2-1 4 0l-2 3z" fill="#f59e0b" />
      <ellipse cx="10" cy="27" rx="3.5" ry="2" fill="#f59e0b" />
      <ellipse cx="22" cy="27" rx="3.5" ry="2" fill="#f59e0b" />
    </svg>
  );
}

export function DockerLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 36 32" className={className} aria-hidden="true">
      <path
        fill="#2496ED"
        d="M4 17h4v4H4zm5 0h4v4H9zm5 0h4v4h-4zm-10-5h4v4H4zm5 0h4v4H9zm5 0h4v4h-4zm5 5h4v4h-4zM9 7h4v4H9zm5 0h4v4h-4z"
      />
      <path
        fill="#2496ED"
        d="M32 18c-1.3-1.1-3.4-1.3-4.9-.4-.3-2.6-2.8-3.9-2.8-3.9s-1.5 2.3-.6 4.3c-1.5.4-2.6 1.7-2.4 3.3h13.2c.6-1.5 0-2.8-2.5-3.3z"
      />
      <path
        fill="#2496ED"
        d="M34 23.5c-1.5 3.5-5.5 6-16 6-11.5 0-15-4-16-6.5h32z"
      />
    </svg>
  );
}

export function KubernetesLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <polygon
        fill="#326CE5"
        points="16,2 29,9.5 29,24.5 16,32 3,24.5 3,9.5"
      />
      <circle cx="16" cy="17" r="8" fill="#0c1224" />
      <path
        d="M16 11v12M10.8 14l10.4 6M10.8 20l10.4-6"
        stroke="#326CE5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="17" r="2.5" fill="#326CE5" />
    </svg>
  );
}

export function TerraformLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#7B42BC" d="M12 4l8 4.5v9L12 13V4z" />
      <path fill="#844FBA" d="M4 8.5L12 13v9L4 17.5v-9z" />
      <path fill="#5C4EE5" d="M20 8.5L28 13v9l-8-4.5v-9z" />
      <path fill="#7B42BC" d="M12 23.5l8 4.5V23l-8-4.5v5z" />
    </svg>
  );
}

export function AnsibleLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#000000" />
      <circle cx="16" cy="16" r="13" fill="#ffffff" />
      <circle cx="16" cy="16" r="12" fill="#000000" />
      <path
        fill="#ffffff"
        d="M20.5 22.5L16 10.5 9.8 23.5h3.2l1.2-3.1h5.1l.6 1.6zM15.2 18l1.6-4.5 1.5 4.5h-3.1z"
      />
    </svg>
  );
}

export function GrafanaLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#F46800" />
      <circle cx="16" cy="16" r="7" fill="#FF9E2A" />
      <circle cx="16" cy="16" r="3" fill="#1a1208" />
    </svg>
  );
}

export function PrometheusLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#E6522C" />
      <path
        fill="#ffffff"
        d="M16 6.5c-3.5 0-5.8 2.3-5.8 5.8 0 2.5 1.3 4.3 3.1 5.3L11.8 26h8.4l-1.5-8.4c1.8-1 3.1-2.8 3.1-5.3 0-3.5-2.3-5.8-5.8-5.8zm0 2.4c2 0 3.1 1.3 3.1 3.4s-1.1 3.4-3.1 3.4-3.1-1.4-3.1-3.5 1.1-3.3 3.1-3.3z"
      />
    </svg>
  );
}

export function ProxmoxLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1e293b" />
      <path fill="#E57000" d="M7 7h9l9 9-9 9H7l9-9z" />
      <path fill="#7CC244" d="M16 7h9v9l-9 9v-9z" />
    </svg>
  );
}

export function AzureLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="#0078D4" d="M14 6L4 26h7.5L18 12.5 14 6zm2.8 8.2L14.2 26H28L18.8 6l-2 8.2z" />
    </svg>
  );
}

const logoMap = {
  aws: AwsLogo,
  azure: AzureLogo,
  linux: LinuxLogo,
  docker: DockerLogo,
  k8s: KubernetesLogo,
  terraform: TerraformLogo,
  ansible: AnsibleLogo,
  prometheus: PrometheusLogo,
  grafana: GrafanaLogo,
  proxmox: ProxmoxLogo,
} as const;

export type TechLogoId = keyof typeof logoMap;

export function TechLogo({
  id,
  className,
}: {
  id: TechLogoId;
  className?: string;
}) {
  const Logo = logoMap[id];
  return <Logo className={cn("h-7 w-7", className)} />;
}
