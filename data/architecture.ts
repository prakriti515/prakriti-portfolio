/**
 * Architecture page content
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
      "Production applications and supporting services are containerized using Docker and managed primarily through Docker Compose. This provides consistent service configuration, isolated application environments, and a repeatable operational workflow for deploying and operating multiple production workloads.",
    points: [
      "Docker & Isolation: Containerized application and supporting workloads ensuring consistent runtime environments, controlled dependencies, and fault isolation.",
      "Docker Compose Orchestration: Multi-container stack definitions managing service configuration, networking, volumes, and dependency ordering for reliable deployments.",
      "Nginx Ingress Routing: Central reverse proxy routing incoming traffic to appropriate container endpoints with TLS termination and access control.",
      "Portainer Management: Web-based management interface providing real-time container visibility, log inspection, and operational control.",
      "Container Networking & Storage: Isolated Docker bridge networks prevent direct external exposure, while stateful services use managed persistent volumes tied to backup routines.",
      "Production Operational Discipline: Controlled change procedures with pre-deployment backups, dependency checks, and post-deployment telemetry validation.",
    ],
    diagram: {
      src: "/images/architecture/docker-architecture.svg",
      alt: "Docker multi-container deployment architecture diagram",
      caption:
        "Container workflow: Source / Build → Docker Image → Host Compose Stack (Apps, Nginx, Portainer) → Telemetry.",
    },
  },
  {
    id: "monitoring-stack",
    title: "Monitoring & Observability",
    intro:
      "The production environment uses a self-hosted observability stack to provide visibility into infrastructure health, service performance, resource utilization, and application logs.",
    points: [
      "Prometheus Metrics: Collects and stores time-series telemetry across hosts, containers, and services to drive dashboards, threshold tracking, and alerting.",
      "Grafana Dashboards: Centralized visual dashboards for real-time CPU, memory, disk, network, container health, and service availability tracking.",
      "Loki Log Centralization: Aggregates searchable application and system logs, providing fast correlation between metric anomalies and underlying log events.",
      "Key Monitored Areas: System resources (CPU, RAM, Disk I/O, Network), container lifecycle, application uptime, systemd logs, and infrastructure trends.",
      "Operational Telemetry Workflow: Metrics identify 'what is happening' while logs contextualize 'why it happened', used daily for health audits, incident resolution, and post-deployment validation.",
    ],
    diagram: {
      src: "/images/architecture/monitoring-stack.svg",
      alt: "Centralized Prometheus, Loki, and Grafana monitoring stack diagram",
      caption:
        "Observability flow: Production Hosts & Containers → Prometheus (Metrics) & Loki (Logs) → Grafana Dashboards & Alerting.",
    },
  },
  {
    id: "security-layers",
    title: "Security Layers",
    intro:
      "Security is implemented as multiple defensive layers across the edge, network, application, host, and access-management levels to reduce unnecessary exposure, control access, detect suspicious activity, and protect production workloads.",
    points: [
      "Edge Security: Cloudflare DNS and traffic protection, Web Application Firewall (WAF) rules, rate limiting, bot protection, and strict TLS/HTTPS encryption.",
      "Gateway & Network Security: Nginx reverse proxy controls application exposure, internal services remain unexposed, and UFW firewall policies restrict all non-essential ports.",
      "Host Hardening: SSH access hardening, restricted administrative permissions, Fail2ban brute-force mitigation, and minimal service footprint.",
      "Application Security: JWT authentication, security-related HTTP headers, controlled reverse-proxy endpoints, and robust authorization controls.",
      "Defense-in-Depth & Detection: Multi-layered defense where no single control is treated as sufficient; security events and operational logs are monitored via the observability stack.",
    ],
    diagram: {
      src: "/images/architecture/security-layers.svg",
      alt: "Multi-layered defense-in-depth security architecture diagram",
      caption:
        "Security zones: Internet → Cloudflare (WAF/DDoS) → Nginx Gateway → UFW Host Firewall → JWT/SSH Hardening → Observability.",
    },
  },
  {
    id: "backup-strategy",
    title: "Backup Strategy",
    intro:
      "Backups are integrated into the production operations workflow to protect application data, database data, configuration, and deployment-related information against accidental deletion, failed changes, service failures, and infrastructure incidents.",
    points: [
      "Comprehensive Backup Scope: Covers database data, application source files, Docker Compose deployment definitions, and critical infrastructure configs.",
      "Automated Scheduled Jobs: Scheduled backup tasks eliminate manual reliance and maintain isolated, modular backup routines for independent service restoration.",
      "Off-Site Cloud Protection to AWS S3: Critical backup archives are encrypted and replicated off-site to AWS S3, ensuring resilience against local hardware failure.",
      "Change Management & Recovery: Pre-deployment backups are standard protocol prior to major releases, ensuring proven rollback capabilities and recovery readiness.",
    ],
    diagram: {
      src: "/images/architecture/backup-strategy.svg",
      alt: "Automated local and off-site AWS S3 backup architecture diagram",
      caption:
        "Backup workflow: Database & App Data / Configs → Local Scheduled Automation → Encrypted Off-Site Replication to AWS S3.",
    },
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery",
    intro:
      "Structured disaster recovery procedures designed to ensure rapid service restoration and minimal data loss across all production workloads.",
    points: [
      "Recovery Objectives: Well-defined RTO and RPO targets supported by validated database dumps and configuration version control.",
      "Off-Site Restore Readiness: Capability to rebuild and restore virtual machines and container stacks directly from AWS S3 off-site backups.",
      "Standardized Runbooks: Step-by-step restoration playbooks for database rollbacks, container stack re-initialization, and reverse proxy reconfiguration.",
      "Validation & Testing: Routine backup integrity verification and periodic restore drills to ensure recovery readiness during unexpected outages.",
    ],
    diagram: {
      src: "/images/architecture/disaster-recovery.svg",
      alt: "Disaster recovery failover and restoration workflow diagram",
      caption:
        "Disaster recovery pipeline: Incident Detection → Standby/Off-site Retrieval from S3 → Stack Rebuild & Service Verification.",
    },
  },
];

export const technologyDecisions: TechnologyDecision[] = [
  {
    id: "decision-proxmox",
    decision: "Proxmox VE for Clustered Workload Isolation",
    context:
      "Needed reliable, multi-tier production hosting for applications, databases, and monitoring without resource contention or cloud compute costs.",
    rationale:
      "Proxmox VE provides bare-metal hypervisor efficiency, robust VM isolation (Gateway, App, DB, Observability), snapshotting, and cluster management.",
    tradeoffs:
      "Requires active hypervisor maintenance, host patching, and storage capacity management compared to fully managed cloud instances.",
  },
  {
    id: "decision-compose",
    decision: "Docker Compose for Service Orchestration",
    context:
      "Needed lightweight, declarative container management for 15+ production services with predictable startup and minimal operational overhead.",
    rationale:
      "Docker Compose provides version-controlled YAML stack definitions, isolated bridge networking, and reproducible deployments without Kubernetes complexity.",
    tradeoffs:
      "Lacks native multi-host auto-scaling, requiring manual vertical scaling and host placement decisions.",
  },
  {
    id: "decision-observability",
    decision: "Self-Hosted Prometheus, Grafana & Loki Stack",
    context:
      "Needed unified metrics and log visibility across virtual machines and container workloads without prohibitive SaaS observability costs.",
    rationale:
      "Prometheus, Grafana, and Loki offer deep telemetry correlation, powerful PromQL/LogQL querying, and full data retention control.",
    tradeoffs:
      "Requires monitoring and tuning TSDB storage retention, scrape intervals, and indexing performance.",
  },
];

export const infrastructureDiagramGallery: ArchitectureDiagram[] = [
  {
    src: "/images/architecture/infrastructure-overview.svg",
    alt: "End-to-end production infrastructure overview diagram",
    caption:
      "End-to-end production flow — user traffic through Cloudflare edge, Nginx gateway, containerized compute, and observability layers.",
  },
  {
    src: "/images/architecture/production-infrastructure.svg",
    alt: "4-node Proxmox production virtualization cluster reference diagram",
    caption:
      "Consolidated 4-node Proxmox cluster reference separating Gateway (VM200), Applications (VM101), Databases (VM202), and Observability (VM203).",
  },
  {
    src: "/images/architecture/network-topology.svg",
    alt: "Layered network topology reference diagram",
    caption:
      "Layered network reference — Cloudflare WAF, Nginx reverse proxy, and isolated internal bridge subnets.",
  },
];
