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
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-20 md:space-y-32">
          {/* Step 1 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1 flex items-start">
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD93D]">
                01
              </span>
            </div>
            <div className="lg:col-span-11 space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                No templates here
              </h3>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl">
                everything is built from scratch, for you.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:text-center">
            <div className="lg:col-span-12 lg:col-start-1 space-y-4">
              <div className="flex justify-start lg:justify-center">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD93D]">
                  02
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Looks good, works great
              </h3>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl lg:mx-auto">
                every design has a purpose.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:text-right">
            <div className="lg:col-span-11 lg:col-start-2 space-y-4">
              <div className="flex justify-start lg:justify-end">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD93D]">
                  03
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                We grow with you
              </h3>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl lg:ml-auto">
                long-term support for long-term brands.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
