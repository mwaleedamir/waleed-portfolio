"use client";

import { projects } from "@/data/projects";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setProjectFilter, type ProjectFilter } from "@/store/slices/uiSlice";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectFilter }[] = [
  { label: "All work", value: "all" },
  { label: "Mobile apps", value: "mobile" },
  { label: "Web apps", value: "web" },
];

export function Projects() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((s) => s.ui.projectFilter);

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Projects with <span className="text-gradient">live demos</span>
          </>
        }
        description="Real apps I've built — watch them in action. Mobile demos play in a phone, web demos in a browser."
      />

      {/* Filter tabs (Redux state) */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => dispatch(setProjectFilter(f.value))}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              filter === f.value
                ? "border-primary bg-primary text-white"
                : "border-border text-muted hover:border-primary/50 hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-20 lg:space-y-28">
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No projects in this category yet — check back soon.
        </p>
      )}
    </Section>
  );
}
