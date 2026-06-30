export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const REVIEWS: Review[] = [];