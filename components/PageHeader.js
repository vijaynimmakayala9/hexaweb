import Link from "next/link";
export default function PageHeader({ title, intro, crumbs = [] }) {
  return (
    <header className="bg-mint/50 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              {" "}
              / <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>
        <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-forest sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{intro}</p>
        )}
      </div>
    </header>
  );
}
