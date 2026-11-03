export default function Loading() {
  return (
    <div className="mx-auto min-h-[55vh] max-w-7xl animate-pulse px-5 py-20">
      <div className="h-4 w-24 rounded bg-mint" />
      <div className="mt-6 h-12 max-w-xl rounded bg-mint" />
      <div className="mt-4 h-5 max-w-2xl rounded bg-gray-100" />
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[1, 2, 3].map((x) => (
          <div key={x} className="h-64 rounded-2xl bg-gray-100" />
        ))}
      </div>
    </div>
  );
}
