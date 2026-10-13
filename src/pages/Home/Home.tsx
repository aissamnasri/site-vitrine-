import { motion } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { FeaturedProducts } from './FeaturedProducts';
import { SignatureSection } from './SignatureSection';
import { GallerySection } from './GallerySection';
import { ReviewsSection } from './ReviewsSection';
import { LocationSection } from './LocationSection';
import { OrderSection } from './OrderSection';

export const Home = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedProducts />
      <SignatureSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <OrderSection />
    </motion.div>
  );
};

export default Home;
