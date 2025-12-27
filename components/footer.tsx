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
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* ===== TOP SECTION: CTA ===== */}
      <div className="relative z-10 max-w-6xl mx-auto lg:px-24 pt-56 pb-2 md:pt-52 md:pb-3 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black mb-8 tracking-[-0.01em] leading-[1.1]">
          Let&apos;s Get Hyped!
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <button className="flex items-center gap-2 pl-5 pr-1 py-1 border border-black/80 rounded-2xl bg-white hover:bg-black hover:text-white transition-all group">
            <span className="font-medium text-black group-hover:text-white text-sm">
              Mail ons direct
            </span>
            <div className="bg-black text-white p-2 rounded-md group-hover:bg-white group-hover:text-black transition-all">
              <Mail size={16} strokeWidth={2} />
            </div>
          </button>

          <button className="flex items-center gap-2 pl-5 pr-1 py-1 bg-black rounded-2xl text-white hover:bg-gray-800 transition-all">
            <span className="font-medium text-sm">Get Results</span>
            <div className="bg-[#FFD93D] text-black p-2 rounded-md">
              <Flame size={16} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>

      {/* ===== WRAPPER FOR DIAGONAL SECTION ===== */}
      <div className="relative mx-4 md:mx-6 lg:mx-8">

        {/* ===== DIAGONAL BACKGROUND ===== */}
        <div className="relative w-full min-h-[220px] md:min-h-[260px]">
          <svg
            viewBox="0 0 1440 300"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
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
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
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
                  fill="black"
                >
                  <textPath href="#textCircle">
                    • GET HYPED • GET NOTICED • GET RESULTS •
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
                  fill="black"
                >
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
                  {["Expertises", "Work", "About", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-4 py-1.5 bg-white rounded-2xl text-xs font-semibold text-black hover:bg-black hover:text-white transition-all shadow-sm"
                    >
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
                    {[Linkedin, Music2, Instagram, Youtube].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Copyright */}
                <p className="text-[10px] text-black/50 font-medium">
                  © {currentYear} Duka
                </p>
              </div>

              {/* ===== RIGHT SIDE: Contact & Address ===== */}
              <div className="flex flex-col gap-3 text-left">
                
                {/* Contact */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-black mb-1">
                    Contact
                  </span>
                  <a
                    href="mailto:contact@duka.agency"
                    className="text-xs text-black/80 hover:text-black transition-colors"
                  >
                    contact@duka.agency
                  </a>
                  <a
                    href="tel:+251900010203"
                    className="text-xs text-black/80 hover:text-black transition-colors"
                  >
                    +251 900 010 203
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-black mb-1">
                    Adres
                  </span>
                  <p className="text-xs text-black/80">
                    Creative Hub,
                  </p>
                  <p className="text-xs text-black/80">
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                {/* Privacy */}
                <Link
                  href="/privacy"
                  className="text-[10px] text-black/50 hover:text-black transition-colors"
                >
                  Privacyvoorwaarden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
