import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const socialLinks = [
  { name: "Email", url: "mailto:faridakbar.f@gmail.com", icon: Mail, primary: true },
  { name: "GitHub", url: "https://github.com/Farid275", icon: FaGithub },
];

export default function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <div className="mx-auto max-w-7xl px-8">
        <MotionCard isInteractive={false} className="flex flex-col items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-soft)] px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="mb-8 max-w-2xl text-4xl font-black tracking-tight text-[var(--color-primary)] md:text-5xl">
            Let’s build something structured and useful.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isPrimary = link.primary;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isPrimary
                      ? "bg-[var(--color-dark)] text-white hover:bg-neutral-800"
                      : "border border-[var(--color-border)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-muted)] hover:bg-[var(--color-soft)]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </MotionCard>
      </div>
    </AnimatedSection>
  );
}
