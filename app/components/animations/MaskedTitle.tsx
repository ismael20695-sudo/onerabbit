"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MaskedTitle({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div className="maskedTitleLine">
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
          margin: "0px 0px -5% 0px",
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}