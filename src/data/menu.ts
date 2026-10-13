import type { MenuItem, MenuCategory } from '../types';

// Menu Categories
export const menuCategories: MenuCategory[] = [
  { id: 'kebabs', name: 'Kebabs', order: 1 },
  { id: 'sandwichs', name: 'Sandwichs', order: 2 },
  { id: 'tacos', name: 'Tacos', order: 3 },
  { id: 'burgers', name: 'Burgers', order: 4 },
  { id: 'assiettes', name: 'Assiettes', order: 5 },
  { id: 'paninis', name: 'Paninis', order: 6 },
  { id: 'formules', name: 'Formules', order: 7 },
  { id: 'salades', name: 'Salades', order: 8 },
  { id: 'accompagnements', name: 'Accompagnements', order: 9 },
  { id: 'desserts', name: 'Desserts', order: 10 },
  { id: 'boissons', name: 'Boissons', order: 11 },
];

// Menu Items - Prices from Uber Eats (verified)
export const menuItems: MenuItem[] = [
  // ===== FEATURED ITEMS =====
  {
    id: 'sandwich-kebab',
    name: 'Sandwich au Kebab',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, kebab, frites À L\'INTÉRIEUR du sandwich. Le sandwich est servi avec les frites !',
    price: 12.00,
    uberEatsPrice: 12.00,
    image: '/images/products/sandwich-kebab.webp',
    isFeatured: true,
    isPopular: true,
    tags: ['phare', 'recommandé'],
    available: true,
    order: 1,
  },
  {
    id: 'tacos-1-viande',
    name: 'Tacos 1 Viande',
    category: 'tacos',
    description: 'Galette de blé, viande au choix (kebab, steak, poulet), frites, sauce, crudités.',
    price: 12.00,
    uberEatsPrice: 12.00,
    image: '/images/products/tacos-1-viande.webp',
    isFeatured: true,
    isPopular: true,
    tags: ['phare', 'recommandé'],
    available: true,
    order: 2,
  },
  {
    id: 'assiette-kebab',
    name: 'Assiette Kebab',
    category: 'assiettes',
    description: 'Viande kebab, accompagnements (frites, riz, ou salade), sauce.',
    price: 16.90,
    uberEatsPrice: 16.90,
    image: '/images/products/assiette-kebab.webp',
    isFeatured: true,
    isPopular: true,
    tags: ['phare', 'recommandé'],
    available: true,
    order: 3,
  },
  {
    id: 'cheese-burger',
    name: 'Cheese Burger',
    category: 'burgers',
    description: 'Pain, steak, cheddar, crudités, sauce burger.',
    price: 9.90,
    uberEatsPrice: 9.90,
    image: '/images/products/cheese-burger.webp',
    isFeatured: true,
    isPopular: true,
    tags: ['phare'],
    available: true,
    order: 4,
  },
  {
    id: 'sandwich-steak-du-boucher',
    name: 'Sandwich Steak du Boucher',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, steak du boucher (100g), frites À L\'INTÉRIEUR du sandwich.',
    price: 12.00,
    uberEatsPrice: 12.00,
    image: '/images/products/sandwich-steak.webp',
    isFeatured: true,
    tags: ['phare'],
    available: true,
    order: 5,
  },
  
  // ===== NEW ITEMS - Poulet Crousty =====
  {
    id: 'poulet-crousty',
    name: 'Poulet Crousty',
    category: 'formules',
    description: 'Découvrez notre Crousty avec notre riz du Cambodge élu meilleur riz du monde 2025, accompagné de nos tenders avec notre sauce Crousty faite MAISON ainsi que l\'aigre douce, oignons frits et de la ciboule.',
    price: 11.60,
    uberEatsPrice: 11.60,
    image: '/images/products/poulet-crousty.webp',
    isNew: true,
    isFeatured: true,
    tags: ['nouveau'],
    available: true,
    order: 6,
  },
  {
    id: 'poulet-crousty-xl',
    name: 'Poulet Crousty XL',
    category: 'formules',
    description: 'Version XL avec plus de tenders et accompagnements. Découvrez notre Crousty avec notre riz du Cambodge élu meilleur riz du monde 2025, accompagné de nos tenders avec notre sauce Crousty faite MAISON ainsi que l\'aigre douce, oignons frits et de la ciboule.',
    price: 16.80,
    uberEatsPrice: 16.80,
    image: '/images/products/poulet-crousty-xl.webp',
    isNew: true,
    isPopular: true,
    isFeatured: true,
    tags: ['nouveau', 'populaire'],
    available: true,
    order: 7,
  },
  {
    id: 'menu-poulet-crousty',
    name: 'Menu Poulet Crousty',
    category: 'formules',
    description: 'Découvrez notre poulet Crousty avec son riz du Cambodge élu meilleur riz du monde 2025, accompagné de tenders et de sa sauce Crousty faite MAISON ainsi que la sauce aigre douce, oignons frits et oignon nouveau.',
    price: 11.60,
    uberEatsPrice: 11.60,
    image: '/images/products/menu-poulet-crousty.webp',
    isNew: true,
    isFeatured: false,
    tags: ['nouveau'],
    available: true,
    order: 8,
  },
  
  // ===== SANDWICHS =====
  {
    id: 'sandwich-kebab-special',
    name: 'Sandwich au Kebab Spécial',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, kebab, cheddar, œuf sur le plat, frites À L\'INTÉRIEUR du sandwich.',
    price: 15.00,
    uberEatsPrice: 15.00,
    image: '/images/products/sandwich-kebab-special.webp',
    isFeatured: false,
    isPopular: true,
    tags: ['spécial'],
    available: true,
    order: 10,
  },
  {
    id: 'sandwich-double-steak',
    name: 'Sandwich Double Steak',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, 2 steaks du boucher (100g x 2), frites À L\'INTÉRIEUR du sandwich.',
    price: 15.00,
    uberEatsPrice: 15.00,
    image: '/images/products/sandwich-double-steak.webp',
    isFeatured: false,
    available: true,
    order: 11,
  },
  {
    id: 'sandwich-merguez',
    name: 'Sandwich Merguez',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, 2 merguez, frites À L\'INTÉRIEUR du sandwich.',
    price: 12.00,
    uberEatsPrice: 12.00,
    image: '/images/products/sandwich-merguez.webp',
    isFeatured: false,
    available: true,
    order: 12,
  },
  {
    id: 'sandwich-falafel-vegetarien',
    name: 'Sandwich Falafel Végétarien',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, galette de pois chiche, frites À L\'INTÉRIEUR du sandwich.',
    price: 11.80,
    uberEatsPrice: 11.80,
    image: '/images/products/sandwich-falafel.webp',
    isFeatured: false,
    tags: ['végétarien'],
    available: true,
    order: 13,
  },
  {
    id: 'sandwich-mix',
    name: 'Sandwich Mix',
    category: 'sandwichs',
    description: 'Pain et crudités au choix, steak du boucher (100g), merguez, kebab, frites À L\'INTÉRIEUR du sandwich.',
    price: 16.50,
    uberEatsPrice: 16.50,
    image: '/images/products/sandwich-mix.webp',
    isFeatured: false,
    available: true,
    order: 14,
  },
  {
    id: 'wrap-chicken-patata',
    name: 'WRAP Chicken Patata',
    category: 'sandwichs',
    description: 'Crudités, cheddar, aiguillettes de poulet pané avec sa galette de pommes de terre.',
    price: 13.50,
    uberEatsPrice: 13.50,
    image: '/images/products/wrap-chicken-patata.webp',
    isFeatured: false,
    available: true,
    order: 15,
  },
  
  // ===== TACOS =====
  {
    id: 'tacos-2-viandes',
    name: 'Tacos 2 Viandes',
    category: 'tacos',
    description: 'Galette de blé, 2 viandes au choix, frites, sauce, crudités.',
    price: null, // Price not confirmed - needs verification
    uberEatsPrice: null,
    image: '/images/products/tacos-2-viandes.webp',
    isFeatured: false,
    available: true,
    order: 20,
  },
  
  // ===== BURGERS =====
  {
    id: 'hamburger-fromage-chevre',
    name: 'Hamburger au Fromage de Chèvre',
    category: 'burgers',
    description: 'Pain, steak, fromage de chèvre, crudités, sauce.',
    price: 11.50,
    uberEatsPrice: 11.50,
    image: '/images/products/burger-chevre.webp',
    isFeatured: false,
    available: true,
    order: 25,
  },
  
  // ===== ASSIETTES =====
  // Prices need verification
  {
    id: 'assiette-steak',
    name: 'Assiette Steak',
    category: 'assiettes',
    description: 'Steak du boucher, accompagnements au choix.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/assiette-steak.webp',
    isFeatured: false,
    available: true,
    order: 30,
  },
  
  // ===== PANINIS =====
  // Prices need verification
  {
    id: 'panini-kebab',
    name: 'Panini Kebab',
    category: 'paninis',
    description: 'Pain panini, kebab, fromage, crudités.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/panini-kebab.webp',
    isFeatured: false,
    available: true,
    order: 35,
  },
  
  // ===== SALADES =====
  // Prices need verification
  {
    id: 'salade-kebab',
    name: 'Salade Kebab',
    category: 'salades',
    description: 'Salade verte, tomates, oignons, kebab, sauce.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/salade-kebab.webp',
    isFeatured: false,
    available: true,
    order: 40,
  },
  
  // ===== ACCOMPAGNEMENTS =====
  {
    id: 'frites',
    name: 'Frites',
    category: 'accompagnements',
    description: 'Portion de frites maison.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/frites.webp',
    isFeatured: false,
    available: true,
    order: 45,
  },
  {
    id: 'riz-cambodge',
    name: 'Riz du Cambodge',
    category: 'accompagnements',
    description: 'Riz du Cambodge élu meilleur riz du monde 2025.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/riz.webp',
    isFeatured: false,
    available: true,
    order: 46,
  },
  
  // ===== DESSERTS =====
  // Prices need verification
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    category: 'desserts',
    description: 'Dessert italien classique.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/tiramisu.webp',
    isFeatured: false,
    available: true,
    order: 50,
  },
  
  // ===== BOISSONS =====
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    category: 'boissons',
    description: 'Canette ou bouteille de Coca-Cola.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/coca.webp',
    isFeatured: false,
    available: true,
    order: 55,
  },
  {
    id: 'ice-tea',
    name: 'Ice-Tea',
    category: 'boissons',
    description: 'Thé glacé rafraîchissant.',
    price: null,
    uberEatsPrice: null,
    image: '/images/products/ice-tea.webp',
    isFeatured: false,
    available: true,
    order: 56,
  },
];

// Helper functions
export const getItemsByCategory = (category: string) => {
  return menuItems.filter(item => item.category === category);
};

export const getFeaturedItems = () => {
  return menuItems.filter(item => item.isFeatured);
};

export const getNewItems = () => {
  return menuItems.filter(item => item.isNew);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.isPopular);
};

export const searchItems = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return menuItems.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
};

export const getCategoriesWithItems = () => {
  return menuCategories.filter(category => 
    menuItems.some(item => item.category === category.id)
  );
};

export default menuItems;
