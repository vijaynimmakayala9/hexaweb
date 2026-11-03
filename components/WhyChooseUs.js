import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { reasons } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-title"
      className="on-dark section-y bg-brand-deep"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="why-title"
              light
              title="Why teams choose Hexasoftsolutions."
              text="We work like part of your team: open about progress, careful with quality and around after launch."
            />
            <Link href="#contact" className="btn-light mt-8">
              Talk to our team
            </Link>
          </div>
        </div>

        <ul className="divide-y divide-white/15 border-y border-white/15 lg:col-span-7">
          {reasons.map(({ title, text, icon: Icon }) => (
            <li key={title} className="flex gap-5 py-7">
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-primary">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="!text-white text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-brand-mint/80">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
