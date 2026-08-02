'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

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
    { label: 'Acasă', href: '#' },
    { label: 'Despre', href: '#about' },
    { label: 'Servicii', href: '#services' },
    { label: 'Media', href: '#media' },
    { label: 'Artiști', href: '#artists' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.header
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'backdrop-blur-xl border-b border-zinc-900/50' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-black tracking-tight"
          >
            REVERB
          </motion.a>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{ delay: isOpen ? i * 0.1 : 0, duration: 0.3 }}
              className="text-3xl font-bold tracking-tight text-white hover:text-zinc-400 transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}

          {/* Contact Info in Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{ delay: isOpen ? navItems.length * 0.1 : 0, duration: 0.3 }}
            className="mt-12 text-center space-y-4"
          >
            <a
              href="tel:0736820138"
              className="block text-sm text-zinc-500 hover:text-white transition-colors"
            >
              0736 820 138
            </a>
            <a
              href="mailto:vreaucuvoi@reverbproject.ro"
              className="block text-sm text-zinc-500 hover:text-white transition-colors"
            >
              vreaucuvoi@reverbproject.ro
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
