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
      {/* Hero - Minimal ca Global Records */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Logo gigant */}
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[180px] font-black tracking-[-0.04em] leading-none mb-8">
            REVERB
          </h1>
          
          {/* Tagline minimal */}
          <p className="text-sm md:text-base text-zinc-500 tracking-[0.3em] uppercase font-light">
            Professional Live Band
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-zinc-700" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      {/* Artists Grid - Ca Global Records */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-600 font-light">
              Artists
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {artists.map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-zinc-950 mb-4 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 to-black/50" />
                  
                  {/* Hover effect - subtle */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500" />
                </div>

                {/* Artist info */}
                <div>
                  <h3 className="text-sm md:text-base font-medium mb-1 group-hover:text-zinc-400 transition-colors duration-300">
                    {artist}
                  </h3>
                  <p className="text-xs text-zinc-600">Artist</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-sm text-zinc-600">și mulți alți artiști consacrați</p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Minimal */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Band profesionist de instrumentiști, colaborând cu artiști creștini din România.
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
              Experiență vastă pe cele mai mari scene din țară. Adaptabilitate completă la orice stil și artist, 
              cu echipament premium și sunet impecabil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Minimal List */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-zinc-600 font-light mb-16"
          >
            Services
          </motion.h3>

          <div className="space-y-12 md:space-y-16">
            {[
              {
                title: 'Live Performance',
                desc: 'Concerte și evenimente cu sonorizare profesională'
              },
              {
                title: 'Artist Features',
                desc: 'Colaborări cu artiști consacrați din scena românească'
              },
              {
                title: 'Studio Production',
                desc: 'Înregistrări live, mixing și mastering profesional'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <h4 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-zinc-400 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-600">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-40 px-6 border-t border-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Let's Work
            </h2>

            <div className="space-y-6 text-zinc-500">
              <a
                href="tel:0736820138"
                className="block text-lg md:text-xl hover:text-white transition-colors duration-300"
              >
                0736 820 138
              </a>
              <a
                href="tel:0724046665"
                className="block text-lg md:text-xl hover:text-white transition-colors duration-300"
              >
                0724 046 665
              </a>
              <a
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="block text-base md:text-lg hover:text-white transition-colors duration-300"
              >
                vreaucuvoi@reverbproject.ro
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center gap-3 text-xs text-zinc-700">
              <span>București, România</span>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Ca Global Records */}
      <footer className="border-t border-zinc-900/50 py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-black tracking-tight">
              REVERB
            </div>

            {/* Social links minimal */}
            <div className="flex gap-8 text-xs text-zinc-600">
              <a href="#" className="hover:text-zinc-400 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors duration-300">
                YouTube
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center text-xs text-zinc-800">
            © 2025 Reverb Project. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
