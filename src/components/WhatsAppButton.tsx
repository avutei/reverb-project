'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-500" />
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110 border border-green-400/20">
          <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
        </div>

        {/* Pulse rings */}
        {!isHovered && (
          <>
            <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          </>
        )}

        {/* Tooltip on hover */}
        <div className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <div className="bg-zinc-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl border border-zinc-800 whitespace-nowrap">
            Scrie-ne pe WhatsApp
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-zinc-900" />
          </div>
        </div>
      </div>
    </a>
  );
}
