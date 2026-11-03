export default function Marquee({ items }) {
  return (
    <div
      className="overflow-hidden border-y border-forest/10 py-5"
      aria-label="Technologies"
    >
      <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
        {[...items, ...items].map((x, i) => (
          <span
            key={i}
            className="text-sm font-semibold tracking-wide text-forest/70"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
