'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '40736820138'; // 0736 820 138 in format internațional
  const message = encodeURIComponent('Bună! Aș dori să aflu mai multe despre Reverb Project.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group md:bottom-8 md:right-8"
      aria-label="Contact pe WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Outer glow effect - mai intens la hover */}
        <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl group-hover:from-green-500/40 group-hover:to-emerald-500/40 transition-all duration-700 group-hover:blur-2xl" />
        
        {/* Main button - shadow mai puternic, tranziție mai smooth */}
        <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white rounded-full p-4 md:p-5 shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.6)] transition-all duration-500 group-hover:scale-110 border border-green-400/30 backdrop-blur-sm">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </div>

        {/* Pulse rings - doar când nu e hover */}
        {!isHovered && (
          <>
            <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-75" style={{ animationDuration: '2.5s' }} />
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.25s' }} />
          </>
        )}

        {/* Tooltip on hover - mai elegant */}
        <div className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ease-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <div className="bg-zinc-900/95 backdrop-blur-md text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-2xl border border-zinc-700/50 whitespace-nowrap">
            Scrie-ne pe WhatsApp
            {/* Arrow */}
            <div className="absolute top-full right-7 -mt-px">
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-zinc-900/95" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
