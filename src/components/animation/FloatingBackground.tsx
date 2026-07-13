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
        className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#B2C2B3]/20 blur-[100px]"
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
        className="absolute -left-20 top-40 h-[26rem] w-[26rem] rounded-full bg-violet-300/15 blur-[100px]"
      />
      
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, -30, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-slate-400/15 blur-[100px]"
      />
    </div>
  );
}