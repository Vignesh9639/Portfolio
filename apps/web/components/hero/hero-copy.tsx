export function HeroCopy() {
  return (
    <div className="relative z-10 max-w-4xl">
      {/* System identity */}
      <div className="hero-fade hero-delay-1 mb-6 flex items-start gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-accent sm:mb-8 sm:items-center sm:gap-4 sm:text-[10px] sm:tracking-[0.2em]">
        <span>SYSTEM / 01</span>

        <span className="mt-2 h-px w-6 shrink-0 bg-accent/60 sm:mt-0 sm:w-10" />

        <span className="max-w-[180px] leading-5 sm:max-w-none sm:leading-normal">
          PROGRAMMER ANALYST @ COGNIZANT
        </span>
      </div>

      {/* Main heading */}
      <h1 className="hero-fade hero-delay-2 max-w-full text-[clamp(2.35rem,13vw,3.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] text-foreground sm:text-[clamp(4rem,9vw,5.5rem)] lg:max-w-4xl lg:text-[clamp(3.25rem,6.5vw,6.75rem)] lg:leading-[0.88]">
        I build modern
        <br />
        <span className="relative inline-block">
          software
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
          />
        </span>
        <br />
        experiences.
      </h1>

      {/* Description */}
      <p className="hero-fade hero-delay-3 mt-6 max-w-xl text-base leading-7 text-foreground-muted sm:mt-8 sm:text-lg lg:text-base">
        I build full-stack applications with modern technologies and
        intelligent features, while continuously exploring what&apos;s next in
        software engineering.
      </p>

      {/* Actions */}
      <div className="hero-fade hero-delay-4 mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
        <a
          href="#work"
          className="group inline-flex items-center gap-4 rounded-full border border-accent/70 bg-accent/[0.06] px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent/[0.12] hover:shadow-[0_0_30px_rgba(0,156,173,0.12)] sm:px-6 sm:py-4 sm:text-xs"
        >
          Explore work

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface/40 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-muted transition-all duration-300 hover:border-accent/50 hover:text-accent sm:px-6 sm:py-4 sm:text-xs"
        >
          Contact

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
      </div>

      {/* System metadata */}
      <div className="hero-fade hero-delay-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[7px] uppercase tracking-[0.16em] text-foreground-subtle sm:mt-10 sm:text-[8px]">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(0,156,173,0.6)]" />
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <span className="hidden h-3 w-px bg-border sm:block" />

        <span>FULL-STACK / AI / CLOUD</span>
      </div>
    </div>
  );
}