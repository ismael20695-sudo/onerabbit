"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NextProject({
  number,
  title,
  category,
  href,
  image,
  layoutId,
}: {
  number: string;
  title: string;
  category: string;
  href: string;
  image: string;
  layoutId: string;
}) {
  return (
    <section className="nextCase">
      <div className="nextCaseTop">
        <span>NEXT PROJECT</span>
        <span>{number}</span>
      </div>

      <Link href={href} className="nextCaseLink">
        <motion.div
          layoutId={layoutId}
          className="nextCaseImage"
          initial={{
            clipPath: "inset(8% 8% 8% 8%)",
          }}
          whileInView={{
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            layout: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
            clipPath: {
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <Image
            src={image}
            alt={title.replace("\n", " ")}
            fill
            className="nextCasePhoto"
            sizes="100vw"
          />

          <div className="nextCaseOverlay" />

          <div className="nextCaseTitle">
            {title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </motion.div>

        <div className="nextCaseBottom">
          <span>{category}</span>

          <span className="nextCaseView">
            VIEW PROJECT ↗
          </span>
        </div>
      </Link>
    </section>
  );
}