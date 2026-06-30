

"use client";
import Image from "next/image";
import { motion } from "framer-motion";;
import { heroImages } from "@/components/data/siteData";
import { ArrowIcon } from "@/components/icons/Icon";
const trustLogos = [
  { src: "/images/company.png", alt: "Client logo 1" },
  { src: "/images/company.png", alt: "Client logo 2" },
  { src: "/images/company.png", alt: "Client logo 3" },
  { src: "/images/company.png", alt: "Client logo 4" },
  { src: "/images/company.png", alt: "Client logo 5" },
  { src: "/images/company.png", alt: "Client logo 6" },
  { src: "/images/company.png", alt: "Client logo 7" },
];

const teamImages = [
  "/images/team-1.png",
  "/images/team-2.png",
  "/images/team-3.png",
  "/images/team-4.png",
  "/images/team-5.png",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[var(--background)] pt-24 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-light-pattern.png"
          alt="Light green cloud pattern background"
          fill
          priority
          sizes="100vw"
          className="object-cover dark:hidden"
        />
        <Image
          src="/images/hero-dark-pattern.png"
          alt="Dark cloud pattern background"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover dark:block"
        />
      </div>

      {/* <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 top-[18%] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10"
      /> */}
      <div className="container-xl grid items-center gap-10 pb-10 pt-8 lg:grid-cols-[616px_minmax(0,1fr)] lg:pb-8 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-[616px]"
        >
          <h1 className="font-nexa text-[30px] font-extrabold lg:leading-[70px] tracking-[0px] text-white  sm:text-[48px] md:text-[54px] lg:text-[59px]">
            <span className="block lg:whitespace-nowrap">Building Smart</span>
            <span className="block lg:whitespace-nowrap">
              Digital Solutions for
            </span>
            <span className="block dark:text-[var(--primary)] text-black lg:whitespace-nowrap">
              Modern Businesses
            </span>
          </h1>

          <p className="mt-12 max-w-[616px] text-sm leading-[135%] dark:text-[var(--text-muted)] text-black  sm:text-[18px]">
            PakDevStudio helps startups, agencies, and growing businesses
            transform ideas into powerful digital products through strategy,
            design, development, and technology-driven execution.
          </p>

          <div className="mt-12">
            <a
              href="#contact"
              className="flex h-12 w-[171px] items-center justify-between rounded-[51px] bg-white py-1.5 pl-5 pr-1.5 text-base font-normal text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_18px_38px_rgba(118,207,49,0.25)]"
            >
              <span>Book Demo</span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[36px] bg-[var(--primary)] text-[#101114] transition duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

    
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto h-[310px] w-full max-w-[560px] sm:h-[360px] lg:h-[380px]"
        >
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          <Image
            src={"/images/hero-group-img.png"}
            alt={"item.title"}
            fill
            sizes="(max-width: 768px) 52vw, 310px"
            // className="object-cover"
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="container-xl pb-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 lg:gap-8"
          >
            <div className="flex -space-x-3">
              {teamImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Team member ${index + 1}`}
                  width={58}
                  height={58}
                  className="h-[58px] w-[58px] rounded-full border-2 border-[var(--background)] object-cover"
                />
              ))}
            </div>

            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/icons/star.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs font-bold text-[var(--text-muted)] lg:text-sm">
                25k+ Happy Clients
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex min-w-0 flex-1 items-center gap-7 overflow-hidden lg:justify-end"
          >
            {trustLogos.map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="inline-flex shrink-0 items-center opacity-70 transition duration-300 hover:-translate-y-1 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={94}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
