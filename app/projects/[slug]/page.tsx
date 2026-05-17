import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, PlayCircle } from "lucide-react";

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
    { label: "GitHub", href: project.links.github, icon: Github, unavailable: "Private repository" },
    { label: "Demo", href: project.links.demo, icon: ExternalLink, unavailable: "Demo not available" },
    { label: "Paper", href: project.links.paper, icon: ExternalLink, unavailable: "Paper not available" }
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
              <div className="mt-4 space-y-4 leading-7 text-slate-600">
                {project.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950">Video</h2>
              {project.links.video ? (
                <Card className="mt-5">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-950">Project video or demo recording</p>
                      <p className="mt-1 text-sm text-slate-500">Supplementary video material is available.</p>
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
                    <p className="mt-3 font-semibold text-slate-950">Video not available</p>
                    <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                      No public demo video or presentation recording is currently available for this project.
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
                      <p className="font-semibold text-slate-950">No related publications listed</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Related papers will appear here when they are publicly available.
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
                  {project.contributors?.length ? (
                    <div>
                      <dt className="font-medium text-slate-500">Contributors</dt>
                      <dd className="mt-1 leading-6 text-slate-950">{project.contributors.join(", ")}</dd>
                    </div>
                  ) : null}
                  {project.technologies?.length ? (
                    <div>
                      <dt className="font-medium text-slate-500">Stack / technologies</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <Badge key={technology} variant="indigo">
                            {technology}
                          </Badge>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                  {project.datasets?.length ? (
                    <div>
                      <dt className="font-medium text-slate-500">Data</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.datasets.map((dataset) => (
                          <Badge key={dataset} variant="outline">
                            {dataset}
                          </Badge>
                        ))}
                      </dd>
                    </div>
                  ) : null}
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
                        {link.unavailable}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
