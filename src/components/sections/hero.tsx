"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const PHRASES = [
  "ETL Pipelines & Data Engineering",
  "Multi-Agent AI Systems",
  "LLM Integration & RAG Pipelines",
  "Cloud Architecture on Azure",
  "Enterprise SaaS Solutions",
];

const STATS = [
  { value: "5 Years", label: "Experience" },
  { value: "4 Companies", label: "Worked At" },
  { value: "50% Faster", label: "Pipeline Gains" },
];

function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (!deleting && displayed.length < phrase.length) {
      const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span>{displayed}</span>
      <span className="inline-block w-0.5 h-5 bg-primary animate-pulse rounded-full" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium tracking-widest text-primary uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-2 text-xl font-medium text-primary sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-xl text-muted-foreground min-h-[1.5rem]"
        >
          <TypingAnimation />
        </motion.p>

        <motion.div
          variants={item}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonLink href="#projects" variant="primary" size="lg">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="/resume/vikas-marwadi-resume.pdf"
            variant="outline"
            size="lg"
            download
          >
            Download Resume
            <Download className="h-4 w-4" />
          </ButtonLink>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mb-8 flex items-center justify-center gap-4 sm:gap-8"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card/60 px-5 py-3 backdrop-blur-sm"
            >
              <span className="text-lg font-bold text-primary sm:text-xl">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: GithubIcon, href: profile.github, label: "GitHub" },
            { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
