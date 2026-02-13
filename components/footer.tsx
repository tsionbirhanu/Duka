import React from "react";
import { motion } from "framer-motion";
import { Instagram, Send, Linkedin } from "lucide-react";
import Image from "next/image";

const SocialIcon: React.FC<{ Icon: React.ElementType; href?: string }> = ({
  Icon,
  href = "#",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1a1a1a] hover:opacity-60 transition-opacity p-2"
    aria-label="Social Link">
    <Icon size={18} strokeWidth={2.5} />
  </a>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#FFC20E] text-black overflow-hidden font-sans min-h-[650px] sm:min-h-[850px] lg:min-h-[950px] flex flex-col justify-between">
      {/* ================= HERO TEXT ================= */}
      <div className="relative z-20 flex flex-col items-center text-center pt-20 sm:pt-24 md:pt-36 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.1] sm:leading-[1.05] mb-8 sm:mb-10"
          style={{ fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif" }}>
          Your brand deserves <br />
          to be <span className="italic font-black">unforgettable.</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="px-8 sm:px-10 py-3 sm:py-4 border-[2px] border-black rounded-2xl text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-[#FFC20E] transition-all cursor-pointer">
          Make Me Different
        </motion.button>
      </div>

      {/* ================= TORII GATE IMAGE WRAPPER ================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none overflow-visible w-full flex justify-center">
        <div
          className="relative w-full max-w-[1400px] px-4 sm:px-6 flex justify-center"
          style={{ pointerEvents: "none" }}>
          <Image
            src="/images/dukalogo.svg"
            alt="Duka Torii Gate"
            width={1400}
            height={520}
            priority
            unoptimized
            className="object-contain object-bottom w-full h-auto -mb-20 sm:-mb-80"
          />
        </div>
      </div>

      {/* Mobile professional logo (transparent, no white rectangle) */}
      {/* <div className="md:hidden w-full flex justify-center mt-6 z-20">
        <div className="w-28 h-auto flex items-center justify-center">
          <Image
            src="/images/dukalogo.svg"
            alt="Duka logo"
            width={220}
            height={70}
            unoptimized
            className="w-full h-auto"
          />
        </div>
      </div> */}

      {/* ================= FOOTER LINKS CONTENT ================= */}
      <div className="relative z-30 w-full px-6 sm:px-8 md:px-14 lg:px-24 pb-12 sm:pb-10 mt-auto">
        {/* Container: Stack on mobile, Row on desktop */}
        <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row md:items-end md:justify-between w-full">
          {/* LEFT: Navigation Links */}
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-1 flex-1 font-['Inter']">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/#works" },
              { label: "About Us", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg sm:text-xl md:text-2xl font-normal leading-none hover:opacity-60 transition py-1 md:py-0">
                {item.label}
              </a>
            ))}
          </div>

          {/* CENTER: Copyright (Order changes on mobile via flex-col-reverse logic or simpler stacking) */}
          <div className="flex justify-center md:mb-1">
            <span className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.35em] uppercase font-bold opacity-70 text-center whitespace-nowrap font-['Inter']">
              Duka Branding Agency ©2026
            </span>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-3 flex-1 -mr-15 font-['Inter']">
            {/* Social Icons */}
            <div className="flex gap-4 md:gap-2">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Send} />
            </div>

            {/* Email */}
            <a
              href="mailto:dukacreativesss@gmail.com"
              className="text-base sm:text-lg md:text-xl font-normal hover:opacity-60 transition text-center md:text-right break-all sm:break-normal">
              Dukacreativesss@gmail.com
            </a>

            {/* Phone Numbers */}
            <div className="text-[11px] md:text-xs font-bold tracking-wider text-center md:text-right flex items-center gap-2">
              <a
                href="tel:+251905093496"
                className="hover:opacity-60 whitespace-nowrap">
                +251 90 509 3496
              </a>
              <span className="opacity-30">|</span>
              <a
                href="tel:+251943195220"
                className="hover:opacity-60 whitespace-nowrap">
                +251 94 319 5220
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
