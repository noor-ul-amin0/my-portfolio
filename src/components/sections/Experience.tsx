"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiExternalLink,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  resumeData,
  Experience as ExperienceType,
  Education,
} from "@/data/resume";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

interface TimelineItemProps {
  item: ExperienceType | Education;
  index: number;
  type: "experience" | "education";
}

function TimelineItem({ item, index, type }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const isExperience = type === "experience";
  const expItem = item as ExperienceType;
  const eduItem = item as Education;

  return (
    <motion.div
      className={`relative flex items-center justify-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={isEven ? fadeInLeft : fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Content Card */}
      <div
        className={`w-full md:w-[calc(50%-40px)] ${isEven ? "md:pr-0" : "md:pl-0"}`}
      >
        <motion.div
          className="group bg-white dark:bg-dark-800 rounded-2xl p-6 border border-dark-200 dark:border-dark-700 shadow-lg hover:shadow-xl hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300"
          whileHover={{ y: -4 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {expItem.current && (
                  <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
                <span className="text-sm text-dark-500 dark:text-dark-400 flex items-center gap-1">
                  <FiCalendar className="w-3 h-3" />
                  {isExperience
                    ? `${expItem.startDate} - ${expItem.endDate}`
                    : `${eduItem.startDate} - ${eduItem.endDate}`}
                </span>
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                {isExperience ? expItem.role : eduItem.degree}
              </h3>
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium">
                {isExperience ? (
                  <>
                    <span>{expItem.company}</span>
                    {expItem.companyWebsite && (
                      <a
                        href={expItem.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-500 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <span>{eduItem.institution}</span>
                    {eduItem.website && (
                      <a
                        href={eduItem.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-500 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isExperience
                  ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                  : "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400"
              }`}
            >
              {isExperience ? (
                <FiBriefcase className="w-5 h-5" />
              ) : (
                <HiAcademicCap className="w-6 h-6" />
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-dark-500 dark:text-dark-400 mb-4">
            <FiMapPin className="w-3 h-3" />
            <span>{isExperience ? expItem.location : eduItem.location}</span>
          </div>

          {/* Product info for experience */}
          {isExperience && expItem.product && (
            <div className="mb-4 p-3 bg-dark-50 dark:bg-dark-900/50 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                  Product: {expItem.product}
                </span>
                {expItem.productUrl && (
                  <a
                    href={expItem.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">
                {expItem.description}
              </p>
            </div>
          )}

          {/* Education field */}
          {!isExperience && eduItem.field && (
            <p className="text-sm text-dark-600 dark:text-dark-300 mb-4">
              <span className="font-medium">Field of Study:</span>{" "}
              {eduItem.field}
            </p>
          )}

          {/* Achievements */}
          {isExperience && expItem.achievements.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-2">
                {expItem.achievements.slice(0, 4).map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
                {expItem.achievements.length > 4 && (
                  <li className="text-sm text-dark-400 dark:text-dark-500 italic">
                    +{expItem.achievements.length - 4} more achievements...
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {isExperience && expItem.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {expItem.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Timeline dot - visible on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full z-10 ring-4 ring-white dark:ring-dark-900" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-white dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        {/* Work Experience */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-dark-900 dark:text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
              <FiBriefcase className="w-5 h-5" />
            </span>
            Work Experience
          </motion.h3>

          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line - visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {resumeData.experience.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  index={index}
                  type="experience"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-dark-900 dark:text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center text-secondary-600 dark:text-secondary-400">
              <HiAcademicCap className="w-6 h-6" />
            </span>
            Education
          </motion.h3>

          {/* Education items */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-500 to-primary-500 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {resumeData.education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
