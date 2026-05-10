import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
        <div className="relative aspect-[16/9] bg-slate-100">
          <Image src={project.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.status}</Badge>
          </div>
          <CardTitle className="leading-7">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">{project.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
            View project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
