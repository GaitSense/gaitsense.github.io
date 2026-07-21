"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Publication } from "@/data/publications";

type PublicationsFilterProps = {
  publications: Publication[];
};

export function PublicationsFilter({ publications }: PublicationsFilterProps) {
  const years = useMemo(() => ["All", ...Array.from(new Set(publications.map((item) => item.year))).sort((a, b) => b - a)], [publications]);
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(publications.map((item) => item.category))).sort()],
    [publications]
  );
  const [year, setYear] = useState<string | number>("All");
  const [category, setCategory] = useState("All");

  const filtered = publications
    .filter((item) => {
      const matchesYear = year === "All" || item.year === year;
      const matchesCategory = category === "All" || item.category === category;
      return matchesYear && matchesCategory;
    })
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

  return (
    <div>
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Year</p>
          <div className="flex flex-wrap gap-2">
            {years.map((item) => (
              <Button key={item} type="button" variant={year === item ? "default" : "outline"} size="sm" onClick={() => setYear(item)}>
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                variant={category === item ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((publication) => (
          <Card key={`${publication.year}-${publication.title}`}>
            <CardContent className="p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant="secondary">{publication.year}</Badge>
                <Badge variant="indigo">{publication.category}</Badge>
              </div>
              <h2 className="text-xl font-semibold leading-7 text-slate-950">{publication.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{publication.authors}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{publication.venue}</p>
              {publication.url ? (
                <Button asChild variant="link" className="mt-3 h-auto p-0">
                  <Link href={publication.url}>
                    DOI / publication link <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
