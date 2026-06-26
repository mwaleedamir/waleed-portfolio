"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

/**
 * Animates a numeric stat from 0 → target the first time it scrolls into view,
 * preserving any trailing suffix (e.g. "40+", "100%"). Non-numeric values are
 * rendered verbatim. Honors the user's reduced-motion preference.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  // once: false → re-counts every time the stats scroll back into view.
  const inView = useInView(ref, { margin: "-40px" });
  const reduce = useReducedMotion();

  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!match) return;
    if (!inView) {
      count.set(0);
      return;
    }
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, reduce, target, count, match]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
