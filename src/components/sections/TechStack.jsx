import { techStack } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb,
  SiPostgresql, SiDocker, SiGit, SiTailwindcss, SiFigma,
  SiVercel, SiGraphql
} from 'react-icons/si';
import './TechStack.css';

const ICON_MAP = {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb,
  SiPostgresql, SiDocker, SiGit, SiTailwindcss, SiFigma,
  SiVercel, SiGraphql
};

const TechStack = () => (
  <section id="techstack" className="section section--alt techstack">
    <div className="container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="// Tech Stack"
          title="Tools of"
          titleAccent="the Trade"
          subtitle="The technologies and tools I use daily to build production-grade applications."
        />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="techstack__grid">
          {techStack.map((tech) => {
            const Icon = ICON_MAP[tech.icon];
            return (
              <div key={tech.name} className="tech-badge" title={tech.name}>
                <div className="tech-badge__icon" style={{ color: tech.color }}>
                  {Icon ? <Icon size={28} /> : <span className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 700 }}>{tech.name.charAt(0)}</span>}
                </div>
                <span className="tech-badge__name">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TechStack;
