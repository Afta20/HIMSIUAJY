import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ini bagian PENTING biar Tailwind membaca file di dalam folder src
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna HIMSI UAJY yang kita definisikan
        himsi: {
          red: "#C8102E",      // Merah UAJY (Bold)
          yellow: "#FFCD00",   // Kuning Aksen (Ceria)
          dark: "#1A1A1A",     // Hitam Elegan (Teks)
          light: "#F9FAFB",    // Putih Tulang (Background)
        }
      },
    },
  },
  plugins: [],
};
export default config;