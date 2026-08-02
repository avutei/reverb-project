'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '736820138';
  const message = encodeURIComponent('Bună! Aș dori să aflu mai multe despre Reverb Project.');
  const whatsappUrl = `https://wa.me/40${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Contactează-ne pe WhatsApp"
    >
      {/* Tooltip - ultra minimal */}
      <motion.div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-black/80 backdrop-blur-xl text-white text-[11px] font-light tracking-wider rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 border border-zinc-900/50"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Scrie-ne pe WhatsApp
      </motion.div>

      {/* Button - mai subtil, mai minimal */}
      <div className="relative">
        {/* Subtle glow */}
        <motion.div
          className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main button - mai mic, mai subtil */}
        <div className="relative w-14 h-14 bg-zinc-950 hover:bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-900/50 group-hover:border-green-500/30 transition-all duration-700 shadow-lg shadow-black/50">
          <MessageCircle className="w-6 h-6 text-zinc-600 group-hover:text-green-500 transition-colors duration-700" strokeWidth={1.5} />
        </div>
      </div>
    </motion.a>
  );
}
