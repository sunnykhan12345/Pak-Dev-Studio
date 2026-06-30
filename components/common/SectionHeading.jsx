"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/animations";

export default function SectionHeading({ eyebrow, title, text, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`mx-auto max-w-[820px] text-center ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[var(--primary)]">
          {/* {eyebrow} */}
        </p>
      ) : null}

      <h2 className="font-nexa text-3xl font-extrabold  tracking-[0px] text-[var(--text)] sm:text-4xl lg:text-[46px]">
        {title}
      </h2>

      {text ? (
        <p className="mx-auto mt-4 max-w-[680px] text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          {/* {text} */}
        </p>
      ) : null}
    </motion.div>
  );
}
