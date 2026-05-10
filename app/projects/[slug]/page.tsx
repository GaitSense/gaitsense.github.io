import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? project.title : "Project"
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const links = [
    project.links.github ? { label: "GitHub", href: project.links.github, icon: Github } : null,
    project.links.demo ? { label: "Demo", href: project.links.demo, icon: ExternalLink } : null,
    project.links.paper ? { label: "Paper", href: project.links.paper, icon: ExternalLink } : null,
    project.links.video ? { label: "Video", href: project.links.video, icon: PlayCircle } : null
  ].filter(Boolean);

  return (
    <article className="py-16 md:py-20">
      <div className="container">
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.status}</Badge>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-normal text-slate-950 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{project.summary}</p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image src={project.image} alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 65vw, 100vw" />
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Overview</h2>
              <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
            </section>
          </div>

          <aside className="space-y-5">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-950">Project details</h2>
                <dl className="mt-5 grid gap-4 text-sm">
                  <div>
                    <dt className="font-medium text-slate-500">Category</dt>
                    <dd className="mt-1 text-slate-950">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">Status</dt>
                    <dd className="mt-1 text-slate-950">{project.status}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">Tags</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="indigo">
                          {tag}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-slate-950">Links</h2>
                <div className="mt-5 grid gap-3">
                  {links.map((link) => {
                    if (!link) return null;
                    const Icon = link.icon;
                    return (
                      <Button key={link.label} asChild variant="outline" className="justify-start">
                        <Link href={link.href}>
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Placeholder links should be replaced in /data/projects.ts when project assets are ready.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
