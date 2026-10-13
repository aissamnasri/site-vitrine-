// Restaurant Configuration Types
export interface RestaurantConfig {
  name: string;
  address: string;
  phone: string;
  email?: string;
  siret?: string;
  googleMapsUrl: string;
  uberEatsUrl: string;
  
  // Opening hours
  openingHours: {
    monday?: { open: string; close: string };
    tuesday?: { open: string; close: string };
    wednesday?: { open: string; close: string };
    thursday?: { open: string; close: string };
    friday?: { open: string; close: string };
    saturday?: { open: string; close: string };
    sunday?: { open: string; close: string };
  };
  
  // Service types
  services: {
    dineIn: boolean;
    takeaway: boolean;
    delivery: boolean;
  };
  
  // Social media (to be confirmed)
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

// Menu Types
export type Category = 
  | 'kebabs'
  | 'sandwichs'
  | 'tacos'
  | 'burgers'
  | 'assiettes'
  | 'paninis'
  | 'formules'
  | 'salades'
  | 'accompagnements'
  | 'desserts'
  | 'boissons';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number | null; // null if price not confirmed
  uberEatsPrice?: number | null;
  image?: string; // Path to image in public folder
  isFeatured: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  tags?: string[];
  available: boolean;
  order: number;
}

export interface MenuCategory {
  id: Category;
  name: string;
  description?: string;
  order: number;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  title: string;
  path: string;
  category: 'product' | 'restaurant' | 'interior' | 'exterior';
  alt: string;
  order: number;
}

// Review Types
export interface Review {
  id: string;
  source: 'google' | 'uber-eats' | 'manual';
  rating: number;
  author: string;
  date: string;
  comment: string;
  url?: string;
}

// Site Content Types
export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  signature: {
    title: string;
    description: string;
    image?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}
