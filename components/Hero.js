"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-brand-mint/70 via-brand-bg to-brand-bg pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item} id="hero-title" className="text-display">
            Building Digital Solutions That Move Your Business Forward.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lead text-muted"
          >
            Hexasoftsolutions designs and engineers scalable software, from web
            and mobile apps to cloud platforms and AI automation, so your team
            can grow without technology getting in the way.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="#contact" className="btn-primary group">
              Start Your Project
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link href="#services" className="btn-outline">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}
