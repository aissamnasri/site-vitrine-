import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation2 } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const LocationSection = () => {

  return (
    <motion.section
      className="py-20 bg-dark-950/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="OÙ NOUS TROUVER ?"
          subtitle="Retrouvez-nous à Saint-Médard-en-Jalles"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Map Placeholder */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=44.8814,-0.6845&zoom=15&size=800x600&maptype=roadmap&markers=color:red%7C44.8814,-0.6845&key=AIzaSyD3YvL3q5ZJ8mQ4J5J5J5`}
              alt="Carte Google Maps - Costa Kebab"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to a placeholder
                (e.target as HTMLImageElement).src = '/images/map-placeholder.webp';
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark-1000/60 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Address */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <MapPin size={24} className="text-primary-500" />
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Adresse
                </motion.h3>
                <motion.p
                  className="text-dark-300 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  {restaurantConfig.address}
                </motion.p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <Phone size={24} className="text-primary-500" />
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Téléphone
                </motion.h3>
                <motion.a
                  href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                  className="text-primary-500 text-lg font-semibold hover:text-primary-400 transition-colors block mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  {restaurantConfig.phone}
                </motion.a>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <Clock size={24} className="text-primary-500" />
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Horaires
                </motion.h3>
                <motion.div
                  className="text-dark-300 mt-1 space-y-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <p>Lundi au Samedi: 11h30 - 14h00</p>
                  <p>Lundi au Samedi: 18h00 - 21h30/22h00</p>
                  <p className="text-dark-500">Dimanche: Fermé</p>
                  <motion.p
                    className="text-xs text-dark-500 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    *Horaires à confirmer avec le restaurant
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={restaurantConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation2 size={20} />
                <span>Itinéraire Google Maps</span>
              </motion.a>
              <motion.a
                href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Appeler</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LocationSection;
