import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SALON_INFO } from '../data/config';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream-gradient relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-10"><Quote size={120} className="text-[#C9A96E]" /></div>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">Рейтинг студии</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            {SALON_INFO.name} <span className="text-gold-gradient font-medium italic">в оценках клиентов</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="bg-white rounded-[2rem] border border-[#F0E8DC] shadow-xl shadow-black/5 p-10 md:p-14 text-center" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="font-display text-7xl md:text-8xl font-semibold text-gold-gradient mb-4">{SALON_INFO.rating}</div>
          <div className="flex justify-center gap-1.5 mb-5" aria-label={`Рейтинг ${SALON_INFO.rating}`}>
            {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#C9A96E] text-[#C9A96E]" />)}
          </div>
          <p className="text-[#1A1A1A] text-xl font-medium mb-2">{SALON_INFO.reviewsCount}</p>
          <p className="text-[#8B8B8B]">{SALON_INFO.description}</p>
        </motion.div>
      </div>
    </section>
  );
};