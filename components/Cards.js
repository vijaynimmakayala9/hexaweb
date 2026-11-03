import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  PanelsTopLeft,
  Smartphone,
  Palette,
  Cloud,
  Bot,
} from "lucide-react";
const icons = { Code2, PanelsTopLeft, Smartphone, Palette, Cloud, Bot };
export function ServiceCard({ item }) {
  const Icon = icons[item.icon] || Code2;
  return (
    <Link
      href={`/services/${item.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-lift sm:p-7"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-mint/50 transition duration-300 group-hover:scale-125" />
      <span className="relative mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f3ea] text-forest transition duration-300 group-hover:bg-forest group-hover:text-white">
        <Icon size={23} />
      </span>
      <h3 className="relative font-display text-xl font-semibold tracking-tight text-forest">
        {item.title}
      </h3>
      <p className="relative mt-3 flex-1 leading-7 text-muted">{item.short}</p>
      <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest">
        Explore service{" "}
        <ArrowUpRight
          size={16}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </Link>
  );
}
export function ProjectCard({ item }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-forest/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mint">
        <Image
          src={item.image}
          alt={`${item.title} sample project`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        <span className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-forest opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          View case study ↗
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-[#58816b]">
          {item.category}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-forest group-hover:underline">
          {item.title}
        </h3>
        <p className="mt-2 leading-6 text-muted">{item.description}</p>
      </div>
    </Link>
  );
}
export function PostCard({ item }) {
  return (
    <Link
      href={`/blog/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-forest/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#e4f1e7] p-6">
        <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-leaf/60 blur-2xl" />
        <div className="relative flex h-full items-end rounded-xl border border-white/60 bg-gradient-to-br from-white/60 to-leaf/50 p-5">
          <span className="font-display text-2xl font-semibold tracking-tight text-forest">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-muted">
          {item.date} <span className="mx-1">·</span> {item.read} read
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-forest group-hover:underline">
          {item.title}
        </h3>
        <p className="mt-3 leading-6 text-muted">{item.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
          Read article{" "}
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
