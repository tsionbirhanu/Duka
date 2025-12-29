"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Flame,
  Music2,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 50%, rgba(252,211,77,0.08), transparent 70%)",
        }}
      />

      {/* ===== TOP SECTION: CTA ===== */}
      <section className="relative py-24 md:py-32 lg:py-36 overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            className="text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] font-black text-black/[0.02] leading-none select-none"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            DUKA
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-12 md:mb-16"
              style={{
                fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
              }}>
              Your brand deserves to stand out —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                let&apos;s make it unforgettable.
              </span>
            </motion.h2>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <button className="flex items-center gap-2 pl-5 pr-1 py-1 border border-black/80 rounded-2xl bg-white hover:bg-black hover:text-white transition-all group">
                <span className="font-medium text-black group-hover:text-white text-sm">
                  Send Us an Email
                </span>
                <div className="bg-black text-white p-2 rounded-md group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={16} strokeWidth={2} />
                </div>
              </button>

              <button className="flex items-center gap-2 pl-5 pr-1 py-1 bg-black rounded-2xl text-white hover:bg-gray-800 transition-all">
                <span className="font-medium text-sm">
                  See More of Our Work
                </span>
                <div className="bg-[#FFD93D] text-black p-2 rounded-md">
                  <Flame size={16} strokeWidth={2} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WRAPPER FOR DIAGONAL SECTION ===== */}
      <div className="relative mx-4 md:mx-6 lg:mx-8">
        {/* ===== DIAGONAL BACKGROUND ===== */}
        <div className="relative w-full min-h-[220px] md:min-h-[260px]">
          <svg
            viewBox="0 0 1440 300"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none">
            <path
              d="M0,300 
                 L0,240
                 C0,220 10,215 40,210
                 L1400,70
                 C1430,65 1440,70 1440,90
                 L1440,300
                 Z"
              fill="#FFD93D"
            />
          </svg>

          {/* ===== ROTATING BADGE (Inside Diagonal) ===== */}
          <motion.div
            className="absolute mt-20 right-4 md:-top-12 md:right-[6%] z-30 hidden lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <div className="relative w-20 h-20 xl:w-24 xl:h-24">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="98" fill="#FFD93D" />
                <defs>
                  <path
                    id="textCircle"
                    d="M 100, 100 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                    fill="none"
                  />
                </defs>
                <text
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: "0.12em",
                  }}
                  fill="black">
                  <textPath href="#textCircle">
                    • WE ARE DIFFERENT • YOU SHOULD BE TOO • WE ARE DIFFERENT •
                    YOU SHOULD BE TOO • WE ARE DIFFERENT • YOU SHOULD BE TOO •
                  </textPath>
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  style={{
                    fontSize: "52px",
                    fontWeight: "900",
                    fontFamily: "Arial Black, sans-serif",
                  }}
                  fill="black">
                  DK
                </text>
              </svg>
            </div>
          </motion.div>

          {/* ===== LOGO (Separate - Positioned Left) ===== */}
          <div className="absolute left-6 md:left-12 lg:left-16 bottom-4 md:bottom-6 z-20 -mb-16 -ml-18">
            <Image
              src="/images/duka-new.png"
              alt="Duka Logo"
              width={180}
              height={80}
              className="object-contain"
              priority
            />
          </div>

          {/* ===== FOOTER CONTENT (Center & Right) ===== */}
          <div className="relative z-10 px-6 pt-28 md:pt-32 pb-6 md:pb-8 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-end items-end ml-auto lg:ml-[200px]">
              {/* ===== CENTER: Nav + Follow Us + Copyright ===== */}
              <div className="flex-1 flex flex-col gap-4 items-start lg:items-center justify-end mt-17 -mr-70">
                {/* Navigation Pills */}
                <div className="flex flex-wrap gap-2">
                  {["Home", "Services", "Work", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-4 py-1.5 bg-white rounded-2xl text-xs font-semibold text-black hover:bg-black hover:text-white transition-all shadow-sm">
                      {item}
                    </Link>
                  ))}
                </div>

                {/* Follow Us Row */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-black">
                    Follow us
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
                      aria-label="Telegram">
                      <Send size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
                      aria-label="Instagram">
                      <Instagram size={14} />
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <p className="text-[10px] text-black/50 font-medium">
                  © {currentYear} Duka Branding Agency — All Rights Reserved
                </p>
              </div>

              {/* ===== RIGHT SIDE: Contact ===== */}
              <div className="flex flex-col gap-3 text-left">
                {/* Contact Heading */}
                <h3 className="text-sm font-bold text-black mb-1">Contact</h3>

                {/* Phone */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-black">
                    Phone:
                  </span>
                  <a
                    href="tel:+251905093496"
                    className="text-xs text-black/80 hover:text-black transition-colors">
                    +251905093496 / +251943195220
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-black">
                    Email:
                  </span>
                  <a
                    href="mailto:duka.creativess@gmail.com"
                    className="text-xs text-black/80 hover:text-black transition-colors">
                    duka.creativess@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
