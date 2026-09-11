"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SharedImage({
  src,
  alt,
  layoutId,
  className,
}: {
  src: string;
  alt: string;
  layoutId: string;
  className?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="projectPhoto"
      />
    </motion.div>
  );
}