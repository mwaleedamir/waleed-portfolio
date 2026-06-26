import { Smartphone, Globe, Layers, Zap } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps built with React Native — native feel, one codebase, faster time to market.",
    icon: Smartphone,
    features: [
      "React Native & Expo",
      "App Store & Play Store deployment",
      "Push notifications & offline support",
      "Smooth 60fps animations",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, SEO-friendly websites and web apps with Next.js that load fast and convert visitors into customers.",
    icon: Globe,
    features: [
      "Next.js & React",
      "Responsive, mobile-first design",
      "SEO & performance optimized",
      "Headless CMS integration",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Solutions",
    description:
      "End-to-end product engineering — from database and APIs to the pixel-perfect interface your users interact with.",
    icon: Layers,
    features: [
      "REST & GraphQL APIs",
      "Authentication & payments",
      "Database design",
      "Cloud deployment & CI/CD",
    ],
  },
  {
    id: "optimization",
    title: "Performance & UI Polish",
    description:
      "Already have a product? I audit, refactor and elevate it — faster load times and a UI that feels premium.",
    icon: Zap,
    features: [
      "Core Web Vitals optimization",
      "UI/UX refinement",
      "Accessibility (a11y)",
      "Code review & refactoring",
    ],
  },
];
