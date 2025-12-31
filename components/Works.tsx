"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const logos = [
  {
    id: 1,
    name: "Mukecha",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Mukecha",
  },
  {
    id: 2,
    name: "Ibex Gaming",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Ibex+Gaming",
  },
  {
    id: 3,
    name: "Startup Garage",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Startup+Garage",
  },
  {
    id: 4,
    name: "Health Net Africa",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Health+Net+Africa",
  },
  {
    id: 5,
    name: "Aspire",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Aspire",
  },
  {
    id: 6,
    name: "Dermit",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Dermit",
  },
  {
    id: 7,
    name: "Invo Cash",
    src: "https://placehold.co/200x100/FFFFFF/333333?text=Invo+Cash",
  },
];

export default function Works() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-6xl font-black text-black text-left">
            These brands got bold.
          </h2>
          <p className="mt-4 text-lg text-black/70 max-w-2xl">
            Brands We&apos;ve Built. Systems We&apos;ve Launched. Stories
            We&apos;ve Told.
          </p>
        </motion.div>

        {/* Auto-scrolling Logo Marquee */}
        <div className="w-full">
          <motion.div
            className="flex gap-8"
            animate={isVisible ? { x: ["0%", "-100%"] } : {}}
            transition={{
              x: {
                duration: 15, // ⚡ Faster speed (was 40)
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear" as const,
              },
            }}>
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 h-40 bg-white rounded-xl border border-gray-200 
                           flex items-center justify-center p-6 shadow-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                  transition: { duration: 0.2 },
                }}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/200x100/FF0000/FFFFFF?text=Error";
                    e.currentTarget.alt = "Error loading image";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
