import { Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import { experience } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './Experience.css';

const TYPE_CONFIG = {
  work: { Icon: Briefcase, color: 'var(--color-accent)', bg: 'var(--color-accent-dim)', border: 'var(--color-accent-mid)' },
  education: { Icon: GraduationCap, color: 'var(--color-emerald)', bg: 'var(--color-emerald-dim)', border: 'rgba(16,185,129,0.25)' },
  learning: { Icon: BookOpen, color: 'var(--color-purple)', bg: 'var(--color-purple-dim)', border: 'rgba(139,92,246,0.25)' },
};

const Experience = () => (
  <section id="experience" className="section section--alt experience">
    <div className="container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="// Journey"
          title="My Professional"
          titleAccent="Timeline"
          subtitle="The path I have walked — from self-study to real-world product delivery."
        />
      </AnimatedSection>

      <div className="timeline">
        {experience.map((item, i) => {
          const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.work;
          const { Icon } = config;
          return (
            <AnimatedSection key={item.id} delay={i * 0.1} direction="left">
              <div className={`timeline-item ${item.highlight ? 'timeline-item--highlight' : ''}`}>
                {/* Year */}
                <div className="timeline-item__year font-mono">{item.year}</div>

                {/* Connector */}
                <div className="timeline-item__connector">
                  <div
                    className="timeline-item__dot"
                    style={{ background: config.color, border: `2px solid ${config.border}`, boxShadow: `0 0 12px ${config.color}40` }}
                  >
                    <Icon size={12} color="#fff" />
                  </div>
                  {i < experience.length - 1 && <div className="timeline-item__line" />}
                </div>

                {/* Card */}
                <div
                  className="timeline-item__card"
                  style={{ '--t-color': config.color, '--t-bg': config.bg, '--t-border': config.border }}
                >
                  <span className="timeline-item__type">
                    <Icon size={12} color={config.color} />
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__org">{item.organization}</p>
                  <p className="timeline-item__desc">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
