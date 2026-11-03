"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/posts";
import { PostCard } from "@/components/Cards";
import CTA from "@/components/CTA";
export default function Blog() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(posts.map((p) => p.category))];
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  return (
    <>
      <PageHeader
        title="Ideas for building better digital products"
        intro="Sample articles on engineering, product design, cloud and responsible automation. Replace sample content before launch."
      />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-10 grid gap-8 rounded-3xl bg-forest p-8 text-white md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-leaf">Featured article · Sample</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              {posts[0].title}
            </h2>
            <p className="mt-4 text-white/70">{posts[0].excerpt}</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8">
            <p className="text-sm text-white/60">Popular topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cats.slice(1).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="rounded-full border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-7 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`min-h-11 rounded-full px-4 text-sm ${cat === c ? "bg-forest text-white" : "border bg-white text-forest"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PostCard key={p.slug} item={p} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
