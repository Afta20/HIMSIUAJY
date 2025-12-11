// src/app/study-groups/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, Cpu, Code2, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function StudyGroups() {
  const groups = [
    {
      id: "ksad",
      name: "KSAD",
      fullName: "Kelompok Studi Aplikasi & Database",
      desc: "Wadah bagi mahasiswa yang ingin mendalami dunia Software Engineering. Di sini kita belajar membangun aplikasi (Web/Mobile) dari nol hingga deploy, serta merancang struktur database yang efisien.",
      focus: ["Web Development (Next.js/React)", "Mobile Apps (Flutter)", "Database Management (SQL)", "Backend API"],
      icon: <Database size={40} className="text-white" />,
      color: "bg-blue-600",
      accent: "text-blue-600",
      bgGradient: "from-blue-50 to-white"
    },
    {
      id: "ksab",
      name: "KSAB",
      fullName: "Kelompok Studi AI & Blockchain",
      desc: "Fokus pada teknologi masa depan. Mempelajari bagaimana mesin belajar (Machine Learning) dan teknologi desentralisasi (Blockchain) yang sedang mengubah industri teknologi global.",
      focus: ["Machine Learning (Python)", "Data Science & Analytics", "Blockchain & Smart Contracts", "Natural Language Processing"],
      icon: <Cpu size={40} className="text-white" />,
      color: "bg-purple-600",
      accent: "text-purple-600",
      bgGradient: "from-purple-50 to-white"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-himsi-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-himsi-red opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-himsi-yellow opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-himsi-yellow font-bold tracking-widest text-sm uppercase mb-4 block">
            Upgrade Your Skill
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-himsi-red to-orange-500">Groups</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Temukan *passion* teknologimu di sini. Belajar bareng, *coding* bareng, dan bangun portofolio masa depanmu bersama mentor berpengalaman.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {groups.map((group, index) => (
            <motion.div 
              key={group.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Ganjil geser kiri, Genap geser kanan
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center mb-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image / Illustration Area */}
              <div className="w-full lg:w-1/2">
                <div className={`relative rounded-3xl p-10 overflow-hidden shadow-2xl bg-gradient-to-br ${group.bgGradient} border border-gray-100 aspect-video flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500`}>
                  {/* Decorative Background Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${group.color} opacity-10 rounded-full blur-2xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-32 h-32 ${group.color} opacity-10 rounded-full blur-2xl`}></div>
                  
                  {/* Main Icon */}
                  <div className={`${group.color} w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300`}>
                    {group.icon}
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Code2 size={16} />
                    {group.name} Member
                  </div>
                </div>
              </div>

              {/* Text Content Area */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                   <div className={`w-12 h-1 bg-gradient-to-r ${group.color} to-transparent rounded-full`}></div>
                   <span className={`font-bold tracking-wider ${group.accent}`}>{group.name}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {group.fullName}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {group.desc}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                   <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                     <Network size={20} className={group.accent} />
                     Apa yang dipelajari?
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {group.focus.map((item, idx) => (
                       <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                         <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                         <span>{item}</span>
                       </div>
                     ))}
                   </div>
                </div>

                <button className={`${group.color} text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-gray-200`}>
                  Daftar {group.name} Sekarang
                  <ArrowRight size={18} />
                </button>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      <Footer />
    </main>
  );
}