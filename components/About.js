import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { differentiators, stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="about-title"
              title="Software built to solve real business problems."
              text="Our mission is simple: pair strong product thinking with solid engineering, so the systems you launch today keep working as your company grows."
            />
          </div>

          <ul className="divide-y divide-brand-deep/10 border-y border-brand-deep/10 lg:col-span-7">
            {differentiators.map((d) => (
              <li
                key={d.title}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8"
              >
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <p className="text-muted">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14 sm:mt-20">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-brand-deep/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse justify-end bg-brand-mint px-5 py-8 sm:px-8"
              >
                <dt className="mt-2 text-sm text-brand-deep/75">{s.label}</dt>
                <dd className="font-display text-4xl font-bold tracking-tight text-brand-deep sm:text-5xl">
                  {s.value}
                </dd>
                {s.placeholder && (
                  <p className="order-last mb-2 inline-block self-start rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-medium text-brand-deep">
                    Placeholder: add your figure
                  </p>
                )}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
