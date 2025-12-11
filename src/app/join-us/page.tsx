// src/app/join-us/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Instagram, Bell, Users, Star, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero Status (Closed) */}
      <section className="pt-32 pb-20 px-4 min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-himsi-red via-himsi-yellow to-himsi-red"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-himsi-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-himsi-yellow/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-himsi-red font-bold text-sm mb-8 border border-red-200"
          >
            <Clock size={16} />
            Status: Pendaftaran Ditutup
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-himsi-dark mb-6 leading-tight"
          >
            Terima Kasih atas <br/>
            <span className="text-himsi-red">Antusiasme</span> Kalian!
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Open Recruitment pengurus HIMSI periode 2024/2025 telah resmi berakhir. 
            Sampai jumpa di kesempatan berikutnya!
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://instagram.com/himsi.uajy" 
              target="_blank"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-pink-200 transition-all flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Follow Instagram Kami
            </a>
            <button className="bg-white border-2 border-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:border-himsi-yellow hover:text-orange-500 transition-all flex items-center justify-center gap-2">
              <Bell size={20} />
              Ingatkan Saya Nanti
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Photo Placeholder (Kebersamaan) */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] group"
          >
            {/* INI PLACEHOLDER FOTO */}
            {/* Nanti ganti src="/team-photo.jpg" dengan foto asli pengurus rame-rame */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                {/* Kalau belum ada foto, tampilkan ikon ini */}
                <div className="text-center">
                    <Users size={64} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 font-medium">Foto Keluarga Besar HIMSI 2024/2025</p>
                    <p className="text-xs text-gray-400">(Upload foto di sini)</p>
                </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            
            {/* Quote di atas foto */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">#OneFamilyOneGoal</h3>
                <p className="text-white/80 max-w-xl text-lg">
                    "Bergabung dengan HIMSI bukan sekadar organisasi, tapi menemukan keluarga baru untuk tumbuh bersama."
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why Join Next Year? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-himsi-dark mb-12">Kenapa Harus Gabung Tahun Depan?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-himsi-red">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-himsi-red">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Relasi Luas</h3>
              <p className="text-gray-500 leading-relaxed">
                Kenal lebih dekat dengan kating, alumni, dan mahasiswa SI dari angkatan lain. Networking dimulai dari sini.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-himsi-yellow">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Self Development</h3>
              <p className="text-gray-500 leading-relaxed">
                Asah softskill kepemimpinan, *public speaking*, dan manajemen waktu yang tidak didapat di kelas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
              <p className="text-gray-500 leading-relaxed">
                Belajar cara kerja profesional dalam tim, *problem solving*, dan eksekusi event nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}