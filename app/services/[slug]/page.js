import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Accordion from "@/components/Accordion";
import Carousel from "@/components/Carousel";
import { ServiceCard, ProjectCard } from "@/components/Cards";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  return s ? { title: s.title, description: s.summary } : {};
}
export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return notFound();
  return (
    <>
      <PageHeader
        title={s.title}
        intro={s.summary}
        crumbs={[{ label: "Services", href: "/services" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_.8fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold text-forest">
            What this makes possible
          </h2>
          <ul className="mt-6 space-y-4">
            {s.benefits.map((x) => (
              <li key={x} className="flex gap-3 leading-7">
                <span className="text-forest">✓</span>
                {x}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-display text-2xl font-semibold text-forest">
            What’s included
          </h2>
          <ul className="mt-5 space-y-3 text-muted">
            {s.includes.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl bg-white p-7 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-forest">
            Our process
          </h2>
          <ol className="mt-6 space-y-5">
            {s.process.map((x, i) => (
              <li key={x} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint font-semibold text-forest">
                  {i + 1}
                </span>
                <span className="pt-1 font-medium">{x}</span>
              </li>
            ))}
          </ol>
          <h3 className="mt-8 font-semibold text-forest">Technologies</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.tech.map((t) => (
              <span key={t} className="rounded-full bg-paper px-3 py-2 text-sm">
                {t}
              </span>
            ))}
          </div>
        </aside>
      </section>
      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-7 font-display text-3xl font-semibold text-forest">
            Related work
          </h2>
          <Carousel items={services} label="Services" type="services" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="mb-6 font-display text-3xl font-semibold text-forest">
          FAQs
        </h2>
        <Accordion items={s.faqs.map(([q, a]) => ({ q, a }))} />
      </section>
      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 font-display text-2xl font-semibold text-forest">
            Explore related services
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services
              .filter((x) => x.slug !== s.slug)
              .slice(0, 3)
              .map((x) => (
                <ServiceCard key={x.slug} item={x} />
              ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
