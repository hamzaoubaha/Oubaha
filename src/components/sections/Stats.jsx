import { useEffect, useRef, useState } from 'react';
import { stats } from '../../data/portfolio';
import './Stats.css';

const AnimatedCounter = ({ value, isPrimaryGroup }) => {
  const [count, setCount] = useState(0);

  const cleanValue = value ? value.toString() : "";
  const numericValue = parseInt(cleanValue.replace(/\D/g, ''), 10);
  const suffix = cleanValue.replace(/[0-9]/g, '');
  const isNumeric = !isNaN(numericValue) && cleanValue.match(/\d/);

  useEffect(() => {
    // Return early INSIDE the hook if not numeric or not primary, 
    // avoiding the "changing size of dependency array" React error.
    if (!isNumeric) return;
    
    if (!isPrimaryGroup) {
      setCount(numericValue);
      return;
    }

    let start = 0;
    const duration = 1800; // 1.8 seconds max
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
  }, []); // Empty dependency array prevents loops and re-renders entirely

  if (!isNumeric) return <span>{value}</span>;
  return <span>{count}{suffix}</span>;
};

const MarqueeGroup = ({ statsData, groupIndex }) => (
  <div className="stats__marquee-group" aria-hidden={groupIndex > 0}>
    {statsData.map((stat, i) => (
      <div key={`group-${groupIndex}-${stat.label}-${i}`} className="stat-card">
        <div className="stat-card__value gradient-text">
          <AnimatedCounter value={stat.value} isPrimaryGroup={groupIndex === 0} />
        </div>
        <div className="stat-card__label">{stat.label}</div>
      </div>
    ))}
  </div>
);

const Stats = () => {
  return (
    <section id="stats" className="section stats">
      <div className="stats__glow" />
      <div className="container">
        <div className="stats__marquee-container">
          <MarqueeGroup statsData={stats} groupIndex={0} />
          <MarqueeGroup statsData={stats} groupIndex={1} />
          <MarqueeGroup statsData={stats} groupIndex={2} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
