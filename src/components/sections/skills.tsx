"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { skillCategories } from "@/data/profile";

const ACCENT_CATEGORIES = new Set(["Analytics & Visualization", "Web & SaaS"]);

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.08}>
              <TiltCard className="h-full" intensity={6}>
                <div className="h-full rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-px transition-all duration-300 hover:from-primary/40 hover:via-accent/25 hover:to-primary/20 hover:shadow-xl hover:shadow-primary/10">
                  <div className="h-full rounded-xl bg-card p-6">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={ACCENT_CATEGORIES.has(category.name) ? "accent" : "default"}
                          className="skill-badge-glow transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
