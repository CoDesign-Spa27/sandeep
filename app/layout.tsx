import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import { Providers } from "./provider";
import Anouncment from "@/components/Anouncment";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const switzer = localFont({
  src: [
    {
      path: "../public/Switzer-Bold.ttf",
      weight: "bold",
    },
    {
      path: "../public/Switzer-Extrabold.ttf",
      weight: "800",
    },
    {
      path: "../public/Switzer-Regular.ttf",
      weight: "normal",
    },
    {
      path: "../public/Switzer-Black.ttf",
      weight: "900",
    },
    {
      path: "../public/Switzer-Extralight.ttf",
      weight: "300",
    },
    { path: "../public/Switzer-Thin.ttf", weight: "200" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const riffic = localFont({
  src: "./fonts/RifficFree-Bold.ttf",
  variable: "--font-riffic",
});

export const metadata: Metadata = {
  title: "Sandeep Singh",
  description:
    "developer by day, frontend engineer by choice, and a wannabe software engineer trying to make it look easy.",
  keywords:
    "sandeep portfolio, fullstack developer sandeep singh, developer portfolio, personal website sandeep singh, roohbuilds, sandeep singh software developer, frontend engineer sandeep singh, fullstack dev sandeep, sandeep singh frontend developer, design engineer sandeep singh",
  icons: {
    icon: "/Logos/portfolio-logo.svg",
    shortcut: "/Logos/portfolio-logo.svg",
  },
  openGraph: {
    url: "https://sandeepsingh.me/",
    type: "website",
    locale: "en_IN",
    siteName: "sandeepsingh",
    title: "Sandeep Singh - Frontend Engineer | Wanna Be Software Developer",
    description:
      "developer by day, frontend enthusiast by choice, and a wannabe software engineer trying to make it look easy",
    images: ["./og-image.png"],
  },
  other: {
    "twitter:image": ["./og-image.png"],
    "twitter:card": "summary_large_image",
    "twitter:url": "https://sandeepsingh.me/",
    "twitter:domain": "sandeepsingh.me",
    "twitter:title": "Sandeep Singh - Frontend Engineer",
    "og:url": "https://sandeepsingh.me/",
    "og:type": "website",
    "og:title":
      "Sandeep Singh - Frontend Engineer | Wanna Be Software Developer",
    "og:description":
      "developer by day, frontend enthusiast by choice, and a wannabe software engineer trying to make it look easy",
    "og:image": ["./og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${inter.variable} ${riffic.variable}`}
    >
      <body className=" =scroll-smooth">
        <Providers>
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
