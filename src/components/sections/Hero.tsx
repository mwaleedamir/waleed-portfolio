"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, socials, stats } from "@/data/profile";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background: grid + gradient blobs */}
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {profile.firstName}.
            <br />
            <span className="text-gradient">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <LinkButton href="#work" size="lg" className="w-full sm:w-auto">
              View my work <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href={profile.resumeUrl}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Download className="h-4 w-4" /> Resume
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <span className="flex items-center gap-1.5 text-sm text-faint">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="h-4 w-px bg-border" />
            <div className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-4 py-6 text-center">
              <dd className="text-2xl font-bold text-gradient sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
