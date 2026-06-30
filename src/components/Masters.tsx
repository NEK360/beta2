import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles } from 'lucide-react';
import { MASTER_DIRECTIONS } from '../data/masters';

export const Masters: React.FC = () => {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="masters" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">Направления мастеров</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Команда <span className="text-gold-gradient font-medium italic">Абьюз Бьюти</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#8B8B8B] max-w-xl mx-auto">Мастера работают только по актуальным направлениям студии.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {MASTER_DIRECTIONS.map((direction, index) => (
            <motion.div key={direction} className="group p-6 rounded-3xl bg-[#FAF8F5] border border-[#F0E8DC] hover:border-[#C9A96E]/40 transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {direction.includes('SPA') ? <Sparkles size={20} className="text-white" /> : <Scissors size={20} className="text-white" />}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">{direction}</h3>
              <p className="text-[#8B8B8B] text-sm leading-relaxed">По предварительной записи</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <button onClick={scrollToBooking} className="btn-primary">Записаться</button>
        </motion.div>
      </div>
    </section>
  );
};