
import { AboutNeonMachine } from "./about-neon-machine";

export function AboutIntro() {
  return (
    <div className="relative min-h-[760px] max-w-6xl overflow-hidden">
      <AboutNeonMachine />

      {/* Technical graphics */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[10%] h-[150px] w-px bg-accent/15" />

        <div className="absolute right-[4%] top-[17%] h-[190px] w-px bg-accent/15" />

        <div className="absolute left-[6%] top-[6%] font-mono text-[7px] uppercase tracking-[0.22em] text-foreground-subtle">
          SYS / ARCHITECTURE
        </div>

        <div className="absolute right-[4%] top-[12%] font-mono text-[7px] uppercase tracking-[0.22em] text-foreground-subtle">
          NODE / 03
        </div>

        <div className="absolute right-[4%] top-[48%] font-mono text-[7px] uppercase tracking-[0.22em] text-accent/50">
          SIGNAL / ACTIVE
        </div>
      </div>

      <div className="relative z-10">
        {/* Section identifier */}
        <div className="about-reveal about-delay-1 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(0,156,173,0.9)]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
            PROFILE / 03
          </span>

          <span className="h-px w-16 bg-accent/25" />
        </div>

        {/* Heading */}
        <h2 className="about-reveal about-delay-2 relative z-20 mt-10 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em] text-foreground">
          <span className="block">Engineer.</span>
          <span className="block">Builder.</span>
          <span className="block text-foreground-muted">Always</span>
          <span className="block text-foreground-muted">Exploring.</span>
        </h2>

        {/* Description */}
        <div className="about-reveal about-delay-3 relative z-20 mt-12 grid gap-8 lg:grid-cols-[0.25fr_0.75fr] lg:items-start">
          <div className="hidden lg:block">
            <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground-subtle">
              SYSTEM STATUS
            </div>

            <div className="mt-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_rgba(0,156,173,0.8)]" />
              BUILDING / LEARNING
            </div>
          </div>

          <div className="relative max-w-3xl border-l border-accent/60 pl-6 sm:pl-8">
            <p className="text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
              I&apos;m a Computer Science Engineering student and software
              developer focused on building thoughtful, scalable software.
              My work spans full-stack development, AI and machine learning,
              and cloud technologies, with a constant focus on learning how
              systems can be built better.
            </p>

            <div className="absolute -left-px top-0 h-14 w-px bg-accent shadow-[0_0_12px_rgba(0,156,173,0.7)]" />
          </div>
        </div>

        {/* Metadata */}
        <div className="about-reveal about-delay-4 mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[7px] uppercase tracking-[0.2em] text-foreground-subtle sm:text-[8px]">
          <span>ENGINEERING / SOFTWARE</span>
          <span className="h-3 w-px bg-border-subtle" />
          <span>AI / ML / CLOUD</span>
          <span className="h-3 w-px bg-border-subtle" />
          <span>BUILD / LEARN / ITERATE</span>
        </div>

        {/* Bottom marker */}
        <div className="about-reveal about-delay-4 mt-16 flex items-center justify-between border-t border-border-subtle pt-4 font-mono text-[7px] uppercase tracking-[0.2em] text-foreground-subtle">
          <span>ABOUT.SYSTEM / 03</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>
    </div>
  );
}
