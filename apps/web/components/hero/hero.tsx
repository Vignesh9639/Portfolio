import { HeroCopy } from "./hero-copy";
import { HeroSchematic } from "./hero-schematic";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center"
    >
      <HeroSchematic />

      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,156,173,0.055),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[var(--content-width)] grid-cols-1 items-center gap-12 px-6 py-20 sm:gap-16 sm:px-[var(--page-padding)] sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-24">
        <HeroCopy />

        <div className="flex justify-start lg:justify-end">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="group absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-foreground-subtle transition-colors duration-300 hover:text-accent sm:flex"
      >
        <span>SCROLL / EXPLORE</span>

        <span className="relative h-8 w-px overflow-hidden bg-border">
          <span className="absolute left-0 top-0 h-1/2 w-full bg-accent hero-scroll-line" />
        </span>
      </a>
    </section>
  );
}