import React from 'react';
import { Scissors, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/config';

const NAV_LINKS = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#prices' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Акции', href: '#promotions' },
  { label: 'Контакты', href: '#contacts' },
];

const FOOTER_SERVICES = ['Женские стрижки', 'Мужские стрижки', 'Окрашивания', 'Парикмахерские услуги', 'SPA для головы'];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center"><Scissors size={16} className="text-white rotate-45" /></div>
              <div><span className="font-display text-xl font-semibold text-white tracking-wide">{CONTACT_INFO.name}</span><div className="text-[#C9A96E] text-sm">{CONTACT_INFO.subtitle}</div></div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{CONTACT_INFO.workingHours.days} {CONTACT_INFO.workingHours.time}. {CONTACT_INFO.workingHours.note}.</p>
            <div className="flex gap-3">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all duration-300" aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href={CONTACT_INFO.maxUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all duration-300" aria-label="MAX"><Send size={16} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wider uppercase">Навигация</h3>
            <ul className="space-y-3">{NAV_LINKS.map((link) => <li key={link.href}><button onClick={() => scrollTo(link.href)} className="text-white/50 hover:text-[#C9A96E] text-sm transition-colors">{link.label}</button></li>)}</ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wider uppercase">Услуги</h3>
            <ul className="space-y-3">{FOOTER_SERVICES.map((service) => <li key={service}><button onClick={() => scrollTo('#services')} className="text-white/50 hover:text-[#C9A96E] text-sm transition-colors">{service}</button></li>)}</ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm tracking-wider uppercase">Контакты</h3>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-start gap-3"><MapPin size={16} className="text-[#C9A96E] flex-shrink-0 mt-0.5" /><span>{CONTACT_INFO.address}</span></li>
              <li><a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors"><Phone size={16} className="text-[#C9A96E] flex-shrink-0" />{CONTACT_INFO.phone}</a></li>
              <li className="flex items-start gap-3"><Clock size={16} className="text-[#C9A96E] flex-shrink-0 mt-0.5" /><div><div>{CONTACT_INFO.workingHours.days}</div><div>{CONTACT_INFO.workingHours.time}</div><div>{CONTACT_INFO.workingHours.note}</div></div></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} {CONTACT_INFO.name}. Все права защищены.</p>
          <div className="flex items-center gap-6"><a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Политика конфиденциальности</a></div>
        </div>
      </div>
    </footer>
  );
};