import type { Variants } from "framer-motion";

/**
 * Scroll-animation presets. Each section uses a *different* one so the page
 * "welcomes" you with fresh motion as you move through it.
 *
 * `once: false` means the animation replays every time the element re-enters
 * the viewport — scroll away and back and it greets you again.
 */
export const viewportReplay = { once: false, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: -45, transformPerspective: 900 },
  visible: { opacity: 1, rotateX: 0, transformPerspective: 900 },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
