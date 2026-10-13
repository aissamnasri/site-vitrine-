import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight, Clock, Package } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const OrderSection = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="COMMANDEZ EN LIGNE"
            subtitle="Vos plats préférés livrés chez vous"
          />

          <motion.div
            className="bg-gradient-primary rounded-2xl p-8 md:p-12 mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
            >
              {/* Feature 1 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <ShoppingCart size={32} className="text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Commande facile
                </motion.h3>
                <motion.p
                  className="text-white/80 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Parcourez notre menu complet et choisissez vos plats préférés
                </motion.p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Clock size={32} className="text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Livraison rapide
                </motion.h3>
                <motion.p
                  className="text-white/80 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Livraison via Uber Eats à Saint-Médard-en-Jalles
                </motion.p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Package size={32} className="text-white" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Emporté disponible
                </motion.h3>
                <motion.p
                  className="text-white/80 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Passez commander sur place et emportez vos plats
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={restaurantConfig.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg py-4 px-10 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Commander sur Uber Eats</span>
                <ArrowRight size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OrderSection;
