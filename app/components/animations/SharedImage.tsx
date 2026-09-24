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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        viewTransitionName: layoutId,
      }}
    >
     <Image
  src={src}
  alt={alt}
  fill
  priority
  sizes="100vw"
  className="projectPhoto"
/>
    </motion.div>
  );
}