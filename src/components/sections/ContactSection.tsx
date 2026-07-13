import { AnimatedSection } from "@/components/animation/AnimatedSection";

export function ContactSection() {
  return (
    <section id="contact" className="w-full overflow-hidden bg-[#FCFBFA] text-[#1E293B]">
      <AnimatedSection className="relative mx-auto max-w-6xl px-6 py-28 text-center z-10">
        <p className="mb-4 inline-block rounded-full bg-[#F3F4F6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1E293B] ring-1 ring-[#E5E7EB]">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl lg:text-6xl">
          Let’s build something together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#64748B]">
          Feel free to reach out for project discussion, collaboration, or
          portfolio review.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
          <a
            href="mailto:faridakbar.f@gmail.com"
            className="flex h-12 items-center justify-center rounded-full bg-[#334155] px-8 text-sm font-bold text-[#FFFFFF] transition-all hover:bg-[#475569] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#334155]/20"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Farid275"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-8 text-sm font-bold text-[#1E293B] transition-all hover:border-[#CBD5E1] hover:bg-[#F8F5F2]"
          >
            GitHub
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}