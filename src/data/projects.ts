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
    title: "DHL Predictive Analytics Pipelines",
    description:
      "Production-grade data pipelines integrating high-volume operational and financial data from Snowflake and SQL systems. Built predictive models for shipment pricing trends and entity resolution system preventing multi-million dollar revenue leakage.",
    category: "Data Engineering",
    tech: ["Python", "Snowflake", "SQL", "Power BI", "Pandas", "NumPy"],
    featured: true,
  },
];
