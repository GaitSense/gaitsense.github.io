import { DomainCard } from "@/components/domain-card";
import { SectionHeading } from "@/components/section-heading";
import { researchDomains } from "@/data/research";

export const metadata = {
  title: "Research"
};

export default function ResearchPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Research"
          title="Research domains"
          description="GAIT Lab research spans intelligent sensing, applied machine learning, medical imaging, generative AI, language systems, and temporal data analysis."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchDomains.map((domain) => (
            <DomainCard key={domain.title} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
