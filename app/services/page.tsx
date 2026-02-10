"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ServicesResponse, ServiceCategory, ServicePackage } from "@/types/services";
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
  ShieldCheck
} from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState<ServicesResponse>([]);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
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

  if (loading) return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
      <Loader2 className="animate-spin text-black" size={40} />
      <span className="font-mono text-xs uppercase tracking-widest opacity-50">Syncing Services</span>
    </div>
  );

  return (
    <main className="bg-[#FAFAFA] text-black min-h-screen selection:bg-yellow-400 selection:text-black">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-black/20" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">System Capabilities</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
            Precision <br /><span className="text-zinc-300">Engineering.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            Scalable solutions for the next generation of industry leaders. Choose your tier of engagement.
          </p>
        </motion.div>
      </section>

      {/* --- SERVICE LEDGER --- */}
      <section className="px-6 pb-32 max-w-[1600px] mx-auto">
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              isOpen={activeServiceId === service.id}
              toggleOpen={() => setActiveServiceId(activeServiceId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </section>

      {/* --- GLOBAL CTA --- */}
      <section className="px-6 pb-20">
        <div className="max-w-[1400px] mx-auto bg-black rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
           <Sparkles className="mx-auto text-yellow-400 mb-8" size={48} />
           <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">Need a Custom Protocol?</h2>
           <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">
             For enterprise-level needs, we offer tailored retainers and bespoke strategic planning.
           </p>
           <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all flex items-center gap-3 mx-auto">
             Request Bespoke Proposal <ArrowUpRight size={20} />
           </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceRow({ service, index, isOpen, toggleOpen }: any) {
  const num = (index + 1).toString().padStart(2, "0");

  return (
    <div className={`transition-colors duration-700 ${isOpen ? "bg-white" : "bg-transparent"}`}>
      <button 
        onClick={toggleOpen} 
        className="w-full py-16 flex items-center justify-between group px-4 md:px-8"
      >
        <div className="flex items-center gap-8 md:gap-20">
          <span className="font-mono text-xs opacity-20 group-hover:opacity-100 transition-opacity tracking-widest">[{num}]</span>
          <h2 className={`text-4xl md:text-8xl font-bold tracking-tighter transition-all duration-700 ${isOpen ? "text-black" : "text-black/60 group-hover:text-black"}`}>
            {service.name}
          </h2>
        </div>
        <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 border ${isOpen ? "bg-black border-black rotate-180" : "bg-white border-black/10 group-hover:border-black"}`}>
          <Plus className={`absolute transition-all duration-500 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} size={28} />
          <Minus className={`absolute text-white transition-all duration-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} size={28} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-4 md:px-12 pb-24">
              <div className="max-w-3xl mb-16">
                 <p className="text-xl md:text-3xl font-medium text-zinc-500 leading-snug">
                   {service.description || "Sophisticated delivery of high-impact technical and creative solutions."}
                 </p>
              </div>

              {/* Package Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {service.packages.map((pkg: any, i: number) => (
                  <PackageCard key={pkg.id} pkg={pkg} index={i} />
                ))}
              </div>

              {/* Comparison Section */}
              <div className="relative pt-20 border-t border-black/5">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-yellow-600">
                      <ShieldCheck size={20} />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">Service Matrix</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Feature Transparency</h3>
                  </div>
                  <p className="text-zinc-400 font-medium max-w-sm">
                    Granular breakdown of what is included in each engagement level.
                  </p>
                </div>
                
                <div className="bg-[#F3F3F3] rounded-[2.5rem] p-4 md:p-12 overflow-hidden shadow-inner">
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
      className={`relative p-10 rounded-[3rem] flex flex-col h-full border transition-all duration-500 cursor-default shadow-sm ${
        isHighlight 
        ? "bg-black text-white border-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/10 scale-105 z-10" 
        : "bg-white text-black border-black/5 hover:border-black/20 hover:shadow-xl"
      }`}
    >
      {isHighlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
          <Zap size={12} fill="currentColor" /> Recommended
        </div>
      )}

      <div className="mb-12">
        <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-40`}>{pkg.name}</h4>
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-bold tracking-tighter">{pkg.currency}{pkg.price}</span>
          <span className="text-sm font-bold opacity-30">/Fixed</span>
        </div>
      </div>

      <div className="space-y-6 mb-16 flex-grow">
        {pkg.features.slice(0, 6).map((f, i) => (
          <div key={i} className="flex items-start gap-4 group/item">
            <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${isHighlight ? "bg-yellow-400" : "bg-black"}`} />
            <span className={`text-sm font-medium ${isHighlight ? "text-zinc-400" : "text-zinc-600"}`}>
              <strong className={isHighlight ? "text-white" : "text-black"}>{f.name}:</strong> {f.value.toString()}
            </span>
          </div>
        ))}
      </div>

      <button className={`w-full py-6 rounded-2xl font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-3 ${
        isHighlight 
        ? "bg-white text-black hover:bg-yellow-400" 
        : "bg-black text-white hover:bg-zinc-800"
      }`}>
        Initiate {pkg.name} <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}

function ComparisonTable({ packages }: any) {
  const featureNames = Array.from(new Set(packages.flatMap((pkg: any) => pkg.features.map((f: any) => f.name))));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-8 pr-10 text-left text-[10px] font-black uppercase tracking-[0.3em] opacity-30 border-b border-black/5">Deliverable</th>
            {packages.map((pkg: any) => (
              <th key={pkg.id} className="py-8 px-6 text-center text-xl font-bold border-b border-black/5">{pkg.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureNames.map((name: any, idx) => (
            <tr key={idx} className="group hover:bg-white/50 transition-colors">
              <td className="py-7 pr-10 border-b border-black/5 text-sm font-bold text-zinc-500 group-hover:text-black transition-colors">{name}</td>
              {packages.map((pkg: any) => {
                const f = pkg.features.find((feat: any) => feat.name === name);
                return (
                  <td key={pkg.id} className="py-7 px-6 border-b border-black/5 text-center">
                    {f?.value === true ? (
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm text-green-600"><Check size={20} strokeWidth={3} /></div>
                    ) : f?.value === false || !f ? (
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 opacity-20"><X size={20} /></div>
                    ) : (
                      <span className="text-sm font-black tracking-tight">{f.value}</span>
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