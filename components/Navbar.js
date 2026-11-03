"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/data/site";
import { services } from "@/data/services";
export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false),
    [drop, setDrop] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    function esc(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setDrop(false);
      }
    }
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-forest/[.08] bg-[#f8fbf8]/90 backdrop-blur-2xl">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Main navigation"
        >
          {nav.map(([label, href]) => (
            <div key={href} className="relative">
              <Link
                href={href}
                className={`relative py-3 text-[13px] font-semibold transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-forest after:transition-transform hover:text-forest hover:after:scale-x-100 ${path === href || path.startsWith(href + "/") ? "text-forest after:scale-x-100" : "text-gray-600"}`}
              >
                {label}
              </Link>
              {label === "Services" && (
                <button
                  onClick={() => setDrop(!drop)}
                  aria-label="Toggle services menu"
                  aria-expanded={drop}
                  className="ml-1 rounded p-1 align-middle text-gray-500 hover:bg-mint"
                >
                  <ChevronDown size={13} />
                </button>
              )}
              {label === "Services" && drop && (
                <div className="absolute left-0 top-10 w-[340px] rounded-2xl border border-forest/10 bg-white p-3 shadow-lift">
                  <div className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-muted">
                    Explore capabilities
                  </div>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-forest hover:bg-mint"
                    >
                      {s.title}
                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0e382c] xl:inline-flex"
        >
          Let’s Talk <ArrowUpRight size={16} />
        </Link>
        <button
          className="rounded-xl p-3 text-forest hover:bg-mint xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-forest/10 bg-white px-5 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`block rounded-xl px-3 py-3.5 font-medium ${path === href ? "bg-mint text-forest" : "text-gray-700 hover:bg-paper"}`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 border-t border-forest/10 pt-3">
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-mint"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest font-semibold text-white"
          >
            Let’s Talk <ArrowUpRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
