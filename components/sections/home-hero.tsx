"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { researchDomains } from "@/data/research";
import { siteConfig } from "@/data/site";

export function HomeHero() {
  const stats = [
    [String(researchDomains.length), "Domains"],
    [String(projects.length), "Projects"],
    [String(publications.length), "Publications"]
  ];

  return (
    <section className="relative overflow-hidden bg-mesh-grid bg-[length:42px_42px]">
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1 text-sm font-medium text-cyan-800 shadow-sm">
            <FlaskConical className="h-4 w-4" />
            {siteConfig.shortName}
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-normal text-slate-950 md:text-6xl">
            {siteConfig.labName}
          </h1>
          <p className="mt-5 text-xl font-medium text-slate-700">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {siteConfig.shortDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/open-positions">Open positions</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
            <Image src="/images/lab-hero.png" alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-md bg-slate-50 p-3 text-center">
                <div className="text-2xl font-bold text-slate-950">{value}</div>
                <div className="text-xs font-medium text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
