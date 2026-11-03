import SectionHeading from "@/components/SectionHeading";
import { solutions } from "@/data/site";

export default function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="section-y"
    >
      <div className="container-x">
        <SectionHeading
          id="solutions-title"
          title="Solutions shaped by the industry you work in."
          text="Every sector has its own rules, users and risks. We build with those in mind from the first sketch."
        />

        <ul className="mt-12 border-t border-brand-deep/10 sm:mt-16">
          {solutions.map(({ title, text, tags, icon: Icon }) => (
            <li
              key={title}
              className="group grid items-start gap-4 border-b border-brand-deep/10 py-7 transition-colors duration-300 hover:bg-brand-mint/50 md:grid-cols-12 md:gap-8 md:px-5"
            >
              <div className="flex items-center gap-4 md:col-span-4">
                <Icon
                  size={26}
                  aria-hidden="true"
                  className="shrink-0 text-brand-deep/60 transition-colors group-hover:text-brand-deep"
                />
                <h3 className="text-2xl font-semibold transition-transform duration-300 md:group-hover:translate-x-1">
                  {title}
                </h3>
              </div>
              <p className="text-muted md:col-span-5">{text}</p>
              <ul
                className="flex flex-wrap gap-2 md:col-span-3 md:justify-end"
                aria-label={`${title} focus areas`}
              >
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-brand-deep/15 bg-white px-3 py-1 text-sm text-brand-deep"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
