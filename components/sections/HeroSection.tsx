"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, itemReveal, itemRevealReduced } from "../AnimatedSection";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? itemRevealReduced : itemReveal;
  const containerVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } }
  } : staggerContainer;

  return (
    <motion.section 
      id="home" 
      className="pb-12 pt-32"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <motion.h1
            className="text-4xl font-black tracking-tight text-[var(--color-primary)] md:text-6xl lg:text-7xl"
            variants={variants}
          >
            Software Engineering &<br />
            Full-Stack Developer Portfolio
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-[var(--color-secondary)] md:text-xl"
            variants={variants}
          >
            I build practical web applications with clean structure, database integration, and user-focused features.
          </motion.p>
          <motion.div
            className="mt-4 flex gap-4"
            variants={variants}
          >
            <a
              href="#projects"
              className="inline-flex rounded-lg bg-[var(--color-dark)] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-md"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-lg border border-[var(--color-border)] bg-transparent px-6 py-3 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-muted)] hover:bg-[var(--color-soft)] hover:shadow-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
        <motion.div
          className="relative lg:col-span-5"
          variants={variants}
        >
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm">
            <Image
              src="/images/profile-portrait.png"
              alt="Portrait"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-black"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-black">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
