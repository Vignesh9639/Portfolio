import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden border border-border bg-surface">
      <Image
        src="/images/vignesh-hero.jpg"
        alt="Vignesh Reddy"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 520px"
        className="object-cover object-[58%_center] grayscale contrast-[1.08] brightness-[0.9]"
      />

      {/* Cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

      {/* Technical frame */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left */}
        <div className="absolute left-3 top-3 h-1.5 w-1.5 bg-accent sm:left-4 sm:top-4 sm:h-2 sm:w-2 lg:left-6 lg:top-6" />

        <div className="absolute left-3 top-3 h-px w-16 bg-accent/60 sm:left-4 sm:top-4 sm:w-24 lg:left-6 lg:top-6 lg:w-32" />

        <div className="absolute left-3 top-3 h-16 w-px bg-accent/60 sm:left-4 sm:top-4 sm:h-24 lg:left-6 lg:top-6 lg:h-32" />

        {/* Bottom-right */}
        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 border border-accent sm:bottom-4 sm:right-4 sm:h-2 sm:w-2 lg:bottom-6 lg:right-6" />

        <div className="absolute bottom-3 right-3 h-px w-16 bg-border sm:bottom-4 sm:right-4 sm:w-24 lg:bottom-6 lg:right-6 lg:w-32" />

        <div className="absolute bottom-3 right-3 h-16 w-px bg-border sm:bottom-4 sm:right-4 sm:h-24 lg:bottom-6 lg:right-6 lg:h-32" />

        {/* System label */}
        <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/70 sm:bottom-6 sm:left-6 sm:text-[8px] lg:bottom-8 lg:left-8 lg:text-[9px] lg:tracking-[0.18em]">
          VISUAL / 01
        </div>
      </div>
    </div>
  );
}