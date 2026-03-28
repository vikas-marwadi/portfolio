import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <Quote className="mb-4 h-8 w-8 text-primary/30" />
      <blockquote className="mb-6 text-base leading-relaxed text-foreground sm:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
