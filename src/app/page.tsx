'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const artists = [
    'Marian Călugăru',
    'Daniel Brumă', 
    'Paul Buciuman',
    'Cornel Borbei',
    'Răzvan Peicu',
    'Silviu Pașca',
    'Mihai Gherase',
    'Ovidiu Pușcașu'
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Ultra Minimal ca Global Records */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Logo gigant - exact ca Global Records */}
          <h1 className="text-[20vw] md:text-[15vw] lg:text-[200px] font-black tracking-[-0.05em] leading-[0.85] mb-12">
            REVERB
          </h1>
          
          {/* Tagline ultra-minimal */}
          <p className="text-[10px] md:text-xs text-zinc-600 tracking-[0.4em] uppercase font-light">
            Professional Live Band
          </p>
        </motion.div>

        {/* Scroll indicator minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-zinc-800" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      {/* Artists Section - Grid Minimal ca Global Records */}
      <section className="py-32 md:py-40 lg:py-48 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Heading ultra-minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 md:mb-28"
          >
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-zinc-700 font-light">
              Artists
            </h2>
          </motion.div>

          {/* Grid simplu și clean */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {artists.map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: i * 0.08, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group cursor-pointer"
              >
                {/* Image placeholder - aspect pătrat */}
                <div className="aspect-square bg-zinc-950 mb-5 relative overflow-hidden">
                  {/* Subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 to-black/80" />
                  
                  {/* Hover effect ultra-subtil */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-all duration-700" />
                </div>

                {/* Artist name - ultra clean */}
                <div>
                  <h3 className="text-sm md:text-base font-light tracking-wide mb-1 group-hover:text-zinc-500 transition-colors duration-500">
                    {artist}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-28 text-center"
          >
            <p className="text-xs text-zinc-700 font-light tracking-wider">
              și mulți alți artiști consacrați
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Minimal Statement */}
      <section id="about" className="py-32 md:py-40 lg:py-48 px-6 border-t border-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15]">
              Band profesionist de instrumentiști, colaborând cu artiști creștini din România.
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-zinc-600 leading-relaxed font-light max-w-2xl">
              Experiență vastă pe cele mai mari scene din țară. Adaptabilitate completă la orice stil și artist, 
              cu echipament premium și sunet impecabil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Ultra Minimal List */}
      <section id="services" className="py-32 md:py-40 lg:py-48 px-6 border-t border-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-zinc-700 font-light mb-20 md:mb-28"
          >
            Services
          </motion.h3>

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {[
              {
                num: '01',
                title: 'Live Performance',
                desc: 'Concerte și evenimente cu sonorizare profesională'
              },
              {
                num: '02',
                title: 'Artist Features',
                desc: 'Colaborări cu artiști consacrați din scena românească'
              },
              {
                num: '03',
                title: 'Studio Production',
                desc: 'Înregistrări live, mixing și mastering profesional'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.15, 
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group border-t border-zinc-900/30 pt-8"
              >
                <div className="flex items-start gap-8 md:gap-12">
                  {/* Number */}
                  <span className="text-xs text-zinc-800 font-light mt-2 w-12">
                    {service.num}
                  </span>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 group-hover:text-zinc-500 transition-colors duration-500 tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-zinc-600 font-light leading-relaxed max-w-xl">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Ultra Clean */}
      <section id="contact" className="py-40 md:py-48 lg:py-56 px-6 border-t border-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-16"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
              Let's Work
            </h2>

            <div className="space-y-6 text-zinc-600">
              <a
                href="tel:0736820138"
                className="block text-base md:text-lg font-light hover:text-white transition-colors duration-500"
              >
                0736 820 138
              </a>
              <a
                href="tel:0724046665"
                className="block text-base md:text-lg font-light hover:text-white transition-colors duration-500"
              >
                0724 046 665
              </a>
              <a
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="block text-sm md:text-base font-light hover:text-white transition-colors duration-500"
              >
                vreaucuvoi@reverbproject.ro
              </a>
            </div>

            <div className="pt-12 flex items-center justify-center gap-4 text-[10px] text-zinc-800 tracking-wider">
              <span>București, România</span>
              <div className="w-1 h-1 rounded-full bg-zinc-900" />
              <span>2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal ca Global Records */}
      <footer className="border-t border-zinc-900/30 py-16 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-black tracking-tight">
              REVERB
            </div>

            {/* Social links ultra-minimal */}
            <div className="flex gap-10 text-[10px] text-zinc-700 tracking-wider">
              <a href="#" className="hover:text-zinc-500 transition-colors duration-500">
                INSTAGRAM
              </a>
              <a href="#" className="hover:text-zinc-500 transition-colors duration-500">
                FACEBOOK
              </a>
              <a href="#" className="hover:text-zinc-500 transition-colors duration-500">
                YOUTUBE
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 text-center text-[9px] text-zinc-900 tracking-wider">
            © 2025 REVERB PROJECT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}
