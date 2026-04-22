export const profile = {
  name: "Faizan Ahmad",
  title: "Senior Software Engineer & Technical Lead",
  location: "Islamabad, Pakistan — Remote",
  email: "faizann.ahmad1@gmail.com",
  github: "https://github.com/iamfaizanahmad",
  linkedin: "https://linkedin.com/in/faizan-ahmad-009",
  resumeUrl: "/Faizan_Ahmad_Resume.pdf",
  tagline:
    "I design and ship real-time web systems at scale — from telemetry platforms streaming off 1,000+ vehicles to production-grade SvelteKit and React architectures that don't buckle under load.",
  positioning: [
    "Real-time systems",
    "Scalable frontend architecture",
    "Product-driven engineering",
  ],
};

export const highlights = [
  {
    metric: "1,000+",
    label: "Vehicles streaming live",
    detail:
      "Architected a SvelteKit operator UI that absorbs sustained high-frequency MQTT telemetry — live positions, geofences, clustered markers — without dropped frames.",
  },
  {
    metric: "2,000+",
    label: "Vehicles tracked in production",
    detail:
      "Shipped React + NestJS frontends for Turing Insights, serving 200+ concurrent operators across Kafka and RabbitMQ pipelines.",
  },
  {
    metric: "9+ yrs",
    label: "Remote engineering across EU / US / ZA",
    detail:
      "Senior and Tech Lead roles in distributed teams — owning features end-to-end from RFC to production debugging.",
  },
  {
    metric: "RFC-led",
    label: "Architecture without rework",
    detail:
      "Introduced a structured RFC process across a 6-engineer team that measurably reduced architecture-related rework and aligned senior engineers around shared design language.",
  },
  {
    metric: "E2E typed",
    label: "Zero client/server drift",
    detail:
      "Wired PostgreSQL → tRPC → Zod → SvelteKit-superforms → UI, eliminating hand-rolled API clients and validation drift at the boundary.",
  },
  {
    metric: "13",
    label: "Clinical modules inside one EHR",
    detail:
      "Architected and led a 597-file, 75K+ line TypeScript EHR platform — patient records, multi-provider scheduling, insurance claims, denial management, compliance PDF generation, and MIPS reporting — across a multi-tenant practice environment.",
  },
];

export const experience = [
  {
    company: "Operanex",
    product: "Kimax Digital — real-time fleet & mining telemetry",
    role: "Senior Software Engineer",
    period: "Oct 2024 — Present",
    region: "Belgium · Remote",
    owned:
      "The entire SvelteKit frontend, the MapLibre GL live fleet map, and the typed tRPC ↔ Postgres data layer.",
    challenges: [
      "Sustained high-frequency MQTT updates feeding a single interactive map without frame drops.",
      "End-to-end type safety from Postgres through the UI with zero hand-written API clients.",
      "Scaling engineering practice across a distributed 6-engineer team.",
    ],
    impact: [
      "1,000+ vehicles streaming live into one operator UI.",
      "Introduced a structured RFC process that reduced architecture-related rework.",
      "Drove a new fleet-operations visibility feature from telemetry analysis → discovery → production.",
    ],
    stack: ["SvelteKit", "tRPC", "Zod", "MapLibre GL", "MQTT", "Kafka", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    company: "Aquila EHR",
    product: "Multi-practice Electronic Health Record platform",
    role: "Technical Lead (Contract)",
    period: "Jan 2022 — Present",
    region: "United States · Remote",
    owned:
      "Technical direction across a 597-file TypeScript EHR platform — 13 clinical modules covering patient records, scheduling, billing, claims, compliance, and reporting for multi-tenant US medical practices.",
    challenges: [
      "Modelling complex patient-record relationships — medications, vitals, authorizations, referrals, and billing — without letting the data model drift into a monolith.",
      "Insurance claims and denial management with automated reconciliation across multiple payers.",
      "Compliance PDF generation (superbills, patient statements, MIPS reports) that has to be exactly right in a regulated domain.",
      "FullCalendar-based multi-provider scheduling with resource views, recurrence rules, and real-time appointment state.",
    ],
    impact: [
      "13 production clinical modules shipped: patient management, scheduling, billing, claims, reports, MIPS, orders, fax inbox, and more.",
      "Multi-tenant architecture supporting multiple independent practices from a single deployment.",
      "Process and tooling improvements that measurably reduced operational overhead and raised team throughput.",
    ],
    stack: ["React", "TypeScript", "Ant Design", "FullCalendar", "Node.js", "PostgreSQL", "Redis", "pdfmake"],
  },
  {
    company: "glasc.io",
    product: "Turing Insights — fleet tracking & weight analytics",
    role: "Senior Software Engineer",
    period: "Jan 2022 — Oct 2024",
    region: "South Africa · Remote",
    owned:
      "Full-stack React + Node features across fleet tracking and weight analytics products.",
    challenges: [
      "Real-time event detection and alerting over Kafka / RabbitMQ pipelines.",
      "Visualizing large operational datasets at interactive latencies.",
      "Establishing engineering standards across a growing remote team.",
    ],
    impact: [
      "2,000+ vehicles tracked in real time, 200+ active operator users.",
      "Authored team-wide coding standards, design patterns, and Git workflow conventions.",
      "Shipped a stakeholder-approved PoC that advanced into a full production product line.",
    ],
    stack: ["React", "NestJS", "Kafka", "RabbitMQ", "Redis", "PostgreSQL"],
  },
  {
    company: "glasc.io",
    product: "Real-time event detection & fleet alerts",
    role: "Software Engineer",
    period: "Jan 2019 — Dec 2021",
    region: "South Africa · Remote",
    owned:
      "Frontend workflows for high-frequency event detection and large-dataset visualization.",
    challenges: [
      "High-throughput UI updates sourced from Kafka and RabbitMQ.",
      "Driving the full SDLC inside a distributed remote team.",
    ],
    impact: [
      "Owned features from requirements → system design → QA → production debugging.",
    ],
    stack: ["React", "Node.js", "Kafka", "RabbitMQ"],
  },
  {
    company: "CreditFix",
    product: "CreditPer — data-driven lending platform",
    role: "Full-Stack Developer",
    period: "Apr 2017 — Dec 2018",
    region: "Islamabad, Pakistan",
    owned:
      "Responsive React UI translating financial-domain requirements into modular components.",
    challenges: [
      "Pixel-accurate implementations against evolving design specs.",
      "Surfacing technical risk early in a fast-moving sprint cadence.",
    ],
    impact: [
      "Shipped core product surfaces for consumer and SME lending with automated credit decisioning.",
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
  },
];

export const projects = [
  {
    name: "Kimax Digital",
    tagline: "Real-time mining & fleet telemetry platform",
    problem:
      "Mining operators needed a single pane of glass over 1,000+ vehicles streaming live GPS, payload, and state data — with geofence logic and alerting — at frame rates the UI could actually render.",
    design:
      "Event-driven ingest (MQTT → Kafka) fans telemetry into Postgres and Redis. A SvelteKit BFF exposes a typed tRPC surface; the operator UI uses MapLibre GL with clustering and binary-encoded position streams so sustained high-frequency updates don't dirty the main thread.",
    contribution:
      "Architected and shipped the entire frontend, the live map, and the end-to-end typed data layer. Introduced the RFC process and mentored senior and mid-level engineers through design reviews.",
    scale: "1,000+ vehicles · sustained high-frequency MQTT",
    outcome:
      "A real-time operator UI that holds frame rate under load, plus a visibility feature I drove from telemetry analysis to production.",
    stack: ["SvelteKit", "shadcn-svelte", "tRPC", "Zod", "MapLibre GL", "MQTT", "Kafka", "Postgres", "Redis", "Kubernetes"],
    period: "Oct 2024 — Present",
  },
  {
    name: "Turing Insights",
    tagline: "Fleet tracking & payload analytics at scale",
    problem:
      "Fleet operators needed real-time location, weight analytics, and alert workflows across thousands of vehicles — with concurrent operator sessions watching different slices of the same event stream.",
    design:
      "NestJS services consume Kafka and RabbitMQ streams, persist to Postgres, and cache hot slices in Redis. React frontends subscribe via a thin socket layer and virtualize large lists to keep the UI responsive.",
    contribution:
      "Senior full-stack engineer across the product; authored the team's coding standards, design-pattern guidelines, and Git workflow conventions. Mentored juniors to mid-level through pairing and code review.",
    scale: "2,000+ vehicles · 200+ active operators",
    outcome:
      "A live-tracking product trusted by operations teams, with a stakeholder-approved PoC that graduated into a new product line.",
    stack: ["React", "NestJS", "Kafka", "RabbitMQ", "Redis", "Postgres"],
    period: "Jan 2019 — Oct 2024",
  },
  {
    name: "Aquila EHR",
    tagline: "Multi-practice electronic health record platform",
    problem:
      "US medical practices needed a single platform covering the full care cycle — patient intake, clinical documentation, multi-provider scheduling, insurance billing, denial management, and compliance reporting — without any of those domains bleeding into each other.",
    design:
      "597 TypeScript files across 13 feature modules, each with isolated routing and data concerns. Custom REST abstraction (Robin) for consistent API contracts. FullCalendar with resource and recurrence views drives scheduling. pdfmake handles compliance document generation (superbills, MIPS reports, patient statements). Multi-tenant by design — practiceId scopes every query.",
    contribution:
      "Technical lead owning the full architecture: data modelling, module boundaries, billing and claims flows, scheduling implementation, PDF generation utilities, and the team's engineering process.",
    scale: "13 clinical modules · 597 files · multi-tenant US practices",
    outcome:
      "A production EHR serving multi-practice environments with insurance claims automation, compliance PDF generation, and a scheduling system built to handle provider-level resource conflicts.",
    stack: ["React", "TypeScript", "Ant Design", "FullCalendar", "Node.js", "PostgreSQL", "Redis", "pdfmake"],
    period: "Jan 2022 — Present",
  },
  {
    name: "Cossel",
    tagline: "B2B ATS & recruitment workflow automation",
    problem:
      "Recruitment teams needed a scalable ATS that could automate candidate sourcing and hiring workflows without brittle integrations or type drift across the stack.",
    design:
      "SvelteKit app with a tRPC surface over Postgres; Zod-first schema contracts so validation lives in one place. shadcn/ui for a fast, consistent design system.",
    contribution:
      "Building frontend architecture and the typed API surface.",
    scale: "B2B · multi-tenant workflows",
    outcome:
      "A recruitment platform designed for workflow automation rather than data entry.",
    stack: ["SvelteKit", "shadcn/ui", "tRPC", "Postgres"],
    period: "Oct 2024 — Present",
  },
  {
    name: "CreditPer",
    tagline: "Data-driven consumer & SME lending",
    problem:
      "Lending platform needed a responsive, modular React UI that could absorb changing credit-decisioning rules without rewriting the frontend every quarter.",
    design:
      "Component-driven React architecture over a Node + Postgres backend; financial-domain requirements modeled as composable UI primitives.",
    contribution:
      "Built the React UI end-to-end; integrated third-party libraries and delivered pixel-accurate implementations from design mock-ups.",
    scale: "Consumer + SME lending",
    outcome:
      "A maintainable frontend that survived repeated decisioning-logic changes.",
    stack: ["React", "Node.js", "Postgres"],
    period: "Apr 2017 — Dec 2018",
  },
];

export const skills = [
  {
    group: "Frontend Architecture",
    items: ["SvelteKit", "React", "Next.js (App Router)", "TypeScript", "Redux", "shadcn-svelte", "shadcn/ui", "Tailwind CSS", "MapLibre GL"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "tRPC", "NestJS", "Express", "REST", "Zod", "PostgreSQL", "Redis"],
  },
  {
    group: "Real-Time Systems",
    items: ["MQTT", "Kafka", "RabbitMQ", "Event-driven architecture", "WebSockets", "High-frequency UI updates"],
  },
  {
    group: "DevOps & Infra",
    items: ["Docker", "Kubernetes", "CI/CD pipelines", "Git workflows"],
  },
  {
    group: "Tools & Practices",
    items: ["System design", "RFC process", "Code review", "Technical mentorship", "Agile / Scrum", "Sprint planning"],
  },
  {
    group: "AI Tooling",
    items: ["Claude API", "GitHub Copilot", "Cursor", "AI-assisted code review", "Prompt engineering"],
  },
];

export const leadership = [
  {
    title: "RFC-driven architecture",
    body: "Introduced and ran a structured RFC process across a distributed 6-engineer team — reducing architecture-related rework and giving senior engineers a shared language for design decisions.",
  },
  {
    title: "Mentorship that compounds",
    body: "Multiple direct mentees have progressed from junior → mid-level under my review. I prefer pairing and written design reviews over one-off feedback because the artifacts outlive the conversation.",
  },
  {
    title: "Product-shaped engineering",
    body: "I use telemetry and usage data to find product gaps, not just to measure them. At Operanex I drove a fleet-operations visibility feature from data analysis through to production.",
  },
  {
    title: "System design & code review",
    body: "I review for the invariants, the failure modes, and the rollback path — not for style. Design critiques run against explicit trade-offs, not preference.",
  },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];
