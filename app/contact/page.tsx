import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Contact GAIT Lab"
          description="Replace the placeholder email, address, social links, and map panel in /data/site.ts and this page when official details are available."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <CardContent className="grid gap-5 p-6">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-semibold text-slate-950">Email</h2>
                  <Link href={`mailto:${siteConfig.email}`} className="text-sm text-slate-600 hover:text-slate-950">
                    {siteConfig.email}
                  </Link>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-semibold text-slate-950">Address</h2>
                  <p className="text-sm leading-6 text-slate-600">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild variant="outline">
                  <Link href={siteConfig.links.github}>
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={siteConfig.links.linkedin}>
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex min-h-[360px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
            <div>
              <MapPin className="mx-auto h-10 w-10 text-cyan-700" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950">Map placeholder</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Replace this panel with an embedded campus map, Google Maps iframe, or static location image when
                the official address is available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
