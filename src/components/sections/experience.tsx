"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and key contributions"
        />
        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role + exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
