import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';

// ============================================================
// БЛОК УСЛУГ
// Фотографии услуг: public/images/services/
// ============================================================

const ServiceCard: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md shadow-black/5 card-hover border border-[#F5F0E8]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white text-xs font-medium px-3 py-1 rounded-full">
          Популярное
        </div>
      )}

      {/* Image */}
      {/* Фон меняется в зависимости от категории */}
      <div className={`relative h-52 overflow-hidden ${
        service.category === 'Мужские стрижки' ? 'bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0]' :
        service.category === 'Окрашивания' ? 'bg-gradient-to-br from-[#F5F0E8] to-[#DFC28E]/40' :
        service.category === 'SPA-процедуры' ? 'bg-gradient-to-br from-[#F2E4E1] to-[#E8C5BD]' :
        'bg-gradient-to-br from-[#F5F0E8] to-[#F2E4E1]'
      }`}>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Fallback - красивый градиент когда нет фото */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center mx-auto mb-2">
              <span className="text-3xl opacity-60">✂</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-[#C9A96E] font-medium tracking-wider uppercase mb-1">
              {service.category}
            </p>
            <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">
              {service.name}
            </h3>
          </div>
        </div>

        <p className="text-[#8B8B8B] text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-[#F5F0E8]">
          <div>
            {service.duration && (
              <div className="text-xs text-[#8B8B8B] mb-1 flex items-center gap-1">
                <Clock size={12} />
                {service.duration}
              </div>
            )}
            {service.price ? (
              <div className="font-display text-xl font-semibold text-gold-gradient">
                {service.price}
              </div>
            ) : (
              <div className="text-sm text-[#8B8B8B]">По предварительной записи</div>
            )}
          </div>

          <motion.button
            onClick={scrollToBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white text-sm font-medium px-5 py-2.5 rounded-full"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            Записаться
            <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все услуги');
  const [showAll, setShowAll] = useState(false);

  const filteredServices = activeCategory === 'Все услуги'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 9);

  return (
    <section id="services" className="py-24 bg-cream-gradient relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Что мы предлагаем
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Наши{' '}
            <span className="text-gold-gradient font-medium italic">услуги</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#8B8B8B] max-w-xl mx-auto text-base leading-relaxed">
            Полный спектр услуг красоты. От классических стрижек до сложного окрашивания — 
            мы воплощаем любые идеи.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white shadow-lg shadow-[#C9A96E]/30'
                  : 'bg-white text-[#8B8B8B] hover:text-[#C9A96E] border border-[#E8E0D6]'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {displayedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {filteredServices.length > 9 && !showAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Показать все услуги
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
