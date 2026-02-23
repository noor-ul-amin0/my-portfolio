"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiChevronDown,
} from "react-icons/fi";
import Button from "@/components/ui/Button";
import { resumeData } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const titles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "TypeScript Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-950 dark:to-dark-900" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/30 dark:bg-secondary-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 dark:from-primary-600/10 dark:to-secondary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-200/50 dark:border-dark-700/50 shadow-lg"
          >
            <span className="text-2xl animate-[wave_2s_ease-in-out_infinite]">
              👋
            </span>
            <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-dark-900 dark:text-white">{"I'm "}</span>
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {resumeData.personal.name}
            </span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            variants={fadeInUp}
            className="h-12 md:h-16 mb-8 flex items-center justify-center"
          >
            <span className="text-xl sm:text-2xl md:text-3xl text-dark-600 dark:text-dark-300 font-medium">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-6 md:h-8 bg-primary-500 ml-1 align-middle"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-dark-500 dark:text-dark-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about building{" "}
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              scalable applications
            </span>{" "}
            and{" "}
            <span className="text-secondary-600 dark:text-secondary-400 font-medium">
              beautiful user experiences
            </span>
            . I specialize in React, Node.js, and TypeScript with{" "}
            {new Date().getFullYear() - 2021}+ years of professional experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              leftIcon={<FiMail className="w-5 h-5" />}
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<FiDownload className="w-5 h-5" />}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Noor_Ul_Amin_CV.pdf";
                link.download = "Noor_Ul_Amin_CV.pdf";
                link.click();
              }}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            {resumeData.personal.github && (
              <motion.a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-dark-800 rounded-xl flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            )}
            {resumeData.personal.linkedin && (
              <motion.a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-dark-800 rounded-xl flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            )}
            <motion.a
              href={`mailto:${resumeData.personal.email}`}
              className="w-12 h-12 bg-white dark:bg-dark-800 rounded-xl flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 border border-dark-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "3+", label: "Companies Worked" },
              { value: "5+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-dark-400 dark:text-dark-500 hover:text-primary-500 transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        type="button"
      >
        <span className="text-sm mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Wave keyframe style */}
      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }
      `}</style>
    </section>
  );
}
