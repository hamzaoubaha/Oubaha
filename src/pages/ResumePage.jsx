import CV from '../components/sections/CV';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import { motion } from 'framer-motion';

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-padding"
    >
      <CV />
      <Experience />
      <Certifications />
    </motion.div>
  );
};

export default ResumePage;
