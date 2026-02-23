"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import { resumeData, Project } from "@/data/resume";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// Get all unique technologies
const allTechnologies = Array.from(
  new Set(resumeData.projects.flatMap((project) => project.technologies)),
).sort();

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
        {/* Project image/gradient header */}
        <div className="relative h-48 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-primary-500/20 dark:from-primary-600/30 dark:via-secondary-600/30 dark:to-primary-600/30">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

              {/* Project icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiFolder className="w-10 h-10 text-primary-500" />
                </div>
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex gap-3">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View live project"
                >
                  <FiExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View source code"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-medium rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
            {project.longDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 text-dark-500 dark:text-dark-400 text-xs">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="px-6 py-4 border-t border-dark-200 dark:border-dark-700 flex items-center justify-between">
          <span className="text-sm text-dark-500 dark:text-dark-400">
            {project.technologies.length} technologies
          </span>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
              >
                Live Demo
                <FiExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? resumeData.projects.filter((project) =>
        project.technologies.includes(selectedTech),
      )
    : resumeData.projects;

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-dark-50 dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects I've worked on throughout my career"
        />

        {/* Filter buttons */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            variants={scaleIn}
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              selectedTech === null
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                : "bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          {allTechnologies.slice(0, 8).map((tech) => (
            <motion.button
              key={tech}
              variants={scaleIn}
              onClick={() =>
                setSelectedTech(tech === selectedTech ? null : tech)
              }
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-dark-500 dark:text-dark-400">
              No projects found with the selected technology.
            </p>
            <button
              onClick={() => setSelectedTech(null)}
              className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            >
              Clear filter
            </button>
          </motion.div>
        )}

        {/* More projects note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-500 dark:text-dark-400">
            These are some highlights from my professional work. Many projects
            are under NDA or part of larger enterprise systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
