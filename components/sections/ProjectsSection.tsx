import AnimatedSection from "../AnimatedSection";
import MotionCard from "../MotionCard";
import { ArrowUpRight, Hammer } from "lucide-react";

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8">
        <h2 className="border-b border-[var(--color-border)] pb-2 text-3xl font-bold text-[var(--color-primary)]">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <MotionCard className="group flex cursor-pointer flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-md bg-[var(--color-soft)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPHpeHWYCmAt2RB3Ui8A7u1XHz3cBFOaqAk__8iAonfQdNoMkHHMud5hqUGXC7XiJmAsf9wYjpX08WWikecIV0iOrh7_e1eH0zDALgfQYriZObmZokQn_4njDujbMT2IsfZhjv_OH9q4vsj0qMfOAUqNtcC94aXQcoOB8We0sk8vxERwxfCma7JDKqvzKn_fwtmW8lzxsouvssYdJvQZnq2JGSTPXIxhHaQuDdoiA69kUJKxcW0Hz3rZ1oaf9-AO4OjH4Z0bWoyXf"
                alt="EduManage"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                EduManage
              </h3>
              <ArrowUpRight className="h-6 w-6 text-[var(--color-secondary)] transition-colors group-hover:text-[var(--color-primary)]" />
            </div>
            <p className="mb-4 flex-grow text-[var(--color-secondary)]">
              A comprehensive course management system designed to organize academic data through a structured, intuitive dashboard interface. Built with React and PostgreSQL.
            </p>
            <div className="flex gap-2">
              <span className="inline-block bg-[var(--color-tag)] px-3 py-1 text-sm text-[var(--color-secondary)] rounded-md">React</span>
              <span className="inline-block bg-[var(--color-tag)] px-3 py-1 text-sm text-[var(--color-secondary)] rounded-md">Node.js</span>
              <span className="inline-block bg-[var(--color-tag)] px-3 py-1 text-sm text-[var(--color-secondary)] rounded-md">PostgreSQL</span>
            </div>
          </MotionCard>

          <MotionCard className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-soft)] p-12 text-center opacity-80 transition-opacity hover:opacity-100">
            <Hammer className="mb-4 h-10 w-10 text-[var(--color-muted)]" />
            <h3 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
              Future Project
            </h3>
            <p className="max-w-sm text-[var(--color-secondary)]">
              A new project case study will be added here in the future. Currently in development phase.
            </p>
          </MotionCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
