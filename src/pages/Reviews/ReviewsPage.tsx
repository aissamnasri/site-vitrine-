import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { getAverageRating, getReviewCount, getTopRatedItems } from '../../data/reviews';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const ReviewsPage = () => {
  const averageRating = getAverageRating();
  const reviewCount = getReviewCount();
  const topItems = getTopRatedItems();

  const renderStars = (rating: number, size: number = 20) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={size} className="text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalfStar && <Star size={size} className="text-yellow-500 fill-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-dark-600" />
        ))}
      </div>
    );
  };

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
            title="AVIS CLIENTS"
            subtitle="Découvrez ce que nos clients pensent de Costa Kebab"
          />
        </motion.div>

        {/* Overall Rating */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-7xl md:text-8xl font-bold text-primary-500 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {averageRating.toFixed(1)}
            </motion.div>
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {renderStars(averageRating, 32)}
            </motion.div>
            <motion.p
              className="text-xl text-dark-300 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Basé sur {reviewCount}+ avis
            </motion.p>
            <motion.div
              className="text-primary-500 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Uber Eats
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Rating Breakdown */}
        <motion.section
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Répartition des notes
          </motion.h3>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[5, 4, 3, 2, 1].map((stars, index) => {
              const percentage = Math.max(0, 100 - (5 - stars) * 20);
              return (
                <motion.div
                  key={stars}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex space-x-1 w-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < stars ? 'text-yellow-500 fill-yellow-500' : 'text-dark-600'}
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex-1 h-4 bg-dark-800 rounded-full overflow-hidden"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    />
                  </motion.div>
                  <motion.span
                    className="text-dark-400 text-sm w-12 text-right"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {percentage}%
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Top Rated Items */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Nos plats les mieux notés
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {topItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-start justify-between mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <div>
                    <motion.h4
                      className="text-lg font-bold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      {item.author}
                    </motion.h4>
                    <motion.div
                      className="flex space-x-1 mt-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {renderStars(item.rating, 16)}
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-2xl font-bold text-primary-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.rating.toFixed(1)}
                  </motion.div>
                </motion.div>
                <motion.p
                  className="text-dark-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.comment}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA to External Reviews */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.p
              className="text-dark-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Vous pouvez également consulter nos avis sur les plateformes partenaires
            </motion.p>
            <motion.a
              href="https://www.ubereats.com/fr/store/costa-kebab/_w7CCwSsQGCYLAe-h4bbWg?diningMode=DELIVERY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Voir tous les avis sur Uber Eats</span>
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ReviewsPage;
