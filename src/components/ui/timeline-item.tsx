import { Badge } from "./badge";
import { ScrollReveal } from "./scroll-reveal";
import type { Experience } from "@/data/profile";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Line */}
        <div className="absolute left-[11px] top-2 -bottom-2 w-px bg-gradient-to-b from-primary/50 to-border last:hidden" />

        {/* Dot */}
        <div className="absolute left-0 top-2">
          {experience.current ? (
            <span className="relative flex h-6 w-6">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
            </span>
          ) : (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background">
              <span className="h-2 w-2 rounded-full bg-muted-foreground" />
            </span>
          )}
        </div>

        {/* Content */}
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              {experience.role}
            </h3>
            <span className="text-sm text-muted-foreground">
              {experience.period}
            </span>
          </div>
          <p className="mb-3 text-sm font-medium text-primary">
            {experience.company}
            {experience.location && (
              <span className="font-normal text-muted-foreground">
                {" "}· {experience.location}
              </span>
            )}
          </p>
          <ul className="mb-4 space-y-1.5">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-sm text-muted-foreground before:mr-2 before:text-primary before:content-['▸']"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
