"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FileText } from "lucide-react";

const placeholders = [
  {
    title: "Building AI Agents for Enterprise",
    description:
      "A deep dive into designing multi-agent architectures for real-world business applications.",
    tag: "AI",
  },
  {
    title: "RAG Pipelines: Lessons Learned",
    description:
      "Practical tips and patterns from building production retrieval-augmented generation systems.",
    tag: "Engineering",
  },
  {
    title: "From IT Support to AI Developer",
    description:
      "My journey from helpdesk to building intelligent systems, and what I learned along the way.",
    tag: "Career",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on AI, engineering, and building things that matter"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary uppercase">
                    {post.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {post.description}
                </p>
                <p className="text-xs font-medium text-muted-foreground/60 italic">
                  Coming soon
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
