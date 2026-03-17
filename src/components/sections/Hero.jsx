import { ArrowRight, Download, Mail, MapPin, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { personal } from '../../data/portfolio';
import Button from '../shared/Button';
import './Hero.css';

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section noise-bg">
      {/* Background glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="grid-bg" />

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__badge"
          >
            <Circle size={8} className="hero__badge-dot" />
            <span>Available for new projects</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero__name"
          >
            I'm <span className="gradient-text">{personal.name}</span>,
            <br />
            <span className="hero__name-role">{personal.role}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="hero__tagline"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="hero__cta"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => handleScroll('#projects')}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Download size={18} />}
              href={personal.cvUrl}
              download
            >
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="lg"
              icon={<Mail size={16} />}
              onClick={() => handleScroll('#contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="hero__location"
          >
            <MapPin size={14} />
            {personal.location}
          </motion.p>
        </div>

        {/* Right side — code card visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__visual"
        >
          <div className="code-card">
            <div className="code-card__header">
              <span className="code-card__dot code-card__dot--red" />
              <span className="code-card__dot code-card__dot--yellow" />
              <span className="code-card__dot code-card__dot--green" />
              <span className="code-card__filename font-mono">developer.js</span>
            </div>
            <div className="code-card__body font-mono">
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span>{' '}
                <span className="code-op">=</span>{' '}
                <span className="code-brace">{'{'}</span>
              </div>
              <div className="code-line code-line--indent">
                <span className="code-key">name</span>
                <span className="code-op">:</span>{' '}
                <span className="code-str">"{personal.name}"</span>,
              </div>
              <div className="code-line code-line--indent">
                <span className="code-key">role</span>
                <span className="code-op">:</span>{' '}
                <span className="code-str">"{personal.role}"</span>,
              </div>
              <div className="code-line code-line--indent">
                <span className="code-key">skills</span>
                <span className="code-op">:</span>{' '}
                <span className="code-brace">[</span>
                <span className="code-str">"React"</span>,{' '}
                <span className="code-str">"JavaScript"</span>,{' '}
                <span className="code-str">"Laravel"</span>
                <span className="code-brace">]</span>,
              </div>
              <div className="code-line code-line--indent">
                <span className="code-key">available</span>
                <span className="code-op">:</span>{' '}
                <span className="code-bool">true</span>,
              </div>
              <div className="code-line">
                <span className="code-brace">{'}'}</span>
                <span className="code-op">;</span>
              </div>
              <div className="code-line code-empty" />
              <div className="code-line">
                <span className="code-fn">console</span>
                <span className="code-op">.</span>
                <span className="code-method">log</span>
                <span className="code-brace">(</span>
                <span className="code-str">"Learning & Building."</span>
                <span className="code-brace">)</span>
                <span className="code-op">;</span>
              </div>
            </div>
            {/* Floating badges */}
            <div className="hero__badge-float hero__badge-float--1">
              <span className="code-str font-mono">React</span>
            </div>
            <div className="hero__badge-float hero__badge-float--2">
              <span className="code-bool font-mono">Laravel</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hero__scroll-hint"
      >
        <div className="hero__scroll-line" />
        <span className="font-mono">scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
