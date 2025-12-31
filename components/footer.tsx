"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Mail,
  Send,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(252,211,77,0.15), transparent 70%)",
        }}
      />

      {/* ===== TOP SECTION: UPDATED CTA ===== */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Large Ghost Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] tracking-tighter mb-12"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Your brand deserves <br />
                <span className="text-[#FFD93D]">
                  to be unforgettable.
                </span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-black rounded-full bg-white text-black font-bold hover:bg-black hover:text-white transition-all group overflow-hidden relative">
                <span className="relative z-10">Send Us an Email</span>
                <Mail size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
              </button>

              <button className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-all group shadow-xl shadow-black/10">
                <span>See Our Work</span>
                <div className="bg-[#FFD93D] text-black p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WRAPPER FOR DIAGONAL SECTION (KEEPING YOUR ORIGINAL) ===== */}
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

          {/* ===== ROTATING BADGE ===== */}
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

          {/* ===== LOGO ===== */}
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

          {/* ===== FOOTER CONTENT ===== */}
          <div className="relative z-10 px-6 pt-28 md:pt-32 pb-6 md:pb-8 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-end items-end ml-auto lg:ml-[200px]">
              <div className="flex-1 flex flex-col gap-4 items-start lg:items-center justify-end mt-17 -mr-70">
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

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-black">Follow us</span>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                      <Send size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                      <Instagram size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-[10px] text-black/50 font-medium">
                  © {currentYear} Duka Branding Agency — All Rights Reserved
                </p>
              </div>

              <div className="flex flex-col gap-3 text-left">
                <h3 className="text-sm font-bold text-black mb-1">Contact</h3>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-black">Phone:</span>
                  <a href="tel:+251905093496" className="text-xs text-black/80 hover:text-black transition-colors">+251905093496 / +251943195220</a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-black">Email:</span>
                  <a href="mailto:duka.creativess@gmail.com" className="text-xs text-black/80 hover:text-black transition-colors">duka.creativess@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}