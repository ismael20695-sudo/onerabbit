"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Parallax({
  children,
  speed = 0.15,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 800],
    [0, 800 * speed]
  );

  return (
    <motion.div
      style={{
        y,
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "110%",
      }}
    >
      {children}
    </motion.div>
  );
}