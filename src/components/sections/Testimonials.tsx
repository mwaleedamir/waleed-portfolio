"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Trusted by <span className="text-gradient">founders & teams</span>
          </>
        }
        description="Don't just take my word for it — here's what clients say about working with me."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Card className="relative h-full">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/15" />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="relative leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-primary to-accent text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
