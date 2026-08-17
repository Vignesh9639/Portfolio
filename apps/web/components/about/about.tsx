import { AboutDetails } from "./about-details";
import { AboutIntro } from "./about-intro";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-accent/[0.035] blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--content-width)] px-[var(--page-padding)] py-24 sm:py-28 lg:py-36">
        {/* About introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.22fr_1.78fr] lg:gap-16">
          {/* Reserved structural column */}
          <div className="hidden lg:block" />

          <AboutIntro />
        </div>

        {/* Profile system */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <AboutDetails />
        </div>
      </div>

      {/* Section entrance animation */}
      <style>{`
        @keyframes about-reveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-reveal {
          animation: about-reveal 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .about-delay-1 {
          animation-delay: 100ms;
        }

        .about-delay-2 {
          animation-delay: 220ms;
        }

        .about-delay-3 {
          animation-delay: 360ms;
        }

        .about-delay-4 {
          animation-delay: 520ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}