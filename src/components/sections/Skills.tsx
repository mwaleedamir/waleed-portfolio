"use client";

import { motion } from "framer-motion";
import { skillGroups, marqueeSkills } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <Section id="skills" soft>
      <SectionHeading
        eyebrow="Skills & Tech"
        title={
          <>
            My <span className="text-gradient">toolbox</span>
          </>
        }
        description="The technologies I use every day to design, build and ship reliable products."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Card className="h-full">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-soft">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Scrolling marquee of key tech */}
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
