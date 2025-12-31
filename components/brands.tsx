"use client";

import { motion } from "framer-motion";

const brands = [
  "Startup Garage",
  "Dermit",
  "Invo Cash",
  "Chewata Awaqi",
  "Health Net Africa",
  "Aspire",
  "Mukecha Studios",
  "Ibex Gaming",
  "Essence of Work",
  "Zemenay Tech",
  "Efuye Gela",
];

// Duplicate for seamless infinite scroll
const allBrands = [...brands, ...brands];

export default function Brands() {
  return (
    <section id="brands" className="relative bg-black py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Main Title */}
      <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/10 text-white text-xs font-medium tracking-wider uppercase rounded-full mb-8"
          >
            Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Bold brands trust us to bring their{" "}
            <span className="text-yellow-400">vision to life.</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Scrolling Logos - Row 1 (Left to Right) */}
      <div className="relative mb-6 md:mb-8">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {allBrands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-8 md:px-12 py-6 md:py-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              >
                <span 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white/70 group-hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Infinite Scrolling Logos - Row 2 (Right to Left) */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...allBrands].reverse().map((brand, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-8 md:px-12 py-6 md:py-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              >
                <span 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white/70 group-hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}

