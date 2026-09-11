"use client";

import { motion } from "framer-motion";

export default function HomeProjectTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h3
      initial={{
        y: 28,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.h3>
  );
}