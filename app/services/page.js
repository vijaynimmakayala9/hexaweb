import PageHeader from "@/components/PageHeader";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/Cards";
import CTA from "@/components/CTA";
export const metadata = {
  title: "Services",
  description:
    "Explore custom software, web, mobile, design, cloud and AI services.",
};
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Technology that fits your ambition"
        intro="From product strategy to dependable delivery, explore the capabilities that help turn complex challenges into clear progress."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} item={s} />
        ))}
      </section>
      <CTA />
    </>
  );
}
