import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual-fade group relative w-full max-w-[520px]">
      {/* Outer technical coordinates */}
      <div className="pointer-events-none absolute -inset-3 hidden sm:block">
        <div className="absolute left-0 top-0 h-px w-12 bg-accent/30" />
        <div className="absolute left-0 top-0 h-12 w-px bg-accent/30" />

        <div className="absolute bottom-0 right-0 h-px w-12 bg-border" />
        <div className="absolute bottom-0 right-0 h-12 w-px bg-border" />
      </div>

      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-white/[0.10] bg-[#0d1213] shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
        <Image
          src="/images/vignesh-hero.jpg"
          alt="Vignesh Reddy"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 520px"
          className="object-cover object-[58%_center] grayscale contrast-[1.08] brightness-[0.88] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
        />

        {/* Cinematic overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        {/* Accent atmosphere */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(0,156,173,0.12),transparent_35%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Moving scan */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px overflow-hidden bg-accent/10">
          <div className="hero-photo-scan h-full w-1/4 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        </div>

        {/* Technical frame */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Top-left */}
          <div className="absolute left-4 top-4 h-2 w-2 bg-accent sm:left-6 sm:top-6" />

          <div className="absolute left-4 top-4 h-px w-20 bg-accent/60 sm:left-6 sm:top-6 sm:w-32" />

          <div className="absolute left-4 top-4 h-20 w-px bg-accent/60 sm:left-6 sm:top-6 sm:h-32" />

          {/* Bottom-right */}
          <div className="absolute bottom-4 right-4 h-2 w-2 border border-accent sm:bottom-6 sm:right-6" />

          <div className="absolute bottom-4 right-4 h-px w-20 bg-white/20 sm:bottom-6 sm:right-6 sm:w-32" />

          <div className="absolute bottom-4 right-4 h-20 w-px bg-white/20 sm:bottom-6 sm:right-6 sm:h-32" />

          {/* Crosshair */}
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 opacity-40 transition-opacity duration-500 group-hover:opacity-80">
            <span className="absolute left-1/2 top-0 h-full w-px bg-accent" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-accent" />
          </div>

          {/* System label */}
          <div className="absolute bottom-5 left-5 font-mono text-[7px] uppercase tracking-[0.16em] text-white/65 sm:bottom-7 sm:left-7 sm:text-[8px] lg:text-[9px] lg:tracking-[0.18em]">
            VISUAL / 01
          </div>

          {/* Live indicator */}
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 backdrop-blur-sm sm:right-7 sm:top-7">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(0,156,173,0.7)]" />

            <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/60 sm:text-[7px]">
              SYSTEM ONLINE
            </span>
          </div>

          {/* Coordinates */}
          <div className="absolute bottom-5 right-5 hidden font-mono text-[6px] tracking-[0.12em] text-white/45 sm:bottom-7 sm:right-7 sm:block sm:text-[7px]">
            13.0827° N / 80.2707° E
          </div>
        </div>

        {/* Glass edge */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-[24px] border border-white/[0.06] transition-colors duration-500 group-hover:border-accent/30" />
      </div>

      {/* Caption */}
      <div className="mt-3 flex items-center justify-between px-1 font-mono text-[7px] uppercase tracking-[0.16em] text-foreground-subtle sm:text-[8px]">
        <span>PROFILE / ENGINEERING</span>

        <span className="flex items-center gap-2">
          <span className="h-px w-5 bg-border" />
          SYSTEM//V
        </span>
      </div>
    </div>
  );
}