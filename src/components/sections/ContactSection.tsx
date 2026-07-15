import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function ContactSection() {
  return (
    <section id="contact" className="w-full overflow-hidden bg-[#FAF9F6] text-[#181818]">
      <AnimatedSection className="relative mx-auto max-w-6xl px-6 py-28 text-center z-10">
        <p className="mb-4 inline-block rounded-full bg-[#F1F0EC] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#181818] ring-1 ring-[#E2E0DA]">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-[#181818] md:text-5xl lg:text-6xl">
          Let’s build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4A4A]">
          Feel free to reach out for project discussion, collaboration, or
          portfolio review.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
          <a
            href="mailto:faridakbar.f@gmail.com"
            className="flex h-12 items-center justify-center rounded-full bg-[#252525] px-8 text-sm font-bold text-[#FFFFFF] transition-all hover:bg-[#4B5563] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#252525]/20"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Farid275"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-[#E2E0DA] bg-[#FFFFFF] px-8 text-sm font-bold text-[#181818] transition-all hover:border-[#4B5563] hover:bg-[#FAF9F6]"
          >
            GitHub
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}