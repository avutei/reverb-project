'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Full screen cu parallax */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-black to-black" />
        
        {/* Ambient light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6"
        >
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[15vw] md:text-[180px] font-black tracking-[-0.05em] leading-[0.85] mb-8">
              REVERB
            </h1>
            <div className="h-[1px] w-24 bg-white/40 mx-auto mb-8" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-zinc-400 tracking-[0.2em] uppercase font-light"
          >
            Band Profesionist
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
          />
        </motion.div>
      </section>

      {/* Statement Section */}
      <section className="relative py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Orice artist.<br />
              Orice scenă.<br />
              <span className="text-zinc-600">Un singur band.</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Colaborăm cu artiști creștini din România pentru evenimente memorabile. 
              Instrumentiști profesioniști, sunet impecabil, experiență completă.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 px-6 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-[1px] bg-zinc-900">
            {[
              {
                icon: Music,
                title: 'Live Performance',
                desc: 'Band complet de instrumentiști cu echipament premium și experiență vastă pe scene de orice dimensiune.'
              },
              {
                icon: Users,
                title: 'Artist Features',
                desc: 'Colaborări cu cei mai apreciați artiști creștini din România pentru evenimente de neuitat.'
              },
              {
                icon: Sparkles,
                title: 'Producție Audio',
                desc: 'Înregistrări studio, mixing și mastering profesional pentru lansări și proiecte speciale.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-black p-12 group hover:bg-zinc-950 transition-colors duration-500"
              >
                <service.icon className="w-10 h-10 mb-6 text-zinc-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="relative py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-20 tracking-tight"
          >
            Recent
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-video bg-zinc-950 overflow-hidden cursor-pointer"
              >
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-zinc-900/40 to-black" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Showcase */}
      <section className="relative py-40 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                Colaborări cu artiști consacrați
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Repertoriu vast, adaptabilitate completă și experiență pe cele mai mari scene din România.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 text-white group"
              >
                <span className="text-lg">Vezi artiștii</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-950 hover:bg-zinc-900 transition-colors duration-500"
                >
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800/10 to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Vorbim?
            </h2>
            <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto">
              Contactează-ne pentru o ofertă personalizată pentru evenimentul tău.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="tel:0736820138"
                className="group relative p-10 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-sm text-zinc-600 mb-3 uppercase tracking-wider">Telefon</p>
                  <p className="text-2xl font-bold">0736 820 138</p>
                  <p className="text-xl text-zinc-400 mt-2">0724 046 665</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="group relative p-10 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-sm text-zinc-600 mb-3 uppercase tracking-wider">Email</p>
                  <p className="text-lg">vreaucuvoi@reverbproject.ro</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-sm">© 2025 Reverb Project. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-zinc-700">
            <span>reverbproject.ro</span>
            <span>București, România</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
