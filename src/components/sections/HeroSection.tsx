"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import { FloatingBackground } from "@/components/animation/FloatingBackground";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center overflow-hidden px-6 py-28">
      <FloatingBackground />

      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shadow-sm ring-1 ring-[#EFEBE9]"
        >
          Developer Portfolio
        </motion.p>

        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-extrabold tracking-tight text-slate-800 md:text-7xl lg:text-[5rem] lg:leading-[1.1]"
        >
          {profile.role}
        </motion.h1>

        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group flex h-12 items-center justify-center rounded-full bg-slate-400 px-8 text-sm font-semibold text-white transition-all hover:bg-slate-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-400/20 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View Projects
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="flex h-12 items-center justify-center rounded-full border border-[#EFEBE9] bg-white px-8 text-sm font-semibold text-slate-800 transition-all hover:border-violet-300 hover:bg-[#F8F5F2] hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Next.js
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B2C2B3]"></span> TypeScript
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-300"></span> Supabase
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}