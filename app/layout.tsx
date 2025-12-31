import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Duka - Branding Agency",
  description:
    "Bold brands. Smarter systems. Better results. We help businesses turn ideas into brands.",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/images/duka.png?v=2", sizes: "64x64", type: "image/png" },
      { url: "/images/duka.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/images/duka.png?v=2", sizes: "256x256", type: "image/png" },
      { url: "/images/duka.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [
      { url: "/images/duka.png?v=2", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/images/duka.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
