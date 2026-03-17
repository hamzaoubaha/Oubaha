import { useState } from 'react';
import { projects, projectCategories } from '../../data/portfolio';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../shared/AnimatedSection';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section portfolio">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="// Portfolio"
            title="All"
            titleAccent="Projects"
            subtitle="Every project I have shipped — filterable by category."
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="portfolio__filters" role="tablist">
            {projectCategories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`portfolio__filter-btn ${activeFilter === cat ? 'portfolio__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="portfolio__empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
