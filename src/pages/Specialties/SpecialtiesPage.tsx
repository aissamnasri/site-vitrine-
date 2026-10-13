import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Flame, Star } from 'lucide-react';
import { getNewItems, getPopularItems } from '../../data/menu';
import { SectionTitle } from '../../components/UI/SectionTitle';
import { ProductCard } from '../../components/UI/ProductCard';

export const SpecialtiesPage = () => {
  const newItems = getNewItems();
  const popularItems = getPopularItems().filter(item => !item.isNew);

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
            title="NOS SPÉCIALITÉS"
            subtitle="Les plats qui font notre réputation"
          />
        </motion.div>

        {/* New Items Section */}
        {newItems.length > 0 && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  <ChefHat size={24} className="text-green-500" />
                </motion.div>
                <div>
                  <motion.h2
                    className="text-3xl font-display font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    NOUVEAUTÉS
                  </motion.h2>
                  <motion.p
                    className="text-dark-400"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    Découvrez nos dernières créations
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/carte"
                  className="btn-secondary text-sm"
                >
                  Voir la carte complète
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {newItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard item={item} showCategory showPrice />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Popular Items Section */}
        {popularItems.length > 0 && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
              </motion.div>
              <div>
                <motion.h2
                  className="text-3xl font-display font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  LES PLUS POPULAIRES
                </motion.h2>
                <motion.p
                  className="text-dark-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  Les préférés de nos clients
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {popularItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard item={item} showCategory showPrice />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Signature Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="card p-8 md:p-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            >
              <Flame size={32} className="text-primary-500" />
            </motion.div>
            
            <motion.h2
              className="text-3xl font-display font-bold text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              L'EXPÉRIENCE COSTA KEBAB
            </motion.h2>
            
            <motion.p
              className="text-dark-400 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Chez Costa Kebab, nous mettons tout notre cœur dans chaque plat.
              Nos viandes sont sélectionnées avec soin, nos sauces sont faites maison,
              et chaque détail compte pour vous offrir une expérience culinaire exceptionnelle.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/restaurant"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>En savoir plus sur le restaurant</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default SpecialtiesPage;
