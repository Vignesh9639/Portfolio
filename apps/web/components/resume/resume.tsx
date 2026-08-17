import { CertificationCard } from "./certification-card";

const certifications = [
  {
    index: "01",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "15 AUG 2026",
    validUntil: "15 AUG 2029",
    credentialId: "d884bc3d2dce4c8590758dd98e94bc61",
    href: "/documents/aws-ai-practitioner.pdf",
  },
  {
    index: "02",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "16 AUG 2026",
    validUntil: "16 AUG 2029",
    credentialId: "f4d5b4546b0e4186a858ba8dce7bbc38",
    href: "/documents/aws-cloud-practitioner.pdf",
  },
];

export function Resume() {
  return (
    <section
      id="resume"
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
          right-[-12%]
          top-[15%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-accent/[0.025]
          blur-[140px]
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
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div className="flex items-start">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,210,225,0.8)]" />
                </span>

                <span>PROFILE / 05</span>
              </div>

              <div className="mt-6 hidden h-24 w-px bg-gradient-to-b from-accent/60 to-transparent lg:block" />

              <div className="mt-5 hidden font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle lg:block">
                DOCUMENT / SYSTEM
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground-subtle">
              PROFESSIONAL / 002
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
              RESUME
              <br />
              <span className="text-foreground-muted">
                + CERTIFICATIONS.
              </span>
            </h2>

            <div className="mt-8 flex items-start gap-4 sm:mt-10">
              <div className="mt-2 h-px w-8 shrink-0 bg-accent sm:w-12" />

              <p className="max-w-2xl text-sm leading-6 text-foreground-muted sm:text-base sm:leading-7">
                A snapshot of my engineering experience, technical stack, and
                professional certifications.
              </p>
            </div>
          </div>
        </div>

        {/* Resume */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="grid overflow-hidden border border-border-subtle lg:grid-cols-[1fr_0.42fr]">
            {/* Resume content */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div className="absolute left-0 top-0 h-px w-24 bg-accent/70" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                    DOCUMENT / 01
                  </p>

                  <h3 className="mt-5 text-4xl font-medium uppercase tracking-[-0.05em] text-foreground sm:text-5xl">
                    R VIGNESH REDDY
                  </h3>

                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-muted sm:text-[10px]">
                    PROGRAMMER ANALYST INTERN / COGNIZANT
                  </p>
                </div>

                <div className="hidden border border-accent/30 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-accent sm:block">
                  ACTIVE
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base">
                Computer Science Engineering student and software developer
                focused on scalable full-stack applications, microservices,
                AI-driven systems, and modern web technologies.
              </p>

              {/* Skill matrix */}
              <div className="mt-10 grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["LANGUAGES", "JAVA / PYTHON / SQL"],
                  ["FRONTEND", "REACT / VITE / TAILWIND"],
                  ["BACKEND", "SPRING BOOT / NODE.JS"],
                  ["ENGINEERING", "APIs / MICROSERVICES / DOCKER"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-background p-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                      {label}
                    </p>

                    <p className="mt-3 font-mono text-[9px] uppercase leading-5 tracking-[0.1em] text-foreground-muted">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/documents/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 border border-accent/50 bg-accent/[0.03] px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-accent/[0.08] hover:text-accent"
                >
                  View resume
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="/documents/resume.pdf"
                  download
                  className="inline-flex items-center gap-4 border border-border px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-muted transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  Download PDF
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Document metadata */}
            <div className="border-t border-border-subtle bg-surface/20 p-7 lg:border-l lg:border-t-0 lg:p-10">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
                SYSTEM METADATA
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                    ROLE
                  </p>
                  <p className="mt-2 text-sm uppercase text-foreground">
                    Programmer Analyst
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                    DOMAIN
                  </p>
                  <p className="mt-2 text-sm uppercase text-foreground">
                    Software Engineering
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                    FOCUS
                  </p>
                  <p className="mt-2 text-sm uppercase text-foreground">
                    Full-Stack / AI / Cloud
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                    STATUS
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,210,225,0.8)]" />
                    AVAILABLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24 sm:mt-28 lg:mt-32">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-border-subtle pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                CREDENTIALS / 02
              </p>

              <h3 className="mt-4 text-3xl font-medium uppercase tracking-[-0.04em] text-foreground sm:text-4xl">
                AWS CERTIFICATIONS
              </h3>
            </div>

            <p className="max-w-sm font-mono text-[8px] uppercase leading-5 tracking-[0.16em] text-foreground-subtle">
              VERIFIED PROFESSIONAL CREDENTIALS
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.index}
                {...certification}
              />
            ))}
          </div>
        </div>

        {/* Footer marker */}
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-border-subtle pt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-foreground-subtle sm:flex-row">
          <span>SYSTEM//V — PROFILE</span>
          <span>DOCUMENTS / VERIFIED</span>
        </div>
      </div>
    </section>
  );
}