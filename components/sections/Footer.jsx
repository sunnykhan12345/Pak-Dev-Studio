import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, LogoIcon, SquareIcon } from "../icons/Icon";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] py-14 text-white">
      <div className="container-xl flex flex-col items-center justify-between pb-5 gap-5 sm:flex-row">
        <Link
          href="#home"
          aria-label="PakDevStudio home"
          className="flex shrink-0 items-center transition duration-300 gap-3 hover:scale-105"
        >
          <LogoIcon />
        </Link>

        <div className="flex gap-3">
          {[<InstagramIcon />, <FacebookIcon />,<SquareIcon />,<LinkedInIcon />].map((item) => (
            <a
              key={item}
              href="#home"
              aria-label={`${item} social link`}
              className="grid h-12 w-12 place-items-center rounded-full bg-[#161722] text-xs font-black uppercase text-white/70 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-sm lg:text-base text-white/55 border-t border-[#25252E] pt-5">
        © {new Date().getFullYear()} PakDevStudio. All rights reserved.
      </p>
    </footer>
  );
}
