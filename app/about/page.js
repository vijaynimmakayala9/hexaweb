import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
export const metadata = {
  title: "About",
  description:
    "Learn about the mission, values and approach of Hexasoftsolutions.",
};
export default function About() {
  return (
    <>
      <PageHeader
        title="Technology should make progress feel possible"
        intro="We are a software solutions company focused on building useful, dependable digital products with people at the center."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-forest">
            Our story
          </h2>
          <p className="mt-5 leading-8 text-muted">
            Hexasoftsolutions is presented here as a modern technology partner.
            Replace this starter story with the company’s verified history,
            founding context and team experience before launch.
          </p>
          <h2 className="mt-10 font-display text-2xl font-semibold text-forest">
            Our mission
          </h2>
          <p className="mt-4 leading-8 text-muted">
            Make technology more useful, accessible and resilient for the people
            and organizations who rely on it.
          </p>
        </div>
        <div className="rounded-3xl bg-mint p-8">
          <h2 className="font-display text-2xl font-semibold text-forest">
            Our values
          </h2>
          {[
            ["Innovation", "Curiosity guided by real-world value."],
            ["Reliability", "Thoughtful engineering and honest commitments."],
            [
              "Customer focus",
              "Listen closely, collaborate openly, deliver with care.",
            ],
          ].map(([h, p]) => (
            <div key={h} className="mt-6 border-t border-forest/15 pt-5">
              <h3 className="font-semibold text-forest">{h}</h3>
              <p className="mt-2 text-muted">{p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-semibold text-forest">
            How we work
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Discover the problem",
              "Align on outcomes",
              "Design the experience",
              "Build and validate",
              "Launch and improve",
            ].map((x, i) => (
              <div key={x} className="border-t-2 border-leaf pt-5">
                <span className="text-sm font-semibold text-forest">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-semibold">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold text-forest">
          The people behind the work
        </h2>
        <p className="mt-3 text-muted">
          Team profiles below are illustrative placeholders. Replace with
          approved names, roles and portraits.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Product Lead", "Engineering Lead", "Design Lead"].map((x) => (
            <div key={x} className="rounded-2xl bg-white p-6">
              <div className="mb-5 aspect-square max-w-40 rounded-full bg-mint" />
              <h3 className="font-semibold text-forest">Sample Team Member</h3>
              <p className="text-sm text-muted">{x} · Placeholder</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
