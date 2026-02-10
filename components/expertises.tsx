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
    linkHref: "/services",
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
    linkHref: "/services",
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
    linkHref: "/services",
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
    linkHref: "/services",
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
    linkHref: "/services",
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
    linkHref: "/services",
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
    [isFirstCard ? "0%" : "100%", "0%"],
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.03],
    [isFirstCard ? 1 : 0, 1],
  );

  const scale = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [1, isLastCard ? 1 : 0.88],
  );

  const rotateX = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : -8],
  );

  const rotateY = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : 6],
  );

  const translateZ = useTransform(
    scrollYProgress,
    [exitStart, exitEnd],
    [0, isLastCard ? 0 : -100],
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
      }}>
      <div className="expertise-slide h-full">
        <div className="expertise-wrap h-full">
          <div
            className={`expertise-content ${theme.bg} ${
              theme.text
            } h-full flex flex-col-reverse lg:flex-row rounded-2xl lg:rounded-3xl overflow-hidden group ${""} `}>
            {/* LEFT SIDE (Desktop) / BOTTOM SIDE (Mobile): Content */}
            <div className="flex-1 lg:flex-[1.2] p-5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between relative overflow-visible h-[65%] lg:h-auto">
              {/* Header Section */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center mb-3 sm:mb-6 lg:mb-8">
                    <div className="inline-flex items-center gap-2.5 bg-white text-black pl-1 pr-1 py-1 rounded-sm border border-white">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase leading-none">
                        Service
                      </span>
                    </div>
                  </div>

                  <h2
                    className="font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 leading-tight lg:leading-[1.1]"
                    style={{
                      fontFamily: "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                    }}>
                    {expertise.title}
                  </h2>

                  <h3
                    className="font-medium opacity-80 mb-3 sm:mb-4 md:mb-6 leading-snug"
                    style={{
                      fontFamily: "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
                      fontSize: "clamp(0.875rem, 1.2vw, 1.25rem)",
                    }}>
                    {expertise.subtitle}
                  </h3>

                  {/* Full description on larger screens - WIDER width to save vertical space */}
                  <p
                    className="text-sm md:text-base leading-relaxed opacity-70 max-w-xl hidden sm:block"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {expertise.description}
                  </p>
                  {/* Truncated description on mobile */}
                  <p
                    className="text-xs leading-relaxed opacity-70 max-w-md block sm:hidden line-clamp-3"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {expertise.description}
                  </p>
                </div>

                {/* Footer Section: Button */}
                <div className="pt-8 lg:pt-8 pb-2">
                  <motion.a
                    whileHover={{ rotateZ: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    href={expertise.linkHref}
                    className="inline-flex items-center gap-2 sm:gap-2.5 bg-white text-black pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm border border-white cursor-pointer origin-center font-['Inter'] uppercase">
                    <span className="leading-none">{expertise.buttonText}</span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Giant Number Background - Mobile optimized */}
              <div
                className={`absolute -bottom-4 lg:bottom-[-2rem] -right-4 lg:right-4 font-bold leading-none pointer-events-none select-none tracking-tighter ${theme.numberText} opacity-40 lg:opacity-100`}
                style={{ 
                  zIndex: 0,
                  fontSize: "clamp(6rem, 15vw, 14rem)"
                }}>
                {expertise.id}
              </div>
            </div>

            {/* RIGHT SIDE (Desktop) / TOP SIDE (Mobile): Media */}
            <div className="relative w-full lg:w-[45%] h-[35%] lg:h-full overflow-hidden flex-shrink-0">
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
              {/* Inner border/overlay */}
              <div className="absolute inset-0 bg-black/5 lg:border-l lg:border-black/5 pointer-events-none"></div>
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
      style={{ minHeight: `${n * 100}vh` }}>
      {/* Intro Text Section - Professional and responsive */}
      <div className="max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4 pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]"
            style={{
              fontFamily: "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            <span className="text-yellow-400">We build systems</span>, not just
            beautiful logos.
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 font-normal max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Here&apos;s what we help you build, grow, and manage:
          </p>
        </motion.div>
      </div>

      {/* Sticky container with card stack */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden py-4 sm:py-6">
        <div className="w-full h-full max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              role="list"
              className="relative w-full h-[85vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] xl:h-[95vh]">
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
    </section>
  );
}
