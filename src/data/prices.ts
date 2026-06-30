export interface PriceItem {
  name: string;
  price?: string;
  popular?: boolean;
}

export interface PriceCategory {
  id: string;
  category: string;
  icon: string;
  items: PriceItem[];
}

export const PRICE_LIST: PriceCategory[] = [
  { id: 'womens-haircuts', category: 'Женские стрижки', icon: '✂', items: [
    { name: 'Стрижка Каскад', price: 'от 1 500 ₽', popular: true },
    { name: 'Стрижка Каре', price: 'от 1 100 ₽' },
    { name: 'Короткая стрижка', price: 'от 800 ₽' },
  ] },
  { id: 'mens-haircuts', category: 'Мужские стрижки', icon: '✂', items: [{ name: 'Мужская стрижка', price: 'от 600 ₽', popular: true }] },
  { id: 'coloring', category: 'Окрашивания', icon: '✦', items: [
    { name: 'Окрашивание Total Blond', price: 'от 3 500 ₽', popular: true },
    { name: 'Окрашивание AirTouch', price: 'от 4 500 ₽' },
    { name: 'Окрашивание в бразильской технике', price: 'от 3 500 ₽' },
  ] },
  { id: 'hairdressing', category: 'Парикмахерские услуги', icon: '✂', items: [
    { name: 'Женская стрижка', price: 'от 700 ₽' },
    { name: 'Мужская стрижка', price: 'от 600 ₽' },
    { name: 'Детская стрижка' },
    { name: 'Стрижка бороды' },
    { name: 'Сложное окрашивание' },
    { name: 'Холодное восстановление волос' },
  ] },
  { id: 'head-spa', category: 'SPA-процедуры', icon: '✦', items: [{ name: 'SPA для головы', popular: true }] },
];