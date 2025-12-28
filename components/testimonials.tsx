"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  bgColor: string;
  textColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Captured who we are perfectly. Duka really listened.",
    author: "Startup Garage",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  {
    id: 2,
    quote: "Fast, clean, and on point. Exactly what we needed.",
    author: "Dermit",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 3,
    quote: "Iterated until it was perfect — couldn't be happier.",
    author: "Zemenay Tech",
    bgColor: "bg-amber-100",
    textColor: "text-black",
  },
  {
    id: 4,
    quote: "High-level understanding of business needs.",
    author: "Efuye Gela",
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  {
    id: 5,
    quote: "Helped us stand out in meaningful ways.",
    author: "Chewata Awaqi",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 6,
    quote: "Unique approach, result-focused every time.",
    author: "Invo Cash",
    bgColor: "bg-amber-100",
    textColor: "text-black",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative bg-white"
      style={{ height: "300vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section Header */}
        <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase rounded-full mb-6"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              What our clients say
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative w-full">
          <motion.div
            className="flex gap-6 md:gap-8 pl-6 md:pl-12 lg:pl-16"
            style={{ x }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex-shrink-0 w-[340px] sm:w-[400px] md:w-[450px] lg:w-[500px] ${testimonial.bgColor} rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[360px] shadow-xl`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`${testimonial.textColor} opacity-20`}
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p
                  className={`text-xl sm:text-2xl md:text-3xl font-semibold ${testimonial.textColor} leading-snug flex-grow`}
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-8 pt-6 border-t border-current/10">
                  <p
                    className={`text-base md:text-lg font-medium ${testimonial.textColor} opacity-70`}
                  >
                    — {testimonial.author}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* End spacer */}
            <div className="flex-shrink-0 w-16 md:w-24" />
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="px-6 md:px-12 lg:px-16 mt-12 md:mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-sm text-black/40 font-medium">Scroll</span>
              <div className="w-32 md:w-48 h-1 bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
