"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-white py-32 md:py-40 lg:py-52 overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 50%, rgba(252,211,77,0.08), transparent 70%)",
        }}
      />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] font-black text-black/[0.02] leading-none select-none"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          DUKA
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-yellow-400 text-black text-xs font-bold tracking-wider uppercase rounded-full mb-10 md:mb-12"
          >
            Let's Work Together
          </motion.span>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-12 md:mb-16"
            style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}
          >
            Your brand deserves to stand out —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
              let's make it unforgettable.
            </span>
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Primary Button - Send Us an Email */}
            <a
              href="mailto:hello@duka.com"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white pl-7 pr-2 py-2.5 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Mail size={18} className="opacity-80" />
              Send Us an Email
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                <ArrowRight size={18} className="text-black" />
              </span>
            </a>

            {/* Secondary Button - See More of Our Work */}
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-white border-2 border-black/20 hover:border-black text-black pl-7 pr-2 py-2.5 rounded-full font-semibold text-base transition-all duration-300"
            >
              See More of Our Work
              <span className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} className="text-white" />
              </span>
            </a>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 md:mt-12 text-sm md:text-base text-black/40"
          >
            We typically respond within 24 hours. Let's start a conversation.
          </motion.p>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}

