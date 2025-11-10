"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, TrendingUp, Instagram, Youtube, Mail, Flame, ArrowRight } from "lucide-react"

export default function Footer() {
  const [showDuka, setShowDuka] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      {/* CTA SECTION */}
      <section className="relative mx-auto max-w-8xl px-6 lg:px-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-tight text-balance">
            Let&apos;s Get Noticed!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:contact@duka.agency"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-black rounded-full text-black font-semibold flex items-center gap-2 hover:bg-black hover:text-yellow-400 transition-all duration-300"
            >
              <Mail size={20} />
              Mail ons direct
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Flame size={20} />
              Get Results
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* DIAGONAL FOOTER SECTION */}
      <div className="relative mx-auto max-w-8xl px-0 lg:px-10">
        <motion.div
          onHoverStart={() => setShowDuka(true)}
          onHoverEnd={() => setShowDuka(false)}
          onClick={() => setShowDuka(!showDuka)}
          className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden bg-yellow-400 cursor-pointer transition-all hover:shadow-lg"
          style={{
            clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-300" />

          {/* LOGO - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10"
          >
            <Image
              src="/images/duka-new.png"
              alt="Duka Logo"
              width={180}
              height={140}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* {showDuka && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-black drop-shadow-lg">DUKA ✨</h3>
            </motion.div>
          )} */}

          {/* RIGHT SECTION - Navigation, Social, Contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex flex-col md:flex-row gap-8 md:gap-12 z-10"
          >
            {/* NAVIGATION LINKS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <p className="text-xs font-black text-black">Expertises</p>
              <nav className="flex flex-col gap-2">
                {["Expertises", "Work", "About", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 4 }}
                    className="text-sm font-semibold text-black hover:text-black/70 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <p className="text-xs font-black text-black">Follow us</p>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: TrendingUp, label: "TikTok", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Youtube, label: "YouTube", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white rounded-full text-black transition-all hover:bg-black hover:text-yellow-400"
                    aria-label={label}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 text-xs">
              <p className="text-xs font-black text-black">Contact</p>
              <div className="flex flex-col gap-1">
                <a href="mailto:contact@duka.agency" className="text-black/80 hover:text-black font-semibold">
                  contact@duka.agency
                </a>
                <a href="tel:+1234567890" className="text-black/80 hover:text-black font-semibold">
                  +1 (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* ADDRESS INFO */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 text-xs">
              <p className="text-xs font-black text-black">Address</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/80 hover:text-black font-semibold leading-relaxed"
              >
                Creative Street 123
                <br />
                New York, NY 10001
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER INFO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-8xl px-6 lg:px-10 py-12 bg-white"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/10 pt-8">
          {/* LEFT - Privacy & Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <motion.a
              variants={itemVariants}
              href="#"
              className="text-xs font-semibold text-black/70 hover:text-black transition-colors"
            >
              Privacy Policy
            </motion.a>
            <div className="hidden md:block w-1 h-1 bg-black/30 rounded-full" />
            <motion.a
              variants={itemVariants}
              href="#"
              className="text-xs font-semibold text-black/70 hover:text-black transition-colors"
            >
              Terms & Conditions
            </motion.a>
          </motion.div>

        </div>
      </motion.section>
    </footer>
  )
}
