// src/app/api/chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // INI BAGIAN PENTING: KITA SUPLAI DATA HIMSI KE OTAK AI
    const context = `
      Kamu adalah asisten virtual resmi untuk HIMSI UAJY (Himpunan Mahasiswa Sistem Informasi Universitas Atma Jaya Yogyakarta).
      Nama panggilanmu adalah "Sibot".
      
      PENGETAHUAN KAMU:
      1. HIMSI UAJY adalah wadah aspirasi mahasiswa SI yang Profesional, Kompetitif, Berkarakter.
      2. Tagline:  #HIMSIHarusMerah.
      3. Divisi: 
         - PH (Pengurus Harian): Ketua, Wakil, dll.
         - KOMINFO: Branding, Medsos, Dokumentasi.
         - PSDM: Kaderisasi & Pengembangan SDM.
         - SOSHUM: Sosial & Pengabdian Masyarakat.
         - USDA: Usaha Dana & Merchandise.
      4. Event Tahunan: Technology & Art Summit, HUT SI dan HIMSI, Pengabdian Masyarakat, Innovation Week.
      5. Study Groups: KSAD (Aplikasi & Database) warna biru, KSAB (AI & Blockchain) warna ungu.
      6. Tentoring: Program belajar bareng kakak tingkat sebelum ujian.

      ATURAN PENTING:
      - Jawablah dengan ramah, santai, dan menggunakan gaya bahasa mahasiswa ("aku", "kamu", "kakak").
      - HANYA JAWAB pertanyaan seputar HIMSI, Kuliah SI UAJY, Event Kampus, atau Organisasi.
      - Jika user bertanya topik lain (misal: resep masakan, politik, matematika rumit, anime, atau coding yang tidak relevan), tolak dengan sopan.
      - Contoh penolakan: "Waduh, maaf ya kak. Sebagai asisten HIMSI, aku cuma tau seputar HIMSI dan SI UAJY aja nih hehe."
    `;

    // Mulai Chat
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: context }], // Kita masukkan context sebagai prompt awal
        },
        {
          role: "model",
          parts: [{ text: "Siap! Saya mengerti. Saya akan menjadi asisten HIMSI UAJY yang baik." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal memproses pesan" }, { status: 500 });
  }
}