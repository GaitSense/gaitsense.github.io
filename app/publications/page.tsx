import { PublicationsFilter } from "@/components/publications-filter";
import { SectionHeading } from "@/components/section-heading";
import { publications } from "@/data/publications";

export const metadata = {
  title: "Publications"
};

export default function PublicationsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Publications"
          title="Selected publications"
          description="A curated list of recent publications. Add complete author metadata, BibTeX links, PDFs, and lab member tags in /data/publications.ts."
        />
        <div className="mt-10">
          <PublicationsFilter publications={publications} />
        </div>
      </div>
    </section>
  );
}
