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
    "A production-grade infrastructure architecture built on a 4-node Proxmox virtualization cluster, featuring functional workload isolation, container orchestration, centralized observability, and automated recovery pipelines.",
} as const;

export const architectureSections: ArchitectureSection[] = [
  {
    id: "production-infrastructure",
    title: "Production Infrastructure",
    intro:
      "A production environment built on a 4-node Proxmox virtualization cluster, with workloads separated by function to improve isolation, operational control, and maintainability. The environment is organized into dedicated virtual machines for gateway and container management, production applications, databases, and monitoring/security services.",
    points: [
      "VM200 (Gateway / Container Management): Docker and Docker Compose workloads, Portainer for container management, Nginx reverse proxy, traffic routing, TLS/SSL termination, and secure service exposure.",
      "VM101 (Production Applications): Dedicated production application workloads and containerized services managed with Docker Compose and application-level configuration.",
      "VM202 (Databases): Dedicated database workloads with strict separation of application and database resources, plus automated database backup and recovery processes.",
      "VM203 (Monitoring & Security): Prometheus for infrastructure and service metrics, Grafana for visualization and dashboards, Loki for centralized log collection, and security services.",
      "Operational Readiness: Clear resource boundaries between application, database, gateway, and observability workloads making troubleshooting, maintenance, security hardening, automated backups, and recovery readiness more manageable.",
    ],
    diagram: {
      src: "/images/architecture/production-infrastructure.svg",
      alt: "4-node Proxmox production infrastructure cluster layout",
      caption:
        "4-node Proxmox cluster topology separating Gateway (VM200), Applications (VM101), Databases (VM202), and Observability (VM203).",
    },
  },
  {
    id: "network-topology",
    title: "Network Topology",
    intro:
      "The production environment uses layered network and traffic controls to separate public-facing access from internal application, database, and monitoring services. Public traffic is filtered at the edge, routed securely through a central gateway, and passed only to required internal services while keeping databases and management workloads isolated from direct public access.",
    points: [
      "Internet & Edge Layer: Public DNS and traffic management through Cloudflare, enforcing TLS/HTTPS encryption, WAF traffic filtering, rate limiting, and bot protection.",
      "Gateway Layer: Nginx reverse proxy routes incoming requests to appropriate application services, handles HTTPS/TLS termination, and prevents direct exposure of internal workloads.",
      "Application Layer: Production applications run inside isolated workloads communicating through controlled internal networking, with only designated endpoints exposed via the gateway.",
      "Database Layer: Dedicated database workloads strictly separated from public-facing services, restricting application-to-database communication exclusively to authorized services.",
      "Monitoring & Security Layer: Prometheus metric collectors, Loki log shippers, and Grafana dashboards connected via secure internal network channels to support production operations.",
    ],
    diagram: {
      src: "/images/architecture/network-topology.svg",
      alt: "Layered network topology and traffic routing diagram",
      caption:
        "Traffic flow: Internet → Cloudflare (WAF/TLS) → Gateway / Nginx Reverse Proxy → Production Apps, Databases, and Observability.",
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
