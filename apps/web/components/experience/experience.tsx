import { ExperienceItem } from "./experience-item";

const experiences = [
  {
    period: "2026 — PRESENT",
    role: "Programmer Analyst",
    company: "Cognizant",
    description:
      "Contributing to software development and web development projects while applying full-stack engineering practices in a professional environment. Working with modern development workflows and strengthening practical software engineering skills.",
    technologies: [
      "Full-Stack",
      "Web Development",
      "APIs",
      "Software Engineering",
    ],
    current: true,
  },
  {
    period: "INTERNSHIP",
    role: "Java Full-Stack Developer",
    company: "Cognizant",
    description:
      "Worked on full-stack development using Java and React, gaining hands-on experience in building web applications and understanding how frontend and backend components work together in a professional development environment.",
    technologies: [
      "Java",
      "React",
      "Full-Stack",
      "Web Development",
      "APIs",
    ],
    current: false,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-accent/[0.025]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10%]
          bottom-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-accent/[0.02]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[var(--content-width)]
          px-[var(--page-padding)]
          py-24
          sm:py-28
          lg:py-36
        "
      >
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          {/* Section identifier */}
          <div className="flex items-start">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,210,225,0.8)]" />
                </span>

                <span>EXPERIENCE / 04</span>
              </div>

              <div className="mt-6 hidden h-24 w-px bg-gradient-to-b from-accent/60 to-transparent lg:block" />

              <div className="mt-5 hidden font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle lg:block">
                CAREER / SYSTEM
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="min-w-0">
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground-subtle">
              PROFESSIONAL / 001
            </div>

            <h2
              className="
                mt-5
                max-w-5xl
                text-[clamp(3rem,8vw,7rem)]
                font-medium
                uppercase
                leading-[0.84]
                tracking-[-0.065em]
                text-foreground
              "
            >
              PROFESSIONAL
              <br />
              <span className="text-foreground-muted">
                EXPERIENCE.
              </span>
            </h2>

            <div className="mt-8 flex items-start gap-4 sm:mt-10">
              <div className="mt-2 h-px w-8 shrink-0 bg-accent sm:w-12" />

              <p className="max-w-2xl text-sm leading-6 text-foreground-muted sm:text-base sm:leading-7">
                Experience across software development, web development, and
                practical engineering environments.
              </p>
            </div>

            {/* System status */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:text-[8px]">
              <span>ENGINEERING / ACTIVE</span>

              <span className="text-border">|</span>

              <span>FULL-STACK / DEVELOPMENT</span>

              <span className="text-border">|</span>

              <span>BUILD / LEARN / ITERATE</span>
            </div>
          </div>
        </div>

        {/* Experience system */}
        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          {/* Continuous timeline signal */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-[13px]
              top-0
              hidden
              w-px
              overflow-hidden
              bg-border-subtle
              lg:block
            "
          >
            <div
              className="
                experience-signal
                absolute
                left-0
                top-[-20%]
                h-[22%]
                w-px
                bg-gradient-to-b
                from-transparent
                via-accent
                to-transparent
                shadow-[0_0_14px_rgba(0,210,225,0.8)]
              "
            />
          </div>

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                {...experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes experience-signal {
          0% {
            transform: translateY(-120%);
          }

          100% {
            transform: translateY(560%);
          }
        }

        .experience-signal {
          animation: experience-signal 7s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}