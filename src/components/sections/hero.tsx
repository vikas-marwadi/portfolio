"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  {
    value: 3,
    suffix: "",
    label: "Industries",
    details: [
      "🚚 Logistics & Supply Chain",
      "✈️ Aviation & Compliance",
      "🤖 AI Research & Document AI",
    ],
  },
  {
    value: 4,
    suffix: "",
    label: "Companies",
    details: [
      "ForIT",
      "DHL Express",
      "Iter Innovandi",
      "Kintu Designs",
    ],
  },
  {
    value: 129,
    suffix: "+",
    label: "AI Tools Built",
    details: [
      "Microsoft 365 (Outlook, Teams, Calendar…)",
      "CRM & Sales automation",
      "GitHub & Dev workflows",
      "Browser automation",
      "…and 120+ more",
    ],
  },
];

const PARTICLES = [
  { size: 5,  left: "8%",  bottom: "18%", dur: "5.5s", delay: "0s",    tx: "35px"  },
  { size: 7,  left: "22%", bottom: "32%", dur: "7s",   delay: "1.2s",  tx: "-25px" },
  { size: 4,  left: "45%", bottom: "12%", dur: "4.5s", delay: "2.1s",  tx: "40px"  },
  { size: 6,  left: "62%", bottom: "28%", dur: "6.5s", delay: "0.6s",  tx: "-30px" },
  { size: 3,  left: "80%", bottom: "22%", dur: "5s",   delay: "1.8s",  tx: "22px"  },
  { size: 5,  left: "35%", bottom: "8%",  dur: "4s",   delay: "3s",    tx: "-18px" },
  { size: 6,  left: "55%", bottom: "38%", dur: "8s",   delay: "0.9s",  tx: "28px"  },
  { size: 4,  left: "12%", bottom: "42%", dur: "6s",   delay: "2.4s",  tx: "-28px" },
  { size: 3,  left: "90%", bottom: "15%", dur: "5.5s", delay: "1.5s",  tx: "15px"  },
  { size: 5,  left: "72%", bottom: "45%", dur: "7.5s", delay: "3.5s",  tx: "-20px" },
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
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
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
      <span className="inline-block h-[1em] w-0.5 animate-pulse rounded-full bg-primary align-middle" />
    </span>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1400;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="hero-dot-grid pointer-events-none absolute inset-0" />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: p.bottom,
            ["--dur" as string]: p.dur,
            ["--delay" as string]: p.delay,
            ["--tx" as string]: p.tx,
          }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-4 py-32 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium tracking-widest text-primary uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="gradient-text mb-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
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
          className="mx-auto mb-10 min-h-[1.75rem] max-w-xl text-muted-foreground"
        >
          <TypingAnimation />
        </motion.p>

        <motion.div
          variants={item}
          className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
          className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-stretch sm:gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex w-full max-w-[220px] flex-col rounded-2xl border border-border bg-card/70 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:w-auto sm:min-w-[160px]"
            >
              {/* Value + label */}
              <div className="mb-3 text-center">
                <p className="text-2xl font-bold text-primary sm:text-3xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Always-visible details */}
              <ul className="space-y-1.5">
                {stat.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
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
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/60 hover:bg-primary/5 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
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
