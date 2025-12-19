import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard"; 
import Footer from "../components/Footer";

export default function Home() {
  // Data Dummy Event (Nanti bisa diganti database)
  const events = [
    {
      title: "HIMSI 2025: Welcoming Party",
      date: "25 Oktober 2025",
      location: "Gedung Bonaventura",
      category: "Welcoming Party", 
      image: "/dummy-event.jpg"
    },
    {
      title: "Technolgy Art Summit 2025",
      date: "15 Desember 2025",
      location: "Online",
      category: "Non-Akademik",
      image: "/dummy-event.jpg"
    },
    {
      title: "Kunjungan Industri: Gojek & Tokopedia",
      date: "15 Oktober 2025",
      location: "Jakarta",
      category: "Study Tour",
      image: "/dummy-event.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Section Event */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-himsi-dark mb-4">
              Agenda <span className="text-himsi-red">Terdekat</span>
            </h2>
            <div className="w-20 h-1 bg-himsi-yellow mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Jangan lewatkan keseruan dan kesempatan berkembang bersama keluarga besar Sistem Informasi UAJY.
            </p>
          </div>

          {/* Grid Kartu Event */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                category={event.category}
                image={event.image}
              />
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}