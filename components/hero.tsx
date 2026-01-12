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
      number: "16+",
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
      additionalText: "0 Missed Deadlines since launch",
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="flex flex-col">
          {/* Small Tagline Above - Single line on mobile */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-6 md:mb-8">
            <p className="text-xs sm:text-sm md:text-base font-normal tracking-[0.15em] sm:tracking-[0.25em] uppercase text-black/40 px-4">
              {tagline}
            </p>
          </motion.div>

          {/* Main Title - 2 Lines on mobile, 2 Lines on desktop */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-24 lg:mb-32">
            <h1 className="mx-auto max-w-full px-4 text-[36px] sm:text-[48px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.1] md:leading-[0.92] font-bold tracking-[-0.02em] md:tracking-[-0.03em] relative">
              {/* Line 1 - Black */}
              <span className="block text-black">{mainTitleLine1}</span>
              {/* Line 2 - Yellow with accent styling */}
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 mt-1 md:mt-3"
                style={{
                  textShadow: "none",
                }}>
                {mainTitleLine2}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {/* Horizontal scrollable container for mobile */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-4 min-w-max">
                {cards.map((card, index) => {
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
                      onClick={() =>
                        console.log(
                          "Card Clicked:",
                          isVideoCard
                            ? card.label
                            : `${card.number} ${card.description}`
                        )
                      }
                      whileTap={{ scale: 0.95 }}
                      className={`relative overflow-hidden rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-yellow-400/80 cursor-pointer ${
                        isColorCard
                          ? card.backgroundColorClass
                          : "bg-transparent"
                      }`}
                      style={{
                        width: "280px",
                        height: "380px",
                        flexShrink: 0,
                      }}>
                      {isVideoCard && (
                        <div className="absolute inset-0">
                          <video
                            key={`vid-${index}`}
                            src={card.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Content for Color Cards */}
                      {isColorCard && (
                        <div
                          className={`relative z-30 p-6 w-full h-full flex flex-col justify-between ${card.textColorClass}`}>
                          <div className="text-left">
                            <h4 className="text-5xl font-extrabold mb-2">
                              {card.number}
                            </h4>
                          </div>

                          {/* Description at bottom left */}
                          <div className="text-left">
                            <p className="text-xl font-bold opacity-90 mb-2">
                              {card.description}
                            </p>
                            <div
                              className={`w-48 h-1 mb-2 ${
                                card.textColorClass === "text-black"
                                  ? "bg-black"
                                  : "bg-yellow-400"
                              }`}></div>
                            {/* Additional text line */}
                            {card.additionalText && (
                              <p className="text-sm font-medium opacity-80">
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
            </div>

            {/* Desktop grid */}
            <div className="hidden lg:grid grid-cols-4 gap-5 transition-[grid-gap] duration-300 max-w-[1400px] mx-auto">
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
                      scale: 1.1,
                      y: -15,
                      boxShadow: "none",
                    }}
                    className={`group relative overflow-hidden rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-yellow-400/80 cursor-pointer transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] w-full ${
                      isColorCard ? card.backgroundColorClass : "bg-transparent"
                    }`}
                    style={{
                      zIndex: isHovered ? 40 : 10,
                      height: "400px",
                      maxWidth: "320px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: isVideoCard
                        ? "flex-end"
                        : "space-between",
                      transform: `translateX(${offsetX}px) ${
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
                          <h4 className="text-5xl sm:text-6xl font-extrabold mb-2">
                            {card.number}
                          </h4>
                        </div>

                        {/* Description at bottom left */}
                        <div className="text-left">
                          <p className="text-xl sm:text-2xl font-bold opacity-90 mb-2">
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
                            <p className="text-base sm:text-lg font-medium opacity-80">
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
            className="relative w-full bg-white mt-16 md:mt-28 lg:mt-36 py-16 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Main Bold Headline - Inter font with tight leading */}
              <h2
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-black leading-[1.2] md:leading-[1.1] tracking-tight max-w-5xl"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                We help businesses turn ideas into brands, brands into
                experiences, and experiences into{" "}
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500"
                  style={{ textShadow: "none" }}>
                  growth.
                </span>
              </h2>

              {/* Bottom Section with Image and Description */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20 lg:gap-28 mt-12 md:mt-24">
                {/* Image with floating shadow and animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-[#F5E6D3] rounded-[2.5rem] overflow-hidden flex-shrink-0 mx-auto md:mx-0 group"
                  style={{
                    boxShadow: "none",
                  }}>
                  <img
                    src="/images/image.png"
                    alt="Team member"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </motion.div>

                {/* Secondary Description and Button */}
                <div className="flex-1 flex flex-col justify-center md:pt-8 lg:pt-12 text-center md:text-left">
                  <p className="text-base sm:text-lg md:text-2xl lg:text-[26px] font-medium text-black/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                    From strategy to design to tech — we make sure your brand
                    doesn&apos;t just exist, it stands out.
                  </p>

                  {/* Single Button on mobile, two on desktop */}
                  <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <motion.button
                      whileHover={{ rotateZ: -3 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="group inline-flex items-center justify-center gap-2.5 bg-yellow-300 text-black pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border border-yellow-300 cursor-pointer origin-center transition-all w-full sm:w-auto">
                      Let&apos;s Build Your Brand
                      <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg">
                        🔥
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ rotateZ: -3 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="hidden sm:inline-flex items-center gap-2.5 bg-black text-white pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border border-black cursor-pointer origin-center transition-all">
                      See Our Work
                      <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black group-hover:bg-gray-100 transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Down Arrow - Bottom Right - Hidden on mobile */}
            <div className="hidden md:block absolute bottom-8 right-8 md:bottom-12 md:right-16">
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
