import type { GalleryImage } from '../types';

// Gallery images - placeholder paths
// These need to be replaced with actual restaurant photos
const galleryImages: GalleryImage[] = [
  // Hero/Featured
  {
    id: 'hero-main',
    title: 'Spécialité Costa Kebab',
    path: '/images/gallery/hero-main.webp',
    category: 'product',
    alt: 'Plat signature de Costa Kebab avec kebab, frites et accompagnements',
    order: 1,
  },
  
  // Products
  {
    id: 'product-kebab',
    title: 'Kebab Traditionnel',
    path: '/images/gallery/kebab-traditionnel.webp',
    category: 'product',
    alt: 'Kebab traditionnel préparé avec soin',
    order: 2,
  },
  {
    id: 'product-tacos',
    title: 'Tacos Français',
    path: '/images/gallery/tacos-francais.webp',
    category: 'product',
    alt: 'Tacos français garni avec viande, frites et sauce',
    order: 3,
  },
  {
    id: 'product-burger',
    title: 'Burger Maison',
    path: '/images/gallery/burger-maison.webp',
    category: 'product',
    alt: 'Burger maison avec steak, fromage et garnitures fraîches',
    order: 4,
  },
  {
    id: 'product-assiette',
    title: 'Assiette Complète',
    path: '/images/gallery/assiette-complete.webp',
    category: 'product',
    alt: 'Assiette complète avec viande, riz et accompagnements',
    order: 5,
  },
  {
    id: 'product-poulet-crousty',
    title: 'Poulet Crousty',
    path: '/images/gallery/poulet-crousty.webp',
    category: 'product',
    alt: 'Poulet Crousty avec riz du Cambodge et sauce maison',
    order: 6,
  },
  
  // Restaurant Exterior
  {
    id: 'restaurant-exterior-1',
    title: 'Façade du Restaurant',
    path: '/images/gallery/restaurant-exterior-1.webp',
    category: 'exterior',
    alt: 'Façade du restaurant Costa Kebab à Saint-Médard-en-Jalles',
    order: 10,
  },
  {
    id: 'restaurant-exterior-2',
    title: 'Entrée du Restaurant',
    path: '/images/gallery/restaurant-exterior-2.webp',
    category: 'exterior',
    alt: 'Entrée principale de Costa Kebab',
    order: 11,
  },
  
  // Restaurant Interior
  {
    id: 'restaurant-interior-1',
    title: 'Intérieur du Restaurant',
    path: '/images/gallery/restaurant-interior-1.webp',
    category: 'interior',
    alt: 'Salle intérieure de Costa Kebab avec comptoir',
    order: 20,
  },
  {
    id: 'restaurant-interior-2',
    title: 'Espace Client',
    path: '/images/gallery/restaurant-interior-2.webp',
    category: 'interior',
    alt: 'Espace client avec tables et chaises',
    order: 21,
  },
  {
    id: 'restaurant-interior-3',
    title: 'Cuisine Ouverte',
    path: '/images/gallery/restaurant-interior-3.webp',
    category: 'interior',
    alt: 'Vue sur la cuisine ouverte et le grill',
    order: 22,
  },
];

// Helper functions
export const getGalleryByCategory = (category: string) => {
  return galleryImages.filter(img => img.category === category);
};

export const getAllGalleryImages = () => {
  return galleryImages.sort((a, b) => a.order - b.order);
};

export default galleryImages;
