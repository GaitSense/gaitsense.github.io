import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GraduationCap, Linkedin, Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers, type TeamMember } from "@/data/team";

export const metadata = {
  title: "Team"
};

const roles: TeamMember["role"][] = ["Current Members", "Alumni"];

export default function TeamPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Team"
          title="People at GAIT Lab"
          description="Researchers and alumni contributing to applied work in AI, imaging, and intelligent sensing."
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
                        {member.image ? (
                          <div className="relative aspect-[6/5] bg-slate-100">
                            <Image
                              src={member.image}
                              alt={`Portrait of ${member.name}`}
                              fill
                              className="object-cover object-top"
                              sizes="(min-width: 1024px) 25vw, 100vw"
                            />
                          </div>
                        ) : (
                          <div className="flex aspect-[6/5] items-center justify-center bg-gradient-to-br from-cyan-800 to-indigo-900 text-5xl font-semibold text-white">
                            {member.name
                              .split(" ")
                              .filter((part) => !["Dr.", "Mr.", "Ms."].includes(part))
                              .slice(0, 2)
                              .map((part) => part[0])
                              .join("")}
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
                          <p className="mt-1 text-sm font-medium text-cyan-700">{member.title}</p>
                          {member.bio ? <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p> : null}
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
                            {member.scholarUrl ? (
                              <Button asChild size="sm" variant="outline">
                                <Link href={member.scholarUrl}>
                                  <GraduationCap className="h-4 w-4" />
                                  Scholar
                                </Link>
                              </Button>
                            ) : null}
                            {member.linkedinUrl ? (
                              <Button asChild size="sm" variant="outline">
                                <Link href={member.linkedinUrl}>
                                  <Linkedin className="h-4 w-4" />
                                  LinkedIn
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
