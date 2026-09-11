"use client";

import { motion } from "framer-motion";

export default function HomeRevealImage({
  children,
  layoutId,
}: {
  children: React.ReactNode;
  layoutId?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      initial={false}
      transition={{
        layout: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      <motion.div
        initial={{
          clipPath: "inset(0 10% 0 10%)",
          scale: 1.04,
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0%)",
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}