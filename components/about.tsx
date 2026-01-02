"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  direction: "left" | "right" | "up";
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Duka",
    role: "Founder & Creative Director",
    description:
      "Turns ideas into brands, brands into experiences, and experiences into growth. Leads strategy, identity design, and brand direction.",
    image: "/images/team/founder.jpg",
    direction: "left",
  },
  {
    id: 2,
    name: "Creative Team",
    role: "Designer & Developer",
    description:
      "Crafts visuals, systems, and experiences that support the bigger brand story.",
    image: "/images/team/designer.jpg",
    direction: "right",
  },
  {
    id: 3,
    name: "Collaborators",
    role: "Design / Content / Development",
    description:
      "Trusted specialists we bring in when projects need additional expertise.",
    image: "/images/team/collaborator.jpg",
    direction: "up",
  },
];

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const xMovement = useTransform(
    scrollYProgress,
    [0, 1],
    member.direction === "left"
      ? [50, -50]
      : member.direction === "right"
      ? [-50, 50]
      : [0, 0]
  );

  const yMovement = useTransform(
    scrollYProgress,
    [0, 1],
    member.direction === "up" ? [30, -30] : [20, -20]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    member.direction === "left"
      ? [2, 0, -2]
      : member.direction === "right"
      ? [-2, 0, 2]
      : [0, 0, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      style={{
        x: xMovement,
        y: yMovement,
        rotate,
      }}>
      <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden">
          {/* Placeholder gradient if no image */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
            style={{
              backgroundImage: `url(${member.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

          {/* Content overlay - visible on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm">
              {member.description}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-8 bg-white">
          <h3
            className="text-xl md:text-2xl font-bold text-black mb-1"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            {member.name}
          </h3>
          <p className="text-sm md:text-base text-black/60 font-medium">
            {member.role}
          </p>
        </div>

        {/* Decorative number */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span
            className="text-6xl md:text-7xl font-black text-black"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            0{member.id}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{ y: backgroundY }}>
        <span
          className="absolute top-1/4 -right-20 text-[400px] font-black text-black leading-none"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          DK
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ===== ABOUT US HEADER ===== */}
        <div className="max-w-4xl mb-20 md:mb-28 lg:mb-36">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-yellow-400 text-black text-xs font-bold tracking-wider uppercase rounded-full mb-8">
            About Us
          </motion.span>

          {/* Sub-Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-10 md:mb-14"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            Who We Are{" "}
            <span className="text-black/40">(and Why It Matters)</span>
          </motion.h2>

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              We&apos;ve seen how too many businesses struggle to express who
              they really are — some don&apos;t stand out, and others just
              don&apos;t feel true to themselves.{" "}
              <span className="text-black font-semibold">
                Our job? To fix that.
              </span>
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              At Duka, we help businesses and organizations turn their ideas,
              values, and personality into brands people actually connect with.
              We design with purpose, create with intention, and build brands
              that speak clearly, look great, and leave a real impact — not just
              on screens, but on people.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-black font-semibold leading-relaxed">
              Because a brand isn&apos;t just visuals.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              It&apos;s the team behind it. It&apos;s the story. It&apos;s the
              experience.{" "}
              <span className="text-yellow-500 font-semibold">
                And that&apos;s exactly what we bring to life.
              </span>
            </p>
          </motion.div>
        </div>

        {/* ===== TEAM SHOWCASE SECTION ===== */}
        <div className="mb-16 md:mb-20">
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase rounded-full mb-8">
            Meet the Team
          </motion.span>

          {/* Intro Line */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-[1.2] tracking-tight mb-6 max-w-3xl"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            Meet the People Behind the Work
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mb-16 md:mb-20">
            We&apos;re a small, focused team — strategic minds, creative
            thinkers, and problem-solvers who care about the details as much as
            the big picture.
          </motion.p>
        </div>

        {/* ===== TEAM CARDS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-20 md:mb-28">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* ===== CLOSING TAGLINE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <p
            className="text-xl sm:text-2xl md:text-3xl font-bold text-black/80 leading-snug"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            &ldquo;We&apos;re small by design — because{" "}
            <span className="text-yellow-500">
              good brands are built by people
            </span>
            , not by departments.&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-black/20" />
            <span className="text-sm text-black/40 font-medium tracking-wider uppercase">
              Real people. Real passion. Real branding.
            </span>
            <div className="w-12 h-px bg-black/20" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}
