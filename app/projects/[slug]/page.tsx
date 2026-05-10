import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, ImageIcon, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { getProjectGallery, getProjectStatusBadges } from "@/lib/project-utils";

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

  const gallery = getProjectGallery(project);
  const statusBadges = getProjectStatusBadges(project);
  const links = [
    { label: "GitHub", href: project.links.github, icon: Github, placeholder: "GitHub repository placeholder" },
    { label: "Demo", href: project.links.demo, icon: ExternalLink, placeholder: "Demo link placeholder" },
    { label: "Paper", href: project.links.paper, icon: ExternalLink, placeholder: "Paper link placeholder" }
  ];

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
              {statusBadges.map((badge) => (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              ))}
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

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Image gallery</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {gallery.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 36vw, 100vw"
                    />
                  </div>
                ))}
                <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
                  <div>
                    <ImageIcon className="mx-auto h-8 w-8 text-cyan-700" />
                    <p className="mt-3 text-sm font-semibold text-slate-950">Gallery placeholder</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Add result figures, screenshots, dataset samples, or demo frames in /data/projects.ts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Video</h2>
              {project.links.video ? (
                <Card className="mt-5">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-950">Project video or demo recording</p>
                      <p className="mt-1 text-sm text-slate-500">
                        This placeholder can later be replaced with an embedded video player.
                      </p>
                    </div>
                    <Button asChild>
                      <Link href={project.links.video}>
                        <PlayCircle className="h-4 w-4" />
                        Open video
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="mt-5 flex min-h-48 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
                  <div>
                    <PlayCircle className="mx-auto h-9 w-9 text-cyan-700" />
                    <p className="mt-3 font-semibold text-slate-950">Video placeholder</p>
                    <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                      Add a demo video, presentation recording, or embedded media link when available.
                    </p>
                  </div>
                </div>
              )}
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Related publications</h2>
              <div className="mt-5 grid gap-3">
                {project.relatedPublications?.length ? (
                  project.relatedPublications.map((publication) => (
                    <Card key={publication.title}>
                      <CardContent className="p-5">
                        <p className="font-semibold text-slate-950">{publication.title}</p>
                        {publication.year ? <p className="mt-1 text-sm text-slate-500">{publication.year}</p> : null}
                        {publication.url ? (
                          <Button asChild variant="link" className="mt-2 h-auto p-0">
                            <Link href={publication.url}>
                              Publication link <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        ) : null}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-5">
                      <p className="font-semibold text-slate-950">Related publication placeholder</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Add paper titles, DOI links, PDFs, or citation metadata when this project is connected to a
                        publication.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
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
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {statusBadges.map((badge) => (
                        <Badge key={badge} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </dd>
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
                    const Icon = link.icon;
                    return link.href ? (
                      <Button key={link.label} asChild variant="outline" className="justify-start">
                        <Link href={link.href}>
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </Button>
                    ) : (
                      <div
                        key={link.label}
                        className="flex items-center gap-2 rounded-md border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-500"
                      >
                        <Icon className="h-4 w-4" />
                        {link.placeholder}
                      </div>
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
