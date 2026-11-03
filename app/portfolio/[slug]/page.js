import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.description } : {};
}
export default function ProjectPage({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  const i = projects.indexOf(p);
  return (
    <>
      <PageHeader
        title={p.title}
        intro={p.description}
        crumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-mint">
          <Image
            src={p.image}
            alt={`${p.title} sample visual`}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest">
              Overview
            </h2>
            <p className="mt-4 leading-7 text-muted">{p.overview}</p>
            <h2 className="mt-8 font-display text-2xl font-semibold text-forest">
              The challenge
            </h2>
            <p className="mt-4 leading-7 text-muted">{p.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest">
              The solution
            </h2>
            <p className="mt-4 leading-7 text-muted">{p.solution}</p>
            <h2 className="mt-8 font-display text-2xl font-semibold text-forest">
              Technology
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-mint px-3 py-2 text-sm text-forest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-7">
          <h2 className="font-display text-2xl font-semibold text-forest">
            Results
          </h2>
          <p className="mt-2 text-sm text-muted">
            Illustrative placeholders. Replace with verified project metrics.
          </p>
          <ul className="mt-5 space-y-3">
            {p.results.map((x) => (
              <li key={x}>✓ {x}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-between gap-4">
          <Link
            href={`/portfolio/${projects[(i + projects.length - 1) % projects.length].slug}`}
            className="font-semibold text-forest"
          >
            ← Previous project
          </Link>
          <Link
            href={`/portfolio/${projects[(i + 1) % projects.length].slug}`}
            className="font-semibold text-forest"
          >
            Next project →
          </Link>
        </div>
      </div>
      <CTA />
    </>
  );
}
