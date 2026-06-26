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
    id: "Fena",
    title: "Fena",
    category: "mobile",
    tagline: "Fitness & habit tracking app",
    description:
      "A React Native fitness companion with workout plans, streaks and progress analytics. Smooth gestures and offline-first sync.",
    video: "/videos/fenaIntro.mov",
    poster: "/posters/fittrack.jpg",
    tech: ["React Native", "Expo", "Redux Toolkit", "Firebase"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "shopwave",
    title: "ShopWave",
    category: "web",
    tagline: "E-commerce storefront",
    description:
      "A blazing-fast Next.js storefront with Stripe checkout, product search and a headless CMS. Scores 95+ on Lighthouse.",
    video: "/videos/shopwave.mp4",
    poster: "/posters/shopwave.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "foodie",
    title: "Foodie",
    category: "mobile",
    tagline: "Food delivery app",
    description:
      "On-demand food delivery with live order tracking, in-app maps and secure payments. Built for iOS and Android.",
    video: "/videos/foodie.mp4",
    poster: "/posters/foodie.jpg",
    tech: ["React Native", "Maps SDK", "Node.js", "Stripe"],
    liveUrl: "#",
  },
  {
    id: "dashboard",
    title: "InsightHub",
    category: "web",
    tagline: "Analytics SaaS dashboard",
    description:
      "A real-time analytics dashboard with charts, role-based access and exportable reports. Designed for data-heavy workflows.",
    video: "/videos/insighthub.mp4",
    poster: "/posters/insighthub.jpg",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
