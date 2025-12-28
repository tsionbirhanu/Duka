"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

interface Statement {
  id: number
  headline: string
  description: string
}

const statements: Statement[] = [
  {
    id: 1,
    headline: "solve real problems.",
    description: "Strategy comes first, design follows.",
  },
  {
    id: 2,
    headline: "understand you.",
    description: "We dive into your audience, values, and goals before creating anything.",
  },
  {
    id: 3,
    headline: "communicate clearly.",
    description: "You'll always know what's happening, when, and why.",
  },
  {
    id: 4,
    headline: "deliver on time.",
    description: "No missed deadlines — ever.",
  },
  {
    id: 5,
    headline: "stay with you.",
    description: "Even after launch, we help you keep your brand strong and consistent.",
  },
]

interface StatementItemProps {
  statement: Statement
  index: number
  totalStatements: number
  scrollYProgress: MotionValue<number>
}

function StatementItem({ statement, index, totalStatements, scrollYProgress }: StatementItemProps) {
  // Calculate the scroll range for this statement
  const segmentSize = 1 / totalStatements
  const start = index * segmentSize
  const peak = start + segmentSize * 0.5
  const end = start + segmentSize

  // Opacity: fade in, stay visible, fade out
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, peak, end - 0.05, end],
    [0, 1, 1, 1, index === totalStatements - 1 ? 1 : 0]
  )

  // Y position: slide up into view, stay, slide up out
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1, peak, end - 0.1, end],
    [60, 0, 0, 0, index === totalStatements - 1 ? 0 : -60]
  )

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      {/* Headline */}
      <h3 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {statement.headline}
      </h3>
      
      {/* Description */}
      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed max-w-xl">
        {statement.description}
      </p>

      {/* Progress indicator */}
      <div className="mt-8 md:mt-12 flex items-center gap-2">
        {statements.map((_, i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-yellow-400" : "w-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const n = statements.length

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative bg-white"
      style={{ minHeight: `${(n + 1) * 100}vh` }}
    >
      {/* Section Header */}
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Badge */}
          <div className="mb-8 md:mb-12">
            <span className="inline-block px-4 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase rounded-full">
              Why Choose Us
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Static "We" */}
            <div className="lg:sticky lg:top-1/3">
              <h2 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-bold text-black leading-none tracking-tighter"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                We
              </h2>
            </div>

            {/* Right Side - Changing Statements */}
            <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              {statements.map((statement, index) => (
                <StatementItem
                  key={statement.id}
                  statement={statement}
                  index={index}
                  totalStatements={n}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-12 left-6 md:left-12 lg:left-16">
            <div className="flex items-center gap-3 text-black/30">
              <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

