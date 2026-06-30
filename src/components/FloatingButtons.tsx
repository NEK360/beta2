import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send, X, Plus } from 'lucide-react';
import { CONTACT_INFO } from '../data/config';

export const FloatingButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const buttons = [
    { icon: <Phone size={20} />, label: 'Позвонить', href: `tel:${CONTACT_INFO.phoneRaw}`, color: 'from-[#1A1A1A] to-[#2D2D2D]' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: CONTACT_INFO.whatsappUrl, color: 'from-[#25D366] to-[#128C7E]' },
    { icon: <Send size={18} />, label: 'Telegram', href: '#contacts', color: 'from-[#0088cc] to-[#0077b5]' },
    { icon: <Send size={18} />, label: 'MAX', href: CONTACT_INFO.maxUrl, color: 'from-[#C9A96E] to-[#DFC28E]' },
  ];

  return (
    <div className="fixed bottom-8 right-6 z-40 flex flex-col items-end gap-3">
      <motion.button onClick={scrollToBooking} className="bg-gradient-to-r from-[#C9A96E] to-[#DFC28E] text-white font-medium px-6 py-3 rounded-full shadow-xl shadow-[#C9A96E]/30 flex items-center gap-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <MessageCircle size={16} /><span className="text-sm hidden sm:inline">Записаться</span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="flex flex-col items-end gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {buttons.map((btn, index) => (
              <motion.a key={btn.label} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`bg-gradient-to-r ${btn.color} text-white rounded-full shadow-xl flex items-center gap-3 px-4 py-3`} initial={{ opacity: 0, x: 30, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 30, scale: 0.8 }} transition={{ delay: index * 0.07 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                {btn.icon}<span className="text-sm font-medium">{btn.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white shadow-xl flex items-center justify-center" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: 'spring' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {isOpen ? <X size={22} /> : <Plus size={22} />}
      </motion.button>
    </div>
  );
};