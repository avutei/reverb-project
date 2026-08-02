'use client';

import { motion } from 'framer-motion';
import { Music2, Users, Video, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            REVERB
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#despre" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Despre
            </Link>
            <Link href="#servicii" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Servicii
            </Link>
            <Link href="#media" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Media
            </Link>
            <Link href="#artisti" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Artiști
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1 
            className="text-[12vw] md:text-[10rem] font-bold tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            REVERB
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-3"
          >
            <p className="text-xl md:text-2xl text-zinc-500 font-light tracking-[0.3em] uppercase">
              Project
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-zinc-600">
              <span>BUCUREȘTI</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>ROMÂNIA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight leading-none">
              Band profesionist.<br/>
              <span className="text-zinc-600">Orice artist. Orice scenă.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg text-zinc-400 leading-relaxed">
              <div>
                <p className="mb-6">
                  Reverb Project aduce muzică live de calitate impecabilă pentru evenimente memorabile. 
                  Suntem un band profesionist de instrumentiști care colaborează cu cei mai buni artiști 
                  creștini din România.
                </p>
              </div>
              <div>
                <p>
                  De la nunți intime și conferințe spirituale până la concerte sold-out și evenimente 
                  corporate - oferim experiența sonoră completă cu echipament premium și profesioniști dedicați.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicii" className="py-32 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight"
          >
            Servicii
          </motion.h2>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Music2,
                title: 'Band Live',
                description: 'Instrumentiști profesioniști cu echipament premium pentru orice tip de eveniment'
              },
              {
                icon: Users,
                title: 'Colaborări Artiști',
                description: 'Conexiuni directe cu cei mai apreciați artiști creștini din România'
              },
              {
                icon: Video,
                title: 'Producție Audio',
                description: 'Înregistrări studio, mixing și mastering la standarde internaționale'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative p-10 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
              >
                <service.icon className="w-12 h-12 mb-6 text-zinc-500 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="media" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Experiența Live
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Descoperă momentele noastre pe scenă și calitatea producțiilor audio-video
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Concert Live 2024', duration: '15:30' },
              { title: 'Studio Session', duration: '08:45' },
              { title: 'Corporate Event', duration: '12:20' },
              { title: 'Wedding Highlights', duration: '10:15' }
            ].map((video, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer"
              >
                {/* Placeholder - replace with actual video thumbnails */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-black" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-300">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <p className="font-medium mb-1">{video.title}</p>
                  <p className="text-sm text-zinc-500">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Link 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              Vezi Toate Videoclipurile
              <Youtube className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Artists */}
      <section id="artisti" className="py-32 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Colaborări
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Lucrăm cu cei mai apreciați artiști creștini pentru evenimente de neuitat
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-black group-hover:from-zinc-700/30 transition-all duration-500" />
                {/* Replace with actual artist photos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music2 className="w-12 h-12 text-zinc-700 group-hover:text-zinc-600 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-none">
              Hai să discutăm
            </h2>
            <p className="text-xl text-zinc-500 mb-16 max-w-2xl mx-auto">
              Contactează-ne pentru o ofertă personalizată și să planificăm împreună evenimentul tău
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <a 
                href="tel:0736820138"
                className="group p-10 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
              >
                <Phone className="w-10 h-10 mb-6 mx-auto text-zinc-500 group-hover:text-white transition-colors duration-500" />
                <p className="text-sm text-zinc-600 mb-3 uppercase tracking-wider">Telefon</p>
                <p className="text-2xl font-medium mb-2">0736 820 138</p>
                <p className="text-xl text-zinc-500">0724 046 665</p>
              </a>

              <a 
                href="mailto:vreaucuvoi@reverbproject.ro"
                className="group p-10 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
              >
                <Mail className="w-10 h-10 mb-6 mx-auto text-zinc-500 group-hover:text-white transition-colors duration-500" />
                <p className="text-sm text-zinc-600 mb-3 uppercase tracking-wider">Email</p>
                <p className="text-lg">vreaucuvoi@reverbproject.ro</p>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold tracking-tighter mb-2">REVERB</p>
              <p className="text-sm text-zinc-600">© 2026 Reverb Project. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-zinc-600">
              <Link href="#despre" className="hover:text-white transition-colors">Despre</Link>
              <Link href="#servicii" className="hover:text-white transition-colors">Servicii</Link>
              <Link href="#media" className="hover:text-white transition-colors">Media</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
