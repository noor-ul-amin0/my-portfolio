// Resume Data Types
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  dateOfBirth: string;
  nationality: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  product?: string;
  productUrl?: string;
  description: string;
  achievements: string[];
  techStack: string[];
  companyEmail?: string;
  companyWebsite?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  website?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Language {
  name: string;
  level: string;
  isNative: boolean;
}

export interface ResumeData {
  personal: PersonalInfo;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  topSkills: string[];
  projects: Project[];
  languages: Language[];
}

// Resume Data
export const resumeData: ResumeData = {
  personal: {
    name: "Noor Ul Amin",
    title: "Senior Full Stack & GenAI Engineer",
    email: "noorawan444@gmail.com",
    phone: "+92 332 2696097",
    whatsapp: "+923322696097",
    location: "Peshawar, Pakistan",
    dateOfBirth: "01/04/1996",
    nationality: "Pakistani",
    github: "https://github.com/noor-ul-amin0",
    linkedin: "https://www.linkedin.com/in/noor-ul-amin/",
  },

  about: `Senior Full Stack & GenAI Engineer with 5+ years of experience designing and delivering scalable SaaS and AI-powered applications for enterprise clients. Specialized in building modern full-stack and production-grade solutions using React, TypeScript, Python, Node.js, FastAPI, Retrieval-Augmented Generation (RAG) and LLM integrations with hands-on experience deploying cloud-native applications on Microsoft Azure. Proven ability to own products end-to-end from architecture and frontend development to backend services and production deployments. Passionate about building intuitive user experiences, solving complex business problems, and delivering high-quality software in fast-paced international teams.`,

  experience: [
    {
      id: "emumba-femsa",
      company: "Emumba Private Limited",
      role: "Senior Software Engineer",
      location: "Islamabad, Pakistan",
      startDate: "Aug 2023",
      endDate: "Present",
      current: true,
      product: "FEMSA AI Assistant",
      description: "Enterprise GenAI Platform",
      achievements: [
        "Designed and developed a production-grade Retrieval-Augmented Generation (RAG) based AI assistant for FEMSA Coca-Cola, enabling business teams across multiple countries to quickly access and understand complex business knowledge related to BI and inventory management applications.",
        "Served as the sole software engineer responsible for the end-to-end development of the application, owning both frontend and backend implementation.",
        "Built a modern full-stack application using React, TypeScript, Vite, Shadcn/UI, Tailwind CSS, Python, FastAPI, Azure OpenAI, Azure AI Search, Azure DI, Azure Blob Storage and MSSQL.",
        "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline with LLM integrations to deliver accurate, context-aware responses from enterprise knowledge bases.",
        "Developed a multilingual AI assistant supporting English, Spanish, and Portuguese for geographically distributed business teams.",
        "Designed scalable backend APIs and responsive frontend interfaces focused on performance, usability, and maintainability.",
        "Containerized the application using Docker and deployed production releases to Azure Container Apps.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Shadcn/UI",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "Docker",
        "Azure Container Apps",
        "Azure OpenAI",
        "Azure AI Search",
        "Azure DI",
        "Azure Blob Storage",
        "MSSQL",
        "Retrieval-Augmented Generation (RAG)",
        "LLM Integration",
      ],
      companyEmail: "noor.amin@emumba.com",
      companyWebsite: "https://emumba.com/",
    },
    {
      id: "emumba-interwiz",
      company: "Emumba Private Limited",
      role: "Senior Software Engineer",
      location: "Islamabad, Pakistan",
      startDate: "Aug 2023",
      endDate: "Present",
      current: true,
      product: "InterWiz AI",
      description:
        "AI Interview (Video and Phone Call) & Candidate Screening Platform",
      achievements: [
        "Engineered core interview workflows enabling adaptive, role-based AI interviews.",
        "Developed AI-powered candidate evaluation and report generation features with structured scoring and hiring recommendations.",
        "Built live coding assessment capabilities for real-time technical interviews.",
        "Implemented interview templates, question bank management, scheduling workflows, payment integration, complex onboarding flows and ATS integrations.",
        "Contributed to scalable Nx monorepo architecture and developed modular frontend components using React, TypeScript, Shadcn/UI, and TanStack Query.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "Nx",
        "Python",
      ],
      companyEmail: "noor.amin@emumba.com",
      companyWebsite: "https://emumba.com/",
    },
    {
      id: "productbox",
      company: "ProductBox",
      role: "Full Stack Developer",
      location: "Peshawar, Pakistan",
      startDate: "Jan 2021",
      endDate: "May 2023",
      current: false,
      product: "Expedient VMS",
      productUrl: "https://www.expedientvms.com/",
      description:
        "Unified platform for complete workforce management across all labour types",
      achievements: [
        "Architected scalable backend services for a multi-tenant enterprise platform.",
        "Designed secure RBAC authentication and authorization using Auth0.",
        "Built workflow-driven APIs for vendor onboarding, resource management, and approvals.",
        "Integrated real-time communication using Twilio Conversations API.",
        "Developed responsive frontend using React, Reactstrap, Redux, and Redux-Saga.",
        "Added unit and integration testing to improve system reliability.",
        "Contributed across the full product lifecycle including requirements, design reviews, development, and code reviews.",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize",
        "React",
        "Redux",
        "Auth0",
        "Twilio",
      ],
      companyEmail: "noor.amin@productbox.dev",
      companyWebsite: "https://productbox.dev/",
    },
    {
      id: "ngen",
      company: "Next Generation Circle (NGEN)",
      role: "MEVN Stack Developer",
      location: "Peshawar, Pakistan",
      startDate: "Aug 2020",
      endDate: "Jul 2021",
      current: false,
      product: "PlantsEra",
      description: "Full-Stack E-commerce Platform",
      achievements: [
        "Developed product catalog, cart, order, and user management system.",
        "Designed REST APIs and MongoDB schema for scalable operations.",
        "Integrated Cloudinary media pipeline for optimized image delivery.",
        "Deployed the application on Heroku.",
        "Created Swagger API documentation for APIs.",
      ],
      techStack: [
        "Vue.js",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Heroku",
      ],
      companyWebsite: "https://www.nextgcircle.com/",
    },
  ],

  education: [
    {
      id: "uop",
      institution: "University of Peshawar",
      degree: "BS Computer Science",
      field: "Information and Communication Technologies",
      location: "Peshawar, Pakistan",
      startDate: "Aug 2016",
      endDate: "Aug 2020",
      website: "https://www.uop.edu.pk/",
    },
  ],

  topSkills: [
    "React.js",
    "TypeScript",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "FastAPI",
    "Retrieval-Augmented Generation (RAG)",
    "Azure OpenAI",
    "PostgreSQL",
  ],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 85 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Bootstrap", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Zustand", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TanStack Query", level: 90 },
        { name: "Shadcn/UI", level: 90 },
        { name: "React Hook Form", level: 90 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 95 },
        { name: "NestJS", level: 75 },
        { name: "FastAPI", level: 85 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      category: "AI",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: 90 },
        { name: "AI Agents", level: 75 },
        { name: "LLMs", level: 85 },
        { name: "Prompt Engineering", level: 85 },
        { name: "AI Assistants", level: 90 },
      ],
    },
  ],

  projects: [
    {
      id: "femsa-ai-assistant",
      title: "FEMSA AI Assistant",
      description: "Enterprise GenAI Platform with RAG",
      longDescription:
        "A production-grade Retrieval-Augmented Generation (RAG) based AI assistant for FEMSA Coca-Cola, enabling business teams across multiple countries to quickly access and understand complex business knowledge related to BI and inventory management applications.",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Azure OpenAI",
        "Azure AI Search",
        "Azure Container Apps",
        "MSSQL",
      ],
      featured: true,
    },
    {
      id: "interwiz",
      title: "InterWiz AI",
      description: "AI Interview & Candidate Screening Platform",
      longDescription:
        "AI-powered interview platform enabling adaptive, role-based interviews, live coding assessments, and automated candidate evaluations with structured scoring and hiring recommendations.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Nx",
        "TanStack Query",
        "Tailwind CSS",
      ],
      featured: true,
    },
    {
      id: "expedient-vms",
      title: "Expedient VMS",
      description: "Unified Workforce Management Platform",
      longDescription:
        "Enterprise-grade vendor management system for complete workforce management across all labour types. Includes multi-tenant architecture, RBAC authentication, real-time communication, and comprehensive workflow automation.",
      technologies: [
        "React",
        "Node.js",
        "MySQL",
        "Redux",
        "Auth0",
        "Twilio",
        "Express.js",
      ],
      liveUrl: "https://www.expedientvms.com/",
      featured: true,
    },
    {
      id: "plantsera",
      title: "PlantsEra",
      description: "Full-Stack E-commerce Platform",
      longDescription:
        "A complete e-commerce solution for a plant nursery featuring product catalog management, shopping cart, order processing, and user authentication. Built with Vue.js and Node.js with MongoDB for data persistence.",
      technologies: [
        "Vue.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Bootstrap",
        "Cloudinary",
      ],
      featured: true,
    },
  ],

  languages: [
    { name: "Urdu", level: "Native", isNative: true },
    { name: "English", level: "Professional", isNative: false },
  ],
};

export default resumeData;
