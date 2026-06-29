"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/common/TiltCard";

const items = [
  {
    title: "Business-Focused Approach",
    text: "We first understand your goals, then build technology that supports real business outcomes.",
  },
  {
    title: "Clean & Scalable Code",
    text: "We first understand your goals, then build technology that supports real business outcomes.",
  },
  {
    title: "Modern UI UX Design",
    text: "We first understand your goals, then build technology that supports real business outcomes.",
  },
  {
    title: "End-to-End Support",
    text: "We first understand your goals, then build technology that supports real business outcomes.",
  },
];

export default function WhyChoosePakDev() {
  const dots = [
    { x: 55, y: 160 },
    { x: 265, y: 100 },
    { x: 475, y: 108 },
    { x: 685, y: 80 },
    { x: 900, y: 35 },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-black dark:bg-[#111216] dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Businesses Choose
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-[#7AC943] md:text-4xl">
            PakDevStudio
          </h3>
        </motion.div>

        <div className="relative mx-auto min-h-[410px] max-w-6xl">
          <svg
            className="absolute left-0 top-0 h-[255px] w-full overflow-visible"
            viewBox="0 0 1000 240"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 190 C70 115 125 185 205 135 C275 88 285 78 335 98 C420 132 470 120 535 72 C610 18 645 98 735 82 C805 70 855 40 900 35 C950 30 952 45 990 -25"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#7AC943] dark:text-white/70"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {dots.map((dot, i) => (
              <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.18 }}
              >
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r="12"
                  className="fill-white stroke-[#88BD46] dark:fill-[#111216]"
                  strokeWidth="3"
                />
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r="6"
                  className="fill-black dark:fill-[#88BD46]"
                />
              </motion.g>
            ))}

            <path
              d="M978 -24 L990 -25 L990 -12"
              stroke="#7AC943"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 grid gap-6 pt-36 md:grid-cols-4 md:gap-10">
            {items.map((item, index) => (
              <TiltCard>
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-[20px] bg-[#F6F6F6] px-5 py-8 text-center shadow-sm transition-all duration-300 dark:bg-[#161722] ${
                    index === 0
                      ? "md:mt-28"
                      : index === 1
                        ? "md:mt-16"
                        : index === 2
                          ? "md:mt-8"
                          : "md:mt-0"
                  }`}
                >
                  <h4 className="mb-7 lg:mb-10 text-lg lg:text-2xl font-semibold leading-snug">
                    {item.title}
                  </h4>

                  <p className="mx-auto max-w-[190px] text-sm lg:text-base leading-relaxed text-black/80 dark:text-white/80">
                    {item.text}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
