import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Award, Users, Clock } from 'lucide-react';
import { CONTACT_INFO, SALON_INFO } from '../data/config';

// ============================================================
// HERO СЕКЦИЯ
// Замените изображение: public/images/hero/salon-main.jpg
// ============================================================

const FloatingOrb: React.FC<{ className: string; delay?: number }> = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-gradient"
    >
      {/* Decorative Orbs */}
      <FloatingOrb
        className="w-96 h-96 bg-[#DFC28E] -top-20 -left-20"
        delay={0}
      />
      <FloatingOrb
        className="w-64 h-64 bg-[#E8C5BD] top-1/3 -right-10"
        delay={2}
      />
      <FloatingOrb
        className="w-48 h-48 bg-[#C9A96E] bottom-20 left-1/4"
        delay={4}
      />

      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1440 900">
          <line x1="0" y1="200" x2="1440" y2="200" stroke="#C9A96E" strokeWidth="1" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="#C9A96E" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="900" stroke="#C9A96E" strokeWidth="1" />
          <line x1="1200" y1="0" x2="1200" y2="900" stroke="#C9A96E" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center"
            style={{ y, opacity }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 w-fit"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles size={14} className="text-[#C9A96E]" />
              <span className="text-sm text-[#8B8B8B] font-medium tracking-wide">
                {CONTACT_INFO.subtitle}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-5xl md:text-6xl xl:text-7xl font-light text-[#1A1A1A] leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {SALON_INFO.name}{' '}
              <span className="text-gold-gradient font-medium italic">
                {CONTACT_INFO.subtitle.toLowerCase()}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[#8B8B8B] text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {SALON_INFO.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={() => scrollTo('#booking')}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={16} />
                Записаться
              </motion.button>
              <motion.button
                onClick={() => scrollTo('#services')}
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Посмотреть услуги
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Award, value: SALON_INFO.rating, label: 'Рейтинг' },
                { icon: Users, value: SALON_INFO.reviewsNumber, label: 'Оценок' },
                { icon: Clock, value: CONTACT_INFO.workingHours.time, label: CONTACT_INFO.workingHours.days },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C9A96E]/20 to-[#DFC28E]/20 flex items-center justify-center">
                    <stat.icon size={18} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-[#1A1A1A]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8B8B8B]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            className="relative h-[500px] lg:h-[680px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image */}
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
              style={{ scale }}
            >
              {/* 
                ИЗОБРАЖЕНИЕ ГЛАВНОГО ЭКРАНА 
                Замените на: public/images/hero/salon-main.jpg 
              */}
              <img
                src="/images/hero/salon-main.jpg"
                alt="Абьюз Бьюти"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient if image not found
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback gradient - отображается когда нет фото */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2E4E1] via-[#F5F0E8] to-[#DFC28E]/60">
                {/* Decorative elements in fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A96E]/30 to-[#DFC28E]/20 flex items-center justify-center mx-auto">
                      <span className="font-display text-4xl text-[#C9A96E]">✂</span>
                    </div>
                    <p className="text-[#8B8B8B] text-xs px-8 text-center">
                      Добавьте фото:<br/>public/images/hero/salon-main.jpg
                    </p>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#C9A96E]/10" />
                <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-[#E8C5BD]/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#DFC28E]/10 blur-3xl" />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              className="absolute -left-6 top-20 glass rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-[#8B8B8B]">Рейтинг</div>
                  <div className="font-semibold text-[#1A1A1A] text-sm">★★★★★ {SALON_INFO.rating}</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              className="absolute -right-4 bottom-24 glass rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C5BD] to-[#F2E4E1] flex items-center justify-center">
                  <Sparkles size={18} className="text-[#C9A96E]" />
                </div>
                <div>
                  <div className="text-xs text-[#8B8B8B]">График</div>
                  <div className="font-semibold text-[#1A1A1A] text-sm">{CONTACT_INFO.workingHours.time}</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative corner element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#C9A96E]/20 rounded-3xl" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#C9A96E]/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#advantages')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-[#8B8B8B] tracking-widest uppercase">Листайте</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[#C9A96E]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
