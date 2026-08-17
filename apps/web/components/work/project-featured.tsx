import type { Project } from "@/lib/projects";
import { ProjectVisual } from "./project-visual";

type ProjectFeaturedProps = {
  project: Project;
};

export function ProjectFeatured({ project }: ProjectFeaturedProps) {
  return (
    <article
      id={project.id}
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.10]
        bg-[#0d1213]
        text-white
        shadow-[0_16px_50px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-accent
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]
      "
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Project visual */}
        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
            border-b
            border-white/[0.08]
            bg-[#0b1011]
            lg:aspect-auto
            lg:min-h-[460px]
            lg:border-b-0
            lg:border-r
          "
        >
          <ProjectVisual project={project} featured />
        </div>

        {/* Project information */}
        <div
          className="
            flex
            flex-col
            justify-between
            bg-[#0d1213]
            p-6
            text-white
            sm:p-8
            lg:p-10
          "
        >
          <div>
            {/* Label */}
            <div
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-cyan-400
              "
            >
              FEATURED PROJECT
            </div>

            {/* Project name */}
            <h3
              className="
                mt-5
                max-w-md
                text-4xl
                font-medium
                uppercase
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
              "
            >
              {project.name}
            </h3>

            {/* Category */}
            <div
              className="
                mt-4
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/45
              "
            >
              {project.category}
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-xl
                text-sm
                leading-7
                text-white/65
              "
            >
              {project.description}
            </p>
          </div>

          <div className="mt-10">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/[0.14]
                    bg-white/[0.025]
                    px-3
                    py-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-white/60
                    transition-all
                    duration-300
                    group-hover:border-white/[0.24]
                    group-hover:bg-white/[0.04]
                    group-hover:text-white/80
                  "
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target={project.live !== "#" ? "_blank" : undefined}
                  rel={project.live !== "#" ? "noreferrer" : undefined}
                  className="
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/[0.20]
                    bg-white/[0.025]
                    px-5
                    py-3
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/80
                    transition-all
                    duration-300
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/[0.06]
                    hover:text-cyan-400
                  "
                >
                  Live project

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/[0.20]
                    bg-white/[0.025]
                    px-5
                    py-3
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/80
                    transition-all
                    duration-300
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/[0.06]
                    hover:text-cyan-400
                  "
                >
                  GitHub

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}