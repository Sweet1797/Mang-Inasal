import { MenuItem, Promo } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Paa Large - PM1',
    description: 'Our signature charcoal-grilled chicken leg quarter with our special marinade, served with unlimited rice.',
    price: 155,
    image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?auto=format&fit=crop&q=80&w=800',
    category: 'chicken',
    badges: ['Best Seller', 'Unli Rice'],
    calories: 650,
  },
  {
    id: 'm2',
    name: 'Pecho Large - PM2',
    description: 'Juicy charcoal-grilled chicken breast and wing combo, basted with annatto oil. Comes with unlimited rice.',
    price: 170,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    category: 'chicken',
    badges: ['Best Seller'],
    calories: 710,
  },
  {
    id: 'm3',
    name: 'Pork BBQ - 2pc',
    description: 'Two pieces of sweet and savory Filipino-style pork barbecue skewers.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    category: 'pork',
    badges: ['Classic'],
    calories: 520,
  },
  {
    id: 'm4',
    name: 'Fiesta Halo-Halo',
    description: 'The ultimate Filipino crushed ice dessert with leche flan, ube halaya, sweet beans, and macapuno.',
    price: 110,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800',
    category: 'dessert',
    badges: ['Must Try'],
    calories: 450,
  },
  {
    id: 'm5',
    name: 'Palabok Fiesta',
    description: 'Flavorful rice noodles topped with rich shrimp sauce, crushed chicharon, and hard-boiled egg.',
    price: 125,
    image: 'https://images.unsplash.com/photo-1626200419189-39c8eb00ea65?auto=format&fit=crop&q=80&w=800',
    category: 'noodles',
    calories: 480,
  },
  {
    id: 'm6',
    name: 'Sizzling Sisig',
    description: 'Crispy chopped pork maskara seasoned with calamansi and onions, served sizzling hot.',
    price: 165,
    image: 'https://images.unsplash.com/photo-1626786884639-509aa009d2bc?auto=format&fit=crop&q=80&w=800',
    category: 'pork',
    badges: ['Spicy Option'],
    calories: 680,
    spicy: true,
  },
];

export const promos: Promo[] = [
  {
    id: 'p1',
    title: 'Family Feast Discount',
    description: 'Get ₱200 off on any Family Fiesta Meal bundle this weekend!',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800',
    code: 'FIESTA200',
    expiresInDays: 2,
  },
  {
    id: 'p2',
    title: 'Free Delivery',
    description: 'Enjoy free delivery for a minimum order of ₱500.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    code: 'FREEDEL',
    expiresInDays: 5,
  }
];
