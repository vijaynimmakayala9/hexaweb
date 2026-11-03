import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-y bg-white"
    >
      <div className="container-x">
        <SectionHeading
          id="services-title"
          title="Everything you need to design, build and run your product."
          text="One team across strategy, design, engineering and operations, so nothing gets lost between handoffs."
        />

        <Reveal className="mt-12 sm:mt-16">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-brand-deep/10 bg-brand-deep/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon: Icon }) => (
              <li
                key={title}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-brand-mint/60 sm:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint text-brand-deep transition-colors duration-300 group-hover:bg-brand-deep group-hover:text-brand-primary">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
