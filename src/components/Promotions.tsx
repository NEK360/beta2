import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Percent, Clock } from 'lucide-react';
import { PROMOTIONS } from '../data/promotions';

// ============================================================
// БЛОК АКЦИЙ
// Данные: src/data/promotions.ts
// ============================================================

const iconMap: Record<string, React.ReactNode> = {
  'Акция': <Percent size={24} />,
  'Комплекс': <Tag size={24} />,
  'Ноябрь': <Clock size={24} />,
};

export const Promotions: React.FC = () => {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="promotions" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A96E 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C9A96E]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Специальные предложения
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Акции и{' '}
            <span className="text-gold-gradient font-medium italic">скидки</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMOTIONS.map((promo, index) => (
            <motion.div
              key={promo.id}
              className="relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:from-white/10 hover:to-white/5 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              onClick={scrollToBooking}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  {/* Badge + Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center text-white">
                      {iconMap[promo.badge] || <Tag size={24} />}
                    </div>
                    <span className="text-xs font-medium text-[#C9A96E] tracking-wider uppercase bg-[#C9A96E]/10 px-3 py-1 rounded-full border border-[#C9A96E]/20">
                      {promo.badge}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  {promo.discount && (
                    <div className="text-right">
                      <div className="font-display text-3xl font-bold text-white">{promo.discount}</div>
                    </div>
                  )}
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  {promo.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {promo.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Clock size={12} />
                    {promo.validUntil}
                  </div>
                  <motion.div
                    className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 3 }}
                  >
                    Воспользоваться
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-3xl border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/30 transition-all duration-500" />

              {/* Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C9A96E]/10 rounded-full blur-2xl group-hover:bg-[#C9A96E]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
