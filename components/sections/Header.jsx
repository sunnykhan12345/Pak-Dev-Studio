// "use client";

// import { motion } from "framer-motion";
// import { navItems } from "@/components/data/siteData";
// import ThemeToggle from "@/components/common/ThemeToggle";
// import { ArrowIcon, LogoIcon } from "@/components/icons/Icon";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="fixed inset-x-0 top-7 z-50 px-4 pointer-events-none">
//       <motion.div
//         initial={{ opacity: 0, y: -22, scale: 0.98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.55, ease: "easeOut" }}
//         className="container-xl pointer-events-auto"
//       >
//         <div className="mx-auto flex h-[72px] items-center justify-between gap-3 rounded-[60px]  bg-white/5 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl dark:bg-[#222325]/70 light-header">
//           <Link
//             href="#home"
//             aria-label="PakDevStudio home"
//             className="flex shrink-0 items-center transition duration-300 hover:scale-105"
//           >
//             <LogoIcon />
//           </Link>

//           <nav className="hidden items-center gap-2 lg:flex">
//             {navItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className={
//                     item.active
//                       ? "nav-link nav-link-active gap-2 rounded-[51px] text-base font-normal"
//                       : "nav-link gap-2 rounded-[51px] text-base font-normal"
//                   }
//                 >
//                   {Icon ? <Icon className="nav-link-icon" /> : null}
//                   <span>{item.label}</span>
//                 </a>
//               );
//             })}
//           </nav>

//           <div className="flex shrink-0 items-center gap-2">
//             <a
//               href="#contact"
//               className="flex h-12 w-[171px] items-center justify-between rounded-[51px] bg-white py-1.5 pl-5 pr-1.5 text-base font-normal text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_18px_38px_rgba(118,207,49,0.25)]"
//             >
//               <span>Book Demo</span>
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[36px] bg-[var(--primary)] text-[#101114] transition duration-300 group-hover:translate-x-1">
//                 <ArrowIcon />
//               </span>
//             </a>

//             <ThemeToggle />
//           </div>
//         </div>
//       </motion.div>
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/components/data/siteData";
import ThemeToggle from "@/components/common/ThemeToggle";
import { ArrowIcon, LogoIcon } from "@/components/icons/Icon";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href?.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(href);
  };

  return (
    <header className="fixed inset-x-0 lg:top-7 top-4 z-50 sm:px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="container-xl pointer-events-auto"
      >
        <div className="mx-auto flex lg:h-[72px] h-16 items-center justify-between gap-3 rounded-[60px] bg-white/5 sm:px-4 px-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl dark:bg-[#222325]/70 light-header">
          <Link
            href="#home"
            aria-label="PakDevStudio home"
            className="flex shrink-0 items-center transition duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#home");
            }}
          >
            <LogoIcon />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleScroll(item.href)}
                  className={
                    isActive
                      ? "nav-link nav-link-active gap-2 rounded-[51px] text-base font-normal"
                      : "nav-link gap-2 rounded-[51px] text-base font-normal"
                  }
                >
                  {Icon ? <Icon className="nav-link-icon" /> : null}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("#contact")}
              className="group flex sm:h-12 h-10 sm:w-[171px] w-[140px] items-center justify-between rounded-[51px] bg-white py-1.5 pl-5 pr-1.5 sm:text-base text-sm font-normal text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_18px_38px_rgba(118,207,49,0.25)]"
            >
              <span>Book Demo</span>
              <span className="grid sm:h-10 h-7 sm:w-10 w-7 shrink-0 place-items-center rounded-[36px] bg-[var(--primary)] text-[#101114] transition duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </button>

            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
