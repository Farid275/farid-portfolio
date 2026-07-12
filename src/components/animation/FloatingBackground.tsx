"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 24, 0],
                y: [0, -18, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
      />
    </div>
  );
}