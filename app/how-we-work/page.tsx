"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HowWeWork from "@/components/how-we-work";

export default function HowWeWorkPage(): React.ReactNode {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      <div className="pt-20" /> {/* Spacer for fixed header */}
      <HowWeWork />
      <Footer />
    </main>
  );
}
