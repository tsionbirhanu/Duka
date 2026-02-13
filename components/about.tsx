"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ================= DATA =================
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
    name: "Collaborator Name",
    role: "Designer / Developer / Strategist",
    description:
      "Crafts visuals, systems, and experiences that support the bigger brand story.",
    image: "/images/team/designer.jpg",
    direction: "right",
  },
  {
    id: 3,
    name: "Freelance Collaborators",
    role: "Design / Content / Development",
    description:
      "Trusted specialists we bring in when projects need additional expertise.",
    image: "/images/team/collaborator.jpg",
    direction: "up",
  },
];

// ================= COMPONENTS =================

const TextReveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}>
        {children}
      </motion.div>
    </div>
  );
};

function TeamCard({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternating scroll motion: left-to-right, right-to-left, and vertical shift
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    member.direction === "left"
      ? [-40, 40]
      : member.direction === "right"
        ? [40, -40]
        : [0, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    member.direction === "up" ? [60, -60] : [20, -20],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    member.direction === "left"
      ? [-2, 2]
      : member.direction === "right"
        ? [2, -2]
        : [0, 0],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ x, y, rotate }}
      className="group relative w-full perspective-1000">
      <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden">
          {/* Subtle Image Zoom on Hover */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 transition-transform duration-1000 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${member.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

          {/* Role & Description Reveal on Hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <span className="text-yellow-400 text-xs font-black tracking-[.2em] uppercase mb-2 font-['Inter']">
              {member.role}
            </span>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm font-['Inter']">
              {member.description}
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-8 bg-white">
          <h3
            className="font-bold text-black mb-1 truncate"
            style={{
              fontFamily:
                "'uni neue-trial', 'Uni Neue', 'Inter', system-ui, sans-serif",
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            }}>
            {member.name}
          </h3>
          <p className="text-sm md:text-base text-black/60 font-medium font-['Inter']">
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

// ================= MAIN PAGE =================
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const watermarkY = useTransform(smoothProgress, [0.8, 1], ["20%", "0%"]);
  const watermarkOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 0.08]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white min-h-screen overflow-hidden text-black pb-20">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 lg:pt-52">
        {/* ================= SECTION 1: ABOUT US (STICKY HEADER) ================= */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 md:mb-64">
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-40">
             
              <h1
                className="font-black tracking-tighter leading-[0.8]"
                style={{
                  fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                  fontSize: "clamp(4rem, 12vw, 9.5rem)",
                }}>
                WHO <br />
                WE ARE
              </h1>
              <p
                className="mt-8 text-black/30 text-lg font-bold uppercase tracking-widest italic"
                style={{
                  fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                }}>
                (And Why It Matters)
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 pt-4">
            <div className="space-y-16 text-xl md:text-2xl font-medium leading-tight tracking-tight text-black/60 font-['Inter']">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                We’ve seen how too many businesses struggle to express who they
                really are — some don’t stand out, and others just don’t feel
                true to themselves.
                <br />
                <span
                  className="text-yellow-500 font-black ml-1 uppercase italic tracking-tighter"
                  style={{
                    fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                  }}>
                  Our job? To fix that.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-black/60 font-medium text-xl md:text-2xl leading-relaxed font-['Inter']">
                At Duka, we help businesses and organizations turn their ideas,
                values, and personality into brands people actually connect
                with. We design with purpose, create with intention, and build
                brands that speak clearly, look great, and leave a real impact —
                not just on screens, but on people.
              </motion.p>

              {/* Refined Content Block: Horizontal & Clean */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-12 border-t border-black/10">
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[1.2] tracking-tighter flex flex-wrap gap-x-4"
                  style={{
                    fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                  }}>
                  <span>Because a brand</span>
                  <span className="text-yellow-500">isn’t just visuals.</span>
                  <span>It’s the team.</span>
                  <span>It’s the story.</span>
                  <span>It’s the experience.</span>
                </p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.5em] text-black/40 font-['Inter']">
                  — And that’s exactly what we bring to life.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: TEAM SHOWCASE ================= */}
        <div className="mb-32 md:mb-64">
          <div className="text-center mb-16 md:mb-32">
            <TextReveal>
              <h3
                className="font-black uppercase tracking-tighter mb-4"
                style={{
                  fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 8rem)",
                }}>
                Meet the <span className="text-yellow-400">People</span>
              </h3>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="text-xs font-black tracking-[0.4em] uppercase opacity-40 mb-8 font-['Inter']">
                Behind the Work
              </p>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl md:text-2xl font-medium text-black/50 max-w-3xl mx-auto font-['Inter']">
              We’re a small, focused team — strategic minds, creative thinkers,
              and problem-solvers who care about the details as much as the big
              picture.
            </motion.p>
          </div>

          {/* Cards Grid with Responsive Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Persona Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-48 text-center">
            <p
              className="text-2xl md:text-4xl font-black uppercase tracking-tight"
              style={{
                fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
              }}>
              “We’re small by design — because{" "}
              <span className="text-yellow-400 decoration-4 decoration-black">
                good brands are built by people,
              </span>{" "}
               not by departments.”
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 text-xs font-black tracking-[0.5em] uppercase opacity-40 font-['Inter']">
              <span className="h-px w-16 bg-black"></span>
              Real people. Real passion. Real branding.
              <span className="h-px w-16 bg-black"></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SECTION 3: CENTERED DUKA WATERMARK ================= */}
      <div className="relative h-[40vh] flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: watermarkY, opacity: watermarkOpacity }}
          className="w-full text-center">
          <span
            className="font-black leading-none tracking-tighter select-none inline-block w-full"
            style={{
              fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
              fontSize: "clamp(15rem, 30vw, 40rem)",
            }}>
            DUKA
          </span>
        </motion.div>
      </div>
    </section>
  );
}