// src/app/tentoring/page.tsx
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, Download, PlayCircle, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TentoringPage() {
  const [activeSemester, setActiveSemester] = useState("Semester 1");

  // Data Dummy Materi Tentoring
  const materials = [
    // SEMESTER 1
    {
      subject: "Logika Informatika",
      topic: "Persiapan UAS",
      semester: "Semester 1",
      mentor: "Kak Kentson",
      date: "10 Des 2025",
      hasVideo: true,
      hasModul: true,
      color: "bg-blue-500"
    },
    {
      subject: "Permodelan Proses Bisnis",
      topic: "Persiapan UAS",
      semester: "Semester 1",
      mentor: "Kak Yemima",
      date: "12 Des 2025",
      hasVideo: false,
      hasModul: true,
      color: "bg-indigo-500"
    },
    // SEMESTER 3
    {
      subject: "Sistem Basis Data",
      topic: "Bedah Soal UTS",
      semester: "Semester 3",
      mentor: "Kak Dwiki",
      date: "11 Des 2025",
      hasVideo: true,
      hasModul: true,
      color: "bg-emerald-500"
    },
    {
      subject: "Statistika Inferensia",
      topic: "Uji Hipotesis & Regresi Linear",
      semester: "Semester 3",
      mentor: "Kak Daniel",
      date: "13 Des 2025",
      hasVideo: true,
      hasModul: false,
      color: "bg-teal-500"
    },
    // SEMESTER 5
    {
      subject: "Keamanan Sistem Informasi",
      topic: "Persiapan UTS",
      semester: "Semester 5",
      mentor: "Kak Jessica",
      date: "09 Agustus 2025",
      hasVideo: true,
      hasModul: true,
      color: "bg-orange-500"
    },
  ];

  // Logic Filter
  const filteredMaterials = materials.filter(item => item.semester === activeSemester);
  const semesters = ["Semester 1", "Semester 3", "Semester 5", "Semester 7"];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-himsi-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-himsi-red opacity-20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tentoring <span className="text-himsi-yellow">&</span> Academic
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Siap hadapi kuis, UTS, dan UAS dengan materi belajar yang disusun khusus oleh kakak tingkat berpengalaman.
          </p>
        </div>
      </section>

      {/* Filter Semester Tabs */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-4">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                  activeSemester === sem
                    ? "bg-himsi-red border-himsi-red text-white shadow-lg shadow-red-200"
                    : "bg-white border-gray-200 text-gray-500 hover:border-himsi-red hover:text-himsi-red"
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-himsi-red" />
            <h2 className="text-2xl font-bold text-gray-800">Materi {activeSemester}</h2>
          </div>

          {filteredMaterials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                  {/* Subject Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${item.color} text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm`}>
                      {item.subject.slice(0, 4)}... 
                    </div>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-himsi-red transition-colors">
                    {item.subject}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {item.topic}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                       <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                         {item.mentor.charAt(4)}
                       </div>
                       <span>Tentor: <span className="font-semibold text-gray-700">{item.mentor}</span></span>
                    </div>

                    <div className="flex gap-2">
                      {item.hasVideo && (
                        <button className="flex-1 bg-red-50 text-himsi-red py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-himsi-red hover:text-white transition-all">
                          <PlayCircle size={16} />
                          Video
                        </button>
                      )}
                      {item.hasModul && (
                        <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                          <Download size={16} />
                          Modul
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // State Kosong
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <FileText className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-400">Belum ada materi</h3>
              <p className="text-gray-400">Materi untuk semester ini akan segera diupdate.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}