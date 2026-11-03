"use client";

import { MotionConfig } from "framer-motion";

// Respects the visitor's "reduce motion" system setting everywhere
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
