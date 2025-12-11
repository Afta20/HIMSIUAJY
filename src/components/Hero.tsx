// src/components/Hero.tsx
"use client";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
// 1. Import Link dari next/link
import Link from 'next/link'; 

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-himsi-light min-h-[90vh] flex items-center">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-himsi-yellow/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-himsi-red/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-himsi-red text-sm font-bold tracking-wide mb-6 border border-red-100">
              #HIMSIHarusMerah‼
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-himsi-dark leading-tight mb-6">
              Profesional, Kompetitif, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-himsi-red to-orange-600">
                & Berkarakter.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Selamat datang di portal resmi Himpunan Mahasiswa Sistem Informasi UAJY. 
            Wadah aspirasi, pengembangan diri, dan kolaborasi mahasiswa SI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* TOMBOL 1: Link ke /events */}
            <Link href="/events">
              <button className="bg-himsi-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-200 hover:-translate-y-1 w-full sm:w-auto">
                Lihat Program Kerja
                <ArrowRight size={20} />
              </button>
            </Link>

            {/* TOMBOL 2: Link ke /about-us */}
            <Link href="/about-us">
              <button className="bg-white text-himsi-dark border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-himsi-yellow hover:text-orange-600 transition-all hover:-translate-y-1 w-full sm:w-auto">
                Tentang HIMSI
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce"
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}