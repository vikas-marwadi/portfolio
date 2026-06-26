"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "./badge";
import type { Experience } from "@/data/profile";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Line */}
        <div className="absolute left-[11px] top-2 -bottom-2 w-px bg-gradient-to-b from-primary/60 to-border" />

        {/* Dot */}
        <div className="absolute left-0 top-2">
          {experience.current ? (
            <span className="relative flex h-6 w-6">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
            </span>
          ) : (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background transition-colors group-hover:border-primary/50">
              <span className="h-2 w-2 rounded-full bg-muted-foreground" />
            </span>
          )}
        </div>

        {/* Card */}
        <div className="group rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {experience.role}
            </h3>
            <span className="text-sm text-muted-foreground">{experience.period}</span>
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
                className="text-sm text-muted-foreground before:mr-2 before:text-primary before:content-['▸'] transition-colors hover:text-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <Badge
                key={tech}
                variant="primary"
                className="transition-all duration-150 hover:scale-110 hover:-translate-y-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
