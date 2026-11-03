export default function LegalPage({ title, updated, children }) {
  return (
    <main id="main" className="container-x max-w-3xl pb-24 pt-32 sm:pt-40">
      <h1 className="text-h2">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      <p className="mt-6 rounded-lg bg-brand-mint px-4 py-3 text-sm text-brand-deep">
        This is starter text. Have it reviewed by a qualified professional and
        adapt it to your business before publishing.
      </p>
      <div className="mt-8 space-y-6 text-ink/85 [&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold">
        {children}
      </div>
    </main>
  );
}
