import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedItems } from '../../data/menu';
import { SectionTitle } from '../../components/UI/SectionTitle';
import { ProductCard } from '../../components/UI/ProductCard';

export const FeaturedProducts = () => {
  const featuredItems = getFeaturedItems();

  return (
    <motion.section
      className="py-20 bg-dark-950/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="NOS INCONTOURNABLES"
            subtitle="Les plats qui font la différence chez Costa Kebab"
          />
          
          <motion.div
            className="mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/carte"
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-400 font-semibold transition-colors"
            >
              <span>Voir toute la carte</span>
              <ArrowRight size={18} />
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
          {featuredItems.map((item, index) => (
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
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;
