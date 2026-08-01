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
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactează-ne pe WhatsApp"
    >
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/90 backdrop-blur-sm text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Scrie-ne pe WhatsApp
      </motion.div>

      {/* Button */}
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-green-500/40 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500/30 ring-2 ring-green-500/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Main button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:shadow-green-500/80 transition-shadow duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
        </div>
      </div>
    </motion.a>
  );
}
