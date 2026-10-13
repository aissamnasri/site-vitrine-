import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChefHat, Users, Heart } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const RestaurantPage = () => {
  return (
    <motion.div
      className="min-h-screen py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="LE RESTAURANT"
            subtitle="Découvrez notre histoire et notre passion"
          />
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden h-80 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/restaurant/exterior-main.webp"
            alt="Façade du restaurant Costa Kebab"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-restaurant.webp';
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-1000/80 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-8 left-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              COSTA KEBAB
            </motion.h2>
            <motion.p
              className="text-dark-300 mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Depuis 2019 à Saint-Médard-en-Jalles
            </motion.p>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              NOTRE HISTOIRE
            </motion.h3>
            <motion.p
              className="text-dark-400 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Implanté à Saint-Médard-en-Jalles en Gironde, COSTA KEBAB est spécialisé
              dans la restauration rapide sur place ou à emporter. Nous vous servons des
              recettes savoureuses dans une ambiance agréable.
            </motion.p>
            <motion.p
              className="text-dark-400 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Que vous soyez pressés ou non, nous serons ravis de vous faire découvrir
              notre cuisine. Nous vous proposons aussi les plats à emporter et pouvons
              préparer assiettes ou sandwichs.
            </motion.p>
            <motion.p
              className="text-dark-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Notre restaurant est l'endroit idéal si vous souhaitez déguster un délicieux
              et authentique plat. Depuis sa création, nous ne cessons de développer notre
              savoir-faire culinaire, afin de répondre à vos demandes. Tous nos plats sont
              concoctés à base de produits frais et nos services soignés.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <ChefHat size={24} className="text-primary-500" />
                </motion.div>
                <div>
                  <motion.h4
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Savoir-faire culinaire
                  </motion.h4>
                  <motion.p
                    className="text-dark-400 mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Des années d'expérience au service de la qualité
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Users size={24} className="text-green-500" />
                </motion.div>
                <div>
                  <motion.h4
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Ambiance conviviale
                  </motion.h4>
                  <motion.p
                    className="text-dark-400 mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Une atmosphère chaleureuse pour un repas agréable
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Heart size={24} className="text-red-500 fill-red-500" />
                </motion.div>
                <div>
                  <motion.h4
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Produits frais
                  </motion.h4>
                  <motion.p
                    className="text-dark-400 mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Des ingrédients sélectionnés pour des plats savoureux
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-display font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NOTRE RESTAURANT EN IMAGES
          </motion.h3>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {[
              '/images/restaurant/exterior-1.webp',
              '/images/restaurant/exterior-2.webp',
              '/images/restaurant/interior-1.webp',
              '/images/restaurant/interior-2.webp',
              '/images/restaurant/interior-3.webp',
              '/images/restaurant/grill.webp',
            ].map((src, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden h-64"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={src}
                  alt={`Photo du restaurant ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder-gallery.webp';
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section
          className="card p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-display font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NOUS CONTACTER
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {/* Address */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <MapPin size={28} className="text-primary-500" />
              </motion.div>
              <motion.h4
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Adresse
              </motion.h4>
              <motion.p
                className="text-dark-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {restaurantConfig.address}
              </motion.p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <Phone size={28} className="text-green-500" />
              </motion.div>
              <motion.h4
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Téléphone
              </motion.h4>
              <motion.a
                href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                className="text-primary-500 font-semibold hover:text-primary-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {restaurantConfig.phone}
              </motion.a>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <Clock size={28} className="text-yellow-500" />
              </motion.div>
              <motion.h4
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                Horaires
              </motion.h4>
              <motion.div
                className="text-dark-400 space-y-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <p>Lun-Sam: 11h30-14h00</p>
                <p>Lun-Sam: 18h00-21h30/22h00</p>
                <p className="text-dark-500">Dimanche: Fermé</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Plus d'informations</span>
                <MapPin size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default RestaurantPage;
