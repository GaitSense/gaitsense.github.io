import Link from "next/link";
import { ArrowRight, GraduationCap, Microscope, RadioTower } from "lucide-react";

import { DomainCard } from "@/components/domain-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { HomeHero } from "@/components/sections/home-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { researchDomains } from "@/data/research";

export default function HomePage() {
  const highlightedDomains = researchDomains.filter((domain) =>
    ["Generative Artificial Intelligence", "Medical Imaging", "Internet of Things", "Smart Sensing Systems"].includes(
      domain.title
    )
  );
  const projectHighlights = projects.slice(0, 3);
  return (
    <>
      <HomeHero />

      <section className="py-14 md:py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="About GAIT Lab"
              title="A student-centered research group for applied AI"
              description="GAIT Lab supports master’s theses, Final Year Projects, and applied research prototypes. The lab connects students with practical problems, publishable ideas, and hands-on model development."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Microscope,
                  title: "Research",
                  body: "Focused work in AI, imaging, sensing, forecasting, signals, and language systems."
                },
                {
                  icon: GraduationCap,
                  title: "Mentorship",
                  body: "Project pathways for MS students, FYP teams, and applied AI contributors."
                },
                {
                  icon: RadioTower,
                  title: "Prototypes",
                  body: "Deployable experiments with datasets, models, demos, and reproducible outputs."
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="bg-white transition hover:-translate-y-1 hover:shadow-soft">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Research Domains"
              title="Core directions"
              description="A short preview of the lab’s main technical areas."
            />
            <Button asChild variant="outline">
              <Link href="/research">
                View all domains <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlightedDomains.map((domain) => (
              <DomainCard key={domain.title} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected project highlights"
              description="Representative work from the current project catalog."
            />
            <Button asChild variant="outline">
              <Link href="/projects">
                Browse projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectHighlights.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container">
          <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Join GAIT Lab</p>
                <h2 className="mt-3 text-2xl font-bold tracking-normal md:text-3xl">Looking for a thesis, FYP, or collaboration?</h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  Connect with the lab to discuss research interests, project ideas, and potential collaboration.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/open-positions">
                    View opportunities <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
