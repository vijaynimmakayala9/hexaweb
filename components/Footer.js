import Link from "next/link";
import Logo from "./Logo";
import { nav } from "@/data/site";
import { services } from "@/data/services";
export default function Footer() {
  return (
    <footer className="bg-[#10392e] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs leading-7 text-white/65">
            Thoughtful software, built to move your business forward.
          </p>
          <p className="mt-4 text-sm text-white/60">
            hello@hexasoftsolutions.example <br />
            Contact details are placeholders.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Explore</h3>
          {nav.slice(1).map(([l, h]) => (
            <Link
              key={h}
              href={h}
              className="mb-3 block text-sm text-white/70 hover:text-white"
            >
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Services</h3>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="mb-3 block text-sm text-white/70 hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Resources</h3>
          {[
            ["Blog", "/blog"],
            ["FAQs", "/faqs"],
            ["Portfolio", "/portfolio"],
          ].map(([l, h]) => (
            <Link
              key={h}
              href={h}
              className="mb-3 block text-sm text-white/70 hover:text-white"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} Hexasoftsolutions. Sample brand content.
        </span>
        <span className="flex gap-5">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
