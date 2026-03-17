import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './Certifications.css';

const COLOR_MAP = {
  accent: { icon: 'var(--color-accent)', bg: 'var(--color-accent-dim)', border: 'var(--color-accent-mid)' },
  gold: { icon: 'var(--color-gold)', bg: 'var(--color-gold-dim)', border: 'rgba(240,180,41,0.25)' },
  emerald: { icon: 'var(--color-emerald)', bg: 'var(--color-emerald-dim)', border: 'rgba(16,185,129,0.25)' },
  purple: { icon: 'var(--color-purple)', bg: 'var(--color-purple-dim)', border: 'rgba(139,92,246,0.25)' },
};

const Certifications = () => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Certifications"
            title="Credentials &"
            titleAccent="Learning"
            subtitle="Formal recognition of continuous learning and professional development."
          />
        </AnimatedSection>

        <div className="certifications__grid">
          {certifications.map((cert, i) => {
            const c = COLOR_MAP[cert.color] || COLOR_MAP.accent;
            return (
              <AnimatedSection key={cert.id} delay={i * 0.1}>
                <div
                  className="cert-card"
                  style={{ '--cert-icon': c.icon, '--cert-bg': c.bg, '--cert-border': c.border }}
                >
                  <div className="cert-card__icon">
                    <Award size={22} />
                  </div>
                  <div className="cert-card__content">
                    <h3 className="cert-card__title">{cert.title}</h3>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    <p className="cert-card__date font-mono">{cert.date}</p>
                  </div>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card__link" aria-label="View certificate">
                    <ExternalLink size={15} />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
