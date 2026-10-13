import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { menuItems, searchItems } from '../../data/menu';
import { SectionTitle } from '../../components/UI/SectionTitle';
import { ProductCard } from '../../components/UI/ProductCard';
import { CategoryFilter } from '../../components/UI/CategoryFilter';
import type { Category } from '../../types';

export const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let items = menuItems;
    
    // Filter by category
    if (selectedCategory) {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search
    if (searchQuery) {
      items = searchItems(searchQuery);
      // If category is also selected, filter both
      if (selectedCategory) {
        items = items.filter(item => item.category === selectedCategory);
      }
    }
    
    return items;
  }, [selectedCategory, searchQuery]);

  const hasResults = filteredItems.length > 0;

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
            title="NOTRE CARTE"
            subtitle="Découvrez tous nos plats gourmands"
          />
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.01 }}
          >
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500"
            />
            <motion.input
              type="text"
              placeholder="Rechercher un plat..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedCategory(null); // Reset category when searching
              }}
              className="w-full bg-dark-800 border border-dark-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>

        {/* Results */}
        <motion.div
          className="min-h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {hasResults ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.05 }}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProductCard item={item} showCategory showPrice />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Search size={40} className="text-dark-500" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Aucun résultat trouvé
              </motion.h3>
              <motion.p
                className="text-dark-400 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {searchQuery
                  ? `Aucun plat ne correspond à "${searchQuery}". Essayez une autre recherche.`
                  : 'Aucun plat dans cette catégorie pour le moment.'}
              </motion.p>
              {searchQuery && (
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-6 btn-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Effacer la recherche
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuPage;
