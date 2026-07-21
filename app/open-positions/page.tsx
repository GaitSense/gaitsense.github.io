import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Open Positions"
};

const emailSubject = encodeURIComponent("GAIT Lab research inquiry");

export default function OpenPositionsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Open Positions"
          title="Join GAIT Lab"
          description="GAIT Lab welcomes inquiries from highly motivated students and researchers interested in applied AI research."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-700">
              We are always interested in hearing from prospective research assistants, undergraduate and graduate students,
              and collaborators who want to contribute to research in generative AI, medical imaging, smart sensing, IoT,
              machine learning, and related areas.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Send a short introduction with your current program or background, research interests, and relevant work or
              portfolio links. Opportunities depend on active research directions, supervision capacity, and project fit.
            </p>
          </div>

          <div className="border-l-4 border-cyan-500 bg-white p-6 shadow-soft">
            <Mail className="h-6 w-6 text-cyan-700" />
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Start a research conversation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Email Dr. Asma Ahmad with a concise subject line and a brief description of your interest in the lab.
            </p>
            <Button asChild className="mt-5">
              <Link href={`mailto:${siteConfig.email}?subject=${emailSubject}`}>
                Email Dr. Asma Ahmad <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm font-medium text-slate-600">{siteConfig.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
