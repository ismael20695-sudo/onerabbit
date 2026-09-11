"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function ScrollDrift({
  children,
  className = "",
  yFrom = 0,
  yTo = 0,
  scaleFrom = 1,
  scaleTo = 1,
}: {
  children: ReactNode;
  className?: string;
  yFrom?: number;
  yTo?: number;
  scaleFrom?: number;
  scaleTo?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [yFrom, yTo]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [scaleFrom, scaleTo]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}