import { Globe, LayoutTemplate, UserSquare, BarChart3, Webhook, Layers } from 'lucide-react';
import { services } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './Services.css';

const ICONS = [Globe, LayoutTemplate, UserSquare, BarChart3, Webhook, Layers];

const COLOR_MAP = {
  accent: { icon: 'var(--color-accent)', bg: 'var(--color-accent-dim)', border: 'var(--color-accent-mid)' },
  emerald: { icon: 'var(--color-emerald)', bg: 'var(--color-emerald-dim)', border: 'rgba(16,185,129,0.25)' },
  purple: { icon: 'var(--color-purple)', bg: 'var(--color-purple-dim)', border: 'rgba(139,92,246,0.25)' },
  gold: { icon: 'var(--color-gold)', bg: 'var(--color-gold-dim)', border: 'rgba(240,180,41,0.25)' },
};

const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="// Services"
          title="What I can"
          titleAccent="build for you"
          subtitle="From concept to deployment — I cover the full spectrum of modern web development."
        />
      </AnimatedSection>

      <div className="services__grid">
        {services.map((service, i) => {
          const Icon = ICONS[i % ICONS.length];
          const c = COLOR_MAP[service.color] || COLOR_MAP.accent;
          return (
            <AnimatedSection key={service.id} delay={i * 0.08}>
              <div
                className="service-card"
                style={{ '--svc-icon': c.icon, '--svc-bg': c.bg, '--svc-border': c.border }}
              >
                <div className="service-card__icon-wrap">
                  <Icon size={22} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
