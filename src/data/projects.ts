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
    title: "AI Support Ticketing System",
    description:
      "Intelligent support portal with AI-powered ticket classification, routing, and automated responses. Features multi-tenant architecture, asset management, and client reporting dashboards.",
    category: "AI / Enterprise",
    tech: ["Next.js", "TypeScript", "Supabase", "Claude API", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Report Tracker",
    description:
      "Full-stack work management application for tracking client reports, meetings, and action items. Includes time logging, meeting prep workflows, and MCP server integration for AI-assisted project management.",
    category: "Full Stack",
    tech: ["Next.js", "TypeScript", "SQLite", "MCP", "Tailwind CSS"],
    featured: true,
    github: "https://github.com/vikas-marwadi",
  },
  {
    title: "Multi-Agent Reporting Pipeline",
    description:
      "Automated client reporting system using multi-agent architecture. Claude-powered agents analyze data, generate insights, and produce structured meeting reports with action items.",
    category: "AI / Automation",
    tech: ["Python", "Claude API", "Microsoft Graph", "Power Automate"],
    featured: true,
  },
  {
    title: "Enterprise Dashboard Suite",
    description:
      "Collection of data visualization dashboards for IT service management. Real-time KPI tracking, hardware inventory management, and client scorecard generation.",
    category: "Data Visualization",
    tech: ["React", "TypeScript", "Recharts", "Supabase", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Knowledge Base RAG System",
    description:
      "Retrieval-augmented generation pipeline for searching and synthesizing information across client documentation, meeting notes, and IT knowledge bases.",
    category: "AI / ML",
    tech: ["Python", "LangChain", "Vector DB", "Claude API"],
    featured: false,
  },
];
