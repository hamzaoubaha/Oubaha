import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import ProjectCard from './ProjectCard';
import Button from '../shared/Button';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="featured-projects" className="section section--alt featured-projects">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Selected Work"
            title="Featured"
            titleAccent="Projects"
            subtitle="A curated selection of my most impactful work — from full-stack applications to polished interfaces."
          />
        </AnimatedSection>

        <div className="featured-projects__grid">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.12}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="featured-projects__footer">
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Projects
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProjects;
