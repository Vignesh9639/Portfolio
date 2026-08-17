import type { Project } from "@/lib/projects";

type ProjectVisualProps = {
  project: Project;
  featured?: boolean;
};

type Accent = "cyan" | "green" | "blue" | "gold";

/* -------------------------------------------------------------------------- */
/* MOTION SYSTEM                                                              */
/* -------------------------------------------------------------------------- */

function ProjectMotionStyles() {
  return (
    <style>{`
      @keyframes project-float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }

      @keyframes project-scan {
        0% {
          transform: translateX(-120%);
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        100% {
          transform: translateX(520%);
          opacity: 0;
        }
      }

      @keyframes project-shimmer {
        0% {
          transform: translateX(-120%);
          opacity: 0;
        }
        20% {
          opacity: 0.45;
        }
        50% {
          opacity: 0.15;
        }
        100% {
          transform: translateX(120%);
          opacity: 0;
        }
      }

      @keyframes project-flow {
        0% {
          transform: translateX(-10px);
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        100% {
          transform: translateX(10px);
          opacity: 0;
        }
      }

      @keyframes project-ring {
        0%, 100% {
          transform: scale(1);
          opacity: 0.75;
        }
        50% {
          transform: scale(1.08);
          opacity: 1;
        }
      }

      @keyframes project-bars {
        0%, 100% {
          transform: scaleY(0.72);
          transform-origin: bottom;
        }
        50% {
          transform: scaleY(1);
          transform-origin: bottom;
        }
      }

      @keyframes project-node {
        0% {
          transform: translateY(-8px);
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          transform: translateY(8px);
          opacity: 0;
        }
      }

      @keyframes project-blink {
        0%, 45%, 100% {
          opacity: 0.35;
        }
        50%, 90% {
          opacity: 1;
        }
      }

      @keyframes project-progress {
        0% {
          transform: scaleX(0);
          transform-origin: left;
        }
        55% {
          transform: scaleX(0.78);
          transform-origin: left;
        }
        100% {
          transform: scaleX(0);
          transform-origin: right;
        }
      }

      .project-float {
        animation: project-float 5s ease-in-out infinite;
      }

      .project-scan {
        animation: project-scan 4.5s ease-in-out infinite;
      }

      .project-shimmer {
        animation: project-shimmer 5s ease-in-out infinite;
      }

      .project-flow {
        animation: project-flow 2.8s ease-in-out infinite;
      }

      .project-ring {
        animation: project-ring 2.8s ease-in-out infinite;
      }

      .project-bar {
        animation: project-bars 2.4s ease-in-out infinite;
      }

      .project-node {
        animation: project-node 2.4s ease-in-out infinite;
      }

      .project-blink {
        animation: project-blink 2.2s ease-in-out infinite;
      }

      .project-progress {
        animation: project-progress 3.5s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .project-float,
        .project-scan,
        .project-shimmer,
        .project-flow,
        .project-ring,
        .project-bar,
        .project-node,
        .project-blink,
        .project-progress {
          animation: none !important;
        }
      }
    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

function StatusDot({
  color = "cyan",
  pulse = false,
}: {
  color?: Accent;
  pulse?: boolean;
}) {
  const colors: Record<Accent, string> = {
    cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.65)]",
    green:
      "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.65)]",
    blue: "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.65)]",
    gold: "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.65)]",
  };

  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
        colors[color]
      } ${pulse ? "animate-pulse" : ""}`}
    />
  );
}

function TechnicalFrame({
  color = "cyan",
}: {
  color?: Accent;
}) {
  const colors: Record<
    Accent,
    {
      main: string;
      line: string;
      border: string;
    }
  > = {
    cyan: {
      main: "bg-cyan-400",
      line: "bg-cyan-400/60",
      border: "border-cyan-400/70",
    },
    green: {
      main: "bg-emerald-400",
      line: "bg-emerald-400/60",
      border: "border-emerald-400/70",
    },
    blue: {
      main: "bg-blue-400",
      line: "bg-blue-400/60",
      border: "border-blue-400/70",
    },
    gold: {
      main: "bg-amber-400",
      line: "bg-amber-400/60",
      border: "border-amber-400/70",
    },
  };

  const theme = colors[color];

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute inset-2 border border-white/[0.055] sm:inset-3" />

      <div className="absolute inset-4 border border-white/[0.025] sm:inset-5" />

      <div
        className={`absolute left-5 top-5 h-2 w-2 ${theme.main} transition-transform duration-500 group-hover/visual:scale-125 sm:left-6 sm:top-6`}
      />

      <div
        className={`absolute left-5 top-5 h-px w-24 ${theme.line} transition-all duration-700 group-hover/visual:w-32 sm:left-6 sm:top-6`}
      />

      <div
        className={`absolute left-5 top-5 h-24 w-px ${theme.line} transition-all duration-700 group-hover/visual:h-32 sm:left-6 sm:top-6`}
      />

      <div
        className={`absolute bottom-5 right-5 h-2 w-2 border ${theme.border} transition-transform duration-500 group-hover/visual:scale-125 sm:bottom-6 sm:right-6`}
      />

      <div
        className={`absolute bottom-5 right-5 h-px w-24 ${theme.line} transition-all duration-700 group-hover/visual:w-32 sm:bottom-6 sm:right-6`}
      />

      <div
        className={`absolute bottom-5 right-5 h-24 w-px ${theme.line} transition-all duration-700 group-hover/visual:h-32 sm:bottom-6 sm:right-6`}
      />
    </div>
  );
}

function LiveBadge({
  label,
  color,
}: {
  label: string;
  color: Accent;
}) {
  const styles: Record<Accent, string> = {
    cyan: "border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-400",
    green:
      "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-400",
    blue: "border-blue-400/20 bg-blue-400/[0.05] text-blue-400",
    gold: "border-amber-400/20 bg-amber-400/[0.05] text-amber-400",
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-sm border px-2 py-1 font-mono text-[6px] uppercase tracking-[0.14em] ${styles[color]}`}
    >
      <StatusDot color={color} pulse />
      {label}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FOODCHAINX                                                                 */
/* -------------------------------------------------------------------------- */

function FoodChainVisual() {
  const stages = [
    ["FARM", "SOURCE"],
    ["INVENTORY", "STOCK"],
    ["ORDERS", "FLOW"],
    ["SERVICES", "DISCOVERY"],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#101915] text-[#dce8df]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(34,197,94,0.14),transparent_38%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_90%,rgba(16,185,129,0.07),transparent_45%)]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />

      <TechnicalFrame color="green" />

      {/* Ambient moving scan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-400/[0.035] to-transparent project-shimmer" />

      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-400/80">
              Supply Network
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#829187]">
              Farm-to-table operations
            </div>
          </div>

          <LiveBadge label="System online" color="green" />
        </div>

        <div className="relative overflow-hidden rounded-sm border border-emerald-400/20 bg-[#17221c]/90 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-transform duration-700 group-hover/visual:-translate-y-1">
          {/* Live sweep */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-transparent via-emerald-300/[0.08] to-transparent project-scan" />

          <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-2">
            <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-white/35">
              OPERATIONS
            </span>

            <span className="flex items-center gap-2 font-mono text-[6px] uppercase tracking-[0.12em] text-white/30">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
              LIVE DATA
            </span>
          </div>

          <div className="grid grid-cols-4">
            {stages.map(([title, label], index) => (
              <div
                key={title}
                className={`relative min-w-0 border-r border-white/[0.08] p-3 last:border-r-0 ${
                  index === 1
                    ? "bg-emerald-400/[0.075]"
                    : "bg-transparent"
                }`}
              >
                <div className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/35">
                  {label}
                </div>

                <div className="mt-2 truncate text-[9px] font-semibold uppercase text-[#dce8df] sm:text-[10px]">
                  {title}
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <StatusDot color="green" pulse />

                  <span className="font-mono text-[5px] uppercase tracking-[0.12em] text-white/35">
                    ACTIVE
                  </span>
                </div>

                {index < stages.length - 1 && (
                  <>
                    <div className="absolute -right-1.5 top-1/2 z-20 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-emerald-400/50 bg-[#17221c]" />

                    <span
                      className="absolute right-0 top-1/2 z-30 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] project-flow"
                      style={{
                        animationDelay: `${index * 0.45}s`,
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 border-t border-white/[0.08]">
            {[
              ["FARMS", "24"],
              ["ORDERS", "1,284"],
              ["FULFILLMENT", "98.4%"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className="relative border-r border-white/[0.08] p-3 last:border-r-0"
              >
                <div className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/35">
                  {label}
                </div>

                <div className="mt-1 text-sm font-semibold tracking-[-0.03em] text-[#dce8df]">
                  {value}
                </div>

                {index === 1 && (
                  <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden bg-emerald-400/20">
                    <div className="h-full w-full bg-emerald-400/70 project-progress" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {[
            "INVENTORY",
            "ORDER MGMT",
            "DISCOVERY",
            "API GATEWAY",
          ].map((service, index) => (
            <div
              key={service}
              className="flex items-center gap-2 font-mono text-[6px] uppercase tracking-[0.13em] text-[#829187]"
            >
              <span
                className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.7)] project-blink"
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              />
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 hidden font-mono text-[5px] uppercase tracking-[0.16em] text-emerald-400/35 sm:block">
        FARM → INVENTORY → ORDER → TABLE
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SMART JOB ASSISTANT                                                        */
/* -------------------------------------------------------------------------- */

function SmartJobVisual() {
  const bars = [3, 5, 7, 6, 9];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#111720] text-[#dce5f2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_15%,rgba(59,130,246,0.15),transparent_38%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_90%,rgba(37,99,235,0.07),transparent_45%)]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />

      <TechnicalFrame color="blue" />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400/[0.035] to-transparent project-shimmer" />

      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-blue-400/80">
              Career Intelligence
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#8290a3]">
              AI-powered career analysis
            </div>
          </div>

          <LiveBadge label="AI online" color="blue" />
        </div>

        <div className="relative rounded-sm border border-blue-400/20 bg-[#172131]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.34)] backdrop-blur-sm transition-transform duration-700 group-hover/visual:-translate-y-1 sm:p-4">
          {/* AI scanning beam */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-px w-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent project-scan" />
          </div>

          {/* Resume input */}
          <div className="relative overflow-hidden rounded-sm border border-blue-300/[0.12] bg-[#202b3c]/80 p-3 transition-colors duration-500 group-hover/visual:border-blue-400/25">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[5px] uppercase tracking-[0.15em] text-white/35">
                  INPUT
                </div>

                <div className="mt-1 text-[10px] font-semibold uppercase text-[#dce5f2]">
                  RESUME
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[6px] uppercase text-blue-400">
                <span className="h-1 w-1 animate-pulse rounded-full bg-blue-400" />
                ANALYZING
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <div className="h-px w-[86%] bg-white/[0.12]" />
              <div className="h-px w-[65%] bg-white/[0.08]" />
              <div className="h-px w-[92%] bg-white/[0.12]" />

              <div className="relative mt-2 h-px w-full overflow-hidden bg-white/[0.04]">
                <div className="absolute inset-y-0 left-0 w-1/4 bg-blue-400/70 project-scan" />
              </div>
            </div>
          </div>

          {/* Analysis metrics */}
          <div className="mt-3 grid grid-cols-[1fr_0.8fr] gap-3">
            {/* ATS */}
            <div className="rounded-sm border border-white/[0.08] bg-[#202b3c]/75 p-3">
              <div className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/35">
                ATS COMPATIBILITY
              </div>

              <div className="mt-1 flex items-end justify-between">
                <span className="text-xl font-semibold tracking-[-0.05em] text-[#dce5f2]">
                  87%
                </span>

                <div className="project-ring h-8 w-8 rounded-full border border-blue-400/30 p-1">
                  <div className="h-full w-full rounded-full border-2 border-blue-400 border-r-transparent" />
                </div>
              </div>
            </div>

            {/* Job match */}
            <div className="rounded-sm border border-white/[0.08] bg-[#202b3c]/75 p-3">
              <div className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/35">
                JOB MATCH
              </div>

              <div className="mt-3 flex h-8 items-end gap-1">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="project-bar w-2 bg-blue-400"
                    style={{
                      height: `${height * 2}px`,
                      opacity: 0.35 + index * 0.14,
                      animationDelay: `${index * 0.18}s`,
                    }}
                  />
                ))}
              </div>

              <div className="mt-2 text-[9px] font-semibold text-blue-400">
                92% MATCH
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <div className="font-mono text-[5px] uppercase tracking-[0.14em] text-white/35">
              SKILLS EXTRACTED
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {["PYTHON", "REACT", "SQL", "AWS", "AI/ML"].map(
                (skill, index) => (
                  <span
                    key={skill}
                    className="border border-blue-400/20 bg-blue-400/[0.07] px-2 py-1 font-mono text-[5px] uppercase tracking-[0.1em] text-blue-300 transition-all duration-300 group-hover/visual:border-cyan-400/30 group-hover/visual:text-cyan-300"
                    style={{
                      transitionDelay: `${index * 40}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 hidden font-mono text-[5px] uppercase tracking-[0.16em] text-blue-400/35 sm:block">
        RESUME → ANALYSIS → OPPORTUNITY
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* RENTALEASE                                                                 */
/* -------------------------------------------------------------------------- */

function RentalEaseVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#191714] text-[#ebe4d8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_15%,rgba(245,158,11,0.14),transparent_38%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_90%,rgba(217,119,6,0.07),transparent_45%)]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />

      <TechnicalFrame color="gold" />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/[0.035] to-transparent project-shimmer" />

      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-amber-400/80">
              Rental Protocol
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#9a9182]">
              Transparent rental workflow
            </div>
          </div>

          <LiveBadge label="Verified" color="gold" />
        </div>

        {/* Property */}
        <div className="project-float rounded-sm border border-amber-400/20 bg-[#29241d]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-mono text-[5px] uppercase tracking-[0.16em] text-white/35">
                PROPERTY
              </div>

              <div className="mt-1 text-[10px] font-semibold uppercase text-[#ebe4d8]">
                RESIDENTIAL UNIT
              </div>
            </div>

            <div className="border border-amber-400/30 bg-amber-400/[0.07] px-2 py-1 font-mono text-[5px] uppercase tracking-[0.12em] text-amber-400">
              AVAILABLE
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["TYPE", "APARTMENT"],
              ["STATUS", "ACTIVE"],
              ["ID", "#0042"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-white/[0.08] bg-white/[0.025] p-2"
              >
                <div className="font-mono text-[5px] uppercase text-white/35">
                  {label}
                </div>

                <div className="mt-1 truncate text-[7px] uppercase text-[#c8bfb0]">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain connection */}
        <div className="relative flex h-7 items-center justify-center">
          <div className="relative h-full w-px bg-amber-400/30">
            <span className="project-node absolute -left-1/2 top-0 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.75)]" />
          </div>
        </div>

        {/* Digital contract */}
        <div className="relative overflow-hidden rounded-sm border border-amber-400/20 bg-[#30291f]/95 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover/visual:translate-y-1 sm:p-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent project-scan" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[5px] uppercase tracking-[0.16em] text-white/35">
                RENTAL AGREEMENT
              </div>

              <div className="mt-1 text-[10px] font-semibold uppercase text-[#ebe4d8]">
                DIGITAL CONTRACT
              </div>
            </div>

            <div className="project-ring flex h-7 w-7 items-center justify-center border border-amber-400/60 bg-amber-400/[0.07]">
              <span className="text-[10px] text-amber-400">✓</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[5px] uppercase tracking-[0.12em] text-white/35">
              <StatusDot color="gold" pulse />
              CONTRACT VERIFIED
            </div>

            <div className="font-mono text-[5px] uppercase tracking-[0.12em] text-amber-400">
              BLOCK / 01842
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          {["LANDLORD", "TENANT"].map((participant, index) => (
            <div
              key={participant}
              className="border border-white/[0.08] bg-white/[0.025] p-2 transition-colors duration-500 group-hover/visual:border-amber-400/20"
            >
              <div className="font-mono text-[5px] uppercase tracking-[0.12em] text-white/35">
                {participant}
              </div>

              <div className="mt-1 flex items-center gap-1.5 text-[7px] uppercase text-[#c8bfb0]">
                <span
                  className="h-1 w-1 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.7)] project-blink"
                  style={{
                    animationDelay: `${index * 0.4}s`,
                  }}
                />
                VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 hidden font-mono text-[5px] uppercase tracking-[0.16em] text-amber-400/35 sm:block">
        PROPERTY → CONTRACT → BLOCKCHAIN
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

export function ProjectVisual({
  project,
  featured = false,
}: ProjectVisualProps) {
  const visual = {
    foodchainx: <FoodChainVisual />,
    "smart-job-assistant": <SmartJobVisual />,
    rentalease: <RentalEaseVisual />,
  }[project.id];

  return (
    <div
      className={`group/visual relative h-full w-full overflow-hidden rounded-t-[24px] bg-[#0b0f10] ${
        featured ? "min-h-[460px]" : "min-h-[300px]"
      }`}
    >
      <ProjectMotionStyles />

      {/* Project visual */}
      <div className="absolute inset-1 overflow-hidden sm:inset-1.5">
        {visual}
      </div>

      {/* Portfolio scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px overflow-hidden bg-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover/visual:opacity-100">
        <div className="h-full w-1/4 animate-pulse bg-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.45)]" />
      </div>

      {/* Hover system glow */}
      <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_58%)] opacity-0 transition-opacity duration-700 group-hover/visual:opacity-100" />

      {/* Portfolio edge */}
      <div className="pointer-events-none absolute inset-0 z-40 border border-white/[0.06] transition-colors duration-500 group-hover/visual:border-cyan-400/20" />

      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-br from-white/[0.025] via-transparent to-black/[0.08]" />

      {/* Fine grain */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.055] [background-image:radial-gradient(rgba(255,255,255,0.12)_0.5px,transparent_0.5px)] [background-size:5px_5px]" />
    </div>
  );
}