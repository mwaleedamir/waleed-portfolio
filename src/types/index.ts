import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

/** Any icon that renders from a `className` — lucide icons or our brand SVGs. */
export type IconComponent = ComponentType<{ className?: string }>;

export type ProjectCategory = "mobile" | "web";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  /** Path to a video in /public (portrait for mobile, landscape for web). */
  video: string;
  /** Optional poster image shown before the video plays. */
  poster?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface Stat {
  label: string;
  value: string;
}
