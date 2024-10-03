import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import { Providers } from "./provider";
import Anouncment from "@/components/Anouncment";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "SandeepSingh",
  description: "Personal Portfolio",
};

const  switzer = localFont({
  src: [
    {
      path: "../public/Switzer-Bold.ttf",
      weight: "bold",
    },
    {
      path: "../public/Switzer-Extrabold.ttf",
      weight: '800',
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
  variable:'--font-switzer',
  display:'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${switzer.variable} ${inter.variable} `}>
      <body className=" =scroll-smooth" >
        <Providers>
    
          <Anouncment />
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
