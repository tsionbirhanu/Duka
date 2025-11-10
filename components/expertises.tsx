"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

interface Expertise {
  id: number
  number: string
  title: string
  subtitle: string
  description: string
  colorTheme: "cream" | "yellow" | "black"
  mediaType: "image" | "video"
  mediaUrl?: string
  buttonText: string
  linkHref: string
}

const expertises: Expertise[] = [
  {
    id: 1,
    number: "01",
    title: "Brand Strategy & Identity",
    subtitle: "Clarify who you are, what you stand for.",
    description: "We help businesses turn ideas into brands that stand out. From market research to strategic positioning, we build clear brand identities that resonate with your audience and set you apart from competitors.",
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
    subtitle: "Consistent rules that keep your brand aligned.",
    description: "We create comprehensive brand guidelines and design systems that ensure consistency across all touchpoints. Everything from color palettes to typography to voice tone — keeping your visuals and messaging perfectly aligned.",
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
    subtitle: "Consistent visuals and strategy that grow.",
    description: "We craft engaging content that tells your story and builds meaningful connections. From social strategy to post design to community management, we help you grow your audience with purpose-driven content.",
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
    subtitle: "Professional sites built to strengthen your presence.",
    description: "We design and develop responsive websites that look stunning and perform flawlessly. From landing pages to e-commerce platforms to custom web applications — your website isn't just a digital space, it's your brand's home.",
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
    subtitle: "Smart automation tools for modern businesses.",
    description: "We build powerful Telegram bots with API integrations, data storage, and automation. From simple command bots to advanced AI-powered systems — all tailored to fit your business needs and streamline operations.",
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
    subtitle: "Stay confident and consistent long-term.",
    description: "We don't just launch and leave. We provide continuous brand support to keep your identity strong, ensure consistency, and evolve with your business as you grow. Long-term support for long-term brands.",
    colorTheme: "black",
    mediaType: "video",
    mediaUrl: "/videos/duka2.mp4",
    buttonText: "Discuss ongoing support",
    linkHref: "/expertises/ongoing-support",
  },
]

const THEME_COLORS = {
  cream: {
    bg: "bg-amber-100",
    text: "text-black",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-black",
    buttonText: "text-white",
    numberText: "text-amber-200",
    theme: "theme-cream",
  },
  yellow: {
    bg: "bg-yellow-400",
    text: "text-black",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-black",
    buttonText: "text-yellow-400",
    numberText: "text-yellow-100",
    theme: "theme-yellow",
  },
  black: {
    bg: "bg-black",
    text: "text-white",
    labelBg: "bg-white",
    labelText: "text-black",
    buttonBg: "bg-white",
    buttonText: "text-black",
    numberText: "text-gray-800",
    theme: "theme-black",
  },
} as const

interface ExpertiseCardProps {
  expertise: Expertise
  index: number
  totalCards: number
  scrollYProgress: MotionValue<number>
}

function ExpertiseCard({ expertise, index, totalCards, scrollYProgress }: ExpertiseCardProps) {
  const theme = THEME_COLORS[expertise.colorTheme]
  const isLastCard = index === totalCards - 1

  const progress = useTransform(scrollYProgress, [index / totalCards, (index + 1) / totalCards], [0, 1])
  const opacity = useTransform(progress, [0, 0.2, 1], [0, 1, 1])
  const y = useTransform(progress, [0, 1], ["100%", "0%"])
  const zIndex = useTransform(progress, [0, 0.8, 1], [index + 1, 100, index + 1])
  const scale = useTransform(progress, [0.8, 1], [1, isLastCard ? 1 : 0.95])

  return (
    <motion.div role="listitem" className="expertise-item absolute inset-0" style={{ opacity, y, zIndex, scale }}>
      <div className="expertise-slide h-full">
        <div className="expertise-wrap h-full">
          <div
            className={`expertise-content ${theme.bg} ${theme.text} h-full flex flex-col lg:flex-row rounded-3xl overflow-hidden`}
          >
            {/* Left Content Section */}
            <div className="flex-1 lg:flex-[1.3] flex flex-col p-6 md:p-10 lg:p-12 relative">
              {/* Expertise Label */}
              <div className="label mb-4">
                <div
                  className={`${theme.labelBg} ${theme.labelText} px-3 py-1.5 rounded-lg font-medium text-xs inline-block border border-gray-200`}
                >
                  Expertise
                </div>
              </div>

              {/* Title */}
              <h2 className="expertise-content_heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                {expertise.title}
              </h2>

              {/* Subtitle */}
              <h3 className="expertise-subtitle text-base md:text-lg font-semibold text-gray-700 mb-5">
                {expertise.subtitle}
              </h3>

              {/* Description */}
              <p className="expertise-description text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
                {expertise.description}
              </p>

              {/* Learn More Button */}
              <div className="button-wrap mt-auto pb-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={expertise.linkHref}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${theme.buttonBg} ${theme.buttonText} transition-all duration-300`}
                >
                  {expertise.buttonText}
                  <span className="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Right Media Section - Added padding bottom */}
            <div className="hidden lg:flex expertise-content_img flex-1 items-start justify-center p-8 md:p-10 lg:p-12 pb-16 relative"> {/* Added pb-16 for bottom padding */}
              <div className="absolute top-8 right-8 z-20">
                <div className="expertise-content_number flex text-4xl md:text-5xl lg:text-6xl font-bold">
                  <div className="opacity-50">0</div>
                  <div>{expertise.id}</div>
                </div>
              </div>

              {/* Media Container with proper bottom spacing */}
              <div className="medium-image w-full h-80 max-w-sm rounded-3xl overflow-hidden bg-gray-200 mt-16 mb-4"> {/* Added mb-4 and reduced height to h-80 */}
                {expertise.mediaType === "video" ? (
                  <video
                    src={expertise.mediaUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label={`${expertise.title} video`}
                  />
                ) : (
                  <img
                    src={expertise.mediaUrl || "/placeholder.svg"}
                    alt={`${expertise.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* Mobile Media */}
            <div className="expertise-content_img lg:hidden mb-8 px-8">
              <div className="medium-image w-full h-64 rounded-2xl overflow-hidden bg-gray-200">
                {expertise.mediaType === "video" ? (
                  <video
                    src={expertise.mediaUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label={`${expertise.title} video`}
                  />
                ) : (
                  <img
                    src={expertise.mediaUrl || "/placeholder.svg"}
                    alt={`${expertise.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* Mobile Number */}
            <div className="lg:hidden absolute top-8 right-8 z-20">
              <div className="expertise-content_number flex text-3xl font-bold">
                <div className="opacity-50">0</div>
                <div>{expertise.id}</div>
              </div>
            </div>

            {/* Overlay link for entire card */}
            <a
              aria-label={`${expertise.title} expertise link`}
              href={expertise.linkHref}
              className="expertise-link absolute inset-0 z-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Expertises(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const n = expertises.length

  return (
    <section
      ref={containerRef}
      id="expertises"
      className="section_expertises relative bg-white"
      style={{ minHeight: `${n * 100}vh` }}
    >
      {/* Sticky container with card stack */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden py-8">
        <div className="padding-global w-full">
          <div className="container-col-12 w-full max-w-7xl mx-auto px-4 lg:px-6">
            <div className="expertises-collection w-full">
              <div role="list" className="expertises-list relative h-[90vh] w-full max-w-6xl mx-auto">
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
  )
}