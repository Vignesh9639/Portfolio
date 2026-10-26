
"use client";

import type { CSSProperties, ReactNode } from "react";

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

const brandIcons: Record<string, string> = {
  PYTHON: "https://cdn.simpleicons.org/python/3776AB",
  JAVA: "https://cdn.simpleicons.org/openjdk/ED8B00",
  REACT: "https://cdn.simpleicons.org/react/61DAFB",
  "NEXT.JS": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  TYPESCRIPT: "https://cdn.simpleicons.org/typescript/3178C6",
};

function TechnologyIcon({ technology }: { technology: string }) {
  const iconPaths: Record<string, ReactNode> = {
    SQL: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    CLOUD: (
      <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 8a5 5 0 0 0 1 10Z" />
    ),
    APIs: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />,
    ARCHITECTURE: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
  };

  const src = brandIcons[technology];

  if (src) {
    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="h-7 w-7 object-contain transition-transform duration-300 group-hover/tool:scale-110 sm:h-8 sm:w-8"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7 text-accent transition-transform duration-300 group-hover/tool:scale-110 sm:h-8 sm:w-8"
    >
      {iconPaths[technology] ?? iconPaths.ARCHITECTURE}
    </svg>
  );
}

export function AboutDetails() {
  return (
    <div className="about-details">
      {/* Profile panels */}
      <div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle lg:grid-cols-2">
        {details.map((detail, index) => (
          <article
            key={detail.index}
            style={{ "--card-index": index } as CSSProperties}
            className="about-profile-card group relative flex min-h-[340px] flex-col overflow-hidden bg-background p-7 sm:min-h-[350px] sm:p-9 lg:min-h-[370px] lg:p-10"
          >
            <div
              aria-hidden="true"
              className="about-card-glow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.08] blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
            />

            <div
              aria-hidden="true"
              className="about-card-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-accent/[0.035] to-transparent"
            />

            <div className="relative z-10 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">
              <span className="text-accent">
                {detail.label} / {detail.index}
              </span>

              <span className="flex items-center gap-2 text-foreground-subtle">
                <span className="about-status-dot h-1.5 w-1.5 rounded-full bg-accent" />
                {detail.status}
              </span>
            </div>

            <div className="relative z-10 my-auto max-w-xl py-12">
              <h3 className="about-profile-title text-[clamp(2rem,4vw,3.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
                {detail.title}
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-foreground-muted sm:text-[15px]">
                {detail.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-border-subtle pt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-foreground-subtle">
              <span>PROFILE / {detail.index}</span>
              <span className="transition-colors duration-300 group-hover:text-accent">
                SYSTEM<span className="text-accent">_</span>
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Toolkit */}
      <section
        aria-label="Technology toolkit"
        className="relative overflow-hidden border-x border-b border-border-subtle bg-surface/20"
      >
        <div className="grid lg:grid-cols-[0.45fr_1.55fr]">
          {/* Toolkit introduction */}
          <div className="relative border-b border-border-subtle p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em]">
              <span className="text-accent">TOOLKIT / 03</span>
              <span className="text-foreground-subtle">STACK</span>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                TECHNICAL CAPABILITIES
              </span>
            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-foreground-subtle">
              Technologies and engineering tools I use to turn ideas into
              working systems.
            </p>

            <div className="mt-8 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-foreground-subtle">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              SYSTEMS ONLINE
            </div>
          </div>

          {/* Technology grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {toolkit.map((technology, index) => (
              <article
                key={technology}
                style={{ "--tile-index": index } as CSSProperties}
                className="about-tool-tile group/tool relative flex min-h-[130px] flex-col justify-between overflow-hidden border-b border-r border-border-subtle p-5 transition-colors duration-300 hover:bg-background sm:min-h-[150px] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover/tool:opacity-100"
                />

                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover/tool:w-full"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-foreground-subtle">
                    TECH / {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover/tool:bg-accent" />
                </div>

                <div className="relative z-10 mt-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border-subtle bg-background/80 transition-all duration-300 group-hover/tool:border-accent/40 group-hover/tool:bg-accent/[0.06]">
                    <TechnologyIcon technology={technology} />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-muted transition-colors duration-300 group-hover/tool:text-foreground sm:text-[10px]">
                    {technology}
                  </span>
                </div>

                <div className="relative z-10 mt-4 h-px w-6 bg-border transition-all duration-300 group-hover/tool:w-12 group-hover/tool:bg-accent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Motion */}
      <style>{`
        .about-profile-card {
          animation: about-card-enter 850ms cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: calc(var(--card-index) * 130ms);
        }

        .about-card-glow {
          opacity: .25;
          transition: opacity 700ms ease, transform 900ms ease;
        }

        .about-profile-card:hover .about-card-glow {
          opacity: 1;
          transform: translate(-12px, 12px) scale(1.12);
        }

        .about-card-sweep {
          opacity: 0;
        }

        .about-profile-card:hover .about-card-sweep {
          opacity: 1;
          animation: about-light-sweep 1s ease-out both;
        }

        .about-profile-title {
          transition: transform 450ms cubic-bezier(.22, 1, .36, 1);
        }

        .about-profile-card:hover .about-profile-title {
          transform: translateX(5px);
        }

        .about-status-dot {
          box-shadow: 0 0 0 0 rgba(0, 190, 210, .45);
        }

        .about-profile-card:hover .about-status-dot {
          animation: about-status-pulse 1.5s ease-out infinite;
        }

        .about-tool-tile {
          animation: about-card-enter 700ms cubic-bezier(.22, 1, .36, 1) both;
          animation-delay: calc(var(--tile-index) * 45ms);
        }

        @keyframes about-card-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes about-light-sweep {
          from { transform: translateX(0) skewX(-18deg); }
          to { transform: translateX(500%) skewX(-18deg); }
        }

        @keyframes about-status-pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 190, 210, .45); }
          100% { box-shadow: 0 0 0 7px rgba(0, 190, 210, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-profile-card,
          .about-tool-tile {
            animation: none !important;
          }

          .about-card-sweep {
            display: none;
          }

          .about-profile-title,
          .about-card-glow,
          .about-tool-tile * {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
