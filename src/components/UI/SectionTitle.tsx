import { motion } from 'framer-motion';
import { type Variants } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

export const SectionTitle = ({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}: SectionTitleProps) => {
  return (
    <motion.div className={`text-center ${className}`}>
      <motion.h2
        className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white ${titleClassName}`}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg md:text-xl text-dark-400 max-w-3xl mx-auto ${subtitleClassName}`}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
