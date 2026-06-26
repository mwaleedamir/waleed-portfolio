"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { fadeUp, viewportReplay } from "@/lib/animations";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            What I can <span className="text-gradient">build for you</span>
          </>
        }
        description="From a single mobile app to a complete product — pick what you need, or let's figure it out together."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map(({ id, title, description, icon: Icon, features }, i) => (
          <motion.div
            key={id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportReplay}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Card interactive className="h-full">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
              <ul className="mt-5 space-y-2">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
