// src/components/Hero.tsx
"use client";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-himsi-light">
      
      {/* Background Decor (Bola-bola kuning/merah samar) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-himsi-yellow/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-himsi-red/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-himsi-red text-sm font-bold tracking-wide mb-6">
              #HIMSIHARUSMERAH
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
            <button className="bg-himsi-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-200">
              Lihat Program Kerja
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-himsi-dark border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-himsi-yellow hover:text-orange-600 transition-all">
              Tentang HIMSI
            </button>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
}