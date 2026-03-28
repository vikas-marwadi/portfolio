"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  "hero",
  "about",
  "experience",
  "skills",
  "projects",
  "blog",
  "testimonials",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
