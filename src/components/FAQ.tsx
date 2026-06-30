import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/promotions';

// ============================================================
// БЛОК FAQ
// Данные: src/data/promotions.ts (FAQ_ITEMS)
// ============================================================

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Вопрос — Ответ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Часто задаваемые{' '}
            <span className="text-gold-gradient font-medium italic">вопросы</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="border border-[#F0E8DC] rounded-2xl overflow-hidden hover:border-[#C9A96E]/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#FAF8F5] transition-colors duration-200"
                onClick={() => toggle(item.id)}
              >
                <span className={`font-medium text-base transition-colors duration-200 ${
                  openId === item.id ? 'text-[#C9A96E]' : 'text-[#1A1A1A]'
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === item.id
                    ? 'bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] text-white rotate-0'
                    : 'bg-[#F5F0E8] text-[#8B8B8B]'
                }`}>
                  {openId === item.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#8B8B8B] text-sm leading-relaxed border-t border-[#F0E8DC] pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[#8B8B8B] mb-4">Не нашли ответ на свой вопрос?</p>
          <a
            href="tel:+79887009060"
            className="btn-primary inline-flex items-center gap-2"
          >
            Позвоните нам
          </a>
        </motion.div>
      </div>
    </section>
  );
};
