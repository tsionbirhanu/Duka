"use client";

import type React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Expertise {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  colorTheme: "cream" | "yellow" | "black";
  mediaType: "video" | "image";
  mediaUrl: string;
  buttonText: string;
  linkHref: string;
}

// 1. UPDATED TEXT DATA (From Source 2) but keeping Source 1 Button Text
const expertises: Expertise[] = [
  {
    id: 1,
    number: "01",
    title: "Brand Strategy & Identity",
    subtitle: "Clarify who you are, what you stand for, and how you show up.",
    description:
      "We help businesses turn ideas into brands that stand out. From market research to strategic positioning, we build clear brand identities that resonate with your audience and set you apart from competitors.",
    colorTheme: "cream",
    mediaType: "video",
    mediaUrl: "/videos/duka.mp4",
    buttonText: "Learn more about brand strategy",
    linkHref: "/expertises/brand-strategy",
  },
  {
    id: 2,
    number: "02",
    title: "Brand Guidelines & Systems",
    subtitle: "Consistent rules that keep your visuals and voice aligned.",
    description:
      "We create comprehensive brand guidelines and design systems that ensure consistency across all touchpoints. Everything from color palettes to typography to voice tone — keeping your visuals and messaging perfectly aligned.",
    colorTheme: "yellow",
    mediaType: "video",
    mediaUrl: "/videos/duka.mp4",
    buttonText: "Explore brand systems",
    linkHref: "/expertises/brand-guidelines",
  },
  {
    id: 3,
    number: "03",
    title: "Content Creation & Social Media",
    subtitle:
      "Consistent visuals, strategy, and engagement that grow your audience.",
    description:
      "We craft engaging content that tells your story and builds meaningful connections. From social strategy to post design to community management, we help you grow your audience with purpose-driven content.",
    colorTheme: "black",
    mediaType: "video",
    mediaUrl: "/videos/duka.mp4",
    buttonText: "Discover content services",
    linkHref: "/expertises/content-creation",
  },
  {
    id: 4,
    number: "04",
    title: "Website Development",
    subtitle:
      "Professional, responsive websites designed to strengthen your presence online.",
    description:
      "We design and develop responsive websites that look stunning and perform flawlessly. From landing pages to e-commerce platforms to custom web applications — your website isn't just a digital space, it's your brand's home.",
    colorTheme: "cream",
    mediaType: "video",
    mediaUrl: "/videos/duka2.mp4",
    buttonText: "View our web solutions",
    linkHref: "/expertises/web-development",
  },
  {
    id: 5,
    number: "05",
    title: "Telegram Bot Development",
    subtitle:
      "Smart automation tools that make communication and business processes easier.",
    description:
      "We build powerful Telegram bots with API integrations, data storage, and automation. From simple command bots to advanced AI-powered systems — all tailored to fit your business needs and streamline operations.",
    colorTheme: "yellow",
    mediaType: "video",
    mediaUrl: "/videos/duka.mp4",
    buttonText: "Explore bot solutions",
    linkHref: "/expertises/telegram-bot",
  },
  {
    id: 6,
    number: "06",
    title: "Ongoing Brand Support",
    subtitle: "Stay confident and consistent long after the project is done.",
    description:
      "We don't just launch and leave. We provide continuous brand support to keep your identity strong, ensure consistency, and evolve with your business as you grow. Long-term support for long-term brands.",
    colorTheme: "black",
    mediaType: "video",
    mediaUrl: "/videos/duka2.mp4",
    buttonText: "Discuss ongoing support",
    linkHref: "/expertises/ongoing-support",
  },
];

// 2. THEME COLORS (Strictly from Source 1)
const THEME_COLORS = {
  cream: {
    bg: "bg-amber-100",
    text: "text-black",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-black",
    buttonText: "text-white",
    numberText: "text-amber-200", // Used for the giant number
    theme: "theme-cream",
    borderColor: "border-black/10",
  },
  yellow: {
    bg: "bg-yellow-400",
    text: "text-black",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-black",
    buttonText: "text-yellow-400",
    numberText: "text-yellow-100", // Used for the giant number
    theme: "theme-yellow",
    borderColor: "border-black/10",
  },
  black: {
    bg: "bg-black",
    text: "text-white",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-white",
    buttonText: "text-black",
    numberText: "text-gray-800", // Used for the giant number
    theme: "theme-black",
    borderColor: "border-white/10",
  },
} as const;

interface ExpertiseCardProps {
  expertise: Expertise;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

function ExpertiseCard({
  expertise,
  index,
  totalCards,
  scrollYProgress,
}: ExpertiseCardProps) {
  const theme = THEME_COLORS[expertise.colorTheme];
  const isLastCard = index === totalCards - 1;
  const isFirstCard = index === 0;

  // 3. SCROLL ANIMATION LOGIC (Strictly from Source 1)
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;

  const exitStart = cardEnd;
  const exitEnd = Math.min((index + 1.8) / totalCards, 1);

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [isFirstCard ? "0%" : "100%", "0%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.03],
    [isFirstCard ? 1 : 0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [1, isLastCard ? 1 : 0.88]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : -8]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : 6]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : -100]
  );

  const zIndex = index + 1;

  return (
    <motion.div
      role="listitem"
      className="expertise-item absolute inset-0 will-change-transform"
      style={{
        opacity,
        y,
        scale,
        rotateX,
        rotateY,
        z: translateZ,
        zIndex,
        transformOrigin: "center top",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="expertise-slide h-full">
        <div className="expertise-wrap h-full">
          <div
            className={`expertise-content ${theme.bg} ${theme.text} h-full flex flex-col lg:flex-row rounded-3xl overflow-hidden group shadow-2xl `}
          >
            {/* 4. LAYOUT UPDATE (Source 2 Structure) */}
            
            {/* LEFT SIDE: Content */}
            <div className="flex-1 lg:flex-[1.2] p-8 md:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              
              {/* Header Section */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-sm font-bold tracking-widest uppercase opacity-60`}>
                    Service {expertise.number}
                  </span>
                  <ArrowUpRight className="w-6 h-6 opacity-60" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
                  {expertise.title}
                </h2>
                
                <h3 className="text-lg md:text-xl font-medium opacity-80 mb-6">
                  {expertise.subtitle}
                </h3>
                
                <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-md">
                  {expertise.description}
                </p>
              </div>

              {/* Footer Section: Button (Source 1 Design) */}
              <div className="relative z-20 pt-8">
                <motion.a
                  whileHover={{ rotateZ: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={expertise.linkHref}
                  className="inline-flex items-center gap-2.5 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-xl font-semibold text-sm border border-white cursor-pointer origin-center shadow-lg"
                >
                  <span>{expertise.buttonText}</span>
                  <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.a>
              </div>

              {/* Giant Number Background (Source 2 Style using Source 1 Colors) */}
              <div 
                className={`absolute -bottom-4 right-4 text-[10rem] md:text-[14rem] font-bold leading-none pointer-events-none select-none tracking-tighter ${theme.numberText} opacity-100`}
                style={{ zIndex: 0 }}
              >
                {expertise.id}
              </div>
            </div>

            {/* RIGHT SIDE: Media (Source 2 Structure - Full Height) */}
            <div className="relative w-full lg:w-[45%] h-64 lg:h-full overflow-hidden">
              {expertise.mediaType === "video" ? (
                <video
                  src={expertise.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={expertise.mediaUrl}
                  alt={expertise.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {/* Optional Inner border for media separation */}
              <div className="absolute inset-0 border-l border-black/5 pointer-events-none hidden lg:block"></div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Expertises(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = expertises.length;

  return (
    <section
      ref={containerRef}
      id="expertises"
      className="section_expertises relative bg-white z-10"
      style={{ minHeight: `${n * 100}vh` }}
    >
      {/* Intro Text Section - Updated Text from Source 2 Idea */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            We build systems,<br /> not just <span className="text-yellow-400">beautiful logos.</span>
          </h2>
          <p className="text-lg md:text-xl text-black/70 font-medium">
          Here’s what we help you build, grow, and manage:
          </p>
        </motion.div>
      </div>

      {/* Sticky container with card stack (Source 1 Logic) */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden py-8">
        <div className="padding-global w-full">
          <div className="container-col-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="expertises-collection w-full">
              <div
                role="list"
                className="expertises-list relative h-[90vh] w-full"
                style={{
                  perspective: "1500px",
                  perspectiveOrigin: "center 30%",
                }}
              >
                {expertises.map((expertise, index) => (
                  <ExpertiseCard
                    key={expertise.id}
                    expertise={expertise}
                    index={index}
                    totalCards={n}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}