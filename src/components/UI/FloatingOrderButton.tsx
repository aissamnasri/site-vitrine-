import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import restaurantConfig from '../../data/restaurant.config';

export const FloatingOrderButton = () => {
  return (
    <motion.a
      href={restaurantConfig.uberEatsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      <motion.div
        className="bg-gradient-primary rounded-full p-4 shadow-2xl shadow-primary-500/40"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <ShoppingCart size={28} className="text-white" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingOrderButton;
