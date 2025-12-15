// src/components/ChatBot.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Halo! Aku HIMSI-Bot 🤖. Ada yang bisa dibantu seputar HIMSI UAJY?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Auto scroll ke bawah saat ada chat baru
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await res.json();
      
      setMessages((prev) => [
        ...prev, 
        { role: "bot", text: data.reply || "Maaf, lagi ada gangguan sinyal nih." }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev, 
        { role: "bot", text: "Error: Gagal terhubung ke server." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Jendela Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header Chat */}
            <div className="bg-himsi-red p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-full">
                   <Bot size={20} />
                </div>
                <h3 className="font-bold">HIMSI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
                <X size={20} />
              </button>
            </div>

            {/* Area Chat */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-himsi-red text-white rounded-tr-none" 
                      : "bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-400 italic">
                      Sedang mengetik...
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Chat */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tanya sesuatu..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-himsi-red/50"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-himsi-red text-white p-2 rounded-full hover:bg-red-700 transition disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Bubble (Floating Button) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-himsi-red text-white p-4 rounded-full shadow-lg hover:shadow-red-500/30 transition-shadow flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}