"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ServicesResponse,
  ServiceCategory,
  Package as ServicePackage,
  PackageFeature,
} from "@/types/services";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Loader2,
  ArrowRight,
  Sparkles,
  Check,
  X,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState<ServicesResponse>([]);
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data?.length > 0) setActiveServiceId(data[0].id);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <Header />
      </main>
    );
  }

  return (
    <main className="bg-[#FAFAFA] text-black min-h-screen selection:bg-yellow-400 selection:text-black">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-12 md:pt-48 md:pb-24 px-4 sm:px-6 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-black/20" />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-40">
              Service Packages
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-10">
            Precision <br />
            <span className="text-zinc-300">Performance.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            Scalable solutions for the next generation of industry leaders.
            Choose your tier of engagement.
          </p>
        </motion.div>
      </section>

      {/* --- SERVICE LEDGER --- */}
      <section className="px-4 sm:px-6 pb-20 md:pb-32 max-w-[1600px] mx-auto">
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isOpen={activeServiceId === service.id}
              toggleOpen={() =>
                setActiveServiceId(
                  activeServiceId === service.id ? null : service.id,
                )
              }
            />
          ))}
        </div>
      </section>

      {/* --- GLOBAL CTA --- */}
      <section className="px-4 sm:px-6 pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto bg-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <Sparkles
            className="mx-auto text-yellow-400 mb-6 md:mb-8"
            size={40}
          />
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8">
            Need a Custom Protocol?
          </h2>
          <p className="text-zinc-400 text-base md:text-xl mb-8 md:mb-12 max-w-xl mx-auto font-medium">
            For enterprise-level needs, we offer tailored retainers and bespoke
            strategic planning.
          </p>
          <motion.button
            whileHover={{ rotateZ: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-yellow-300 text-black pl-8 pr-1 py-1 rounded-xl font-bold text-sm md:text-base border border-yellow-300 cursor-pointer origin-center transition-all flex items-center gap-2 mx-auto">
            Request Bespoke Proposal
            <span className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center text-black">
              <ArrowUpRight size={18} md={20} />
            </span>
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceRow({
  service,
  index,
  isOpen,
  toggleOpen,
}: {
  service: ServiceCategory;
  index: number;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  const num = (index + 1).toString().padStart(2, "0");

  return (
    <div
      className={`transition-colors duration-700 ${isOpen ? "bg-white" : "bg-transparent"}`}>
      <button
        onClick={toggleOpen}
        className="w-full py-8 md:py-16 flex items-center justify-between group px-2 md:px-8">
        <div className="flex items-center gap-4 sm:gap-10 md:gap-20">
          <span className="font-mono text-[10px] md:text-xs opacity-20 group-hover:opacity-100 transition-opacity tracking-widest min-w-[30px]">
            [{num}]
          </span>
          <h2
            className={`text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter transition-all duration-700 text-left ${isOpen ? "text-black" : "text-black/60 group-hover:text-black"}`}>
            {service.name}
          </h2>
        </div>
        <div
          className={`relative w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 border flex-shrink-0 ${isOpen ? "bg-black border-black rotate-180" : "bg-white border-black/10 group-hover:border-black"}`}>
          <Plus
            className={`absolute transition-all duration-500 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            size={isOpen ? 20 : 28}
          />
          <Minus
            className={`absolute text-white transition-all duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            size={isOpen ? 28 : 20}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="px-4 md:px-12 pb-12 md:pb-24">
              <div className="max-w-3xl mb-8 md:mb-16">
                <p className="text-lg sm:text-2xl md:text-3xl font-medium text-zinc-500 leading-snug">
                  {service.description ||
                    "Sophisticated delivery of high-impact technical and creative solutions."}
                </p>
              </div>

              {/* Package Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-32">
                {service.packages.map((pkg, i) => (
                  <PackageCard key={pkg.id} pkg={pkg} index={i} />
                ))}
              </div>

              {/* Comparison Section */}
              <div className="relative pt-10 md:pt-20 border-t border-black/5">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-yellow-600">
                      <ShieldCheck size={20} />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                        Service Matrix
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                      Feature Transparency
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base font-medium max-w-sm">
                    Granular breakdown of what is included in each engagement
                    level.
                  </p>
                </div>

                <div className="bg-[#F3F3F3] rounded-[1.5rem] sm:rounded-[2.5rem] p-3 sm:p-6 md:p-12 overflow-hidden shadow-inner">
                  <ComparisonTable packages={service.packages} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PackageCard({ pkg, index }: { pkg: ServicePackage; index: number }) {
  const isHighlight = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] flex flex-col h-full border transition-all duration-500 cursor-default shadow-sm ${
        isHighlight
          ? "bg-black text-white border-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/10 sm:scale-105 z-10"
          : "bg-white text-black border-black/5 hover:border-black/20 hover:shadow-xl"
      }`}>
      {isHighlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2 whitespace-nowrap">
          <Zap size={12} fill="currentColor" /> Recommended
        </div>
      )}

      <div className="mb-8 md:mb-12">
        <h4
          className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-3 md:mb-4 opacity-40`}>
          {pkg.name}
        </h4>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            {pkg.currency}
            {pkg.price}
          </span>
          <span className="text-xs sm:text-sm font-bold opacity-30">
            /Fixed
          </span>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 mb-10 md:mb-16 flex-grow">
        {pkg.features.slice(0, 8).map((f, i) => (
          <div key={i} className="flex items-start gap-3 md:gap-4 group/item">
            <div
              className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isHighlight ? "bg-yellow-400" : "bg-black"}`}
            />
            <span
              className={`text-xs md:text-sm font-medium ${isHighlight ? "text-zinc-400" : "text-zinc-600"}`}>
              <strong className={isHighlight ? "text-white" : "text-black"}>
                {f.name}:
              </strong>{" "}
              {f.value.toString()}
            </span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ rotateZ: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => {
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`w-full pl-5 pr-1 py-1 rounded-xl font-bold text-sm tracking-tight transition-all duration-300 flex items-center justify-center gap-2.5 origin-center cursor-pointer ${
          isHighlight
            ? "bg-yellow-300 text-black border border-yellow-300"
            : "bg-black text-white border border-black"
        }`}>
        Initiate {pkg.name}
        <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
          <ArrowRight size={14} />
        </span>
      </motion.button>
    </motion.div>
  );
}

function ComparisonTable({ packages }: { packages: ServicePackage[] }) {
  const featureNames = Array.from(
    new Set(packages.flatMap((pkg) => pkg.features.map((f) => f.name))),
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr>
            <th className="py-4 md:py-8 pr-4 md:pr-10 text-left text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 border-b border-black/5">
              Deliverable
            </th>
            {packages.map((pkg) => (
              <th
                key={pkg.id}
                className="py-4 md:py-8 px-4 md:px-6 text-center text-base sm:text-lg md:text-xl font-bold border-b border-black/5 whitespace-nowrap">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureNames.map((name, idx) => (
            <tr key={idx} className="group hover:bg-white/50 transition-colors">
              <td className="py-4 md:py-7 pr-4 md:pr-10 border-b border-black/5 text-xs md:text-sm font-bold text-zinc-500 group-hover:text-black transition-colors">
                {name}
              </td>
              {packages.map((pkg) => {
                const f = pkg.features.find((feat) => feat.name === name);
                return (
                  <td
                    key={pkg.id}
                    className="py-4 md:py-7 px-4 md:px-6 border-b border-black/5 text-center">
                    {f?.value === true ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white shadow-sm text-green-600 mx-auto">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    ) : f?.value === false || !f ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-black/5 opacity-20 mx-auto">
                        <X size={16} />
                      </div>
                    ) : (
                      <span className="text-[10px] md:text-xs font-black tracking-tight">
                        {String(f?.value || "")}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
