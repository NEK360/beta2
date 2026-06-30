import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Sparkles, Heart, Users, Star, Coffee } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'Опытные мастера',
    description: 'Специалисты работают с актуальными направлениями студии и уделяют внимание деталям образа.',
    color: 'from-[#C9A96E]/20 to-[#DFC28E]/10',
    iconColor: 'text-[#C9A96E]',
  },
  {
    icon: Sparkles,
    title: 'Стерильные инструменты',
    description: 'Строгое соблюдение стандартов гигиены. Одноразовые расходники для каждого клиента.',
    color: 'from-[#E8C5BD]/30 to-[#F2E4E1]/20',
    iconColor: 'text-[#C9969A]',
  },
  {
    icon: Heart,
    title: 'Премиальная косметика',
    description: 'Работаем только с профессиональными брендами: Wella, Schwarzkopf, OPI и другими.',
    color: 'from-[#C9A96E]/20 to-[#DFC28E]/10',
    iconColor: 'text-[#C9A96E]',
  },
  {
    icon: Users,
    title: 'Более 5000 клиентов',
    description: 'За годы работы мы помогли тысячам клиентов обрести идеальный образ.',
    color: 'from-[#E8C5BD]/30 to-[#F2E4E1]/20',
    iconColor: 'text-[#C9969A]',
  },
  {
    icon: Star,
    title: 'Индивидуальный подход',
    description: 'Каждый клиент получает персональную консультацию и уникальный подход к своему образу.',
    color: 'from-[#C9A96E]/20 to-[#DFC28E]/10',
    iconColor: 'text-[#C9A96E]',
  },
  {
    icon: Coffee,
    title: 'Уютная атмосфера',
    description: 'Современный интерьер, приятная музыка и вкусный кофе. Отдыхайте, пока мы работаем.',
    color: 'from-[#E8C5BD]/30 to-[#F2E4E1]/20',
    iconColor: 'text-[#C9969A]',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export const Advantages: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="advantages" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F5F0E8] to-transparent rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F2E4E1] to-transparent rounded-full translate-y-24 -translate-x-24" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Почему выбирают нас
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Наши{' '}
            <span className="text-gold-gradient font-medium italic">преимущества</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.color} card-hover border border-white/80 group`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md shadow-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} className={item.iconColor} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-3">
                {item.title}
              </h3>
              <p className="text-[#8B8B8B] text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
