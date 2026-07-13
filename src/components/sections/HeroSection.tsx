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
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent">
      <FloatingBackground />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-28">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="relative z-10 max-w-4xl"
        >
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-block rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B] shadow-sm ring-1 ring-[#E5E7EB]"
          >
            Developer Portfolio
          </motion.p>

          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-extrabold tracking-tight text-[#1E293B] md:text-7xl lg:text-[5rem] lg:leading-[1.1]"
          >
            {profile.role}
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[#64748B] md:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group flex h-12 items-center justify-center rounded-full bg-[#334155] px-8 text-sm font-bold text-[#FFFFFF] transition-all hover:bg-[#475569] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#334155]/20 focus:outline-none focus:ring-2 focus:ring-[#334155] focus:ring-offset-2"
            >
              Get in Touch
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#projects"
              className="flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-8 text-sm font-bold text-[#1E293B] transition-all hover:border-[#CBD5E1] hover:bg-[#F8F5F2] focus:outline-none focus:ring-2 focus:ring-[#334155] focus:ring-offset-2"
            >
              View Work
            </a>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mt-16 flex flex-wrap items-center gap-6 text-sm font-medium text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#334155]"></span> Next.js
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#334155]"></span> TypeScript
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#334155]"></span> Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#334155]"></span> Supabase
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}