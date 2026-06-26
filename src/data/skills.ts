import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile",
    skills: ["React Native", "Expo", "Swift (basics)", "Kotlin (basics)", "Reanimated"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Firebase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "Vercel", "CI/CD", "Figma", "Jest"],
  },
];

/** Flat list used by the scrolling marquee. */
export const marqueeSkills: string[] = [
  "React Native",
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Redux",
  "Expo",
  "Firebase",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
];
