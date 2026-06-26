import type { Project } from "@/types";

/**
 * Add your real projects here.
 * - Drop video files into /public/videos/
 *   · mobile projects → portrait video (e.g. 9:16)  → shown in a phone frame
 *   · web projects    → landscape video (e.g. 16:9) → shown in a browser frame
 * - Optionally add a poster image in /public/posters/ shown before play.
 *
 * Optional links (each renders a button/link only if present):
 *   · apkUrl        → "Download APK"  (mobile — drop the .apk in /public/apks/)
 *   · playStoreUrl  → "Google Play"   (mobile, optional)
 *   · appStoreUrl   → "App Store"     (mobile, optional)
 *   · websiteUrl    → "Website"       (any project, optional)
 *   · repoUrl       → "Source"        (optional)
 */
export const projects: Project[] = [
  {
    id: "fena",
    title: "Fena",
    category: "mobile",
    tagline: "Fitness & workout tracker",
    description:
      "A React Native fitness app with custom workout plans, streak tracking and progress analytics, powered by a Node.js backend.",
    video: "/videos/fena.mp4",
    poster: "/posters/fena.jpeg",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    featured: true,
    // Fill these in when ready (remove the ones you don't have):
    apkUrl: "/apks/fena.apk",
    // playStoreUrl: "https://play.google.com/store/apps/details?id=...",
    // appStoreUrl: "https://apps.apple.com/app/id...",
    // websiteUrl: "https://fena.app",
  },
  {
    id: "namaz-break",
    title: "Namaz Break",
    category: "mobile",
    tagline: "Prayer times & reminders",
    description:
      "An Islamic prayer companion with accurate Namaz timings, reminders and Qibla direction. Built with React Native and Firebase.",
    video: "/videos/namaz-break.mp4",
    poster: "/posters/namazbreakThumbnail.jpeg",
    tech: ["React Native", "Firebase"],
    featured: true,
    apkUrl: "/apks/namazBreak.apk",
  },
  {
    id: "two-min-for-the-self",
    title: "2 Min 4 The Self",
    category: "mobile",
    tagline: "2-minute self-care app",
    description:
      "A wellbeing app offering quick two-minute mindfulness and self-care sessions with daily reminders and streaks. React Native front end with a Node.js API.",
    video: "/videos/2min.mp4",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    apkUrl: "/apks/2min.apk",
    poster: "/posters/2min.jpeg"
  },
  {
    id: "pegnify",
    title: "Pegnify",
    category: "mobile",
    tagline: "Marketers and Producers",
    description:
      "A platform for marketers and producers, week-by-week updates, backed by a Node.js API.",
    video: "/videos/pegnify.mp4",
    poster: "/posters/pegnify.jpeg",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    featured: true,
    apkUrl: "/apks/pegnify.apk",

  },
  {
    id: "evcharge",
    title: "EV Charge",
    category: "mobile",
    tagline: "Ev charging station finder",
    description:
      "An Ev Charge app is to find Electric car charging stations in the way from one destination to another, with a Node.js backend.",
    video: "/videos/ev.mp4",
    poster: "/posters/ev.jpeg",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    apkUrl: "/apks/Ev.apk",
  },

];
