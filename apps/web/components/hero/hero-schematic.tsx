export function HeroSchematic() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Upper reference line */}
      <div className="absolute left-0 top-[31%] h-px w-[24%] bg-border-subtle sm:top-[28%] sm:w-[30%] lg:top-[24%] lg:w-[36%]" />

      {/* Primary node */}
      <div className="absolute left-[48%] top-[31%] sm:left-[42%] sm:top-[28%] lg:left-[38%] lg:top-[24%]">
        <span className="block h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
        <span className="absolute left-3 top-0 h-px w-10 bg-accent/40 sm:left-4 sm:w-12 lg:w-16" />
      </div>

      {/* Vertical structural line */}
      <div className="absolute right-[18%] top-[39%] h-[32%] w-px bg-border-subtle sm:right-[25%] sm:top-[25%] sm:h-[40%] lg:right-[39%] lg:top-[16%] lg:h-[46%]" />

      {/* Secondary node */}
      <div className="absolute right-[18%] top-[71%] sm:right-[25%] sm:top-[65%] lg:right-[39%] lg:top-[62%]">
        <span className="block h-1.5 w-1.5 border border-accent sm:h-1.5 sm:w-1.5" />
      </div>

      {/* Technical label */}
      <div className="absolute right-4 top-[34%] hidden font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:block sm:right-6 sm:top-[29%] sm:text-[8px] sm:tracking-[0.2em] lg:right-8 lg:top-[27%]">
        NODE / 01
      </div>

      {/* System identifier */}
      <div className="absolute bottom-6 left-4 font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:bottom-8 sm:left-6 sm:text-[8px] sm:tracking-[0.2em] lg:bottom-10 lg:left-8">
        SYSTEM//V — 001
      </div>

      {/* Coordinate marker */}
      <div className="absolute bottom-6 right-4 hidden font-mono text-[7px] tracking-[0.12em] text-foreground-subtle sm:block sm:bottom-8 sm:right-6 sm:text-[8px] sm:tracking-[0.15em] lg:bottom-10 lg:right-8">
        13.0827° N / 80.2707° E
      </div>
    </div>
  );
}