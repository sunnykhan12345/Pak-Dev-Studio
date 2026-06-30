"use client";

import { motion } from "framer-motion";
import TiltCard from "../common/TiltCard";

const steps = [
  {
    title: "Discovery & Planning",
    text: "We understand your business, goals, target users, and project requirements.",
  },
  {
    title: "UI/UX Design",
    text: "We create clean layouts and user flows before development begins.",
  },
  {
    title: "Development",
    text: "Our team builds the product using modern, reliable, and scalable technologies.",
  },
  {
    title: "Testing & Quality Check",
    text: "We test functionality, responsiveness, performance, and user experience.",
  },
  {
    title: "Launch & Support",
    text: "We deploy your product and provide support for improvements and future updates.",
  },
];

export default function WhyChoose() {
  return (
    <section className="overflow-hidden">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            A Clear Process From
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold leading-tight text-[var(--primary)] md:text-4xl lg:text-5xl">
            Idea To Launch
          </h3>
        </motion.div>
    
          <div className="relative mx-auto lg:mt-16 mt-10 w-full max-w-[1200px]">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-[var(--border)] lg:block" />

            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 lg:gap-0 pl-4 sm:pl-0">
              {steps.map((step, index) => (
                  <TiltCard>
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="relative mb-12 flex h-[14px] w-full items-center">
                    {" "}
                    <span className="relative z-10 grid h-[14px] w-[14px] place-items-center rounded-full border-2 border-black bg-[var(--background)] transition-all duration-300 group-hover:border-[var(--primary)] dark:border-white">
                      <span className="h-[5px] w-[5px] rounded-full bg-black transition-all duration-300 group-hover:bg-[var(--primary)] dark:bg-white" />
                    </span>
                  </div>

                  <div className="w-full max-w-[220px]  text-left">
                    <h4 className="text-[56px] font-bold leading-none tracking-[-0.06em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--primary)] md:text-[64px] lg:text-[80px]">
                      {String(index + 1).padStart(2, "0")}
                    </h4>

                    <h5 className="mt-8 text-sm lg:text-lg font-bold text-[var(--text)]">
                      {step.title}
                    </h5>

                    <p className="mt-4  lg:text-sm text-xs leading-[135%] text-[var(--text-muted)]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        
      </div>
    </section>
  );
}
