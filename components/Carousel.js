"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard, ProjectCard } from "@/components/Cards";

export default function Carousel({
  items,
  type = "services",
  label = "Content carousel",
}) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  function move(dir) {
    const el = ref.current;
    if (!el) return;

    el.scrollBy({
      left: dir * el.clientWidth * 0.82,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

    setIndex(Math.max(0, Math.min(items.length - 1, index + dir)));
  }

  function renderCard(item) {
    if (type === "projects") {
      return <ProjectCard item={item} />;
    }

    return <ServiceCard item={item} />;
  }

  return (
    <section aria-label={label}>
      <div className="mb-5 flex justify-end gap-2">
        <button
          aria-label="Previous items"
          onClick={() => move(-1)}
          className="rounded-full border p-3 hover:bg-mint"
        >
          <ChevronLeft />
        </button>

        <button
          aria-label="Next items"
          onClick={() => move(1)}
          className="rounded-full border p-3 hover:bg-mint"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 focus-visible:outline-forest"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.slug || item.title || i}
            className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
            whileHover={{ y: -4 }}
          >
            {renderCard(item)}
          </motion.div>
        ))}
      </div>

      <div className="h-1 rounded-full bg-gray-200">
        <div
          className="h-1 rounded-full bg-forest transition-all"
          style={{
            width: `${100 / (items.length || 1)}%`,
            marginLeft: `${(index * 100) / (items.length || 1)}%`,
          }}
        />
      </div>
    </section>
  );
}