"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function ScrollExpand({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 15%"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.72, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [70, 0]
  );

  return (
    <motion.div
      ref={ref}
      className="scrollExpand"
      style={{
        scale,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}