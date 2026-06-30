export interface Master {
  id: string;
  name: string;
  specialization: string;
  experience?: string;
  description?: string;
  image?: string;
  skills: string[];
  rating?: number;
}

export const MASTERS: Master[] = [];

export const MASTER_DIRECTIONS = ['Женские стрижки', 'Мужские стрижки', 'Окрашивание', 'Парикмахерские услуги', 'SPA для головы'];