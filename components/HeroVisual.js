"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cloud,
  Bot,
  Layers,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

const bars = [38, 62, 48, 80, 58, 90, 70];

// Illustrative dashboard built from CSS and SVG. It shows no real figures.
export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      aria-hidden="true"
    >
      <svg
        className="absolute -right-8 -top-10 h-56 w-56 text-brand-primary sm:-right-12 sm:h-72 sm:w-72"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 4 90 27v46L50 96 10 73V27L50 4Z"
          fill="currentColor"
          opacity="0.35"
        />
        <path
          d="M50 18 78 34v32L50 82 22 66V34L50 18Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative overflow-hidden rounded-2xl border border-brand-deep/10 bg-white shadow-soft">
        <div className="flex items-center gap-2 border-b border-brand-deep/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-mint" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-deep/20" />
          <span className="ml-3 h-2.5 w-28 rounded-full bg-brand-deep/10" />
        </div>

        <div className="flex">
          <div className="hidden w-14 flex-col items-center gap-5 border-r border-brand-deep/10 py-5 text-brand-deep/60 sm:flex">
            <LayoutDashboard size={18} className="text-brand-deep" />
            <Layers size={18} />
            <Cloud size={18} />
            <Bot size={18} />
          </div>

          <div className="min-w-0 flex-1 p-4 sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="h-3 w-32 rounded-full bg-brand-deep/80" />
                <div className="h-2 w-20 rounded-full bg-brand-deep/15" />
              </div>
              <div className="h-8 w-20 rounded-full bg-brand-mint" />
            </div>

            <div className="mt-5 rounded-xl bg-brand-bg p-3 sm:p-4">
              <svg
                viewBox="0 0 400 160"
                className="h-auto w-full"
                role="presentation"
              >
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#A8D5BA" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#A8D5BA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="400"
                    y1={y}
                    y2={y}
                    stroke="#174C3C"
                    strokeOpacity="0.08"
                  />
                ))}
                <motion.path
                  d="M0 124 C40 112 60 84 100 88 S160 122 200 92 S270 34 310 48 S370 24 400 12 L400 160 L0 160 Z"
                  fill="url(#hero-area)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />
                <motion.path
                  d="M0 124 C40 112 60 84 100 88 S160 122 200 92 S270 34 310 48 S370 24 400 12"
                  fill="none"
                  stroke="#174C3C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="col-span-2 flex h-20 items-end gap-1.5 rounded-xl border border-brand-deep/10 p-3">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-sm bg-brand-primary"
                    style={{ height: `${h}%`, originY: 1 }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.06 }}
                  />
                ))}
              </div>
              <div className="flex h-20 items-center justify-center rounded-xl bg-brand-deep">
                <div className="h-10 w-10 rounded-full border-[5px] border-brand-primary border-r-brand-mint/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -left-2 bottom-8 flex items-center gap-2 rounded-xl border border-brand-deep/10 bg-white px-3 py-2.5 shadow-soft sm:-left-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <CheckCircle2 size={18} className="text-brand-deep" />
        <span className="text-sm font-semibold text-brand-deep">
          Deployed to production
        </span>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-24 hidden items-center gap-2 rounded-xl bg-brand-deep px-3 py-2.5 shadow-soft sm:flex sm:-right-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <Sparkles size={16} className="text-brand-primary" />
        <span className="text-sm font-semibold text-white">
          AI assistant ready
        </span>
      </motion.div>
    </div>
  );
}
