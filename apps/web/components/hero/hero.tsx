import { HeroCopy } from "./hero-copy";
import { HeroSchematic } from "./hero-schematic";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
      <HeroSchematic />

      <div className="relative z-10 mx-auto grid w-full max-w-[var(--content-width)] grid-cols-1 items-center gap-12 px-5 py-16 sm:gap-16 sm:px-[var(--page-padding)] sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-24">
        <HeroCopy />

        <div className="flex justify-start lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}