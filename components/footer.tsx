"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram, Youtube, TrendingUp } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative w-full bg-white pt-16 pb-8">
      <div className="relative mx-auto max-w-8xl px-6 lg:px-10 ">
        {/* ✅ All sides rounded, slightly more accent on top-left */}
        <div
          className="relative h-64 md:h-72 lg:h-80 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden bg-yellow-400"
          style={{
            clipPath: "polygon(0 70%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* CONTENT CONTAINER */}
          <div className="relative h-full flex items-end pb-8 px-6 lg:px-10 ">
            {/* ✅ Straight DUKA Logo (fixed alignment, no skew) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 flex items-end"
            >
              <Image
                src="/images/duka-new.png"
                alt="Duka Logo"
                width={250}
                height={200}
                className="object-contain ml-4 -mb-17"
                priority
              />
            </motion.div>

            {/* CENTER + RIGHT CONTENT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="ml-auto flex flex-col md:flex-row items-end gap-12 md:gap-16 w-full md:w-auto"
            >
              {/* CENTER - NAVIGATION + SOCIAL */}
              <div className="flex flex-col items-center md:items-start gap-8">
                {/* Navigation Pills */}
                <motion.nav
                  variants={containerVariants}
                  className="flex flex-wrap gap-3 justify-center md:justify-start"
                >
                  {["Expertises", "Work", "About", "Contact"].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                      }}
                      className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold transition-all"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.nav>

                {/* Social Icons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-3"
                >
                  <p className="text-xs font-bold text-black">Follow us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: TrendingUp, label: "TikTok" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Youtube, label: "YouTube" },
                    ].map(({ icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        href="#"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2.5 bg-white rounded-full text-black transition-all"
                        aria-label={label}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* RIGHT - CONTACT INFO */}
              <motion.div
                variants={containerVariants}
                className="flex flex-col items-center md:items-end gap-6 text-center md:text-right"
              >
                {/* Contact */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xs font-black text-black mb-2">Contact</h3>
                  <p className="text-xs text-black/70 font-medium">
                    contact@duka.agency
                  </p>
                  <p className="text-xs text-black/70 font-medium">
                    +1 (555) 123-4567
                  </p>
                </motion.div>

                {/* Address */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xs font-black text-black mb-2">Address</h3>
                  <p className="text-xs text-black/70 font-medium">
                    123 Creative Street
                  </p>
                  <p className="text-xs text-black/70 font-medium">
                    New York, NY 10001
                  </p>
                </motion.div>

                {/* Privacy */}
                <motion.a
                  variants={itemVariants}
                  href="#"
                  className="text-xs text-black/70 font-medium underline hover:text-black transition"
                >
                  Privacy Policy
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
