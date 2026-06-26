"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  y?: number;
  className?: string;
}

/** Fade + rise into view once, on scroll. Wrap anything to animate it. */
export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
