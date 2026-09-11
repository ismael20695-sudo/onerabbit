"use client";

import { motion } from "framer-motion";

export default function HomeCaseImage({
  children,
  layoutId,
}: {
  children: React.ReactNode;
  layoutId: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className="homeCaseImage"
      initial={{
        clipPath: "inset(8% 10% 8% 10%)",
      }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{
        once: true,
        amount: 0.22,
      }}
      transition={{
        duration: 1.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="homeCaseImageInner"
        initial={{
          scale: 1.1,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.22,
        }}
        transition={{
          duration: 1.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}