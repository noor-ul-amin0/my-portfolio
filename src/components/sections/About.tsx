"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiUsers,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData } from "@/data/resume";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: FiLayers,
    title: "Full Stack",
    description:
      "Expertise in both frontend and backend development with modern tech stacks.",
  },
  {
    icon: FiZap,
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and excellent user experience.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description:
      "Experienced in agile teams, code reviews, and cross-functional collaboration.",
  },
];

export default function About() {
  const yearsOfExperience = new Date().getFullYear() - 2020;

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent dark:from-primary-950/20 dark:to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100/50 dark:bg-secondary-900/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="About Me"
          subtitle="Get to know more about my journey, skills, and what drives me as a developer"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background shapes */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-300 dark:border-primary-700 rounded-2xl"
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-800 dark:to-dark-700 rounded-2xl overflow-hidden aspect-[4/5]">
                {/* Profile image */}
                <Image
                  src="/profile.png"
                  alt={resumeData.personal.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-transparent to-secondary-400/10" />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-xl border border-dark-200 dark:border-dark-700"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                    {yearsOfExperience}+
                  </div>
                  <div className="text-xs text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Years Exp.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInRight}>
              <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                A passionate{" "}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>{" "}
                based in Pakistan
              </h3>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="space-y-4 text-dark-600 dark:text-dark-300 mb-8"
            >
              <p className="leading-relaxed">{resumeData.about}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <FiMapPin className="w-4 h-4 text-primary-500" />
                  <span>{resumeData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiCalendar className="w-4 h-4 text-primary-500" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech icons */}
            <motion.div variants={fadeInUp} className="mt-8">
              <p className="text-sm text-dark-500 dark:text-dark-400 mb-3">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "Tailwind",
                  "FastAPI",
                  "Node.js",
                  "Express.js",
                  "Azure",
                  "MongoDB",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded-lg text-sm font-medium border border-dark-200 dark:border-dark-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
