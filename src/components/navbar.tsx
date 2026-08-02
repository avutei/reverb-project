'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Artists', href: '#artists' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Ultra-minimal Navbar ca Global Records */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-b border-white/[0.03]' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8 flex items-center justify-between">
          {/* Logo - ultra clean */}
          <a
            href="#"
            className="text-lg md:text-xl font-black tracking-[-0.02em] hover:text-zinc-500 transition-colors duration-500"
          >
            REVERB
          </a>

          {/* Desktop Menu - ultra minimal */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 hover:text-white transition-colors duration-500 font-light"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center hover:text-zinc-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu - Full screen minimal */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-black z-40 md:hidden flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 30,
              }}
              transition={{ 
                delay: isOpen ? i * 0.08 : 0, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-3xl font-light tracking-tight text-white hover:text-zinc-600 transition-colors duration-500"
            >
              {item.label}
            </motion.a>
          ))}

          {/* Contact in mobile menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 30,
            }}
            transition={{ 
              delay: isOpen ? navItems.length * 0.08 : 0, 
              duration: 0.6 
            }}
            className="mt-16 text-center space-y-4"
          >
            <a
              href="tel:0736820138"
              className="block text-sm text-zinc-700 hover:text-white transition-colors duration-500 font-light"
            >
              0736 820 138
            </a>
            <a
              href="mailto:vreaucuvoi@reverbproject.ro"
              className="block text-xs text-zinc-800 hover:text-white transition-colors duration-500 font-light"
            >
              vreaucuvoi@reverbproject.ro
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
