"use client";

import { MapPin, GraduationCap, Languages, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { profile } from "@/data/profile";

const quickFacts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Role", value: profile.role },
  { icon: GraduationCap, label: "Education", value: profile.education.degree },
  { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
];

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
              <div className="mt-8 rounded-lg border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {profile.education.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.education.university} &middot;{" "}
                      {profile.education.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {profile.education.period}
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {profile.education.honors}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — avatar + quick facts */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              {/* Initials avatar placeholder */}
              <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-border bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-5xl font-bold text-primary">VM</span>
              </div>

              {/* Quick facts */}
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <fact.icon className="h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">
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
