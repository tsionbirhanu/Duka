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

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-gray-600">Loading services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </motion.h2>

        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-16">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">{service.name}</h3>
              {service.description && (
                <p className="text-gray-600 text-lg">{service.description}</p>
              )}
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <h4 className="text-2xl font-semibold mb-3">{pkg.name}</h4>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {pkg.price.toLocaleString()} {pkg.currency}
                    </span>
                    {pkg.turnaroundDays && (
                      <p className="text-sm text-gray-500 mt-1">
                        {pkg.turnaroundDays} days turnaround
                      </p>
                    )}
                  </div>

                  {/* Package Features */}
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.featureId}
                        className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>
                          <strong>{feature.name}:</strong>{" "}
                          {String(feature.value)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full">Get Started</Button>
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
