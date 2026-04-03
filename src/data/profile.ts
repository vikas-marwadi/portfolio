export const profile = {
  name: "Vikas Marwadi",
  role: "Data + AI Engineer",
  tagline: "ETL Pipelines · AI Agents · Enterprise SaaS · Cloud Architecture · LLM Integration",
  email: "vikas.m1410@gmail.com",
  github: "https://github.com/vikas-marwadi",
  linkedin: "https://linkedin.com/in/vikas-marwadi",
  location: "Melbourne, Australia",
  bio: [
    "I'm a Data + AI Engineer passionate about building end-to-end data pipelines and AI-powered systems that solve real business challenges. With a strong foundation in computer science and hands-on experience across ETL, cloud architecture, and the full AI/ML stack, I deliver intelligent solutions that drive measurable impact.",
    "My expertise spans from designing ETL pipelines and enterprise data platforms to developing custom AI agents, RAG systems, and LLM integrations. I thrive at the intersection of data engineering and artificial intelligence, building systems that transform raw data into actionable insights.",
    "Currently focused on enterprise SaaS solutions including AI-powered support systems, automated reporting pipelines, multi-agent architectures, and cloud-native data platforms that help organizations work smarter.",
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "Deakin University",
    location: "Melbourne, Australia",
    period: "2021 - 2024",
    honors: "Dean's List",
  },
  languages: ["English", "Hindi", "Gujarati"],
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "Data + AI Engineer",
    company: "ForIT Solutions",
    period: "2024 - Present",
    current: true,
    highlights: [
      "Architecting ETL pipelines and data platforms for enterprise client reporting and analytics",
      "Developing AI-powered support ticketing system with intelligent routing and auto-classification",
      "Building multi-agent architectures using Claude API for automated reporting pipelines",
      "Creating enterprise SaaS dashboards with Next.js, React, and real-time data visualization",
      "Implementing RAG pipelines and LLM integrations for knowledge base search across client documentation",
      "Designing cloud architecture on Azure with Microsoft Graph API and Power Automate automation",
    ],
    tech: [
      "Python",
      "TypeScript",
      "Azure",
      "SQL",
      "Next.js",
      "Claude API",
      "Power BI",
    ],
  },
  {
    role: "Junior Developer",
    company: "ForIT Solutions",
    period: "2023 - 2024",
    current: false,
    highlights: [
      "Built internal tools and dashboards for IT service management",
      "Developed automated reporting systems for client meetings",
      "Integrated Microsoft 365 services using Graph API and PowerShell",
      "Created data visualization solutions for business intelligence",
    ],
    tech: ["React", "TypeScript", "PowerShell", "SQL", "Power BI"],
  },
  {
    role: "IT Support Intern",
    company: "ForIT Solutions",
    period: "2022 - 2023",
    current: false,
    highlights: [
      "Provided technical support across multiple client environments",
      "Assisted with cloud migration projects on Azure and Microsoft 365",
      "Documented IT procedures and created knowledge base articles",
    ],
    tech: ["Azure", "Microsoft 365", "Active Directory", "Networking"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2021 - 2022",
    current: false,
    highlights: [
      "Designed and developed websites for small businesses",
      "Built responsive, mobile-first web applications",
      "Managed client relationships and project timelines",
    ],
    tech: ["HTML/CSS", "JavaScript", "React", "WordPress"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "SQL",
      "PostgreSQL",
      "Data Modeling",
      "Power BI",
      "Data Warehousing",
      "Supabase",
      "SQLite",
    ],
  },
  {
    name: "AI & LLM Integration",
    skills: [
      "Claude API",
      "OpenAI API",
      "RAG Pipelines",
      "LangChain",
      "Vector Databases",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "NLP",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "Azure",
      "Microsoft Graph API",
      "Power Automate",
      "Docker",
      "Vercel",
      "CI/CD",
    ],
  },
  {
    name: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "PowerShell",
      "HTML/CSS",
    ],
  },
  {
    name: "Web & SaaS Development",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Tailwind CSS",
      "Git",
    ],
  },
];
