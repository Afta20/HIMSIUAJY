// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-himsi-dark text-white pt-16 pb-8 border-t-4 border-himsi-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Identitas */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              HIMSI <span className="text-himsi-red">UAJY</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Himpunan Mahasiswa Sistem Informasi Universitas Atma Jaya Yogyakarta. 
              Wadah aspirasi yang Unity, Humanis, dan Dinamis.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/himsiuajy" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-himsi-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-himsi-red transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-himsi-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-himsi-yellow">Tautan Cepat</h4>
            <ul className="space-y-3">
              {['About Us', 'Events', 'Study Groups', 'Responsi', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-himsi-yellow">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="mt-1 flex-shrink-0 text-himsi-red" size={20} />
                <p>
                  Gedung Bonaventura, Kampus 3 UAJY, <br/>
                  Jl. Babarsari No.43, Yogyakarta
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="flex-shrink-0 text-himsi-red" size={20} />
                <a href="mailto:himsi@uajy.ac.id" className="hover:text-white transition-colors">
                  himsi@uajy.ac.id
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HIMSI UAJY. Developed by <span className='text-himsi-red font-bold'>Afta</span>.</p>
        </div>
      </div>
    </footer>
  );
}