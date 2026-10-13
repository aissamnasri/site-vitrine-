import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getAverageRating, getReviewCount, getTopRatedItems } from '../../data/reviews';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const ReviewsSection = () => {
  const averageRating = getAverageRating();
  const reviewCount = getReviewCount();
  const topItems = getTopRatedItems();

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={20} className="text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalfStar && <Star size={20} className="text-yellow-500 fill-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={20} className="text-dark-600" />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="AVIS CLIENTS"
          subtitle="Ce que nos clients pensent de nous"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Overall Rating Card */}
          <motion.div
            className="card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="text-6xl font-bold text-primary-500 mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {averageRating.toFixed(1)}
            </motion.div>
            <motion.div
              className="flex justify-center mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {renderStars(averageRating)}
            </motion.div>
            <motion.p
              className="text-dark-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Basé sur {reviewCount}+ avis
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary-500 font-semibold">Uber Eats</span>
            </motion.div>
          </motion.div>

          {/* Top Rated Items */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Nos plats les mieux notés
            </motion.h3>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {topItems.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-1">
                    <motion.p
                      className="font-semibold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {item.author}
                    </motion.p>
                    <motion.p
                      className="text-sm text-dark-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {item.comment}
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <span className="text-2xl font-bold text-primary-500">
                      {item.rating.toFixed(1)}
                    </span>
                    {renderStars(item.rating)}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA to see more reviews */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Voir tous les avis sur Uber Eats</span>
            <Star size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewsSection;
