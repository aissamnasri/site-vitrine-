import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import restaurantConfig from '../../data/restaurant.config';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Format opening hours for display
  const formatOpeningHours = () => {
    const days = [
      { name: 'Lundi', data: restaurantConfig.openingHours.monday },
      { name: 'Mardi', data: restaurantConfig.openingHours.tuesday },
      { name: 'Mercredi', data: restaurantConfig.openingHours.wednesday },
      { name: 'Jeudi', data: restaurantConfig.openingHours.thursday },
      { name: 'Vendredi', data: restaurantConfig.openingHours.friday },
      { name: 'Samedi', data: restaurantConfig.openingHours.saturday },
      { name: 'Dimanche', data: null },
    ];

    return days.map((day, index) => {
      if (!day.data) {
        return (
          <motion.div key={index} className="text-dark-400">
            {day.name}: Fermé
          </motion.div>
        );
      }
      return (
        <motion.div key={index} className="text-dark-50">
          {day.name}: {day.data.open} - {day.data.close}
        </motion.div>
      );
    });
  };

  return (
    <footer className="bg-dark-1000 border-t border-dark-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="space-y-4">
            <Link to="/" className="block">
              <motion.div
                className="text-3xl font-display font-bold text-primary-500"
                whileHover={{ scale: 1.05 }}
              >
                COSTA
                <span className="block text-sm tracking-widest">KEBAB</span>
              </motion.div>
            </Link>
            <motion.p
              className="text-dark-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Restaurant de restauration rapide à Saint-Médard-en-Jalles
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4">
            <motion.h3
              className="text-xl font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Contact
            </motion.h3>
            
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-dark-300">{restaurantConfig.address}</span>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                  className="text-dark-300 hover:text-primary-500 transition-colors"
                >
                  {restaurantConfig.phone}
                </a>
              </motion.div>
              
              {restaurantConfig.email && (
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <a
                    href={`mailto:${restaurantConfig.email}`}
                    className="text-dark-300 hover:text-primary-500 transition-colors"
                  >
                    {restaurantConfig.email}
                  </a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div className="space-y-4">
            <motion.h3
              className="text-xl font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Horaires
            </motion.h3>
            
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {formatOpeningHours()}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4">
            <motion.h3
              className="text-xl font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Liens Rapides
            </motion.h3>
            
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to="/carte"
                  className="text-dark-300 hover:text-primary-500 transition-colors block"
                >
                  Notre Carte
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to="/specialites"
                  className="text-dark-300 hover:text-primary-500 transition-colors block"
                >
                  Nos Spécialités
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to="/contact"
                  className="text-dark-300 hover:text-primary-500 transition-colors block"
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <a
                  href={restaurantConfig.uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-500 transition-colors block"
                >
                  Commander sur Uber Eats
                </a>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <a
                  href={restaurantConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-500 transition-colors block"
                >
                  Itinéraire Google Maps
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-dark-400 text-sm">
            © {currentYear} Costa Kebab. Tous droits réservés.
          </motion.div>
          
          <motion.div className="flex space-x-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/mentions-legales"
                className="text-dark-400 hover:text-primary-500 transition-colors text-sm"
              >
                Mentions Légales
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/politique-de-confidentialite"
                className="text-dark-400 hover:text-primary-500 transition-colors text-sm"
              >
                Politique de Confidentialité
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
