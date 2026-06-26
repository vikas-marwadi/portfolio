"use client";

import { useRef } from "react";
import { Badge } from "./badge";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current?.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current?.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <TiltCard className="h-full" intensity={5}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="project-glow group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8"
        >
          <div className="relative z-10">
            <Badge variant="accent" className="mb-3">
              {project.category}
            </Badge>
            <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  className="transition-all duration-150 hover:scale-110 hover:-translate-y-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            {(project.github || project.live) && (
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
