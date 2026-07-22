import Link from "next/link";
import { Github, Mail, MapPin } from "lucide-react";

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
          description="Reach out to GAIT Lab for research collaboration, student projects, and lab opportunities."
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
              </div>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <iframe
              title="FAST NUCES Lahore map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5513466617244!2d74.30043917626048!3d31.481525749059074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1779058532453!5m2!1sen!2s"
              className="h-[360px] w-full md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
