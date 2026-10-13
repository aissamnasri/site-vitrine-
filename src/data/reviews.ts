import type { Review } from '../types';

// Reviews from Uber Eats (verified from the page)
// Note: These are actual ratings from Uber Eats, but individual comments may not be accessible
// We should only display aggregated information unless we have explicit permission

const reviews: Review[] = [
  // Aggregated review - this represents the overall rating
  {
    id: 'uber-eats-aggregate',
    source: 'uber-eats',
    rating: 4.75,
    author: 'Note moyenne Uber Eats',
    date: '2024-10-13',
    comment: 'Basé sur plus de 3000 avis. Le restaurant est apprécié pour ses spécialités de grillades et sandwichs, reflétant une ambiance conviviale et décontractée.',
    url: 'https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY',
  },
  
  // Popular items ratings (from Uber Eats)
  {
    id: 'sandwich-kebab-rating',
    source: 'uber-eats',
    rating: 4.95,
    author: 'Avis clients - Sandwich au Kebab',
    date: '2024-10-13',
    comment: 'Note moyenne de 95% (1469 avis). Le plat le plus aimé du restaurant.',
    url: 'https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY',
  },
  {
    id: 'tacos-1-viande-rating',
    source: 'uber-eats',
    rating: 4.93,
    author: 'Avis clients - Tacos 1 Viande',
    date: '2024-10-13',
    comment: 'Note moyenne de 93% (385 avis). Un des plats phares.',
    url: 'https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY',
  },
  {
    id: 'assiette-kebab-rating',
    source: 'uber-eats',
    rating: 4.96,
    author: 'Avis clients - Assiette Kebab',
    date: '2024-10-13',
    comment: 'Note moyenne de 96% (311 avis). Parfait pour ceux qui veulent un repas complet.',
    url: 'https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY',
  },
];

// Helper functions
export const getAverageRating = () => {
  const validReviews = reviews.filter(r => r.source === 'uber-eats' && r.rating);
  if (validReviews.length === 0) return 0;
  const sum = validReviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / validReviews.length;
};

export const getReviewCount = () => {
  // From Uber Eats: 3000+ reviews
  return 3000;
};

export const getTopRatedItems = () => {
  return reviews.filter(r => r.id.endsWith('-rating'));
};

export default reviews;
