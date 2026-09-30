"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("onerabbit-loaded");

    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("onerabbit-loaded", "true");
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="loaderLogoWrap">
            {/* Logo base */}
            <img
              src="/ISOTIPO-06.svg"
              alt="ONERABBIT"
              className="loaderLogo loaderLogoBase"
            />

            {/* Logo que se revela en blanco */}
            <motion.div
              className="loaderLogoReveal"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1.35,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/ISOTIPO-06.svg"
                alt=""
                className="loaderLogo loaderLogoWhite"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}