import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <BlogPreview />
      <Testimonials />
      <Contact />

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vikas Marwadi",
            jobTitle: "AI Developer",
            url: "https://vikas-marwadi.vercel.app",
            email: "vikas.m1410@gmail.com",
            sameAs: [
              "https://github.com/vikas-marwadi",
              "https://linkedin.com/in/vikas-marwadi",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressCountry: "AU",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Deakin University",
            },
            knowsAbout: [
              "Artificial Intelligence",
              "Machine Learning",
              "TypeScript",
              "Next.js",
              "Python",
              "RAG Pipelines",
              "Multi-Agent Systems",
            ],
          }),
        }}
      />
    </>
  );
}
