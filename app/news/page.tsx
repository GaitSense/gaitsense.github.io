import { CalendarDays } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { newsItems } from "@/data/news";

export const metadata = {
  title: "News"
};

export default function NewsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="News"
          title="Lab updates"
          description="Use /data/news.ts for dated lab announcements, publications, student milestones, events, and project demos."
        />
        <div className="mt-10 grid gap-4">
          {newsItems.map((item) => (
            <Card key={`${item.date}-${item.title}`}>
              <CardContent className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4" />
                    {new Intl.DateTimeFormat("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    }).format(new Date(`${item.date}T00:00:00`))}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
