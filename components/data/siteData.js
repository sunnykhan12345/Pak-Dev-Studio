import {
  HomeIcon,
  FeatureIcon,
  PackageIcon,
  TeamIcon,
} from "@/components/icons/NavIcons";

export const navItems = [
  { label: "Home", href: "#home", active: true, icon: HomeIcon },
  { label: "Features", href: "#features", icon: FeatureIcon },
  { label: "Our Packages", href: "#packages", icon: PackageIcon },
  { label: "Our Team", href: "#team", icon: TeamIcon },
];

export const heroImages = [
  {
    title: "Business Setup Website",
    src: "/images/hero-sect-1.png",
    className: "left-[6%] top-[4%] w-[50%] rotate-[-7deg] sm:w-[46%] lg:w-[48%]",
  },
  {
    title: "Service Request Dashboard",
    src: "/images/hero-sec-2.png",
    className: "right-[2%] top-[14%] w-[54%] rotate-[6deg] sm:w-[50%] lg:w-[52%]",
  },
  {
    title: "AI Brand Showcase",
    src: "/images/hero-sect-3.png",
    className: "left-[3%] bottom-[5%] w-[53%] rotate-[3deg] sm:w-[50%] lg:w-[52%]",
  },
  {
    title: "UAE Growth Platform",
    src: "/images/hero-sect-4.png",
    className: "right-[3%] bottom-[2%] w-[50%] rotate-[-5deg] sm:w-[47%] lg:w-[49%]",
  },
];

export const projects = [
  {
    title: "Establisher Website",
    category: "Business Website",
    image: "/images/hero-sect-1.png",
  },
  {
    title: "Dubai Experience CRM",
    category: "Service Dashboard",
    image: "/images/hero-sec-2.png",
  },
  {
    title: "DAR AI Showcase",
    category: "AI SaaS Platform",
    image: "/images/hero-sect-3.png",
  },
  {
    title: "Rêve UAE Platform",
    category: "Growth Landing Page",
    image: "/images/hero-sect-4.png",
  },
];

export const stats = [
  { value: "$200k", label: "Companies Supported" },
  { value: "20+", label: "Countries Represented" },
  { value: "98%", label: "Client satisfaction" },
  { value: "100%", label: "Personalized Support" },
];

export const process = [
  {
    number: "01",
    title: "Discover Your Idea",
    text: "We understand your business, goals, audience and required features before design starts.",
  },
  {
    number: "02",
    title: "UI Design",
    text: "We create clean layouts, responsive sections and polished user flows for each screen.",
  },
  {
    number: "03",
    title: "Development",
    text: "We build with Next.js, JavaScript, Tailwind CSS and scalable component structure.",
  },
  {
    number: "04",
    title: "Testing & Polish",
    text: "We check responsiveness, performance, content, animations and key user journeys.",
  },
  {
    number: "05",
    title: "Launch & Support",
    text: "We prepare the website for deployment, SEO basics and future improvements.",
  },
];

export const testimonials = [
  {
    name: "Ahmed Khan",
    image: "/images/team-1.png",
    role: "Founder, SaaS Brand",
    text: "PakDevStudio converted our idea into a clean dashboard with smooth flow, fast performance and excellent responsiveness.",
  },
  {
    name: "Sarah Ali",
    image: "/images/team-2.png",
    role: "Marketing Lead",
    text: "The landing page looked premium, loaded quickly and helped us present our services more professionally.",
  },
  {
    name: "Bilal Farooq",
    image: "/images/team-3.png",
    role: "Business Owner",
    text: "Their process was clear from design to delivery. Every section was polished and easy to manage.",
  },
];

export const faqs = [
  {
    question: "What services does PakDev Studios provide?",
    answer:
      "We offer end-to-end digital solutions, including custom software development, web development, mobile app development, UI/UX design, AI-powered solutions, quality assurance (QA) testing, and ongoing maintenance and support.",
  },
  {
    question: " How long does it take to complete a project?",
    answer:
      "Project timelines depend on the scope and complexity. Small websites may take 2–4 weeks, while custom software and mobile applications typically require 2–6 months. We provide a detailed timeline before development begins.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer:
      "Yes. We offer post-launch maintenance, bug fixes, performance optimization, security updates, and feature enhancements to ensure your product continues to perform reliably.",
  },
  {
    question: "Can you work with clients from other countries?",
    answer:
      "Absolutely. We work with businesses worldwide and manage projects remotely through regular meetings, progress updates, and collaborative tools to ensure smooth communication.",
  },
  {
    question: "Why should I choose PakDev Studios?",
    answer:
      "We focus on delivering scalable, secure, and user-friendly digital solutions tailored to your business goals. Our experienced team emphasizes quality, transparency, and long-term partnerships to help your business grow.",
  },
];
