"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { slideLeft, slideRight, zoomIn, viewportReplay } from "@/lib/animations";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Clean, maintainable & well-tested code",
  "Pixel-perfect, responsive interfaces",
  "Clear communication & on-time delivery",
  "Performance and accessibility first",
];

export function About() {
  return (
    <Section id="about" soft>
      <SectionHeading
        anim={slideRight}
        eyebrow="About me"
        title={
          <>
            Turning ideas into{" "}
            <span className="text-gradient">products that ship</span>
          </>
        }
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
        {/* Portrait */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReplay}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-xs">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-2">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
              />
              {/* Fallback text shown if image is missing */}
              <div className="absolute inset-0 -z-10 grid place-items-center text-6xl font-bold text-faint">
                {profile.firstName.charAt(0)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReplay}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted">{profile.about}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
