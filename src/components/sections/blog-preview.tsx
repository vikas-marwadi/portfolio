"use client";

import { PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { profile } from "@/data/profile";

export function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on AI, engineering, and building things that matter"
        />
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <PenLine className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Writing coming soon
            </h3>
            <p className="text-muted-foreground">
              I&apos;m working on posts about AI engineering, data pipelines, and
              lessons from building real production systems. Follow me on{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>{" "}
              to get notified when they&apos;re published.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
