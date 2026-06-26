import type { Project } from "@/types";

/**
 * Add your real projects here.
 * - Drop video files into /public/videos/
 *   · mobile projects → portrait video (e.g. 9:16)  → shown in a phone frame
 *   · web projects    → landscape video (e.g. 16:9) → shown in a browser frame
 * - Optionally add a poster image in /public/posters/ shown before play.
 */
export const projects: Project[] = [
  {
    id: "fena",
    title: "Fena",
    category: "mobile",
    tagline: "Fitness & workout tracker",
    description:
      "A React Native fitness app with custom workout plans, streak tracking and progress analytics, powered by a Node.js backend.",
    video: "/videos/fenaIntro.mov",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "namaz-break",
    title: "Namaz Break",
    category: "mobile",
    tagline: "Prayer times & reminders",
    description:
      "An Islamic prayer companion with accurate Namaz timings, reminders and Qibla direction. Built with React Native and Firebase.",
    video: "/videos/namaz-break.mp4",
    tech: ["React Native", "Firebase"],
    featured: true,
  },
  {
    id: "two-min-for-the-self",
    title: "2 Min 4 The Self",
    category: "mobile",
    tagline: "2-minute self-care app",
    description:
      "A wellbeing app offering quick two-minute mindfulness and self-care sessions with daily reminders and streaks. React Native front end with a Node.js API.",
    video: "/videos/two-min-for-the-self.mp4",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "pegnify",
    title: "Pegnify",
    category: "mobile",
    tagline: "Marketers and Producers",
    description:
      "A platform for marketers and producers, week-by-week updates, backed by a Node.js API.",
    video: "/videos/pegnify.mp4",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "wishbox",
    title: "Wishbox",
    category: "mobile",
    tagline: "Wishlist & gifting app",
    description:
      "A wishlist app to create, organize and share gift ideas for any occasion, with a Node.js backend.",
    video: "/videos/wishbox.mp4",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
  },

];
