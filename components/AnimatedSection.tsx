"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const itemRevealReduced: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AnimatedSection({
  children,
  id,
  className = "",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } }
  } : staggerContainer;

  return (
    <motion.section
      id={id}
      className={`py-16 md:py-20 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </motion.section>
  );
}
