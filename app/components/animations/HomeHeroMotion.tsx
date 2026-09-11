"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";

export default function HomeHeroMotion({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -45]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.82, 0.55]
  );

  return (
    <div ref={ref} className="homeHeroMotion">
      <motion.div
        className="homeHeroMotionInner"
        style={{
          scale,
          y,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}