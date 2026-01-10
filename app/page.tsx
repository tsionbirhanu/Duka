"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ValueSection from "@/components/value-section";
import Expertises from "@/components/expertises";
import WhyChooseUs from "@/components/why-choose-us";
import Works from "@/components/Works";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import Brands from "@/components/brands";
// import FinalCTA from "@/components/final-cta";

export default function Home(): React.ReactNode {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay for smoother entry animation
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
      <Hero />
      <ValueSection />
      <Expertises />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      
      {/* <FinalCTA /> */}
      {/* <Works /> */}
      <Footer />
    </motion.main>
  );
}