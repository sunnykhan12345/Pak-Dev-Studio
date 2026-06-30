"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "../common/TiltCard";

const team = [
  { name: "Hamza Malik", role: "CEO", image: "/images/hamza.jpg" },
  {
    name: "Kainaat Shahrukh",
    role: "HR & Admin Manager",
    image: "/images/hr.png",
  },
  {
    name: "Kalim Ahmed",
    role: "Senior Product Designer",
    image: "/images/basser.png",
  },
  {
    name: "Sana Ullah",
    role: "Front End Developer",
    image: "/images/sana.png",
  },
  {
    name: "Baseer Ahmed",
    role: "Senior Backend Developer",
    image: "/images/basser.png",
  },

  {
    name: "Awais Khan",
    role: "Full Stack Developer",
    image: "/images/awais.png",
  },
];

export default function TeamSection() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 lg:mb-16 text-center"
        >
          <h2 className="text-[26px] lg:text-5xl font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--text)] sm:text-[32px]">
            The Minds Behind
          </h2>
          <h3 className="mt-[4px] text-[26px] lg:text-5xl  font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--primary)] sm:text-[32px]">
            Every Success
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="flex gap-[18px] overflow-x-auto px-4 pb-4 scrollbar-hide sm:px-6 lg:px-0"
        >
          {team.map((member) => (
            <TiltCard>
              <div
                key={member.name}
                className="group relative h-[331px] w-[276px] shrink-0 overflow-hidden rounded-[7px] bg-[var(--surface-soft)]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="276px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-2 left-2 right-2 rounded-[12px] h-[79px] bg-black/30 px-[14px] py-[14px] backdrop-blur-[16px]">
                  <h4 className="text-[15px] lg:text-lg font-bold leading-none text-white">
                    {member.name}
                  </h4>
                  <p className="mt-[10px] text-[12px] lg:text-base leading-none text-white/85">
                    {member.role}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
