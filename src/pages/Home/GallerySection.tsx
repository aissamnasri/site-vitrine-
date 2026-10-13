import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { getAllGalleryImages } from '../../data/gallery';
import { SectionTitle } from '../../components/UI/SectionTitle';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images = getAllGalleryImages();

  const openLightbox = (index: number) => {
    setSelectedImage(images[index].path);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1].path);
    } else {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1].path);
    }
  };

  return (
    <motion.section
      className="py-20 bg-dark-950/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="GALERIE"
          subtitle="Découvrez notre univers et nos créations"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.path}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder-gallery.webp';
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.h3
                  className="text-white font-semibold"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {image.title}
                </motion.h3>
                <motion.div
                  className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <Maximize2 size={16} className="text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt={images[currentIndex].alt}
                className="w-full rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
              
              {/* Navigation */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-dark-700/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('prev');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} className="text-white" />
              </motion.button>
              
              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-dark-700/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('next');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} className="text-white" />
              </motion.button>

              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-12 h-12 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-dark-700/80 transition-colors"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-white" />
              </motion.button>

              {/* Caption */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white">
                  {images[currentIndex].title}
                </h3>
                <p className="text-dark-400 text-sm mt-1">
                  {images[currentIndex].alt}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GallerySection;
