"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/common/animations";
import { ArrowIcon } from "../icons/Icon";

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden py-[53px]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-[24px] lg:gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative h-[660px] w-[576px] overflow-hidden rounded-[12px]"
        >
          <Image
            src="/images/contact.png"
            alt="PakDevStudio support team"
            fill
            sizes="303px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="pt-[21px]"
        >
          <h2 className="text-[24px] lg:text-5xl font-bold leading-[1.15] tracking-[-0.04em] text-[var(--text)]">
            Let’s Connect!
          </h2>

          <h3 className="mt-[3px] text-[24px] lg:text-5xl font-bold leading-[1.15] tracking-[-0.04em] text-[var(--primary)]">
            Reach Out Anytime!
          </h3>

          <form
            className="mt-[34px] lg:mt-16 grid w-[576px] gap-[11px] lg:gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            {["Full Name", "Your Email", "Service Needed", "Your Message"].map(
              (placeholder) => (
                <input
                  key={placeholder}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  className="h-14 w-full rounded-[12px] border-0 bg-[#1f1f23] px-[13px] text-[9px] lg:text-lg! text-white outline-none placeholder:text-[#7A7C81] focus:ring-1 focus:ring-[var(--primary)]"
                />
              ),
            )}

            <button
              type="submit"
              href="#contact"
              className="flex h-12 w-[171px] lg:mt-10 items-center justify-between rounded-[51px] bg-white py-1.5 pl-5 pr-1.5 text-base font-normal text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_18px_38px_rgba(118,207,49,0.25)]"
            >
             
                <span>Book Demo</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[36px] bg-[var(--primary)] text-[#101114] transition duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
            
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
