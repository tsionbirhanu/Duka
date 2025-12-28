"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HowWeWork from "@/components/how-we-work";

export default function HowWeWorkPage(): React.ReactNode {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white text-black min-h-screen"
    >
      <Header />
      <div className="pt-20" /> {/* Spacer for fixed header */}
      <HowWeWork />
      <Footer />
    </motion.main>
  );
}

