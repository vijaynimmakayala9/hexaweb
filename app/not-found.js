import Link from "next/link";
export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-semibold text-forest">404 · Page not found</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-forest">
        This path ends here.
      </h1>
      <p className="mt-4 text-muted">
        The page may have moved or the address may be mistyped.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-full bg-forest px-6 py-3 font-semibold text-white"
      >
        Back to home
      </Link>
    </section>
  );
}
