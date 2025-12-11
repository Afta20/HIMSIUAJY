// src/app/about-us/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Heart, DollarSign } from "lucide-react"; // Tambah DollarSign untuk USDA

export default function AboutUs() {
  // Data Divisi UPDATED: PH, KOMINFO, PSDM, SOSHUM, USDA
  const divisions = [
    {
      name: "PH (Pengurus Harian)",
      desc: "Otak penggerak organisasi yang terdiri dari Ketua, Wakil, Sekretaris, dan Bendahara untuk mengkoordinasikan seluruh arah gerak HIMSI.",
      icon: <Users size={32} className="text-white" />,
      color: "bg-himsi-red"
    },
    {
      name: "Divisi KOMINFO",
      desc: "Ujung tombak branding, publikasi konten kreatif, dokumentasi event, dan pengelolaan aset digital HIMSI di media sosial.",
      icon: <Zap size={32} className="text-white" />,
      color: "bg-orange-500"
    },
    {
      name: "Divisi PSDM",
      desc: "Fokus pada pengembangan sumber daya manusia, bonding internal, serta kaderisasi untuk mencetak penerus himpunan yang berkualitas.",
      icon: <Target size={32} className="text-white" />,
      color: "bg-blue-600"
    },
    {
      name: "Divisi SOSHUM",
      desc: "Bergerak di bidang Sosial & Humaniora. Menjadi jembatan kepedulian mahasiswa SI terhadap masyarakat sekitar dan isu-isu sosial.",
      icon: <Heart size={32} className="text-white" />,
      color: "bg-pink-500"
    },
    {
      name: "Divisi USDA",
      desc: "Usaha Dana. Bertanggung jawab mencari pemasukan mandiri melalui penjualan merchandise (Danus) dan kemitraan kreatif.",
      icon: <DollarSign size={32} className="text-white" />,
      color: "bg-green-600" // Warna Hijau (Identik dengan uang/dana)
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-himsi-red font-bold tracking-widest text-sm uppercase mb-2 block">
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-himsi-dark mb-6">
            Mengenal Lebih Dekat <br />
            <span className="text-himsi-red">HIMSI UAJY</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Himpunan Mahasiswa Sistem Informasi Universitas Atma Jaya Yogyakarta 
            berdiri sebagai wadah beraspirasi dan berkreasi bagi seluruh mahasiswa aktif SI UAJY.
          </p>
        </div>
      </section>

      {/* 2. Visi & Misi Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Visi */}
            <div className="bg-himsi-red text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Target /> Visi
              </h2>
              <p className="text-lg leading-relaxed font-light">
                "Menjadi wadah aspirasi mahasiswa Sistem Informasi yang Unity, Humanis, dan Dinamis demi kemajuan bersama."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-himsi-dark mb-6 flex items-center gap-3">
                <Zap className="text-himsi-yellow" /> Misi
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-himsi-red rounded-full"></div>
                  <span>Membangun rasa kekeluargaan antar mahasiswa SI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-himsi-red rounded-full"></div>
                  <span>Mengembangkan potensi akademik dan non-akademik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-himsi-red rounded-full"></div>
                  <span>Menjalin hubungan baik dengan pihak internal dan eksternal.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Struktur / Divisi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-himsi-dark">Struktur Organisasi</h2>
            <div className="w-20 h-1 bg-himsi-yellow mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid responsif: Mobile 1 kolom, Laptop 3 kolom (karena ada 5 item, baris kedua otomatis tengah) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {divisions.map((div, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-transparent hover:border-himsi-red group flex flex-col items-start h-full">
                <div className={`${div.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {div.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{div.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {div.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}