export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  honors?: string;
}

export const profile = {
  name: "Vikas Marwadi",
  role: "Data + AI Engineer",
  tagline: "ETL Pipelines · AI Agents · Enterprise SaaS · Cloud Architecture · LLM Integration",
  email: "vikas.m1410@gmail.com",
  github: "https://github.com/vikas-marwadi",
  linkedin: "https://linkedin.com/in/vikas-marwadi",
  location: "Toronto, Canada",
  bio: [
    "I'm a Data + AI Engineer with experience building production ETL pipelines, multi-agent AI platforms, and enterprise SaaS applications. From designing data pipelines at DHL Express to architecting AI-powered platforms at ForIT, I deliver intelligent solutions that drive measurable business impact.",
    "My expertise spans end-to-end data engineering — from Snowflake and SQL data warehousing to predictive analytics with Python — combined with deep AI integration including multi-agent architectures, RAG systems, and LLM-powered automation deployed on Azure.",
    "Currently building enterprise AI platforms at ForIT, including a 129+ tool multi-agent system on Microsoft Teams, regulatory crew certification platforms, and LLM-agnostic database agents — all deployed on Azure Container Apps.",
  ],
  education: [
    {
      degree: "Post Graduate Certificate, Business Insights and Analytics",
      university: "Humber College",
      location: "Toronto, Canada",
      period: "2023 - 2025",
      honors: "Dean's List — Fall 2023",
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      university: "Charotar University of Science & Technology (CHARUSAT)",
      location: "Gujarat, India",
      period: "2018 - 2022",
    },
  ] as Education[],
  languages: ["English", "Hindi", "Gujarati"],
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  location?: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI Developer",
    company: "ForIT",
    period: "Jan 2026 - Present",
    location: "Seattle, WA · Remote",
    current: true,
    highlights: [
      "Built production ETL pipelines using Azure Functions, syncing crew scheduling and flight operations data from VMO API on 15-minute intervals with 18+ stored procedures powering payroll-critical reports and Power BI dashboards",
      "Architected a multi-agent AI platform on Microsoft Teams using Claude Opus/Sonnet with 129+ integrated tools across Microsoft 365, CRM, GitHub, and browser automation — deployed on Azure Container Apps",
      "Built a white-label multi-tenant IT support portal with AI-powered ticket response drafting, Azure SQL row-level security, and human approval workflows via Teams and Power Automate",
      "Developed a regulatory-grade crew certification platform for aviation, tracking pilot proficiency checks and medical certificates against Transport Canada regulations with AI-powered PDF ingestion",
      "Created a multi-tenant data catalog platform (FastAPI + Next.js) that auto-discovers database schemas and generates AI-powered metadata descriptions with full-text search",
      "Built AgentDB — an LLM-agnostic database agent enabling any AI model to safely explore schemas, run queries, and manage DDL with a 3-tier permission system and sandbox mode",
    ],
    tech: [
      "TypeScript",
      "Python",
      "Azure",
      "Claude API",
      "Next.js",
      "FastAPI",
      "SQL",
      "Power BI",
    ],
  },
  {
    role: "Data Application Engineer",
    company: "DHL Express",
    period: "Apr 2025 - Dec 2025",
    location: "Brampton, ON · Hybrid",
    current: false,
    highlights: [
      "Designed and deployed production-grade data pipelines integrating high-volume operational and financial data from Call-Centre software, Snowflake, and SQL systems, reducing manual processing by 50%",
      "Built predictive analytics pipelines in Python to model shipment pricing trends, duty cost patterns, and weight band behavior using regression, moving averages, and anomaly detection",
      "Prevented multi-million dollar revenue leakage by creating a Python-based entity resolution system using NLP and ML-based similarity",
      "Built Power BI dashboards using DAX and Power Query enabling executives to make data-driven decisions and uncover cost optimization opportunities",
      "Automated recurring analytics workflows using Python (Pandas, NumPy), Outlook, and SQL, improving reliability by 90%",
    ],
    tech: [
      "Python",
      "Snowflake",
      "SQL",
      "Power BI",
      "Pandas",
      "NumPy",
      "DAX",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Iter Innovandi",
    period: "Nov 2024 - May 2025",
    location: "Quebec, Canada · Remote",
    current: false,
    highlights: [
      "Developed data pipelines using Python and Google Cloud Document AI to automate data extraction, reducing processing time by 50%",
      "Worked on table and figure detection using deep learning models (Transformers) and tools like Azure Document AI and Amazon Textract",
      "Supported data cleaning, normalization, and quality checks, improving dataset reliability by ~30%",
      "Used Git-based version control, documentation, and CI/CD workflows for production readiness of data pipelines",
    ],
    tech: [
      "Python",
      "Google Cloud",
      "Azure Document AI",
      "Transformers",
      "Git",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Kintu Designs Pvt. Ltd.",
    period: "Jun 2021 - Apr 2022",
    location: "Surat, India",
    current: false,
    highlights: [
      "Developed an educational app by integrating MyScript API into Streamlit for math handwriting recognition, extracting and storing data in MySQL",
      "Automated data extraction using Python (Selenium, BeautifulSoup) and integrated a machine learning model for captcha detection, reducing processing time by 77%",
    ],
    tech: ["Python", "Selenium", "Streamlit", "MySQL", "Machine Learning"],
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
      "Snowflake",
      "PostgreSQL",
      "Data Modeling",
      "Power BI",
      "DAX / Power Query",
      "Data Warehousing",
    ],
  },
  {
    name: "AI & LLM Integration",
    skills: [
      "Claude API",
      "Multi-Agent Systems",
      "RAG Pipelines",
      "LangChain",
      "Vector Databases",
      "Prompt Engineering",
      "NLP",
      "Document AI",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "Azure",
      "Azure Functions",
      "Azure Container Apps",
      "Microsoft Graph API",
      "Power Automate",
      "Google Cloud",
      "Docker",
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
      "PHP",
      "HTML/CSS",
    ],
  },
  {
    name: "Web & SaaS Development",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
      "Supabase",
      "Git",
    ],
  },
];
