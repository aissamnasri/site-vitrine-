import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Flame } from 'lucide-react';
import siteContent from '../../data/site-content';

export const SignatureSection = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
                Notre Signature
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {siteContent.signature.title}
            </motion.h2>

            <motion.p
              className="text-lg text-dark-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {siteContent.signature.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/specialites"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Découvrir nos spécialités</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <ChefHat size={20} className="text-primary-500" />
                </div>
                <span className="text-dark-300">Viandes sélectionnées</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <Flame size={20} className="text-primary-500" />
                </div>
                <span className="text-dark-300">Grillades au feu de bois</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <ChefHat size={20} className="text-primary-500" />
                </div>
                <span className="text-dark-300">Sauces maison</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <Flame size={20} className="text-primary-500" />
                </div>
                <span className="text-dark-300">Produits frais</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteContent.signature.image || '/images/gallery/signature-dish.webp'}
                alt="Signature dish de Costa Kebab"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder-signature.webp';
                }}
              />
            </div>
            {/* Decorative border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-primary-500/20 -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SignatureSection;
