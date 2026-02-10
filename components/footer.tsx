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
          className="px-8 sm:px-10 py-3 sm:py-4 border-[1.5px] border-black rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-[#FFC20E] transition-all cursor-pointer">
          Make Me Different
        </motion.button>
      </div>

      {/* ================= TORII GATE IMAGE WRAPPER ================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none overflow-visible w-full flex justify-center">
        <div
          className="
            relative
            
            /* Responsive Widths (Preserving your Scaling Pattern) */
            w-[160%]         /* Mobile: slight zoom to frame center */
            sm:w-[1100px] 
            md:w-[2500px] 
            lg:w-[6000px] 
            xl:w-[12000px] 
            2xl:w-[20000px]

            /* Responsive Heights */
            h-[350px] 
            sm:h-[480px] 
            md:h-[700px] 
            lg:h-[1000px] 
            xl:h-[1200px]

            /* Responsive Bottom Positioning */
            -mb-[50px]
            sm:-mb-[120px]
            md:-mb-[200px]
            lg:-mb-[250px]
          ">
          <Image
            src="/images/du.png"
            alt="Duka Torii Gate"
            fill
            priority
            unoptimized
            className="object-contain object-bottom"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>

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
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-3 flex-1 -mr-10 font-['Inter']">
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
