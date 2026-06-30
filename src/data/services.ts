export interface Service {
  id: string;
  category: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  image: string;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  { id: 'cascade-haircut', category: 'Женские стрижки', name: 'Стрижка Каскад', description: 'Женская стрижка с мягкой многослойной формой.', price: 'от 1 500 ₽', image: '/images/services/cascade-haircut.jpg', popular: true },
  { id: 'bob-haircut', category: 'Женские стрижки', name: 'Стрижка Каре', description: 'Классическая женская стрижка с аккуратной геометрией.', price: 'от 1 100 ₽', image: '/images/services/bob-haircut.jpg' },
  { id: 'short-womens-haircut', category: 'Женские стрижки', name: 'Короткая стрижка', description: 'Короткая женская стрижка с индивидуальной формой.', price: 'от 800 ₽', image: '/images/services/short-womens-haircut.jpg' },
  { id: 'mens-haircut', category: 'Мужские стрижки', name: 'Мужская стрижка', description: 'Аккуратная мужская стрижка с чистым контуром.', price: 'от 600 ₽', image: '/images/services/mens-haircut.jpg', popular: true },
  { id: 'total-blond', category: 'Окрашивания', name: 'Окрашивание Total Blond', description: 'Окрашивание в технике Total Blond.', price: 'от 3 500 ₽', image: '/images/services/total-blond.jpg', popular: true },
  { id: 'airtouch', category: 'Окрашивания', name: 'Окрашивание AirTouch', description: 'Окрашивание AirTouch с мягкими переходами оттенка.', price: 'от 4 500 ₽', image: '/images/services/airtouch.jpg' },
  { id: 'brazilian-coloring', category: 'Окрашивания', name: 'Окрашивание в бразильской технике', description: 'Окрашивание в бразильской технике.', price: 'от 3 500 ₽', image: '/images/services/brazilian-coloring.jpg' },
  { id: 'women-hairdressing', category: 'Парикмахерские услуги', name: 'Женская стрижка', description: 'Парикмахерская услуга для женского образа.', price: 'от 700 ₽', image: '/images/services/women-hairdressing.jpg' },
  { id: 'men-hairdressing', category: 'Парикмахерские услуги', name: 'Мужская стрижка', description: 'Парикмахерская услуга для мужского образа.', price: 'от 600 ₽', image: '/images/services/men-hairdressing.jpg' },
  { id: 'kids-haircut', category: 'Парикмахерские услуги', name: 'Детская стрижка', description: 'Детская стрижка.', image: '/images/services/kids-haircut.jpg' },
  { id: 'beard-trim', category: 'Парикмахерские услуги', name: 'Стрижка бороды', description: 'Стрижка бороды.', image: '/images/services/beard-trim.jpg' },
  { id: 'complex-coloring', category: 'Парикмахерские услуги', name: 'Сложное окрашивание', description: 'Сложное окрашивание.', image: '/images/services/complex-coloring.jpg' },
  { id: 'cold-hair-recovery', category: 'Парикмахерские услуги', name: 'Холодное восстановление волос', description: 'Холодное восстановление волос.', image: '/images/services/cold-hair-recovery.jpg' },
  { id: 'head-spa', category: 'SPA-процедуры', name: 'SPA для головы', description: 'SPA-процедура для головы.', image: '/images/services/head-spa.jpg', popular: true },
];

export const SERVICE_CATEGORIES = ['Все услуги', 'Женские стрижки', 'Мужские стрижки', 'Окрашивания', 'Парикмахерские услуги', 'SPA-процедуры'];