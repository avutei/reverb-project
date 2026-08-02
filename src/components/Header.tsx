'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const menuItems = [
    { label: 'Artists', href: '#artists' },
    { label: 'Releases', href: '#releases' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.h1 
              className="text-xl md:text-2xl font-black tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              REVERB
              <span className="text-zinc-600 group-hover:text-white transition-colors duration-300">
                .
              </span>
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden bg-black z-40 flex flex-col justify-center items-center gap-8"
      >
        {menuItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            className="text-3xl font-bold text-zinc-400 hover:text-white transition-colors"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
