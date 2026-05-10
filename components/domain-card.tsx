import type { ResearchDomain } from "@/data/research";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DomainCardProps = {
  domain: ResearchDomain;
};

export function DomainCard({ domain }: DomainCardProps) {
  const Icon = domain.icon;

  return (
    <Card className="h-full transition hover:-translate-y-1 hover:shadow-soft">
      <CardHeader>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="leading-7">{domain.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">{domain.description}</p>
      </CardContent>
    </Card>
  );
}
