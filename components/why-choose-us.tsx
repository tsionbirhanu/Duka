"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const statements = [
  {
    id: 1,
    text: "solve real problems.",
    sub: "Strategy first, pixels second.",
  },
  { id: 2, text: "understand you.", sub: "We dive deep before we design." },
  { id: 3, text: "speak clearly.", sub: "No jargon. Just results." },
  { id: 4, text: "deliver on time.", sub: "Your deadline is our religion." },
  { id: 5, text: "stay with you.", sub: "Partnership beyond the launch." },
];

function StatementItem({
  text,
  sub,
  i,
  progress,
  total,
}: {
  text: string;
  sub: string;
  i: number;
  progress: MotionValue<number>;
  total: number;
}) {
  // Mobile: Adjusted range to make transitions snappier on shorter scroll
  const rangeStart = i / total;
  const rangeEnd = (i + 1) / total;
  // Fade + slight vertical motion. overlap ensures next sentence is visible when
  // it's adjacent to "We" so transitions feel continuous (no hard rotation).
  const overlap = 0.08;
  const startA = Math.max(0, rangeStart - overlap);
  const startB = rangeStart + 0.02;
  const endA = rangeEnd - 0.02;
  const endB = Math.min(1, rangeEnd + overlap);

  const opacity = useTransform(
    progress,
    [startA, startB, endA, endB],
    [0, 1, 1, 0],
  );

  const y = useTransform(
    progress,
    [startA, startB, endA, endB],
    [30, 0, 0, -30],
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex flex-col justify-center lg:justify-center will-change-transform origin-bottom lg:origin-center">
      <h3
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-black leading-[0.95] sm:leading-[0.9] uppercase"
        style={{
          fontFamily:
            "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
        }}>
        {text}
      </h3>
      <p
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-black/50 font-medium tracking-tight max-w-[80%] lg:max-w-md"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {sub}
      </p>

      {/* Progress Indicators - Adjusted for Mobile Layout */}
      <div className="mt-8 lg:mt-10 flex items-center gap-2">
        {statements.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === i
                ? "w-8 sm:w-10 bg-[#FFD93D]" // Brand Highlight Color
                : "w-2 bg-black/10"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white text-black min-h-[350vh] md:min-h-[500vh]" // Reduced height on mobile for better UX
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-2 sm:px-3 lg:px-4 h-full flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-10 xl:gap-18">
          {/* Left Side: "WE" Anchor */}
          {/* Mobile: Pushed to top-left to form a sentence starter */}
          {/* Large screens: Start from center */}
          <div className="flex-shrink-0 lg:w-auto relative z-10 pt-10 lg:pt-0">
            <h3
              className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[18rem] xl:text-[20rem] font-black leading-none tracking-tighter text-black/90 select-none"
              style={{
                fontFamily:
                  "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
              }}>
              We
            </h3>
          </div>

          {/* Right Side: Animated Statements */}
          {/* Mobile: Aligned left to match "We", creating a vertical sentence flow */}
          {/* Large screens: Continue from "We" to form sentence */}
          <div
            className="flex-grow lg:flex-shrink lg:w-auto relative h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[450px] w-full lg:max-w-2xl xl:max-w-3xl"
            style={{ perspective: "1000px" }}>
            {statements.map((s, i) => (
              <StatementItem
                key={s.id}
                i={i}
                text={s.text}
                sub={s.sub}
                progress={scrollYProgress}
                total={statements.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
