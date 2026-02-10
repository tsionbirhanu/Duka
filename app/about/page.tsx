"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function AboutPage(): React.ReactNode {
  return (
    <main className="bg-white text-black min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
