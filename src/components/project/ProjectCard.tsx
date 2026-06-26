"use client";

import { motion } from "framer-motion";
import { Download, Globe } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import {
  AppStoreIcon,
  GithubIcon,
  GooglePlayIcon,
} from "@/components/ui/BrandIcons";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";
import { VideoPlayer } from "./VideoPlayer";

/**
 * A single project showcase. Mobile projects render their portrait video in a
 * phone frame; web projects render their landscape video in a browser frame.
 * The two layouts alternate sides on large screens for visual rhythm.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isMobile = project.category === "mobile";
  const flip = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, x: flip ? 40 : -40 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* Video / device */}
      <div
        className={`relative flex justify-center ${flip ? "lg:order-2" : ""}`}
      >
        {/* Soft glow behind the device */}
        <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 self-center rounded-full bg-primary/20 blur-3xl" />
        {isMobile ? (
          <PhoneFrame>
            <VideoPlayer src={project.video} poster={project.poster} />
          </PhoneFrame>
        ) : (
          <BrowserFrame url={project.websiteUrl ? "yoursite.com" : "demo.app"}>
            <VideoPlayer src={project.video} poster={project.poster} />
          </BrowserFrame>
        )}
      </div>

      {/* Details */}
      <div className={flip ? "lg:order-1" : ""}>
        <div className="mb-3 flex items-center gap-3">
          <Badge tone={isMobile ? "accent" : "primary"}>
            {isMobile ? "Mobile App" : "Web App"}
          </Badge>
          {project.featured && <Badge tone="default">Featured</Badge>}
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary-soft">
          {project.tagline}
        </p>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* Primary action: download the APK (mobile apps). */}
          {project.apkUrl && (
            <LinkButton href={project.apkUrl} size="sm" download>
              <Download className="h-4 w-4" /> Download APK
            </LinkButton>
          )}

          {/* Optional store + website links — only render what's provided. */}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <GooglePlayIcon className="h-4 w-4" /> Google Play
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <AppStoreIcon className="h-4 w-4" /> App Store
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary-soft"
            >
              <Globe className="h-4 w-4" /> {isMobile ? "Website" : "Visit website"}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
