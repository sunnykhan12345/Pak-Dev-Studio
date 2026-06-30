import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  SquareIcon,
} from "../icons/Icon";

const socialLinks = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/pakdev_studio",
    label: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/profile.php?id=61591285798553",
    label: "Facebook",
  },
  {
    icon: <SquareIcon />,
    href: "#", // Replace with your X/Twitter or other social link
    label: "Social",
  },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/company/pak-dev-studio",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] py-14 text-white">
      <div className="container-xl flex flex-col items-center justify-between gap-5 pb-5 sm:flex-row">
        <Link
          href="#home"
          aria-label="PakDevStudio home"
          className="flex shrink-0 items-center gap-3 transition duration-300 hover:scale-105"
        >
          <LogoIcon />
        </Link>

        <div className="flex gap-3">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full bg-[#161722] text-white/70 transition duration-300 hover:-translate-y-1 hover:text-[var(--primary)]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <p className="border-t border-[#25252E] pt-5 text-center text-sm text-white/55 lg:text-base">
        © {new Date().getFullYear()} PakDevStudio. All rights reserved.
      </p>
    </footer>
  );
}
