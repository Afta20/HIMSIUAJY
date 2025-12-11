// src/components/EventCard.tsx
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  category: string;
  image: string; // URL gambar
}

export default function EventCard({ title, date, location, category, image }: EventCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Bagian Gambar */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        {/* Placeholder image kalau belum ada gambar asli */}
        <div className="absolute inset-0 bg-gradient-to-br from-himsi-red to-orange-600 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-20 group-hover:opacity-10">
          HIMSI UAJY
        </div>
        
        {/* Badge Kategori */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-himsi-red shadow-sm">
          {category}
        </div>
      </div>

      {/* Bagian Konten */}
      <div className="p-6 relative">
        {/* Garis Aksen Kuning */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-himsi-red to-himsi-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar size={16} className="text-himsi-yellow" />
          <span>{date}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-himsi-red transition-colors line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold group-hover:bg-himsi-red group-hover:text-white group-hover:border-transparent transition-all flex items-center justify-center gap-2">
          Detail Event
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}