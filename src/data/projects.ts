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
  {
    title: "Retail Data Categorization Using ML",
    description:
      "Designed and implemented a machine learning pipeline using Hugging Face's zero-shot classification model to analyze 541,000+ rows of retail data — identifying key customer behavior patterns and revenue trends to extract actionable business insights at scale.",
    category: "ML / Data Science",
    tech: ["Python", "Hugging Face", "Scikit-Learn", "Pandas", "NLP"],
    featured: true,
  },
  {
    title: "Hospital E-Website",
    description:
      "Built a secure hospital web portal using PHP, MySQL, and HTML/CSS enabling patients to access medical records via unique credentials. Streamlined patient data management and reduced paperwork overhead, improving healthcare delivery efficiency.",
    category: "Web / Healthcare",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    featured: true,
  },
];
