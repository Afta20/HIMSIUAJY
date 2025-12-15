import type { Metadata } from "next";
import "./globals.css";
import IntroLoader from "@/components/IntroLoader";
import ChatBot from "@/components/ChatBot"; 

export const metadata: Metadata = {
  title: "HIMSI UAJY",
  description: "Website Resmi HIMSI UAJY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-white text-gray-900" suppressHydrationWarning={true}>
        <IntroLoader />
        {children}
      
        <ChatBot />
      </body>
    </html>
  );
}