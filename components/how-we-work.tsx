"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Every great brand starts with understanding. In this stage, we dive into your story — who you are, what you do, who you serve, and where you want to go. We learn about your goals, challenges, audience, and the problems you're trying to solve. This isn't just a meeting; it's a conversation that helps us get to the heart of your brand before we design anything.",
  },
  {
    id: 2,
    title: "Research",
    description:
      "Once we understand you, we study the world around you. We analyze competitors, explore user behavior, and review industry trends to see where your brand fits — and where it can stand out. This research becomes the foundation for every creative decision we make, ensuring your brand identity is informed, intentional, and strategically positioned.",
  },
  {
    id: 3,
    title: "Moodboarding",
    description:
      "Here is where the creative direction begins to take shape. We build moodboards that explore tone, emotion, visual inspiration, and brand personality. This stage helps us translate ideas into a clear artistic direction — one that feels aligned with your brand's essence and resonates with the people you want to reach. It's all about discovering the feeling your brand should evoke.",
  },
  {
    id: 4,
    title: "Drafting",
    description:
      "With strategy and direction in place, we start designing. We create multiple logo options — often six or more — each with its own rationale, story, and reasoning. These aren't random variations; they're thoughtfully crafted concepts built from the insights we gathered earlier. This gives you a wide, strong range of creative directions to choose from.",
  },
  {
    id: 5,
    title: "Feedback",
    description:
      "This step is all about collaboration. You tell us what resonates, what feels right, and what needs adjusting. Together, we refine and shape your chosen direction until it reflects your brand perfectly. Your feedback guides the evolution of the design, ensuring the final result feels both authentic and strategic.",
  },
  {
    id: 6,
    title: "Finalizing",
    description:
      "Once the direction is approved, we polish every detail. We finalize the logo, build the complete identity system, define your color palette, choose typography, create patterns, and establish how everything should work together. This stage transforms your chosen concept into a full, functional brand identity built to last.",
  },
  {
    id: 7,
    title: "Delivery",
    description:
      "When everything is ready, we package your brand into clean, organized, and easy-to-use files. You receive your guidelines, visual assets, and all export formats — ready for use across digital and print platforms. We don't just deliver files; we deliver clarity, structure, and confidence in how to use your new brand.",
  },
  {
    id: 8,
    title: "Post-Project Support",
    description:
      "Our work doesn't end after handoff. We stay with you to help apply your brand across marketing, social media, and future projects. Whether you need ongoing design support, content creation, or guidance on staying consistent, we're here to ensure your brand grows stronger over time. Because good branding isn't a one-time job — it's a long-term journey.",
  },
];

const whyWorkWithUs = [
  "We create brands with meaning, not just pretty visuals.",
  "We design from a problem-solving mindset, not guesses.",
  "We build trust through clear communication and consistent delivery.",
  "We support you long after handover — because your brand deserves to grow.",
];

interface StepCardProps {
  step: Step;
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}>
      {/* Step Number */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-shrink-0 lg:w-32">
        <div className="relative">
          <span
            className="text-8xl md:text-9xl lg:text-[140px] font-black text-black/5 leading-none"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {String(step.id).padStart(2, "0")}
          </span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="absolute top-4 left-0 text-2xl md:text-3xl font-bold text-yellow-500"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {String(step.id).padStart(2, "0")}
          </motion.span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 max-w-2xl">
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6"
          style={{ fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif" }}>
          {step.title}
        </h3>
        <p className="text-base md:text-lg text-black/70 leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute left-16 top-full w-px h-16 bg-gradient-to-b from-yellow-400 to-transparent" />
      )}
    </motion.div>
  );
}

export default function HowWeWork() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
        <span
          className="absolute top-1/4 -left-20 text-[500px] font-black text-black leading-none rotate-[-15deg]"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          PROCESS
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-2 sm:px-3 lg:px-4">
        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mb-20 md:mb-28 lg:mb-36">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-8"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            How We Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black/60 leading-relaxed">
            From first conversation to final delivery — here&apos;s how we
            transform ideas into brands that stand out.
          </motion.p>
        </div>

        {/* ===== 8 STEPS ===== */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32 mb-32 md:mb-40 lg:mb-52">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* ===== WHY WORK WITH US ===== */}
        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 -mx-6 md:-mx-12 lg:-mx-16 bg-black rounded-3xl" />

          <div className="relative z-10 py-20 md:py-28 lg:py-36">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-yellow-400 text-black text-xs font-bold tracking-wider uppercase rounded-full mb-8">
              The Difference
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-12 md:mb-16"
              style={{
                fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
              }}>
              Why Work With Us
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {whyWorkWithUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 md:mt-16">
              <motion.a
                href="/#contact"
                whileHover={{ rotateZ: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex items-center gap-2.5 bg-yellow-300 text-black pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border border-yellow-300 cursor-pointer origin-center">
                <span>Start Your Project</span>
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg text-lg">
                  →
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
