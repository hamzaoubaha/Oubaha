import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Stats from '../components/sections/Stats';
import CurrentFocus from '../components/sections/CurrentFocus';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Stats />
      <Skills />
      <CurrentFocus />
    </motion.div>
  );
};

export default Home;
