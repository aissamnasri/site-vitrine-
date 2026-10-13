import { motion } from 'framer-motion';
import { type MenuItem } from '../../types';
import { Star } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';

interface ProductCardProps {
  item: MenuItem;
  showCategory?: boolean;
  showPrice?: boolean;
  compact?: boolean;
}

export const ProductCard = ({
  item,
  showCategory = true,
  showPrice = true,
  compact = false,
}: ProductCardProps) => {
  const priceDisplay = item.price !== null ? `${item.price.toFixed(2)} €` : 'Prix sur demande';

  return (
    <motion.div
      className={`card card-hover ${compact ? 'w-full' : 'w-full md:w-[300px]'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden h-48 md:h-56"
        whileHover={{ scale: 1.05 }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-product.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
            <span className="text-dark-500 text-sm">Image à venir</span>
          </div>
        )}
        
        {/* Badges */}
        <motion.div
          className="absolute top-3 left-3 flex flex-col space-y-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {item.isFeatured && (
            <motion.span
              className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              Phare
            </motion.span>
          )}
          {item.isNew && (
            <motion.span
              className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              NOUVEAU
            </motion.span>
          )}
          {item.isPopular && (
            <motion.span
              className="bg-yellow-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              Populaire
            </motion.span>
          )}
          {item.tags?.includes('végétarien') && (
            <motion.span
              className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              Végétarien
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="p-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            {showCategory && (
              <motion.p
                className="text-xs text-primary-500 font-semibold uppercase tracking-wider mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {item.category}
              </motion.p>
            )}
            <motion.h3
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {item.name}
            </motion.h3>
          </div>
          
          {/* Rating - if available */}
          {item.isPopular && (
            <motion.div
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-yellow-500">95%</span>
            </motion.div>
          )}
        </div>

        <motion.p
          className="text-dark-400 text-sm mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {showPrice && (
            <span className="text-2xl font-bold text-primary-500">
              {priceDisplay}
            </span>
          )}
          
          <motion.a
            href={restaurantConfig.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commander
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
