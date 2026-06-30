"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TiltCard from "@/components/common/TiltCard";
import { fadeUp } from "@/components/common/animations";
import { stats } from "@/components/data/siteData";

export default function PartnerSection() {
  return (
    <section className="">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Your technology partner"
          title={
            <>
              More Than Developers - We Are{" "}
              <span className="text-[var(--primary)]">
                Your Technology Partner
              </span>
            </>
          }
          text="PakDevStudio builds websites, mobile apps, dashboards and automation systems with clean structure, responsive layouts and launch-ready execution."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-10 lg:mt-16 max-w-[1200px] overflow-hidden"
        >
          <TiltCard className="rounded-[18px]">
            <div className="relative aspect-[2.05/1] overflow-hidden rounded-[18px]">
              <Image
                src="/images/team-working.png"
                alt="PakDevStudio team discussing software project strategy"
                fill
                sizes="(max-width: 1024px) 92vw, 920px"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </TiltCard>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-[880px] text-center text-sm font-light leading-[135%] text-[var(--text-muted)] sm:text-[23px]"
        >
          At PakDevStudio, we don’t just write code. We understand your business
          goals, plan the right solution, design user-friendly experiences, and
          build reliable digital products that support long-term growth. Whether
          you need a business website, custom software, mobile application,
          automation system, or complete digital product, our team works with
          you from idea to launch.
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-4 lg:mt-12 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <TiltCard className="h-full rounded-[20px]">
                <div className="h-full rounded-[20px] border-0 p-5 soft-card">
                  <p className="text-2xl font-bold tracking-[-0.04em] lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-muted)] lg:mt-5 lg:text-base">
                    {stat.label}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
