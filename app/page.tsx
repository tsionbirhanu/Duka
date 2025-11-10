"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Expertises from "@/components/expertises";
import Works from "@/components/Works";
import Footer from "@/components/footer";

export default function Home(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // small delay for nicer entry when SPA
    const t = setTimeout(() => setIsLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white text-black"
    >
      <Header />
      <Hero />
      <Expertises />
      <Works />
      <Footer />
    </motion.main>
  );
}