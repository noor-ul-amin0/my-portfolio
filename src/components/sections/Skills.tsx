"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGit,
  SiDocker,
  SiAuth0,
  SiTwilio,
  SiSequelize,
} from "react-icons/si";
import { TbApi, TbBrandNpm } from "react-icons/tb";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData, SkillCategory } from "@/data/resume";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// Icon mapping for skills
const skillIcons: Record<string, React.ElementType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn/UI": SiReact,
  "TanStack Query": SiReact,
  "React Hook Form": SiReact,
  Zustand: SiReact,
  Redux: SiReact,
  "HTML/CSS": SiReact,
  Bootstrap: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  NestJS: SiNestjs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  Git: SiGit,
  "Nx Monorepo": TbBrandNpm,
  Docker: SiDocker,
  Auth0: SiAuth0,
  Twilio: SiTwilio,
  Sequelize: SiSequelize,
  "REST APIs": TbApi,
  "Retrieval-Augmented Generation (RAG)": SiReact,
  "AI Agents": SiReact,
  LLMs: SiReact,
  "Prompt Engineering": SiReact,
  "AI Assistants": SiReact,
  Azure: SiReact,
  Vite: SiReact,
  "Azure OpenAI": SiReact,
  "Azure AI Search": SiReact,
  "Azure Container Apps": SiReact,
  MSSQL: SiReact,
  "LLM Integration": SiReact,
};

// Color mapping for skill categories
const categoryColors: Record<
  string,
  { bg: string; text: string; bar: string }
> = {
  Languages: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    bar: "from-blue-500 to-blue-600",
  },
  Frontend: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    bar: "from-purple-500 to-purple-600",
  },
  Backend: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
    bar: "from-green-500 to-green-600",
  },
  Databases: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
    bar: "from-orange-500 to-orange-600",
  },
  AI: {
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    text: "text-yellow-600 dark:text-yellow-400",
    bar: "from-yellow-500 to-yellow-600",
  },
  "Tools & Others": {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-600 dark:text-pink-400",
    bar: "from-pink-500 to-pink-600",
  },
};

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

function SkillBar({ name, level, color, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = skillIcons[name];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className="w-4 h-4 text-dark-500 dark:text-dark-400 group-hover:text-primary-500 transition-colors" />
          )}
          <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
            {name}
          </span>
        </div>
        <span className="text-sm text-dark-500 dark:text-dark-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const colors =
    categoryColors[category.category] || categoryColors["Tools & Others"];

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-dark-800/50 rounded-2xl p-6 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}
        >
          <span className={`text-lg font-bold ${colors.text}`}>
            {category.category.charAt(0)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
          {category.category}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={colors.bar}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // Get top skills for the overview
  const topSkills = resumeData.topSkills;

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-dark-50 dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/50 dark:bg-secondary-900/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* Top Skills Overview */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {topSkills.map((skill) => {
            const Icon = skillIcons[skill];
            return (
              <motion.div
                key={skill}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 shadow-sm hover:shadow-lg hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 cursor-default"
              >
                {Icon && (
                  <Icon className="w-5 h-5 text-dark-400 group-hover:text-primary-500 transition-colors" />
                )}
                <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {resumeData.skills.map((category, index) => (
            <SkillCard
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            I&apos;m constantly learning and adapting to new technologies.
            Currently exploring{" "}
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              AI/ML integration
            </span>{" "}
            and{" "}
            <span className="text-secondary-600 dark:text-secondary-400 font-medium">
              cloud architecture
            </span>{" "}
            to build smarter applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
