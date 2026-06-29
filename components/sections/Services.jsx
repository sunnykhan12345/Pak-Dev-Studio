"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "@/components/common/TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ToolBubble({ children, className = "" }) {
  return (
    <span
      className={`grid h-8 w-8 place-items-center rounded-full text-[12px] font-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </span>
  );
}

export default function Services() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[var(--surface-soft)] py-[70px]"
    >
      <div className="container-xl">
        <div className="mx-auto max-w-[875px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-10 max-w-[760px] text-center"
          >
            <h2 className="font-nexa text-[30px] font-[800] leading-[115%] tracking-[0px] text-[var(--text)] md:text-[32px]">
              Our IT Services That Help Your
              <span className="block text-[var(--primary)]">
                Business Grow Online
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[215px]"
          >
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="relative min-h-[448px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-4 lg:row-span-2"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>

              <div className="relative z-10 max-w-[230px]">
                <h3 className="font-nexa text-[17px] font-[800] leading-[115%] text-white">
                  Mobile App Development
                </h3>
                <p className="mt-4 max-w-[210px] text-[10px] leading-[150%] text-white/60">
                  User-friendly mobile applications for Android and iOS with
                  clean interfaces.
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 top-[132px] z-20 grid h-10 w-10 place-items-center rounded-[10px] bg-[#25a8ff] text-white"
              >
                A
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-[132px] z-20 grid h-10 w-10 place-items-center rounded-[10px] bg-[#27b15f] text-white"
              >
                ▶
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.035, rotateY: -6, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="absolute bottom-0 left-1/2 w-[302px] -translate-x-1/2 transform-gpu"
              >
                <Image
                  src="/images/mobile-app.png"
                  alt="Mobile app parcel delivery screen"
                  width={302}
                  height={624}
                  className="h-auto w-full object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative min-h-[215px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-8 lg:min-h-0"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>

              <div className="relative z-10 max-w-[270px]">
                <h3 className="font-nexa text-[17px] font-[800] leading-[115%] text-white">
                  Custom Software
                  <span className="block">Development</span>
                </h3>
                <p className="mt-4 text-[10px] leading-[150%] text-white/60">
                  We build tailored software solutions designed around your
                  business process, workflow, and operational needs.
                </p>
              </div>

              <div className="absolute bottom-5 left-4 z-20 flex gap-3">
                <ToolBubble className="bg-[#9a71ff]">N</ToolBubble>
                <ToolBubble className="bg-[#ff244f]">⚡</ToolBubble>
                <ToolBubble className="bg-[#ff9561]">✳</ToolBubble>
              </div>

              <motion.div
                whileHover={{ scale: 1.035, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="absolute bottom-0 right-0 top-4 w-[58%] overflow-hidden rounded-tl-[14px] border border-white/15 bg-white"
              >
                <Image
                  src="/images/dubai-pic.png"
                  alt="Service request dashboard"
                  fill
                  sizes="520px"
                  className="object-cover object-left-top"
                />
              </motion.div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative min-h-[215px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-4 lg:min-h-0"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>
              <h3 className="relative z-10 font-nexa text-[17px] font-[800] leading-[115%] text-white">
                AI & Automation Solutions
              </h3>
              <p className="relative z-10 mt-4 max-w-[300px] text-[10px] leading-[150%] text-white/60">
                We test websites, apps, and software systems to identify bugs,
                improve performance, and ensure a smooth user experience.
              </p>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative min-h-[215px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-4 lg:min-h-0"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>

              <div className="relative z-10 max-w-[230px]">
                <h3 className="font-nexa text-[17px] font-[800] leading-[115%] text-white">
                  Social Media Marketing
                </h3>
                <p className="mt-4 text-[10px] leading-[150%] text-white/60">
                  We build tailored software solutions designed around your
                  busin
                </p>
              </div>

              <div className="absolute right-4 top-5 z-20 flex gap-2">
                <ToolBubble className="bg-[#13b981]">AI</ToolBubble>
                <ToolBubble className="bg-[#6c63ff]">F</ToolBubble>
              </div>

              <motion.div
                whileHover={{ scale: 1.04, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="absolute bottom-0 left-4 right-4 h-[120px] overflow-hidden rounded-t-[12px]"
              >
                <Image
                  src="/images/pcg.png"
                  alt="Social media marketing creatives"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </motion.div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative min-h-[215px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-6 lg:min-h-0"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>

              <div className="relative z-10 max-w-[220px]">
                <h3 className="font-nexa text-[17px] font-[800] leading-[115%] text-white">
                  UI UX Designing
                  <span className="block">for Apps & Web</span>
                </h3>
                <p className="mt-4 text-[10px] leading-[150%] text-white/60">
                  Modern, fast, responsive, and conversion-focused websites that
                  help your business build trust online.
                </p>
              </div>

              <div className="absolute bottom-4 left-4 z-20 flex gap-3">
                <ToolBubble className="bg-[#7a5cff]">F</ToolBubble>
                <ToolBubble className="bg-[#13b981]">AI</ToolBubble>
              </div>

              <motion.div
                whileHover={{ scale: 1.04, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="absolute bottom-0 right-0 h-[200px] w-[58%] overflow-hidden rounded-tl-[14px]"
              >
                <Image
                  src="/images/pic.png"
                  alt="UI UX app and web design screens"
                  fill
                  sizes="420px"
                  className="object-cover object-left-top"
                />
              </motion.div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative min-h-[215px] overflow-hidden rounded-[16px] bg-[#202126] p-4 lg:col-span-6 lg:min-h-0"
            >
              <TiltCard className="absolute inset-0 rounded-[16px]" glare={false}>
                <div className="absolute inset-0 rounded-[16px]" />
              </TiltCard>

              <div className="relative z-10 max-w-[220px]">
                <h3 className="font-nexa text-[17px] font-[800] leading-[115%] text-white">
                  Website Design
                  <span className="block">& Development</span>
                </h3>
                <p className="mt-4 text-[10px] leading-[150%] text-white/60">
                  Modern, fast, responsive, and conversion-focused websites that
                  help your business build trust online.
                </p>
              </div>

              <div className="absolute bottom-4 left-4 z-20 flex gap-3">
                <ToolBubble className="bg-[#9a71ff]">N</ToolBubble>
                <ToolBubble className="bg-[#ff244f]">⚡</ToolBubble>
                <ToolBubble className="bg-[#ff9561]">✳</ToolBubble>
              </div>

              <motion.div
                whileHover={{ scale: 1.04, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="absolute bottom-4 right-4 h-[145px] w-[54%] overflow-hidden rounded-[12px] border border-white/10"
              >
                <Image
                  src="/images/pic1.png"
                  alt="Website design and development previews"
                  fill
                  sizes="420px"
                  className="object-cover object-left-top"
                />
              </motion.div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
