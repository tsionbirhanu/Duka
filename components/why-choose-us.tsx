"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const statements = [
  { id: 1, text: "solve real problems.", sub: "Strategy first, pixels second." },
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
  const rangeStart = i / total;
  const rangeEnd = (i + 1) / total;

  const opacity = useTransform(progress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
  const rotateX = useTransform(progress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [80, 0, 0, -80]);
  const y = useTransform(progress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [60, 0, 0, -60]);

  return (
    <motion.div
      style={{ 
        opacity, 
        rotateX, 
        y,
        transformStyle: "preserve-3d" 
      }}
      className="absolute inset-0 flex flex-col justify-center will-change-transform"
    >
      <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black leading-[0.9] uppercase">
        {text}
      </h3>
      <p className="mt-6 text-lg md:text-2xl text-black/40 font-medium tracking-tight max-w-md">
        {sub}
      </p>

      <div className="mt-10 flex items-center gap-1.5">
        {statements.map((_, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === i ? "w-8 bg-yellow-400" : "w-4 bg-black/10"
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
      className="relative bg-white text-black min-h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Changed to justify-between and max-w-[1600px] to match reference image layout */}
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
          
          {/* Left Side: "We" pushed to the far left */}
          <div className="lg:w-auto">
            <h3 className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-black leading-none tracking-tighter text-black select-none">
              We
            </h3>
          </div>

          {/* Right Side: Animated Statements pushed to the far right */}
          {/* Added max-w-2xl to the container to keep content readable but spaced far out */}
          <div 
            className="lg:w-1/2 relative h-[400px] w-full max-w-2xl"
            style={{ perspective: "1200px" }}
          >
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