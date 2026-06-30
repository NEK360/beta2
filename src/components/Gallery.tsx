import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================================
// ГАЛЕРЕЯ РАБОТ
// Добавьте фотографии в public/images/gallery/
// и обновите список ниже
// ============================================================

// ============================================================
// ИЗОБРАЖЕНИЯ ГАЛЕРЕИ
// Добавьте фото в public/images/gallery/work-N.jpg
// Текущие фото взяты из загруженных пользователем изображений
// ============================================================
const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/work-1.jpg', alt: 'Абьюз Бьюти — интерьер', category: 'Интерьер' },
  { id: 2, src: '/images/gallery/work-2.jpg', alt: 'Тотал блонд', category: 'Окрашивание' },
  { id: 3, src: '/images/gallery/work-3.jpg', alt: 'Стрижка каре', category: 'Стрижки' },
  { id: 4, src: '/images/gallery/work-4.jpg', alt: 'Мужская стрижка', category: 'Стрижки' },
  { id: 5, src: '/images/gallery/work-5.jpg', alt: 'Серебристое окрашивание', category: 'Окрашивание' },
  { id: 6, src: '/images/gallery/work-6.jpg', alt: 'Платиновый блонд', category: 'Окрашивание' },
  { id: 7, src: '/images/gallery/work-7.jpg', alt: 'Брондирование', category: 'Окрашивание' },
  { id: 8, src: '/images/gallery/work-8.jpg', alt: 'Рыжее каре', category: 'Окрашивание' },
  { id: 9, src: '/images/gallery/work-9.jpg', alt: 'Чёрные волнистые волосы', category: 'Окрашивания' },
  { id: 10, src: '/images/gallery/work-10.jpg', alt: 'Балаяж', category: 'Окрашивание' },
  { id: 11, src: '/images/gallery/work-11.jpg', alt: 'Работа с волосами', category: 'Стрижки' },
  { id: 12, src: '/images/gallery/work-12.jpg', alt: 'Каскадная стрижка', category: 'Стрижки' },
];

// Fallback градиенты для отображения без фото
const FALLBACK_GRADIENTS = [
  'from-[#F2E4E1] to-[#E8C5BD]',
  'from-[#F5F0E8] to-[#DFC28E]/40',
  'from-[#FAF8F5] to-[#F2E4E1]',
  'from-[#E8C5BD] to-[#C9A96E]/30',
  'from-[#F5F0E8] to-[#E8C5BD]',
  'from-[#FAF8F5] to-[#DFC28E]/20',
];

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Все');

  const categories = ['Все', 'Интерьер', 'Стрижки', 'Окрашивания'];
  const filteredImages = activeFilter === 'Все'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const navigate = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    const total = filteredImages.length;
    if (direction === 'prev') {
      setLightboxIndex((lightboxIndex - 1 + total) % total);
    } else {
      setLightboxIndex((lightboxIndex + 1) % total);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Наши работы
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Портфолио{' '}
            <span className="text-gold-gradient font-medium italic">мастеров</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-2 md:columns-3 gap-4"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setLightboxIndex(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]}`}
                style={{ minHeight: index % 3 === 0 ? '280px' : index % 3 === 1 ? '220px' : '250px' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-between p-4">
                  <div>
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <p className="text-white/60 text-xs">{image.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              className="max-w-4xl max-h-[85vh] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${FALLBACK_GRADIENTS[lightboxIndex % FALLBACK_GRADIENTS.length]} min-w-[300px] min-h-[300px]`}>
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <p className="text-center text-white/60 text-sm mt-4">
                {filteredImages[lightboxIndex].alt} — {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
