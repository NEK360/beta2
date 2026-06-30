import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CreditCard, Wifi, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/config';

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#C9A96E] text-sm font-medium tracking-[0.2em] uppercase mb-4">Контакты</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-6">
            {CONTACT_INFO.name} <span className="text-gold-gradient font-medium italic">на карте</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div className="space-y-5" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <InfoBlock icon={<MapPin size={20} />} title="Адрес">
              <p>{CONTACT_INFO.addressShort}</p>
              <p>{CONTACT_INFO.city}, 355032</p>
              <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#C9A96E] text-sm inline-flex items-center gap-1 mt-2 hover:underline">
                Открыть в 2ГИС <ExternalLink size={13} />
              </a>
            </InfoBlock>

            <InfoBlock icon={<Phone size={20} />} title="Связь">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-[#C9A96E] font-medium hover:underline">{CONTACT_INFO.phone}</a>
              <div className="flex flex-wrap gap-3 mt-3">
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-[#F5F0E8] hover:bg-[#C9A96E] hover:text-white transition-colors">WhatsApp</a>
                <span className="text-sm px-4 py-2 rounded-full bg-[#F5F0E8]">Telegram: {CONTACT_INFO.telegramLabel}</span>
                <a href={CONTACT_INFO.maxUrl} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-[#F5F0E8] hover:bg-[#C9A96E] hover:text-white transition-colors">MAX</a>
              </div>
            </InfoBlock>

            <InfoBlock icon={<Clock size={20} />} title="График работы">
              <p>{CONTACT_INFO.workingHours.days}</p>
              <p className="font-medium text-[#1A1A1A]">{CONTACT_INFO.workingHours.time}</p>
              <p>{CONTACT_INFO.workingHours.note}</p>
            </InfoBlock>

            <InfoBlock icon={<CreditCard size={20} />} title="Способы оплаты">
              {CONTACT_INFO.paymentMethods.map((method) => <p key={method}>{method}</p>)}
            </InfoBlock>

            <InfoBlock icon={<Wifi size={20} />} title="Дополнительно">
              {CONTACT_INFO.additional.map((item) => <p key={item}>{item}</p>)}
            </InfoBlock>
          </motion.div>

          <motion.div className="relative rounded-3xl overflow-hidden min-h-[500px] bg-[#FAF8F5] border border-[#F0E8DC]" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div>
                <MapPin size={42} className="text-[#C9A96E] mx-auto mb-5" />
                <h3 className="font-display text-3xl text-[#1A1A1A] mb-3">{CONTACT_INFO.name}</h3>
                <p className="text-[#8B8B8B] mb-6">{CONTACT_INFO.address}</p>
                <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                  Открыть карту 2ГИС <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex gap-4 p-6 bg-[#FAF8F5] rounded-2xl border border-[#F0E8DC] hover:border-[#C9A96E]/30 transition-colors duration-300">
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#DFC28E] flex items-center justify-center flex-shrink-0 text-white">{icon}</div>
    <div className="text-[#8B8B8B] text-sm leading-relaxed">
      <h3 className="font-semibold text-[#1A1A1A] mb-1">{title}</h3>
      {children}
    </div>
  </div>
);