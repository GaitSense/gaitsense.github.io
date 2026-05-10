"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsFilterProps = {
  projects: Project[];
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category))).sort()] as const,
    [projects]
  );
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((project) => project.category === (active as ProjectCategory));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={active === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(category)}
            className={cn(active === category && "bg-slate-900")}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
