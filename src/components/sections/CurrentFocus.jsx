import { Flame } from 'lucide-react';
import { currentFocus } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import './CurrentFocus.css';

const COLORS = ['var(--color-accent)', 'var(--color-emerald)', 'var(--color-purple)'];
const BG = ['var(--color-accent-dim)', 'var(--color-emerald-dim)', 'var(--color-purple-dim)'];
const BORDER = ['var(--color-accent-mid)', 'rgba(16,185,129,0.25)', 'rgba(139,92,246,0.25)'];

const CurrentFocus = () => (
  <section id="focus" className="section section--alt current-focus">
    <div className="container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="// Currently"
          title="What I'm Focused"
          titleAccent="On"
          subtitle="What I am actively learning, building, and exploring right now."
        />
      </AnimatedSection>

      <div className="focus__inner">
        <div className="focus__pulse">
          <div className="focus__pulse-ring" />
          <div className="focus__pulse-core">
            <Flame size={24} color="var(--color-accent)" />
          </div>
        </div>

        <div className="focus__cards">
          {currentFocus.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12} direction="right">
              <div
                className="focus-card"
                style={{ '--fc-color': COLORS[i], '--fc-bg': BG[i], '--fc-border': BORDER[i] }}
              >
                <div className="focus-card__label font-mono">{item.title}</div>
                <p className="focus-card__text">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CurrentFocus;
