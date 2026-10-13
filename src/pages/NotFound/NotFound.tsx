import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Error Code */}
          <motion.div
            className="text-8xl md:text-9xl font-display font-black text-primary-500/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.div>

          {/* Icon */}
          <motion.div
            className="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          >
            <AlertTriangle size={40} className="text-primary-500" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PAGE INTROUVABLE
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-dark-400 mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <Home size={20} />
                <span>Retour à l'accueil</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/carte"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Voir notre carte</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Vous cherchiez peut-être :
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.05 }}
            >
              {[
                { path: '/carte', label: 'Notre Carte' },
                { path: '/specialites', label: 'Nos Spécialités' },
                { path: '/restaurant', label: 'Le Restaurant' },
                { path: '/contact', label: 'Contact' },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.path}
                    className="bg-dark-800 hover:bg-dark-700 text-dark-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
