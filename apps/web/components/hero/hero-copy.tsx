export function HeroCopy() {
  return (
    <div className="relative z-10 max-w-4xl">
      <div className="mb-6 flex items-start gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-accent sm:mb-8 sm:items-center sm:gap-4 sm:text-[10px] sm:tracking-[0.2em]">
        <span>SYSTEM / 01</span>
        <span className="mt-2 h-px w-6 shrink-0 bg-accent/60 sm:mt-0 sm:w-10" />
        <span className="max-w-[150px] leading-5 sm:max-w-none sm:leading-normal">
          PROGRAMMER ANALYST @ COGNIZANT
        </span>
      </div>

      <h1 className="max-w-full text-[clamp(2.35rem,13vw,3.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] text-foreground sm:text-[clamp(4rem,9vw,5.5rem)] lg:max-w-4xl lg:text-[clamp(3.25rem,6.5vw,6.75rem)] lg:leading-[0.88]">
        I build modern
        <br />
        software
        <br />
        experiences.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-foreground-muted sm:mt-8 sm:text-lg lg:text-base">
        I build full-stack applications with modern technologies and
        intelligent features, while continuously exploring what&apos;s next in
        software engineering.
      </p>

      <a
        href="#work"
        className="mt-6 inline-flex items-center gap-3 border border-border bg-surface px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent sm:mt-8 sm:gap-4 sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.16em]"
      >
        Explore work
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}