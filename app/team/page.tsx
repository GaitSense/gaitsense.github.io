import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, type TeamMember } from "@/data/team";

export const metadata = {
  title: "Team"
};

const roles: TeamMember["role"][] = ["Faculty", "PhD Students", "MS Students", "FYP Students", "Alumni"];

export default function TeamPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Team"
          title="People at GAIT Lab"
          description="Faculty entries use supplied names. Student and alumni rows are placeholders until names, photos, topics, and profile links are available."
        />

        <div className="mt-10 space-y-12">
          {roles.map((role) => {
            const members = teamMembers.filter((member) => member.role === role);
            if (members.length === 0) return null;

            return (
              <section key={role}>
                <h2 className="mb-5 text-2xl font-bold text-slate-950">{role}</h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {members.map((member) => (
                    <Card key={`${member.role}-${member.name}`} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] bg-slate-100">
                          <Image src={member.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 100vw" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
                          <p className="mt-1 text-sm font-medium text-cyan-700">{member.title}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {member.interests.map((interest) => (
                              <Badge key={interest} variant="outline">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {member.email ? (
                              <Button asChild size="sm" variant="outline">
                                <Link href={`mailto:${member.email}`}>
                                  <Mail className="h-4 w-4" />
                                  Email
                                </Link>
                              </Button>
                            ) : null}
                            {member.profileUrl ? (
                              <Button asChild size="sm" variant="outline">
                                <Link href={member.profileUrl}>
                                  <ExternalLink className="h-4 w-4" />
                                  Profile
                                </Link>
                              </Button>
                            ) : null}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
