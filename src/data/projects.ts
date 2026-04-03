export interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  featured: boolean;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Multi-Agent AI Platform",
    description:
      "Architected a 129+ tool multi-agent platform on Microsoft Teams using Claude Opus/Sonnet. Integrates Microsoft 365, CRM, GitHub, and browser automation with role-based access and session isolation — deployed on Azure Container Apps.",
    category: "AI / Enterprise",
    tech: ["Claude API", "TypeScript", "Azure Container Apps", "Microsoft Graph"],
    featured: true,
  },
  {
    title: "AgentDB — LLM Database Agent",
    description:
      "An LLM-agnostic database agent enabling any AI model to safely explore schemas, run queries, and manage DDL. Features a 3-tier permission system and sandbox mode for secure database interaction.",
    category: "AI / Data",
    tech: ["Python", "SQL", "Claude API", "FastAPI"],
    featured: true,
  },
  {
    title: "AI Support Ticketing Portal",
    description:
      "White-label multi-tenant IT support portal with AI-powered ticket response drafting using Claude API. Features Azure SQL row-level security and human approval workflows via Teams and Power Automate.",
    category: "AI / SaaS",
    tech: ["Next.js", "TypeScript", "Azure SQL", "Claude API", "Power Automate"],
    featured: true,
  },
  {
    title: "Multi-Tenant Data Catalog",
    description:
      "A data catalog platform that auto-discovers database schemas and generates AI-powered metadata descriptions. Features full-text search and encrypted credential management across tenants.",
    category: "Data / AI",
    tech: ["FastAPI", "Next.js", "Python", "Claude API", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Crew Certification Platform",
    description:
      "Regulatory-grade aviation platform tracking pilot proficiency checks and medical certificates against Transport Canada regulations (CAR 725.21, 404.04). Features AI-powered PDF ingestion with human review and real-time expiry alerts.",
    category: "Enterprise / AI",
    tech: ["Next.js", "TypeScript", "Azure", "Claude API", "SQL"],
    featured: true,
  },
  {
    title: "DHL Predictive Analytics Pipelines",
    description:
      "Production-grade data pipelines integrating high-volume operational and financial data from Snowflake and SQL systems. Built predictive models for shipment pricing trends and entity resolution system preventing multi-million dollar revenue leakage.",
    category: "Data Engineering",
    tech: ["Python", "Snowflake", "SQL", "Power BI", "Pandas", "NumPy"],
    featured: true,
  },
];
