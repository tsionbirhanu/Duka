"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  // show loader only when landing on /services (or its subpaths)
  const showOnServices = Boolean(pathname && pathname.startsWith("/services"));
  const [isLoading, setIsLoading] = useState<boolean>(showOnServices);

  // Only handle initial loading when we intend to show the loader
  useEffect(() => {
    if (!showOnServices) return;
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [showOnServices]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <Loader2 className="text-[#FFC20E]" size={40} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]">
              Initializing Experience
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
};
