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
          description="Browse current, completed, student, and placeholder project entries. Cards link to detail pages with galleries, videos, links, and related publication placeholders."
        />
        <div className="mt-10">
          <ProjectsFilter projects={projects} />
        </div>
      </div>
    </section>
  );
}
