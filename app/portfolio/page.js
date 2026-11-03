"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/Cards";
import CTA from "@/components/CTA";
export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHeader
        title="Selected work, thoughtfully made"
        intro="A collection of illustrative project stories. These sample projects and outcomes are placeholders, not client claims."
      />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold ${cat === c ? "bg-forest text-white" : "border border-forest/15 bg-white text-forest hover:bg-mint"}`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} item={p} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
