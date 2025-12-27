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

  const headlineTop = "Bold brands.";
  const headlineAccent = "Smarter systems.";
  const headlineBottom = "Better results.";

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
    <section className="relative w-full bg-white text-black min-h-screen flex items-center overflow-hidden pt-20 md:pt-32 pb-24 font-['Inter']">
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
          className="space-y-12 md:space-y-20" //16,24 before
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-black/60">
              We&apos;re different, you should be too.
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="mx-auto max-w-5xl text-[56px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-none font-extrabold tracking-tighter relative">
              <span className="block text-black">{headlineTop}</span>
              <span className="inline-block -skew-x-12 transform origin-left mt-4 md:mt-6">
                <span
                  className="px-6 py-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-extrabold"
                  style={{
                    WebkitTextStroke: "1.2px rgba(0,0,0,0.15)",
                    textShadow: "0 16px 50px rgba(245,158,11,0.2)",
                  }}>
                  {headlineAccent}
                </span>
              </span>
              <span className="block text-black mt-4 md:mt-6">
                {headlineBottom}
              </span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="mx-auto mt-10 h-2 w-56 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full origin-left shadow-lg shadow-yellow-400/50"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mt-16 md:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 transition-[grid-gap] duration-300">
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

          {/* Subheadline & Description */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto space-y-6 pt-10">
            <p className="text-2xl sm:text-3xl font-medium text-black/70">
              We help businesses turn ideas into brands, brands into
              experiences, and experiences into growth.
            </p>
            {/* <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
              From strategy to design to tech — we make sure your brand
              doesn&apos;t just exist, it stands out.
            </p> */}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-yellow-400 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-lg shadow-xl shadow-yellow-400/50 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <span className="inline-flex items-center gap-3">
                Let&apos;s Build Your Brand
                <ArrowRight
                  size={20}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>

            <button className="border-2 border-black text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-lg hover:bg-black hover:text-yellow-400 transition-colors duration-300 hover:scale-[1.03]">
              See Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}