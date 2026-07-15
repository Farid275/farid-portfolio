"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { itemReveal, itemRevealReduced } from "./AnimatedSection";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  isInteractive?: boolean;
}

export default function MotionCard({ children, className = "", isInteractive = true }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const revealVariants = shouldReduceMotion ? itemRevealReduced : itemReveal;

  return (
    <motion.div
      variants={revealVariants}
      whileHover={
        isInteractive && !shouldReduceMotion
          ? {
              y: -4,
              scale: 1.01,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
