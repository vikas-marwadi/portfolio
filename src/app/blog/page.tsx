import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on AI, engineering, and building things that matter.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <FileText className="mb-4 h-12 w-12 text-primary/30" />
      <h1 className="mb-2 text-3xl font-bold text-foreground">Blog</h1>
      <p className="max-w-md text-muted-foreground">
        Coming soon. I&apos;m working on articles about AI development, engineering
        practices, and lessons learned building enterprise solutions.
      </p>
    </div>
  );
}
