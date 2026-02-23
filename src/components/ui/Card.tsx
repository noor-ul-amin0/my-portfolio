"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient" | "outline";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      hover = true,
      padding = "md",
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseStyles = "rounded-2xl transition-all duration-300";

    const variants = {
      default:
        "bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700",
      glass:
        "bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg border border-white/20 dark:border-dark-700/50",
      gradient:
        "bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 border border-primary-200/50 dark:border-primary-800/50",
      outline:
        "bg-transparent border-2 border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={
          hover
            ? { scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = "Card";

export default Card;
