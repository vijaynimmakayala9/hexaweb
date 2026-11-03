export default function Legal({ sections }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[250px_1fr]">
      <aside className="h-fit rounded-2xl bg-white p-5 lg:sticky lg:top-28">
        <p className="mb-3 font-semibold text-forest">On this page</p>
        {sections.map(([h], i) => (
          <a
            key={h}
            href={`#legal-${i}`}
            className="block py-2 text-sm text-muted hover:text-forest"
          >
            {h}
          </a>
        ))}
      </aside>
      <article className="min-w-0">
        <p className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Legal review required: this is starter text, not legal advice. Have
          qualified counsel adapt it to your business and jurisdiction.
        </p>
        {sections.map(([h, p], i) => (
          <section id={`legal-${i}`} key={h} className="mb-9 scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold text-forest">
              {h}
            </h2>
            <p className="mt-4 leading-8 text-muted">{p}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
