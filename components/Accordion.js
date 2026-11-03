"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
export default function Accordion({ items }) {
  const [active, setActive] = useState(-1);
  return (
    <div className="divide-y divide-forest/15">
      {items.map((item, i) => (
        <div key={item.q || item[0]}>
          <button
            className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-semibold text-forest"
            aria-expanded={active === i}
            onClick={() => setActive(active === i ? -1 : i)}
          >
            <span>{item.q || item[0]}</span>
            <Plus
              className={`shrink-0 transition ${active === i ? "rotate-45" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${active === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden leading-7 text-muted">
              {item.a || item[1]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
