export interface Promotion {
  id: string;
  badge: string;
  title: string;
  description: string;
  discount?: string;
  validUntil?: string;
  color: string;
  accentColor: string;
}

export const PROMOTIONS: Promotion[] = [
  { id: 'promo-haircut-coloring', badge: 'Комплекс', title: 'Стрижка и окрашивание', description: 'Комплекс для обновления формы и цвета волос.', color: 'from-amber-50 to-yellow-50', accentColor: 'text-amber-600' },
];

export const FAQ_ITEMS = [
  { id: 'faq-1', question: 'Как записаться на приём?', answer: 'Вы можете записаться через форму на сайте, позвонить по телефону +7 988 700-90-60 или написать в WhatsApp. Приём ведётся по предварительной записи.' },
  { id: 'faq-2', question: 'Какой график работы?', answer: 'Абьюз Бьюти работает ежедневно с 10:00 до 20:00. Приём ведётся по предварительной записи.' },
  { id: 'faq-3', question: 'Какие услуги доступны?', answer: 'Доступны женские стрижки, мужские стрижки, окрашивания, парикмахерские услуги и SPA для головы.' },
  { id: 'faq-4', question: 'Какие способы оплаты доступны?', answer: 'Доступны наличный расчёт и перевод с карты.' },
  { id: 'faq-5', question: 'Есть ли Wi-Fi для клиентов?', answer: 'Да, для клиентов доступен Wi-Fi.' },
];