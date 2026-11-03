import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "Contact",
  description: "Tell Hexasoftsolutions about your next project.",
};
export default function Contact() {
  return (
    <>
      <PageHeader
        title="Let’s make something meaningful"
        intro="Share a little about your goals. The details below are placeholders until verified company information is added."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-9">
          <h2 className="mb-6 font-display text-2xl font-semibold text-forest">
            Tell us about your project
          </h2>
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div>
            <h2 className="font-display text-xl font-semibold text-forest">
              Contact details
            </h2>
            <p className="mt-3 leading-7 text-muted">
              hello@hexasoftsolutions.example
              <br />
              +1 (000) 000-0000
              <br />
              <span className="text-sm">Placeholder contact information</span>
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-forest">
              Working hours
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Monday–Friday, 9:00–17:00
              <br />
              Timezone and hours are placeholders.
            </p>
          </div>
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-forest/25 bg-mint/50 p-6 text-center text-sm text-forest">
            Map placeholder
            <br />
            Add verified office address and map embed.
          </div>
        </aside>
      </section>
    </>
  );
}
