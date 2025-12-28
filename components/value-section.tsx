"use client";

import { motion } from "framer-motion";

export default function ValueSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white py-32 md:py-48 lg:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-32 md:space-y-48 lg:space-y-64"
        >
          {/* Section 1: Text Left, Space Right */}
          <motion.div variants={itemVariants} className="relative">
            {/* Large Background Number */}
            <span 
              className="absolute -top-16 md:-top-24 lg:-top-32 -left-4 md:left-0 text-[180px] md:text-[280px] lg:text-[360px] font-black text-black/[0.03] leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
            >
              01
            </span>
            
            <div className="relative z-10 max-w-3xl">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight"
                style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
              >
                No templates here — everything is{" "}
                <span className="text-yellow-400">built from scratch</span>, for you.
              </h2>
            </div>
          </motion.div>

          {/* Section 2: Space Left, Text Right */}
          <motion.div variants={itemVariants} className="relative">
            {/* Large Background Number */}
            <span 
              className="absolute -top-16 md:-top-24 lg:-top-32 right-0 md:right-12 text-[180px] md:text-[280px] lg:text-[360px] font-black text-black/[0.03] leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
            >
              02
            </span>
            
            <div className="relative z-10 max-w-3xl ml-auto text-right">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight"
                style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
              >
                Looks good, works great — every design has{" "}
                <span className="text-yellow-400">a purpose</span>.
              </h2>
            </div>
          </motion.div>

          {/* Section 3: Text Centered */}
          <motion.div variants={itemVariants} className="relative">
            {/* Large Background Number */}
            <span 
              className="absolute -top-16 md:-top-24 lg:-top-32 left-1/2 -translate-x-1/2 text-[180px] md:text-[280px] lg:text-[360px] font-black text-black/[0.03] leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
            >
              03
            </span>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight"
                style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
              >
                We grow with you — long-term support for{" "}
                <span className="text-yellow-400">long-term brands</span>.
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

