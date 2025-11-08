"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/duka-new.png"
              alt="Duka Logo"
              width={140} 
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Expertises", href: "#expertises" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ color: "#fcd34d", scale: 1.05 }}
              className="text-black px-3 py-2 font-medium transition-colors duration-150 text-sm">
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm gap-2 hover:bg-yellow-300">
          Get Results ✨
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-black transition-all"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black transition-all"
          />
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.25 }}
        className="md:hidden bg-white border-t border-black/5 overflow-hidden">
        <div className="px-4 py-4 flex flex-col gap-4 text-sm">
          {[
            { label: "Expertises", href: "#expertises" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ color: "#fcd34d" }}
              className="font-medium transition-colors"
              onClick={() => setIsOpen(false)}>
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all w-full shadow-lg"
            onClick={() => setIsOpen(false)}>
            Get Results ✨
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
