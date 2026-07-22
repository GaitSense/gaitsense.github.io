import Link from "next/link";
import Image from "next/image";
import { Github, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-md bg-white ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
              <Image src="/images/lab-logo.png" alt="GAIT Lab logo" fill className="object-contain p-1" />
            </span>
            <div>
              <p className="font-bold text-slate-950">{siteConfig.shortName}</p>
              <p className="text-sm text-slate-500">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Research in generative AI, medical imaging, digital image processing, smart sensing, IoT,
            machine learning, and deep learning.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-950">Contact</h2>
          <div className="grid gap-3 text-sm text-slate-600">
            <span className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-cyan-600" />
              {siteConfig.email}
            </span>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-600" />
              {siteConfig.address}
            </span>
            <div className="flex gap-2 pt-1">
              <Link href={siteConfig.links.github} aria-label="GitHub" className="rounded-md border p-2 hover:bg-slate-50">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4">
        <div className="container text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.labName}.
        </div>
      </div>
    </footer>
  );
}
