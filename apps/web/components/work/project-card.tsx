import type { Project } from "@/lib/projects";
import { ProjectVisual } from "./project-visual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
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
        shadow-[0_16px_45px_rgba(0,0,0,0.16)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-accent
        hover:shadow-[0_24px_65px_rgba(0,0,0,0.26)]
      "
    >
      {/* Project visual */}
      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          rounded-t-[24px]
          border-b
          border-white/[0.08]
          bg-[#0b1011]
        "
      >
        <ProjectVisual project={project} />
      </div>

      {/* Project information */}
      <div
        className="
          bg-[#0d1213]
          p-6
          text-white
          sm:p-8
        "
      >
        <div className="min-w-0">
          {/* Category */}
          <div
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-cyan-400
            "
          >
            {project.category}
          </div>

          {/* Project name */}
          <h3
            className="
              mt-4
              text-2xl
              font-medium
              uppercase
              leading-[1]
              tracking-[-0.03em]
              text-white
              sm:text-3xl
            "
          >
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-xl
            text-sm
            leading-6
            text-white/60
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
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
        <div className="mt-8 flex flex-wrap gap-5">
          {project.live && (
            <a
              href={project.live}
              target={project.live !== "#" ? "_blank" : undefined}
              rel={project.live !== "#" ? "noreferrer" : undefined}
              className="
                inline-flex
                items-center
                gap-3
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
    </article>
  );
}