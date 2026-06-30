// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0 },
// };

// function ToolBubble({ children, className = "" }) {
//   return (
//     <span
//       className={`grid h-[28px] w-[28px] place-items-center rounded-full text-[10px] font-black text-white ${className}`}
//     >
//       {children}
//     </span>
//   );
// }

// export default function Services() {
//   return (
//     <section id="features" className="relative overflow-hidden py-[70px]">
//       <div className="mx-auto w-full max-w-[1200px] px-4">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.55 }}
//           className="mb-[42px] text-center"
//         >
//           <h2 className="font-nexa text-[30px] font-[800] leading-[115%] text-[var(--text)] md:text-[32px]">
//             Our IT Services That Help Your
//             <span className="block text-[var(--primary)]">
//               Business Grow Online
//             </span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.16 }}
//           className="grid gap-[14px] lg:grid-cols-12 lg:auto-rows-[240px]"
//         >
//           {/* Mobile App */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5 }}
//             className="relative overflow-hidden rounded-[10px] bg-[#202126] p-[14px] lg:col-span-4 lg:row-span-2"
//           >
//             <div className="relative z-10">
//               <h3 className="font-nexa text-[13px] lg:text-xl font-bold leading-[120%] text-white">
//                 Mobile App Development
//               </h3>
//               <p className="mt-[12px]  text-xs text-[#D9DBDF]">
//                 User-friendly mobile applications for Android and iOS with clean
//                 interfaces.
//               </p>
//             </div>

//             <div className="absolute top-32 left-1/2 w-[230px] -translate-x-1/2">
//               <Image
//                 src="/images/mobile-app.png"
//                 alt="Mobile app screen"
//                 width={230}
//                 height={624}
//                 className="h-auto object-cover"
//               />
//             </div>
//           </motion.article>

//           {/* Custom Software */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5, delay: 0.05 }}
//             className="relative min-h-[240px] overflow-hidden mb-20 rounded-[20px] bg-[#202126] p-[14px] lg:col-span-8"
//           >
//             <div className="relative z-10 max-w-[230px]">
//               <h3 className="font-nexa text-[13px] font-bold lg:text-xl leading-[120%] text-white">
//                 Custom Software
//                 <span className="block">Development</span>
//               </h3>
//               <p className="mt-[14px] text-xs leading-[145%] text-white/60">
//                 We build tailored software solutions designed around your
//                 business process, workflow, and operational needs.
//               </p>
//             </div>

//             <div className="absolute bottom-[18px] left-[14px] z-20 flex gap-4">
//               <Image
//                 src={"/images/nextjs.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/nestjs.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/cloud.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//             </div>

//             <div className="absolute bottom-0 right-0 top-[14px] w-[67%] overflow-hidden rounded-tl-[10px] border border-white/20 bg-white">
//               <Image
//                 src="/images/dubai-pic.png"
//                 alt="Dashboard preview"
//                 fill
//                 sizes="500px"
//                 className="object-cover object-top"
//               />
//             </div>
//           </motion.article>

//           {/* AI */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="relative min-h-[240px] overflow-hidden rounded-[10px] bg-[#202126] p-[14px] lg:col-span-4"
//           >
//             <h3 className="font-nexa text-[13px] lg:text-xl font-bold leading-[120%] text-white">
//               AI & Automation Solutions
//             </h3>
//             <p className="mt-[14px] max-w-[260px] text-xs leading-[145%] text-white/60">
//               We test websites, apps, and software systems to identify bugs,
//               improve performance, and ensure a smooth user experience.
//             </p>
//           </motion.article>

//           {/* Social Media */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5, delay: 0.15 }}
//             className="relative min-h-[193px] overflow-hidden rounded-[10px] bg-[#202126] p-[14px] lg:col-span-4"
//           >
//             <div className="relative z-10 max-w-[205px]">
//               <h3 className="font-nexa text-[13px] lg:text-xl font-bold leading-[120%] text-white">
//                 Social Media Marketing
//               </h3>
//               <p className="mt-[14px] text-xs leading-[145%] text-white/60">
//                 We build tailored software solutions designed around your
//                 business.
//               </p>
//             </div>
//             <div className="absolute right-[14px] top-[16px] z-20 flex gap-[6px]">
//               <Image
//                 src={"/images/chatgpt.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/figma.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/canva.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//             </div>

//             <div className="absolute top-24 left-[14px] right-[14px] h-[220px] overflow-hidden rounded-t-[8px]">
//               <div className="grid lg:grid-cols-3">
//                 <Image
//                   src="/images/socila.png"
//                   alt="Social media creatives"
//                   fill
//                   sizes="300px"
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </motion.article>

//           {/* UI UX */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative min-h-[193px] overflow-hidden rounded-[20px] bg-[#202126] p-[14px] lg:col-span-6"
//           >
//             <div className="relative z-10 max-w-[185px]">
//               <h3 className="font-nexa text-[13px] lg:text-xl font-bold leading-[120%] text-white">
//                 UI UX Designing
//                 <span className="block">for Apps & Web</span>
//               </h3>
//               <p className="mt-[14px] text-xs leading-[145%] text-white/60">
//                 Modern, fast, responsive, and conversion-focused websites that
//                 help your business build trust online.
//               </p>
//             </div>

//             <div className="absolute bottom-[14px] left-[14px] z-20 flex gap-[8px]">
//               <Image
//                 src={"/images/chatgpt.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/figma.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//             </div>

//             <div className="absolute bottom-0 right-0 h-[220px] w-[60%] overflow-hidden rounded-tl-[10px]">
//               <Image
//                 src="/images/pic.png"
//                 alt="UI UX screens"
//                 fill
//                 sizes="380px"
//                 className="object-cover object-left-top"
//               />
//             </div>
//           </motion.article>

//           {/* Website */}
//           <motion.article
//             variants={fadeUp}
//             transition={{ duration: 0.5, delay: 0.25 }}
//             className="relative min-h-[193px] overflow-hidden rounded-[10px] bg-[#202126] p-[14px] lg:col-span-6"
//           >
//             <div className="relative z-10 max-w-[185px]">
//               <h3 className="font-nexa text-[13px] lg:text-xl font-[800] leading-[120%] text-white">
//                 Website Design
//                 <span className="block">& Development</span>
//               </h3>
//               <p className="mt-[14px] text-xs leading-[145%] text-white/60">
//                 Modern, fast, responsive, and conversion-focused websites that
//                 help your business build trust online.
//               </p>
//             </div>

//             <div className="absolute bottom-[14px] left-[14px] z-20 flex gap-[8px]">
//               <Image
//                 src={"/images/nextjs.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/nestjs.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//               <Image
//                 src={"/images/cloud.png"}
//                 width={36}
//                 height={36}
//                 className="object-cover"
//               />
//             </div>

//             <div className="absolute bottom-[14px] right-[14px] h-[226px] w-[58%] overflow-hidden rounded-[8px] ">
//               <Image
//                 src="/images/both.png"
//                 alt="Website previews"
//                 fill
//                 sizes="380px"
//                 className="object-cover object-left-top"
//               />
//             </div>
//           </motion.article>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const cardBase =
  "relative overflow-hidden border border-black/5 bg-[#f2f5ee] dark:border-transparent dark:bg-[#202126]";

const titleBase =
  "font-nexa text-[13px] font-bold leading-[120%] text-[#111317] dark:text-white lg:text-xl";

const textBase = "text-xs leading-[145%] text-[#5f665c] dark:text-white/60";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden lg:py-[140px] py-20"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-[42px] text-center"
        >
          <h2 className="font-nexa font-extrabold leading-[115%] text-[var(--text)] text-[30px] md:text-4xl lg:text-[48px]">
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
          className="grid gap-[14px] md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[240px]"
        >
          {/* Mobile App */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className={`${cardBase} min-h-[520px] rounded-[10px] p-[14px] md:min-h-[560px] lg:col-span-4 lg:row-span-2 lg:min-h-0`}
          >
            <div className="relative z-10 text-center sm:text-start">
              <h3 className={titleBase}>Mobile App Development</h3>
              <p className={`mt-[12px] ${textBase}`}>
                User-friendly mobile applications for Android and iOS with clean
                interfaces.
              </p>
            </div>

            <div className="absolute left-1/2 top-32 w-[230px] -translate-x-1/2 sm:w-[260px] lg:w-[230px]">
              <Image
                src="/images/mobile-app.png"
                alt="Mobile app screen"
                width={230}
                height={624}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.article>

          {/* Custom Software */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`${cardBase} min-h-[360px] rounded-[20px] p-[14px] md:min-h-[360px] lg:col-span-8 lg:mb-20 lg:min-h-[240px]`}
          >
            <div className="relative z-10 max-w-[230px]  text-center sm:text-start">
              <h3 className={titleBase}>
                Custom Software
                <span className="block">Development</span>
              </h3>
              <p className={`mt-[14px] ${textBase}`}>
                We build tailored software solutions designed around your
                business process, workflow, and operational needs.
              </p>
            </div>

            <div className="absolute bottom-[18px] left-[14px] z-20 flex gap-4">
              <Image src="/images/nextjs.png" alt="" width={36} height={36} />
              <Image src="/images/nestjs.png" alt="" width={36} height={36} />
              <Image src="/images/cloud.png" alt="" width={36} height={36} />
            </div>

            <div className="absolute bottom-0 right-0 top-[150px] w-full overflow-hidden rounded-t-[10px] border border-black/10 bg-white dark:border-white/20 sm:top-[140px] lg:top-[14px] lg:w-[67%] lg:rounded-tl-[10px] lg:rounded-tr-none">
              <Image
                src="/images/dubai-pic.png"
                alt="Dashboard preview"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-top"
              />
            </div>
          </motion.article>

          {/* AI */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${cardBase} min-h-[220px] rounded-[10px] p-[14px] lg:col-span-4 lg:min-h-[240px]  text-center sm:text-start`}
          >
            <h3 className={titleBase}>AI & Automation Solutions</h3>
            <p className={`mt-[14px] max-w-[260px] ${textBase}`}>
              We test websites, apps, and software systems to identify bugs,
              improve performance, and ensure a smooth user experience.
            </p>
          </motion.article>

          {/* Social Media */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`${cardBase} min-h-[350px] rounded-[10px] p-[14px] lg:col-span-4 lg:min-h-[193px]`}
          >
            <div className="relative z-10 max-w-[205px]">
              <h3 className={titleBase}>Social Media Marketing</h3>
              <p className={`mt-[14px] ${textBase}`}>
                We build tailored software solutions designed around your
                business.
              </p>
            </div>

            <div className="absolute right-[14px] top-[16px] z-20 flex gap-[6px]">
              <Image src="/images/chatgpt.png" alt="" width={36} height={36} />
              <Image src="/images/figma.png" alt="" width={36} height={36} />
              <Image src="/images/canva.png" alt="" width={36} height={36} />
            </div>

            <div className="absolute left-[14px] right-[14px] top-24 h-[220px] overflow-hidden rounded-t-[8px] lg:h-[220px]">
              <Image
                src="/images/socila.png"
                alt="Social media creatives"
                fill
                sizes="300px"
                className="object-contain"
              />
            </div>
          </motion.article>

          {/* UI UX */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${cardBase} min-h-[330px] rounded-[20px] p-[14px] lg:col-span-6 lg:min-h-[193px]`}
          >
            <div className="relative z-10 max-w-[185px] mx-auto sm:mx-0">
              <h3 className={titleBase}>
                UI UX Designing
                <span className="block">for Apps & Web</span>
              </h3>
              <p className={`mt-[14px] ${textBase}`}>
                Modern, fast, responsive, and conversion-focused websites that
                help your business build trust online.
              </p>
            </div>

            <div className="absolute bottom-[14px] left-[14px] z-20 flex gap-[8px]">
              <Image src="/images/chatgpt.png" alt="" width={36} height={36} />
              <Image src="/images/figma.png" alt="" width={36} height={36} />
            </div>

            <div className="absolute bottom-0 right-0 h-[220px] w-[60%] overflow-hidden rounded-tl-[10px]">
              <Image
                src="/images/pic.png"
                alt="UI UX screens"
                fill
                sizes="380px"
                className="object-cover object-left-top"
              />
            </div>
          </motion.article>

          {/* Website */}
          <motion.article
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${cardBase} min-h-[330px] rounded-[10px] p-[14px] lg:col-span-6 lg:min-h-[193px]`}
          >
            <div className="relative z-10 max-w-[185px] mx-auto sm:mx-0">
              <h3 className={titleBase}>
                Website Design
                <span className="block">& Development</span>
              </h3>
              <p className={`mt-[14px] ${textBase}`}>
                Modern, fast, responsive, and conversion-focused websites that
                help your business build trust online.
              </p>
            </div>

            <div className="absolute bottom-[14px] left-[14px] z-20 flex gap-[8px]">
              <Image src="/images/nextjs.png" alt="" width={36} height={36} />
              <Image src="/images/nestjs.png" alt="" width={36} height={36} />
              <Image src="/images/cloud.png" alt="" width={36} height={36} />
            </div>

            <div className="absolute bottom-[14px] right-[14px] h-[226px] w-[58%] overflow-hidden rounded-[8px]">
              <Image
                src="/images/both.png"
                alt="Website previews"
                fill
                sizes="380px"
                className="object-cover object-left-top"
              />
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
