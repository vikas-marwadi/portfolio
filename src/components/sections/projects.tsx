"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Featured work I've built and contributed to"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
