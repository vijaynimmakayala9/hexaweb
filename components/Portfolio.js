import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/site";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="section-y"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="portfolio-title"
            title="Selected work and case studies."
            text="A look at the kinds of products we build across industries."
          />
          <p className="max-w-xs rounded-lg bg-brand-mint px-4 py-3 text-sm text-brand-deep">
            Sample projects shown for layout. Replace them with your real case
            studies.
          </p>
        </div>

        <Reveal className="mt-12 sm:mt-16">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <li key={p.title} className={p.featured ? "lg:col-span-2" : ""}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-deep/10 bg-white transition-shadow duration-300 hover:shadow-soft">
                  <div className="relative aspect-[3/2] overflow-hidden bg-brand-mint lg:aspect-auto lg:h-72">
                    <Image
                      src={p.image}
                      alt={`${p.title} project preview`}
                      fill
                      sizes={
                        p.featured
                          ? "(min-width:1024px) 66vw, (min-width:768px) 50vw, 100vw"
                          : "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      }
                      priority={i === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="w-fit rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep">
                      {p.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-muted">{p.text}</p>
                    <Link
                      href={p.href}
                      className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-deep after:absolute after:inset-0"
                    >
                      View project
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                      <span className="sr-only">: {p.title}</span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
