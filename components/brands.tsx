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

const allBrands = [...brands, ...brands, ...brands]; // Tripled for even smoother looping

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative bg-black py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Main Title */}
      <div className="px-6 mb-16 md:mb-24">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 border border-white/20 text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-8"
          >
            Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Bold brands trust us to bring <br className="hidden md:block" />
            their <span className="text-yellow-400 font-black italic">vision to life.</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="flex flex-col gap-4 md:gap-8 relative">
        
        {/* Row 1 - Left to Right */}
        <div 
          className="flex overflow-hidden select-none"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{
              duration: 40, // Slower for readability
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 will-change-transform"
          >
            {allBrands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-6 md:px-10 py-4 md:py-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors hover:border-yellow-400/50"
              >
                <span className="text-lg md:text-2xl font-bold text-white/60 whitespace-nowrap tracking-tight">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div 
          className="flex overflow-hidden select-none"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <motion.div
            initial={{ x: "-33.33%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 45, // Slightly different speed for visual "parallax"
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 will-change-transform"
          >
            {allBrands.map((brand, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-6 md:px-10 py-4 md:py-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors hover:border-yellow-400/50"
              >
                <span className="text-lg md:text-2xl font-bold text-white/60 whitespace-nowrap tracking-tight">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}