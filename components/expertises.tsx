"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaPalette, FaCode, FaChartLine, FaRobot, FaCogs, FaLayerGroup } from "react-icons/fa";

const expertises = [
  {
    id: 1,
    title: "Brand Strategy & Identity",
    description: "Clarify who you are, what you stand for, and how you show up.",
    icon: FaCogs,
    color: "bg-yellow-400",
    textColor: "text-black",
    media: "image",
    mediaUrl: "/images/brand-strategy.jpg"
  },
  {
    id: 2,
    title: "Brand Guidelines & Systems",
    description: "Consistent rules that keep your visuals and voice aligned.",
    icon: FaLayerGroup,
    color: "bg-black",
    textColor: "text-white",
    media: "image",
    mediaUrl: "/images/brand-guidelines.jpg"
  },
  {
    id: 3,
    title: "Content Creation & Social Media",
    description: "Consistent visuals, strategy, and engagement that grow your audience.",
    icon: FaPalette,
    color: "bg-white",
    textColor: "text-black",
    media: "video",
    mediaUrl: "/videos/content-creation.mp4"
  },
  {
    id: 4,
    title: "Website Development",
    description: "Professional, responsive sites designed to strengthen your presence online.",
    icon: FaCode,
    color: "bg-yellow-400",
    textColor: "text-black",
    media: "image",
    mediaUrl: "/images/wd.jpg"
  },
  {
    id: 5,
    title: "Telegram Bot Development",
    description: "Smart automation tools that make communication and business processes easier.",
    icon: FaRobot,
    color: "bg-black",
    textColor: "text-white",
    media: "video",
    mediaUrl: "/videos/bot-development.mp4"
  },
  {
    id: 6,
    title: "Ongoing Brand Support",
    description: "Stay confident and consistent long after the project is done.",
    icon: FaChartLine,
    color: "bg-white",
    textColor: "text-black",
    media: "image",
    mediaUrl: "/images/brand-support.jpg"
  },
];

export default function Expertises() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create progress values for each card with bottom entrance
  const cardProgress = [0, 1, 2, 3, 4, 5].map(i => 
    useTransform(scrollYProgress, [i / 6, (i + 1) / 6], [0, 1])
  );

  return (
    <section ref={containerRef} className="min-h-[600vh] relative bg-white py-20">
      {/* Sticky container */}
      <div className="sticky top-0  min-h-screen  flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[95vw] mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Expertise
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We&#39;re not just a branding agency — we&apos;re your creative and digital partner.
            </p>
          </motion.div>

          {/* Cards container */}
          <div className="relative h-[600px] w-full">
            {expertises.map((expertise, index) => (
              <motion.div
                key={expertise.id}
                className={`absolute inset-0 ${expertise.color} ${expertise.textColor} rounded-[2.5rem] shadow-2xl overflow-hidden mx-auto w-full max-w-[1400px]`}
                style={{
                  // Current card fades in and slides up from bottom
                  opacity: cardProgress[index],
                  y: useTransform(cardProgress[index], [0, 1], [300, 0]),
                  
                  // Next card pushes current card up and out
                  zIndex: useTransform(cardProgress[index], [0, 0.8, 1], [index + 1, 100, index + 1]),
                  
                  // Current card scales slightly as it exits
                  scale: useTransform(cardProgress[index], [0.8, 1], [1, 0.95]),
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Content side */}
                  <div className="flex flex-col justify-center p-12 lg:p-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`text-5xl ${expertise.color === 'bg-black' ? 'text-yellow-400' : expertise.color === 'bg-white' ? 'text-black' : 'text-black'}`}>
                        <expertise.icon />
                      </div>
                      <span className={`text-2xl font-bold px-5 py-3 rounded-full ${
                        expertise.color === 'bg-black' ? 'bg-yellow-400 text-black' : 
                        expertise.color === 'bg-white' ? 'bg-black text-yellow-400' : 'bg-black text-yellow-400'
                      }`}>
                        0{expertise.id}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                      {expertise.title}
                    </h3>
                    
                    <p className="text-xl lg:text-2xl mb-10 leading-relaxed">
                      {expertise.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-fit px-8 py-4 rounded-full font-bold text-lg border-2 ${
                        expertise.color === 'bg-black' 
                          ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-transparent hover:text-yellow-400' 
                          : expertise.color === 'bg-white'
                          ? 'bg-black text-yellow-400 border-black hover:bg-transparent hover:text-black'
                          : 'bg-black text-yellow-400 border-black hover:bg-transparent hover:text-black'
                      } transition-all duration-300`}
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Media side */}
                  <div className="relative hidden lg:block">
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      expertise.color === 'bg-black' ? 'bg-gray-900' : 
                      expertise.color === 'bg-white' ? 'bg-gray-100' : 'bg-yellow-300'
                    }`}>
                      <div className="text-center p-8">
                        <div className={`text-8xl mb-6 ${
                          expertise.color === 'bg-black' ? 'text-yellow-400' : 
                          expertise.color === 'bg-white' ? 'text-black' : 'text-black'
                        }`}>
                          {expertise.media === 'video' ? '🎬' : '🖼️'}
                        </div>
                        <div className={`w-24 h-1 mx-auto mb-4 ${
                          expertise.color === 'bg-black' ? 'bg-yellow-400' : 
                          expertise.color === 'bg-white' ? 'bg-black' : 'bg-black'
                        }`} />
                        <p className={`text-xl font-medium ${
                          expertise.color === 'bg-black' ? 'text-yellow-400' : 
                          expertise.color === 'bg-white' ? 'text-black' : 'text-black'
                        }`}>
                          {expertise.media === 'video' ? 'Video Content' : 'Image Content'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}