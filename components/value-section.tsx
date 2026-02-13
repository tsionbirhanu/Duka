"use client";

import { motion, type Variants } from "framer-motion";

export default function ValueSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16 md:space-y-32 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Step 1 - Card style on mobile */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-black/5">
            <div>
              <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-8xl font-bold text-[#FFD93D] leading-none">
                01
              </span>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                No templates here
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-3xl">
                everything is built from scratch, for you.
              </p>
            </div>
          </motion.div>

          {/* Step 2 - Card style on mobile, center on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-black/5 text-left lg:text-center">
            <div>
              <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-8xl font-bold text-[#FFD93D] leading-none">
                02
              </span>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-2 md:mb-4">
                Looks good, works great
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-3xl lg:mx-auto">
                every design has a purpose.
              </p>
            </div>
          </motion.div>

          {/* Step 3 - Card style on mobile, right on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-black/5 text-left lg:text-right">
            <div>
              <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-8xl font-bold text-[#FFD93D] leading-none">
                03
              </span>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-2 md:mb-4">
                We grow with you
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-3xl lg:ml-auto">
                long-term support for long-term brands.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
