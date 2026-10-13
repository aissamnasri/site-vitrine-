import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { FloatingOrderButton } from '../UI/FloatingOrderButton';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      
      <Footer />
      
      {/* Floating Order Button for Mobile */}
      <FloatingOrderButton />
    </div>
  );
};

export default Layout;
