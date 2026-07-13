"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#FCFBFA]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Soft radial glow on the right side behind hero */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -30, 0],
                opacity: [0.4, 0.6, 0.4],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-10 h-[40rem] w-[40rem] rounded-full bg-[#EFEBE9]/40 blur-[120px]"
      />

      {/* Soft neutral glow on the left */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -40, 0],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#F8F5F2]/60 blur-[120px]"
      />
      
      {/* Subtle center accent */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 20, 0],
                y: [0, 30, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/3 top-2/3 h-[20rem] w-[20rem] rounded-full bg-[#EFEBE9]/30 blur-[100px]"
      />
    </div>
  );
}