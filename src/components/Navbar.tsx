"use client";
import Link from 'next/link';
// 1. Import usePathname
import { usePathname } from 'next/navigation'; 
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. Ambil path URL saat ini (misal: "/about-us")
  const pathname = usePathname();

  // Helper function buat nentuin link aktif atau nggak
  const isActive = (path: string) => pathname === path;

  // Daftar Menu & Link-nya
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Events', href: '/events' },
    { name: 'Study Groups', href: '/study-groups' },
    { name: 'Tentoring', href: '/tentoring' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
             <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logo-himsi.png"
                  alt="Logo HIMSI UAJY"
                  fill
                  className="object-contain"
                  priority
                />
             </div>
            <span className="font-bold text-xl tracking-tighter text-himsi-dark">
              HIMSI <span className="text-himsi-red">UAJY</span>
            </span>
          </Link>

          {/* Desktop Menu - UPDATED */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? "text-himsi-red font-bold" // Style kalau AKTIF (Merah & Tebal)
                    : "text-gray-600 hover:text-himsi-red" // Style kalau TIDAK AKTIF
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
          <Link href="/join-us"> 
          <button className="bg-himsi-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-red-200">
          Join Us
          </button>
          </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - UPDATED */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                   isActive(link.href)
                    ? "text-himsi-red bg-red-50 font-bold" 
                    : "text-gray-700 hover:text-himsi-red hover:bg-red-50"
                }`}
                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}