"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ServicesResponse } from "@/types/services";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [services, setServices] = useState<ServicesResponse>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  if (error) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24">
          <h2
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-6"
            style={{ fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif" }}>
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-black/50 font-medium font-['Inter'] max-w-3xl mx-auto">
            Strategic branding, high-impact design, and digital experiences that
            scale.
          </p>
        </motion.div>

        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-32">
            <div className="mb-12 border-l-4 border-yellow-400 pl-8">
              <h3
                className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
                style={{
                  fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                }}>
                {service.name}
              </h3>
              {service.description && (
                <p className="text-black/60 text-lg md:text-xl font-medium font-['Inter'] max-w-4xl">
                  {service.description}
                </p>
              )}
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {service.packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-black/5 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full">
                  <h4
                    className="text-2xl md:text-3xl font-black uppercase mb-6 tracking-tight"
                    style={{
                      fontFamily: "'uni neue-trial', 'Uni Neue', sans-serif",
                    }}>
                    {pkg.name}
                  </h4>

                  <div className="mb-8">
                    <span
                      className="text-4xl font-black"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      {pkg.price.toLocaleString()} {pkg.currency}
                    </span>
                    {pkg.turnaroundDays && (
                      <p className="text-sm text-black/40 font-bold uppercase tracking-wider mt-2 font-['Inter']">
                        {pkg.turnaroundDays} days delivery
                      </p>
                    )}
                  </div>

                  {/* Package Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.featureId}
                        className="flex items-start gap-3 text-black/70 font-medium font-['Inter'] text-base md:text-lg">
                        <span className="mt-1 text-yellow-500 font-bold">
                          ✓
                        </span>
                        <span>
                          <strong className="text-black">
                            {feature.name}:
                          </strong>{" "}
                          {String(feature.value)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 font-['Inter'] uppercase tracking-widest text-sm">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            {service.features.length > 0 && service.packages.length > 1 && (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Feature</th>
                      {service.packages.map((pkg) => (
                        <th key={pkg.id} className="px-4 py-3 text-center">
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {service.features.map((feature) => (
                      <tr key={feature.id} className="border-t">
                        <td className="px-4 py-3 font-medium">
                          {feature.name}
                        </td>
                        {service.packages.map((pkg) => {
                          const featureValue = pkg.features.find(
                            (f) => f.featureId === feature.id,
                          );
                          return (
                            <td key={pkg.id} className="px-4 py-3 text-center">
                              {featureValue ? String(featureValue.value) : "-"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
