"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { faqs } from "@/components/data/siteData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-space">
      <div className="container-xl max-w-[1200px]">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-16 space-y-3 lg:space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="overflow-hidden border-0! rounded-[12px] soft-card transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center  justify-between gap-4 py-5 px-6 text-left font-black"
              >
                <div className="space-x-8">
                  <span className="lg:text-2xl text-base text-[#7A7C81]">
                   0{ index + 1}
                  </span>
                  <span className="lg:text-2xl text-base">{item.question}</span>
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--surface)] text-xl transition duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.26, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-[var(--text-muted)]">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
