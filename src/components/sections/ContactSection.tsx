import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
          Contact
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let’s connect
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Feel free to reach out for project discussion, collaboration, or
          portfolio review.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-4">
          <a
            href="mailto:faridakbar.f@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-100"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Farid275"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}