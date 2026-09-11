"use client";

import { motion } from "framer-motion";

export default function RevealImage({
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
          scale: 1.025,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}