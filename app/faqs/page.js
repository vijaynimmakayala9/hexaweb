"use client";
import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import { faqs } from "@/data/faqs";
import CTA from "@/components/CTA";
export default function FAQs() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      faqs.filter((f) =>
        (f.q + " " + f.a + " " + f.category)
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <PageHeader
        title="Frequently asked questions"
        intro="A few helpful answers about working with us and building digital products."
      />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <label htmlFor="faq-search" className="sr-only">
          Search FAQs
        </label>
        <input
          id="faq-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="mb-10 min-h-12 w-full rounded-xl border border-forest/15 bg-white px-4 outline-none focus:border-forest"
        />
        {["General", "Services", "Pricing and process", "Support"].map(
          (cat) => {
            const items = filtered.filter((f) => f.category === cat);
            return items.length ? (
              <section key={cat} className="mb-10">
                <h2 className="mb-4 font-display text-2xl font-semibold text-forest">
                  {cat}
                </h2>
                <Accordion items={items.map((f) => ({ q: f.q, a: f.a }))} />
              </section>
            ) : null;
          },
        )}
        {!filtered.length && (
          <p className="text-muted">
            No matching questions. Try another search.
          </p>
        )}
        <div className="mt-12 rounded-2xl bg-mint p-7">
          <h2 className="font-display text-2xl font-semibold text-forest">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted">
            Tell us what you’re working on and we’ll help you find the next
            step.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-block font-semibold text-forest"
          >
            Contact us ↗
          </a>
        </div>
      </section>
      <CTA />
    </>
  );
}
