"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { skillCategories } from "@/data/profile";

const categoryColors: Record<string, "default" | "primary" | "accent"> = {
  "AI & Machine Learning": "primary",
  Languages: "accent",
  "Cloud & Data": "primary",
  Visualization: "accent",
  "Web Development": "primary",
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wide">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={categoryColors[category.name] ?? "default"}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
