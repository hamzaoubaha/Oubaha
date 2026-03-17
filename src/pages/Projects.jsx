import Portfolio from '../components/sections/Portfolio';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CaseStudy from '../components/sections/CaseStudy';
import SectionHeader from '../components/shared/SectionHeader';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-padding"
    >
      <div className="container">
        <SectionHeader 
          eyebrow="// Portfolio"
          title="My Recent"
          titleAccent="Work"
          subtitle="A showcase of my favorite projects, ranging from front-end experiments to full-stack applications."
        />
      </div>
      <Portfolio />
      <FeaturedProjects />
      <CaseStudy />
    </motion.div>
  );
};

export default Projects;
