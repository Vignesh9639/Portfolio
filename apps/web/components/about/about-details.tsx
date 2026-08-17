const details = [
  {
    index: "01",
    label: "CURRENT",
    title: "PROGRAMMER ANALYST",
    description:
      "Currently contributing to software development at Cognizant while continuing to strengthen my engineering fundamentals.",
    status: "ACTIVE",
  },
  {
    index: "02",
    label: "FOCUS",
    title: "FULL-STACK + AI",
    description:
      "Building modern web applications while exploring intelligent systems, machine learning, and AI-powered product experiences.",
    status: "BUILD",
  },
];

const toolkit = [
  "PYTHON",
  "JAVA",
  "SQL",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "CLOUD",
  "APIs",
  "ARCHITECTURE",
];

export function AboutDetails() {
  return (
    <div className="about-reveal about-delay-4">
      {/* Main profile panels */}
      <div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle lg:grid-cols-2">
        {details.map((detail) => (
          <article
            key={detail.index}
            className="group relative min-h-[300px] overflow-hidden bg-background p-7 transition-all duration-500 hover:bg-surface sm:p-9 lg:min-h-[330px] lg:p-10"
          >
            {/* Hover glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/[0.045] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Top accent */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-12 bg-accent transition-all duration-500 group-hover:w-full"
            />

            {/* Corner */}
            <div
              aria-hidden="true"
              className="absolute right-7 top-7 sm:right-9 sm:top-9"
            >
              <div className="relative h-5 w-5">
                <span className="absolute right-0 top-0 h-px w-5 bg-border transition-colors duration-300 group-hover:bg-accent" />
                <span className="absolute right-0 top-0 h-5 w-px bg-border transition-colors duration-300 group-hover:bg-accent" />
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] sm:text-[9px]">
              <span className="text-accent">
                {detail.label} / {detail.index}
              </span>

              <span className="flex items-center gap-2 text-foreground-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {detail.status}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-20 max-w-xl sm:mt-24">
              <h3 className="text-[clamp(2rem,4vw,3.25rem)] font-medium uppercase leading-[0.9] tracking-[-0.045em] text-foreground transition-transform duration-500 group-hover:-translate-y-1">
                {detail.title}
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-6 text-foreground-muted sm:text-[15px] sm:leading-7">
                {detail.description}
              </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:bottom-8 sm:left-9 sm:right-9">
              <span>PROFILE / {detail.index}</span>

              <span className="opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                SYSTEM
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Toolkit */}
      <section className="relative overflow-hidden border-x border-b border-border-subtle bg-surface/40">
        <div className="grid lg:grid-cols-[0.45fr_1.55fr]">
          {/* Toolkit label */}
          <div className="border-b border-border-subtle p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] sm:text-[9px]">
              <span className="text-accent">TOOLKIT / 03</span>

              <span className="text-foreground-subtle">STACK</span>
            </div>

            <div className="mt-12 hidden h-px w-16 bg-accent/50 lg:block" />

            <p className="mt-5 max-w-xs text-xs leading-5 text-foreground-subtle">
              Technologies and engineering tools I use to turn ideas into
              working systems.
            </p>
          </div>

          {/* Technology grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {toolkit.map((technology, index) => (
              <div
                key={technology}
                className="group/tool relative flex min-h-[90px] items-center border-b border-r border-border-subtle px-5 transition-colors duration-300 hover:bg-background sm:min-h-[105px] sm:px-7"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-muted transition-colors duration-300 group-hover/tool:text-foreground sm:text-[10px]">
                  {technology}
                </span>

                <span className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-border transition-all duration-300 group-hover/tool:bg-accent group-hover/tool:shadow-[0_0_8px_rgba(0,156,173,0.6)]" />

                <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-300 group-hover/tool:w-full" />

                <span className="absolute right-0 top-0 h-0 w-px bg-accent transition-all duration-300 group-hover/tool:h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}