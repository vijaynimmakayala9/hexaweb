import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata = {
  title: "Industry Solutions",
  description:
    "Digital capabilities for healthcare, fintech, education, commerce, enterprise and startups.",
};
const data = [
  [
    "Healthcare",
    "Connect care teams and simplify operational workflows.",
    "Patient portals, care coordination, secure data workflows.",
  ],
  [
    "Fintech",
    "Make financial experiences clearer and more dependable.",
    "Account dashboards, payment integrations, reporting tools.",
  ],
  [
    "Education",
    "Support learning journeys with accessible digital tools.",
    "Learning platforms, student portals, progress tracking.",
  ],
  [
    "E-commerce",
    "Create smoother journeys from discovery to checkout.",
    "Commerce experiences, inventory integrations, personalization.",
  ],
  [
    "Enterprise",
    "Modernize complex systems without losing operational context.",
    "Internal platforms, workflow automation, system integrations.",
  ],
  [
    "Startups",
    "Turn a focused idea into a validated, scalable product.",
    "MVP development, product design, cloud-ready foundations.",
  ],
];
export default function Solutions() {
  return (
    <>
      <PageHeader
        title="Solutions for real-world complexity"
        intro="Industry context matters. We shape digital capabilities around the people, workflows and constraints of your sector."
      />
      <section className="mx-auto max-w-7xl px-5 py-12">
        {data.map(([title, desc, cap], i) => (
          <article
            key={title}
            className="group grid gap-5 border-b border-forest/15 py-9 md:grid-cols-[.5fr_1fr_1fr_auto] md:items-center"
          >
            <span className="text-sm text-muted">Industry</span>
            <h2 className="font-display text-2xl font-semibold text-forest transition group-hover:translate-x-1">
              {title}
            </h2>
            <div>
              <p className="font-medium">{desc}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{cap}</p>
            </div>
            <Link
              href="/contact"
              aria-label={`Discuss ${title} solutions`}
              className="rounded-full border p-3 text-forest hover:bg-mint"
            >
              <ArrowUpRight />
            </Link>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
