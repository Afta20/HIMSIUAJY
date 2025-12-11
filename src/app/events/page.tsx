// src/app/events/page.tsx
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard"; // Kita reuse komponen yang udah ada
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function EventsPage() {
  // State untuk Filter dan Search
  const [activeTab, setActiveTab] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Data Dummy Event (Lebih banyak)
  const allEvents = [
    {
      title: "MOPIS 2025: Welcoming Party",
      date: "25 Agustus 2025",
      location: "Gedung Bonaventura",
      category: "Non-Akademik", // Kategori ini penting buat filter
      image: "/dummy-event.jpg"
    },
    {
      title: "Responsi UAS: Algoritma & Pemrograman",
      date: "10 Desember 2025",
      location: "Online (Ms. Teams)",
      category: "Akademik",
      image: "/dummy-event.jpg"
    },
    {
      title: "SI Fest: Tech Art Summit",
      date: "15 September 2025",
      location: "Auditorium UAJY",
      category: "Non-Akademik",
      image: "/dummy-event.jpg"
    },
    {
      title: "Workshop UI/UX Design with Figma",
      date: "05 Oktober 2025",
      location: "Lab Komputer 3",
      category: "Akademik",
      image: "/dummy-event.jpg"
    },
    {
      title: "Kunjungan Industri: Tokopedia Tower",
      date: "20 November 2025",
      location: "Jakarta",
      category: "Non-Akademik",
      image: "/dummy-event.jpg"
    },
    {
      title: "Study Group: Intro to Data Science",
      date: "Setiap Jumat",
      location: "Coworking Space",
      category: "Akademik",
      image: "/dummy-event.jpg"
    },
  ];

  // Logic Filtering: Filter berdasarkan Tab Kategori DAN Search Query
  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = activeTab === "Semua" || event.category === activeTab;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["Semua", "Akademik", "Non-Akademik"];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-himsi-dark mb-4">
            Kalender <span className="text-himsi-red">Kegiatan</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Temukan berbagai kegiatan seru untuk meningkatkan softskill dan hardskill kamu di sini.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 sticky top-20 z-30 bg-gray-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            
            {/* Tab Kategori */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === cat
                      ? "bg-himsi-red text-white shadow-md shadow-red-200"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari event..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himsi-red/20 focus:border-himsi-red transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Event Grid List */}
      <section className="pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} // Efek muncul bergantian (stagger)
                >
                  <EventCard 
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    category={event.category}
                    image={event.image}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            // Tampilan kalau hasil pencarian kosong
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Event tidak ditemukan</h3>
              <p className="text-gray-500">Coba ganti kata kunci pencarian kamu.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}