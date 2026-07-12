"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}