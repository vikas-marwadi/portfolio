import { Badge } from "./badge";
import { ScrollReveal } from "./scroll-reveal";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <Badge variant="accent" className="mb-3">
          {project.category}
        </Badge>
        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
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
    </ScrollReveal>
  );
}
