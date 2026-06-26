"use client";

import { MapPin, GraduationCap, Languages, Briefcase, Trophy, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { profile } from "@/data/profile";

const quickFacts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Role", value: profile.role },
  { icon: GraduationCap, label: "Education", value: profile.education[0].degree.replace(" (Co-Op)", "") },
  { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
];

const ACHIEVEMENT_ICONS = [Trophy, Star];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A bit about my background and what drives me"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio — left column */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="space-y-4">
                {profile.bio.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education */}
              <div className="mt-8 space-y-4">
                {profile.education.map((edu, i) => (
                  <div
                    key={i}
                    className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                          {edu.coop && (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Co-Op
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.university} &middot; {edu.location}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-3">
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                          {edu.cgpa && (
                            <span className="text-sm font-medium text-accent">
                              GPA: {edu.cgpa}
                            </span>
                          )}
                        </div>
                        {edu.honors && (
                          <p className="mt-1.5 text-sm font-medium text-primary">
                            {edu.honors}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              {profile.achievements.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Achievements
                  </h3>
                  <div className="space-y-2">
                    {profile.achievements.map((achievement, i) => {
                      const Icon = ACHIEVEMENT_ICONS[i % ACHIEVEMENT_ICONS.length];
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 transition-all hover:border-primary/30"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-foreground">{achievement}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-border bg-gradient-to-br from-primary/20 to-accent/20 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <span className="text-5xl font-bold text-primary">VM</span>
              </div>

              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3 rounded-lg border border-border/50 p-2.5 transition-all hover:border-primary/20 hover:bg-muted/30"
                  >
                    <fact.icon className="h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-medium uppercase text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="text-sm text-foreground">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
