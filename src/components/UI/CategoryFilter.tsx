import { motion } from 'framer-motion';
import { menuCategories } from '../../data/menu';
import type { Category } from '../../types';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  const handleClick = (category: Category | null) => {
    onSelectCategory(category);
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 mb-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.button
        key="all"
        onClick={() => handleClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
            : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: selectedCategory === null ? 1.05 : 1 }}
      >
        Tous
      </motion.button>

      {menuCategories
        .filter((category) => category.order <= 8) // Limit to main categories
        .map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => handleClick(category.id as Category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: selectedCategory === category.id ? 1.05 : 1 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {category.name}
          </motion.button>
        ))}
    </motion.div>
  );
};

export default CategoryFilter;
