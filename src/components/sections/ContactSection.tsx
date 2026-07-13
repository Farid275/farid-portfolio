import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-slate-800 px-6 py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="relative mx-auto max-w-6xl text-center z-10">
        <p className="mb-4 inline-block rounded-full bg-slate-700/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-300 ring-1 ring-white/10">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Let’s build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Feel free to reach out for project discussion, collaboration, or
          portfolio review.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
          <a
            href="mailto:faridakbar.f@gmail.com"
            className="flex h-12 items-center justify-center rounded-full bg-slate-400 px-8 text-sm font-bold text-white transition-all hover:bg-slate-500 hover:shadow-lg hover:shadow-slate-400/20"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Farid275"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 text-sm font-bold text-white transition-all hover:border-violet-300 hover:text-violet-300 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}