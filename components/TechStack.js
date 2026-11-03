import SectionHeading from "@/components/SectionHeading";
import { techGroups } from "@/data/site";

export default function TechStack() {
  return (
    <section
      id="technology"
      aria-labelledby="tech-title"
      className="section-y border-y border-brand-deep/10 bg-white"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="tech-title"
            title="Proven tools, chosen for the job."
            text="We pick technology for maintainability and fit, not trend. Here is what we build with most."
          />
        </div>

        <dl className="divide-y divide-brand-deep/10 border-y border-brand-deep/10 lg:col-span-8">
          {techGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <dt className="font-display text-lg font-semibold text-brand-deep">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 bg-brand-bg px-3.5 py-1.5 text-sm font-medium text-brand-deep"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-brand-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
