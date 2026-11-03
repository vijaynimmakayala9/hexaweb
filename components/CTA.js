import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="mx-4 my-16 overflow-hidden rounded-[2rem] bg-[#123d31] px-6 py-14 text-white sm:mx-8 sm:px-12 sm:py-16">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/10" />
        <div className="relative">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-leaf">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Let’s build what’s next
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Start Your Project
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Bring us the challenge. We’ll bring curiosity, clarity and the right
            technical craft.
          </p>
        </div>
        <Link
          href="/contact"
          className="relative inline-flex min-h-12 items-center gap-3 rounded-full bg-leaf px-6 font-semibold text-forest transition hover:-translate-y-1 hover:bg-white"
        >
          Let’s talk <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
