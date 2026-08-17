export function HeroSchematic() {
  return (
    <>
      <style>{`
        @keyframes hero-node-pulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        @keyframes hero-line-flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(500%);
            opacity: 0;
          }
        }

        @keyframes hero-fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-photo-scan {
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(600%);
            opacity: 0;
          }
        }

        @keyframes hero-scroll {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(250%);
            opacity: 0;
          }
        }

        .hero-node {
          animation: hero-node-pulse 2.8s ease-in-out infinite;
        }

        .hero-line-flow {
          animation: hero-line-flow 4s ease-in-out infinite;
        }

        .hero-fade {
          animation: hero-fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-delay-1 {
          animation-delay: 100ms;
        }

        .hero-delay-2 {
          animation-delay: 220ms;
        }

        .hero-delay-3 {
          animation-delay: 380ms;
        }

        .hero-delay-4 {
          animation-delay: 520ms;
        }

        .hero-delay-5 {
          animation-delay: 680ms;
        }

        .hero-visual-fade {
          animation: hero-fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms both;
        }

        .hero-photo-scan {
          animation: hero-photo-scan 5s ease-in-out infinite;
        }

        .hero-scroll-line {
          animation: hero-scroll 2.4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-node,
          .hero-line-flow,
          .hero-fade,
          .hero-visual-fade,
          .hero-photo-scan,
          .hero-scroll-line {
            animation: none !important;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Upper reference line */}
        <div className="absolute left-0 top-[31%] h-px w-[24%] bg-border-subtle sm:top-[28%] sm:w-[30%] lg:top-[24%] lg:w-[36%]" />

        {/* Moving signal on upper line */}
        <div className="absolute left-0 top-[31%] h-px w-16 overflow-hidden sm:top-[28%] lg:top-[24%]">
          <div className="hero-line-flow h-full w-1/2 bg-accent/60" />
        </div>

        {/* Primary node */}
        <div className="absolute left-[48%] top-[31%] sm:left-[42%] sm:top-[28%] lg:left-[38%] lg:top-[24%]">
          <span className="hero-node block h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />

          <span className="absolute left-3 top-0 h-px w-10 bg-accent/40 sm:left-4 sm:w-12 lg:w-16" />
        </div>

        {/* Vertical structural line */}
        <div className="absolute right-[18%] top-[39%] h-[32%] w-px bg-border-subtle sm:right-[25%] sm:top-[25%] sm:h-[40%] lg:right-[39%] lg:top-[16%] lg:h-[46%]" />

        {/* Moving vertical signal */}
        <div className="absolute right-[18%] top-[39%] h-[32%] w-px overflow-hidden sm:right-[25%] sm:top-[25%] sm:h-[40%] lg:right-[39%] lg:top-[16%] lg:h-[46%]">
          <div className="hero-line-flow h-1/4 w-full bg-accent/40" />
        </div>

        {/* Secondary node */}
        <div className="absolute right-[18%] top-[71%] sm:right-[25%] sm:top-[65%] lg:right-[39%] lg:top-[62%]">
          <span className="hero-node block h-1.5 w-1.5 border border-accent sm:h-1.5 sm:w-1.5" />
        </div>

        {/* Technical label */}
        <div className="absolute right-4 top-[34%] hidden font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:block sm:right-6 sm:top-[29%] sm:text-[8px] sm:tracking-[0.2em] lg:right-8 lg:top-[27%]">
          NODE / 01
        </div>

        {/* Small reference marks */}
        <div className="absolute left-[7%] top-[42%] hidden gap-1 sm:flex">
          <span className="h-1 w-1 bg-border-subtle" />
          <span className="h-1 w-1 bg-border-subtle" />
          <span className="h-1 w-1 bg-accent/40" />
        </div>

        <div className="absolute right-[7%] top-[52%] hidden gap-1 sm:flex">
          <span className="h-1 w-1 bg-accent/40" />
          <span className="h-1 w-1 bg-border-subtle" />
          <span className="h-1 w-1 bg-border-subtle" />
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
    </>
  );
}