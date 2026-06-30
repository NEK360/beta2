import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scissors } from 'lucide-react';
import { CONTACT_INFO } from '../data/config';

const NAV_ITEMS = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#prices' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Акции', href: '#promotions' },
  { label: 'Контакты', href: '#contacts' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const magnetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-black/5 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo('#hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center">
              <Scissors size={14} className="text-white rotate-45" />
            </div>
            <div>
              <span className="font-display text-xl font-semibold text-[#1A1A1A] tracking-wide">{CONTACT_INFO.name}</span>
              <span className="block text-[10px] text-[#C9A96E] tracking-[0.2em] uppercase">{CONTACT_INFO.subtitle}</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="hover-underline text-[#2D2D2D] text-sm font-medium tracking-wide transition-colors hover:text-[#C9A96E] font-body"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="text-sm text-[#8B8B8B] font-medium hover:text-[#C9A96E] transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {CONTACT_INFO.phone}
            </motion.a>
            <motion.button
              ref={magnetRef}
              onClick={() => scrollTo('#booking')}
              className="btn-primary text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-xl glass"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} className="text-[#1A1A1A]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} className="text-[#1A1A1A]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 glass-dark flex flex-col pt-24 px-8 pb-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-left text-white text-lg font-medium hover:text-[#DFC28E] transition-colors font-display"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="block text-center text-[#DFC28E] text-lg font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
                <button
                  onClick={() => scrollTo('#booking')}
                  className="btn-primary w-full text-center"
                >
                  Записаться
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
