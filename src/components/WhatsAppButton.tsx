'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '40736820138'; // 0736 820 138 in format international
  const message = encodeURIComponent('Bună! Aș dori să aflu mai multe despre Reverb Project.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact pe WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all duration-300" />
        
        {/* Button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6" strokeWidth={2} />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
      </div>
    </a>
  );
}
