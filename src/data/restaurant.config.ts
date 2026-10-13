import type { RestaurantConfig } from '../types';

const restaurantConfig: RestaurantConfig = {
  name: 'COSTA KEBAB',
  address: '54 Avenue Montesquieu, 33160 Saint-Médard-en-Jalles, France',
  phone: '05 56 05 92 38',
  email: 'vamvakasconstantinos@gmail.com',
  siret: '42860966300011',
  googleMapsUrl: 'https://maps.app.goo.gl/zedDZSEJpHex6FCGA',
  uberEatsUrl: 'https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY',
  
  openingHours: {
    monday: { open: '11:30', close: '14:00' },
    tuesday: { open: '11:30', close: '14:00' },
    wednesday: { open: '11:30', close: '14:00' },
    thursday: { open: '11:30', close: '14:00' },
    friday: { open: '11:30', close: '14:00' },
    saturday: { open: '11:30', close: '14:00' },
    // Evening service
    // Note: Based on site info, evening service is 18:00-21:30/22:00
    // Need confirmation on exact days
  },
  
  // Evening hours (to be confirmed - from site: 18h00 à 21h30/22h00)
  // This needs clarification from restaurant
  
  services: {
    dineIn: true,
    takeaway: true,
    delivery: true, // Via Uber Eats
  },
  
  // Social media - TO BE CONFIRMED
  socialMedia: {
    // No verified social media found during analysis
    // These are placeholders - need confirmation
    // facebook: '',
    // instagram: '',
  },
};

// Evening opening hours - needs confirmation
export const eveningOpeningHours = {
  monday: { open: '18:00', close: '21:30' },
  tuesday: { open: '18:00', close: '21:30' },
  wednesday: { open: '18:00', close: '21:30' },
  thursday: { open: '18:00', close: '21:30' },
  friday: { open: '18:00', close: '22:00' },
  saturday: { open: '18:00', close: '22:00' },
  sunday: null, // Closed on Sunday
};

export default restaurantConfig;
