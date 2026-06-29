"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import TiltCard from "@/components/common/TiltCard";
import { testimonials } from "@/components/data/siteData";

export default function Testimonials() {
  return (
    <section id="team" className="section-space">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Client feedback"
          title={
            <>
              Real Stories From{" "}
              <span className="text-[var(--primary)]">Happy Customers</span>
            </>
          }
        />

        <div className="mx-auto mt-12 grid max-w-[1200px] gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <TiltCard className="h-full rounded-[22px]">
                <div className="h-full rounded-[20px] p-5 dark:bg-[#F4F9ED] bg-[#F4F9ED]">
                  <div className="mb-5 flex items-center gap-2.5">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[var(--primary-soft)]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-black text-black lg:text-lg font-medium">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs font-bold text-[#50565D] pt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        src="/icons/star.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-black text-[var(--text-muted)]">
                    “{testimonial.text}”
                  </p>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
