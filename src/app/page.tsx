'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <main className="bg-black text-white">
      {/* Hero - Ultra Minimal */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[18vw] md:text-[200px] font-black tracking-[-0.06em] leading-[0.85] mb-12"
          >
            REVERB
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg text-zinc-500 tracking-[0.3em] uppercase font-light">
              Professional Live Band
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-zinc-600">
              <span>București</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>România</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-transparent"
          />
        </motion.div>
      </section>

      {/* Statement - Single Block */}
      <section className="relative py-32 md:py-48 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
              Colaborăm cu artiști creștini din România pentru evenimente de neuitat.
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
              <p>
                Band profesionist de instrumentiști cu experiență vastă pe cele mai mari scene din țară. Adaptabilitate completă la orice stil și artist.
              </p>
              <p>
                De la evenimente private la concerte în aer liber, oferim sunet impecabil și performanță la cele mai înalte standarde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Minimal List */}
      <section className="relative py-32 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-16"
          >
            Servicii
          </motion.h3>

          <div className="space-y-0">
            {[
              {
                title: 'Live Performance',
                desc: 'Band complet cu echipament premium pentru orice tip de eveniment'
              },
              {
                title: 'Artist Features',
                desc: 'Colaborări cu artiști consacrați din scena creștină românească'
              },
              {
                title: 'Studio Production',
                desc: 'Înregistrări, mixing și mastering profesional'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border-t border-zinc-900 py-10 md:py-12 hover:border-zinc-800 transition-colors duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6 md:gap-12">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {service.title}
                  </h4>
                  <p className="md:col-span-2 text-lg text-zinc-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid - Record Label Style */}
      <section className="relative py-32 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-between items-end"
          >
            <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-600">
              Recent Work
            </h3>
            <span className="text-sm text-zinc-700">2024 – 2025</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-black to-black" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-6 h-6 fill-white ml-1" strokeWidth={0} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="text-xs text-zinc-600 mb-1">Video {i}</p>
                  <p className="text-sm text-zinc-400">Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section className="relative py-32 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-8">
                  Featured Artists
                </h3>
                <h4 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                  Colaborări cu artiști consacrați
                </h4>
                <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                  Repertoriu vast, experiență pe cele mai mari scene din România.
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-white border border-zinc-800 hover:border-zinc-700 px-6 py-3 transition-colors duration-300"
                >
                  <span>Vezi mai mult</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3 grid grid-cols-4 gap-2"
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-950 hover:bg-zinc-900 transition-colors duration-500 border border-zinc-900/50"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact - Clean & Direct */}
      <section id="contact" className="relative py-40 md:py-56 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Let's Talk
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 mb-20 max-w-xl mx-auto">
              Contactează-ne pentru o ofertă personalizată
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-16 text-left">
              <a
                href="tel:0736820138"
                className="group p-8 md:p-10 bg-zinc-950/50 hover:bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
              >
                <p className="text-xs text-zinc-600 mb-4 uppercase tracking-wider">Phone</p>
                <p className="text-xl md:text-2xl font-medium mb-2">0736 820 138</p>
                <p className="text-lg text-zinc-500">0724 046 665</p>
              </a>

              <a
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="group p-8 md:p-10 bg-zinc-950/50 hover:bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
              >
                <p className="text-xs text-zinc-600 mb-4 uppercase tracking-wider">Email</p>
                <p className="text-base md:text-lg break-all">vreaucuvoi@reverbproject.ro</p>
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm text-zinc-700">
              <span>București</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>România</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="relative border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-700">© 2025 Reverb Project</p>
          <div className="flex gap-6 text-sm text-zinc-700">
            <a href="#" className="hover:text-zinc-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-zinc-500 transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
