'use client';

import { motion } from 'framer-motion';
import { Music2, Users, Video, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6 max-w-5xl"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            REVERB
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Band Profesionist · București
          </motion.p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight">
                Muzică Live<br />
                <span className="text-zinc-500">Experiență Completă</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Reverb Project este un band profesionist de instrumentiști care colaborează cu 
                artiști creștini din România pentru evenimente memorabile.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                De la nunți și conferințe până la concerte și evenimente corporate - 
                aducem calitate sonoră impecabilă și o experiență muzicală completă.
              </p>
            </div>
            <div className="bg-zinc-900/50 aspect-square rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Music2 className="w-24 h-24 text-zinc-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Servicii</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: 'Band Live',
                desc: 'Instrumentiști profesioniști cu echipament premium'
              },
              {
                icon: Users,
                title: 'Artiști Invitați',
                desc: 'Colaborări cu cei mai buni artiști creștini din România'
              },
              {
                icon: Video,
                title: 'Producție Audio',
                desc: 'Înregistrări studio și mixing profesional'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors"
              >
                <service.icon className="w-12 h-12 mb-4 text-zinc-400" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-zinc-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Media</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-zinc-900 rounded-sm relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-black" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-sm text-zinc-400">Performance {i}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Artiști</h2>
          <p className="text-center text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Colaborăm cu cei mai apreciați artiști creștini din România pentru evenimente 
            de neuitat.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-zinc-900 rounded-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-black group-hover:from-zinc-700/30 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">Să Discutăm</h2>
          <p className="text-zinc-400 text-xl mb-12">
            Contactează-ne pentru o ofertă personalizată
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="tel:0736820138"
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors group"
            >
              <Phone className="w-8 h-8 mb-4 mx-auto text-zinc-400 group-hover:text-white transition-colors" />
              <p className="text-sm text-zinc-500 mb-2">Telefon</p>
              <p className="text-xl font-medium">0736 820 138</p>
              <p className="text-lg text-zinc-400 mt-1">0724 046 665</p>
            </a>
            
            <a 
              href="mailto:vreaucuvoi@reverbproject.ro"
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm hover:border-zinc-700 transition-colors group"
            >
              <Mail className="w-8 h-8 mb-4 mx-auto text-zinc-400 group-hover:text-white transition-colors" />
              <p className="text-sm text-zinc-500 mb-2">Email</p>
              <p className="text-lg">vreaucuvoi@reverbproject.ro</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Reverb Project</p>
          <p className="text-zinc-700 text-sm tracking-wider">reverbproject.ro</p>
        </div>
      </footer>
    </main>
  );
}
