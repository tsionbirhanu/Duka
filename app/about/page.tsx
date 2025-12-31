"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function AboutPage(): React.JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" as const }}
      className="bg-white text-black min-h-screen">
      <Header />
      <About />
      <Footer />
    </motion.main>
  );
}
