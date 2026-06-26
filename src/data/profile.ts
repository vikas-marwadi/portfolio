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
  location: "Mississauga, Canada",
  bio: [
    "I'm a Data + AI Engineer with experience building production ETL pipelines, multi-agent AI platforms, and enterprise SaaS applications. From designing data pipelines at DHL Express to architecting AI-powered platforms at ForIT, I deliver intelligent solutions that drive measurable business impact.",
    "My expertise spans end-to-end data engineering — from Snowflake and SQL data warehousing to predictive analytics with Python — combined with deep AI integration including multi-agent architectures, RAG systems, and LLM-powered automation deployed on Azure.",
  ],
  education: [
    {
      degree: "Post Graduate Certificate, Business Insights and Analytics",
      university: "Humber College",
      location: "Toronto, Canada",
      period: "2023 - 2025",
      honors: "Dean's List — Fall 2023 · Winter 2024 · Summer 2024 · Fall 2024",
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      university: "Charotar University of Science & Technology (CHARUSAT)",
      location: "Gujarat, India",
      period: "2018 - 2022",
    },
  ] as Education[],
  languages: ["English", "Hindi", "Gujarati", "French (Beginner)"],
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
    role: "AI Development Lead",
    company: "ForIT",
    period: "Jan 2026 - Present",
    location: "Seattle, WA · Remote",
    current: true,
    highlights: [
      "Architected 15-minute-interval production ETL pipelines on Azure Functions syncing crew scheduling and flight operations from VMO API — powering 18+ stored procedures and real-time Power BI dashboards that drive payroll-critical and operational reporting across the organization",
      "Spearheaded a 129-tool multi-agent AI platform on Microsoft Teams — integrating Microsoft 365, CRM, GitHub, and browser automation via Claude Opus/Sonnet on Azure Container Apps — eliminating cross-platform context-switching and enabling complex multi-system workflows directly within Teams",
      "Delivered a white-label multi-tenant IT support SaaS with Claude-powered ticket response drafting, Azure SQL row-level security, and human-in-the-loop approval via Teams and Power Automate — accelerating ticket resolution while maintaining full oversight across all client tenants",
      "Built a regulatory-grade aviation crew certification platform enforcing Transport Canada regulations (CAR 725.21, 404.04) — replacing manual spreadsheet tracking with AI-powered PDF ingestion and automated expiry alerts, eliminating compliance gaps and reducing administrative overhead",
      "Shipped a multi-tenant data catalog (FastAPI + Next.js) that auto-discovers database schemas and generates AI-powered metadata descriptions with full-text search — cutting the time analysts spend on manual schema documentation across all tenant databases",
      "Engineered AgentDB, an LLM-agnostic database agent with a 3-tier permission system and sandbox mode — enabling any AI model to securely interact with databases and providing a reusable, safe AI-to-database interface deployable across multiple client environments",
      "Built a full-stack client and project management platform (Next.js, PostgreSQL, Prisma) with Claude-powered document intake auto-extracting structured data from PDFs and meeting notes, LLM triage routing support tickets to the correct project phase with confidence scoring, and an embeddable client chat widget — consolidating multi-client workflow into a single tool",
      "Leading active benchmarking of vision and image models to evaluate accuracy, latency, and cost for an in-house document processing solution — targeting reduced dependency on third-party Document AI APIs and greater control over sensitive document handling pipelines",
    ],
    tech: [
      "TypeScript",
      "Python",
      "Azure",
      "Claude API",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
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
    name: "AI & LLM Engineering",
    skills: [
      "Claude API",
      "OpenAI API",
      "Multi-Agent Systems",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Semantic Kernel",
      "Vector Databases",
      "Prompt Engineering",
      "MCP",
      "Hugging Face",
      "AI Agents",
      "Document AI",
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      "ETL / ELT Pipelines",
      "SQL",
      "Snowflake",
      "PostgreSQL",
      "dbt",
      "Apache Airflow",
      "Azure Data Factory",
      "PySpark",
      "Delta Lake",
      "Data Modeling",
      "Power BI",
      "DAX / Power Query",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "Azure",
      "Azure Functions",
      "Azure Container Apps",
      "Azure Synapse",
      "Microsoft Graph API",
      "Power Automate",
      "Google Cloud",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
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
      "Bash",
    ],
  },
  {
    name: "Web & SaaS",
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
