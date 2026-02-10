import React from "react";
import { motion } from "framer-motion";
import { Instagram, Send, Linkedin } from "lucide-react";
import Image from "next/image";

const SocialIcon: React.FC<{ Icon: React.ElementType; href?: string }> = ({
  Icon,
  href = "#",
}) => (
  <a href={href} className="text-[#1a1a1a] hover:opacity-60 transition-opacity">
    <Icon size={16} strokeWidth={2.5} />
  </a>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FFC20E] text-black overflow-hidden font-sans min-h-[650px] sm:min-h-[850px] lg:min-h-[950px] flex flex-col">
      {/* ================= HERO TEXT ================= */}
      <div className="relative z-20 flex flex-col items-center text-center pt-14 sm:pt-24 md:pt-36">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.05] mb-8 sm:mb-10 font-['Uni_Neue']">
          Your brand deserves <br />
          to be <span className="italic font-black">unforgettable.</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="px-8 sm:px-10 py-3 border-[1.5px] border-black rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-[#FFC20E] transition-all">
          Make Me Different
        </motion.button>
      </div>

      {/* ================= TORII GATE ================= */}
      <div className="absolute bottom-[-20px] sm:bottom-[-60px] md:bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none overflow-visible">
        <div
          className="
            relative

            w-[650px] 
            sm:w-[1100px] 
            md:w-[2500px] 
            lg:w-[6000px] 
            xl:w-[12000px] 
            2xl:w-[20000px]

            h-[320px] 
            sm:h-[480px] 
            md:h-[700px] 
            lg:h-[1000px] 
            xl:h-[1200px]

            -mb-[40px]
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

      {/* ================= FOOTER CONTENT ================= */}
      <div className="relative z-30 mt-auto px-6 sm:px-8 md:px-14 lg:px-24 pb-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between w-full">
          {/* LEFT LINKS */}
          <div className="flex flex-col items-center sm:items-start gap-1 font-['Uni_Neue']">
            {["Home", "Services", "Portfolio", "About Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg md:text-2xl font-normal leading-none hover:opacity-60 transition">
                {item}
              </a>
            ))}
          </div>

          {/* CENTER COPYRIGHT */}
          <div className="flex-1 flex justify-center">
            <span className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-bold opacity-70 font-['Uni_Neue'] text-center -mr-40 ">
              Duka Branding Agency ©2026
            </span>
          </div>

          {/* RIGHT CONTACT */}
          <div className="flex flex-col items-center sm:items-end gap-3 font-['Uni_Neue']">
            <div className="flex gap-4">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Send} />
            </div>

            <a
              href="mailto:dukacreativesss@gmail.com"
              className="text-sm md:text-xl font-normal hover:opacity-60 transition text-left">
              Dukacreativesss@gmail.com
            </a>

            <div className="text-[10px] md:text-xs font-bold tracking-wider text-left">
              <a href="tel:+251905093496" className="hover:opacity-60">
                +251905093496
              </a>
              <span className="mx-2 opacity-30">|</span>
              <a href="tel:+251943195220" className="hover:opacity-60">
                +251943195220
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
