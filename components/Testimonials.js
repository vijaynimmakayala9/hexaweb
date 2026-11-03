"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="section-y"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="testimonials-title"
            title="What clients say about working with us."
          />
          <p className="mt-5 inline-block rounded-lg bg-brand-mint px-4 py-3 text-sm text-brand-deep">
            Sample testimonials. Replace with verified client feedback before
            launch.
          </p>

          <div
            role="tablist"
            aria-label="Choose a testimonial"
            className="mt-8 flex flex-col"
          >
            {testimonials.map((t, i) => (
              <button
                key={t.role}
                role="tab"
                type="button"
                id={`tab-${i}`}
                aria-selected={i === index}
                aria-controls="testimonial-panel"
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    const n = (i + 1) % testimonials.length;
                    setIndex(n);
                    document.getElementById(`tab-${n}`)?.focus();
                  }
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const n =
                      (i - 1 + testimonials.length) % testimonials.length;
                    setIndex(n);
                    document.getElementById(`tab-${n}`)?.focus();
                  }
                }}
                className={`min-h-[52px] border-l-2 px-5 text-left transition-colors ${
                  i === index
                    ? "border-brand-deep font-semibold text-brand-deep"
                    : "border-brand-deep/15 text-muted hover:text-brand-deep"
                }`}
              >
                {t.role}
              </button>
            ))}
          </div>
        </div>

        <div
          id="testimonial-panel"
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          className="flex items-center lg:col-span-7"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white p-8 shadow-soft sm:p-12"
            >
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-brand-deep sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary font-display text-lg font-bold text-brand-deep"
                >
                  {current.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">
                    {current.name}
                  </span>
                  <span className="block text-sm text-muted">
                    {current.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
