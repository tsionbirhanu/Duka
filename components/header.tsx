"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] bg-white">
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
            { label: "Expertises", href: "/#expertises" },
            { label: "How We Work", href: "/how-we-work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black px-3 py-2 font-medium transition-colors duration-150 text-sm hover:text-yellow-500">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ rotateZ: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="hidden md:flex items-center gap-2.5 bg-yellow-300 text-black pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border border-yellow-300 cursor-pointer origin-center"
        >
          <span>Get Results</span>
          <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg text-lg">
            🔥
          </span>
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
            { label: "Expertises", href: "/#expertises" },
            { label: "How We Work", href: "/how-we-work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium transition-colors hover:text-yellow-500"
              onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2.5 bg-yellow-300 text-black pl-5 pr-1 py-1 rounded-xl font-semibold text-sm border border-yellow-300 transition-all w-full"
            onClick={() => setIsOpen(false)}
          >
            <span>Get Results</span>
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-lg text-lg">
              🔥
            </span>
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  );
}