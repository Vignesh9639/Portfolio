import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectFeatured } from "./project-featured";

export function Work() {
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle"
    >
      <div className="mx-auto w-full max-w-[var(--content-width)] px-[var(--page-padding)] py-20 sm:py-24 lg:py-32">
        {/* Section header */}
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent sm:text-[10px]">
            <span>WORK / 02</span>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.75rem,8vw,6rem)] font-medium uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
              Selected work.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-foreground-muted sm:mt-6 sm:text-base sm:leading-7">
              A selection of systems and applications exploring AI,
              distributed architecture, and modern product experiences.
            </p>
          </div>
        </div>

        {/* Featured project */}
        {featuredProject && (
          <div className="w-full">
            <ProjectFeatured project={featuredProject} />
          </div>
        )}

        {/* Supporting projects */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}