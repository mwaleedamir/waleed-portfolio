import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/ui/BrandIcons";
import type { NavLink, SocialLink, Stat } from "@/types";

/**
 * Central place for all of Waleed's personal info.
 * Update the values here and they flow through the whole site.
 */
export const profile = {
  name: "Waleed Amir",
  firstName: "Waleed",
  roles: ["Mobile App Developer", "Web Developer", "Full-Stack Engineer"],
  headline: "I build fast, beautiful apps for mobile & web.",
  subheadline:
    "Freelance developer helping startups and businesses ship polished React Native and Next.js products that users love and clients trust.",
  about:
    "I'm Waleed, a developer with a passion for crafting clean, high-performance applications. Over the past few years I've partnered with founders and teams to turn ideas into shipped products — from cross-platform mobile apps to modern web platforms. I care deeply about pixel-perfect UI, smooth performance, and writing maintainable code that scales with your business.",
  location: "Available worldwide · Remote",
  email: "waleedamir569@gmail.com",
  // Placeholder SVG ships with the project — drop in your real photo and
  // point this at "/profile/waleed.jpg".
  avatar: "/profile/waleed.svg",
  resumeUrl: "/waleed-amir-resume.pdf",
} as const;

export const stats: Stat[] = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Years Experience", value: "4+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
  { label: "X", href: "https://x.com/", icon: XIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
