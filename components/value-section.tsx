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
          className="space-y-16 md:space-y-32 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
        >
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex justify-start">
              <span className="text-[4rem] sm:text-[5rem] lg:text-[5rem] font-bold text-[#FFD93D] leading-none">
                01
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-l-4 border-[#FFD93D] text-left h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-black leading-tight mb-3">
                No templates here
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                everything is built from scratch, for you.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex justify-start">
              <span className="text-[4rem] sm:text-[5rem] lg:text-[5rem] font-bold text-[#FFD93D] leading-none">
                02
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-l-4 border-[#FFD93D] text-left h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-black leading-tight mb-3">
                Looks good, works great
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                every design has a purpose.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex justify-start">
              <span className="text-[4rem] sm:text-[5rem] lg:text-[5rem] font-bold text-[#FFD93D] leading-none">
                03
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-l-4 border-[#FFD93D] text-left h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-black leading-tight mb-3">
                We grow with you
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                long-term support for long-term brands.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
