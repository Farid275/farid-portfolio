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
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600"
        >
          Developer Portfolio
        </motion.p>

        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl"
        >
          {profile.role}
        </motion.h1>

        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-amber-400"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600"
        >
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Supabase</span>
        </motion.div>
      </motion.div>
    </section>
  );
}