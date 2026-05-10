import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { positions, type Position } from "@/data/positions";

export const metadata = {
  title: "Open Positions"
};

const categories: Position["category"][] = ["MS Thesis", "Final Year Project", "Research Assistant", "Collaboration"];

export default function OpenPositionsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Open Positions"
          title="Join the lab"
          description="These opportunities are placeholder entries. Replace them with current thesis topics, FYP titles, RA calls, eligibility details, deadlines, and application instructions."
        />
        <div className="mt-10 space-y-10">
          {categories.map((category) => {
            const grouped = positions.filter((position) => position.category === category);
            if (grouped.length === 0) return null;

            return (
              <section key={category}>
                <h2 className="mb-5 text-2xl font-bold text-slate-950">{category}</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {grouped.map((position) => (
                    <Card key={position.title}>
                      <CardContent className="p-6">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary">{position.category}</Badge>
                          <Badge variant="outline">{position.status}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-950">{position.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{position.summary}</p>
                        <ul className="mt-5 grid gap-2 text-sm text-slate-600">
                          {position.requirements.map((requirement) => (
                            <li key={requirement} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link href="/contact">
              Contact the lab <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
