/**
 * Architecture page content
 *
 * Replace REPLACE_* values with your real infrastructure design notes.
 * Do not claim systems or outcomes you have not operated.
 */

export type ArchitectureDiagram = {
  src: string;
  alt: string;
  caption: string;
};

export type ArchitectureSection = {
  id: string;
  title: string;
  intro: string;
  points: string[];
  diagram: ArchitectureDiagram;
};

export type TechnologyDecision = {
  id: string;
  decision: string;
  context: string;
  rationale: string;
  tradeoffs?: string;
};

export const architecturePageMeta = {
  title: "Architecture",
  description:
    "How production infrastructure is designed — topology, platforms, observability, security, and recovery patterns.",
  intro:
    "REPLACE: Short overview of your engineering approach to designing and operating infrastructure — environments supported, design principles, and operational priorities.",
} as const;

export const architectureSections: ArchitectureSection[] = [
  {
    id: "production-infrastructure",
    title: "Production Infrastructure",
    intro:
      "REPLACE: Describe your production environment — cloud provider, compute model, environment separation, and provisioning approach.",
    points: [
      "REPLACE: Environment layout — e.g. dev/staging/prod separation, accounts, or VPCs",
      "REPLACE: Compute and storage baseline — instances, managed services, or Kubernetes",
      "REPLACE: Provisioning model — IaC tooling, change control, and deployment cadence",
      "REPLACE: Operational ownership — who runs changes, on-call, and release gates",
    ],
    diagram: {
      src: "/images/architecture/production-infrastructure.svg",
      alt: "Production infrastructure diagram placeholder",
      caption:
        "REPLACE: Caption — regions, environments, core services, and traffic entry points.",
    },
  },
  {
    id: "network-topology",
    title: "Network Topology",
    intro:
      "REPLACE: How traffic enters the environment and how subnets, routing, and connectivity are structured.",
    points: [
      "REPLACE: Edge and ingress — load balancers, DNS, CDN, or API gateway",
      "REPLACE: Segmentation — public/private subnets, security groups, or NACLs",
      "REPLACE: Internal connectivity — service-to-service, VPN, or peering",
      "REPLACE: Egress controls — NAT, proxy, or restricted outbound paths",
    ],
    diagram: {
      src: "/images/architecture/network-topology.svg",
      alt: "Network topology diagram placeholder",
      caption:
        "REPLACE: Caption — VPC layout, subnets, and primary traffic flows.",
    },
  },
  {
    id: "docker-architecture",
    title: "Docker Architecture",
    intro:
      "REPLACE: Container runtime scope — local dev, CI builds, registry flow, and production orchestration if applicable.",
    points: [
      "REPLACE: Image build pipeline — base images, scanning, tagging, and registry",
      "REPLACE: Runtime placement — single hosts, Swarm, ECS, or Kubernetes",
      "REPLACE: Configuration — env vars, secrets injection, and resource limits",
      "REPLACE: Networking and storage — bridge/overlay networks, volumes, and persistence",
    ],
    diagram: {
      src: "/images/architecture/docker-architecture.svg",
      alt: "Docker architecture diagram placeholder",
      caption:
        "REPLACE: Caption — build → registry → deploy flow and runtime components.",
    },
  },
  {
    id: "monitoring-stack",
    title: "Monitoring Stack",
    intro:
      "REPLACE: Observability approach — metrics, logs, traces, and how alerts reach operators.",
    points: [
      "REPLACE: Metrics — what is collected, retention, and primary dashboards",
      "REPLACE: Logging — aggregation, search, and correlation with incidents",
      "REPLACE: Alerting — thresholds, routing, escalation, and noise control",
      "REPLACE: SLOs or review practice — error budgets, post-incident review, or capacity checks",
    ],
    diagram: {
      src: "/images/architecture/monitoring-stack.svg",
      alt: "Monitoring stack diagram placeholder",
      caption:
        "REPLACE: Caption — agents, collectors, storage, and alert paths.",
    },
  },
  {
    id: "security-layers",
    title: "Security Layers",
    intro:
      "REPLACE: Defense-in-depth controls across identity, network, data, and supply chain.",
    points: [
      "REPLACE: Identity and access — IAM, RBAC, MFA, and least-privilege patterns",
      "REPLACE: Network security — segmentation, WAF, TLS, and bastion or SSM access",
      "REPLACE: Data protection — encryption at rest/in transit, secrets management",
      "REPLACE: Supply chain — image scanning, dependency checks, and patch cadence",
    ],
    diagram: {
      src: "/images/architecture/security-layers.svg",
      alt: "Security layers diagram placeholder",
      caption:
        "REPLACE: Caption — security zones and control placement across the stack.",
    },
  },
  {
    id: "backup-strategy",
    title: "Backup Strategy",
    intro:
      "REPLACE: What is backed up, how often, where copies live, and how restores are validated.",
    points: [
      "REPLACE: Backup scope — databases, volumes, configuration, or state files",
      "REPLACE: Schedule and retention — frequency, lifecycle, and off-site replication",
      "REPLACE: Access controls — who can trigger restore and audit requirements",
      "REPLACE: Validation — restore tests, checksums, or periodic drill schedule",
    ],
    diagram: {
      src: "/images/architecture/backup-strategy.svg",
      alt: "Backup strategy diagram placeholder",
      caption:
        "REPLACE: Caption — backup sources, targets, and retention tiers.",
    },
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery",
    intro:
      "REPLACE: Recovery objectives and failover approach for critical workloads.",
    points: [
      "REPLACE: RTO/RPO targets — only include numbers you can substantiate",
      "REPLACE: Failover model — active/passive, multi-region, or rebuild-from-backup",
      "REPLACE: Runbooks — detection, decision criteria, and communication steps",
      "REPLACE: Testing — drill frequency and last validated restore path",
    ],
    diagram: {
      src: "/images/architecture/disaster-recovery.svg",
      alt: "Disaster recovery diagram placeholder",
      caption:
        "REPLACE: Caption — primary/secondary sites and failover sequence.",
    },
  },
];

export const technologyDecisions: TechnologyDecision[] = [
  {
    id: "decision-iac",
    decision: "REPLACE: Technology choice — e.g. Terraform for infrastructure provisioning",
    context:
      "REPLACE: Problem or constraint that drove the decision.",
    rationale:
      "REPLACE: Why this tool or pattern fit — team skills, module reuse, state management, or provider support.",
    tradeoffs:
      "REPLACE: Trade-offs accepted — learning curve, lock-in, or operational overhead.",
  },
  {
    id: "decision-cicd",
    decision: "REPLACE: Technology choice — e.g. GitHub Actions for CI/CD",
    context: "REPLACE: Delivery requirements and existing toolchain.",
    rationale:
      "REPLACE: Why this pipeline model — integration, cost, self-hosted runners, or policy gates.",
    tradeoffs: "REPLACE: Limitations or alternatives considered.",
  },
  {
    id: "decision-observability",
    decision: "REPLACE: Technology choice — e.g. Prometheus + Grafana",
    context: "REPLACE: Observability gaps before adoption.",
    rationale:
      "REPLACE: Fit for metrics model, alerting, and team workflows.",
    tradeoffs: "REPLACE: Storage, cardinality, or managed vs self-hosted trade-offs.",
  },
];

export const infrastructureDiagramGallery: ArchitectureDiagram[] = [
  {
    src: "/images/architecture/infrastructure-overview.svg",
    alt: "Infrastructure overview diagram placeholder",
    caption:
      "REPLACE: End-to-end view — user traffic through compute, data, and observability layers.",
  },
  {
    src: "/images/architecture/production-infrastructure.svg",
    alt: "Production infrastructure reference diagram",
    caption:
      "REPLACE: Consolidated production layer reference — swap with your primary environment diagram.",
  },
  {
    src: "/images/architecture/network-topology.svg",
    alt: "Network topology reference diagram",
    caption:
      "REPLACE: Consolidated network reference — swap with detailed VPC or hybrid cloud diagram.",
  },
];
