import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://pakdevstudio.com"),
  title: {
    default:
      "PakDevStudio | Next.js, Mobile Apps, AI Automation & Digital Solutions",
    template: "%s | PakDevStudio",
  },
  description:
    "PakDevStudio builds responsive Next.js websites, mobile apps, dashboards, AI automation systems, and digital growth solutions for modern businesses.",
  keywords: [
    "PakDevStudio",
    "Next.js development",
    "mobile app development",
    "AI automation",
    "custom software development",
    "Tailwind CSS agency",
    "Pakistan software company",
  ],
  openGraph: {
    title: "PakDevStudio | Building Smart Digital Solutions",
    description:
      "Modern websites, dashboards, mobile apps and AI-powered systems built with clean UI, fast performance and scalable code.",
    url: "https://pakdevstudio.com",
    siteName: "PakDevStudio",
    images: [
      {
        url: "/images/hero-dark-pattern.png",
        width: 1200,
        height: 630,
        alt: "PakDevStudio digital solutions landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PakDevStudio | Smart Digital Solutions",
    description:
      "Next.js websites, mobile apps, dashboards and AI automation for growing businesses.",
    images: ["/images/hero-dark-pattern.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
