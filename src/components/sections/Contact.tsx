"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { resumeData } from "@/data/resume";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: resumeData.personal.email,
    href: `mailto:${resumeData.personal.email}`,
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: resumeData.personal.phone,
    href: `tel:${resumeData.personal.phone}`,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: resumeData.personal.whatsapp,
    href: `https://wa.me/${resumeData.personal.whatsapp}`,
    color:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: resumeData.personal.location,
    href: null,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: resumeData.personal.github || "#",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: resumeData.personal.linkedin || "#",
    color: "hover:text-blue-600",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: `https://wa.me/${resumeData.personal.whatsapp}`,
    color: "hover:text-green-500",
  },
];

interface InputFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder: string;
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
  error?: string;
  textarea?: boolean;
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  textarea = false,
}: InputFieldProps) {
  const baseClasses =
    "w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl text-dark-900 dark:text-white placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300";
  const errorClasses = error
    ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
    : "";

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          rows={5}
          className={`${baseClasses} ${errorClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`${baseClasses} ${errorClasses}`}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500 flex items-center gap-1"
        >
          <FiAlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      );
      const mailtoLink = `mailto:${resumeData.personal.email}?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      reset();

      // Reset success status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft} className="mb-8">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                Let&apos;s talk about your project
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                I&apos;m currently available for freelance work and full-time
                opportunities. Whether you need help building a new product or
                improving an existing one, I&apos;d love to discuss how I can
                help.
              </p>
            </motion.div>

            {/* Contact cards */}
            <motion.div variants={staggerContainer} className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={fadeInLeft}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">
                          {info.label}
                        </p>
                        <p className="text-dark-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-200 dark:border-dark-700">
                      <div
                        className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center`}
                      >
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">
                          {info.label}
                        </p>
                        <p className="text-dark-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInLeft}>
              <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">
                Find me on social media:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-dark-100 dark:bg-dark-800 rounded-xl flex items-center justify-center text-dark-500 dark:text-dark-400 ${social.color} transition-all duration-300`}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
                  name="name"
                  placeholder="John Doe"
                  register={register}
                  error={errors.name?.message}
                />
                <InputField
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  register={register}
                  error={errors.email?.message}
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                register={register}
                error={errors.subject?.message}
              />

              <InputField
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                register={register}
                error={errors.message?.message}
                textarea
              />

              {/* Submit status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl"
                >
                  <FiCheck className="w-5 h-5" />
                  <span>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl"
                >
                  <FiAlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
                rightIcon={<FiSend className="w-5 h-5" />}
              >
                Send Message
              </Button>

              <p className="text-sm text-dark-500 dark:text-dark-400 text-center">
                I usually respond within 24-48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
