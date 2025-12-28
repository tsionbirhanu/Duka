"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easeOut } from "framer-motion";

export default function Hero() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Small text above main title
  const tagline = "Bold brands. Smarter systems. Better results.";

  // Main title in 2 lines, 2 colors
  const mainTitleLine1 = "We're Different";
  const mainTitleLine2 = "You Should Be Too.";

  const cards = [
    {
      label: "Digital Marketing",
      sublabel:
        "Reach the right audience, build stronger connections, and grow faster.",
      video: "/videos/duka2.mp4",
      mediaType: "video",
    },
    {
      number: "50+",
      description: "Brands Built",
      additionalText: "From startups to enterprises",
      backgroundColorClass: "bg-black",
      textColorClass: "text-yellow-400",
      mediaType: "color",
    },
    {
      label: "Brand Strategy & Identity",
      sublabel: "Clarify who you are, what you stand for, and how you show up.",
      video: "/videos/duka.mp4",
      mediaType: "video",
    },
    {
      number: "100%",
      description: "On-Time Delivery",
      additionalText: "No missed deadlines",
      backgroundColorClass: "bg-yellow-400",
      textColorClass: "text-black",
      mediaType: "color",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.07, duration: 0.9 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeOut },
    },
  };

  const computeOffset = (index: number) => {
    if (hoverIndex === null || isMobile) return 0;
    const distance = index - hoverIndex;
    return distance * 40;
  };

  return (
    <section className="relative w-full bg-white text-black min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(1200px 400px at 10% 10%, rgba(252,211,77,0.08), transparent 10%), radial-gradient(1200px 400px at 95% 90%, rgba(252,211,77,0.05), transparent 15%)",
        }}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="flex flex-col"
        >
          {/* Small Tagline Above */}
          <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8">
            <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] uppercase text-black/40">
              {tagline}
            </p>
          </motion.div>

          {/* Main Title - 2 Lines, 2 Colors */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-24 lg:mb-32">
            <h1 className="mx-auto max-w-full px-4 text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[0.92] font-bold tracking-[-0.03em] relative">
              {/* Line 1 - Black */}
              <span className="block text-black">{mainTitleLine1}</span>
              {/* Line 2 - Yellow with accent styling */}
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 mt-2 md:mt-3"
                style={{
                  textShadow: "0 8px 40px rgba(251,191,36,0.3)",
                }}>
                {mainTitleLine2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 transition-[grid-gap] duration-300">
              {cards.map((card, index) => {
                const offsetX = computeOffset(index);
                const isHovered = hoverIndex === index && !isMobile;
                const isVideoCard = card.mediaType === "video";
                const isColorCard = card.mediaType === "color";

                return (
                  <motion.button
                    aria-label={
                      isVideoCard
                        ? card.label
                        : `${card.number} ${card.description}`
                    }
                    key={
                      isVideoCard
                        ? card.label
                        : `${card.number}-${card.description}`
                    }
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onFocus={() => setHoverIndex(index)}
                    onBlur={() => setHoverIndex(null)}
                    onClick={() =>
                      console.log(
                        "Card Clicked:",
                        isVideoCard
                          ? card.label
                          : `${card.number} ${card.description}`
                      )
                    }
                    layout
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    whileHover={{
                      scale: isMobile ? 1.0 : 1.1,
                      y: isMobile ? 0 : -15,
                      boxShadow: "0 40px 80px -12px rgba(0, 0, 0, 0.5)",
                    }}
                    className={`group relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-yellow-400/80 cursor-pointer transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isColorCard ? card.backgroundColorClass : "bg-transparent"
                    }`}
                    style={{
                      zIndex: isHovered ? 40 : 10,
                      minHeight: 400, // Reduced height from 520 to 400
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: isVideoCard
                        ? "flex-end"
                        : "space-between",
                      transform: isMobile
                        ? "none"
                        : `translateX(${offsetX}px) ${
                            isHovered ? " scale(1.1)" : ""
                          }`,
                    }}>
                    {isVideoCard && (
                      <div className="absolute inset-0">
                        <motion.video
                          key={`vid-${index}`}
                          src={card.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}

                    {/* Content for Color Cards */}
                    {isColorCard && (
                      <div
                        className={`relative z-30 p-8 w-full h-full flex flex-col justify-between ${card.textColorClass}`}>
                        <div className="text-left">
                          <h4 className="text-5xl sm:text-6xl font-extrabold drop-shadow-md mb-2">
                            {card.number}
                          </h4>
                        </div>

                        {/* Description at bottom left */}
                        <div className="text-left">
                          <p className="text-xl sm:text-2xl font-bold opacity-90 drop-shadow-sm mb-2">
                            {card.description}
                          </p>
                          <div
                            className={`w-56 h-1 ${
                              card.textColorClass === "text-black"
                                ? "bg-black"
                                : "bg-yellow-400"
                            }`}></div>
                          {/* Additional text line */}
                          {card.additionalText && (
                            <p className="text-base sm:text-lg font-medium opacity-80 drop-shadow-sm">
                              {card.additionalText}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Subheadline & Description Section */}
          <motion.div
            variants={itemVariants}
            className="relative w-full bg-white mt-20 md:mt-28 lg:mt-36 py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20 -mx-4 sm:-mx-6 lg:-mx-8"
            style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
            <div className="max-w-6xl mx-auto">
              {/* Main Bold Headline - Inter font */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-black leading-[1.2] tracking-tight max-w-5xl"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                We help businesses turn ideas into brands, brands into
                experiences, and experiences into growth.
              </h2>

              {/* Bottom Section with Image and Description */}
              <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 lg:gap-28 mt-16 md:mt-24">
                {/* Image */}
                <div className="w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-[#F5E6D3] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <img
                    src="/images/image.png"
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Secondary Description and Button */}
                <div className="flex-1 flex flex-col justify-center md:pt-8 lg:pt-12">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-black/80 leading-relaxed max-w-xl">
                    From strategy to design to tech — we make sure your brand
                    doesn&apos;t just exist, it stands out.
                  </p>

                  {/* Buttons */}
                  <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
                    <button className="group inline-flex items-center gap-3 bg-white border border-black/20 hover:border-black pl-6 pr-2 py-2 rounded-full font-medium text-sm text-black transition-all duration-300">
                      Let&apos;s Build Your Brand
                      <span className="w-9 h-9 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                        <ArrowRight size={16} className="text-white" />
                      </span>
                    </button>
                    <button className="group inline-flex items-center gap-3 bg-white border border-black/20 hover:border-black pl-6 pr-2 py-2 rounded-full font-medium text-sm text-black transition-all duration-300">
                      See Our Work
                      <span className="w-9 h-9 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                        <ArrowRight size={16} className="text-white" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Down Arrow - Bottom Right */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16">
              <button className="w-14 h-14 rounded-full border-2 border-black/15 flex items-center justify-center hover:border-black/40 transition-colors duration-300 bg-white/50 backdrop-blur-sm">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black/50">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
