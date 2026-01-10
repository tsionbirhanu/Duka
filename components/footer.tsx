"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Send } from "lucide-react";

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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.9] tracking-tighter mb-12"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Your brand deserves <br />
                <span className="text-[#FFD93D]">to be unforgettable.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ rotateZ: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-2.5 bg-white text-black pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border-1 border-black cursor-pointer origin-center">
                <span>Send Us an Email</span>
                <span className="flex items-center justify-center w-8 h-8 bg-black rounded-lg text-lg">
                  ✉️
                </span>
              </motion.button>

              <motion.button
                whileHover={{ rotateZ: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-2.5 bg-black text-white pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border-2 border-black cursor-pointer origin-center">
                <span>See More of Our Work</span>
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-lg text-lg">
                  🔥
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WRAPPER FOR DIAGONAL SECTION (KEEPING YOUR ORIGINAL) ===== */}
      <div className="relative mx-4 md:mx-6 lg:mx-8">
        {/* ===== DIAGONAL BACKGROUND ===== */}
        <div className="relative w-full min-h-[500px] md:min-h-[260px] rounded-t-[40px] md:rounded-t-none overflow-hidden">
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
          <div className="absolute left-6 md:left-12 lg:left-16 bottom-4 md:bottom-6 z-20 -mb-16 -ml-18 hidden lg:block">
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
          <div className="relative z-10">
            {/* Mobile Layout - Inside diagonal container */}
            <div className="lg:hidden flex flex-col items-center text-center px-4 pt-60 gap-2.5">
              {/* Logo */}
              <Image
                src="/images/duka-new.png"
                alt="Duka Logo"
                width={90}
                height={36}
                className="object-contain mt-6"
                priority
              />

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ rotateZ: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block px-3 py-1 bg-white rounded-lg text-[10px] font-semibold text-black hover:bg-black hover:text-white transition-all shadow-sm">
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <Instagram size={12} />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-0.5 text-[10px] text-black font-medium">
                <a
                  href="mailto:duka.creativess@gmail.com"
                  className="hover:text-black/70">
                  duka.creativess@gmail.com
                </a>
                <a href="tel:+251905093496" className="hover:text-black/70">
                  +251 905 093 496
                </a>
                <p className="text-black/70 text-[9px]">
                  Addis Ababa, Ethiopia
                </p>
              </div>

              {/* Footer Bottom */}
              <div className="text-[8px] text-black/50">
                <p>© {currentYear} Duka</p>
              </div>
            </div>

            {/* Desktop Layout - ORIGINAL */}
            <div className="hidden lg:block px-6 pt-28 md:pt-32 pb-6 md:pb-8 md:px-12 lg:px-16">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-end items-end ml-auto lg:ml-[200px]">
                <div className="flex-1 flex flex-col gap-4 items-start lg:items-center justify-end mt-17 -mr-70">
                  <div className="flex flex-wrap gap-2">
                    {["Home", "Services", "Work", "Contact"].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ rotateZ: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}>
                        <Link
                          href={`#${item.toLowerCase()}`}
                          className="block px-4 py-1.5 bg-white rounded-xl text-xs font-semibold text-black hover:bg-black hover:text-white transition-all shadow-sm">
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-black">
                      Follow us
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
                        <Send size={14} />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm">
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
                    <span className="text-xs font-semibold text-black">
                      Phone:
                    </span>
                    <a
                      href="tel:+251905093496"
                      className="text-xs text-black/80 hover:text-black transition-colors">
                      +251905093496 / +251943195220
                    </a>
                  </div>
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
      </div>
    </footer>
  );
}
