import { useEffect, useRef, useState } from 'react';
import { stats } from '../../data/portfolio';
import AnimatedSection from '../shared/AnimatedSection';
import { useInView } from 'framer-motion';
import './Stats.css';

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const cleanValue = value ? value.toString() : "";
  const numericValue = parseInt(cleanValue.replace(/\D/g, ''), 10);
  const suffix = cleanValue.replace(/[0-9]/g, '');
  const isNumeric = !isNaN(numericValue) && cleanValue.match(/\d/);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(numericValue / (duration / 16)) || 1;
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumeric]);

  if (!isNumeric) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => (
  <section id="stats" className="section stats">
    <div className="stats__glow" />
    <div className="container">
      <div className="stats__grid">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1} direction="up">
            <div className="stat-card">
              <div className="stat-card__value gradient-text">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
