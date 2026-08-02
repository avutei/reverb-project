'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-black text-white">
      {/* Hero - Video Background Style */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
        </div>

        {/* Content */}
        <motion.div 
          style={{ y, opacity }}
          className="relative h-full flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[20vw] md:text-[180px] font-black tracking-[-0.05em] leading-none mb-6">
              REVERB
            </h1>
            <p className="text-sm md:text-base text-zinc-400 tracking-[0.4em] uppercase font-light mb-8">
              Professional Live Band
            </p>
            <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-zinc-600">
              <span>București</span>
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>România</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-zinc-700 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 md:py-48 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Band profesionist de instrumentiști, colaborând cu artiști creștini din România.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl text-zinc-400 leading-relaxed">
              <p>
                Experiență vastă pe cele mai mari scene din țară. Adaptabilitate completă la orice stil și artist, cu echipament premium și sunet impecabil.
              </p>
              <p>
                De la evenimente private la concerte în aer liber, oferim performanță live la cele mai înalte standarde pentru evenimente de neuitat.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="relative py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-20"
          >
            Featured Artists
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Marian Călugăru',
              'Daniel Brumă',
              'Paul Buciuman',
              'Cornel Borbei',
              'Răzvan Peicu',
              'Silviu Pașca'
            ].map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-zinc-950 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-4 h-4 fill-white ml-0.5" strokeWidth={0} />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-medium">{artist}</h4>
                <p className="text-sm text-zinc-600">Artist</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-zinc-500 mb-6">și mulți alți artiști consacrați</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm border border-zinc-800 hover:border-zinc-700 px-8 py-4 transition-colors"
            >
              <span>Contactează-ne pentru detalii</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-20"
          >
            Servicii
          </motion.h3>

          <div className="space-y-0">
            {[
              {
                title: 'Live Performance',
                desc: 'Band complet cu echipament premium pentru orice tip de eveniment - conferințe, festivaluri, evenimente private.'
              },
              {
                title: 'Artist Features',
                desc: 'Colaborări cu artiști consacrați din scena creștină românească. Repertoriu vast adaptat oricărui stil.'
              },
              {
                title: 'Studio Production',
                desc: 'Înregistrări live, mixing și mastering profesional pentru proiecte muzicale de calitate.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group border-t border-zinc-900 py-12 md:py-16 hover:border-zinc-800 transition-colors"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {service.title}
                  </h4>
                  <p className="md:col-span-2 text-lg md:text-xl text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-40 md:py-56 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Let's Work
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 mb-20 max-w-xl mx-auto">
              Contactează-ne pentru o ofertă personalizată
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <a
                href="tel:0736820138"
                className="group p-10 md:p-12 bg-zinc-950/30 hover:bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all text-left"
              >
                <p className="text-xs text-zinc-600 mb-6 uppercase tracking-[0.3em]">Phone</p>
                <p className="text-2xl md:text-3xl font-medium mb-3">0736 820 138</p>
                <p className="text-xl text-zinc-500">0724 046 665</p>
              </a>

              <a
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="group p-10 md:p-12 bg-zinc-950/30 hover:bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 transition-all text-left"
              >
                <p className="text-xs text-zinc-600 mb-6 uppercase tracking-[0.3em]">Email</p>
                <p className="text-base md:text-lg break-all">
                  vreaucuvoi@<br className="md:hidden" />reverbproject.ro
                </p>
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm text-zinc-700">
              <span>București, România</span>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <span>2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-4xl font-black tracking-tight">REVERB</div>
            <div className="flex gap-8 text-sm text-zinc-600">
              <a href="#" className="hover:text-zinc-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">YouTube</a>
            </div>
          </div>
          <div className="text-center text-xs text-zinc-700">
            © 2025 Reverb Project. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
