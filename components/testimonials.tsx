"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const testimonials = [
    {
      quote:
        "The team took the time to understand our vision and values — the final brand design truly captured who we are.",
      author: "Beimnet Tesfaye",
      title: "Startup Garage",
      category: "Creative Design",
      imageUrl: "https://placehold.co/100x100/A0A0A0/000000?text=B",
    },
    {
      quote:
        "Fast, clean, and on point. The quick turnaround meant we could start reaching customers without delay.",
      author: "Nazrawit Berhanu",
      title: "Dermit CTO",
      category: "Fast Delivery",
      imageUrl: "https://placehold.co/100x100/A0A0A0/000000?text=N",
    },
    {
      quote:
        "Unique in approach, goal-hitting in execution, and always result-focused.",
      author: "Abel Matheos",
      title: "Invo Cash Co-Founder",
      category: "Creative Design",
      imageUrl: "https://placehold.co/100x100/A0A0A0/000000?text=A",
    },
  ];

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10 1.15l2.78 5.63 6.22.9-4.5 4.38 1.06 6.2L10 15.3l-5.56 2.96 1.06-6.2L1 7.68l6.22-.9L10 1.15z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section id="testimonials" ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
              What Our Clients Say
            </h2>
            <p className="text-black/70 text-base sm:text-lg">
              Trusted by brands who believe in creativity and results.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="bg-black rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col h-full"
              >
                {/* Stars and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {testimonial.category}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex-grow mb-6 flex items-center justify-center">
                  <p className="text-base sm:text-lg leading-relaxed text-white text-center font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-yellow-400/30">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400 ring-offset-2 ring-offset-black flex-shrink-0">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      onError={() =>
                        console.error("Error loading testimonial image")
                      }
                    />
                  </div>
                  <div className="text-left flex-grow">
                    <p className="font-bold text-sm sm:text-base text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
