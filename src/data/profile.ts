export const profile = {
  name: "Vikas Marwadi",
  role: "AI Developer",
  tagline: "Building intelligent solutions at the intersection of AI and enterprise technology",
  email: "vikas.m1410@gmail.com",
  github: "https://github.com/vikas-marwadi",
  linkedin: "https://linkedin.com/in/vikas-marwadi",
  location: "Melbourne, Australia",
  bio: [
    "I'm an AI Developer passionate about leveraging artificial intelligence to solve real-world business challenges. With a strong foundation in computer science and hands-on experience across the full AI/ML stack, I build intelligent systems that drive measurable impact.",
    "My expertise spans from developing custom AI agents and RAG pipelines to building enterprise dashboards and automating complex workflows. I thrive at the intersection of cutting-edge AI research and practical engineering.",
    "Currently focused on AI-powered solutions including intelligent support systems, automated reporting, and multi-agent architectures that help organizations work smarter.",
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
    role: "AI Developer",
    company: "ForIT Solutions",
    period: "2024 - Present",
    current: true,
    highlights: [
      "Developing AI-powered support ticketing system with intelligent routing and auto-classification",
      "Building multi-agent architectures using Claude API for automated client reporting",
      "Creating enterprise dashboards with Next.js, React, and real-time data visualization",
      "Implementing RAG pipelines for knowledge base search across client documentation",
      "Automating IT management workflows with Microsoft Graph API and Power Automate",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Claude API",
      "Python",
      "Azure",
      "Microsoft Graph",
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
    name: "AI & Machine Learning",
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
    name: "Languages",
    skills: [
      "TypeScript",
      "Python",
      "JavaScript",
      "SQL",
      "PowerShell",
      "HTML/CSS",
    ],
  },
  {
    name: "Cloud & Data",
    skills: [
      "Azure",
      "Microsoft Graph API",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Docker",
    ],
  },
  {
    name: "Visualization",
    skills: [
      "Power BI",
      "Recharts",
      "D3.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Web Development",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Git",
    ],
  },
];
