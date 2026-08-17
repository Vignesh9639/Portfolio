type ExperienceItemProps = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current?: boolean;
  index: number;
};

export function ExperienceItem({
  period,
  role,
  company,
  description,
  technologies,
  current = false,
  index,
}: ExperienceItemProps) {
  const sequence = String(index + 1).padStart(2, "0");

  return (
    <article
      className="
        experience-item
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border-subtle
        bg-[#090d0e]/80
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-accent/40
        hover:bg-[#0b1112]
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]
      "
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-accent/[0.045]
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Technical corner */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-20
          bg-gradient-to-r
          from-accent
          to-transparent
          opacity-40
          transition-all
          duration-500
          group-hover:w-40
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 grid lg:grid-cols-[0.23fr_0.77fr]">
        {/* Metadata column */}
        <div
          className="
            border-b
            border-border-subtle
            p-6
            sm:p-8
            lg:border-b-0
            lg:border-r
            lg:p-10
          "
        >
          <div className="flex items-center justify-between lg:block">
            <div className="flex items-center gap-3">
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${
                    current
                      ? "bg-accent shadow-[0_0_12px_rgba(0,210,225,0.9)]"
                      : "bg-foreground-subtle"
                  }
                `}
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent sm:text-[9px]">
                {current ? "CURRENT" : "EXPERIENCE"}
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle lg:mt-5 lg:block">
              {sequence} / 03
            </span>
          </div>

          <div className="mt-8 hidden h-px w-12 bg-border-subtle lg:block" />

          <div className="mt-8">
            <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
              PERIOD
            </div>

            <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-muted">
              {period}
            </div>
          </div>

          <div className="mt-7 hidden lg:block">
            <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
              SYSTEM
            </div>

            <div className="mt-2 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-foreground-subtle">
              <span
                className={`h-1 w-1 rounded-full ${
                  current ? "bg-accent" : "bg-foreground-subtle"
                }`}
              />

              {current ? "ACTIVE" : "ARCHIVED"}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground-subtle">
                ROLE / {sequence}
              </div>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-medium
                  uppercase
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {role}
              </h3>

              <div className="mt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                {company}
              </div>
            </div>

            {/* Status */}
            <div
              className={`
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-1.5
                font-mono
                text-[7px]
                uppercase
                tracking-[0.16em]
                ${
                  current
                    ? "border-accent/40 bg-accent/[0.045] text-accent"
                    : "border-border text-foreground-subtle"
                }
              `}
            >
              <span
                className={`
                  h-1
                  w-1
                  rounded-full
                  ${
                    current
                      ? "animate-pulse bg-accent shadow-[0_0_8px_rgba(0,210,225,0.8)]"
                      : "bg-foreground-subtle"
                  }
                `}
              />

              {current ? "ACTIVE" : "COMPLETED"}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-border-subtle" />

          {/* Description */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-12">
            <div>
              <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                CONTRIBUTION
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                TECHNOLOGY / STACK
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-surface/[0.35]
                      px-3
                      py-2
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-foreground-muted
                      transition-all
                      duration-300
                      group-hover:border-accent/25
                      group-hover:text-foreground
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom technical status */}
          <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-5">
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
              PROFILE / {sequence}
            </span>

            <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
              <span
                className={`
                  h-1
                  w-1
                  rounded-full
                  ${
                    current
                      ? "bg-accent shadow-[0_0_8px_rgba(0,210,225,0.8)]"
                      : "bg-foreground-subtle"
                  }
                `}
              />

              {current ? "SYSTEM ONLINE" : "SYSTEM ARCHIVED"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}