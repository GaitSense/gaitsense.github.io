import { ProjectsFilter } from "@/components/projects-filter";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Lab projects"
          description="Browse current, completed, and student projects. Each entry includes a concise research overview, project resources, and related publications where available."
        />
        <div className="mt-10">
          <ProjectsFilter projects={projects} />
        </div>
      </div>
    </section>
  );
}
