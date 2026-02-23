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
    title: "Full Stack Developer",
    email: "noorawan444@gmail.com",
    phone: "+92 332 2696097",
    whatsapp: "+923322696097",
    location: "Peshawar, Pakistan",
    dateOfBirth: "01/04/1996",
    nationality: "Pakistani",
    github: "https://github.com/noor-ul-amin0",
    linkedin: "https://www.linkedin.com/in/noor-ul-amin-9234a1154/",
  },

  about: `Full-Stack Engineer with 5 years of experience building scalable SaaS and AI-powered web applications using React, Next.js, Node.js, PostgreSQL, and TypeScript. Proven track record of delivering production-grade systems, designing clean architectures, and developing high-performance APIs for real-world products. Experienced in monorepo (Nx), real-time integrations, authentication systems, and cloud-ready applications. Passionate about building impactful products, optimizing performance, and working in fast-moving international teams.`,

  experience: [
    {
      id: "emumba",
      company: "Emumba Private Limited",
      role: "Full Stack Developer",
      location: "Islamabad, Pakistan",
      startDate: "May 2023",
      endDate: "Present",
      current: true,
      product: "InterWiz",
      productUrl: "https://interwiz.ai/",
      description: "AI-Powered Interview & Candidate Screening Platform",
      achievements: [
        "Engineered the interview workflow engine enabling adaptive, role-based AI interviews",
        "Built the AI-generated evaluation and report generation system with structured scoring and hiring recommendations",
        "Developed the live coding assessment module for real-time technical evaluation",
        "Implemented question bank and interview template management for customizable interviews",
        "Built auto-proctoring and trust score features to ensure interview integrity",
        "Developed self-service interview scheduling, reducing manual coordination",
        "Delivered ATS integrations for seamless hiring workflow synchronization",
        "Designed and optimized real-time interview session APIs",
        "Contributed to Nx monorepo architecture for scalability and code reuse",
        "Built modular frontend architecture using React, Shadcn/UI, Tailwind, React Hook Form, and TanStack Query",
      ],
      techStack: [
        "Nx",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
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
      startDate: "Jul 2021",
      endDate: "Apr 2023",
      current: false,
      product: "Expedient VMS",
      productUrl: "https://www.expedientvms.com/",
      description:
        "Unified platform for complete workforce management across all labour types",
      achievements: [
        "Architected scalable backend services for a multi-tenant enterprise platform",
        "Designed secure RBAC authentication and authorization using Auth0",
        "Built workflow-driven APIs for vendor onboarding, resource management, and approvals",
        "Integrated real-time communication using Twilio Conversations API",
        "Developed responsive frontend using React, Reactstrap, Redux, and Redux-Saga",
        "Added unit and integration testing to improve system reliability",
        "Contributed across the full product lifecycle including requirements, design reviews, development, and code reviews",
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
      endDate: "Jun 2021",
      current: false,
      product: "PlantsEra",
      description: "Full-Stack E-commerce Platform",
      achievements: [
        "Developed product catalog, cart, order, and user management system",
        "Designed REST APIs and MongoDB schema for scalable operations",
        "Integrated Cloudinary media pipeline for optimized image delivery",
        "Deployed the application on Heroku",
        "Created Swagger API documentation for APIs",
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
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
  ],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 75 },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Shadcn/UI", level: 90 },
        { name: "TanStack Query", level: 90 },
        { name: "React Hook Form", level: 90 },
        { name: "Zustand", level: 85 },
        { name: "Redux", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 95 },
        { name: "NestJS", level: 80 },
        { name: "FastAPI", level: 70 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Nx Monorepo", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Auth0", level: 85 },
        { name: "Twilio", level: 80 },
        { name: "Sequelize", level: 90 },
        { name: "REST APIs", level: 95 },
      ],
    },
  ],

  projects: [
    {
      id: "interwiz",
      title: "InterWiz",
      description: "AI-Powered Interview & Candidate Screening Platform",
      longDescription:
        "A comprehensive AI-driven platform that revolutionizes the hiring process through adaptive interviews, automated evaluation, and real-time technical assessments. Features include auto-proctoring, trust scoring, ATS integrations, and customizable interview templates.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Nx",
        "TanStack Query",
        "Tailwind CSS",
      ],
      liveUrl: "https://interwiz.ai/",
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
