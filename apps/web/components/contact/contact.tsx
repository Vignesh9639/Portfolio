export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-12%]
          top-[18%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-accent/[0.025]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.015]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--content-width)] px-5 py-24 sm:px-[var(--page-padding)] sm:py-32 lg:py-36">
        {/* Section header */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          {/* Section identifier */}
          <div className="flex items-start">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,210,225,0.8)]" />
                </span>

                <span>CONTACT / 05</span>
              </div>

              <div className="mt-6 hidden h-24 w-px bg-gradient-to-b from-accent/60 to-transparent lg:block" />

              <div className="mt-5 hidden font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle lg:block">
                COMMUNICATION / SYSTEM
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground-subtle">
              CONNECTION / 001
            </div>

            <h2 className="mt-5 text-[clamp(3.2rem,8vw,7rem)] font-medium uppercase leading-[0.84] tracking-[-0.06em] text-foreground">
              Let&apos;s build
              <br />
              <span className="text-foreground-muted">
                something
              </span>
              <br />
              meaningful.
            </h2>

            <div className="mt-8 flex items-start gap-4 sm:mt-10">
              <div className="mt-2 h-px w-8 shrink-0 bg-accent sm:w-12" />

              <p className="max-w-2xl text-sm leading-6 text-foreground-muted sm:text-base sm:leading-7">
                Open to opportunities, collaborations, and conversations around
                software engineering, full-stack development, AI, and emerging
                technologies.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle sm:text-[8px]">
              <span>STATUS / AVAILABLE</span>

              <span className="text-border">|</span>

              <span>RESPONSE / OPEN</span>

              <span className="text-border">|</span>

              <span>CHANNEL / ONLINE</span>
            </div>
          </div>
        </div>

        {/* Contact links */}
        <div className="mt-20 grid gap-4 sm:mt-24 lg:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:raghavareddyvignesh@gmail.com"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border-subtle
              bg-surface/[0.35]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-accent/50
              hover:bg-surface
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                  EMAIL / 01
                </span>

                {/* Mail icon */}
                <span
                  aria-hidden="true"
                  className="
                    contact-icon
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-foreground-muted
                    transition-all
                    duration-500
                    group-hover:border-accent/50
                    group-hover:text-accent
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
              </div>

              <div className="mt-12">
                <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  PRIMARY CHANNEL
                </div>

                <div className="mt-3 break-all text-base text-foreground sm:text-lg">
                  raghavareddyvignesh@gmail.com
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  SEND MESSAGE
                </span>

                <span className="font-mono text-sm text-foreground-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vigneshr124/"
            target="_blank"
            rel="noreferrer"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border-subtle
              bg-surface/[0.35]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-accent/50
              hover:bg-surface
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                  LINKEDIN / 02
                </span>

                {/* LinkedIn icon */}
                <span
                  aria-hidden="true"
                  className="
                    contact-icon
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-foreground-muted
                    transition-all
                    duration-500
                    group-hover:border-accent/50
                    group-hover:text-accent
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 9.5h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v4.71h-3v-4.18c0-1 0-2.29-1.4-2.29s-1.61 1.09-1.61 2.21v4.26H10v-9Z" />
                  </svg>
                </span>
              </div>

              <div className="mt-12">
                <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  PROFESSIONAL NETWORK
                </div>

                <div className="mt-3 text-xl text-foreground">
                  LinkedIn
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  OPEN PROFILE
                </span>

                <span className="font-mono text-sm text-foreground-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vignesh9639"
            target="_blank"
            rel="noreferrer"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border-subtle
              bg-surface/[0.35]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-accent/50
              hover:bg-surface
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                  GITHUB / 03
                </span>

                {/* GitHub icon */}
                <span
                  aria-hidden="true"
                  className="
                    contact-icon
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-foreground-muted
                    transition-all
                    duration-500
                    group-hover:border-accent/50
                    group-hover:text-accent
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.74 10.74 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
                  </svg>
                </span>
              </div>

              <div className="mt-12">
                <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  CODE / PROJECTS
                </div>

                <div className="mt-3 text-xl text-foreground">
                  GitHub
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border-subtle pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-foreground-subtle">
                  VIEW REPOSITORIES
                </span>

                <span className="font-mono text-sm text-foreground-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Footer marker */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border-subtle pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-subtle sm:flex-row">
          <span>SYSTEM//V — 005</span>

          <span>BUILD / LEARN / CREATE</span>
        </div>
      </div>

      <style>{`
        @keyframes contact-icon-pulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .contact-card:hover .contact-icon {
          animation: contact-icon-pulse 1.4s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-card:hover .contact-icon {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}