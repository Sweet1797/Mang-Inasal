export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'chicken' | 'pork' | 'noodles' | 'dessert' | 'drinks' | 'family';
  badges?: string[];
  calories?: number;
  spicy?: boolean;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  image: string;
  code: string;
  expiresInDays: number;
}
