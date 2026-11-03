import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { posts } from "@/data/posts";
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  return p
    ? {
        title: p.title,
        description: p.excerpt,
        openGraph: { type: "article", title: p.title, description: p.excerpt },
      }
    : {};
}
export default function Article({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    datePublished: p.date,
    author: { "@type": "Organization", name: p.author },
    description: p.excerpt,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <PageHeader
        title={p.title}
        intro={p.excerpt}
        crumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <article className="mx-auto max-w-3xl px-5 py-12">
        <div className="mb-8 flex flex-wrap gap-3 text-sm text-muted">
          <span>{p.author}</span>
          <span>·</span>
          <time dateTime={p.date}>{p.date}</time>
          <span>·</span>
          <span>{p.read} read</span>
        </div>
        <div className="sticky top-20 z-10 mb-8 h-1 bg-gray-100">
          <div className="h-full w-1/3 bg-forest" />
        </div>
        <aside className="mb-10 rounded-xl bg-white p-5">
          <h2 className="font-semibold text-forest">In this article</h2>
          <ol className="mt-3 list-inside list-decimal text-sm leading-7 text-muted">
            {p.body.map((_, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="hover:text-forest">
                  {["The principle", "Practical approach", "What to remember"][
                    i
                  ] || `Section ${i + 1}`}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        {p.body.map((b, i) => (
          <section id={`section-${i}`} key={i} className="mb-8 scroll-mt-28">
            <h2 className="mb-3 font-display text-2xl font-semibold text-forest">
              {[
                "Start with the problem",
                "Make the trade-offs visible",
                "Build for the long term",
              ][i] || "Key takeaway"}
            </h2>
            <p className="text-lg leading-8 text-muted">{b}</p>
          </section>
        ))}
        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-muted">Share this sample article</p>
          <div className="mt-3 flex gap-4 text-sm font-semibold text-forest">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://hexasoftsolutions.example/blog/" + p.slug)}`}
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(p.title)}`}
            >
              X
            </a>
            <a href={`mailto:?subject=${encodeURIComponent(p.title)}`}>Email</a>
          </div>
        </div>
      </article>
      <section className="mx-auto max-w-7xl px-5 py-8">
        <h2 className="mb-6 font-display text-2xl font-semibold text-forest">
          Related reading
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="rounded-2xl bg-white p-6 hover:shadow-soft"
            >
              <p className="text-sm text-muted">{r.category}</p>
              <h3 className="mt-2 font-semibold text-forest">{r.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
