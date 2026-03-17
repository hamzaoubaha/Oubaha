import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';
import './About.css';

const PILLARS = [
  { Icon: Code2, title: "Clean Code", text: "Every line I write is intentional — readable, scalable, and built to last beyond the first sprint." },
  { Icon: Lightbulb, title: "Problem First", text: "I start with deep understanding of the problem before touching any tooling. The best code is the code that solves the right thing." },
  { Icon: Users, title: "User-Centric", text: "I bridge engineering and UX — because powerful software that's frustrating to use is ultimately a failure." },
  { Icon: Zap, title: "Performance", text: "Speed is a feature. I optimize obsessively so users experience the product at its best." },
];

const About = () => (
  <section id="about" className="section section--alt about">
    <div className="container">
      <div className="about__inner">
        {/* Left — Visual */}
        <AnimatedSection direction="left" className="about__visual">
          <div className="about__avatar-wrapper">
            <div className="about__avatar-glow" />
            <div className="about__avatar">
              <div className="about__avatar-initials">HO</div>
            </div>
            {/* Floating stat cards */}
            <div className="about__stat-card about__stat-card--1">
              <span className="about__stat-value gradient-text">5+</span>
              <span className="about__stat-label">Projects</span>
            </div>
            <div className="about__stat-card about__stat-card--2">
              <span className="about__stat-value gradient-text">100%</span>
              <span className="about__stat-label">Learning</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Right — Content */}
        <div className="about__content">
          <AnimatedSection delay={0.1}>
            <SectionHeader
              eyebrow="// About Me"
              title="Building Digital"
              titleAccent="Future"
              align="left"
              subtitle=""
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="about__bio">{personal.bio}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="about__bio">{personal.bioExtended}</p>
          </AnimatedSection>

          {/* Pillars */}
          <AnimatedSection delay={0.3}>
            <div className="about__pillars">
              {PILLARS.map(({ Icon, title, text }) => (
                <div key={title} className="about__pillar">
                  <div className="about__pillar-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="about__pillar-title">{title}</p>
                    <p className="about__pillar-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="about__actions">
              <Button variant="primary" href={personal.social.github} icon={<Code2 size={16} />} iconPosition="left">
                View GitHub
              </Button>
              <Button variant="outline" href={personal.cvUrl} download>
                Download CV
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default About;
