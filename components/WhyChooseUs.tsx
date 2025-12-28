"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const weStatements = [
  {
    id: 1,
    text: "solve real problems.",
    subtext: "Strategy comes first, design follows.",
  },
  {
    id: 2,
    text: "understand you.",
    subtext:
      "We dive into your audience, values, and goals before creating anything.",
  },
  {
    id: 3,
    text: "communicate clearly.",
    subtext: "You'll always know what's happening, when, and why.",
  },
  {
    id: 4,
    text: "deliver on time.",
    subtext: "No missed deadlines — ever.",
  },
  {
    id: 5,
    text: "stay with you.",
    subtext:
      "Even after launch, we help you keep your brand strong and consistent.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 30%, rgba(252,211,77,0.08), transparent 50%), radial-gradient(600px 300px at 80% 70%, rgba(252,211,77,0.05), transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-yellow-400/60 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Why work with us?
          </h2>
        </motion.div>

        {/* Scrolling We Statements */}
        <div className="space-y-0">
          {weStatements.map((statement, index) => (
            <WeStatement
              key={statement.id}
              statement={statement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WeStatementProps {
  statement: {
    id: number;
    text: string;
    subtext: string;
  };
  index: number;
}

function WeStatement({ statement, index }: WeStatementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="py-8 md:py-12 border-b border-white/10 group">
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
        {/* Static "We" */}
        <span className="text-4xl md:text-5xl lg:text-7xl font-black text-yellow-400 flex-shrink-0">
          We
        </span>

        {/* Changing text */}
        <div className="flex-1">
          <motion.h3
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}>
            {statement.text}
          </motion.h3>
          <p className="text-base md:text-lg text-white/50 mt-3 max-w-2xl">
            {statement.subtext}
          </p>
        </div>

        {/* Number indicator */}
        <span className="text-6xl md:text-8xl font-black text-white/5 absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}
