import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PRICE_LIST } from '../data/prices';

// ============================================================
// ПРАЙС-ЛИСТ
// Все цены хранятся в src/data/prices.ts
// ============================================================

export const PriceList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(PRICE_LIST[0].id);

  const activeData = PRICE_LIST.find(c => c.id === activeCategory);

  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prices" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-[#F5F0E8] to-transparent rounded-full opacity-60" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-[#F2E4E1] to-transparent rounded-full opacity-40" />
      </div>

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
            Стоимость услуг
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Полный{' '}
            <span className="text-gold-gradient font-medium italic">прайс-лист</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#8B8B8B] max-w-md mx-auto">
            Прозрачные цены без скрытых платежей. Окончательная стоимость уточняется на консультации.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Category Sidebar */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {PRICE_LIST.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white shadow-lg shadow-[#C9A96E]/30'
                    : 'bg-[#FAF8F5] text-[#2D2D2D] hover:bg-[#F5F0E8]'
                }`}
                whileHover={{ x: activeCategory === category.id ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium text-sm">{category.category}</span>
              </motion.button>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <div className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-2xl text-white">
                <p className="font-display text-lg mb-2">Нужна консультация?</p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Бесплатно подберём услуги именно для вас
                </p>
                <button
                  onClick={scrollToBooking}
                  className="w-full btn-primary text-sm"
                >
                  Записаться
                </button>
              </div>
            </div>
          </motion.div>

          {/* Price Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#F0E8DC]"
            >
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] px-8 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{activeData?.icon}</span>
                  <h3 className="font-display text-xl text-white font-medium">
                    {activeData?.category}
                  </h3>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-[#F0E8DC]">
                {activeData?.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between px-8 py-5 hover:bg-white transition-colors duration-200 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {item.popular && (
                        <Sparkles size={14} className="text-[#C9A96E] flex-shrink-0" />
                      )}
                      <div>
                        <span className="text-[#1A1A1A] font-medium group-hover:text-[#C9A96E] transition-colors duration-200">
                          {item.name}
                        </span>
                        {!item.price && (
                          <div className="text-xs text-[#8B8B8B] mt-0.5">По предварительной записи</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        {item.price && (
                          <span className="font-display text-lg font-semibold text-gold-gradient whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                      <motion.button
                        onClick={scrollToBooking}
                        className="opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white text-xs px-4 py-2 rounded-full transition-opacity duration-200 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Записаться
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="px-8 py-5 bg-[#F5F0E8] border-t border-[#F0E8DC]">
                <p className="text-[#8B8B8B] text-sm">
                  * Цены являются ориентировочными. Точная стоимость определяется на консультации у мастера.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
