"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// --- Testimonial Data ---
const testimonials = [
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
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check if we are on mobile to disable the scroll-jacking
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Only calculate the transform if we are NOT on mobile
  // On mobile, this transform will effectively be ignored by the logic below
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      // Mobile: 'h-auto' so it takes up normal space
      // Desktop: 'h-[300vh]' to create the scroll track distance
      className={`relative bg-white mt-16 md:mt-24 lg:mt-32 ${
        isMobile ? "h-auto" : "h-[300vh]"
      }`}>
      {/* Mobile: Relative positioning (flows normally)
         Desktop: Sticky positioning (locks in place while scrolling)
      */}
      <div
        className={`${
          isMobile
            ? "relative py-12"
            : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        }`}>
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-12 mb-8 md:mb-16">
          <div className="max-w-[1400px] mx-auto">
            <h2
              className="font-black uppercase tracking-tighter inline-block"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.5rem)" }}>
              Client <span className="text-[#FFD600]">voices.</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative w-full">
          <motion.div
            // 3. THE CRITICAL FIX:
            // If Mobile: x is always 0 (No animation).
            // If Desktop: x uses the scroll progress.
            style={{ x: isMobile ? 0 : x }}
            className={`
              flex gap-6 
              /* Mobile Styles: Enable native horizontal swipe + snapping */
              overflow-x-auto snap-x snap-mandatory px-6 w-full pb-12
              /* Desktop Styles: Hide overflow so the animation takes over */
              lg:overflow-visible lg:px-0 lg:pl-16 lg:pb-0
              /* Utility to hide ugly scrollbars */
              scrollbar-hide
            `}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                // 'snap-center' makes the cards lock into place on mobile swipe
                className={`
                  snap-center flex-shrink-0 
                  w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] 
                  ${testimonial.bgColor} 
                  rounded-3xl p-8 md:p-10 
                  flex flex-col justify-between 
                  min-h-[300px] md:min-h-[360px] 
                  shadow-xl
                `}>
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`${testimonial.textColor} opacity-20`}>
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                  </svg>
                </div>

                <p
                  className={`text-xl sm:text-2xl md:text-3xl font-semibold ${testimonial.textColor} leading-snug`}>
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <p
                    className={`text-base md:text-lg font-medium ${testimonial.textColor} opacity-70`}>
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            ))}

            {/* End Spacer for desktop only */}
            <div className="hidden lg:block flex-shrink-0 w-24" />
          </motion.div>
        </div>

        {/* Desktop Progress Bar (Hidden on Mobile) */}
        {!isMobile && (
          <div className="px-6 md:px-12 lg:px-16 mt-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4">
                <span className="text-sm text-black/40 font-medium">
                  Scroll
                </span>
                <div className="w-32 md:w-48 h-1 bg-black/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
