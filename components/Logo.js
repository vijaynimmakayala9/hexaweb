import Link from "next/link";
export default function Logo({ light = false }) {
  return (
    <Link
      href="/"
      aria-label="Hexasoftsolutions home"
      className="inline-flex items-center gap-2.5"
    >
      <svg
        viewBox="0 0 44 44"
        className="h-10 w-10"
        role="img"
        aria-label="Hexasoft mark"
      >
        <path d="M22 2 39 12v20L22 42 5 32V12Z" fill="#174C3C" />
        <path d="M14 14h16v5H19v6h11v5H14z" fill="#A8D5BA" />
        <circle cx="30" cy="14" r="3" fill="#DDF5E5" />
      </svg>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${light ? "text-white" : "text-forest"}`}
      >
        Hexasoft<span className="font-normal">solutions</span>
      </span>
    </Link>
  );
}
