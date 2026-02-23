"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUp,
  FiDownload,
  FiHeart,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { resumeData } from "@/data/resume";
import Button from "@/components/ui/Button";

const socialLinks = [
  {
    name: "GitHub",
    href: resumeData.personal.github || "#",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: resumeData.personal.linkedin || "#",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    href: `mailto:${resumeData.personal.email}`,
    icon: FiMail,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${resumeData.personal.whatsapp}`,
    icon: FaWhatsapp,
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-900 dark:bg-dark-950 text-white">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-shadow"
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="inline-block text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {resumeData.personal.name}
            </motion.a>
            <p className="text-dark-400 mb-6 max-w-md">
              {resumeData.personal.title} with {new Date().getFullYear() - 2021}
              + years of experience building scalable web applications. Open to
              new opportunities and collaborations.
            </p>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<FiDownload className="w-4 h-4" />}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Noor_Ul_Amin_CV.pdf";
                link.download = "Noor_Ul_Amin_CV.pdf";
                link.click();
              }}
              className="border-dark-600 text-dark-300 hover:border-primary-500 hover:text-primary-400"
            >
              Download CV
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-3"
                >
                  <FiMail className="w-4 h-4 text-primary-500" />
                  {resumeData.personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resumeData.personal.phone}`}
                  className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-3"
                >
                  <FiPhone className="w-4 h-4 text-primary-500" />
                  {resumeData.personal.phone}
                </a>
              </li>
              <li className="text-dark-400 flex items-start gap-3">
                <span className="text-primary-500 mt-1">📍</span>
                {resumeData.personal.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 py-8 border-t border-dark-800">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-dark-800">
          <p className="text-dark-500 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {resumeData.personal.name}. Made with
            <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
