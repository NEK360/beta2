import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, User, Phone, Mail, Scissors, Calendar, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/services';
import { MASTERS } from '../data/masters';
// ============================================================
// EMAIL НАСТРОЙКИ
// Используйте EmailJS: https://emailjs.com
// 1. Зарегистрируйтесь на emailjs.com
// 2. Создайте Service и Template
// 3. Замените данные в src/data/config.ts (EMAIL_CONFIG)
// 4. Раскомментируйте import и вызов send() ниже
// ============================================================
// import emailjs from '@emailjs/browser';
// import { EMAIL_CONFIG } from '../data/config';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  master: string;
  date: string;
  time: string;
  comment: string;
}

interface FormErrors {
  [key: string]: string;
}

const AVAILABLE_TIMES = [
  '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30',
];

const InputField: React.FC<{
  icon: React.ReactNode;
  label: string;
  error?: string;
  children: React.ReactNode;
}> = ({ icon, label, error, children }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium text-[#2D2D2D] flex items-center gap-2">
      <span className="text-[#C9A96E]">{icon}</span>
      {label}
    </label>
    {children}
    {error && (
      <motion.p
        className="text-red-400 text-xs flex items-center gap-1"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {error}
      </motion.p>
    )}
  </div>
);

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    master: '',
    date: '',
    time: '',
    comment: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный номер телефона';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.service) newErrors.service = 'Выберите услугу';
    if (!formData.date) newErrors.date = 'Выберите дату';
    if (!formData.time) newErrors.time = 'Выберите время';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // ============================================================
      // ОТПРАВКА EMAIL ЧЕРЕЗ EMAILJS
      // Раскомментируйте и настройте:
      // ============================================================
      // await emailjs.send(
      //   EMAIL_CONFIG.serviceId,
      //   EMAIL_CONFIG.templateId,
      //   {
      //     to_email: EMAIL_CONFIG.ownerEmail,
      //     from_name: formData.name,
      //     from_phone: formData.phone,
      //     from_email: formData.email || 'не указан',
      //     service: formData.service,
      //     master: formData.master || 'Любой мастер',
      //     date: formData.date,
      //     time: formData.time,
      //     comment: formData.comment || 'нет комментария',
      //   },
      //   EMAIL_CONFIG.publicKey
      // );

      // Simulation delay (удалите при реальной отправке)
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormData({
        name: '', phone: '', email: '', service: '',
        master: '', date: '', time: '', comment: '',
      });
    } catch (error) {
      setSubmitError('Ошибка отправки. Пожалуйста, позвоните нам напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Today's date for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 bg-cream-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#DFC28E]/20 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#E8C5BD]/20 to-transparent rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Онлайн-запись
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            Записаться{' '}
            <span className="text-gold-gradient font-medium italic">онлайн</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#8B8B8B] max-w-md mx-auto">
            Заполните форму, и мы свяжемся с вами для подтверждения записи в течение 30 минут.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-[2rem] shadow-2xl shadow-black/5 overflow-hidden border border-[#F5F0E8]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center">
                <Scissors size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Запись на услугу</h3>
                <p className="text-white/50 text-sm">Мы перезвоним в течение 30 минут</p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              // Success State
              <motion.div
                key="success"
                className="p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                >
                  <CheckCircle2 size={48} className="text-white" />
                </motion.div>
                <h3 className="font-display text-3xl font-semibold text-[#1A1A1A] mb-4">
                  Спасибо!
                </h3>
                <p className="text-[#8B8B8B] text-lg mb-8 leading-relaxed">
                  Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время для подтверждения записи.
                </p>
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Записаться ещё раз
                </motion.button>
              </motion.div>
            ) : (
              // Form State
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <InputField
                    icon={<User size={15} />}
                    label="Ваше имя *"
                    error={errors.name}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className={`input-luxury ${errors.name ? 'border-red-300 focus:border-red-400' : ''}`}
                    />
                  </InputField>

                  {/* Phone */}
                  <InputField
                    icon={<Phone size={15} />}
                    label="Телефон *"
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className={`input-luxury ${errors.phone ? 'border-red-300 focus:border-red-400' : ''}`}
                    />
                  </InputField>

                  {/* Email */}
                  <InputField
                    icon={<Mail size={15} />}
                    label="Email"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                      className={`input-luxury ${errors.email ? 'border-red-300 focus:border-red-400' : ''}`}
                    />
                  </InputField>

                  {/* Service */}
                  <InputField
                    icon={<Scissors size={15} />}
                    label="Услуга *"
                    error={errors.service}
                  >
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`input-luxury appearance-none pr-10 ${errors.service ? 'border-red-300' : ''}`}
                      >
                        <option value="">Выберите услугу</option>
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B] pointer-events-none" />
                    </div>
                  </InputField>

                  {MASTERS.length > 0 && (
                    <InputField icon={<User size={15} />} label="Мастер">
                      <div className="relative">
                        <select name="master" value={formData.master} onChange={handleChange} className="input-luxury appearance-none pr-10">
                          <option value="">Выберите мастера</option>
                          {MASTERS.map(m => <option key={m.id} value={m.name}>{m.name} — {m.specialization}</option>)}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B] pointer-events-none" />
                      </div>
                    </InputField>
                  )}

                  {/* Date */}
                  <InputField
                    icon={<Calendar size={15} />}
                    label="Дата *"
                    error={errors.date}
                  >
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`input-luxury ${errors.date ? 'border-red-300' : ''}`}
                    />
                  </InputField>

                  {/* Time */}
                  <InputField
                    icon={<Clock size={15} />}
                    label="Время *"
                    error={errors.time}
                  >
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`input-luxury appearance-none pr-10 ${errors.time ? 'border-red-300' : ''}`}
                      >
                        <option value="">Выберите время</option>
                        {AVAILABLE_TIMES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8B8B] pointer-events-none" />
                    </div>
                  </InputField>

                  {/* Comment */}
                  <div className="md:col-span-2">
                    <InputField
                      icon={<MessageSquare size={15} />}
                      label="Комментарий"
                    >
                      <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Пожелания, особые требования, вопросы к мастеру..."
                        rows={3}
                        className="input-luxury resize-none"
                      />
                    </InputField>
                  </div>
                </div>

                {/* Submit Error */}
                {submitError && (
                  <motion.div
                    className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {submitError}
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[#8B8B8B] text-xs text-center sm:text-left">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-[#C9A96E] hover:underline">политикой конфиденциальности</a>
                  </p>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2 min-w-48 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={isSubmitting ? {} : { scale: 1.05 }}
                    whileTap={isSubmitting ? {} : { scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Записаться
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
