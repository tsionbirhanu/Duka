"use client";

import React from "react";
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
  return (
    <main className="bg-white text-black min-h-screen">
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
    </main>
  );
}
