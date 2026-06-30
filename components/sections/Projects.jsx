"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "@/components/common/TiltCard";
import { projects } from "@/components/data/siteData";
import { fadeUp } from "@/components/common/animations";

export default function Projects() {
  return (
    <section id="projects" className="lg:py-[140px] py-20 bg-[var(--background)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-nexa text-3xl font-extrabold leading-[115%] tracking-[0px] sm:text-4xl lg:text-[48px]">
            Our Most Recent{" "}<br />
            <span className="text-[var(--primary)]">Projects</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10  grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <TiltCard className="h-full rounded-[14px]">
                <article className="project-card group  rounded-[12px] p-3 transition duration-300 lg:p-4">
                  <div className="relative aspect-[1.56/1] overflow-hidden rounded-[14px] bg-[var(--surface-soft)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 92vw, 470px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </article>
                <div className="px-1 pt-5 text-center sm:text-start">
                  <h3 className="text-sm font-normal tracking-[-0.02em] lg:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-normal text-[var(--text-muted)] lg:text-sm">
                    {project.category}
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
