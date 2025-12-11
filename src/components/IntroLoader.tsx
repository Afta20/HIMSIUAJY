"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Durasi tampil splash screen (2 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash-screen"
          // Class fixed inset-0 z-[9999] memastikan dia menutupi seluruh layar
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-himsi-red"
          
          // Initial: Kondisi awal (Solid)
          initial={{ opacity: 1 }}
          
          // Animate: Kondisi saat tampil (Solid)
          animate={{ opacity: 1 }}
          
          // Exit: Kondisi saat 'isLoading' jadi false (Memudar jadi transparan)
          exit={{ opacity: 0 }}
          
          // Transition: Durasi pudar 0.8 detik biar halus
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 p-6"
          >
             <div className="relative w-full h-full animate-pulse">
               <Image 
                  src="/logo-himsi.png" 
                  alt="Logo HIMSI"
                  fill
                  className="object-contain"
                  priority
                />
             </div>
          </motion.div>

          {/* TEKS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
              HIMSI <span className="text-himsi-yellow">UAJY</span>
            </h1>
            <p className="text-white/80 text-lg tracking-widest font-light">
              #HIMSIHarusMerah‼
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}