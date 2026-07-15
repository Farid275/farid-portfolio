"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    
    const contactSection = document.querySelector("#contact");
    if (contactSection) observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 flex h-20 items-center transition-all duration-300 ${
        scrolled ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md" : "border-b border-[var(--color-border)] bg-[var(--color-surface)]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
        <a href="#home" className="text-2xl font-black text-[var(--color-primary)]">
          Farid.dev
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-[var(--color-soft)] ${
                  isActive
                    ? "rounded-none border-b-2 border-[var(--color-primary)] px-0 py-1 font-bold text-[var(--color-primary)]"
                    : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-[var(--color-dark)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 md:inline-block"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
