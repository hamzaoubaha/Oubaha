import { skills } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './Skills.css';

const COLOR_MAP = {
  accent: { bg: 'var(--color-accent-dim)', border: 'var(--color-accent-mid)', text: 'var(--color-accent)' },
  emerald: { bg: 'var(--color-emerald-dim)', border: 'rgba(16,185,129,0.25)', text: 'var(--color-emerald)' },
  purple: { bg: 'var(--color-purple-dim)', border: 'rgba(139,92,246,0.25)', text: 'var(--color-purple)' },
  gold: { bg: 'var(--color-gold-dim)', border: 'rgba(240,180,41,0.25)', text: 'var(--color-gold)' },
};

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="// Skills"
          title="What I work"
          titleAccent="with"
          subtitle="A constantly evolving toolkit, organized by domain — from frontend interfaces to backend infrastructure."
        />
      </AnimatedSection>

      <div className="skills__grid">
        {skills.map(({ category, color, items }, i) => {
          const c = COLOR_MAP[color] || COLOR_MAP.accent;
          return (
            <AnimatedSection key={category} delay={i * 0.1}>
              <div className="skill-card" style={{ '--card-accent': c.text, '--card-bg': c.bg, '--card-border': c.border }}>
                <div className="skill-card__header">
                  <span className="skill-card__dot" />
                  <h3 className="skill-card__category">{category}</h3>
                </div>
                <div className="skill-card__items">
                  {items.map(item => (
                    <span key={item} className="skill-card__item">{item}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
