import Services from '../components/sections/Services';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-padding"
    >
      <Services />
      <TechStack />
      <Testimonials />
    </motion.div>
  );
};

export default ServicesPage;
