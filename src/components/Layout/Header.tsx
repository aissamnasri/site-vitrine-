import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import restaurantConfig from '../../data/restaurant.config';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/carte', label: 'Notre Carte' },
    { path: '/specialites', label: 'Nos Spécialités' },
    { path: '/restaurant', label: 'Le Restaurant' },
    { path: '/avis', label: 'Avis Clients' },
    { path: '/contact', label: 'Contact / Accès' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-1000/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-display font-bold text-primary-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              COSTA
              <span className="block text-xs tracking-widest">KEBAB</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className="text-dark-50 hover:text-primary-500 transition-colors duration-300 font-medium relative"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-dark-50 hover:text-primary-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <span className="hidden lg:inline">Appeler</span>
            </motion.a>
            
            <motion.a
              href={restaurantConfig.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={20} />
              <span>Commander</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-dark-950/98 backdrop-blur-lg fixed inset-0 top-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="text-2xl font-bold text-dark-50 hover:text-primary-500 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-6 border-t border-dark-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <motion.a
                    href={`tel:${restaurantConfig.phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-3 text-xl text-dark-50 hover:text-primary-500 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone size={24} />
                    <span>Appeler</span>
                  </motion.a>
                  
                  <motion.a
                    href={restaurantConfig.uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-xl text-dark-50 hover:text-primary-500 transition-colors duration-300 mt-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ShoppingCart size={24} />
                    <span>Commander sur Uber Eats</span>
                  </motion.a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
