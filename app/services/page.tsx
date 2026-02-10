"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ServicesResponse } from "@/types/services";
import { Check, Clock, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState<ServicesResponse>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white text-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% 0%, rgba(252,211,77,0.1), transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black text-xs font-bold tracking-wider uppercase rounded-full mb-6">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] tracking-tight mb-6"
            style={{
              fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
            }}>
            Choose Your Perfect Package
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            From strategy to execution, we offer comprehensive solutions
            tailored to your needs. Transparent pricing, premium quality,
            guaranteed results.
          </motion.p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
              <p
                className="text-lg text-black/60"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Loading our services...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-lg text-red-600 font-medium">
                Error loading services: {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors">
                Retry
              </button>
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-black/60">
                No services available yet.
              </p>
            </div>
          )}

          {!loading &&
            !error &&
            services.map((service, serviceIdx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: serviceIdx * 0.1 }}
                className="mb-24 last:mb-0">
                {/* Service Header */}
                <div className="mb-12 text-center md:text-left">
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4"
                    style={{
                      fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
                    }}>
                    {service.name}
                  </h2>
                  {service.description && (
                    <p
                      className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                  {service.packages.map((pkg, pkgIdx) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pkgIdx * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                      {/* Package Header */}
                      <div className="mb-6">
                        <h3
                          className="text-2xl md:text-3xl font-bold text-black mb-2"
                          style={{
                            fontFamily:
                              "'Uni Neue', 'Inter', system-ui, sans-serif",
                          }}>
                          {pkg.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl md:text-5xl font-black text-yellow-400"
                            style={{
                              fontFamily: "'Inter', system-ui, sans-serif",
                            }}>
                            {pkg.price.toLocaleString()}
                          </span>
                          <span className="text-lg text-black/60 font-medium">
                            {pkg.currency}
                          </span>
                        </div>
                        {pkg.turnaroundDays && (
                          <div className="flex items-center gap-2 mt-3 text-sm text-black/60">
                            <Clock size={16} />
                            <span>{pkg.turnaroundDays} days delivery</span>
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature.featureId}
                            className="flex items-start gap-3 text-sm md:text-base text-black/80">
                            <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                              <Check size={14} className="text-black" />
                            </div>
                            <span
                              style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                              }}>
                              <strong className="text-black">
                                {feature.name}:
                              </strong>{" "}
                              {String(feature.value)}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                        Get Started
                        <ArrowRight size={16} />
                      </motion.button>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>

                {/* Feature Comparison Table (if multiple packages) */}
                {service.features.length > 0 && service.packages.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                            <th
                              className="px-6 py-4 text-left text-sm font-bold text-black uppercase tracking-wider"
                              style={{
                                fontFamily: "'Inter', system-ui, sans-serif",
                              }}>
                              Feature Comparison
                            </th>
                            {service.packages.map((pkg) => (
                              <th
                                key={pkg.id}
                                className="px-6 py-4 text-center text-sm font-bold text-black"
                                style={{
                                  fontFamily:
                                    "'Uni Neue', 'Inter', system-ui, sans-serif",
                                }}>
                                {pkg.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {service.features.map((feature, idx) => (
                            <tr
                              key={feature.id}
                              className={
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }>
                              <td
                                className="px-6 py-4 text-sm font-medium text-black"
                                style={{
                                  fontFamily: "'Inter', system-ui, sans-serif",
                                }}>
                                {feature.name}
                              </td>
                              {service.packages.map((pkg) => {
                                const featureValue = pkg.features.find(
                                  (f) => f.featureId === feature.id
                                );
                                return (
                                  <td
                                    key={pkg.id}
                                    className="px-6 py-4 text-center text-sm text-black/70"
                                    style={{
                                      fontFamily:
                                        "'Inter', system-ui, sans-serif",
                                    }}>
                                    {featureValue ? (
                                      typeof featureValue.value ===
                                      "boolean" ? (
                                        featureValue.value ? (
                                          <Check
                                            size={20}
                                            className="inline text-green-600"
                                          />
                                        ) : (
                                          <span className="text-red-400">
                                            ✗
                                          </span>
                                        )
                                      ) : (
                                        String(featureValue.value)
                                      )
                                    ) : (
                                      <span className="text-black/30">—</span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      {!loading && !error && services.length > 0 && (
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6"
              style={{
                fontFamily: "'Uni Neue', 'Inter', system-ui, sans-serif",
              }}>
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-black/70 mb-8"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Let's discuss your project and find the perfect solution for your
              needs.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/30">
              Contact Us Now
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </section>
      )}

      <Footer />
    </motion.main>
  );
}